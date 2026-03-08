import { getMentionedJids } from '../../lib/helper.js';

export default {
  name: 'promote',
  aliases: ['admin', 'p'],
  description: 'Promote member to admin',
  usage: '!promote @user or reply to message',
  category: 'group',
  owner: false,
  group: true,
  private: false,
  admin: true,
  botAdmin: true,
  
  async execute(sock, m, args) {
    try {
      const mentioned = await getMentionedJids(m, sock);
      
      if (!mentioned.length) {
        return m.reply('❌ Please mention a user or reply to their message!\n\nExample: !promote @user');
      }
      
      
      for (const jid of mentioned) {
        await sock.groupParticipantsUpdate(m.from, [jid], 'promote');
      }
      
     
      const mentionText = mentioned.map(jid => `@${jid.split('@')[0]}`).join(', ');
      
      await sock.sendMessage(m.from, {
        text: `✅ *Promoted to Admin*\n\n${mentionText} has been promoted to group admin!`,
        mentions: mentioned
      }, { quoted: m });
      
    } catch (err) {
      console.error('Error promoting user:', err);
      throw new Error('Failed to promote user. Make sure they are in the group!');
    }
  }
};
