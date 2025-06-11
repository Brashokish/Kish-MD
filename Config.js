const fs = require('fs')
const chalk = require('chalk')

//contact details
global.developer = ['254796307638'] 
global.ownernumber = ['254796307638']
global.ownername = "𓆩Kish 𓅃𓆪"//owner name
global.ytname = "YT: KISH.Bots.inc"
global.socialm = "GitHub: CORTANA-AI"
global.location = ""

global.botname = 'Kish-MD' //name of the bot

//sticker details
global.stickername = 'Kish-MD'
global.packname = 'Sticker By Kish 𓅃'
global.author = 'KISH'
//console view/theme
global.themeemoji = '🤖'
global.wm = "KISH BOTS inc."

//theme link
global.link = 'https://chat.whatsapp.com/GyptuHxTi4DKZWaNyBUAm8'

//custom prefix
global.prefa = ['']

//false=disable and true=enable
global.welcome = false //auto welcome
global.autoRecording = true //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = true //auto read messages

global.autobio = false //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = true //auto view status/story
global.autostatus_react = true



// reply messages
global.mess = {
    done: '✅ *Here you go!*\n\n🤖 *Kish-MD*\n🔗 Bot link:\nhttps://github.com/Brashokish/Kish-MD',
    prem: '💎 *This feature is for premium users only!*',
    admin: '👑 *This feature is for group admins only!*',
    botAdmin: '🤖 *I need to be *admin* to use this feature!*',
    owner: '👑 *This feature is for the bot owner only!*',
    group: '👥 *This feature is for groups only!*',
    private: '💬 *This feature is for private chats only!*',
    wait: '⏳ *Processing... Please wait.*',
    error: '❗ *An error occurred!*'
}

global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
