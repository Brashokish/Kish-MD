import { saveSettings } from "../../lib/settings.js"

export default {
  name: "prefix",
  category:'owner',
  owner: true,

  async execute(sock, m, args) {

    if (!args[0]) {
      return m.reply("Usage: prefix !  or prefix none")
    }

    const newPrefix = args[0] === "none" ? "" : args[0]

    global.botPrefix = newPrefix

    saveSettings({ prefix: newPrefix })

    m.reply(`✅ Prefix updated to: ${newPrefix || "no prefix"}`)
  }
}