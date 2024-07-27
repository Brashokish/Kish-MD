require('./Config')
const pino = require('pino')
const autobio = process.env.AUTOBIO || 'TRUE';
const { Boom } = require('@hapi/boom')
const fs = require('fs')
const moment = require('moment-timezone');
const chalk = require('chalk')
const FileType = require('file-type')
const path = require('path')
const axios = require('axios')
const figlet = require("figlet")
const PhoneNumber = require('awesome-phonenumber')
const { exec, execSync } = require('child_process')
const Config = require('./Config.js');
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./Gallery/lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetch, await, sleep, reSize } = require('./Gallery/lib/myfunc')
const { default: KishConnect, delay, PHONENUMBER_MCC, makeCacheableSignalKeyStore, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto, Browsers } = require("@whiskeysockets/baileys")
const NodeCache = require("node-cache")
const Pino = require("pino")

const { parsePhoneNumber } = require("libphonenumber-js")
const makeWASocket = require("@whiskeysockets/baileys").default

const store = makeInMemoryStore({
    logger: pino().child({
        level: 'silent',
        stream: 'store'
    })
})

let phoneNumber = "25474593684"
let owner = JSON.parse(fs.readFileSync('./Gallery/database/owner.json'))



async function startKish() {
//------------------------------------------------------

const {  state, saveCreds } =await useMultiFileAuthState(`./session`)
    const msgRetryCounterCache = new NodeCache() // for retry message, "waiting message"
    const Kish = makeWASocket({
      logger: pino({ level: 'silent' }),
      printQRInTerminal: true, // popping up QR in terminal log
      
version: [2, 2413, 1],

      browser: Browsers.ubuntu('Firefox'), // for this issues https://github.com/WhiskeySockets/Baileys/issues/328
      auth: state,
      markOnlineOnConnect: true, // set false for offline
      generateHighQualityLinkPreview: true, // make high preview link
      getMessage: async (key) => {
         let jid = jidNormalizedUser(key.remoteJid)
         let msg = await store.loadMessage(jid, key.id)

         return msg?.message || ""
      },
      msgRetryCounterCache, // Resolve waiting messages
      defaultQueryTimeoutMs: undefined, // for this issues https://github.com/WhiskeySockets/Baileys/issues/276
   })
   
   store.bind(Kish.ev)

	setInterval(() => { 

                                 const date = new Date() 

                         Kish.updateProfileStatus( 

                                         `KISH-MD  is active 24/7\n\n${date.toLocaleString('en-US', { timeZone: 'Africa/Nairobi' })} It's a ${date.toLocaleString('en-US', { weekday: 'long', timeZone: 'Africa/Nairobi'})}.` 

                                 ) 

                         }, 10 * 1000) 

	


    Kish.ev.on('messages.upsert', async chatUpdate => {
        //console.log(JSON.stringify(chatUpdate, undefined, 2))
        try {
            const mek = chatUpdate.messages[0]
            if (!mek.message) return
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
            if (mek.key && mek.key.remoteJid === 'status@broadcast'){
            if (autoread_status) {
            await Kish.readMessages([mek.key]) 
            }
            } 
            if (!Kish.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
            if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
            const m = smsg(Kish, mek, store)
            require("./Kish")(Kish, m, chatUpdate, store)
        } catch (err) {
            console.log(err)
        }
    })

   Kish.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await Kish.getName(i + '@s.whatsapp.net'),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await Kish.getName(i + '@s.whatsapp.net')}\nFN:${await Kish.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:okeae2410@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://instagram.com/cak_haho\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	Kish.sendMessage(jid, { contacts: { displayName: global.ownername, contacts: list }, ...opts }, { quoted })
    }
    
    Kish.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }

    Kish.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = Kish.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = {
                id,
                name: contact.notify
            }
        }
    })

    Kish.getName = (jid, withoutContact = false) => {
        id = Kish.decodeJid(jid)
        withoutContact = Kish.withoutContact || withoutContact
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = Kish.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
                id,
                name: 'WhatsApp'
            } : id === Kish.decodeJid(Kish.user.id) ?
            Kish.user :
            (store.contacts[id] || {})
        return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }
    
    Kish.public = false

    Kish.serializeM = (m) => smsg(Kish, m, store)

Kish.ev.on("connection.update",async  (s) => {
        const { connection, lastDisconnect } = s
        if (connection == "open") {
console.log(chalk.green('ðŸ“Welcome to Kish-md'));
console.log(chalk.gray('\n\nðŸš€Initializing...'));
console.log(chalk.cyan('\n\nðŸŽ†Connected'));
Kish.sendMessage(owner + "@s.whatsapp.net", { text: `*ã€ŽðŠðˆð’ð‡-ðŒðƒ is CONNECTEDã€*

     
â•‘â’Creator: Brasho Kish\nâ•‘â’prefix: [.]



                         *ðŠðˆð’ð‡-ðŒðƒ*` });

const rainbowColors = ['red', 'yellow', 'green', 'blue', 'purple'];
let index = 0;

function printRainbowMessage() {
  const color = rainbowColors[index];
  console.log(chalk.keyword(color)('\n\nâ³waiting for messages'));
  index = (index + 1) % rainbowColors.length;
  setTimeout(printRainbowMessage, 60000);  // Adjust the timeout for desired speed
}

printRainbowMessage();
}
    
        
                if (
            connection === "close" &&
            lastDisconnect &&
            lastDisconnect.error &&
            lastDisconnect.error.output.statusCode != 401
        ) {
            startKish()
        }
    })
    Kish.ev.on('creds.update', saveCreds)
    Kish.ev.on("messages.upsert",  () => { })

    Kish.sendText = (jid, text, quoted = '', options) => Kish.sendMessage(jid, {
        text: text,
        ...options
    }, {
        quoted,
        ...options
    })
    Kish.sendTextWithMentions = async (jid, text, quoted, options = {}) => Kish.sendMessage(jid, {
        text: text,
        mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'),
        ...options
    }, {
        quoted
    })
    Kish.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await Kish.sendMessage(jid, {
            sticker: {
                url: buffer
            },
            ...options
        }, {
            quoted
        })
        return buffer
    }
    Kish.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await Kish.sendMessage(jid, {
            sticker: {
                url: buffer
            },
            ...options
        }, {
            quoted
        })
        return buffer
    }
    Kish.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
        let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }

//welcome
Kish.ev.on('group-participants.update', async (anu) => {
    	if (global.welcome){
console.log(anu)
try {
let metadata = await Kish.groupMetadata(anu.id)
let participants = anu.participants
for (let num of participants) {
try {
ppuser = await Kish.profilePictureUrl(num, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
try {
ppgroup = await Kish.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
	
memb = metadata.participants.length
KishWlcm = await getBuffer(ppuser)
KishLft = await getBuffer(ppuser)
                if (anu.action == 'add') {
                const Kishbuffer = await getBuffer(ppuser)
                let KishName = num
                const xtime = moment.tz('Africa/Nairobi').format('HH:mm:ss')
	            const xdate = moment.tz('Africa/Nairobi').format('DD/MM/YYYY')
	            const xmembers = metadata.participants.length
Kishbody = `â”Œâ”€â”€âŠ° ðŸŽ—ð‘¾ð‘¬ð‘³ð‘ªð‘¶ð‘´ð‘¬ðŸŽ—âŠ°
â”‚âŠ³  ðŸŒ To: ${metadata.subject}
â”‚âŠ³  ðŸ“‹ Name: @${KishName.split("@")[0]}
â”‚âŠ³  ðŸ‘¥ Members: ${xmembers}th
â”‚âŠ³  ðŸ•°ï¸ Joined: ${xtime} ${xdate}
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€âŠ°`
Kish.sendMessage(anu.id,
 { text: Kishbody,
 contextInfo:{
 mentionedJid:[num],
 "externalAdReply": {"showAdAttribution": true,
 "containsAutoReply": true,
 "title": ` ${global.botname}`,
"body": `${ownername}`,
 "previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": KishWlcm,
"sourceUrl": `${link}`}}})
                } else if (anu.action == 'remove') {
                	const Kishbuffer = await getBuffer(ppuser)
                    const Kishtime = moment.tz('Africa/Nairobi').format('HH:mm:ss')
	                const Kishdate = moment.tz('Africa/Nairobi').format('DD/MM/YYYY')
                	let KishName = num
                    const Kishmembers = metadata.participants.length  
     Kishbody = `â”Œâ”€â”€âŠ°ðŸð‘­ð‘¨ð‘¹ð‘¬ð‘¾ð‘¬ð‘³ð‘³ðŸâŠ°
â”‚âŠ³  ðŸ‘¤ From: ${metadata.subject}
â”‚âŠ³  ðŸ“ƒ Reason: Left
â”‚âŠ³  ðŸ“” Name: @${KishName.split("@")[0]}
â”‚âŠ³  ðŸ‘¥ Members: ${Kishmembers}th
â”‚âŠ³  ðŸ•’ Time: ${Kishtime} ${Kishdate}
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€âŠ°`
Kish.sendMessage(anu.id,
 { text: Kishbody,
 contextInfo:{
 mentionedJid:[num],
 "externalAdReply": {"showAdAttribution": true,
 "containsAutoReply": true,
 "title": ` ${global.botname}`,
"body": `${ownername}`,
 "previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": KishLft,
"sourceUrl": `${link}`}}})
}
}
} catch (err) {
console.log(err)
}
}
})
    Kish.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }

        return buffer
    }
    }
return startKish()

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})

process.on('uncaughtException', function (err) {
let e = String(err)
if (e.includes("Socket connection timeout")) return
if (e.includes("item-not-found")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
console.log('Caught exception: ', err)
})