import { downloadContentFromMessage, generateWAMessageContent, generateWAMessageFromContent } from '@whiskeysockets/baileys';
import crypto from 'crypto';

export default {
  name: 'groupstatus',
  aliases: ['togstatus', 'swgc', 'tosgroup'],
  description: 'Send media/text to group status',
  usage: '!groupstatus <text> OR reply to media with !groupstatus',
  category: 'owner',
  owner: true,
  group: true, 
  private: false,
  
  async execute(sock, m, args) {
    try {
      
      const groupMetadata = await sock.groupMetadata(m.from);
      const participant = groupMetadata.participants.find(p => p.id === m.sender);
      
      
      await m.react('⏳');
      
      let payload = null;
      let mediaType = 'Text';
      
      
      if (m.quoted) {
        payload = await buildPayload(m.quoted);
        mediaType = getMediaType(m.quoted);
        
        
        if (args.length > 0 && payload) {
          const caption = args.join(' ');
          if (payload.image || payload.video) {
            payload.caption = caption;
          }
        }
      } else if (args.length > 0) {
        
        payload = { text: args.join(' ') };
        mediaType = 'Text';
      } else {
        
        await m.react('❌');
        return m.reply(`wrong format`);
      }
      
      if (!payload) {
        await m.react('❌');
        return m.reply('❌ Failed to process message');
      }
      
      
      await sendGroupStatus(sock, m.from, payload);
      
      await m.react('✅');
      await m.reply(`✅ ${mediaType} sent to group status!${payload.caption ? `\n📝 "${payload.caption}"` : ''}`);
      
    } catch (error) {
      console.error('Group status error:', error);
      await m.react('❌');
      await m.reply(`❌ Error: ${error.message}`);
    }
  }
};



async function buildPayload(quotedMsg) {
  const msg = quotedMsg.message;
  
  
  if (msg.imageMessage) {
    const buffer = await downloadMedia(msg.imageMessage, 'image');
    return {
      image: buffer,
      caption: msg.imageMessage.caption || '',
      mimetype: msg.imageMessage.mimetype || 'image/jpeg'
    };
  }
  
  
  if (msg.videoMessage) {
    const buffer = await downloadMedia(msg.videoMessage, 'video');
    return {
      video: buffer,
      caption: msg.videoMessage.caption || '',
      gifPlayback: msg.videoMessage.gifPlayback || false,
      mimetype: msg.videoMessage.mimetype || 'video/mp4'
    };
  }
  
 
  if (msg.stickerMessage) {
    const buffer = await downloadMedia(msg.stickerMessage, 'sticker');
    return {
      image: buffer,
      caption: '',
      mimetype: 'image/webp' 
    };
  }
  
  
  if (msg.audioMessage) {
    const buffer = await downloadMedia(msg.audioMessage, 'audio');
    return {
      audio: buffer,
      mimetype: msg.audioMessage.mimetype || 'audio/mpeg',
      ptt: msg.audioMessage.ptt || false
    };
  }
  
  
  if (msg.conversation || msg.extendedTextMessage?.text) {
    return {
      text: msg.conversation || msg.extendedTextMessage.text
    };
  }
  
  return null;
}

async function downloadMedia(message, type) {
  const stream = await downloadContentFromMessage(message, type);
  let buffer = Buffer.from([]);
  for await (const chunk of stream) {
    buffer = Buffer.concat([buffer, chunk]);
  }
  return buffer;
}

function getMediaType(quotedMsg) {
  const msg = quotedMsg.message;
  if (msg.imageMessage) return 'Image';
  if (msg.videoMessage) return 'Video';
  if (msg.stickerMessage) return 'Sticker';
  if (msg.audioMessage) return 'Audio';
  return 'Text';
}

async function sendGroupStatus(sock, jid, content) {
  const inside = await generateWAMessageContent(content, { 
    upload: sock.waUploadToServer 
  });
  
  const messageSecret = crypto.randomBytes(32);
  
  const message = generateWAMessageFromContent(jid, {
    messageContextInfo: { messageSecret },
    groupStatusMessageV2: { 
      message: { 
        ...inside, 
        messageContextInfo: { messageSecret } 
      } 
    }
  }, {});
  
  await sock.relayMessage(jid, message.message, { 
    messageId: message.key.id 
  });
  
  return message;
}
