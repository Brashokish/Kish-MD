import axios from "axios"

export default {

  name: "repo",
  category: "general",
  description: "Show bot GitHub repository",

  async execute(sock, m) {

    try {

      const repoInfo = await axios.get(
        "https://api.github.com/repos/Brashokish/Kish-MD"
      )

      const repo = repoInfo.data

      const scritxt = `*🚀 Kish-Bot-Script 🚀*

*🌟 Creator:* Kish 𓅃
*🌟 Repo:* ${repo.html_url}
*🌟 Total Forks:* ${repo.forks_count}
*⭐ Total Stars:* ${repo.stargazers_count}
*📁 Repo Size:* ${(repo.size / 1024).toFixed(2)} MB
*📅 Last Updated:* ${repo.updated_at}

©️ *Kish Bots Inc*
❝ Don't forget to give a Star ⭐ to the repo. ❞`

      await sock.sendMessage(
        m.from,
        {
          video: {
            url: "https://media.tenor.com/Zco-fadJri4AAAPo/code-matrix.mp4"
          },
          gifPlayback: true,
          caption: scritxt
        },
        { quoted: m }
      )

    } catch (err) {

      console.error(err)

      m.reply("❌ Failed to fetch repository info.")

    }

  }

}