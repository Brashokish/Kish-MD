import { Sticker, StickerTypes } from 'wa-sticker-formatter';
import { downloadMediaMessage } from '@whiskeysockets/baileys';
import fs from 'fs';

export default {
  name: 'sticker',
  aliases: ['s', 'stiker'],
  description: 'Convert image/video to sticker',
  usage: '.sticker (reply to image/video)',
  category: 'media',
  owner: false,
  group: false,
  private: false,

  async execute(sock, m, args) {
    const quoted = m.quoted;

    if (!quoted) return m.reply('❌ Reply to an image or video!');

    const isImage = /image/.test(quoted.message?.imageMessage?.mimetype);
    const isVideo = /video/.test(quoted.message?.videoMessage?.mimetype);

    if (!isImage && !isVideo) return m.reply('❌ Only images and videos are supported!');

    try {
    
      const buffer = await downloadMediaMessage(quoted, 'buffer', {}, { logger: console });

      
      const sticker = new Sticker(buffer, {
        pack: "mokaya",          
        author: "mokaya",         
        type: isVideo ? StickerTypes.FULL : StickerTypes.DEFAULT,
        animated: isVideo
      });

      const stickerBuffer = await sticker.toBuffer();

      
      await sock.sendMessage(m.from, { sticker: stickerBuffer }, { quoted: m });

    } catch (err) {
      console.error(err);
      return m.reply('❌ Failed to create sticker.');
    }
  }
};
