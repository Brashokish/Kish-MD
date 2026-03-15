import os from 'os';
import { execSync } from 'child_process';

export default {
  name: 'stats',
  aliases: ['info'],
  description: 'Show bot and server statistics',
  usage: '.stats',
  category: 'general',
  owner: false,
  group: false,
  private: false,

  async execute(sock, m, args) {
    const start = Date.now();
    const sent = await m.reply('Fetching stats...');

    
    const formatUptime = (ms) => {
      const days = Math.floor(ms / 86400000);
      const hours = Math.floor((ms % 86400000) / 3600000);
      const minutes = Math.floor((ms % 3600000) / 60000);
      const seconds = Math.floor((ms % 60000) / 1000);
      return `${days}d ${hours}h ${minutes}m ${seconds}s`;
    };

   
    const botUptimeMs = process.uptime() * 1000;
    const botUptimeStr = formatUptime(botUptimeMs);

    
    const serverUptimeMs = os.uptime() * 1000;
    const serverUptimeStr = formatUptime(serverUptimeMs);

   
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const usedMem = totalMem - freeMem;
    const ramUsageStr = `${(usedMem / 1024 / 1024).toFixed(2)} MB / ${(totalMem / 1024 / 1024).toFixed(2)} MB`;

   
    let diskUsageStr = 'Unknown';
    try {
      const df = execSync('df -h /').toString();
      const lines = df.split('\n')[1].split(/\s+/);
      diskUsageStr = `${lines[2]} used / ${lines[1]} total (${lines[4]} used)`;
    } catch (err) {
      diskUsageStr = 'Disk info not available';
    }

   
    const nodeVersion = process.version;

    
    const statsMessage = 
`📊 *Bot & Server Stats*

🤖 Bot Uptime: ${botUptimeStr}
🖥️ Server Uptime: ${serverUptimeStr}
💾 RAM Usage: ${ramUsageStr}
🗄️ Disk Usage: ${diskUsageStr}
⚙️ Node.js: ${nodeVersion}`;

    await sock.sendMessage(m.from, {
      text: statsMessage,
      edit: sent.key
    });
  }
};