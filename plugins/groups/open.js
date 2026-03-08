export default {
  name: 'open',
  aliases: ['unlock'],
  description: 'Open group (all members can send messages)',
  usage: '!open',
  category: 'group',
  owner: false,
  group: true,        
  private: false,
  admin: true,        
  botAdmin: true,     
  
  async execute(sock, m, args) {
    try {
      
      await sock.groupSettingUpdate(m.from, 'not_announcement');
      
      await m.reply('🔓 *Group Opened*\n\nAll members can send messages now.');
      
    } catch (err) {
      console.error('Error opening group:', err);
      throw new Error('Failed to open the group. Make sure I have admin rights!');
    }
  }
};
