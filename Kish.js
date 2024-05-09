const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys')
const os = require('os')
const fs = require('fs')
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const chalk = require('chalk')
const mathjs = require('mathjs')
const Genius = require("genius-lyrics")
const dictionary = require('word-definition')
const wikipedia = require('wikipedia')
const npt = require("node-periodic-table")
const pTable = require("ptable") 
const mver = require('./package.json').version
const moment = require('moment-timezone')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const { exec, spawn, execSync } = require("child_process")
const { performance } = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./Gallery/lib/uploader')
const { toAudio, toPTT, toVideo, ffmpeg, addExifAvatar } = require('./Gallery/lib/converter')
const { smsg, getGroupAdmins, formatp, jam, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, json, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize } = require('./Gallery/lib/myfunc')
let afk = require("./Gallery/lib/afk");
const { fetchBuffer, buffergif } = require("./Gallery/lib/myfunc2")
const yts = require("yt-search");
const ytdl = require("ytdl-core");
/////log
global.modnumber = '254745936840' 
//Gallery/database
let ntilinkall =JSON.parse(fs.readFileSync('./Gallery/database/antilink.json'));
const isnsfw = JSON.parse(fs.readFileSync('./Gallery/database/nsfw.json'));

let _afk = JSON.parse(fs.readFileSync('./Gallery/database/afk-user.json'))
let hit = JSON.parse(fs.readFileSync('./Gallery/database/total-hit-user.json'))

//time
const replay = (teks) => {
            Kish.sendMessage(m.chat, { text: teks}, { quoted: m})
        }
const xtime = moment.tz('Africa/Nairobi').format('HH:mm:ss')
        const xdate = moment.tz('Africa/Nairobi').format('DD/MM/YYYY')
        const time2 = moment().tz('Africa/Nairobi').format('HH:mm:ss')  
         if(time2 < "23:59:00"){
var Kishytimewisher = `Good Night 🌃`
 }
 if(time2 < "19:00:00"){
var Kishytimewisher = `Good Evening 🌆`
 }
 if(time2 < "18:00:00"){
var Kishytimewisher = `Good Evening 🌆`
 }
 if(time2 < "15:00:00"){
var Kishytimewisher = `Good Afternoon 🌄`
 }
 if(time2 < "11:00:00"){
var Kishytimewisher = `Good Morning 🌅 „`
 }
 if(time2 < "05:00:00"){
var Kishytimewisher = `Good Morning 🌅 „`
 } 
module.exports = Kish = async (Kish, m, msg, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectreply.selectedRowId : (m.mtype == 'templateButtonreplyMessage') ? m.message.templateButtonreplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectreply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        
        const prefix = global.prefa
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await Kish.decodeJid(Kish.user.id)
        const itsMe = m.sender == botNumber ? true : false
        
        const sender = m.sender
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        
        const isAudio = (type == 'audioMessage')
        const isText = (type == 'textMessage')
        const isSticker = (type == 'stickerMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const sticker = []
	const { Configuration, OpenAIApi } = require("openai");
	let setting = `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`
        const isAfkOn = afk.checkAfkUser(m.sender, _afk)
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await Kish.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const mentionByTag = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        const isCreator = [botNumber,...global.ownernumber].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
      const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : true;
      const isNsfw = m.isGroup ? isnsfw.includes(from) : false;
      const AntiNsfw = m.isGroup ? isnsfw.includes(from) : false
 /////
const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

	//random
	    // Function to filter JPG and PNG files from a directory
const getRandomImage = (directory) => {
  const files = fs.readdirSync(directory)
    .filter(file => {
      const filePath = path.join(directory, file);
      return fs.statSync(filePath).isFile() && (file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.png'));
    });

  if (files.length === 0) return null;

  const randomFile = files[Math.floor(Math.random() * files.length)];
  const randomFilePath = path.join(directory, randomFile);

  if (fs.existsSync(randomFilePath)) {
    return randomFilePath;
  } else {
    console.log(`Selected file ${randomFile} does not exist.`);
    return null;
  }
};

const imageDirectory = './Gallery/Theme-logo';
  const randomImage = getRandomImage(imageDirectory);

//group chat msg by Kish
const reply = (teks) => {
Kish.sendMessage(m.chat,
{ text: teks },
{ quoted: m})
}



async function loading () {
var Kishlod = [
"《 ▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ████████████》100%",
"Done ✅️"
]
let { key } = await Kish.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})
	
for (let i = 0; i < Kishlod.length; i++) {
await Kish.sendMessage(from, {text: Kishlod[i], edit: key });
}
}

async function Telesticker(url) {
    return new Promise(async (resolve, reject) => {
        if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi)) return reply('Enter your url telegram sticker link')
        packName = url.replace("https://t.me/addstickers/", "")
        data = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, {method: "GET",headers: {"User-Agent": "GoogleBot"}})
        const Kishyresult = []
        for (let i = 0; i < data.data.result.stickers.length; i++) {
            fileId = data.data.result.stickers[i].thumb.file_id
            data2 = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
            result = {
            status: 200,
            author: 'KISH𓅃',
            url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + data2.data.result.file_path
            }
            Kishyresult.push(result)
        }
    resolve(Kishyresult)
    })
}

        if (!Kish.public) {
            if (!isCreator && !m.key.fromMe) return
        }
        if (autoread) {
            Kish.readMessages([m.key])
        }
        if (global.autoTyping) {

        Kish.sendPresenceUpdate('composing', from)


        }

        if (global.autoRecording) {

        Kish.sendPresenceUpdate('recording', from)

        }

        
        //bot number online status, available=online, unavailable=offline
        Kish.sendPresenceUpdate('available', from)
        
        if (global.autorecordtype) {
        let Kishrecordin = ['recording','composing']

        let Kishrecordinfinal = Kishrecordin[Math.floor(Math.random() * Kishrecordin.length)]

        Kish.sendPresenceUpdate(Kishrecordinfinal, from)

        }
        
    // Define the updateProfileStatus function
function updateProfileStatus() {
  // Your profile update code here
  console.log("Updating profile status...");
}
       

if (m.sender.startsWith('212') && global.anti212 === true) {
  return Kish.updateBlockStatus(m.sender, 'block');
}


	
   
	
	//chat counter (console log)
        if (m.message && m.isGroup) {
            
			console.log(chalk.redBright(`\n\nGroup Chat:`))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(groupName, m.chat))
        } else {
            
			console.log(chalk.redBright(`\n\nPrivate Chat:`))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender))
        }

        if (command) {
            const cmdadd = () => {
                hit[0].hit_cmd += 1
                fs.writeFileSync('./Gallery/database/total-hit-user.json', JSON.stringify(hit))
            }
            cmdadd()
            const totalhit = JSON.parse(fs.readFileSync('./Gallery/database/total-hit-user.json'))[0].hit_cmd
        }
        const photooxy = require('./Gallery/lib/photooxy')
        
        

        if (m.isGroup && !m.key.fromMe) {
            let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
            for (let ment of mentionUser) {
                if (afk.checkAfkUser(ment, _afk)) {
                    let getId2 = afk.getAfkId(ment, _afk)
                    let getReason2 = afk.getAfkReason(getId2, _afk)
                    let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
                    let heheh2 = ms(getTimee)
                    reply(`Don't tag him, he's afk\n\n*Reason :* ${getReason2}`)
                }
            }
            if (afk.checkAfkUser(m.sender, _afk)) {
                let getId = afk.getAfkId(m.sender, _afk)
                let getReason = afk.getAfkReason(getId, _afk)
                let getTime = Date.now() - afk.getAfkTime(getId, _afk)
                let heheh = ms(getTime)
                _afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
                fs.writeFileSync('./Gallery/database/afk-user.json', JSON.stringify(_afk))
                Kish.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} have returned from afk`, m)
            }
        }
        
/*------ Not allowing  212 and 210 country codes to use bot in DM ---------- */

  const messSenderMain = m.sender;
  const messForm = m.chat;
  if ( !m.isGroup ){
    if (messForm.startsWith("212") || messForm.startsWith("210") ){
      return;
    }
  }
        
  
 ///antilink 
 if (AntiLinkAll)
   if (budy.includes("https://")){
if (!isBotAdmins) return
bvl = `\`\`\`☠️ Link Detected ☠️\`\`\`\n\nyou are a group admin thats why i wont kick you, but remember from next time`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
        await Kish.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Kish.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Kish.sendMessage(from, {text:`\`\`\`🚫 Link Detected 🚫\`\`\`\n\n@${m.sender.split("@")[0]} *Has been kicked because of sending link in this Group*`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
	    //total features by xeon sir
const Kishfeature = () =>{
            var mytext = fs.readFileSync("./Kish.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length
            return numUpper
}
  
            switch (command) {
            case 'antilink': {
                            if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
if (args[0] === "on") {
if (AntiLinkAll) return reply('*_Already activated_*')
ntilinkall.push(from)
fs.writeFileSync('./Gallery/database/antilink.json', JSON.stringify(ntilinkall))
reply('*_Anti_Link Succesfully set to kick link senders!_*')
var groupe = await Kish.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
} else if (args[0] === "off") {
if (!AntiLinkAll) return reply('*_Already deactivated_*')
let off = ntilinkall.indexOf(from)
ntilinkall.splice(off, 1)
fs.writeFileSync('./Gallery/database/antilinkall.json', JSON.stringify(ntilinkall))
reply('*_Antilink Successful deactivated_*')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
  
  case 'setppbot': case 'setbotpp': {
if (!isCreator) return replay(mess.botowner)
if (!quoted) return reply(`Send/Reply Image With Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
var medis = await Kish.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `full`) {
var { img } = await generateProfilePicture(medis)
await Kish.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
reply(`Succes`)
} else {
var memeg = await Kish.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
reply(`Success, Thank you for the new profile photo, my darling ðŸ˜š`)
}
}
break

            case 'deletesession':
            case 'delsession':
            case 'clearsession': {
                if (!isCreator) return reply(mess.owner)
                fs.readdir("./Gallery/session", async function(err, files) {
                    if (err) {
                        console.log('Unable to scan directory: ' + err);
                        return reply('Unable to scan directory: ' + err);
                    }
                    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                        item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
                    )
                    console.log(filteredArray.length);
                    let teks = `Detected ${filteredArray.length} junk files\n\n`
                    if (filteredArray.length == 0) return reply(teks)
                    filteredArray.map(function(e, i) {
                        teks += (i + 1) + `. ${e}\n`
                    })
                    reply(teks)
                    await sleep(2000)
                    reply("Delete junk files...")
                    await filteredArray.forEach(function(file) {
                        fs.unlinkSync(`./Gallery/session/${file}`)
                    });
                    await sleep(2000)
                    reply("Successfully deleted all the trash in the session folder")
                });
            }
            break
            case 'join':
                try {
                    if (!isCreator) return reply(mess.owner)
                    if (!text) return reply('Enter Group Link!')
                    if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link Invalid!')
                    reply(mess.wait)
                    let result = args[0].split('https://chat.whatsapp.com/')[1]
                    await Kish.groupAcceptInvite(result).then((res) => reply(json(res))).catch((err) => reply(json(err)))
                } catch {
                    reply('Failed to join the Group')
                }
                break      
            case 'session':
                if (!isCreator) return reply(mess.owner)
                reply('Wait a moment, currently retrieving your session file')
                let sesi = await fs.readFileSync('./session/creds.json')
                Kish.sendMessage(m.chat, {
                    document: sesi,
                    mimetype: 'application/json',
                    fileName: 'creds.json'
                }, {
                    quoted: m
                })
                break
            case 'shutdown':
                if (!isCreator) return reply(mess.owner)
                reply(`â™ ï¸Goodbye........`)
                await sleep(3000)
                process.exit()
                break
            case 'restart':
                if (!isCreator) return reply(mess.owner)
                reply('Restarting....')
                exec('pm2 restart all')
                break
	    case 'fbdl': case 'fb': case 'facebook': case 'fbmp4': {                 

        if (!text) return reply(`Please provide the link!\n\nExample: ${prefix}fbdl https://www.facebook.com/groups/599913174599515/permalink/705467384044093/`)
           if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(`Invalid link!`)
       let bocil = require('@bochilteam/scraper')  
           bocil.facebookdlv2(`${text}`).then(async (data) => {                   
               let txt = `「 _Facebook Downloader_ 」\n\n`
               txt += `*Title :* ${data.title}\n`
               txt += `*Quality :* ${data.result[0].quality}\n`
               txt += `*Description:* ${data.description}\n`
               txt += `*URL :* ${text}\n\n`
           buf = await getBuffer(data.thumbnail)    
           Kish.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m })         
           for (let i of data.result) {     
           Kish.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail:buf, caption: `*Quality :* ${i.quality}`}, { quoted: m })
           }          
           }).catch((err) => {
               reply('An error Occured')
           })
       }
       break;
	    case 'lyrics': {
  if (!m.isGroup) return reply(mess.Group)	 			
  //if (!isCreator) return reply(mess.owner)
  if (!m.isGroup) return replay(mess.grouponly)
Kish.sendMessage(from, { react: { text: "🍁" , key: m.key }})
if (!text) return reply(`Comand usage: ${prefix}lyrics Thunder`)
reply(mess.waiting)	
const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
const result = await lyricsv2(text).catch(async _ => await lyrics(text))
reply(`
*Title :* ${result.title}
*Author :* ${result.author}

*Lyrics :* ${result.lyrics}

`.trim())
}
break;		    
            case 'autoread':
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoread = true
                    reply(`Successfully changed autoread to ${q}`)
                } else if (q === 'off') {
                    autoread = false
                    reply(`Successfully changed autoread to ${q}`)
                }
                break
                
                case "alive": { 

 Kish.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/3016068c9a9f6249a6ff2.jpg' }, caption: `Hello ${m.pushName}, Kish Md is active\n\nActive for:  ${runtime(process.uptime())}\n\nType ${prefix}menu.`, fileLength: "9999999999898989899999999" }, { quoted: m }); 
 }
break;
		case "enc":
let forq = m.quoted ? m.quoted.text ? m.quoted.text : text ? text : m.text : m.text
var JavaScriptObfuscator = require('javascript-obfuscator');
if (!text && !m.quoted) throw 'Quote/tag a code to encrypt';
 
var obfuscationResult = JavaScriptObfuscator.obfuscate(forq, 

  
    {
        compact: false,
        controlFlowFlattening: true,
        controlFlowFlatteningThreshold: 1,
        numbersToExpressions: true,
        simplify: true,
        stringArrayShuffle: true,
        splitStrings: true,
        stringArrayThreshold: 1
    }
);

console.log("successfully encrypted the code");
reply(obfuscationResult.getObfuscatedCode());

break;	    
                case 'autotyping':
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoTyping = true
                    reply(`Successfully changed auto-typing to ${q}`)
                } else if (q === 'off') {
                    autoTyping = false
                    reply(`Successfully changed auto-typing to ${q}`)
                }
                break
                case 'autorecording':
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoRecording = true
                    reply('*_Successfully changed to auto-recording_*')
                } else if (q === 'off') {
                    autoRecording = false
                    reply('*_Successfully changed auto-recording off_*')
                }
                break
	           case 'gpt3':
		Kish.sendMessage(from, { react: { text: "🤖", key: m.key }})
if (!q) return reply(`Please provide a text query. Example: ${prefix + command} Hello, ChatGPT!`);

const apiUrl = `https://api.maher-zubair.tech/ai/chatgptv4?q=${encodeURIComponent(q)}`;

try {
  const response = await fetch(apiUrl);
  const responseData = await response.json();

  if (response.status === 200 && responseData && responseData.status === true && responseData.data) {
    const message = responseData.data;
    const me = m.sender;
    await Kish.sendMessage(m.chat, { text: message, mentions: [me] }, { quoted: m });
  } else {
//    reply("Sorry, I couldn't fetch a response from the API at the moment.");
  }
} catch (error) {
  console.error(error);
  reply("An error occurred while fetching the response from the API.");
                    }    
		case "chatgpt": case "gpt": 
          

            if (!text) return reply("I need more text please. Make your query a bit longer.");

           const configuration = new Configuration({

              apiKey: setting,

            });

            const openai = new OpenAIApi(configuration);

            try {

const response = await openai.createChatCompletion({

          model: "gpt-3.5-turbo",

          messages: [{role: "user", content: text}],

          });

          m.reply(`${response.data.choices[0].message.content}`);

          } catch (error) {

          if (error.response) {

            console.log(error.response.status);

            console.log(error.response.data);

            console.log(`${error.response.status}\n\n${error.response.data}`);

          } else {

            console.log(error);

            m.reply("I\'m Facing An Error:"+ error.message);

          }

		    }	    
                case 'autorecordtype':
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autorecordtype = true
                    reply('*_Successfully changed auto recording and typing_*')
                } else if (q === 'off') {
                    autorecordtype = false
                    reply('*_Successfully changed auto recording and typing off_*')
                }
                break
                case 'autoswview':
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoread_status = true
                    reply('*_Successfully changed auto status/story view_*')
                } else if (q === 'off') {
                    autoread_status = false
                    reply('*_Successfully changed auto status/story view Off_*')
                }
                break
            case 'readvo': case 'vv':
           if (!m.quoted) return reply(`Reply to Image With Caption ${prefix + command}`)
if (m.quoted.mtype == 'viewOnceMessageV2') {
    if (m.isBaileys && m.fromMe) return
    let val = { ...m }
    let msg = m.quoted.message
    delete msg[Object.keys(msg)[0]].viewOnce
    val.message = msg
    await Kish.sendMessage(m.chat, { forward: val }, { quoted: m })
}
break
            case 'public': {
                if (!isCreator)  reply(mess.owner)
                Kish.public = true
                reply('*Successful in Changing To Public Usage*')
            }
            break
            case 'self': {
                if (!isCreator)  reply(mess.owner)
                Kish.public = false
                reply('*Successful in Changing To Self Usage*')
            }
            break
                case 'weather':

        Kish.sendMessage(from, { react: { text: "🌫️", key: m.key }}) 
        if (!args[0]) return reply("Enter your location to search weather.")
        myweather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${args.join(" ")}&units=metric&appid=e409825a497a0c894d2dd975542234b0&language=tr`)

        const weathertext = `           ⛅ *Weather Report* ⛅  \n\n🔎 *Search Location:* ${myweather.data.name}\n*🌐 Country:* ${myweather.data.sys.country}\n🌈 *Weather:* ${myweather.data.weather[0].description}\n *Temperature:* ${myweather.data.main.temp}°C\n🌡️ *Minimum Temperature:* ${myweather.data.main.temp_min}°C\n🔥 *Maximum Temperature:* ${myweather.data.main.temp_max}°C\n❄️ *Humidity:* ${myweather.data.main.humidity}%\n🌬️ *Wind:* ${myweather.data.wind.speed} km/h\n`
        Kish.sendMessage(from, { video: { url: 'https://media.tenor.com/bC57J4v11UcAAAPo/weather-sunny.mp4' }, gifPlayback: true, caption: weathertext }, { quoted: m })

        break;
            case 'setexif':
                if (!isCreator) return reply(mess.owner)
                if (!text) return reply(`Example : ${prefix + command} packname|author`)
                global.packname = text.split("|")[0]
                global.author = text.split("|")[1]
                reply(`Exif successfully changed to\n\nâ€¢ Packname : ${global.packname}\nâ€¢ Author : ${global.author}`)
                break
            case 'setpp':
            case 'setpp':
            case 'setppbot':
                if (!isCreator) return reply(mess.owner)
                if (!quoted) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await Kish.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await Kish.query({
                        tag: 'iq',
                        attrs: {
                            to: botNumber,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    reply(mess.done)
                } else {
                    var memeg = await Kish.updateProfilePicture(botNumber, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    reply(mess.done)
                }
                break
            case 'block':
                if (!isCreator) return reply(mess.owner)
                let blockw = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await Kish.updateBlockStatus(blockw, 'block').then((res) => reply(json(res))).catch((err) => reply(json(err)))
                break
            case 'unblock':
                if (!isCreator) return reply(mess.owner)
                let blockww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await Kish.updateBlockStatus(blockww, 'unblock').then((res) => reply(json(res))).catch((err) => reply(json(err)))
                break
            case 'leave':
                if (!isCreator) return reply(mess.owner)
                if (!m.isGroup) return reply(mess.group)
                reply('ðŸŸ¨Bye Everyone ðŸ¥º')
                await Kish.groupLeave(m.chat)
                break
            case 'bcgc':
            case 'bcgroup': {
                if (!isCreator) return reply(mess.owner)
                if (!text) return reply(`Which text?\n\nExample : ${prefix + command} It's holiday tomorrow `)
                let getGroups = await Kish.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                reply(`Send Broadcast To ${anu.length} Group Chat, End Time ${anu.length * 1.5} second`)
                for (let i of anu) {
                    await sleep(2500)
                    let a = '```' + `\nðŸ“’${text}\n\n` + '```' + '\n\n*✍️Author:* ${pushname} '
                    Kish.sendMessage(i, {
                        text: a,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: ' *🎐Kish Broadcast🎐* ',
                                body: `Sent ${i.length} Group`,
                                thumbnailUrl: 'https://telegra.ph/file/3fd18ee11521117c7c882.jpg',
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    })
                }
                reply(`Broadcast Sent !`)
            }
            break
            case 'getcase':
                if (!isCreator) return reply(mess.owner)
                const getCase = (cases) => {
                    return "case" + `'${cases}'` + fs.readFileSync("Kish.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
                }
                reply(`${getCase(q)}`)
                break
                case 'stealdp': {
            const user = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
        if (user === botNumber) return m.reply('_🙅🏻 I can not steal my own profile picture, Darling 🍭_');
        const {key} = await m.reply("𝒑𝒍𝒆𝒂𝒔𝒆 𝒘𝒂𝒊𝒕 𝑫𝒂𝒓𝒍𝒊𝒏𝒈 🍭");
        let picture;
        try {
            picture = await getBuffer(await Kish.profilePictureUrl(user, 'image'));
        } catch (err) {
            return m.edit(`_❌ @${user.split('@')[0]} Doesn't have a profile picture, or it's hidden.`, key, { mentions: [user] });
        }
        Kish.updateProfilePicture(botNumber, picture)
        .then(() => m.edit('✅ 𝐏𝐫𝐨𝐟𝐢𝐥𝐞 𝐏𝐢𝐜𝐭𝐮𝐫𝐞 𝐒𝐭𝐞𝐚𝐥𝐞𝐝', key))
        .catch((error) => {
            console.error(error);
            m.edit('Error! try again later', key);
        });
        }
        break;
            case 'delete':
            case 'del': {
                if (!isCreator) return reply(mess.done)
                if (!m.quoted) throw false
                let {
                    chat,
                    fromMe,
                    id,
                    isBaileys
                } = m.quoted
                if (!isBaileys) return reply('The message was not sent by a bot!')
                Kish.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        fromMe: true,
                        id: m.quoted.id,
                        participant: m.quoted.sender
                    }
                })
            }
            break

            case 'closetime':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return reply('*Choose:*\nsecond\nminute\nhour\nday\n\n*Example*\n10 second')
                }
                reply(`Close time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const close = `*Closed* group closed by admin\nnow only admin can send messages`
                    Kish.groupSettingUpdate(m.chat, 'announcement')
                    reply(close)
                }, timer)
                break
            case 'opentime':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return reply('*Choose:*\nsecond\nminute\nhour\nday\n\n*Example*\n10 second')
                }
                reply(`Open time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const open = `*Opened* The group is opened by admin\nNow members can send messages`
                    Kish.groupSettingUpdate(m.chat, 'not_announcement')
                    reply(open)
                }, timer)
                break
            case 'remove':{
  if (!m.isGroup) return reply(mess.group)	 			
if (!m.isGroup) return replay(mess.grouponly)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
Kish.sendMessage(from, { react: { text: "" , key: m.key }})
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Kish.groupParticipantsUpdate(m.chat, [users], 'remove')

await reply("Removed successfully")
}
break;
            case 'add':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                let blockwwww = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await Kish.groupParticipantsUpdate(m.chat, [blockwwww], 'add').then((res) => reply(json(res))).catch((err) => reply(json(err)))
                break
            case 'promote':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                let user2 = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await Kish.groupParticipantsUpdate(m.chat, [user2], 'promote')

await reply("Promoted successful")
                break
                case 'antibot':
  if (!isCreator) return reply(mess.owner);
  if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin);
  if (!isBotAdmins) return reply(mess.botAdmin);
  if (args.length < 1) return reply('on/off?');
  if (args[0] === 'on') {
    antibot = true;
//    removeOtherBot(); // Call function to remove other bot
    reply(`${command} is enabled`);
  } else if (args[0] === 'off') {
    antibot = false;
    reply(`${command} is disabled`);
  }
  break;
         case 'unavailable':
                if (!isCreator) return reply(mess.owner)
                if (!isBotAdmins) return reply(mess.botAdmin);(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    db.data.settings[botNumber].online = true
                    replyKish(`Successfully changed unavailable to ${q}`)
                } else if (q === 'off') {
                    db.data.settings[botNumber].online = false
                    replyKish(`Successfully changed unavailable to ${q}`)
                }
                break;
            case 'demote':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                let user3 = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await Kish.groupParticipantsUpdate(m.chat, [user3], 'demote')

await reply("Demote successfully");
            case 'setname':
            case 'setsubject':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!text) return 'Text ?'
                await Kish.groupUpdateSubject(m.chat, text).then((res) => reply(mess.done)).catch((err) => reply(json(err)))
                break
            case 'setdesc':
            case 'setdesk':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!text) return 'Text ?'
                await Kish.groupUpdateDescription(m.chat, text).then((res) => reply(mess.done)).catch((err) => reply(json(err)))
                break
            case 'setppgroup':
            case 'setppgrup':
            case 'setppgc':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!quoted) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await Kish.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await Kish.query({
                        tag: 'iq',
                        attrs: {
                            to: m.chat,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    reply(mess.done)
                } else {
                    var memeg = await Kish.updateProfilePicture(m.chat, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    reply(mess.done)
                }
                break
case 'tag': case 'tagall': case 'all':{
      

 if (!m.isGroup) return replay(mess.grouponly)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 let teks = `🧩𝗧𝗮𝗴𝗮𝗹𝗹🧩
  
 *Message : ${args.join(" ") ? args.join(" ") : 'no message'}*\n\n`
 for (let mem of participants) {
 teks += `ðŸ”® @${mem.id.split('@')[0]}\n`
 }
 Kish.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
 }
 break
 
 
            case 'totag':
                if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!isAdmins) return reply(mess.admin)
                if (!m.quoted) return reply(`Reply messages with captions ${prefix + command}`)
                Kish.sendMessage(m.chat, {
                    forward: m.quoted.fakeObj,
                    mentions: participants.map(a => a.id)
                })
                break
            case 'group':
            case 'mute/unmute':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (args[0] === 'mute') {
                    await Kish.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`*_SUCCESSFULLY CLOSED THE GROUP_*`)).catch((err) => reply(json(err)))
                } else if (args[0] === 'unmute') {
                    await Kish.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`*THE GROUP HAS BEEN OPENED SUCCESSFULLY*`)).catch((err) => reply(json(err)))
                } else {
                    reply(`Mode ${command}\n\n\nType ${prefix + command}open/close`)
                }
                break
            case 'editinfo':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (args[0] === 'open') {
                    await Kish.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Successfully Opened Group Edit Info ðŸ•Šï¸`)).catch((err) => reply(json(err)))
                } else if (args[0] === 'close') {
                    await Kish.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Successfully Closed Group Edit InfoðŸ•Šï¸`)).catch((err) => reply(json(err)))
                } else {
                    reply(`Mode ${command}\n\n\nType ${prefix + command}on/off`)
                }
                break
            case "gclink":
      case "grouplink":
        {
                              if (!m.isGroup) return reply(mess.group)
                  if (!isBotAdmins) return reply(mess.botAdmin)            

          let response = await Kish.groupInviteCode(m.chat);
          Kish.sendText(
            m.sender,
            ` 🤖𝐵𝑜𝑡 𝑛𝑎𝑚𝑒:-  Kish Bot\n\n🔖𝐺𝑟𝑜𝑢𝑝 𝑛𝑎𝑚𝑒:- ${groupMetadata.subject}\n\n🔰𝐺𝑟𝑜𝑢𝑝 𝑙𝑖𝑛𝑘:- https://chat.whatsapp.com/${response}`,
            m,
            { detectLink: true }
          );
        }
    await Kish.sendMessage(m.chat, 'I sent you the Group Link in a personal message. Please check.', { gifPlayback: true, quoted: m });
        break
        
            case 'revoke':
            case 'resetlink':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                await Kish.groupRevokeInvite(m.chat)
                    .then(res => {
                        reply(`Successful Reset, Group Invite Link ${groupMetadata.subject}`)
                    }).catch((err) => reply(json(err)))
                break
                
            
            case "sc": case "script": case"repo": {
const axios = require("axios");
let repoInfo = await axios.get("https://api.github.com/repos/Brashokish/Kish-MD");
        let repo = repoInfo.data;
        console.log(repo);

   const scritxt = `*🚀𝐊𝐢𝐬𝐡-𝑩𝒐𝒕-𝑺𝒄𝒓𝒊𝒑𝒕🚀*\n
  *⭐Creator:* Brasho kish\n
  *⭐ Repo:* ${repo.html_url}\n
  *⭐ Total Forks:* ${repo.forks_count}\n
  *⭐ Total Stars:* ${repo.stargazers_count}\n
  *⭐ Repo Size:* ${(repo.size/1024).toFixed(2)} MB\n
  *🔟Last Updated:* ${repo.updated_at}\n
 
 *Kish Bots inc* 
* Dont forget to give a Star ⭐ to the repo.*`

        Kish.sendMessage(from, { video: { url: 'https://media.tenor.com/Zco-fadJri4AAAPo/code-matrix.mp4' }, gifPlayback: true, caption: scritxt }, { quoted: m })
}
        break;
        
        
            

                                case 'sticker':
            case 'stiker':
            case 's': {
                if (!quoted) return reply(`Reply to Video/Image With Caption ${prefix + command}`)
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await Kish.sendImageAsSticker(m.chat, media, m, {
                        
                        author: global.stickername
                    })
                    await fs.unlinkSync(encmedia)
                } else if (isVideo || /video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds!')
                    let media = await quoted.download()
                    let encmedia = await Kish.sendVideoAsSticker(m.chat, media, m, {
                        packname: global.stickername,
                       
                    })
                    await fs.unlinkSync(encmedia)
                } else {
                    return reply(`Send Images/Videos With Captions ${prefix + command}\nVideo Duration 1-9 Seconds`)
                }
            }
            break
            case 'smeme': {
                let respond = `Send/Reply image/sticker with caption ${prefix + command} text1|text2`
                if (!/image/.test(mime)) return reply(respond)
                if (!text) return reply(respond)
                reply(mess.wait)
                atas = text.split('|')[0] ? text.split('|')[0] : '-'
                bawah = text.split('|')[1] ? text.split('|')[1] : '-'
                let dwnld = await Kish.downloadAndSaveMediaMessage(qmsg)
                let fatGans = await TelegraPh(dwnld)
                let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`
                let pop = await Kish.sendImageAsSticker(m.chat, smeme, m, {
                    packname: global.stickername,
                    
                })
                fs.unlinkSync(pop)
            }
            break
case 'swm': case 'steal': case 'stickerwm': case 'take':{
if (!args.join(" ")) return reply(`Where is the text?`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0]
const atnm = swn.split("|")[1]
if (m.quoted.isAnimated === true) {
Kish.downloadAndSaveMediaMessage(quoted, "gifee")
Kish.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await Kish.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 Seconds!')
let media = await quoted.download()
let encmedia = await Kish.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else {
reply(`Photo/Video?`)
}
}
break
            case 'image':
            case 'img': {
                if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
                reply(mess.wait)
                let media = await Kish.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    Kish.sendMessage(m.chat, {
                        image: buffer
                    }, {
                        quoted: m
                    })
                    fs.unlinkSync(ran)
                })

            }
            break
           case 'calculator': case 'cal': case 'calculate': {

        if (args.length < 1) return reply(`*Example :*\n${prefix}calculator 2*5\n\n`)

        let qsd = args.join(" ")
        if (typeof mathjs.evaluate(qsd) !== 'number') {
          reply('Error ❌')
        } else {
          reply(`\`\`\`「 🧮 Calculator Tool 🧮 」\`\`\`\n\n*Input :* ${qsd}\n*Calculation Result :* ${mathjs.evaluate(qsd.replace(/×/g, "*").replace(/x/g, "*").replace(/÷/g, "/"))}`)
        }
      }
        break;
            case 'mp4':
            case 'video': {
                if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
                reply(mess.wait)
                let media = await Kish.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await Kish.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    }
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            case 'checkdeath':
             if (!text) return replay(`Use Someone's Name, Example : ${prefix + command} Kish`)
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              reply(`Name : ${predea.data.name}\n*Dead At Age :* ${predea.data.age} Year.\n\n_Quick, Quick, Repent Bro, Because No One Knows About Death_`)
              break
            case 'mp3': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply Video/Audio that you want to make into MP3 with caption ${prefix + command}`)
                reply(mess.wait)
                let media = await Kish.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                Kish.sendMessage(m.chat, {
                    document: audio,
                    mimetype: 'audio/mp3',
                    fileName: `Kish-bot.mp3`
                }, {
                    quoted: m
                })

            }
            break
            case 'define':
    if (!args[0]) return reply(`Please specify a word to define. For example: ${prefix}define computer`);

    
    const word = args[0];

    dictionary.getDef(word, 'en', null, async function(definition) {
        if (!definition || !definition.definition) {
            return reply(`Definition for "${word}" not found.`);
        }

        const meaning = definition.definition;

        await Kish.sendMessage(from, `📚 *Definition of ${word}*\n\n${meaning}`, { quoted: m });
    });
    break;
                   
                   case 'sciencefact':
    // Call a function to fetch a random science fact
    const scienceFact = await fetchRandomScienceFact();
    
    if (scienceFact) {
        reply(`*Random Science Fact:*\n\n${scienceFact}`);
    } else {
        reply('Failed to fetch a random science fact.');
    }
    break;

// Function to fetch a random science fact
async function fetchRandomScienceFact() {
    try {
        // Call an API or fetch data from a science facts database
        // Example:
        const response = await fetch('https://uselessfacts.jsph.pl/random.json?language=en');
        const data = await response.json();
        
        // Extract the science fact from the response
        const fact = data.text;
        
        return fact;
    } catch (error) {
        console.error('Error fetching random science fact:', error);
        return null;
    }
}
    
    case 'sciencenews':
    // Call a function to fetch the latest science news headlines
    const headlines = await fetchScienceNewsHeadlines();
    
    if (headlines && headlines.length > 0) {
        reply(`*Latest Science News Headlines:*\n\n${headlines.join('\n')}`);
    } else {
        reply('Failed to fetch science news headlines.');
    }
    break;

// Function to fetch the latest science news headlines using the News API
async function fetchScienceNewsHeadlines() {
    const apiKey = 'bf17483564e24e2aa83ff6dc6a8e79eb'; // Provided News API key
    
    try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?category=science&apiKey=${apiKey}`);
        const data = await response.json();
        
        if (data.articles && data.articles.length > 0) {
            // Extract the headlines from the response
            const headlines = data.articles.map(article => article.title);
            return headlines;
        } else {
            console.error('No articles found in the response.');
            return null;
        }
    } catch (error) {
        console.error('Error fetching science news headlines:', error);
        return null;
    }
}

// Add more cases for other games as needed

//Function of games
case 'chat':
 
    const axios = require("axios");
    
    botreply = await axios.get(
      `http://api.brainshop.ai/get?bid=180857&key=SeLyK3P24U91Ed7a&uid=[Kishbot]&msg=[text]`
    );

    txtChatbot = `${botreply.data.cnt}`;
    m.reply(txtChatbot);
  
  break;
    
    case "exec":
      case "run":      
        if (!text) {
          return m.reply(
            `🍭𝑫𝒂𝒓𝒍𝒊𝒏𝒈 𝑷𝒍𝒆𝒂𝒔𝒆 𝒑𝒓𝒐𝒗𝒊𝒅𝒆 𝒂 𝒄𝒐𝒎𝒎𝒂𝒏𝒅 𝒕𝒐 𝒆𝒙𝒆𝒄𝒖𝒕𝒆! \n\n 𝑬𝒙𝒂𝒎𝒑𝒍𝒆: *${prefix}𝒆𝒙𝒆𝒄 𝒎.𝒓𝒆𝒑𝒍𝒚("3𝒓𝒅 𝒑𝒂𝒓𝒕𝒚 𝒄𝒐𝒅𝒆 𝒊𝒔 𝒃𝒆𝒊𝒏𝒈 𝒆𝒙𝒆𝒄𝒖𝒕𝒆𝒅...")*`
          );
        }
        try {
          const result = eval(text);
          out = JSON.stringify(result, null, "\t") || "Evaluated JavaScript";
        } catch (e) {
          m.reply(`Error: ${e.message}`);
        }
        break;
            case 'vn':
            case 'toptt': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Reply Video/Audio that you want to make into a VN with caption ${prefix + command}`)
                reply(mess.wait)
                let media = await Kish.downloadMediaMessage(qmsg)
                let {
                    toPTT
                } = require('./Gallery/lib/converter')
                let audio = await toPTT(media, 'mp4')
                Kish.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg',
                    ptt: true
                }, {
                    quoted: m
                })

            }
            break
            case 'gif': {
                if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
                reply(mess.wait)
                let media = await Kish.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await Kish.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    },
                    gifPlayback: true
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            case 'url': {
                reply(mess.wait)
                let media = await Kish.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    reply(util.format(anu))
                }
                await fs.unlinkSync(media)

            }
            break
            case 'emojimix': {
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1) return reply(`Example : ${prefix + command} 😅+🤔`)
                if (!emoji2) return reply(`Example : ${prefix + command} 😅+🤔`)
                reply(mess.wait)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await Kish.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.stickername,
                       
                        categories: res.tags
                    })
                    await fs.unlinkSync(encmedia)
                }
            }
            break
            case 'toonce':
            case 'viewonce': {
                if (!quoted) return reply(`Reply Image/Video`)
                if (/image/.test(mime)) {
                    anuan = await Kish.downloadAndSaveMediaMessage(quoted)
                    Kish.sendMessage(m.chat, {
                        image: {
                            url: anuan
                        },
                        caption: `Here you go!`,
                        fileLength: "999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/video/.test(mime)) {
                    anuanuan = await Kish.downloadAndSaveMediaMessage(quoted)
                    Kish.sendMessage(m.chat, {
                        video: {
                            url: anuanuan
                        },
                        caption: `Here you go!`,
                        fileLength: "99999999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                }
            }
            break
            case 'qr': {
                if (!q) return reply(' Please include link or text!')
                const QrCode = require('qrcode-reader')
                const qrcode = require('qrcode')
                let qyuer = await qrcode.toDataURL(q, {
                    scale: 35
                })
                let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
                let buff = getRandom('.jpg')
                await fs.writeFileSync('./' + buff, data)
                let medi = fs.readFileSync('./' + buff)
                await Kish.sendMessage(from, {
                    image: medi,
                    caption: "Here you go!"
                }, {
                    quoted: m
                })
                setTimeout(() => {
                    fs.unlinkSync(buff)
                }, 10000)
            }
            break
            case 'fliptext': {
                if (args.length < 1) return reply(`Example:\n${prefix}fliptext Kishy`)
                quere = args.join(" ")
                flipe = quere.split('').reverse().join('')
                reply(`\`\`\`ã€Œ FLIP TEXT ã€\`\`\`\n*â€¢> Normal :*\n${quere}\n*â€¢> Flip :*\n${flipe}`)
            }
            break
           const {
	inrl,
	mode,
	truecaller,
} = require('../lib/');

inrl({
	pattern: 'true ?(.*)',
	desc: 'search number on truecaller',
	type: "search",
	fromMe: true
}, async (message, match) => {
	if (match.match(/login/gi)) {
		match = match.replace(/login/gi, '');
		if (!match) return await message.send('_give me a number to send otp_');
		const msg = await truecaller.set(match);
		if (msg === true) return await message.send(`_successfully send otp to this ${match} number_\n_use *true otp* <key> to login_`);
		return await message.send(`*message:* _use *true logout* as first_\n*resone*: ${msg}`);
	} else if (match.match(/logout/gi)) {
		await truecaller.logout(match);
		return await message.send(`_successfull_`);
	} else if (match.match(/otp/gi)) {
		match = match.replace(/otp/gi, '');
		if (!match) return await message.send('_please provide an otp_');
		const msg = await truecaller.otp(match);
		if (msg === true) return await message.send(`_successfully Logined to Truecaller!!_`);
		return await message.send(`*message:* _use *true logout* as first_\n*resone*: ${msg}`);
	}
	let user = (message.mention.jid?.[0] || message.reply_message.mention.jid?.[0] || message.reply_message.sender || match).replace(/[^0-9]/g, '');
	if (!user) return await message.send(`_reply to a user_`)
	const res = await truecaller.search(user);
	if (!res.status) return await message.send(res.message);
	let msg = ` truecaller  \n`//buntline n eromd edi
	delete res.status;
	for (const key in res) {
		msg += ` ${key.toLowerCase()}: ${res[key]}\n`;
	}
	msg += ``;
	return await message.send('```' + msg + '```', {quoted: message.data})
});
            case 'afk':
                if (!m.isGroup) return reply(mess.group)
                if (isAfkOn) return reply("Already afk")
                let reason = text ? text : 'Nothing.'
                afk.addAfkUser(m.sender, Date.now(), reason, _afk)
                reply(`@${m.sender.split('@')[0]} Currently AFK\nWith reason : ${reason}`)
                break
      case 'qc': {
                const {
                    quote
                } = require('./Gallery/lib/quote.js')
                if (!q) return reply('Enter Text')
                let ppnyauser = await await Kish.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')
                const rest = await quote(q, pushname, ppnyauser)
                reply(mess.wait)
                Kish.sendImageAsSticker(m.chat, rest.result, m, {
                    packname: `${global.stickername}`

                })
            }
            break

case 'play':
    case 'stream':{
        if (!text) {
            reply('Provide a search term!\nE.g: play NWA Appetite for destruction. ')
            return;
        }
        try {
            const {
                videos
            } = await yts(text);
            if (!videos || videos.length <= 0) {
                reply(`No Matching videos found for : *${args[0]}*!!`)
                return;
            }
            let urlYt = videos[0].url
            let infoYt = await ytdl.getInfo(urlYt);
            //30 MIN
            if (infoYt.videoDetails.lengthSeconds >= 7200) {
                reply(`File is too big for me to download`);
                return;
            }
            const getRandonm = (ext) => {
                return `${Math.floor(Math.random() * 10000)}${ext}`;
            };
            let titleYt = infoYt.videoDetails.title;
            let randomName = getRandonm(".mp3");
            const stream = ytdl(urlYt, {
                    filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
                })
                .pipe(fs.createWriteStream(`./${randomName}`));
            console.log("Audio downloading ->", urlYt);

reply(`_Downloading ${infoYt.videoDetails.title}_`);
            await new Promise((resolve, reject) => {
                stream.on("error", reject);
                stream.on("finish", resolve);
            });

            let stats = fs.statSync(`./${randomName}`);
            let fileSizeInBytes = stats.size;
            // Convert the file size to megabytes (optional)
            let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
            console.log("Audio downloaded ! \n Size: " + fileSizeInMegabytes);
            if (fileSizeInMegabytes <= 200) {
                //sendFile(from, fs.readFileSync(`./${randomName}`), msg, { audio: true, jpegThumbnail: (await getBuffer(dl.meta.image)).buffer, unlink: true })
                await Kish.sendMessage(
                    from, {
                        document: fs.readFileSync(`./${randomName}`),
                        mimetype: "audio/mpeg",
                        fileName: titleYt + ".mp3",
                    }, {
                        quoted: m
                    }
                );
            } else {
                reply(`File size bigger.`);
            }
            fs.unlinkSync(`./${randomName}`);
        } catch (e) {
            reply(e.toString())
        }
    }
break;

case 'ytmp4': case 'ytvideo': {
const Kishvidoh = require('./Gallery/lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !Kishvidoh.isYTUrl(text)) reply(`Where is the link??\n\nExample : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
const vid=await Kishvidoh.mp4(text)
const ytc=`
*${themeemoji}Tittle:* ${vid.title}
*${themeemoji}Date:* ${vid.date}
*${themeemoji}Duration:* ${vid.duration}
*${themeemoji}Quality:* ${vid.quality}`
await Kish.sendMessage(m.chat,{
    video: {url:vid.videoUrl},
    caption: ytc
},{quoted:m})
}
break
///////////////////////////////////////////////////

case "gpt4":

const { G4F } = require("g4f"); 

if (!text) return m.reply("provide text.");




const GPT = new G4F(); 

const messages = [
        { role: "system", content: "You're a bot."},
        { role: "user", content: text}
];


GPT.chatCompletion(messages)
  .then(result => {
    console.log(result);
    m.reply(result);
  });
break


         
//////////////////////////////
            case "rules":
      
        const helptxt = `_*📍[Rules for Kish Md usage]📍*_\n\n\n*>>>* use -support to get the Official group link in your dm.\n\n*--->* If you want to add Kish-Md in your group the contact the owner by *-owner/-mods* \n\n*--->* Dont use wrong command, use the command given in the *-help* list \n\n* Dont spam the bot with commands if Kish-Md is not responding, its means the maybe owner is offline or facing internet issue. \n\n*IF YOU DONT FOLLOW THE RULES THEN YOU WILL BE BANNED* 🚫 \n\n\n*𓅃 Kish Bots inc* `

        Kish.sendMessage(from, { video: { url: 'https://c.tenor.com/geMdtLCXZkAAAAPo/rules.mp4' }, gifPlayback: true, caption: helptxt }, { quoted: m })

        break
      case 'bot': 
       
        
        let txxt = ` Hello *${pushname}*, i am  *Kish-Md* A whatsapp bot command ${prefix}menu`

       Kish.sendMessage(m.chat, { image: { url: "./Gallery/ch1.jpg" }, caption: txxt, gifPlayback: true }, { quoted: m });
        break
      case "support":
     
        let tex = `📍Welcome to My Developer's Hub!📍

https://chat.whatsapp.com/LhBwWwQAS4y93XOsCKpxdv`

        await Kish.sendMessage(m.sender,{ image: {url: "./Gallery/sup.jpg"}, caption: `${tex}` },);

        await Kish.sendMessage(m.chat, { image: { url: "./Gallery/ch2.jpg" }, caption: 'I sent you the support Link in personal message.\n Pls check.', gifPlayback: true }, { quoted: m });
        break

      case "info":
            //Kish.sendMessage(from, { react: { text: "ℹ️", key: m.key }}) 
        let ifx = `⭐KISH MD ⭐
*Creator:*  KISH
*Version:* 2.0
*Uptime:* ${runtime(process.uptime())}\n
*Powered by Kish*`
Kish.sendMessage(m.chat, { image: { url: "./Gallery/ch3.jpg" }, caption: ifx, gifPlayback: true }, { quoted: m });
        break

 case 'owner': {
                Kish.sendContact(m.chat, global.ownernumber, m)
            }
            break
            
      
    
            
///////////////////////////////////////////////////
case 'google': {
Kish.sendMessage(from, { react: { text: "ðŸ”Ž", key: m.key }}) 
if (!q) return reply(`Example : ${prefix + command} Brasho kish`)
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `🏮  *Google Search Engine*🏮  \n\n
`
for (let g of res) {
teks += `🧧  *Title* : ${g.title}\n`
teks += `🔮 *Description* : ${g.snippet}\n`
teks += `🔗 *Link* : ${g.link}\n\n────────────────────\n\n`
} 
reply(teks)
})
}
break

case 'wanumber': case 'nowa': case 'searchnumber':{
           	if (!text) return reply(`📵🔢 Enter a number ending with 'x'\n\nExample: ${prefix + command} 2547459368xx`)
var inputnumber = text.split(" ")[0]
        
        reply(`📱🔍 Exploring for WhatsApp accounts within the range...`)
        function countInstances(string, word) {
            return string.split(word).length - 1
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx
        if (random_length == 1) {
            randomxx = 10
        } else if (random_length == 2) {
            randomxx = 100
        } else if (random_length == 3) {
            randomxx = 1000
        }
        var text66 = `𓅃 *WhatsApp Numbers Directory*\n\n`
        var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
        var nowhatsapp = `\n*Numbers with no WhatsApp account within provided range.*\n`
        for (let i = 0; i < randomxx; i++) {
            var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            var status1 = nu[Math.floor(Math.random() * nu.length)]
            var status2 = nu[Math.floor(Math.random() * nu.length)]
            var status3 = nu[Math.floor(Math.random() * nu.length)]
            var dom4 = nu[Math.floor(Math.random() * nu.length)]
            var random21
            if (random_length == 1) {
                random21 = `${status1}`
            } else if (random_length == 2) {
                random21 = `${status1}${status2}`
            } else if (random_length == 3) {
                random21 = `${status1}${status2}${status3}`
            } else if (random_length == 4) {
                random21 = `${status1}${status2}${status3}${dom4}`
            }
            var anu = await Kish.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`)
            var anuu = anu.length !== 0 ? anu : false
            try {
                try {
                    var anu1 = await Kish.fetchStatus(anu[0].jid)
                } catch {
                    var anu1 = '401'
                }
                if (anu1 == '401' || anu1.status.length == 0) {
                    nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
                } else {
                    text66 += `📞  *Number:* wa.me/${anu[0].jid.split("@")[0]}\n  🌐 *Bio :* ${anu1.status}\nâ³ï¸*Last update :* ${moment(anu1.setAt).tz('Africa/Nairobi').format('HH:mm:ss DD/MM/YYYY')}\n\n`
                }
            } catch {
                nowhatsapp += `${number0}${i}${number1}\n`
            }
        }
        reply(`${text66}${nobio}${nowhatsapp}`)
        }
break

case 'dare':
       
	                if (!m.isGroup) return reply(mess.group)
                   const dare =[
"eat 2 tablespoons of rice without any side dishes, if it's dragging you can drink",
         "spill people who make you pause",
         "call crush/pickle now and send ss",
         "drop only emote every time you type on gc/pc for 1 day.",
         "say Welcome to Who Wants To Be a Millionaire! to all the groups you have",
         "call ex saying miss",
         "sing the chorus of the last song you played",
         "vn your ex/crush/girlfriend, says hi (name), wants to call, just a moment. I missðŸ¥ºðŸ‘‰ðŸ¼ðŸ‘ˆðŸ¼",
         "Bang on the table (which is at home) until you get scolded for being noisy",
         "Tell random people - I was just told I was your twin first, we separated, then I had plastic surgery. And this is the most ciyusss_ thing",
         "mention ex's name",
         "make 1 rhyme for the members!",
         "send ur whatsapp chat list",
         "chat random people with gheto language then ss here",
         "tell your own version of embarrassing things",
         "tag the person you hate",
         "Pretending to be possessed, for example: possessed by dog, possessed by grasshoppers, possessed by refrigerator, etc.",
         "change name to *I AM DONKEY* for 24 hours",
         "shout *ma chuda ma chuda ma chuda* in front of your house",
         "snap/post boyfriend photo/crush",
         "tell me your boyfriend type!",
         "say *i hv crush on you, do you want to be my girlfriend?* to the opposite sex, the last time you chatted (submit on wa/tele), wait for him to reply, if you have, drop here",
         "record ur voice that read *titar ke age do titar, titar ke piche do titar*",
         "prank chat ex and say *i love u, please come back.* without saying dare!",
         "chat to contact wa in the order according to your battery %, then tell him *i am lucky to hv you!*",
         "change the name to *I am a child of randi* for 5 hours",
         "type in bengali 24 hours",
         "Use selmon bhoi photo for 3 days",
         "drop a song quote then tag a suitable member for that quote",
         "send voice note saying can i call u baby?",
         "ss recent call whatsapp",
         "Say *YOU ARE SO BEAUTIFUL DON'T LIE* to guys!",
         "pop to a group member, and say fuck you",
         "Act like a chicken in front of ur parents",
         "Pick up a random book and read one page out loud in vn n send it here",
         "Open your front door and howl like a wolf for 10 seconds",
         "Take an embarrassing selfie and paste it on your profile picture",
         "Let the group choose a word and a well known song. You have to sing that song and send it in voice note",
         "Walk on your elbows and knees for as long as you can",
         "sing national anthem in voice note",
         "Breakdance for 30 seconds in the sitting roomðŸ˜‚",
         "Tell the saddest story you know",
         "make a twerk dance video and put it on status for 5mins",
         "Eat a raw piece of garlic",
         "Show the last five people you texted and what the messages said",
         "put your full name on status for 5hrs",
         "make a short dance video without any filter just with a music and put it on ur status for 5hrs",
         "call ur bestie, bitch",
         "put your photo without filter on ur status for 10mins",
         "say i love oli london in voice noteðŸ¤£ðŸ¤£",
         "Send a message to your ex and say I still like you",
         "call Crush/girlfriend/bestie now and screenshot here",
         "pop to one of the group member personal chat and Say you ugly bustard",
         "say YOU ARE BEAUTIFUL/HANDSOME to one of person who is in top of ur pinlist or the first person on ur chatlist",
         "send voice notes and say, can i call u baby, if u r boy tag girl/if girl tag boy",
         "write i love you (random grup member name, who is online) in personal chat, (if u r boy write girl name/if girl write boy name) take a snap of the pic and send it here",
         "use any bollywood actor photo as ur pfp for 3 days",
         "put your crush photo on status with caption, this is my crush",
         "change name to I AM GAY for 5 hours",
         "chat to any contact in whatsapp and say i will be ur bf/gf for 5hours",
         "send voice note says i hv crush on you, want to be my girlfriend/boyfriend or not? to any random person from the grup(if u girl choose boy, if boy choose girl",
         "slap ur butt hardly send the sound of slap through voice noteðŸ˜‚",
         "state ur gf/bf type and send the photo here with caption, ugliest girl/boy in the world",
         "shout bravooooooooo and send here through voice note",
         "snap your face then send it here",
         "Send your photo with a caption, i am lesbian",
         "shout using harsh words and send it here through vn",
         "shout you bastard in front of your mom/papa",
         "change the name to i am idiot for 24 hours",
         "slap urself firmly and send the sound of slap through voice noteðŸ˜‚",
         "say i love the bot owner Kish through voice note",
         "send your gf/bf pic here",
         "make any tiktok dance challenge video and put it on status, u can delete it after 5hrs",
         "breakup with your best friend for 5hrs without telling him/her that its a dare",
          "tell one of your frnd that u love him/her and wanna marry him/her, without telling him/her that its a dare",
          "say i love depak kalal through voice note",
          "write i am feeling horny and put it on status, u can delete it only after 5hrs",
          "write i am lesbian and put it on status, u can delete only after 5hrs",
          "kiss your mommy or papa and say i love youðŸ˜Œ",
          "put your father name on status for 5hrs",
          "send abusive words in any grup, excepting this grup, and send screenshot proof here"
     ]
                   const Kishdareww = dare[Math.floor(Math.random() * dare.length)]
                   buffer = await getBuffer(`https://graph.org/file/8dd92e67cd4019b092f53.jpg`)
                   Kish.sendMessage(from, { image: buffer, caption: '*You have chosen Dare*\n\n'+ Kishdareww }, {quoted:m})
                   break
                       

case 'truth':
                      if (!m.isGroup) return reply(mess.group)
    
	
                           const truth =[
                                  "Have you ever liked anyone? How long?",
                 "If you can or if you want, which gc/outside gc would you make friends with? (maybe different/same type)",
                 "apa ketakutan terbesar kamu?",
                 "Have you ever liked someone and felt that person likes you too?",
                 "What is the name of your friend's ex-girlfriend that you used to secretly like?",
                 "Have you ever stolen money from your father or mom? The reason?",
                 "What makes you happy when you're sad?",
                 "Ever had a one sided love? if so who? how does it feel bro?", 
                 "been someone's mistress?",
                 "the most feared thing",
                 "Who is the most influential person in your life?",
                 "what proud thing did you get this year", 
                 "Who is the person who can make you awesome", 
                 "Who is the person who has ever made you very happy?", 
                 "Who is closest to your ideal type of partner here", 
                 "Who do you like to play with??", 
                 "Have you ever rejected people? the reason why?",
                 "Mention an incident that made you hurt that you still remember", 
                 "What achievements have you got this year??",
                 "What's your worst habit at school??",
                 "What song do you sing most in the shower",
                 "Have you ever had a near-death experience",
                 "When was the last time you were really angry. Why?",
                 "Who is the last person who called you",
                 "Do you have any hidden talents, What are they",
                 "What word do you hate the most?",
                 "What is the last YouTube video you watched?",
                 "What is the last thing you Googled",
                 "Who in this group would you want to swap lives with for a week",
                 "What is the scariest thing thats ever happened to you",
                 "Have you ever farted and blamed it on someone else",
                 "When is the last time you made someone else cry",
                 "Have you ever ghosted a friend",
                 "Have you ever seen a dead body",
                 "Which of your family members annoys you the most and why",
                 "If you had to delete one app from your phone, which one would it be",
                 "What app do you waste the most time on",
                 "Have you ever faked sick to get home from school",
                 "What is the most embarrassing item in your room",
                 "What five items would you bring if you got stuck on a desert island",
                 "Have you ever laughed so hard you peed your pants",
                 "Do you smell your own farts",
                 "have u ever peed on the bed while sleeping Ã°Å¸Â¤Â£Ã°Å¸Â¤Â£",
                 "What is the biggest mistake you have ever made",
                 "Have you ever cheated in an exam",
                 "What is the worst thing you have ever done",
                 "When was the last time you cried",
                 "whom do you love the most among ur parents", 
                 "do u sometimes put ur finger in ur nosetrilÃ°Å¸Â¤Â£", 
                 "who was ur crush during the school days",
                 "tell honestly, do u like any boy in this grup",
                 "have you ever liked anyone? how long?",
                 "do you have gf/bf','what is your biggest fear?",
                 "have you ever liked someone and felt that person likes you too?",
                 "What is the name of your ex boyfriend of your friend that you once liked quietly?",
                 "ever did you steal your mothers money or your fathers money",
                 "what makes you happy when you are sad",
                 "do you like someone who is in this grup? if you then who?",
                 "have you ever been cheated on by people?",
                 "who is the most important person in your life",
                 "what proud things did you get this year",
                 "who is the person who can make you happy when u r sad",
                 "who is the person who ever made you feel uncomfortable",
                 "have you ever lied to your parents",
                 "do you still like ur ex",
                 "who do you like to play together with?",
                 "have you ever stolen big thing in ur life? the reason why?",
                 "Mention the incident that makes you hurt that you still remember",
                 "what achievements have you got this year?",
                 "what was your worst habit at school?",
                 "do you love the bot creator Kish?",
                 "have you ever thought of taking revenge from ur teacher?",
                 "do you like current prime minister of ur country",
                 "you non veg or veg",
                 "if you could be invisible, what is the first thing you would do",
                 "what is a secret you kept from your parents",
                 "Who is your secret crush",
                 "whois the last person you creeped on social media",
                 "If a genie granted you three wishes, what would you ask for",
                 "What is your biggest regret",
                 "What animal do you think you most look like",
                 "How many selfies do you take a day",
                 "What was your favorite childhood show",
                 "if you could be a fictional character for a day, who would you choose",
                 "whom do you text the most",
                 "What is the biggest lie you ever told your parents",
                 "Who is your celebrity crush",
                 "Whats the strangest dream you have ever had",
                 "do you play pubg, if you then send ur id number"
             ]
                           const Kishtruthww = truth[Math.floor(Math.random() * truth.length)]
                           buffer = await getBuffer(`https://graph.org/file/8dd92e67cd4019b092f53.jpg`)
                           Kish.sendMessage(from, { image: buffer, caption: '*You have chosen Truth*\n'+ Kishtruthww }, {quoted:m})
                           break
                           
  case 'menu': case 'menu': case 'm': 
  const txt = `╭─「 *KISH MD* 」
┃❃╭──────────────
┃❃│ Owner: ${ownername}
┃❃│ Prefix : *${prefix}*
┃❃│ User : ${pushname} 
┃❃│ Time : ${xtime}
┃❃│ Date : ${xdate}
┃❃│ Version : ${mver}
┃❃│ Uptime : ${runtime(process.uptime())}
┃❃╰───────────────
╰───────────┈平和
Here's the list of my Commands.𓅃
${readmore}    
 ╭─_*🧧🅖︎🅔︎🅝︎🅔︎🅡︎🅐︎🅛︎🧧*_
 │ ${prefix}gpt
 │ ${prefix}gpt3
 │ ${prefix}gpt4
 │ ${prefix}dev
 │ ${prefix}rules
 │ ${prefix}vv
 │ ${prefix}support 
 │ ${prefix}rules
 │ ${prefix}help
 │ ${prefix}runtime
 │ ${prefix}ping
 │ ${prefix}owner
 ╰─────────────────
 ╭─_*🧑‍💻🅞︎🅦︎🅝︎🅔︎🅡︎🧑‍💻*_
 │ ${prefix}autosview
 │ ${prefix}autorecordtyp
 │ ${prefix}autorecording
 │ ${prefix}block
 │ ${prefix}backup
 │ ${prefix}creatgc
 │ ${prefix}join
 │ ${prefix}mode
 │ ${prefix}restart
 │ ${prefix}shutdown
 │ ${prefix}setppbot
 ╰─────────────────
 ╭─__*👮🏻‍♂️🅖︎🅡︎🅞︎🅤︎🅟︎👮🏻‍♂️*_
 │ ${prefix}antilink
 │ ${prefix}closetime
 │ ${prefix}opentime
 │ ${prefix}remove
 │ ${prefix}promote
 │ ${prefix}demote
 │ ${prefix}setdesc
 │ ${prefix}setppgc
 │ ${prefix}tagall
 │ ${prefix}group
 │ ${prefix}editinfo
 │ ${prefix}gclink
 │ ${prefix}revoke
 │ ${prefix}listonline
 ╰─────────────────
 ╭─_*✍️🅔︎🅓︎🅘︎🅣︎✍️*_
 │ ${prefix}write
 │ ${prefix}burnpaper
 │ ${prefix}romatic
 │ ${prefix}coffecup
 │ ${prefix}undergrass
 │ ${prefix}love
 │ ${prefix}narutobanner
 ╰─────────────────
 ╭─_*🎓🅔︎🅓︎🅤︎🅒︎🅐︎🅣︎🅘︎🅞︎🅝︎🎓*_
 │ ${prefix}element 
 │ ${prefix}calc
 │ ${prefix}sciencefacct
 │ ${prefix}sciencenews
 ╰─────────────────
 ╭─_*💻🅒︎🅞︎🅓︎🅘︎🅝︎🅖︎💻*_
 │ ${prefix}enc
 │ ${prefix}run
 │ ${prefix}gitclone
 │ ${prefix}exec
 ╰─────────────────
 ╭─_*📂🅓︎🅞︎🅦︎🅝︎🅛︎🅞︎🅐︎🅓︎📂*_
 │ ${prefix}play
 │ ${prefix}lyrics
 │ ${prefix}mediafire
 │ ${prefix}ytmp3
 │ ${prefix}ytmp4
 │ ${prefix}fbdl
 │ ${prefix}igimage
 │ ${prefix}gitclone
 │ ${prefix}pinterest
 │ ${prefix}apk
 ╰─────────────────
 ╭─_*🎮🅖︎🅐︎🅜︎🅔︎🅢︎🎮*_
 │ ${prefix}poker
 │ ${prefix}dice
 │ ${prefix}slot
 │ ${prefix}Rps
 │ ${prefix}guess
 │ ${prefix}blackjack
 │ ${prefix}flipcoin
 ╰─────────────────
 ╭─_*⛩️🅞︎🅣︎🅗︎🅔︎🅡︎🅢︎⛩️*_
 │ ${prefix}sticker
 │ ${prefix}qc
 │ ${prefix}calc
 │ ${prefix}smeme
 │ ${prefix}take
 │ ${prefix}toimage
 │ ${prefix}tovideo
 │ ${prefix}toaudio
 │ ${prefix}tomp3
 │ ${prefix}tovn
 │ ${prefix}togif
 │ ${prefix}tourl
 │ ${prefix}toviewonce
 │ ${prefix}google
 │ ${prefix}weather
 │ ${prefix}emojimix
 │ ${prefix}dalle
 ╰─────────────────
 🍂 To enable NSFW (Admin only!), enter  *${prefix}nsfw* 
 
🍂 Obtain the full list of NSFW commands by typing  *${prefix}nsfwmenu*`
		    
  if (randomImage) {
    Kish.sendMessage(from, { image: { url: randomImage }, caption: txt }, { quoted: m });
  }

  break; 
     
       case 'circlevideo': {
try {
const Kishbaileys = await require("@whiskeysockets/baileys").generateWAMessageContent({ video: await m.quoted.download() }, { upload: Kish.waUploadToServer })
await Kish.relayMessage(from, { ptvMessage: { ...Kishbaileys.videoMessage } }, {})
} catch (err) {
reply(`Reply to a Video with Caption ${prefix + command}`)
}
}
break


case "couple":
        {
          if (!m.isGroup) return reply(mess.group);
          let member = participants.map((u) => u.id);
          let orang = member[Math.floor(Math.random() * member.length)];
          let jodoh = member[Math.floor(Math.random() * member.length)];
          Kish.sendMessage(
            m.chat,
            {
              text: `@${orang.split("@")[0]} â¤ï¸ @${jodoh.split("@")[0]}
Cieeee, What's Going Onâ¤ï¸ðŸ’–ðŸ‘€`,
              contextInfo: {
                mentionedJid: [orang, jodoh],
                forwardingScore: 9999999,
                isForwarded: true,
                externalAdReply: {
                  showAdAttribution: true,
                  containsAutoReply: true,
                  title: ` ${global.botname}`,
                  body: `${ownername}`,
                  previewType: "PHOTO",
                  thumbnailUrl: ``,
                  thumbnail: fs.readFileSync(
                    `./Gallery/thumb.jpg`
                  ),
                  sourceUrl: `${link}`,
                },
              },
            },
            { quoted: m }
          );
        }
        break;
        
        //mode 
        
case 'public': {
                if (!isCreator) return reply(mess.owner)
                Kish.public = true
                reply('*Successful in Changing To Public Usage*')
            }
            break
            case 'self': {
                if (!isCreator) return reply(mess.owner)
                Kish.public = false
                reply('*Successful in Changing To Self Usage*')
            }
            break


        ///nsfw commands
      case 'nsfwmenu':
        if (!isNsfw) return reply(mess.nsfw);
        if (!m.isGroup) return reply(mess.group);
			    
                const nsfwmenu=`┌──⊰ _*🔞NSFW 🔞*_
│⊳ 💦  ${prefix}blowjob
│⊳ 💦  ${prefix}cum
│⊳ 💦  ${prefix}foot
│⊳ 💦  ${prefix}gangbang
│⊳ 💦  ${prefix}hentai
│⊳ 💦  ${prefix}pussy
│⊳ 💦  ${prefix}ass
│⊳ 💦  ${prefix}trap
│⊳ 💦  ${prefix}maal
│⊳ 💦  ${prefix}ʀɪʙʙᴏɴꜱ
│⊳ 💦  ${prefix}ʜᴀᴛꜱᴜɴᴇᴍɪᴋᴜ
│⊳ 💦  ${prefix}ʜᴇᴀᴅʙᴀɴᴅ
│⊳ 💦  ${prefix}ꜰᴏxɢɪʀʟ
│⊳ 💦  ${prefix}ᴀɴɪᴍᴀʟᴇᴀʀꜱ
│⊳ 💦  ${prefix}ʙʀᴀ
│⊳ 💦  ${prefix}ꜱᴋɪʀᴛ
│⊳ 💦  ${prefix}ʙʀᴇᴀꜱᴛꜱ
│⊳ 💦  ${prefix}ᴛᴀᴛᴛᴏᴏ
│⊳ 💦  ${prefix}ᴄʜᴀɪɴ
└──────────⊰ 
`       
        Kish.sendMessage(m.chat, { image: { url: "./Gallery/nsfw.jpg" }, caption: nsfwmenu }, { quoted: m });
        break
              case 'nsfw': {
   Kish.sendMessage(from, { react: { text: "🔞", key: m.key }}) 
 if (!m.isGroup) return reply(mess.group);
                 if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
if (args[0] === "on") {
if (AntiNsfw) return reply('Already activated✅')
isnsfw.push(from)
fs.writeFileSync('./Gallery/database/nsfw.json', JSON.stringify(isnsfw))
reply('Successfully activating nsfw mode in this group âœ”ï¸')
var groupe = await Kish.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Kish.sendMessage(from, {text:  `\`\`\`⚠️Warning⚠️\`\`\`\n\nNsfw(not safe for work) feature has been enabled in this group, which means one can access sexual graphics from the bot!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiNsfw) return reply('Already deactivated')
let off = isnsfw.indexOf(from)
isnsfw.splice(off, 1)
fs.writeFileSync('./Gallery/database/nsfw.json', JSON.stringify(isnsfw))
reply('Successfully deactivating nsfw mode in this group âœ”ï¸')
} else {
  await reply(`*Kindly input the choice as follows:*
*Example: ${prefix + command} on*
*Example: ${prefix + command} off*
ðŸŸ¢ *Use 'on' to enable and 'off' to disable.* ðŸ”´`)
  }
  }
  break  
  
case 'chain':
case 'tattoo':
case 'breasts':
case 'skirt':
case 'bra':
case 'animalears':
case 'foxgirl':
case 'headband':
case 'hatsunemiku':
case 'ribbons':
    if (!m.isGroup) return reply(mess.group);
    if (!isNsfw) return reply(mess.nsfw);
    const waifpoudd = await axios.get(`https://fantox-apis.vercel.app/${command}`);
    Kish.sendMessage(m.chat, { caption: 'OMG🥵', image: { url: waifpoudd.data.url } }, { quoted: m });
    break;
		    
        case 'blowjob':
 if (!m.isGroup) return reply(mess.group);
   if (!isNsfw) return reply(mess.nsfw);
var ahegaonsfw = JSON.parse(fs.readFileSync('./Gallery/nsfw/blowjob.json'))
var Kishyresult = pickRandom(ahegaonsfw)
Kish.sendMessage(m.chat, { caption: mess.done, image: { url: Kishyresult.url } }, { quoted: m })
break

case 'cum':
 if (!m.isGroup) return reply(mess.group);
   if (!isNsfw) return reply(mess.nsfw);
var ahegaonsfw = JSON.parse(fs.readFileSync('./Gallery/nsfw/cum.json'))
var Kishyresult = pickRandom(ahegaonsfw)
Kish.sendMessage(m.chat, { caption: mess.done, image: { url: Kishyresult.url } }, { quoted: m })
break

case 'foot':
 if (!m.isGroup) return reply(mess.group); 
  if (!isNsfw) return reply(mess.nsfw);
var ahegaonsfw = JSON.parse(fs.readFileSync('./Gallery/nsfw/foot.json'))
var Kishyresult = pickRandom(ahegaonsfw)
Kish.sendMessage(m.chat, { caption: mess.done, image: { url: Kishyresult.url } }, { quoted: m })
break

case 'gangbang':
 if (!m.isGroup) return reply(mess.group);
   if (!isNsfw) return reply(mess.nsfw);
var ahegaonsfw = JSON.parse(fs.readFileSync('./Gallery/nsfw/gangbang.json'))
var Kishyresult = pickRandom(ahegaonsfw)
Kish.sendMessage(m.chat, { caption: mess.done, image: { url: Kishyresult.url } }, { quoted: m })
break

case 'hentai':
 if (!m.isGroup) return reply(mess.group);
   if (!isNsfw) return reply(mess.nsfw);
var ahegaonsfw = JSON.parse(fs.readFileSync('./Gallery/nsfw/hentai.json'))
var Kishyresult = pickRandom(ahegaonsfw)
Kish.sendMessage(m.chat, { caption: mess.done, image: { url: Kishyresult.url } }, { quoted: m })
break

case 'pussy':
 if (!m.isGroup) return reply(mess.group);   
if (!isNsfw) return reply(mess.nsfw);
var ahegaonsfw = JSON.parse(fs.readFileSync('./Gallery/nsfw/pussy.json'))
var Kishyresult = pickRandom(ahegaonsfw)
Kish.sendMessage(m.chat, { caption: mess.done, image: { url: Kishyresult.url } }, { quoted: m })
break

case 'ass':
 if (!m.isGroup) return reply(mess.group);  
 if (!isNsfw) return reply(mess.nsfw);
var ahegaonsfw = JSON.parse(fs.readFileSync('./Gallery/nsfw/ass.json'))
var Kishyresult = pickRandom(ahegaonsfw)
Kish.sendMessage(m.chat, { caption: mess.done, image: { url: Kishyresult.url } }, { quoted: m })
break

case 'trap' :
 if (!m.isGroup) return reply(mess.group);  
 if (!isNsfw) return reply(mess.nsfw);
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
Kish.sendMessage(m.chat, { caption: mess.done, image: { url:waifudd.data.url } }, { quoted: m })
break

case 'maal': {
  if (!isNsfw) return reply(mess.nsfw);
  if (!m.isGroup) return reply(mess.group);
  reply(mess.wait);
  await Kish.sendMessage(m.chat, {
    image: await getBuffer('https://Kishhh.onrender.com'),
    caption: 'OMG ðŸ¥µ',
  }, { quoted: m });
}
break;


			    ////
			    case 'hd': {
			if (!quoted) return reply(`Where is the picture?`)
			if (!/image/.test(mime)) return reply(`Send/Reply Photos With Captions ${prefix + command}`)
			reply(mess.wait)
			const { remini } = require('./Gallery/lib/remini')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
			Kish.sendMessage(m.chat, { image: proses, caption: mess.done}, { quoted: m})
			}
			break
              case 'awesomecheck':
  case 'greatcheck':
    case 'gaycheck':
      case 'cutecheck':
        case 'lesbicheck':
          case 'lesbiancheck':
             case 'hornycheck':
                 case 'prettycheck':
                    case 'lovelycheck':
                      case 'uglycheck':
if (!m.isGroup) return reply(mess.group);
const cex = body.slice(0)
const cek1 = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const cek2 = cek1[Math.floor(Math.random() * cek1.length)]
if (mentionByReply) {
Kish.sendMessage(from, { text: 'Question : *' + cex + '*\nChecker : ' + `@${mentionByReply.split('@')[0]}` + '\nAnswer : ' + cek2 + '%', mentions: [mentionByReply] }, { quoted: m })
} else if (mentionByTag[0] && isGroup) {
Kish.sendMessage(from, { text: 'Question : *' + cex + '*\nChecker : ' + `@${mentionByTag[0].split('@')[0]}` + '\nAnswer : ' + cek2 + '%', mentions: [mentionByTag[0]] }, { quoted: m })
} else if (!mentionByReply && !mentionByTag[0]) {
Kish.sendMessage(from, { text: 'Question : *' + cex + '*\nChecker : ' + `@${sender.split('@')[0]}` + '\nAnswer : ' + cek2 + '%', mentions: [sender] }, { quoted: m })
}
break
////////
case 'hidetag': {  
           if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
 Kish.sendMessage(m.chat, { text : args.join(" ") ? args.join(" ") : '' , mentions: participants.map(a => a.id)}, { quoted: m })
 }
 break
 case'admin': case 'tagadmin':{		
 if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
 if (!text) return replay(`🧩*Please quote or write a meaningful message to tag admins to*`)
 let teks = `*🧩𝗚𝗿𝗼𝘂𝗽 𝗔𝗱𝗺𝗶𝗻𝘀🧩*
  
 *Message : ${text}*\n\n`
 for (let mem of groupAdmins) {
 teks += `👸 @${mem.split('@')[0]}\n`
 }
 Kish.sendMessage(m.chat, { text: teks, mentions: groupAdmins}, { quoted: m })
 }
 break
 

			    
         case 'pinterest':
      case 'pin': {
      if (!args.join(" ")) return reply(`🧩*${pushname}Please provide a search term!`);
        reply(mess.waiting)
        let { pinterest } = require('./Gallery/lib/scraper');
        let anutrest = await pinterest(text);
        let results = [];

        // Get multiple random images (let's say 5 images)
        const numImages = 5;
        for (let i = 0; i < numImages && i < anutrest.length; i++) {
          results.push(anutrest[Math.floor(Math.random() * anutrest.length)]);
        }

        // Send each image without any caption
        for (let i = 0; i < results.length; i++) {
          Kish.sendMessage(m.chat, { image: { url: results[i] } }, { quoted: m });
        }
      }
        break;  
			    
case 'runtime': {
            	let lowq = `*The Bot Has Been Online For:*\n🎉 *${runtime(process.uptime())}*`
                reply(lowq)
            	}
            break
			///////////////////////////////////////////////////////
case 'igimage':
case 'igimg':{
if (!text) return reply("🧩Link?")
let resKish = await fetch(`https://vihangayt.me/download/instagram?url=${text}`)
let jsonKish = await resKish.json()
Kish.sendMessage(m.chat, { image: { url: jsonKish.data.data[0].url }, caption: mess.done}, {quoted:m})
.catch(console.error)
}
break
case 'igvideo':
case 'igvid':{
if (!q) return  reply("🧩Link?")
let res = await fetch(`https://vihangayt.me/download/instagram?url=${q}`)
let json = await res.json()
Kish.sendMessage(m.chat, { video: { url: json.data.data[0].url }, caption: mess.done}, {quoted: m})
.catch(console.error)
}
break

case 'apk':
case 'apkdl':{
if (!text) return reply("🧩What apk u wanna download?")
let resKish = await fetch(`https://vihangayt.me/download/apk?id=${text}`)
let jsonKish = await resKish.json()
Kish.sendMessage(from, { document: { url: jsonKish.data.dllink}, fileName : jsonKish.data.name, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
.catch(console.error)
}
break

case 'mediafire': {
	if (args.length == 0) return reply(`🧩Where is the link ?`)
	if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return reply(`🧩The link you provided is invalid`)
	const { mediafireDl } = require('./Gallery/lib/mediafire.js')
	const baby1 = await mediafireDl(text)
	if (baby1[0].size.split('MB')[0] >= 100) return reply('Oops, the file is too big...')
	const result4 = `𝙈𝙀𝘿𝙄𝘼𝙁𝙄𝙍𝙀
*â– Name* : ${baby1[0].nama}
*â– Size* : ${baby1[0].size}
*â– Mime* : ${baby1[0].mime}
*â– Link* : ${baby1[0].link}`
reply(`${result4}`)
Kish.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m })
}
break

case 'welcome':
            case 'left': {
              if (!m.isGroup) return reply(mess.group)
                if (!isCreator) return reply(mess.owner)
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  welcome = true
                  reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  welcome = false
                  reply(`${command} is disabled`)
               }
            }
            break


case 'git': case 'gitclone':
if (!args[0]) return reply(`🧩Where is the link?\n🔮Example :\n${prefix}${command} https://github.com/Brashokish/Kish-Md `)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return replygcKish(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    Kish.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply(mess.error))
break

case 'ggg':
    if (isCmd) {
        const needhelpmenu =  `*Did You Mean ${prefix}help*`;

        let buttonMessage = {
            text: needhelpmenu,
        };

        Kish.sendMessage(m.chat, buttonMessage, { quoted: m });
    }
    break;

case 'telestick':{
		if (args[0] && args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
		let Kishresources = await Telesticker(args[0])
		await reply(`Sending ${Kishresources.length} stickers...`)
		if (m.isGroup && Kishresources.length > 30) {
			await reply('Number of stickers more than 30, bot will send it in private chat.')
			for (let i = 0; i < Kishresources.length; i++) {
				Kish.sendMessage(m.sender, { sticker: { url: Kishresources[i].url }})
			}
		} else {
			for (let i = 0; i < Kishresources.length; i++) {
				Kish.sendMessage(m.chat, { sticker: { url: Kishresources[i].url }})
			}
		}
	} else reply(`🧩Telegram sticker Link??\n🔮Example. ${prefix + command} https://t.me/addstickers/FriendlyDeath`)
}
break

case 'shadow': 
case 'write': 
case 'romantic': 
case 'burnpaper':
case 'smoke': 
case 'narutobanner': 
case 'love': 
case 'undergrass':
case 'doublelove': 
case 'coffecup':
case 'underwaterocean':
case 'smokyneon':
case 'starstext':
case 'rainboweffect':
case 'balloontext':
case 'metalliceffect':
case 'embroiderytext':
case 'flamingtext':
case 'stonetext':
case 'writeart':
case 'summertext':
case 'wolfmetaltext':
case 'nature3dtext':
case 'rosestext':
case 'naturetypography':
case 'quotesunder':
case 'shinetext':{

if (!q) return reply(`🔮Example : ${prefix+command} Kish`) 
let link
if (/stonetext/.test(command)) link = 'https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html'
if (/writeart/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html'
if (/summertext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html'
if (/wolfmetaltext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html'
if (/nature3dtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html'
if (/rosestext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html'
if (/naturetypography/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html'
if (/quotesunder/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html'
if (/shinetext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html'
if (/shadow/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html'
if (/write/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html'
if (/romantic/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html'
if (/burnpaper/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html'
if (/smoke/.test(command)) link = 'https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html'
if (/narutobanner/.test(command)) link = 'https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html'
if (/love/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html'
if (/undergrass/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html'
if (/doublelove/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/love-text-effect-372.html'
if (/coffecup/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html'
if (/underwaterocean/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html'
if (/smokyneon/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html'
if (/starstext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html'
if (/rainboweffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html'
if (/balloontext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html'
if (/metalliceffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html'
if (/embroiderytext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html'
if (/flamingtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html'
let dehe = await photooxy.photoOxy(link, q)
Kish.sendMessage(m.chat, { image: { url: dehe }, caption: `${mess.done}` }, { quoted: m })
}
break

case 'poll': {
if (!m.isGroup) return replay(mess.grouponly)
            let [poll, opt] = text.split("|")
            if (text.split("|") < 2)
                return await reply(
                    `Mention question and atleast 2 options\nExample: ${prefix}poll Who is best admin?|Kish,Kish,Owner...`
                )
            let options = []
            for (let i of opt.split(',')) {
                options.push(i)
            }
            await Kish.sendMessage(m.chat, {
                poll: {
                    name: poll,
                    values: options
                }
            })
        }
        break
case "creategc":
      case "creategroup":
        {
          if (!isCreator) return replay(mess.botowner);
          if (!args.join(" "))
            return reply(`Use ${prefix + command} groupname`);
          try {
            let cret = await Kish.groupCreate(args.join(" "), []);
            let response = await Kish.groupInviteCode(cret.id);
            teks = ` 《༒𝙂𝙧𝙤𝙪𝙥 𝘾𝙧𝙚𝙖𝙩𝙚༒》

â˜¤Name : ${cret.subject}
â˜¤Owner : @${cret.owner.split("@")[0]}

https://chat.whatsapp.com/${response}
       `;
            Kish.sendMessage(
              m.chat,
              {
                text: teks,
                mentions: await Kish.parseMention(teks),
              },
              { quoted: m }
            );
          } catch {
            reply("Error!");
          }
        }
        break
        case 'test': case 'p': case 'ping': 
        let timestampe = speed()
        let latensie = speed() - timestampe
         reply(`Testing successful, Bot is active\n\nping ${latensie.toFixed(4)} milliseconds`);
        break   
    
        
  case 'mods':
case 'developer':
case 'dev':
    const devmod = `  Ⓜ️*Moderators* Ⓜ️\n\n
*🎫Kish🎇* @254745936840

*🎫Tophaz* @254705243111
 \n
\ type *${prefix}support* and ask in the group.\n\n*✨️Thanks for using Kish-Md* ✨`;

    Kish.sendMessage(m.chat, { text: devmod, mentions: ["254745936840@s.whatsapp.net", "254745936840@s.whatsapp.net", "254745936840@s.whatsapp.net","918602239106@s.whatsapp.net"] }, { quoted: m });
    break;



    ////games 

   case 'compliment': {
    let compliments = [
        "You're amazing!",
        "You've got a great sense of humor!",
        "Your kindness is contagious!",
        "You're a true inspiration!",
        "Keep shining bright!",
        "You make the world a better place!",
        "Your smile lights up the room!",
        "You're one of a kind!",
        "You're doing an awesome job!",
        "You're simply fantastic!",
    ];

    let randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];

    let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;

     caption = `\t\uD83C\uDF89 *Compliment Generator* \uD83C\uDF89 \n`;
caption += `\t\t---------------------------------\n`;
caption += `@${m.sender.split("@")[0]}, ${randomCompliment} \uD83D\uDE0A`;
caption += `\n\t\t---------------------------------`;
    Kish.sendMessage(m.chat, { text: caption, mentions: [user, m.sender] }, { quoted: m });
    }
break;

case 'dice': {
    const lastPlayTimestamps = new Map();
    const lastPlayTime = lastPlayTimestamps.get(m.sender) || 0;
    const currentTime = Date.now();
    const timeDifference = currentTime - lastPlayTime;
    const sixHours = 6 * 60 * 60 * 1000; // 6 hours in milliseconds

    // Check if the player has reached the maximum play limit
    if (timeDifference < sixHours && lastPlayTime !== 0) {
        caption = `\uD83D\uDEAB Sorry, you have reached the maximum play limit. Please try again later.`;
    } else {
        // Check if the player has already played 20 times
        const playCount = lastPlayTimestamps.get(m.sender + '_count') || 0;
        if (playCount >= 20) {
            caption = `\uD83D\uDEAB Sorry, you have reached the maximum play limit of 20 times in 6 hours. Please try again later.`;
        } else {
            // Update the last play timestamp and play count for the player
            lastPlayTimestamps.set(m.sender, currentTime);
            lastPlayTimestamps.set(m.sender + '_count', playCount + 1);

            // Proceed with the dice game
            let userNumber = parseInt(m.text.split(' ')[1], 10);
            if (isNaN(userNumber) || userNumber < 1 || userNumber > 6) {
                caption = `\uD83E\uDD37 Please choose a number between 1 and 6 for the dice game.`;
            } else {
                let playerNumber = userNumber;
                let casinoNumber = Math.floor(Math.random() * 6) + 1;
                let resultMessage;

                if (playerNumber > casinoNumber) {
                    resultMessage = `\uD83C\uDFB2 You chose ${playerNumber}! Casino rolled a ${casinoNumber}. You win! \uD83C\uDF89`;
                } else if (playerNumber < casinoNumber) {
                    resultMessage = `\uD83C\uDFB2 You chose ${playerNumber}! Casino rolled a ${casinoNumber}. You lose! \uD83D\uDE22`;
                } else {
                    resultMessage = `\uD83C\uDFB2 You chose ${playerNumber}! Casino rolled a ${casinoNumber}. It's a tie! \uD83C\uDF9D`;
                }

                caption = `\t\uD83D\uDD22 *Dice Roll Game* \uD83D\uDD22 \n`;
                caption += `\t\t---------------------------------\n`;
                caption += `${resultMessage}`;
                caption += `\n\t\t---------------------------------`;
            }
        }
    }

    // Send the result message
    Kish.sendMessage(m.chat, { text: caption, mentions: [m.sender] }, { quoted: m });
}
break;



// Function to get user balance
function getUserBalance(userId) {
    const filePath = `balances/${userId}.json`;
    try {
        const balanceData = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(balanceData).balance || 0;
    } catch (error) {
        return 0;
    }
}

// Function to update user balance
function updateUserBalance(userId, newBalance) {
    const filePath = `balances/${userId}.json`;
    const balanceData = { balance: newBalance };
    fs.writeFileSync(filePath, JSON.stringify(balanceData), 'utf8');
}

// Command for poker game


case 'poker': {
    let users;

    if (m.mentionedJid && m.mentionedJid.length > 0) {
        users = m.mentionedJid[0];
    } else if (m.quoted && m.quoted.sender) {
        users = m.quoted.sender;
    } else {
        users = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    }

    // Function to simulate a poker hand
    function playPoker() {
        const cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const userHand = [cards[Math.floor(Math.random() * cards.length)], cards[Math.floor(Math.random() * cards.length)]];
        const KishHand = [cards[Math.floor(Math.random() * cards.length)], cards[Math.floor(Math.random() * cards.length)]];

        // Add logic to determine the winner based on handKish strength (e.g., pair, two pairs, etc.)
        const userScore = calculateHandScore(userHand);
        const KishScore = calculateHandScore(KishHand);

        let resultMessage = `\t\uD83C\uDCCF *Poker Prestige* \uD83C\uDCCF\n`;
        resultMessage += `\t\t---------------------------------\n`;
        resultMessage += `*@${m.sender.split("@")[0]}*'s Hand: ${userHand.join(', ')}\n`;
        resultMessage += `*Kish*'s Hand: ${KishHand[0]}, \n`;
        resultMessage += `\t\t---------------------------------\n`;

        if (userScore > KishScore) {
            resultMessage += `\t\t\uD83C\uDF89 Congratulations! You win! \uD83C\uDF89`;
        } else if (userScore < KishScore) {
            resultMessage += `\t\t\uD83D\uDE22 Better luck next time. Kish wins. \uD83D\uDE22`;
        } else {
            resultMessage += `\t\t\uD83C\uDF9D It's a tie! \uD83C\uDF9D`;
        }

        return resultMessage;
    }

    // Function to calculate the poker hand score
    function calculateHandScore(hand) {
        // Add logic to determine the hand score (e.g., check for pairs, two pairs, etc.)
        // For simplicity, let's assume a basic scoring where the highest card wins
        const cardValues = { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 11, 'Q': 12, 'K': 13, 'A': 14 };
        const sortedHand = hand.sort((a, b) => cardValues[b] - cardValues[a]);
        return cardValues[sortedHand[0]];
    }

    const pokerResult = playPoker();
    Kish.sendMessage(m.chat, { text: pokerResult, mentions: [users, m.sender] }, { quoted: m });
}
break;

case 'slot':
case 'spin': {
    if (!m.isGroup) return reply(mess.grouponly);

    const symbols = ["🍍", "🥥", "🍎"];
    const reel1 = symbols[Math.floor(Math.random() * symbols.length)];
    const reel2 = symbols[Math.floor(Math.random() * symbols.length)];
    const reel3 = symbols[Math.floor(Math.random() * symbols.length)];

    const resultMessage = playSlotMachine(reel1, reel2, reel3, m.sender);

    reply(resultMessage);
    break;
}

function playSlotMachine(reel1, reel2, reel3, player) {
    const symbols = [reel1, reel2, reel3];
    const slotSymbols = ['🍒', '🍇', '🍊', '🍋', '🍉', '🍎', '🍓', '🍈'];
    const winMessages = [`*You harvested a basket of*\n\n_--> ${slotSymbols[0]}+${slotSymbols[0]}+${slotSymbols[0]}_`, 
                        `*Impressive, You must be a specialist in plucking coconuts*\n\n_--> ${slotSymbols[1]}+${slotSymbols[1]}+${slotSymbols[1]}_`, 
                        `*Amazing, you are going to be making pineapple juice for the family*\n\n_--> ${slotSymbols[2]}+${slotSymbols[2]}+${slotSymbols[2]}_`];
    const loseMessages = [`*You suck at playing this game*\n\n_--> ${slotSymbols[0]}-${slotSymbols[1]}-${slotSymbols[2]}_`, 
                         `*Totally out of line*\n\n_--> ${slotSymbols[1]}-${slotSymbols[2]}-${slotSymbols[0]}_`,
                         `*Are you a newbie?*\n\n_--> ${slotSymbols[2]}-${slotSymbols[0]}-${slotSymbols[1]}_`];

    // Perform slot machine logic
    if (symbols[0] === symbols[1] && symbols[1] === symbols[2]) {
        return `🎰 *Slot Symphony* 🎰\n-------------------------\n${winMessages[Math.floor(Math.random() * winMessages.length)]}\n-------------------------\n@${player.split("@")[0]} Congratulations, you won!*`;
    } else {
        return `🎰 *Slot Symphony* 🎰\n-------------------------\n${loseMessages[Math.floor(Math.random() * loseMessages.length)]}\n-------------------------\n@${player.split("@")[0]} Better luck next time!*`;
    }
}

case 'guesspokemon': {
    const pokemonData = [
        { name: 'Pikachu', type: 'Electric', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png' },
        { name: 'Charmander', type: 'Fire', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png' },
        { name: 'Bulbasaur', type: 'Grass', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png' },
        { name: 'Squirtle', type: 'Water', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png' },
        // Add more Pokémon with their types and image URLs here
    ];

    const randomIndex = Math.floor(Math.random() * pokemonData.length);
    const randomPokemon = pokemonData[randomIndex];

    // Send the type and an image of the Pokémon to the user and ask them to guess
    const message = `Guess the Pokémon based on its type: *${randomPokemon.type}*.\n\nReply with the name of the Pokémon!\n\nImage: ${randomPokemon.image}`;
    Kish.sendMessage(m.chat, { text: message, mentions: [m.sender] }, { quoted: m });

    // Function to check if the guess is correct
    function checkGuess(guess) {
        if (guess.trim().toLowerCase() === randomPokemon.name.toLowerCase()) {
            return `🎉 Congratulations! You guessed it right! It's ${randomPokemon.name}!`;
        } else {
            return `❌ Wrong guess! Keep trying!`;
        }
    }

    // Listen for the user's reply and check if it's the correct Pokémon name
    Kish.onMessage((msg) => {
        if (msg.body && msg.body.toLowerCase() === randomPokemon.name.toLowerCase() && msg.sender === m.sender) {
            const resultMessage = checkGuess(msg.body);
            Kish.sendMessage(m.chat, { text: resultMessage }, { quoted: m });
            Kish.removeAllListeners('message');
        }
    });
}
break;

case 'element':
    if(!args[0]) return reply(`Please use this command like this: ${prefix}element br`);
    const queryy = args.join(" ");
   const search = await pTable(queryy);
   if (search === undefined) return reply(`❗️Please provide me a valid element by visiting here !\n\nhttps://en.m.wikipedia.org/wiki/Periodic_table`);

   const responsee = await npt.getByNumber(search.number);
   let caption  = "";
    caption = "              *『  Element Details  』*\n\n";
    caption += `🔴 *Elelment:* ${responsee.name}\n`;
caption += `⬜ *Atomic Number:* ${responsee.number}\n`;
caption += `🟡 *Atomic Mass:* ${responsee.atomic_mass}\n`;
caption += `⬛ *Symbol:* ${responsee.symbol}\n`;
caption += `❓ *Appearance:* ${responsee.apearance}\n`;
caption += `🟢 *Phase:* ${responsee.phase}\n`;
caption += `♨️ *Boiling Point:* ${responsee.boil} K\n️`;
caption += `💧 *Melting Point:* ${responsee.melt} K\n`;
caption += `🟣 *Density:* ${responsee.density} g/mL\n`;
caption += `⚫ *Shells:* ${responsee.shells.join(", ")}\n`;
caption += `🌐 *URL:* ${responsee.source}\n\n`;
caption += `💬 *Summary:* ${responsee.summary}\n`;
    await Kish.sendMessage(from,  {image: {url: 'https://telegra.ph/file/782186a81ddef11094fc4.png'},caption: caption}, {quoted: m });
break;


case 'pokemon': {
if (!text) return m.reply("❌ No query provided!")
		try {
		let { data: data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${text}`)
	 if (!data.name) return m.reply(`❌ No such pokemon`)
	 let yu =`💫 *Name: ${data.name}*\n〽️ *Pokedex ID: ${data.id}*\n⚖ *Weight: ${data.weight}*\n🔆 *Height: ${data.height}*\n🌟 *Base Experience: ${data.base_experience}*\n📛 *Abilities: ${data.abilities[0].ability.name}, ${data.abilities[1].ability.name}*\n🎀 *Type: ${data.types[0].type.name}*\n✳ *HP: ${data.stats[0].base_stat}*\n⚔ *Attack: ${data.stats[1].base_stat}*\n🔰 *Defense: ${data.stats[2].base_stat}*\n☄ *Special Attack: ${data.stats[3].base_stat}*\n🛡 *Special Defense:${data.stats[4].base_stat}*\n🎐 *Speed: ${data.stats[5].base_stat}*\n`
Kish.sendMessage(m.chat, { image: { url: data.sprites.front_default }, caption: yu }, { quoted: m })
		} catch (err) {
m.reply("An Error Occurred")
console.log(err)
}
}
               break
 
 case 'flipcoin': case 'coin': {
        // Simulate flipping a coin (0 for heads, 1 for tails)
        const result = Math.random() < 0.5 ? 'Heads' : 'Tails';

        const flipCoinMessage = `🪙 *Coin Flip Result: ${result}*`;
        reply(flipCoinMessage);
      }
        break;    
    
          case 'rps': {
        // Check if the command includes a valid move (rock, paper, or scissors)
        const validMoves = ['rock', 'paper', 'scissors'];
        if (!args[0] || !validMoves.includes(args[0].toLowerCase())) {
          return reply('Please provide a valid move: rock, paper, or scissors.');
        }

        // Generate a random move for the bot
        const botMove = validMoves[Math.floor(Math.random() * validMoves.length)];

        // Determine the winner
        const userMove = args[0].toLowerCase();
        let result;

        if (userMove === botMove) {
          result = 'It\'s a tie!';
        } else if (
          (userMove === 'rock' && botMove === 'scissors') ||
          (userMove === 'paper' && botMove === 'rock') ||
          (userMove === 'scissors' && botMove === 'paper')
        ) {
          result = `You win! 🥳 ${userMove} beats ${botMove}.`;
        } else {
          result = `You lose! 🫳🏻 ${botMove} beats ${userMove}.`;
        }

        // Send the result as a response
        reply(`You chose ${userMove}.\nThe bot chose ${botMove}.\n${result}`);
      }
        break;
      
          
                   case 'calculator': case 'cal': case 'calculate': {
        if (args.length < 1) return reply(`*Example :*\n${prefix}calculator 2*5\n\n`)
        let qsd = args.join(" ")
        if (typeof mathjs.evaluate(qsd) !== 'number') {
          reply('Error ❌')
        } else {
          reply(`\`\`\`「 🧮 Calculator Tool 🧮 」\`\`\`\n\n*Input :* ${qsd}\n*Calculation Result :* ${mathjs.evaluate(qsd.replace(/×/g, "*").replace(/x/g, "*").replace(/÷/g, "/"))}`)
        }
      }
        break;
        
case 'guess': {
    // Generate a random number between 1 and 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    // Check if the user provided a guess
    const userGuess = parseInt(args[0]);
    if (!userGuess || userGuess < 1 || userGuess > 100) {
        return reply('Please provide a valid guess between 1 and 100.');
    }

    // Compare the user's guess with the random number
    if (userGuess === randomNumber) {
        reply(`Congratulations! 🎉 You guessed the correct number ${randomNumber}!`);
    } else {
        const difference = Math.abs(randomNumber - userGuess);
        let hint = '';
        if (difference <= 10) {
            hint = 'Close! 🔥';
        } else {
            hint = 'Not quite! ❄️';
        }
        reply(`Wrong guess! ${hint} The correct number was ${randomNumber}.`);
    }
}
break;   

/////////////////////////////////////////////////////

if(isCmd){
          reply (`No such command, Baka!`)
  
      }	 			

		
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return reply(mess.owner)

                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }
                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return reply(err)
                        if (stdout) return reply(stdout)
                    })
                }
        }
    } catch (err) {
        Kish.sendText(modnumber + '@s.whatsapp.net', util.format(err), m)
        console.log(util.format(err))
    }
}
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
