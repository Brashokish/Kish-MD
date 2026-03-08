export default {
  name: 'revoke',
  aliases: ['reset', 'newlink'],
  description: 'Revoke group invite link',
  usage: '!revoke',
  category: 'group',
  owner: false,
  group: true,
  private: false,
  admin: true,
  botAdmin: true,
  
  async execute(sock, m, args) {
    try {
      const newCode = await sock.groupRevokeInvite(m.from);
      const newLink = `https://chat.whatsapp.com/${newCode}`;
      
      await m.reply(`✅ _*Group Link Revoked*_`);
    } catch (err) {
      console.error('Error revoking group link:', err);
      throw new Error('Failed to revoke group link!');
    }
  }
};
