export default {
  name: 'uptime',
  aliases: ['runtime', 'run', 'up'],
  description: 'Check how long the bot has been running',
  usage: '.uptime',
  category: 'general',
  owner: false,
  group: false,
  private: false,

  async execute(sock, m, args) {
    const start = Date.now();
    const sent = await m.reply('Calculating uptime...');

   
    const uptimeMs = process.uptime() * 1000;

    
    const days = Math.floor(uptimeMs / 86400000);
    const hours = Math.floor((uptimeMs % 86400000) / 3600000);
    const minutes = Math.floor((uptimeMs % 3600000) / 60000);
    const seconds = Math.floor((uptimeMs % 60000) / 1000);

    const uptimeStr = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    await sock.sendMessage(m.from, {
      text: `🤖 Bot Uptime: ${uptimeStr}`,
      edit: sent.key
    });
  }
};
