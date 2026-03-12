import { saveSettings } from "../../lib/settings.js"

export default {
  name: "mode",
  owner: true,

  async execute(sock, m, args) {

    const mode = (args[0] || "").toLowerCase()

    if (!["public", "private"].includes(mode))
      return m.reply("Usage: mode public / private")

    global.botMode = mode

    saveSettings({ mode })

    m.reply(`🤖 Bot mode set to ${mode}`)
  }
}
