import { saveSettings } from "../../lib/settings.js"

export default {
  name: "antidelete",
  owner: true,
  category: "owner",
  description: "Enable or disable anti delete",

  async execute(sock, m, args) {

    const option = (args[0] || "").toLowerCase()

    if (!["on","off"].includes(option)) {
      return m.reply("Usage: antidelete on / off")
    }

    const state = option === "on"

    global.antiDelete = state

    saveSettings({ antiDelete: state })

    m.reply(`✅ Anti-delete turned ${option}`)
  }
}


