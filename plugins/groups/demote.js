import { getMentionedJids } from '../../lib/helper.js';

export default {
  name: 'demote',
  aliases: ['d'],
  description: 'demote member from admin',
  usage: 'demote @user or reply to message',
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
        await sock.groupParticipantsUpdate(m.from, [jid], 'demote');
      }
      
      
      const mentionText = mentioned.map(jid => `@${jid.split('@')[0]}`).join(', ');
      
      await sock.sendMessage(m.from, {
        text: `✅ *Demoted from Admin*\n\n${mentionText} has been demoted from group admin!`,
        mentions: mentioned
      }, { quoted: m });
      
    } catch (err) {
      console.error('Error demoting user:', err);
      throw new Error('Failed to demote user. Make sure they are in the group!');
    }
  }
};