const PRESENCE_TYPES = ['recording', 'composing']; // recording = voice note, composing = typing

function getRandomPresence() {
  return PRESENCE_TYPES[Math.floor(Math.random() * PRESENCE_TYPES.length)];
}

export async function sendRandomPresence(sock, m) {
  try {
    
    const remoteJid = m.key.remoteJid;
    
    
    if (remoteJid.endsWith('@g.us') || 
        remoteJid === 'status@broadcast' || 
        m.key.fromMe) {
      return;
    }

   
    const targetJid = m.key.remoteJidAlt || remoteJid;
    
    
    if (!targetJid) return;

    
    const presenceType = getRandomPresence();

    
    await sock.sendPresenceUpdate(presenceType, targetJid);
    
    

  } catch (err) {
    console.error(`[${sock.sessionId}] Error sending presence:`, err.message);
  }
}
