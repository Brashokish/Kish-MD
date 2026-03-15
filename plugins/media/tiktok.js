import { downr } from '../../lib/downloader.js';

function progressBar(percent) {
  const total = 10;
  const filled = Math.floor(percent / 10);
  const empty = total - filled;
  return '█'.repeat(filled) + '░'.repeat(empty) + ` ${percent}%`;
}

export default {
  name: 'tiktok',
  aliases: ['tt', 'ttdl'],
  description: 'Download TikTok videos',
  usage: '.tt <url>',
  category: 'media',

  async execute(sock, m, args) {
    try {
      const url = args[0];

      if (!url) {
        return m.reply('❌ Provide a TikTok URL');
      }

      if (!url.includes('tiktok.com')) {
        return m.reply('❌ Invalid TikTok URL');
      }

      // start progress
      const progressMsg = await sock.sendMessage(
        m.from,
        { text: `⬇️ Downloading\n${progressBar(30)}` },
        { quoted: m }
      );

      const data = await downr(url);

      // update progress
      await sock.sendMessage(
        m.from,
        { text: `⬇️ Downloading\n${progressBar(60)}`, edit: progressMsg.key }
      );

      if (!data.medias || data.medias.length === 0) {
        return sock.sendMessage(
          m.from,
          { text: '❌ No media found', edit: progressMsg.key }
        );
      }

      const videos = data.medias.filter(v => v.type === 'video');

      if (!videos.length) {
        return sock.sendMessage(
          m.from,
          { text: '❌ No video found', edit: progressMsg.key }
        );
      }

      const bestVideo = videos[0];

      await sock.sendMessage(
        m.from,
        { text: `⬇️ Downloading\n${progressBar(90)}`, edit: progressMsg.key }
      );

      await sock.sendMessage(
        m.from,
        {
          video: { url: bestVideo.url },
          mimetype: 'video/mp4',
          caption: 'Download complete'
        },
        { quoted: m }
      );

    } catch (error) {
      await m.reply('❌ Download failed');
    }
  }
};