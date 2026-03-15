import { setGroup, removeGroup } from '../../lib/antilinkStore.js';

export default {
  name: 'antilink',
  group: true,
  admin: true,
  description: 'Enable anti link',

  async execute(sock, m, args) {
    const jid = m.key.remoteJid;

    const option = (args[0] || '').toLowerCase();
    const action = (args[1] || 'delete').toLowerCase();

    if (option === 'off') {
      removeGroup(jid);
      return m.reply('❌ Anti-link disabled');
    }

    if (option === 'on') {
      if (!['delete', 'kick'].includes(action))
        return m.reply('Choose: delete or kick');

      setGroup(jid, action);
      return m.reply(`✅ Anti-link enabled (${action})`);
    }

    m.reply('Usage:\n.antilink on delete\n.antilink on kick\n.antilink off');
  }
};