import axios from "axios";

export default {
  name: "lyrics",
  aliases: ["lyric", "songlyrics"],
  description: "Search song lyrics",
  usage: ".lyrics <song name>",
  category: "search",
  owner: false,
  group: false,
  private: false,

  async execute(sock, m, args) {

    const query = args.join(" ");

    if (!query) {
      return sock.sendMessage(
        m.from,
        { text: "🎵 Example: `.lyrics faded`" },
        { quoted: m }
      );
    }

    try {

      const url = `https://api.giftedtech.co.ke/api/search/lyrics?apikey=gifted&query=${encodeURIComponent(query)}`;

      const res = await axios.get(url);

      const data = res.data.result || res.data;

      if (!data || !data.lyrics) {
        return sock.sendMessage(
          m.from,
          { text: "❌ Lyrics not found." },
          { quoted: m }
        );
      }

      const title = data.title || query;
      const artist = data.artist || "Unknown";

      const header = `🎶 *${title}*\n👤 ${artist}\n\n`;

      const message = header + data.lyrics;

      // WhatsApp message limit
      const parts = message.match(/[\s\S]{1,4000}/g);

      for (const part of parts) {
        await sock.sendMessage(
          m.from,
          { text: part },
          { quoted: m }
        );
      }

    } catch (err) {

      console.error("Lyrics API error:", err);

      sock.sendMessage(
        m.from,
        { text: "❌ Failed to fetch lyrics." },
        { quoted: m }
      );
    }
  }
};
