import axios from "axios";
import fs from "fs";
import unzipper from "unzipper";
import fsExtra from "fs-extra";
import { pipeline } from "stream/promises";
import { exec } from "child_process";
import util from "util";

const execPromise = util.promisify(exec);

const OWNER = "Brashokish";
const REPO = "Kish-MD";
const BRANCH = "main";

const COMMIT_FILE = "./last_commit.txt";

async function getLatestCommit() {
    const { data } = await axios.get(
        `https://api.github.com/repos/${OWNER}/${REPO}/commits/${BRANCH}`
    );
    return data;
}

export default {
    name: "update",
    aliases: ["upgrade"],
    description: "Check or install bot updates",
    owner: true,

    async execute(sock, m, args) {

        const send = (text) =>
            sock.sendMessage(m.from, { text }, { quoted: m });

        const action = args[0];

        try {

            /* ---------- CHECK FOR UPDATE ---------- */

            if (!action || action === "check") {

                await send("🔍 Checking updates...");

                const data = await getLatestCommit();
                const latestCommit = data.sha;

                let savedCommit = null;
                if (fs.existsSync(COMMIT_FILE)) {
                    savedCommit = fs.readFileSync(COMMIT_FILE, "utf8").trim();
                }

                if (savedCommit === latestCommit) {
                    return send("✅ Bot is already up to date.");
                }

                return send(
`📦 Update available

${data.commit.message}

Type *.update install* to update`
                );
            }

            /* ---------- INSTALL UPDATE ---------- */

            if (action === "install") {

                await send("⬇️ Installing update...");

                const data = await getLatestCommit();
                const latestCommit = data.sha;

                /* download repo zip */

                const response = await axios({
                    url: `https://github.com/${OWNER}/${REPO}/archive/refs/heads/${BRANCH}.zip`,
                    method: "GET",
                    responseType: "stream"
                });

                await pipeline(
                    response.data,
                    fs.createWriteStream("./update.zip")
                );

                /* extract */

                await fs.createReadStream("./update.zip")
                    .pipe(unzipper.Extract({ path: "./update-temp" }))
                    .promise();

                fs.unlinkSync("./update.zip");

                const extracted = `./update-temp/${REPO}-${BRANCH}`;

                /* replace current files */

                await fsExtra.copy(extracted, "./", {
                    overwrite: true,
                    filter: (src) =>
                        !src.includes("node_modules") &&
                        !src.includes(".git")
                });

                /* cleanup */

                fsExtra.removeSync("./update-temp");

                /* save new commit */

                fs.writeFileSync(COMMIT_FILE, latestCommit);

                /* install dependencies */

                await execPromise("npm install --omit=dev").catch(()=>{});

                await send("✅ Update complete. Restarting...");

                // give time for message to send
                await new Promise(r => setTimeout(r, 800));

                // crash so panel restarts bot
                process.exit(1);
            }

        } catch (err) {

            await send(`❌ Update failed\n${err.message}`);

        }
    }
};
