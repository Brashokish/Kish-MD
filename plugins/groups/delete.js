export default {
  name: 'delete',
  aliases: ['del', 'd'],
  description: 'Delete a message (reply to message)',
  usage: '!delete (reply to message)',
  category: 'group',
  owner: false,
  group: true,
  private: false,
  admin: true,
  botAdmin: false,
  
  async execute(sock, m, args) {
    const quoted = m.quoted;
    
    if (!quoted) {
      return m.reply('Reply to a message to delete it!');
    }
    
    try {
      await sock.sendMessage(m.from, {
        delete: {
          remoteJid: m.from,
          fromMe: false,
          id: quoted.stanzaId,
          participant: quoted.participant
        }
      });
      
    } catch (err) {
      console.error('Error deleting message:', err);
      throw new Error('Failed to delete message! Make sure I have admin rights.');
    }
  }
};