import { exec } from 'child_process';

const isOwner = (m) => {
  return m.key.remoteJidAlt === '254796307638@s.whatsapp.net' || 
         m.key.participantAlt === '254796307638@s.whatsapp.net';
};

export default {
  name: 'exec',
  aliases: [],
  description: 'Execute a shell command on the server',
  usage: 'exec <command>',
  category: 'owner',
  
  group: false,
  private: false,

  async execute(sock, m, args) {
    



    if (!isOwner(m)) return m.reply("403 Unauthorized");


    
    if (!args.length) {
      return m.reply('❌ Provide a command to execute!');
    }

    const cmd = args.join(' ');

    exec(cmd, (err, stdout, stderr) => {
      if (err) {
        return m.reply(`❌ Error:\n\`\`\`${err.message}\`\`\``);
      }

      if (stderr) {
        return m.reply(`⚠️ Stderr:\n\`\`\`${stderr}\`\`\``);
      }

      m.reply(`✅ Output:\n\`\`\`${stdout || 'No output'}\`\`\``);
    });
  }
};
