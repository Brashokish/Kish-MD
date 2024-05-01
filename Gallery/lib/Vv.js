const { bot, forwardOrBroadCast } = require('../lib')

bot(
	{
		pattern: 'vv ?(.*)',
		fromMe: true,
		desc: 'antiViewOnce',
		type: 'whatsapp',
	},
	async (message, match) => {
		if (!message.reply_message.image && !message.reply_message.video && !message.reply_message.audio)
			return await message.send('*reply to a vieOnce image or video audio*')
		await forwardOrBroadCast(message.jid, message, { viewOnce: false })
	}
)