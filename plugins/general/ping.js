import { performance } from "perf_hooks"

export default {

  name: "ping",
  aliases: ["p","test"],
  category: "general",
  description: "Check bot speed",

  async execute(sock, m) {

    const start = performance.now()
    const end = performance.now()

    const latency = (end - start).toFixed(4)

    m.reply(`Testing successful, Bot is active\n\nPing: ${latency} ms`)

  }

}
