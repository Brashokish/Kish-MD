import config from '../config.js';

export async function handleAutoViewStatus(sock, m) {
  if (!config.autoViewStatus) {
    return;
  }

  if (m.key.remoteJid !== 'status@broadcast') {
    return;
  }

  const isLid = m.key.addressingMode === 'lid';
  const resolvedKey = isLid
    ? {
        ...m.key,
        participant: m.key.remoteJidAlt || m.key.participant
      }
    : m.key;

  try {
    await sock.readMessages([resolvedKey]);
  } catch (err) {
  }
}
