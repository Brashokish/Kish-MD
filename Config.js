const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernumber = ['254715155196']
global.ownername = "Cytra"//owner name
global.ytname = "YT: Cytra_k9"
global.socialm = "GitHub: Kish-MD"
global.location = "Kenya"

global.botname = 'CYTRA-MD' //name of the bot

//sticker details
global.stickername = 'K9'
global.packname = 'Sticker By'
global.author = 'unit'
//console view/theme
global.themeemoji = '😎'
global.wm = "Cytra botz inc."

//theme link
//global.link = 'https://chat.whatsapp.com/LhBwWwQAS4y93XOsCKpxdv'

//custom prefix
global.prefa = ['.']

//false=disable and true=enable
global.welcome = false //auto welcome
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = true //auto view status/story



//reply messages
global.mess = {
    done: '*here you go!* \n\n*🎀 Cytra Bot 🎀*\n\n*🧩 Bot link:* \nhttps://github.com/CytraK/Kish-MD\n',
    prem: '*This feature can be used by premium user only*',
    admin: '*This feature can be used by admin only*',
    botAdmin: '*This feature can only be used when the bot is a group admin* ',
    owner: '*This feature can be used by owner only*',
    group: '*This feature is only for groups*',
    private: '*This feature is only for private chats*',
    wait: '*medi bruh...* ',    
    error: '*Error!*',
}

global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
