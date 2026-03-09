import axios from "axios";
import fs from "fs";
import unzipper from "unzipper";
import { pipeline } from "stream/promises";
import path from "path";
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


/* ---------- SAFE COPY FUNCTION ---------- */

function copyRecursive(src, dest) {

    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }

    const entries = fs.readdirSync(src, { withFileTypes: true });

    for (const entry of entries) {

        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);

        /* skip unwanted folders */
        if (
            srcPath.includes("node_modules") ||
            srcPath.includes(".git") ||
            srcPath.includes("session") ||
            srcPath.includes("auth")
        ) continue;

        if (entry.isDirectory()) {

            copyRecursive(srcPath, destPath);

        } else {

            fs.copyFileSync(srcPath, destPath);

        }
    }
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

            /* ---------- CHECK ---------- */

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


            /* ---------- INSTALL ---------- */

            if (action === "install") {

                await send("⬇️ Installing update...");

                const data = await getLatestCommit();
                const latestCommit = data.sha;

                /* download repo */

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


                /* copy files safely */

                copyRecursive(extracted, "./");


                /* cleanup */

                fs.rmSync("./update-temp", { recursive: true, force: true });


                /* save commit */

                fs.writeFileSync(COMMIT_FILE, latestCommit);


                /* install dependencies */

                await execPromise("npm install --omit=dev").catch(() => {});


                await send("✅ Update complete. Restarting...");

                await new Promise(r => setTimeout(r, 1000));


                process.exit(1);
            }

        } catch (err) {

            await send(`❌ Update failed\n${err.message}`);

        }
    }
};
