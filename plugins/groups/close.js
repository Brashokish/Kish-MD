export default {
  name: 'close',
  aliases: ['lock'],
  description: 'Close group (only admins can send messages)',
  usage: 'close',
  category: 'group',
  owner: false,
  group: true,       
  private: false,
  admin: true,        
  botAdmin: true,     
  
  async execute(sock, m, args) {
    try {
     
      await sock.groupSettingUpdate(m.from, 'announcement');
      
      await m.reply('🔒 *Group Closed*\n\nOnly admins can send messages now.');
      
    } catch (err) {
      console.error('Error closing group:', err);
      throw new Error('Failed to close the group. Make sure I have admin rights!');
    }
  }
};
