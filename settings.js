
const fs = require('fs');
const chalk = require('chalk');

//owmner v card
global.ytname = "YT: Mickeymozy" //ur yt chanel name
global.socialm = "GitHub: dady24" //ur github or insta name
global.location = "Tanzania, Dodoma, Kikuyu" //ur location

//new
global.botname = 'ᴅᴇɴᴢᴇʟ' //ur bot name
global.ownernumber = ['255612130873'] //ur owner number, dont add more than one
global.ownername = '𝐌𝐈𝐂𝐊𝐄𝐘 ' //ur owner name
global.websitex = "https://youtu.be/@Mickeymozy"
global.wagc = "https://whatsapp.com/channel/0029VaoaxLB5Ejy3requm81T"
global.themeemoji = '🇹🇿'
global.wm = "Lazack."
global.botscript = 'https://github.com/Dady24/Denzel/' //script link
global.packname = "Sticker By"
global.author = "Mickey\n\n+255612130873"
global.creator = "255612130873@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["255612130873"] // Premium User

//channel id
global.xchannel = {
	jid: '120363197387366360@g.us'
	}

//bot sett
global.typemenu = 'v12' // menu type 'v1' => 'v12'
global.typereply = 'v4' // reply type 'v1' => 'v4'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code

global.listv = ['♦','♠','㊂','➥','➲','㊝','☠','✚','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','＞']
global.tempatDB = 'database.json'

global.limit = {
	free: 100,
	premium: 999,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	error: 'Error!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
	done: 'Done'
}

global.bot = {
	limit: 0,
	uang: 0
}

global.game = {
	suit: {},
	menfes: {},
	tictactoe: {},
	kuismath: {},
	tebakbom: {},
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
