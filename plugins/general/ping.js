export default {
  name: 'ping',
  aliases: ['p'],
  description: 'Check bot latency',
  usage: '.ping',
  category: 'general',
  owner: false,
  group: false,
  private: false,
  
  async execute(sock, m, args) {
    const start = Date.now();
    const sent = await m.reply('Pinging...');
    const latency = Date.now() - start;
    
    await sock.sendMessage(m.from, {
      text: `🏓 Pong!\n⏱️ Latency: ${latency}ms`,
      edit: sent.key
    });
  }
};
