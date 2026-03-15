import axios from "axios";

export default {
  name: "gpt4",
  aliases: ["aistream"],
  description: "Chat with Kish AI (Streaming)",
  usage: ".gptstream <question>",
  category: "ai",

  async execute(sock, m, args) {

    const text = args.join(" ");

    if (!text) {
      return sock.sendMessage(m.from, {
        text: "⚡ Please provide text for Gpt4."
      }, { quoted: m });
    }

    try {

      const res = await axios.get(
        "https://kish-ai-stream.vercel.app/api/ask",
        {
          params: {
            user: m.sender,
            query: text
          }
        }
      );

      const reply = res.data.response;

      await sock.sendMessage(m.from, {
        text: reply
      }, { quoted: m });

    } catch (err) {

      console.error("Streaming Error:", err);

      await sock.sendMessage(m.from, {
        text: "❌ AI streaming failed."
      }, { quoted: m });

    }
  }
};
