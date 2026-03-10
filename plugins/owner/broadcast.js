export default {
  name: "broadcast",
  aliases: ["bc"],
  category: "owner",
  owner: true,
  description: "Broadcast a message to all chats",

  async execute(sock, m, args) {
    if (!args.length) {
      return m.reply("Provide a message to broadcast.\n\nExample:\n.broadcast Hello everyone");
    }

    const text = args.join(" ");
    const message = `📢 *KISH-MD BROADCAST*\n\n${text}`;

    const chats = Object.keys(sock.store.chats || {});
    if (!chats.length) return m.reply("No chats found to broadcast.");

    let success = 0;
    let failed = 0;

    for (const jid of chats) {
      try {
        await sock.sendMessage(jid, { text: message });
        success++;
      } catch (err) {
        failed++;
      }
    }

    m.reply(`✅ Broadcast sent.

✔ Success: ${success}
❌ Failed: ${failed}
📊 Total: ${chats.length}`);
  }
};
