import { getMentionedJids } from '../../lib/helper.js';

export default {
  name: 'remove',
  aliases: ['kick', 'k'],
  description: 'remove member from group',
  usage: '!remove @user or reply to message',
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
        return m.reply('❌ Please mention a user or reply to their message!\n\nExample: remove @user');
      }
      
      
      for (const jid of mentioned) {
        await sock.groupParticipantsUpdate(m.from, [jid], 'remove');
      }
      
    
      const mentionText = mentioned.map(jid => `@${jid.split('@')[0]}`).join(', ');
      
      await sock.sendMessage(m.from, {
        text: `${mentionText} has been removed!`,
        mentions: mentioned
      }, { quoted: m });
      
    } catch (err) {
      console.error('Error promoting user:', err);
      throw new Error('Failed to promote user. Make sure they are in the group!');
    }
  }
};