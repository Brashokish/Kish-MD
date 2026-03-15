import { downr } from '../../lib/downloader.js';

function progressBar(percent) {
  const total = 10;
  const filled = Math.floor(percent / 10);
  const empty = total - filled;
  return '█'.repeat(filled) + '░'.repeat(empty) + ` ${percent}%`;
}

export default {
  name: 'facebook',
  aliases: ['fb', 'fbdl'],
  category: 'media',

  async execute(sock, m, args) {
    try {
      const url = args[0];

      if (!url || (!url.includes('facebook.com') && !url.includes('fb.watch'))) {
        return m.reply('❌ Provide a valid Facebook URL');
      }

      const progress = await sock.sendMessage(
        m.from,
        { text: `⬇️ Downloading\n${progressBar(30)}` },
        { quoted: m }
      );

      const data = await downr(url);

      await sock.sendMessage(
        m.from,
        { text: `⬇️ Downloading\n${progressBar(60)}`, edit: progress.key }
      );

      const videos = data.medias?.filter(v => v.type === 'video') || [];

      if (!videos.length) {
        return sock.sendMessage(
          m.from,
          { text: '❌ No video found', edit: progress.key }
        );
      }

      const video = videos[0];

      await sock.sendMessage(
        m.from,
        { text: `⬇️ Downloading\n${progressBar(90)}`, edit: progress.key }
      );

      await sock.sendMessage(
        m.from,
        { video: { url: video.url }, mimetype: 'video/mp4', caption: '✅️Download complete' },
        { quoted: m }
      );

    } catch {
      m.reply('❌ Download failed');
    }
  }
};