export function normalizeJid(jid) {
  if (!jid) return jid;
  const base = jid.split(':')[0];
  return base.endsWith('@s.whatsapp.net') ? base : `${base}@s.whatsapp.net`;
}

export async function lidToJid(sock, chatJid, userIdentifier) {
  try {
    if (userIdentifier.endsWith('@s.whatsapp.net')) return userIdentifier;

    if (userIdentifier.endsWith('@lid')) {
      const botJid = normalizeJid(sock.user.id);
      const botLid = sock.user.lid;
      if (botLid && userIdentifier === botLid) return botJid;

      if (chatJid?.endsWith('@g.us')) {
        const groupMetadata = await sock.groupMetadata(chatJid);
        const participant = groupMetadata.participants.find(
          p => p.id === userIdentifier || p.lid === userIdentifier
        );
        if (participant) {
          return participant.phoneNumber || participant.id || userIdentifier;
        }
      }

      console.warn('[LID] Unable to resolve LID:', userIdentifier);
      return userIdentifier;
    }

    if (!userIdentifier.includes('@')) {
      return `${userIdentifier}@s.whatsapp.net`;
    }

    return userIdentifier;
  } catch (err) {
    console.error('[LID] Error converting LID to JID:', err);
    return userIdentifier;
  }
}

export async function getUserJid(sock, m) {
  let userJid = null;

  if (m.key?.participantAlt) {
    userJid = m.key.participantAlt;
  } else if (m.key?.remoteJidAlt) {
    userJid = m.key.remoteJidAlt;
  } else if (m.key?.participant) {
    userJid = m.key.participant;
  } else if (m.key?.remoteJid) {
    userJid = m.key.remoteJid;
  }

  if (userJid?.endsWith('@lid')) {
    userJid = await lidToJid(sock, m.key.remoteJid, userJid);
  }

  if (!userJid || m.key?.fromMe) {
    userJid = normalizeJid(sock.user.id);
  }

  return normalizeJid(userJid);
}

export async function getMentionedJids(m, sock) {
  const mentioned = [];

  const msgMentioned = m.msg?.contextInfo?.mentionedJid || [];
  for (const jid of msgMentioned) {
    const convertedJid = await lidToJid(sock, m.key.remoteJid, jid);
    mentioned.push(convertedJid);
  }

  if (m.quoted?.participant) {
    const convertedJid = await lidToJid(sock, m.key.remoteJid, m.quoted.participant);
    mentioned.push(convertedJid);
  }

  return [...new Set(mentioned.map(jid => normalizeJid(jid)))];
}
