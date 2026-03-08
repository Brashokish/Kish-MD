export default {
  name: 'tagall',
  aliases: ['everyone', 'all'],
  description: 'Tag all group members',
  usage: '!tagall <message>',
  category: 'group',
  owner: false,
  group: true,
  private: false,
  admin: true,
  botAdmin: false,

  async execute(sock, m, args) {
    try {
      const meta = await sock.groupMetadata(m.from);

      const participants = meta.participants
        .map(p => p.phoneNumber)
        .filter(Boolean);

      const message = args.join(' ') || 'Attention everyone!';

      let text = `📢 *Group Mention*\n\n${message}\n\n`;
      text += `━━━━━━━━━━━━━━━━━━\n`;

      participants.forEach((jid, i) => {
        text += `${i + 1}. @${jid.split('@')[0]}\n`;
      });

      await sock.sendMessage(
        m.from,
        {
          text,
          mentions: participants,
        },
        { quoted: m }
      );

    } catch (err) {
      console.error('Error tagging all:', err);
      throw new Error('Failed to tag all members!');
    }
  },
};
