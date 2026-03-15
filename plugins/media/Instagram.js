import { downr } from '../../lib/downloader.js'

export default {
  name: 'instagram',
  aliases: ['ig', 'igdl', 'insta'],
  description: 'Download Instagram photos/videos',
  usage: '.ig <url>',
  category: 'media',

  async execute(sock, m, args) {
    try {
      const url = args[0];

      if (!url) return m.reply('provide an Instagram URL');

      if (!url.includes('instagram.com') && !url.includes('instagr.am')) {
        return m.reply('invalid Instagram URL');
      }

      const data = await downr(url);

      if (!data.medias?.length) {
        return m.reply('❌ No media found');
      }

      for (const media of data.medias) {
        if (media.type === 'image') {
          await sock.sendMessage(
            m.from,
            { image: { url: media.url } },
            { quoted: m }
          );
        } else {
          await sock.sendMessage(
            m.from,
            { video: { url: media.url } },
            { quoted: m }
          );
        }
      }
    } catch {
      m.reply('❌ Download failed');
    }
  }
};