import { isEnabled, getAction } from './antilinkStore.js';
import { isAdmin } from '../lib/commandHandler.js';

const linkRegex = /(https?:\/\/|www\.|chat\.whatsapp\.com)/i;

export async function antiLinkHandler(sock, m) {
  if (!m.isGroup) return;

  const jid = m.key.remoteJid;
  if (!isEnabled(jid)) return;

  const text =
    m.message?.conversation ||
    m.message?.extendedTextMessage?.text ||
    '';

  if (!linkRegex.test(text)) return;

  const sender = m.key.participant || m.sender;

  // allow admins
  const admin = await isAdmin(sock, m);
  if (admin) return;

  // delete message
  await sock.sendMessage(jid, { delete: m.key });

  const action = getAction(jid);

  if (action === 'kick') {
    await sock.sendMessage(jid, {
      text: `🚫 @${sender.split('@')[0]} sent a link and was removed.`,
      mentions: [sender]
    });

    await sock.groupParticipantsUpdate(jid, [sender], 'remove');
  }
}
