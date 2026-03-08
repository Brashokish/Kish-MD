export function isSudo(m) {
  const sender = (m.key.participant || m.key.remoteJid || '').split('@')[0];

  // bot owner (messages from yourself)
  if (m.key.fromMe) return true;

  return global.sudoUsers.has(sender);
}
