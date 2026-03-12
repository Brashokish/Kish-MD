const PRESENCE_TYPES = ["recording","composing"]

function getRandomPresence(){
  return PRESENCE_TYPES[Math.floor(Math.random()*PRESENCE_TYPES.length)]
}

export async function sendRandomPresence(sock,m){

  try{

    const jid = m.key.remoteJid

    if(jid.endsWith("@g.us") || jid === "status@broadcast" || m.key.fromMe){
      return
    }

    let presence

    if(global.autoPresenceMode === "typing"){
      presence = "composing"
    }

    else if(global.autoPresenceMode === "recording"){
      presence = "recording"
    }

    else if(global.autoPresenceMode === "random"){
      presence = getRandomPresence()
    }

    else{
      return
    }

    await sock.sendPresenceUpdate(presence,jid)

  }catch(err){
    console.error("Presence error:",err.message)
  }

}
