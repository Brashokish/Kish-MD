export default {
  name: 'hidetag',
  aliases: ['htag'],
  description: 'Silently mention all members (supports quoted messages)',
  usage: '!hidetag <text> OR reply + !hidetag',
  category: 'group',
  owner: false,
  group: true,
  private: false,
  admin: true,
  botAdmin: false,

  async execute(sock, m, args) {
    try {
      const meta = await sock.groupMetadata(m.from);

      const mentions = meta.participants
        .map(p => p.phoneNumber)
        .filter(Boolean);

      
      if (m.quoted) {
        
        if (m.quoted.isText) {
          return sock.sendMessage(
            m.from,
            {
              text: m.quoted.text,
              mentions,
            },
            { quoted: m }
          );
        }

       
        if (m.quoted.isImage) {
          const buffer = await m.quoted.download();
          return sock.sendMessage(
            m.from,
            {
              image: buffer,
              caption: m.quoted.caption || '',
              mentions,
            },
            { quoted: m }
          );
        }

       
        if (m.quoted.isVideo) {
          const buffer = await m.quoted.download();
          return sock.sendMessage(
            m.from,
            {
              video: buffer,
              caption: m.quoted.caption || '',
              mentions,
            },
            { quoted: m }
          );
        }

       
        if (m.quoted.isDocument) {
          const buffer = await m.quoted.download();
          return sock.sendMessage(
            m.from,
            {
              document: buffer,
              mimetype: m.quoted.mimetype,
              fileName: m.quoted.fileName || 'file',
              caption: m.quoted.caption || '',
              mentions,
            },
            { quoted: m }
          );
        }

       
        if (m.quoted.isAudio) {
          const buffer = await m.quoted.download();
          return sock.sendMessage(
            m.from,
            {
              audio: buffer,
              mimetype: m.quoted.mimetype,
              ptt: false,
              mentions,
            },
            { quoted: m }
          );
        }
      }

      
      const text = args.join(' ') || '‎';

      await sock.sendMessage(
        m.from,
        {
          text,
          mentions,
        },
        { quoted: m }
      );

    } catch (err) {
      console.error('Error hidetag:', err);
      throw new Error('Failed to hidetag members!');
    }
  },
};