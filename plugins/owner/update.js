import axios from "axios";
import fs from "fs";
import path from "path";
import AdmZip from "adm-zip";
import { exec } from "child_process";

const OWNER = "Brashokish";
const REPO = "Kish-MD";
const BRANCH = "main";

const REPO_URL = `https://github.com/${OWNER}/${REPO}/archive/${BRANCH}.zip`;
const COMMIT_FILE = "./last_commit.txt";

function copyFolderSync(src, dest, exclude = []) {

    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }

    const entries = fs.readdirSync(src);

    for (const entry of entries) {

        const srcPath = path.join(src, entry);
        const destPath = path.join(dest, entry);

        if (exclude.some(e => srcPath.includes(e))) continue;

        const stat = fs.statSync(srcPath);

        if (stat.isDirectory()) {

            copyFolderSync(srcPath, destPath, exclude);

        } else {

            fs.copyFileSync(srcPath, destPath);

        }
    }
}

export default {
    name: "update",
    aliases: ["upgrade","sync"],
    owner: true,

    async execute(sock, m) {

        const send = (text) =>
            sock.sendMessage(m.from,{ text },{ quoted: m });

        try {

            await send("🔍 Checking for updates...");

            const { data } = await axios.get(
                `https://api.github.com/repos/${OWNER}/${REPO}/commits/${BRANCH}`
            );

            const latestCommit = data.sha;

            let currentCommit = null;

            if (fs.existsSync(COMMIT_FILE)) {
                currentCommit = fs.readFileSync(COMMIT_FILE,"utf8");
            }

            if (latestCommit === currentCommit) {
                return send("✅ Bot is already up to date.");
            }

            await send("⬇️ Downloading latest version...");

            const zipPath = "./update.zip";
            const { data: zipData } = await axios.get(REPO_URL,{
                responseType:"arraybuffer"
            });

            fs.writeFileSync(zipPath,zipData);

            const zip = new AdmZip(zipPath);
            const extractPath = "./update-temp";

            zip.extractAllTo(extractPath,true);

            const sourcePath = path.join(extractPath,`${REPO}-${BRANCH}`);
            const destinationPath = "./";

            const exclude = [
                "node_modules",
                ".git",
                "auth",
                "session"
            ];

            copyFolderSync(sourcePath,destinationPath,exclude);

            fs.writeFileSync(COMMIT_FILE,latestCommit);

            fs.unlinkSync(zipPath);
            fs.rmSync(extractPath,{ recursive:true, force:true });

            await send("📦 Installing dependencies...");

            exec("npm install --omit=dev");

            await send("✅ Update complete\n♻️ Restarting bot...");

            setTimeout(()=>{
                process.exit(0);
            },2000);

        } catch(err){

            console.log(err);

            send(`❌ Update failed\n\n${err.message}`);

        }
    }
};
