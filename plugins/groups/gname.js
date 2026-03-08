export default {
  name: 'gname',
  aliases: ['setsubject', 'changename'],
  description: 'Change group name',
  usage: '!setname <new name>',
  category: 'group',
  owner: false,
  group: true,
  private: false,
  admin: true,
  botAdmin: true,
  
  async execute(sock, m, args) {
    if (!args.length) {
      return m.reply('❌ Please provide a new group name!\n\nExample: !gname fuck you');
    }
    
    const newName = args.join(' ');
    
    if (newName.length > 100) {
      return m.reply('❌ Group name is too long! Maximum 100 characters.');
    }
    
    try {
      await sock.groupUpdateSubject(m.from, newName);
      await m.reply(`✅ *Group Name Updated*\n\nNew name: ${newName}`);
    } catch (err) {
      console.error('Error updating group name:', err);
      throw new Error('Failed to update group name!');
    }
  }
};
