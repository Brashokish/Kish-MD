export default {
  name: "add",
  category: "group",
  group: true,
  admin: true,
  botAdmin: true,
  description: "Add users to the group",

  async execute(sock, m, args) {
    const jid = m.key.remoteJid;

    if (!args[0]) {
      return m.reply(
        "Provide number(s).\n\nExample:\n.add 254114018035\n.add 254111111111,254222222222"
      );
    }

    const groupMetadata = await sock.groupMetadata(jid);
    const participants = groupMetadata.participants || [];
    const groupName = groupMetadata.subject;

    const existing = participants.map(p => p.id);

    const numbers = args
      .join("")
      .split(",")
      .map(v => v.replace(/[^0-9]/g, ""))
      .filter(v => v.length > 5 && v.length < 20)
      .map(v => v + "@s.whatsapp.net")
      .filter(v => !existing.includes(v));

    if (!numbers.length) return m.reply("No valid numbers to add.");

    const inviteCode = await sock.groupInviteCode(jid);

    const pp = await sock
      .profilePictureUrl(jid, "image")
      .catch(() => "https://placehold.co/600x400.jpg");

    for (const user of numbers) {
      try {
        const result = await sock.groupParticipantsUpdate(jid, [user], "add");

        if (result[0]?.status === "403") {
          await sock.sendMessage(
            jid,
            {
              text: `Cannot add @${user.split("@")[0]} due to privacy settings. Sending invite link.`,
              mentions: [user],
            },
            { quoted: m }
          );

          const inviteMsg = `You have been invited to join *${groupName}*:

https://chat.whatsapp.com/${inviteCode}`;

          await sock.sendMessage(user, {
            image: { url: pp },
            caption: inviteMsg,
          });
        }
      } catch (err) {
        console.log("Add error:", err);
      }
    }

    m.reply("✅ Done processing add request.");
  }
};
