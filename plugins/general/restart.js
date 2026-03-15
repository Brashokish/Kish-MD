export default {
  name: 'restart',
  aliases: ['reboot', 'res'],
  description: 'Restart the bot',
  usage: '.restart',
  category: 'owner',
  owner: true,
  group: false,
  private: false,

  async execute(sock, m) {
    await sock.sendMessage(
      m.from,
      { text: "♻️ Restarting bot..." },
      { quoted: m }
    );

    // give WhatsApp time to flush message
    await new Promise(r => setTimeout(r, 800));

    // CRASH — Modular will restart it
    process.exit(1);
  }
};