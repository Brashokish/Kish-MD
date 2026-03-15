
export async function handleAutoReactStatus(sock, m) {
  if (m.key.remoteJid !== 'status@broadcast') return;

  const isLid = m.key.addressingMode === 'lid';

  const resolvedKey = isLid
    ? {
        ...m.key,
        participant: m.key.remoteJidAlt || m.key.participant
      }
    : m.key;

  const participant = resolvedKey.participant || m.participant;
  if (!participant) return;

  const emoji = '💚'; // change this to any emoji you want

  try {
    setTimeout(async () => {
      await sock.sendMessage(
        'status@broadcast',
        {
          react: {
            text: emoji,
            key: resolvedKey
          }
        },
        {
          statusJidList: [participant]
        }
      );
    }, 1000);

  } catch (err) {
    console.error('AUTO REACT ERROR:', err);
  }
}
