export default {
  name: 'pin',
  aliases: ['pinmsg'],
  description: 'Pin a message in the group',
  usage: '!pin <duration>\n\n1 = 1 day\n2 = 7 days\n3 = 30 days',
  category: 'group',
  owner: false,
  group: true,
  private: false,
  admin: true,
  botAdmin: true,
  
  async execute(sock, m, args) {
    if (!m.quoted) {
      return m.reply('❌ Reply to a message to pin it!');
    }

    if (!args[0]) {
      return m.reply(`❌ Specify duration!\n\n*Options:*\n• !pin 1 = 1 day\n• !pin 2 = 7 days\n• !pin 3 = 30 days`);
    }

    const durations = {
      1: { seconds: 86400, label: '1 day' },
      2: { seconds: 604800, label: '7 days' },
      3: { seconds: 2592000, label: '30 days' }
    };

    const selected = durations[args[0]];
    
    if (!selected) {
      return m.reply('❌ Invalid option! Use 1, 2, or 3 only.');
    }

   
    const quotedKey = m.quoted.key || {
      remoteJid: m.quoted.key?.remoteJid || m.from,
      fromMe: m.quoted.key?.fromMe || false,
      id: m.quoted.id || m.quoted.stanzaId,
      participant: m.quoted.participant || m.quoted.sender
    };

    try {
      await m.react('⏳');

      await sock.sendMessage(m.from, {
        pin: quotedKey,
        type: 1,
        time: selected.seconds
      });

      await m.reply(`📌 Message pinned for ${selected.label}!`);
      await m.react('✅');

    } catch (e) {
      console.error('[Pin] Error:', e);
      await m.react('❌');
      await m.reply(`❌ Error: ${e.message}\n\nMake sure I have admin rights to pin messages.`);
    }
  }
};
