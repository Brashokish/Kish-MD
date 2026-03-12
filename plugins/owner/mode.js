global.botMode ??= 'public';

export default {
  name: 'mode',
  owner: true,

  async execute(sock, m, args) {
    const jid = m.key.remoteJid;
    const mode = (args[0] || '').toLowerCase();

    if (!['public', 'private'].includes(mode))
      return sock.sendMessage(jid, { text: 'Usage: .mode public/private' }, { quoted: m });

    global.botMode = mode;

    await sock.sendMessage(jid, {
      text: `🤖 Bot mode set to *${mode.toUpperCase()}*`
    }, { quoted: m });
  }
};
