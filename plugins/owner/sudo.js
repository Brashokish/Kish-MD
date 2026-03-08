export default {
  name: 'sudo',
  owner: true,

  async execute(sock, m, args) {
    const jid = m.key.remoteJid;
    const action = (args[0] || '').toLowerCase();
    const number = (args[1] || '').replace(/\D/g, '');

    // LIST
    if (action === 'list') {
      const list = [...global.sudoUsers]
        .map(n => `• ${n}`)
        .join('\n') || 'No sudo users';

      return sock.sendMessage(jid, {
        text: `👑 *SUDO USERS*\n${list}`
      }, { quoted: m });
    }

    // REQUIRE NUMBER
    if (!number)
      return sock.sendMessage(jid, {
        text: 'Usage:\n.sudo add 2547xxxxxx\n.sudo del 2547xxxxxx\n.sudo list'
      }, { quoted: m });

    // ADD
    if (action === 'add') {
      global.sudoUsers.add(number);

      return sock.sendMessage(jid, {
        text: `✅ ${number} is now a sudo user`
      }, { quoted: m });
    }

    // DELETE
    if (action === 'del') {
      global.sudoUsers.delete(number);

      return sock.sendMessage(jid, {
        text: `❌ ${number} removed from sudo`
      }, { quoted: m });
    }

    sock.sendMessage(jid, {
      text: 'Usage:\n.sudo add/del/list number'
    }, { quoted: m });
  }
};
