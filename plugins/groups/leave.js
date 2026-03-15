export default {
  name: 'leave',
  aliases: ['left', 'exit'],
  description: 'Make bot leave the group',
  usage: '!leave',
  category: 'group',
  owner: true, // Only owner can make bot leave
  group: true,
  private: false,
  admin: false,
  botAdmin: false,
  
  async execute(sock, m, args) {
    try {
      await m.reply('👋 Goodbye!');
      
    
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      await sock.groupLeave(m.from);
      
    } catch (err) {
      console.error('Error leaving group:', err);
      throw new Error('Failed to leave group!');
    }
  }
};