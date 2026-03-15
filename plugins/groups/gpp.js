import { downloadMediaMessage } from '@whiskeysockets/baileys';

export default {
  name: 'gpp',
  aliases: ['setpp', 'setprofile'],
  description: 'Change group icon/profile picture',
  usage: '!seticon (reply to image)',
  category: 'group',
  owner: false,
  group: true,
  private: false,
  admin: true,
  botAdmin: true,
  
  async execute(sock, m, args) {
    const quoted = m.quoted;
    
    if (!quoted) {
      return m.reply('❌ Reply to an image to set it as group icon!\n\nExample: Reply to an image with !gpp');
    }
    
    const isImage = /image/.test(quoted.message?.imageMessage?.mimetype);
    
    if (!isImage) {
      return m.reply('❌ That\'s not an image! Please reply to an image.');
    }
    
    try {
    
      const buffer = await downloadMediaMessage(
        quoted, 
        'buffer', 
        {}, 
        { 
          logger: sock.logger,
          reuploadRequest: sock.updateMediaMessage
        }
      );
      
      await sock.updateProfilePicture(m.from, buffer);
      await m.reply('✅ *Group Icon Updated Successfully!*');
      
    } catch (err) {
      console.error('Error updating group icon:', err);
      throw new Error('Failed to update group icon!');
    }
  }
};

