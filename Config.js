const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernumber = ['243972681974']
global.ownername = "KENAN"//owner name
global.ytname = "YT: "
global.socialm = "GitHub: darkkenan"
global.location = "Kenya"

global.botname = 'KENAN' //name of the bot

//sticker details
global.stickername = 'KENAN'
global.packname = 'Sticker By'
global.author = 'KENAN'
//console view/theme
global.themeemoji = '✏️'
global.wm = "KENAN botz inc."

//theme link
//global.link = 'https://wa.me/243972681974'

//custom prefix
global.prefa = [':']

//false=disable and true=enable
global.welcome = true //auto welcome
global.autoRecording = false //auto recording
global.autoTyping = true //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = true //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = true //auto view status/story



//reply messages
global.mess = {
    done: '*here you go!* \n\n*🎀 Kish Bot 🎀*\n\n*🧩 Bot link:* \nhttps://github.com/Brashokish/Kish-MD\n',
    prem: '*This feature can be used by premium user only*',
    admin: '*This feature can be used by admin only*',
    botAdmin: '*This feature can only be used when the bot is a group admin* ',
    owner: '*This feature can be used by owner only*',
    group: '*This feature is only for groups*',
    private: '*This feature is only for private chats*',
    wait: '*In process...* ',    
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
