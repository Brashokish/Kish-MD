export default {
  name: 'link',
  aliases: ['grouplink', 'invite', 'linkgc'],
  description: 'Get group invite link',
  usage: '!link',
  category: 'group',
  owner: false,
  group: true,
  private: false,
  admin: false,
  botAdmin: false,
  
  async execute(sock, m, args) {
    try {
      const code = await sock.groupInviteCode(m.from);
      const link = `https://chat.whatsapp.com/${code}`;
      
      const groupMetadata = await sock.groupMetadata(m.from);
      
      await m.reply(`🔗 *${groupMetadata.subject}*\n\nInvite Link:\n${link}`);
    } catch (err) {
      console.error('Error getting group link:', err);
      
      if (err.toString().includes('not-authorized')) {
        return m.reply('❌ I need to be admin to get the group link!');
      }
      
      throw new Error('Failed to get group link!');
    }
  }
};
