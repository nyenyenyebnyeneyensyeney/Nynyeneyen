//RECODE BY MHANKBARBAR
//SELF BOT BY DREAM
//YANG PASTI DISINI BANYAK YANG GUA COPAS
//TAMBAHIN NICK GUA LAH "DAVID"
//JANGAN CUMA PAKE DOANG
const {
    WAConnection,
  MessageType,
  Presence, 
  MessageOptions,
  Mimetype,
  WALocationMessage,
  WA_MESSAGE_STUB_TYPES,
  ReconnectMode,
  ProxyAgent,
  relayWAMessage,
  prepareMessageFromContent,
  GroupSettingChange,
  ChatModification,
  waChatKey,
  WA_DEFAULT_EPHEMERAL,
  mentionedJid,
  processTime
} = require('@adiwajshing/baileys')
const fs = require('fs')
const axios = require("axios")
const chalk = require('chalk')
const speed = require('performance-now')
const request = require('request')
const qrcodes = require("qrcode")
const imgbb = require('imgbb-uploader')
const qrcode = require("qrcode")
const toMs = require('ms')
const ms = require('parse-ms')
const moment = require('moment-timezone')
const fetch = require('node-fetch')
const phoneNum = require('awesome-phonenumber')
const ffmpeg = require('fluent-ffmpeg')
const imageToBase64 = require('image-to-base64')
const lolis = require('lolis.life')
const ig = require('instagram-web-api')
const loli = new lolis()
const simple = require('./lib/simple.js')
const Exif = require('./lib/exif');
const exif = new Exif();
const Instagram = require ('instagram-web-api')
const FileCookieStore = require('tough-cookie-filestore2')
const cookieStore = new FileCookieStore('./cookies.json')

//********** FUNCTIONS **********//
const { removeBackgroundFromImageFile } = require('remove.bg')
const { color, bgcolor } = require('./lib/color')
const prem = JSON.parse(fs.readFileSync('./src/prem.json'))
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { exec } = require('child_process')
const { msgFilter } = require('./lib/antispam.js')
const { uploadimg } = require('./lib/uploadimg')

//********** DATABASE **********//
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
const _limit = JSON.parse(fs.readFileSync('./database/limit.json'))
const tebakgambar = JSON.parse(fs.readFileSync('./lib/tebakgambar.json'))
const premium = JSON.parse(fs.readFileSync('./database/public.json'))
const setting = JSON.parse(fs.readFileSync('./src/settings.json'))
const user = JSON.parse(fs.readFileSync('./database/level.json'))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const tictac = require('./lib/tictac')
const { isTicTacToe, getPosTic } = require('./lib/tictactoe')

const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
//*********** CUSTOMABLE ***********//
prefix = '' //Biarin Aja Nanti Emror
f = '```'
blocked = []
s = '❒'
a = '```'
bung = '🍂'
iniprem = '⚓'
gra = '◽'
lim = '⛱️'
gru = '◾'
fake = 'freply'
baterai = 'belum detect'
owner = '6285865829368'
fakeimage = fs.readFileSync(`./image/cewek.jpeg`)
numbernye = '0' 
const mark = '0@s.whastapp.net'
const dika = '6288292024190@s.whatsapp.net'
const vanz = '62895423946200@s.whatsapp.net'
const aqulz = '6285158549166@s.whatsapp.net'
const akira = '6282287521931@s.whatsapp.net'
const gw = '6281392109025@s.whatsapp.net'
namabot = '*DREAM BOT*' //Ganti Nama Bot Kalian
welcome: false
Limitawal = '0'
namaowner = 'David' //Ganti Seterah Kalian
public = true
hit_today = []
username = 'kang_bakso49'
password = 'davidgg1234@@'
let tictactoe = []
const dimka = new Instagram({ username, password, cookieStore })
let conn = new global.constructor()

//*********** VCARD  ***********//
const vcard16 = 'BEGIN:VCARD\n'
                 + 'VERSION:3.0\n'
                   + 'N:;DAVID GNZ.;;;\n'
                   + 'FN:DAVID GNZ\n'
                   + 'TEL;type=CELL;type=VOICE;waid=6281392109025:+6281392109025\n'
                   + 'X-WA-BIZ-NAME:DAVIDGNZ\n'
                   + 'X-WA-BIZ-DESCRIPTION:Creator Dream Bot\n'
                   + 'END:VCARD'
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${namaowner}︎\n`
            + `ORG:Owner ${namabot};\n`
            + 'TEL;type=CELL;type=VOICE;waid=6285865829368:+6285865829368\n'
            + 'END:VCARD'
const panutan = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:Lord Aqulz\n'
            + 'ORG:MASTAH;\n'
            + 'TEL;type=CELL;type=VOICE;waid=6285158549166:+6285158549166\n'
            + 'END:VCARD'
const mypatner1 = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:︎\n'
            + 'ORG:Owner ${namabot};\n'
            + 'TEL;type=CELL;type=VOICE;waid=6285865829368:+6285865829368\n'
            + 'END:VCARD'
const mypatner2 = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:${namaowner}︎\n'
            + `ORG:Owner ${namabot};\n`
            + 'TEL;type=CELL;type=VOICE;waid=6285865829368:+6285865829368\n'
            + 'END:VCARD'
const wa = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:${namaowner}︎\n'
            + `ORG:Owner ${namabot};\n`
            + 'TEL;type=CELL;type=VOICE;waid=6285865829368:+6285865829368\n'
            + 'END:VCARD'
const lord = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:${namaowner}︎\n'
            + `ORG:Owner ${namabot};\n`
            + 'TEL;type=CELL;type=VOICE;waid=6285865829368:+6285865829368\n'
            + 'END:VCARD'

//***********SET APIKEY***********//
const Lolhum = 'NgontolAmat'
const LolKey = 'NgontolAmat'
const davidsu = 'JCMNOPJE'

  const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
            }
        }
        const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
            }
        }

  const jadiUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            premium.push(obj)
            fs.writeFileSync('./database/public.json', JSON.stringify(premium))
        }
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
function tanggal(){
myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
			myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum at','Sabtu'];
			var tgl = new Date();
			var day = tgl.getDate()
			bulan = tgl.getMonth()
			var thisDay = tgl.getDay(),
			thisDay = myDays[thisDay];
			var yy = tgl.getYear()
			var year = (yy < 1000) ? yy + 1900 : yy;
			return `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
}

function monospace(string) {
return '```' + string + '```'
}

async function starts() {
	const Vid = new WAConnection()
	Vid.logger.level = 'warn'
	console.log(banner.string)
	Vid.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code above'))
	})

	fs.existsSync('./mek.json') && Vid.loadAuthInfo('./mek.json')
	Vid.on('connecting', () => {
		start('2', 'MENGHUBUNGKAN KEMBALI')
	})
	Vid.on('open', () => {
		success('2', color('[ ! ]Tersambung','red'))
		console.log(chalk.whiteBright("╭─"), chalk.keyword("aqua")("──────"), chalk.whiteBright("───ꕥ WELCOME OWNER Iꕥ────────✾" ))
		console.log(chalk.whiteBright("├"), chalk.keyword("aqua")("[  STATS  ]"), chalk.whiteBright("Prefix Bot Saat ini: 「 / 」" ))
        console.log(chalk.whiteBright("├"), chalk.keyword("aqua")("[  STATS  ]"), chalk.whiteBright("OS Version : " + Vid.user.phone.os_version))
        console.log(chalk.whiteBright("├"), chalk.keyword("aqua")("[  STATS  ]"), chalk.whiteBright("Device : " + Vid.user.phone.device_manufacturer))
        console.log(chalk.whiteBright("├"), chalk.keyword("aqua")("[  STATS  ]"), chalk.whiteBright("Model : " + Vid.user.phone.device_model))
        console.log(chalk.whiteBright("├"), chalk.keyword("aqua")("[  STATS  ]"), chalk.whiteBright("OS Build Number : " + Vid.user.phone.os_build_number))
        console.log(chalk.whiteBright("├"), chalk.keyword("aqua")("[  STATS  ]"), chalk.whiteBright('WELCOME ANJG'))
	})
	await Vid.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./mek.json', JSON.stringify(Vid.base64EncodedAuthInfo(), null, '\t'))
Vid.on('group-update', async(chat) => {
    console.log(chat)
    var from = chat.jid
    var group = await Vid.groupMetadata(from)
    if(!chat.desc == ''){
    var tag = chat.descOwner.split('@')[0] + '@s.whatsapp.net'
    var teks = `「 *Group Description Change* 」\n\nDeskripsi Group telah diubah oleh\n◪ ${s}Admin : @${chat.descOwner.split('@')[0]}${s}\n◪ ${s}Pada : ${tanggal()}${s}\n❒ ${s}Deskripsi Baru${s} :\n ${chat.desc}`
    Vid.sendMessage(group.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}})
    console.log(`「 *Group Description Change* 」 In ${group.subject}`)
    } else if(chat.announce == 'false') {
	var opengc = `「 *Group Opened* 」\n\n${s}Group Telah Dibuka Oleh Admin${s}\n_Sekarang Semua Member Bisa Mengirim Pesan_`
	Vid.sendMessage(group.id, opengc, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, remoteJid: `0@s.whatsapp.net` }, message: { groupInviteMessage: { groupJid: "62816566217-1617422360@g.us", inviteCode: "EiznDZqIWu40QPVO0Q9MVn", groupName: "𝐀𝐍𝐈𝐌𝐄 𝐋𝐎𝐕𝐄𝐑𝐒 𝐈𝐍𝐃𝐎𝐍𝐄𝐒𝐈𝐀", caption: "*YTEAM BOTZ*Create By : *Vid*", 'jpegThumbnail': fs.readFileSync('./media/cewek.jpeg')} } }})
    } else if(chat.announce == 'true') {
	var closegc = `「 *Group Closed* 」\n\n${s}Group Telah Ditutup Oleh Admin${s}\n_Sekarang Semua Member Tidak Dapat Mengirim Pesan_`
	Vid.sendMessage(group.id, closegc, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, remoteJid: `0@s.whatsapp.net` }, message: { groupInviteMessage: { groupJid: "62816566217-1617422360@g.us", inviteCode: "EiznDZqIWu40QPVO0Q9MVn", groupName: "𝐀𝐍𝐈𝐌𝐄 𝐋𝐎𝐕𝐄𝐑𝐒 𝐈𝐍𝐃𝐎𝐍𝐄𝐒𝐈𝐀", caption: "*YTEAM BOTZ*Create By : *Vid*", 'jpegThumbnail': fs.readFileSync('./media/cewek.jpeg')} } }})
    } else if(anu.restrict == 'false'){
    teks = `「 *Group Setting Change* 」\n\n${s}Edit Group info telah dibuka untuk member${s}\nSekarang semua member dapat mengedit info Group Ini`
    Vid.sendMessage(group.id, teks, MessageType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, remoteJid: `0@s.whatsapp.net` }, message: { groupInviteMessage: { groupJid: "62816566217-1617422360@g.us", inviteCode: "EiznDZqIWu40QPVO0Q9MVn", groupName: "𝐀𝐍𝐈𝐌𝐄 𝐋𝐎𝐕𝐄𝐑𝐒 𝐈𝐍𝐃𝐎𝐍𝐄𝐒𝐈𝐀", caption: "*YTEAM BOTZ*\nCreate By : *Vid*", 'jpegThumbnail': fs.readFileSync('./media/cewek.jpeg')} } }})
    console.log(`- [ Group Setting Change ] - In ${group.subject}`)
    } else if(anu.restrict == 'true'){
    teks = `「 *Group Setting Change* 」\n\n${s}Edit Group info telah ditutup untuk member${s}\nSekarang hanya admin group yang dapat mengedit info Group Ini`
    Vid.sendMessage(group.id, teks, MessageType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, remoteJid: `0@s.whatsapp.net` }, message: { groupInviteMessage: { groupJid: "62816566217-1617422360@g.us", inviteCode: "EiznDZqIWu40QPVO0Q9MVn", groupName: "                          ", caption: "*YTEAM BOTZ*\nCreate By : *Vid*", 'jpegThumbnail': fs.readFileSync('./media/cewek.jpeg')} } }})
    console.log(`- [ Group Setting Change ] - In ${group.subject}`)
    }
    }) 
Vid.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await Vid.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await Vid.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `
нallo ĸacĸ @${num.split('@')[0]}
welcoмe тo ${mdata.subject}

╭─✑ naмa :
├✑ aѕal :
├✑ gender :
├✑ υмυr :
└✑ ĸelaѕ :

*❒ 「тeтap ιngaт 3м」*
├✑ мenjaga jaraĸ
├✑ мencυcι тangan
├✑ мeмaĸaι мaѕĸer
*╰───────┈ ⳹*
`
				let buff = await getBuffer(ppimg)
				Vid.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await Vid.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `ѕelaмaт тιnggal ĸaĸ @${num.split('@')[0]} 
				

*❒ 「тeтap ιngaт 3м」*
├✑ мenjaga jaraĸ
├✑ мencυcι тangan
├✑ мeмaĸaι мaѕĸer
*╰───────┈ ⳹*`
				let buff = await getBuffer(ppimg)
				Vid.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
		
			} else if (anu.action == 'promote') {
			const mdata = await Vid.groupMetadata(anu.jid)
			num = anu.participants[0]
			try {
					ppimg = await Vid.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
			let buff = await getBuffer(ppimg)
			teks = `*「PROMOTE DETECT」*\n\nUSER : @${num.split('@')[0]}\n\nFROM : ${mdata.subject}`
			Vid.sendMessage(mdata.id, buff, MessageType.image, {caption : teks, contextInfo: {mentionedJid: [num]}, quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `Kntl`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fakeimage, "mimetype": "application/octet-stream", "title": `PROMOTE`, "fileLength": "36", "pageCount": 0, "fileName": `_Welcome_` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		} else if (anu.action == 'demote') {
			num = anu.participants[0]
			const mdata = await Vid.groupMetadata(anu.jid)
			try {
					ppimg = await Vid.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
			let buff = await getBuffer(ppimg)
		teks = `*「DEMOTE DETECT」*\n\nUSER : @${num.split('@')[0]}\n\nFROM : ${mdata.subject}`
	   Vid.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {mentionedJid: [num]}, quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `Ktl`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fakeimage, "mimetype": "application/octet-stream", "title": `DEMOTE`, "fileLength": "36", "pageCount": 0, "fileName": `_Welcome_` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		}
		} catch (e) {
		console.log('Error : %s', color(e, 'red'))
		}
})

Vid.on('CB:action,,call', async json => {
    const callerId = json[2][0][1].from;
    console.log("call dari "+ callerId)
        Vid.sendMessage(callerId, "Auto block system, don't call please", MessageType.text)
        await sleep(4000)
        await Vid.blockUser(callerId, "add") // Block user
})
const batterai = {}
    Vid.on('CB:action,,battery', json => {
	console.log(json[0][1])
	const value = json[2][0][1].value
	const plug = json[2][0][1].live
	const powersave = json[2][0][1].powersave
	batterai.value = value
	batterai.note = batterai.value > 20 ? 'Baterai Masih Banyak!' : 'Hp harus segera DI charger!!'
	batterai.plug = plug == 'true' ? 'Charger!' : 'Discharger!'
	batterai.powersave = powersave == 'true' ? 'Aktif!' : 'Nonaktif!'
	console.log(color('Batterai:'), color(value + '%', 'yellow'))
	console.log(color('Charger:'), color(plug === 'true' ? 'Sedand Dicharger!' : 'Tidak Dicharger!', 'green'))
	console.log(color('Power save:'), color(powersave === 'true' ? 'Power Save On!' : 'Power Save Off!', 'red'))
})
	Vid.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
	Vid.on('message-update', async (mek) => {
		try {
	    const from = mek.key.remoteJid
		const messageStubType = WA_MESSAGE_STUB_TYPES[mek.messageStubType] || 'MESSAGE'
		const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
		const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
		const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
		const isRevoke = mek.key.remoteJid.endsWith('@s.whatsapp.net') ? true : mek.key.remoteJid.endsWith('@g.us') ? dataRevoke.includes(from) : false
		const isCtRevoke = mek.key.remoteJid.endsWith('@g.us') ? true : dataCtRevoke.data ? true : false
		const isBanCtRevoke = mek.key.remoteJid.endsWith('@g.us') ? true : !dataBanCtRevoke.includes(sender) ? true : false
		if (messageStubType == 'REVOKE') {
			console.log(`Status untuk grup : ${!isRevoke}\nStatus semua kontak : ${!isCtRevoke}\nStatus kontak dikecualikan : ${!isBanCtRevoke}`)
			const from = mek.key.remoteJid
			const isGroup = mek.key.remoteJid.endsWith('@g.us') ? true : false
			let int
			let infoMSG = JSON.parse(fs.readFileSync('./src/msg.data.json'))
			const id_deleted = mek.key.id
			const conts = mek.key.fromMe ? Vid.user.jid : Vid.contacts[sender] || { notify: jid.replace(/@.+/, '') }
			const pushname = mek.key.fromMe ? Vid.user.name : conts.notify || conts.vname || conts.name || '-'
			const opt4tag = {
				contextInfo: { mentionedJid: [sender] }
			}
			for (let i = 0; i < infoMSG.length; i++) {
				if (infoMSG[i].key.id == id_deleted) {
					const dataInfo = infoMSG[i]
					const type = Object.keys(infoMSG[i].message)[0]
					const timestamp = infoMSG[i].messageTimestamp
					int = {
						no: i,
						type: type,
						timestamp: timestamp,
						data: dataInfo
					}
				}
			}
			const index = Number(int.no)
			const body = int.type == 'conversation' ? infoMSG[index].message.conversation : int.type == 'extendedTextMessage' ? infoMSG[index].message.extendedTextMessage.text : int.type == 'imageMessage' ? infoMSG[index].message.imageMessage.caption : int.type == 'stickerMessage' ? 'Sticker' : int.type == 'audioMessage' ? 'Audio' : int.type == 'videoMessage' ? infoMSG[index].videoMessage.caption : infoMSG[index]
			const mediaData = int.type === 'extendedTextMessage' ? JSON.parse(JSON.stringify(int.data).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : int.data
			var itsme = `0@s.whatsapp.net`
				var split = `${fake}`
				var selepbot72 = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
			if (int.type == 'conversation' || int.type == 'extendedTextMessage') {
				const strConversation = `		 「 ANTI-DELETE 」

- Nama : ${pushname} 
- Nomer : ${sender.replace('@s.whatsapp.net', '')}
- Tipe : Text
- Waktu : ${moment.unix(int.timestamp).format('HH:mm:ss')}
- Tanggal : ${moment.unix(int.timestamp).format('DD/MM/YYYY')}
- Pesan : ${body ? body : '-'}`
				Vid.sendMessage(from, strConversation, MessageType.text, selepbot72)
			} else if (int.type == 'stickerMessage') {
				var itsme = `0@s.whatsapp.net`
					var split = `${fake}`
					const pingbro23 = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await Vid.downloadAndSaveMediaMessage(int.data, `./media/sticker/${filename}`)
				const strConversation = `		 「 ANTI-DELETE 」

- Nama : ${pushname} 
- Nomer : ${sender.replace('@s.whatsapp.net', '')}
- Tipe : Sticker
- Waktu : ${moment.unix(int.timestamp).format('HH:mm:ss')}
- Tanggal : ${moment.unix(int.timestamp).format('DD/MM/YYYY')}`

				const buff = fs.readFileSync(savedFilename)
				Vid.sendMessage(from, strConversation, MessageType.text, opt4tag)
				Vid.sendMessage(from, buff, MessageType.sticker, pingbro23)
				fs.unlinkSync(savedFilename)

			} else if (int.type == 'imageMessage') {
				var itsme = `0@s.whatsapp.net`
					var split = `${fake}`
					const pingbro22 = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await Vid.downloadAndSaveMediaMessage(int.data, `./media/revoke/${filename}`)
				const buff = fs.readFileSync(savedFilename)
				const strConversation = `	 「 ANTI-DELETE 」

- Nama : ${pushname} 
- Nomer : ${sender.replace('@s.whatsapp.net', '')}
- Tipe : Image
- Waktu : ${moment.unix(int.timestamp).format('HH:mm:ss')}
- Tanggal : ${moment.unix(int.timestamp).format('DD/MM/YYYY')}
- Pesan : ${body ? body : '-'}\`\`\``
				Vid.sendMessage(from, buff, MessageType.image, { contextInfo: { mentionedJid: [sender] }, caption: strConversation })
				fs.unlinkSync(savedFilename)
			}
		}
	} catch (e) {
		console.log('Message : %s', color(e, 'green'))
	}
})
	Vid.on('chat-update', async (mek) => {
		try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
            m = simple.smsg(Vid, mek)
            if (!mek.message) return
	        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
	        if (!mek.message) return
	        if (mek.key && mek.key.remoteJid == 'status@broadcast') return
	//		if (!mek.key.fromMe) return
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const messageStubType = WA_MESSAGE_STUB_TYPES[mek.messageStubType] || 'MESSAGE'
			const type = Object.keys(mek.message)[0]
			const apiKey = setting.apiKey    
			const { text, extendedText, contact, caption, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const date = new Date().toLocaleDateString()
			const jam = moment.tz('Asia/Jakarta').format('HH:mm')
            const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
            const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
         
		const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
		const prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#$%^&./\\©^]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#$,|`÷?;:%abcdefghijklmnopqrstuvwxyz%^&./\\©^]/gi) : '-'
	    body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
	    budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
	    const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
	    const args = body.trim().split(/ +/).slice(1)
	    const isCmd = body.startsWith(prefix)
	    const stickCmd = type == 'stickerMessage' ? mek.message.stickerMessage.fileSha256.toString('base64') : '' || ''
	    chats = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const arg = chats.slice(command.length + 2, chats.length)
			
			mess = {
		    prem: '_*Anda Bukan User Prem, Silahkan Hubungi Owner Untuk Menjadi User Premium*_',
		    wait: '*Meluncur*',
		    success: '*Sukses Bang*️',
		    error: {
					stick: '*Maaf Kak Fitur Sedang Eror Silahkan Hubungi Owner Untuk Memperbaiki Fitur*',
					Iv: '*Link Nya Kek Nya Salah*'
				},
				only: {
					group: '*[ ! ]* Perintah ini Hanya Bisa Digunakan Di Grup',
					ownerG: '*[ ! ]* Perintah ini Hanya Bisa Digunakan Oleh Admin Grup',
					ownerB: '*[ ! ]*  Hanya Bisa Digunakan Oleh CEO *mek BOT*',
					admin: '*[ ! ]* Perintah ini Hanya Bisa Digunakan Oleh Admin Grup',
					Badmin: '*[ ! ]* Perintah ini Bisa Digunkaan Ketik bot Menjadi Admin'
				}
			}
            const totalchat = await Vid.chats.all()
			const botNumber = Vid.user.jid
			const server = Vid.browserDescription[0]
			const ownerNumber = [`${owner}@s.whatsapp.net`] // replace this with your number
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await Vid.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const itsMe = sender == botNumber ? true : false
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isPremium = premium.includes(sender)
			const isUser = user.includes(sender)
			pushname = Vid.contacts[sender] != undefined ? Vid.contacts[sender].vname || Vid.contacts[sender].notify : undefined
			 hit_today.push(command)
			resbutton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.selectedDisplayText : ''
			const isOwner = ownerNumber.includes(sender)
			const q = args.join(' ')
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				Vid.sendMessage(from, teks, text, {quoted:freply})
			}
			const sendMess = (hehe, teks) => {
				Vid.sendMessage(hehe, teks, text,{quoted : fbc})
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? Vid.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : Vid.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			    function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
             }
        const reply1 = (teks) => {
            return Vid.sendMessage(from, teks, text, {quoted: mek, thumbnail: fs.readFileSync('./media/cewek.jpeg')})
        }

          const fakegroup = (teks) => {
			Vid.sendMessage(from, teks, text, {
				quoted: {
					key: {
						fromMe: false,
						participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6281226770537-1604595598@g.us" } : {})
					},
					message: {
						conversation: fake
					}
				}
			})
		}
const fdocu = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": fake, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('media/mek.jpeg')}}}
const fbc = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `*From Owner*\n=> *${body}*`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync(`media/Vid.jpeg`)} } }
const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `*DREAM BOT*\nCREATE BY : *DAVID*`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync(`media/Vid.jpeg`)} } }
const freply1 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `*DREAM BOT*\nCREATE BY : *DAVID*`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync(`media/Vid.jpeg`)} } }
const fsc = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `*SELL SC SELF BOT*`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync(`media/Vid.jpeg`)} } }
const ftroli = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `Hallo Kack ${pushname}\n⎇ : ${command}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync(`media/Vid.jpeg`)} } }
const ftroli2 = {

key: {

fromMe: false,

participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {})

},

message: { 

orderMessage: {

itemCount: 1,

status: 200, 

surface: 200,

message: `${batterai}\nHallo Kak ${pushname}`,

orderTitle: 'Ntah', 

thumbnail: fs.readFileSync('./media/cewek.jpeg'),

sellerJid: '0@s.whatsapp.net'

}

}

}
const ftoko = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`./media/Vid.jpeg`)
					},
					"title": fake,
					"description": "SELF BOT",
					"currencyCode": "USD",
					"priceAmount1000": "2000",
					"retailerId": "Self Bot",
					"productImageCount": 1
				},
				"businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
const fgclink = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6288213840883-1616169743@g.us",
			"inviteCode": "mememteeeekkeke",
			"groupName": "P", 
            "caption": "_*Hy I`am Yteam Bot*_", 
            'jpegThumbnail': fs.readFileSync('./media/cewek.jpeg')
		}
	}
}
      
     const uploadImages = (buffData, type) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
    const { ext } = await fromBuffer(buffData)
    const cmd = text.toLowerCase()
    const filePath = 'utils/tmp.' + ext
    const _buffData = type ? await resizeImage(buffData, false) : buffData
    fs.writeFile(filePath, _buffData, { encoding: 'base64' }, (err) => {
            if (err) return reject(err)
            console.log('Uploading image to telegra.ph server...')
            const fileData = fs.readFileSync(filePath)
            const form = new FormData()
            form.append('file', fileData, 'tmp.' + ext)
            fetch('https://telegra.ph/upload', {
                method: 'POST',
                body: form
            })
                .then(res => res.json())
                .then(res => {
                    if (res.error) return reject(res.error)
                    resolve('https://telegra.ph' + res[0].src)
                })
                .then(() => fs.unlinkSync(filePath))
                .catch(err => reject(err))
        })
    })
}



			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage') 
			
     if (itsMe){
     if(chats.toLowerCase() == `${prefix}self`){
     public = false
     Vid.sendMessage(from, `Success`, `STATUS : SELF`)
      }
     if (chats.toLowerCase() == 'status'){
     Vid.sendMessage(from, `STATUS : ${public ? 'PUBLIC' : 'SELF'}`)
      }
      }
   
      if (!public){
      if (!mek.key.fromMe) return
      }
      
           var asu = `${Limitawal}`
           
 const checkLimit = (sender) => {
			let found = false
			for (let lmt of _limit) {
			if (lmt.id === sender) {
			let limitCounts = Limitawal - lmt.limit
			if (limitCounts <= 0) return dp.sendMessage(from,`Limit request anda sudah habis\n`, text, {quoted: freply})
			Vid.sendMessage(from, `
「 ❗ 」Limit Count
Sisa Limit Anda : ${limitCounts}

NOTE : Untuk Mendapatkan Limit Bisa Lewat Naik Level Di Group Atau Buy limit.`, text, { quoted : freply})
			found = true 
			}
		}
		
		const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    Vid.sendMessage(from, 'Limit Anda Telah Abiss', text, {quoted: reply})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 1 }
                _limit.push(obj)
                fs.writeFileSync('./database/limit.json',JSON.stringify(_limit))
           return false
       }
     }
			if (found === false) {
			let obj = { id: sender, limit: 0 }
			_limit.push(obj)
			fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
			Vid.sendMessage(from, `limit anda : ${limitCounts}`, text, { quoted : freply})
			}
		} 
//============== ANTILINK =================//
        if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
        if (chats.match(/(https:\/\/chat.whatsapp.com)/gi)) {
        reply(`*「 GROUP LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`)
        Vid.groupRemove(from, [sender])
          }
        }
          //==TebakGmbar
          if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && isGroup && !isCmd) {
	kuis = true
	jawaban = tebakgambar[sender.split('@')[0]]
	if (budy.toLowerCase() == jawaban) {
	reply1("Jawaban Anda Benar!")
	delete tebakgambar[sender.split('@')[0]]
	fs.writeFileSync("./lib/tebakgambar.json", JSON.stringify(tebakgambar))
	} else {
	reply("Jawaban Anda Salah!")
	}
	}
 
 
 
     
 
 
 
 
 
 
 
 
 
 
 
 
//====================== AUTO REGIST =============//
        if (isCmd && !isUser){
			user.push(sender)
			fs.writeFileSync('./database/level.json', JSON.stringify(user))
        } 
//====================== AUTO REGIST =============//
        if (isCmd && msgFilter.isFiltered(from) && !isGroup) {
        console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        return reply('「 ❗ 」Sabar Bang 5 Detik/Command')}
        
        if (isCmd && msgFilter.isFiltered(from) && isGroup) {
        console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
        return reply('「 ❗ 」Sabar Bang 5 Detik/Command')
        }
//============== FUNCTION TICTACTOE ============= //
            if (isTicTacToe(from, tictactoe)) tictac(budy, prefix, tictactoe, from, sender, reply, mentions)        

			if (!isGroup && !isCmd) console.log(chalk.whiteBright("├"), color("[ PRIVATE ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"))
            if (isGroup && !isCmd) console.log(chalk.whiteBright("├"), color("[  GROUP  ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"), "in", color(groupName, "yellow"))
            if (!isGroup && isCmd) console.log(chalk.whiteBright("├"), color("[ COMMAND ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"))
            if (isGroup && isCmd) console.log(chalk.whiteBright("├"), color("[ COMMAND ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"), "in", color(groupName, "yellow"))
			let authorname = Vid.contacts[from] != undefined ? Vid.contacts[from].vname || Vid.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	
			
			function addMetadata(packname, author) {	
				if (!packname) packname = 'Sticker By'; if (!author) author = 'Yteam Bot';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
					return `./src/stickers/${name}.exif`	
				})	

			} 
			switch(stickCmd) {
				case '1ELTvDpTuv+W/CpYjO8Leo7zVUAtTeU/Xb8deouvwsc=':
				var b = fs.readFileSync(`./media/cewek.jpeg`)
                  var encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                  var media = await Vid.downloadMediaMessage(encmedia)
                   if (!isQuotedSticker) return reply('Reply Stikernya su!')
                   Vid.sendMessage(from, media, MessageType.image, { thumbnail: b, caption: 'NEHH...', quoted: freply})
                   break
				case 'T2/oLTcurPM2bRK7PNCnKO53iiozl6cHBiXQ8ML+TPI=':
				Vid.sendMessage(from, {displayname: 'David', vcard: vcard16}, MessageType.contact, {quoted: mek})
				break
				case 'uiMtHPGYWebifghktjpFpIPFnjQdJ9bdxmkt/b1KrtU=':
				members_id = []
				teks = (args.length > 1) ? body.slice(8).trim() : ''
				teks += '\n\n'
				for (let mem of groupMembers) {
			   teks += `\n*├❒ @${mem.jid.split('@')[0]}*`
				members_id.push(mem.jid)
				}
				mentions(teks, members_id, true)
				break
				case 'HbIvyZrvDV1PwAhfa8UWiwJWbvtznRSgIGtnWkm3mHg=':
				if ((isMedia && !mek.message.videoMessage || isQuotedImage)) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await Vid.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".webp")
                        ini_txt = 'Dream Bot'
                        tod = 'Create By : David'
                        request({
                            url: `https://api.lolhuman.xyz/api/convert/towebpauthor?apikey=${Lolhum}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                                "package": ini_txt,
                                "author": tod
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            Vid.sendMessage(from, ini_buff, sticker, { quoted: mek }).then(() => {
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
				
case 'af0L/3Fb9G7JeL/5Az5yIXZ8Tt7ia07hEE7jeJnF7Ow=':
                        const Mark = '0@s.whatsapp.net'
                                         u = 1
                         const gambar = fs.readFileSync('./media/kera.jpeg')
                         const iduladha = await fetchJson('https://pecundang.herokuapp.com/api/hitungmundur?tanggal=20&bulan=9&tahun=2021')
                         const ulangthn = await fetchJson('https://pecundang.herokuapp.com/api/hitungmundur?tanggal=14&bulan=9&tahun=2021')
                         const tahunbru = await fetchJson('https://pecundang.herokuapp.com/api/hitungmundur?tanggal=1&bulan=1&tahun=2022')
           const statuss = public ? 'PUBLIC': 'SELF'
           uptime = process.uptime()
           const timestampi = speed();
                    var groups = Vid.chats.array.filter(v => v.jid.endsWith('g.us'))
					  var private = Vid.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
           const latensip = speed() - timestampi
shu = `*Hallo Kack @${sender.split('@')[0]}*


◪ *MY  INFO*
🌴 *Owner : @${gw.split('@')[0]}*
🌴 *Wa Version : 2.21.12.21*
🌴 *Server : Baileys*
🌴 *Browser : Chrome*
🌴 *Total Chat : ${totalchat.length}*
🌴 *Total Group : ${groups.length}*
🌴 *Private Chat : ${private.length}*

✽─────────────────── ✽

*Your Progress* :
*Tag* : @${sender.split('@')[0]}
**
*Status* : ${mek.key.fromMe ? 'Premium' : 'Gratisan'}

*About Me* : 
*Nama : Dream Bot*
*Owner : @${gw.split('@')[0]}*
*Status* : *Premium*
*Api* : wa.me/6285865829368

✽─────────────────── ✽

*RUNTIME & Speed*
*Runtime :* *${kyun(uptime)}*
*Speed : ${latensip.toFixed(4)} Second*

*TOTAL USER*
_${user.lenght}_

*TOTAL HIT TODAY*
${hit_today.lenght}

✽─────────────────── ✽

*❒━* *「  BOT START  」*
*├❒* ${f}${prefix}menu${f}
*├❒* ${f}${prefix}help${f}
*├❒* ${f}${prefix}info${f}
*├❒* ${f}${prefix}owner${f}
*├❒* ${f}${prefix}sc${f}
*│*
*❒━* *「  GAME MENU  」*
*├❒* ${u++}.  ${f}${prefix}truth${f}
*├❒* ${u++}.  ${f}${prefix}dare${f}
*├❒* ${u++}.  ${f}${prefix}tebakgambar${f}
*├❒* ${u++}.  ${f}${prefix}akinator${f}
*│*
*├❒━* *「  TEXTPROME  」*
*├❒* ${u++}.  ${f}${prefix}blackpink${f}
*├❒* ${u++}.  ${f}${prefix}neon${f}
*├❒* ${u++}.  ${f}${prefix}greenneon${f}
*├❒* ${u++}.  ${f}${prefix}glow${f}
*├❒* ${u++}.  ${f}${prefix}summer${f}
*├❒* ${u++}.  ${f}${prefix}neonlight${f}
*├❒* ${u++}.  ${f}${prefix}writing${f}
*├❒* ${u++}.  ${f}${prefix}metal${f}
*├❒* ${u++}.  ${f}${prefix}steel3d${f}
*├❒* ${u++}.  ${f}${prefix}wallgravity${f}
*├❒* ${u++}.  ${f}${prefix}lionlogo${f}
*├❒* ${u++}.  ${f}${prefix}marvelstudio${f}
*├❒* ${u++}.  ${f}${prefix}space${f}
*├❒* ${u++}.  ${f}${prefix}pornhub${f}
*├❒* ${u++}.  ${f}${prefix}ninjalogo${f}
*├❒* ${u++}.  ${f}${prefix}avenger${f}
*│*
*├❒━* *「  CONVERTER  」*
*├❒* ${u++}.  ${f}${prefix}tiktoknowm${f}
*├❒* ${u++}.  ${f}${prefix}igvideo${f}
*├❒* ${u++}.  ${f}${prefix}igphoto${f}
*├❒* ${u++}.  ${f}${prefix}play${f}
*├❒* ${u++}.  ${f}${prefix}play2${f}
*├❒* ${u++}.  ${f}${prefix}ytmp3${f}
*├❒* ${u++}.  ${f}${prefix}ytmp4${f}
*│*
*├❒━* *「  CONVERTER  」*
*├❒* ${u++}.  ${f}${prefix}sticker${f}
*├❒* ${u++}.  ${f}${prefix}stickergif${f}
*├❒* ${u++}.  ${f}${prefix}s${f}
*├❒* ${u++}.  ${f}${prefix}toimg${f}
*├❒* ${u++}.  ${f}${prefix}toimage${f}
*├❒* ${u++}.  ${f}${prefix}stickerwm${f}
*├❒* ${u++}.  ${f}${prefix}swm${f}
*├❒* ${u++}.  ${f}${prefix}ttp [text]${f}
*├❒* ${u++}.  ${f}${prefix}attp [text]${f}
*│*
*├❒━* *「 PHOTOOXY  」*
*├❒* ${u++}.  ${f}${prefix}love${f}
*├❒* ${u++}.  ${f}${prefix}woodheart${f}
*├❒* ${u++}.  ${f}${prefix}cup1${f}
*├❒* ${u++}.  ${f}${prefix}coffe${f}
*├❒* ${u++}.  ${f}${prefix}lovemessage${f}
*├❒* ${u++}.  ${f}${prefix}smoke${f}
*├❒* ${u++}.  ${f}${prefix}woodenboard${f}
*├❒* ${u++}.  ${f}${prefix}shadow${f}
*├❒* ${u++}.  ${f}${prefix}wallgravity${f}
*├❒* ${u++}.  ${f}${prefix}steel3d${f}
*├❒* ${u++}.  ${f}${prefix}romance${f}
*├❒* ${u++}.  ${f}${prefix}burnpaper${f}
*├❒* ${u++}.  ${f}${prefix}summer3d${f}
*├❒* ${u++}.  ${f}${prefix}cup${f}
*├❒* ${u++}.  ${f}${prefix}undergrass${f}
*│*
*├❒━* *「  RANDOME ASUPAN 」*
*├❒* ${u++}.  ${f}${prefix}lewdk${f}
*├❒* ${u++}.  ${f}${prefix}tits${f}
*├❒* ${u++}.  ${f}${prefix}solo${f}
*├❒* ${u++}.  ${f}${prefix}lewd${f}
*├❒* ${u++}.  ${f}${prefix}yuri${f}
*├❒* ${u++}.  ${f}${prefix}holoero${f}
*├❒* ${u++}.  ${f}${prefix}blowjob${f}
*├❒* ${u++}.  ${f}${prefix}eroyuri${f}
*├❒* ${u++}.  ${f}${prefix}femdom${f}
*├❒* ${u++}.  ${f}${prefix}hentai${f}
*├❒* ${u++}.  ${f}${prefix}cum_jpg${f}
*├❒* ${u++}.  ${f}${prefix}erofeet${f}
*├❒* ${u++}.  ${f}${prefix}ero${f}
*├❒* ${u++}.  ${f}${prefix}trap${f}
*├❒* ${u++}.  ${f}${prefix}eron${f}
*├❒* ${u++}.  ${f}${prefix}keta${f}
*├❒* ${u++}.  ${f}${prefix}erok${f}
*├❒* ${u++}.  ${f}${prefix}pussy_jpg${f}
*├❒* ${u++}.  ${f}${prefix}futanari${f}
*├❒* ${u++}.  ${f}${prefix}hololewd${f}
*├❒* ${u++}.  ${f}${prefix}lewdkemo${f}
*├❒* ${u++}.  ${f}${prefix}kemonomimi${f}
*├❒* ${u++}.  ${f}${prefix}nsfw_avatar${f}
*├❒* ${u++}.  ${f}${prefix}pussy_jpg${f}
*│*
*├❒━* *「 SELF / PUBLIC  」*
*├❒* ${u++}.  ${f}${prefix}self${f}
*├❒* ${u++}.  ${f}${prefix}public${f}
*│*
*├❒━* *「 GROUP COMAND 」*
*├❒* ${u++}.  ${f}${prefix}antilink 1/0${f}
*├❒* ${u++}.  ${f}${prefix}antidelete aktif/mati${f}
*├❒* ${u++}.  ${f}${prefix}delete${f}
*├❒* ${u++}.  ${f}${prefix}promote${f}
*├❒* ${u++}.  ${f}${prefix}getpic${f}
*├❒* ${u++}.  ${f}${prefix}getbio${f}
*├❒* ${u++}.  ${f}${prefix}infoall${f}
*├❒* ${u++}.  ${f}${prefix}hidetag${f}
*│*
*├❒━* *「 TICTACTOE MENU  」*
*├❒* ${u++}.  ${f}${prefix}tictactoe @user${f}
*├❒* ${u++}.  ${f}${prefix}ttc @user${f}
*├❒* ${u++}.  ${f}${prefix}delttc${f}
*├❒* ${u++}.  ${f}${prefix}delttt${f}
*│*
*├❒━* *「 ANIME COMMAND  」*
*├❒* ${u++}.  ${f}${prefix}randomwaifu${f}
*├❒* ${u++}.  ${f}${prefix}randomwaifu1${f}
*├❒* ${u++}.  ${f}${prefix}neko1${f}
*├❒* ${u++}.  ${f}${prefix}kusonime${f}
*├❒* ${u++}.  ${f}${prefix}loli${f}
*├❒* ${u++}.  ${f}${prefix}randomhusbu${f}
*├❒* ${u++}.  ${f}${prefix}giyu${f}
*├❒* ${u++}.  ${f}${prefix}nezuko${f}
*├❒* ${u++}.  ${f}${prefix}ichika${f}
*├❒* ${u++}.  ${f}${prefix}nino${f}
*├❒* ${u++}.  ${f}${prefix}itsuki${f}
*├❒* ${u++}.  ${f}${prefix}miku${f}
*├❒* ${u++}.  ${f}${prefix}yotsuba${f}
*├❒* ${u++}.  ${f}${prefix}sakonji${f}
*├❒* ${u++}.  ${f}${prefix}zenitsu${f}
*├❒* ${u++}.  ${f}${prefix}thanjiro${f}
*│*
*├❒━* *「  RANDOME ASUPAN 」*
*├❒* ${u++}.  ${f}${prefix}asupan${f}
*├❒* ${u++}.  ${f}${prefix}asupansantuy${f}
*├❒* ${u++}.  ${f}${prefix}asupanbocil${f}
*├❒* ${u++}.  ${f}${prefix}asupanukhty${f}
*├❒* ${u++}.  ${f}${prefix}asupanrikagusriani${f}
*├❒* ${u++}.  ${f}${prefix}asupanghea${f}
*│*
*├❒━* *「  NO CATEGORY  」*
*├❒* ${u++}.  ${f}${prefix}renungan${f}
*├❒* ${u++}.  ${f}${prefix}samehadaku${f}
*├❒* ${u++}.  ${f}${prefix}infonomer${f}
*├❒* ${u++}.  ${f}${prefix}jadwaltv${f}
*├❒* ${u++}.  ${f}${prefix}tvjadwal${f}
*├❒* ${u++}.  ${f}${prefix}fake${f}
*├❒* ${u++}.  ${f}${prefix}pink 「Link」${f}
*│*
*├❒━* *「 MAKER MENU  」*
*├❒* ${u++}.  ${f}${prefix}neon1${f}
*├❒* ${u++}.  ${f}${prefix}text3d${f}
*├❒* ${u++}.  ${f}${prefix}galaxy${f}
*├❒* ${u++}.  ${f}${prefix}gaming${f}
*├❒* ${u++}.  ${f}${prefix}colors${f}
*├❒* ${u++}.  ${f}${prefix}qrcode${f}
*│*
*├❒━* *「 STALKER MENU  」*
*├❒* ${u++}.  ${f}${prefix}stalkig${f}
*├❒* ${u++}.  ${f}${prefix}igstalk${f}
*├❒* ${u++}.  ${f}${prefix}githubstalk${f}
*├❒* ${u++}.  ${f}${prefix}ghstalk${f}
*│*
*├❒━* *「 RANDOM MENU  」*
*├❒* ${u++}.  ${f}${prefix}islamic${f} 
*├❒* ${u++}.  ${f}${prefix}cyberspace${f} 
*├❒* ${u++}.  ${f}${prefix}teknologi${f} 
*├❒* ${u++}.  ${f}${prefix}bts${f} 
*├❒* ${u++}.  ${f}${prefix}exo${f} 
*├❒* ${u++}.  ${f}${prefix}game${f} 
*├❒* ${u++}.  ${f}${prefix}randompegunungan${f} 
*│*
*├❒━* *「 ATTP / TTP 」*
*├❒* ${u++}.  ${f}${prefix}attp${f}
*├❒* ${u++}.  ${f}${prefix}ttp${f}
*├❒* ${u++}.  ${f}${prefix}ttp1${f}
*├❒* ${u++}.  ${f}${prefix}ttp2${f}
*├❒* ${u++}.  ${f}${prefix}ttp3${f}
*│*
*├❒━* *「 SESSION COMMAND 」*
*│❒* ${u++}.  ${f}${prefix}jadibot${f}
*│❒* ${u++}.  ${f}${prefix}stopjadibot${f}
*│❒* ${u++}.  ${f}${prefix}listbot${f}
*╰─────────────┈ ⳹*

        ║▌│█║▌│ █║▌│█│║▌║
        ║▌│█║▌│ █║▌│█│║▌║
  
*Thanks To : @${Mark.split('@')[0]}*`
Vid.sendMessage(from, shu, text, { quoted: freply, contextInfo: {"mentionedJid": [Mark, gw, dika, aqulz, akira, sender]}})
break
  }
			switch(command) {
                          case 'help':
                         case 'menu':
     const Mark = '0@s.whatsapp.net'
                 l = 1
                         const gambar = fs.readFileSync('./media/kera.jpeg')
                         const iduladha = await fetchJson('https://pecundang.herokuapp.com/api/hitungmundur?tanggal=20&bulan=9&tahun=2021')
                         const ulangthn = await fetchJson('https://pecundang.herokuapp.com/api/hitungmundur?tanggal=14&bulan=9&tahun=2021')
                         const tahunbru = await fetchJson('https://pecundang.herokuapp.com/api/hitungmundur?tanggal=1&bulan=1&tahun=2022')
           const statuss = public ? 'PUBLIC': 'SELF'
           uptime = process.uptime()
           const timestampi = speed();
                    var groups = Vid.chats.array.filter(v => v.jid.endsWith('g.us'))
					  var private = Vid.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
           const latensip = speed() - timestampi
tutu = `*Hallo Kack ${pushname}*


◪ *MY  INFO*
🌴 *Kang Copas* : *@${gw.split('@')[0]}*
🌴 *Whatsapp Versi : 2.21.12.21*
🌴 *Prefix* : *Multi Prefix*
🌴 *Browser : ${Vid.browserDescription[1]}*
🌴 *Lib : ${Vid.browserDescription[0]}*
🌴 *Version : ${Vid.browserDescription[2]}*
🌴 *Speed : ${latensip.toFixed(4)}*
🌴 *Total Chat : ${totalchat.length} Chat*
🌴 *Grup Total : ${groups.length} Grup*
🌴 *Private Chat : ${private.length} Chat*

✽─────────────────── ✽

*Your Progress* :
*тag : @${sender.split('@')[0]}*
*naмa : ${pushname}*
*Limit Anda* : ${asu}
*apι* : wa.me/${sender.split('@')[0]}
*ѕaтυѕ* : ${mek.key.fromMe ? 'preмιυм' : 'graтιѕan'}

*About Me* : 
*naмa : Dream Bot*
*тag : @${gw.split('@')[0]}*
*ѕтaтυѕ* : *Premium*
*apι* : wa.me/6285865829368

✽─────────────────── ✽

*rυnтιмe & ѕpeed*
*rυnтιмe :* *${kyun(uptime)}*
*ѕpeed : ${latensip.toFixed(4)} Second*

*υѕer тoтal*
_${user.lenght}_

*нι тoday*
${hit_today.lenght}

✽─────────────────── ✽

*❒━* *「  BOT START  」*
*├❒* ${l++}. ${f}${prefix}menu${f}
*├❒* ${l++}. ${f}${prefix}help${f}
*├❒* ${l++}. ${f}${prefix}info${f}
*├❒* ${l++}. ${f}${prefix}owner${f}
*├❒* ${l++}. ${f}${prefix}sc${f}
*│*
*├❒━* *「 SELF / PUBLIC  」*
*├❒* ${l++}.  ${f}${prefix}self${f}
*├❒* ${l++}.  ${f}${prefix}public${f}
*│*
*├❒━* *「 SELF / PUBLIC  」*
*├❒* ${l++}.  ${f}${prefix}truth${f}
*├❒* ${l++}.  ${f}${prefix}dare${f}
*├❒* ${l++}.  ${f}${prefix}tebakgambar${f}
*├❒* ${l++}.  ${f}${prefix}canceltebakgambar${f}
*│*
*├❒━* *「  TEXTPROME  」*
*├❒* ${l++}.  ${f}${prefix}blackpink${f}
*├❒* ${l++}.  ${f}${prefix}neon${f}
*├❒* ${l++}.  ${f}${prefix}greenneon${f}
*├❒* ${l++}.  ${f}${prefix}glow${f}
*├❒* ${l++}.  ${f}${prefix}summer${f}
*├❒* ${l++}.  ${f}${prefix}neonlight${f}
*├❒* ${l++}.  ${f}${prefix}writing${f}
*├❒* ${l++}.  ${f}${prefix}metal${f}
*├❒* ${l++}.  ${f}${prefix}steel3d${f}
*├❒* ${l++}.  ${f}${prefix}wallgravity${f}
*├❒* ${l++}.  ${f}${prefix}lionlogo${f}
*├❒* ${l++}.  ${f}${prefix}marvelstudio${f}
*├❒* ${l++}.  ${f}${prefix}space${f}
*├❒* ${l++}.  ${f}${prefix}pornhub${f}
*├❒* ${l++}.  ${f}${prefix}ninjalogo${f}
*├❒* ${l++}.  ${f}${prefix}avenger${f}
*│*
*├❒━* *「  DOWNLOADER  」*
*├❒* ${l++}.  ${f}${prefix}tiktoknowm${f}
*├❒* ${l++}.  ${f}${prefix}igvideo${f}
*├❒* ${l++}.  ${f}${prefix}igphoto${f}
*├❒* ${l++}.  ${f}${prefix}play${f}
*├❒* ${l++}.  ${f}${prefix}play2${f}
*├❒* ${l++}.  ${f}${prefix}ytmp3${f}
*├❒* ${l++}.  ${f}${prefix}ytmp4${f}
*│*
*├❒━* *「  CONVERTER  」*
*├❒* ${l++}.  ${f}${prefix}sticker${f}
*├❒* ${l++}.  ${f}${prefix}stickergif${f}
*├❒* ${l++}.  ${f}${prefix}s${f}
*├❒* ${l++}.  ${f}${prefix}toimg${f}
*├❒* ${l++}.  ${f}${prefix}toimage${f}
*├❒* ${l++}.  ${f}${prefix}stickerwm${f}
*├❒* ${l++}.  ${f}${prefix}swm${f}
*├❒* ${l++}.  ${f}${prefix}ttp [text]${f}
*├❒* ${l++}.  ${f}${prefix}attp [text]${f}
*│*
*├❒━* *「 PHOTOOXY  」*
*├❒* ${l++}.  ${f}${prefix}love${f}
*├❒* ${l++}.  ${f}${prefix}woodheart${f}
*├❒* ${l++}.  ${f}${prefix}cup1${f}
*├❒* ${l++}.  ${f}${prefix}coffe${f}
*├❒* ${l++}.  ${f}${prefix}lovemessage${f}
*├❒* ${l++}.  ${f}${prefix}smoke${f}
*├❒* ${l++}.  ${f}${prefix}woodenboard${f}
*├❒* ${l++}.  ${f}${prefix}shadow${f}
*├❒* ${l++}.  ${f}${prefix}wallgravity${f}
*├❒* ${l++}.  ${f}${prefix}steel3d${f}
*├❒* ${l++}.  ${f}${prefix}romance${f}
*├❒* ${l++}.  ${f}${prefix}burnpaper${f}
*├❒* ${l++}.  ${f}${prefix}summer3d${f}
*├❒* ${l++}.  ${f}${prefix}cup${f}
*├❒* ${l++}.  ${f}${prefix}undergrass${f}
*│*
*├❒━* *「  RANDOME ASUPAN 」*
*├❒* ${l++}.  ${f}${prefix}lewdk${f}
*├❒* ${l++}.  ${f}${prefix}tits${f}
*├❒* ${l++}.  ${f}${prefix}solo${f}
*├❒* ${l++}.  ${f}${prefix}lewd${f}
*├❒* ${l++}.  ${f}${prefix}yuri${f}
*├❒* ${l++}.  ${f}${prefix}holoero${f}
*├❒* ${l++}.  ${f}${prefix}blowjob${f}
*├❒* ${l++}.  ${f}${prefix}eroyuri${f}
*├❒* ${l++}.  ${f}${prefix}femdom${f}
*├❒* ${l++}.  ${f}${prefix}hentai${f}
*├❒* ${l++}.  ${f}${prefix}cum_jpg${f}
*├❒* ${l++}.  ${f}${prefix}erofeet${f}
*├❒* ${l++}.  ${f}${prefix}ero${f}
*├❒* ${l++}.  ${f}${prefix}trap${f}
*├❒* ${l++}.  ${f}${prefix}eron${f}
*├❒* ${l++}.  ${f}${prefix}keta${f}
*├❒* ${l++}.  ${f}${prefix}erok${f}
*├❒* ${l++}.  ${f}${prefix}pussy_jpg${f}
*├❒* ${l++}.  ${f}${prefix}futanari${f}
*├❒* ${l++}.  ${f}${prefix}hololewd${f}
*├❒* ${l++}.  ${f}${prefix}lewdkemo${f}
*├❒* ${l++}.  ${f}${prefix}kemonomimi${f}
*├❒* ${l++}.  ${f}${prefix}nsfw_avatar${f}
*├❒* ${l++}.  ${f}${prefix}pussy_jpg${f}
*│*
*├❒━* *「 GROUP COMAND 」*
*├❒* ${l++}.  ${f}${prefix}antilink 1/0${f}
*├❒* ${l++}.  ${f}${prefix}antidelete aktif/mati${f}
*├❒* ${l++}.  ${f}${prefix}delete${f}
*├❒* ${l++}.  ${f}${prefix}promote${f}
*├❒* ${l++}.  ${f}${prefix}getpic${f}
*├❒* ${l++}.  ${f}${prefix}getbio${f}
*├❒* ${l++}.  ${f}${prefix}infoall${f}
*├❒* ${l++}.  ${f}${prefix}hidetag${f}
*│*
*├❒━* *「 TICTACTOE MENU  」*
*├❒* ${l++}.  ${f}${prefix}tictactoe @user${f}
*├❒* ${l++}.  ${f}${prefix}ttc @user${f}
*├❒* ${l++}.  ${f}${prefix}delttc${f}
*├❒* ${l++}.  ${f}${prefix}delttt${f}
*│*
*├❒━* *「 ANIME COMMAND  」*
*├❒* ${l++}.  ${f}${prefix}zenitsu${f}
*├❒* ${l++}.  ${f}${prefix}thanjiro${f}
*├❒* ${l++}.  ${f}${prefix}trap${f}
*├❒* ${l++}.  ${f}${prefix}ecchi${f}
*├❒* ${l++}.  ${f}${prefix}hololewd${f}
*├❒* ${l++}.  ${f}${prefix}animefeets${f}
*├❒* ${l++}.  ${f}${prefix}animethighss${f}
*├❒* ${l++}.  ${f}${prefix}lewdanimegirls${f}
*├❒* ${l++}.  ${f}${prefix}animebellybutton${f}
*├❒* ${l++}.  ${f}${prefix}hentai4everyone${f}
*├❒* ${l++}.  ${f}${prefix}biganimetiddies${f}
*├❒* ${l++}.  ${f}${prefix}hentaifemdom${f}
*├❒* ${l++}.  ${f}${prefix}hentaiparadise${f}
*├❒* ${l++}.  ${f}${prefix}animebooty${f}
*├❒* ${l++}.  ${f}${prefix}sideoppai${f}
*├❒* ${l++}.  ${f}${prefix}ahegao${f}
*├❒* ${l++}.  ${f}${prefix}yaoi${f}
*├❒* ${l++}.  ${f}${prefix}ahegao${f}
*├❒* ${l++}.  ${f}${prefix}sideoppai${f}
*├❒* ${l++}.  ${f}${prefix}neko${f}
*├❒* ${l++}.  ${f}${prefix}loli${f}
*├❒* ${l++}.  ${f}${prefix}chiisaihentai${f}
*├❒* ${l++}.  ${f}${prefix}waifu${f}
*│*
*├❒━* *「  RANDOME ASUPAN 」*
*├❒* ${l++}.  ${f}${prefix}asupan${f}
*├❒* ${l++}.  ${f}${prefix}asupansantuy${f}
*├❒* ${l++}.  ${f}${prefix}asupanbocil${f}
*├❒* ${l++}.  ${f}${prefix}asupanukhty${f}
*├❒* ${l++}.  ${f}${prefix}asupanrikagusriani${f}
*├❒* ${l++}.  ${f}${prefix}asupanghea${f}
*│*
*├❒━* *「  NO CATEGORY  」*
*├❒* ${l++}.  ${f}${prefix}renungan${f}
*├❒* ${l++}.  ${f}${prefix}samehadaku${f}
*├❒* ${l++}.  ${f}${prefix}infonomer${f}
*├❒* ${l++}.  ${f}${prefix}jadwaltv${f}
*├❒* ${l++}.  ${f}${prefix}tvjadwal${f}
*├❒* ${l++}.  ${f}${prefix}fake${f}
*├❒* ${l++}.  ${f}${prefix}pink 「Link」${f}
*│*
*├❒━* *「 MAKER MENU  」*
*├❒* ${l++}.  ${f}${prefix}neon1${f}
*├❒* ${l++}.  ${f}${prefix}text3d${f}
*├❒* ${l++}.  ${f}${prefix}galaxy${f}
*├❒* ${l++}.  ${f}${prefix}gaming${f}
*├❒* ${l++}.  ${f}${prefix}colors${f}
*├❒* ${l++}.  ${f}${prefix}qrcode${f}
*│*
*├❒━* *「 STALKER MENU  」*
*├❒* ${l++}.  ${f}${prefix}stalkig${f}
*├❒* ${l++}.  ${f}${prefix}igstalk${f}
*├❒* ${l++}.  ${f}${prefix}githubstalk${f}
*├❒* ${l++}.  ${f}${prefix}ghstalk${f}
*│*
*├❒━* *「 RANDOM MENU  」*
*├❒* ${l++}.  ${f}${prefix}islamic${f} 
*├❒* ${l++}.  ${f}${prefix}cyberspace${f} 
*├❒* ${l++}.  ${f}${prefix}teknologi${f} 
*├❒* ${l++}.  ${f}${prefix}bts${f} 
*├❒* ${l++}.  ${f}${prefix}exo${f} 
*├❒* ${l++}.  ${f}${prefix}game${f} 
*├❒* ${l++}.  ${f}${prefix}randompegunungan${f} 
*│*
*├❒━* *「 ATTP / TTP 」*
*├❒* ${l++}.  ${f}${prefix}attp${f}
*├❒* ${l++}.  ${f}${prefix}ttp${f}
*├❒* ${l++}.  ${f}${prefix}ttp1${f}
*├❒* ${l++}.  ${f}${prefix}ttp2${f}
*├❒* ${l++}.  ${f}${prefix}ttp3${f}
*│*
*├❒━* *「 SESSION COMMAND 」*
*│❒* ${l++}.  ${f}${prefix}jadibot${f}
*│❒* ${l++}.  ${f}${prefix}stopjadibot${f}
*│❒* ${l++}.  ${f}${prefix}listbot${f}
*╰─────────────┈ ⳹*

        ║▌│█║▌│ █║▌│█│║▌║
        ║▌│█║▌│ █║▌│█│║▌║
`
/*  Vid.sendMessage(from, tutu, text, { quoted: freply})*/
let haweh = await Vid.prepareMessageFromContent(from,{"orderMessage": {"orderId": "501374481143681","thumbnail": fs.readFileSync('./media/cewek.jpeg'),"itemCount": 9999,"status": "INQUIRY","surface": "CATALOG","message": tutu,"orderTitle": "DREAM BOT","sellerJid": "6288292024190@s.whatsapp.net","token": "AR6eHHZTvi8k3qMfxWHBCvAXO+vG5VW/1QtpiPpxL3Tfyg=="}}, {quoted: ftroli2, contextInfo:{"mentionedJid": [gw, sender]}}) 
Vid.relayWAMessage(haweh)
break
//====================================REST API DAPPA UHUY========================================//
//============================================ANIME MENU==============================//
 case 'tiktoknowm':
                if (args.length < 1) return reply(`link mana broh?\ncontoh : ${prefix + command} https://vm.tiktok.com/ZSJkHUCwK/`)
                reply(mess.wait)
                link = args.join(' ')
                dppa = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=${LolKey}&url=${link}`)
                uhyy = dppa.result
                buffer = await getBuffer(uhyy.link)
                magee = await getBuffer(uhyy.thumbnail)
                apatar = await getBuffer(uhyy.author.avatar)
                textt = `Username : ${uhyy.author.username}\nNickname : ${uhyy.author.nickname}\nTitle : ${uhyy.title}\nKeywords : ${uhyy.keywords}\nDescription : ${uhyy.description}\nDuration : ${uhyy.duration}\nDigg Count : ${uhyy.statistic.diggCount}\nShare Count : ${uhyy.statistic.shareCount}\nComment Count : ${uhyy.statistic.commentCount}\nPlay Count : ${uhyy.statistic.playCount}\n`
               Vid.sendMessage(from, apatar, image, {quoted: freply, caption: 'profile yang punya video:v'})
                Vid.sendMessage(from, magee, image, {quoted: freply, caption: textt})
                Vid.sendMessage(from, buffer, video, {quoted: freply, caption: 'nih videonya'})
                break
                case 'creategroup':
				  if (!mek.key.fromMe)return reply(mess.only.owner)
const pepekk = body.slice(13)
const adann = pepekk.split("|")[0]
const y = pepekk.split("|")[1].replace("@","")
Vid.groupCreate (`${adann}`, [`${numbernye}@s.whatsapp.net`,`${y}@s.whatsapp.net`])
reply('_Sucses creategroup_')
	break
               case 'ytmp4':
                    if (isLimit(sender)) return reply(`Maaf ${pushname} Limit Harian Anda Sudah Abiss\nSilahkan Buy Limit Terlebih Dahulu`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytvideo?apikey=${LolKey}&url=${ini_link}`)
                    get_result = get_result.result
                    asu2 = `
─────────────────────
◪ *YOUTUBE DOWNLOAD*
│
└ 々 Judul: *${get_result.title}*
    々 Chanel: *${get_result.uploader}*
    々 Durasi: ${get_result.duration}
    々 Viewers: *${get_result.view}*
     々 Tipe: *${command}*
─────────────────────`
                     ini_buffer = await getBuffer(get_result.thumbnail)
                    Vid.sendMessage(from, ini_buffer, image, { quoted: freply, caption: asu2, contextInfo: { forwardingScore: 2, isForwarded: true} })
                    get_audio = await getBuffer(get_result.link)
                    Vid.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: freply, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    break
			       case 'ytmp3':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytaudio?apikey=${LolKey}&url=${ini_link}`)
                    get_result = get_result.result
                    asu = `
─────────────────────
◪ *YOUTUBE DOWNLOAD*
│
└ 々 Judul: *${get_result.title}*
    々 Chanel: *${get_result.uploader}*
    々 Durasi: ${get_result.duration}
    々 Viewers: *${get_result.view}*
    々 Tipe: *${command}*
─────────────────────`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    Vid.sendMessage(from, ini_buffer, image, { quoted: freply, caption: asu, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    get_audio = await getBuffer(get_result.link)
                    Vid.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', ptt:true, filename: `${get_result.title}.mp3`, quoted: freply, duration: 99999999999, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    break
                case 'igvideo':
                if (args.length < 1) return reply(`link mana broh?\ncontoh : ${prefix + command} https://www.instagram.com/p/CNzcf8egt27/?igshid=1hbl53id19nqv`)
                reply(mess.wait)
                link = args[0]
                resultnya = await fetchJson(`https://leyscoders-api.herokuapp.com/api/instagram/video?url=${link}&apikey=${LeysKey}`)
                buffer = await getBuffer(resultnya.result)
                Vid.sendMessage(from, buffer, MessageType.video, {quoted: freply})
                break
                case 'igphoto':
                if (args.length < 1) return reply(`link mana broh?\ncontoh : ${prefix + command} https://www.instagram.com/p/CNzQL4cHm4n/?igshid=19n977531z5nz`)
                reply(mess.wait)
                link = args[0]
                resultnya = await fetchJson(`https://leyscoders-api.herokuapp.com/api/instagram/photo?url=${link}&apikey=${LeysKey}`)
                buffer = await getBuffer(resultnya.result)
                Vid.sendMessage(from, buffer, MessageType.image, {quoted: freply})

                break
                case 'play':
                if (args.length < 1) return reply(`judul mana broh?\ncontoh : ${prefix + command} Melukis Senja`)
                reply(mess.wait)
                query = args.join(' ')
                get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytplay?apikey=${LolKey}&query=${query}`)
                get_result = get_result.result
                get_info = get_result.info
                ini_txt = `Title : ${get_info.title}\n`
                ini_txt += `Uploader : ${get_info.uploader}\n`
                ini_txt += `Duration : ${get_info.duration}\n`
                ini_txt += `View : ${get_info.view}\n`
                ini_txt += `Like : ${get_info.like}\n`
                ini_txt += `Dislike : ${get_info.dislike}\n`
                ini_txt += `Description :\n ${get_info.description}\n\n\n`
                ini_buffer = await getBuffer(get_info.thumbnail)
                Vid.sendMessage(from, ini_buffer, image, { quoted: freply, caption: ini_txt })
                get_audio = await getBuffer(get_result.audio[3].link)
                Vid.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_info.title}.mp3`, quoed: freply})
                get_video = await getBuffer(get_result.video[0].link)
                Vid.sendMessage(from, get_video, video, { mimetype: 'video/mp4', filename: `${get_info.title}.mp4`, quoed: freply})
                break
                case 'play2':
                if (args.length < 1) return reply(`judul mana broh?\ncontoh : ${prefix + command} Melukis Senja`)
                reply(mess.wait)
                query = args.join(' ')
                get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytplay2?apikey=${LolKey}&query=${query}`)
                get_result = get_result.result
                ini_buffer = await getBuffer(get_result.thumbnail)
                dp.sendMessage(from, ini_buffer, image, { quoted: freply, caption: get_result.title })
                get_audio = await getBuffer(get_result.audio)
               Vid.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, filename: `${get_result.title}.mp3`, quoted: freply })
                get_video = await getBuffer(get_result.video)
                Vid.sendMessage(from, get_video, video, { mimetype: Mimetype.mp4, filename: `${get_result.title}.mp4`, quoted: freply })
                break
         case 'q':
    if (!m.quoted) return reply('reply pesan!')
    let rii = Vid.serializeM(await m.getQuotedObj())
    if (!rii.quoted) return reply('pesan yang anda reply tidak mengandung reply!')
    await rii.quoted.copyNForward(m.chat, true)
    break
//====================================REST API DAPPA UHUY========================================//
//============================================ANIME MENU==============================//
case 'lewdk':
                case 'erok':
                case 'tits':
                case 'keta':
                case 'solo':
                case 'eron':
                case 'lewd':
                case 'trap':
                case 'yuri':
                case 'ero':
                case 'holoero':
                case 'erofeet':
                case 'blowjob':
                case 'cum_jpg':
                case 'eroyuri':
                case 'hentai':
                case 'femdom':
                case 'nsfw_avatar':
                case 'kemonomimi':
                case 'pussy_jpg':
                case 'lewdkemo':
                case 'hololewd':
                case 'futanari':
                case 'hololewd':
				dapuhy = await getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=${LolKey}`)
				Vid.sendMessage(from, dapuhy, image, {quoted: mek})
				break
				case 'hentai4everyone':
				case 'animebellybutton':
				case 'biganimetiddies':
				case 'lewdanimegirls':
				case 'hentaifemdom':
				case 'animearmpits':
				case 'hentaiparadise':
				case 'animethighss':
				case 'animebooty':
				case 'animefeets':
				case 'sideoppai':
				case 'hololewd':
				case 'ahegao':
				case 'ecchi':
				case 'yaoi':
				case 'trap':
				case 'chiisaihentai':
				case 'loli':
				case 'waifu':
				case 'neko':
				reply(mess.wait)
				dapuhy = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${LolKey}`)
				Vid.sendMessage(from, dapuhy, image, {quoted: freply})
				break
//====================================REST API DAPPA UHUY========================================//
//============================================ANIME MENU==============================//
                case 'pornhub':
                case 'avenger':
                case 'space':
                case 'ninjalogo':
                case 'marvelstudio':
                case 'lionlogo':
                case 'wolflogo':
                case 'steel3d':
                case 'wallgravity':
                //[❗] case by DappaGanz
                try {
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}|ganz`)
                ct = args.join(' ')
                dap1 = ct.split('|')[0]
                dap2 = ct.split('|')[1]
                reply(mess.wait)
                dapuhy = await getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${Lolhum}&text1=${dap1}&text2=${dap2}`)
                Vid.sendMessage(from, dapuhy, image, {quoted: freply})
                } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply('Erorr')
				}
                break
                /*case '':
                if ((isMedia && !mek.message.videoMessage || isQuotedImage)) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await Vid.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".webp")
                        ini_txt = 'Dream Bot'
                        tod = 'Create By : David'
                        request({
                            url: `https://api.lolhuman.xyz/api/convert/towebpauthor?apikey=${Lolhum}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                                "package": ini_txt,
                                "author": tod
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            Vid.sendMessage(from, ini_buff, sticker, { quoted: mek }).then(() => {
                                fs.unlinkSync(file_name)
                            })
                        });
}
break*/
//====================================REST API DAPPA UHUY========================================//
//============================================ANIME MENU==============================//
//====================================REST API DAPPA UHUY========================================//
//============================================ANIME MENU==============================//
                    case 'truth':
					const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
				    Vid.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: freply })
					break
		            case 'dare':
					const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					Vid.sendMessage(from, tod, image, { quoted: freply, caption: '*Dare*\n\n'+ der })
					break                                                                                                                                           
case 'tebakgambar': // case by piyo-chan
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/gambar?apikey=${LolKey}`)
                    get_result = get_result.result
                    ini_image = get_result.image
                    jawaban = get_result.answer
                    ini_buffer = await getBuffer(ini_image)
                    await Vid.sendMessage(from, ini_buffer, image, { quoted: mek, caption: "Jawab gk? Jawab lahhh, masa enggak. 60 detik cukup kan? gk cukup pulang aja" }).then(() => {
                        tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
                        fs.writeFileSync("./lib/tebakgambar.json", JSON.stringify(tebakgambar))
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
                        reply("Jawaban: " + jawaban)
                        delete tebakgambar[sender.split('@')[0]]
                        fs.writeFileSync("./lib/tebakgambar.json", JSON.stringify(tebakgambar))
                    }
                    break
                      case 'canceltebakgambar':
                    if (!tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Anda tidak memiliki tebak gambar sebelumnya")
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./lib/tebakgambar.json", JSON.stringify(tebakgambar))
                    reply1("Success mengcancel tebak gambar sebelumnya")
                    break
//====================================REST API DAPPA UHUY========================================//
//============================================ANIME MENU==============================//
//====================================REST API DAPPA UHUY========================================//
//============================================ANIME MENU==============================//
case 'shadow':
                case 'romance':
                case 'smoke':
                case 'burnpaper':
                case 'lovemessage':
                case 'undergrass':
                case 'coffe':
                case 'cup':
                case 'cup1':
                case 'woodenboard':
                case 'coffe':
                case 'woodheart':
                case 'summer3d':
                case 'love':
                case 'wolfmetal':
                case 'nature3d':
                case 'underwater':
                case 'golderrose':
                case 'summernature':
                case 'letterleaves':
                case 'glowingneon':
                case 'fallleaves':
                case 'flamming':
                case 'harrypotter':
                case 'carvedwood':
                //[❗] case by DappaGanz
                try {
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}`)
                dpuhy = args.join(' ')
                reply(mess.wait)
                dapuhy = await getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${LolKey}&text=${dpuhy}`)
                Vid.sendMessage(from, dapuhy, image, {quoted: freply})
                } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply('EROR')
				}
                break
                case 'hamloo':
                if (!mek.key.fromMe) return
Vid.sendMessage(mek.key.remoteJid, '📋.XEON, UR BELOVED DADDY', MessageType.extendedText, {
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 9999999, // Bug
    status: 1,
    surface: 1,
    message: 'PAPA BOL',
    orderTitle: 'BY NURUTOMO ', // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
Vid.toggleDisappearingMessages(from,`MODAR`,text)
Vid.toggleDisappearingMessages(from,`MODAR`,text)
Vid.toggleDisappearingMessages(from,`MODAR`,text)
Vid.toggleDisappearingMessages(from,`MODAR`,text)
Vid.toggleDisappearingMessages(from,`MODAR`,text)
Vid.toggleDisappearingMessages(from,`MODAR`,text)
Vid.toggleDisappearingMessages(from,`MODAR`,text)
Vid.toggleDisappearingMessages(from,`MODAR`,text)
Vid.toggleDisappearingMessages(from,`MODAR`,text)
Vid.toggleDisappearingMessages(from,`MODAR`,text)
Vid.toggleDisappearingMessages(from,`MODAR`,text)
Vid.toggleDisappearingMessages(from,`MODAR`,text)
Vid.toggleDisappearingMessages(from,`MODAR`,text)
Vid.toggleDisappearingMessages(from,`MODAR`,text)
Vid.toggleDisappearingMessages(from,`MODAR`,text)
Vid.toggleDisappearingMessages(from,`MODAR`,text)
Vid.toggleDisappearingMessages(from,`MODAR`,text)
Vid.toggleDisappearingMessages(from,`MODAR`,text)
Vid.toggleDisappearingMessages(from,`MODAR`,text)
Vid.toggleDisappearingMessages(from,`MODAR`,text)
Vid.toggleDisappearingMessages(from,`MODAR`,text)
Vid.toggleDisappearingMessages(from,`MODAR`,text)
Vid.toggleDisappearingMessages(from,`MODAR`,text)
Vid.toggleDisappearingMessages(from,`MODAR`,text)
Vid.toggleDisappearingMessages(from,`MODAR`,text)
Vid.toggleDisappearingMessages(from,`MODAR`,text)
Vid.toggleDisappearingMessages(from,`MODAR`,text)
Vid.toggleDisappearingMessages(from,`MODAR`,text)
Vid.toggleDisappearingMessages(from,`MODAR`,text)
break
//================================ REST API DAPPA UHUY============================================//
//======================================OTHER MENU===================================//
//============================================================================//
case 'blackpink':
nye = args.join(" ")
vu = await getBuffer(`https://lolhuman.herokuapp.com/api/textprome/blackpink?apikey=${Lolhum}&text=${nye}`)
Vid.sendMessage(from, vu, image,{ quoted: mek})
break
case 'neon':
nye = args.join(" ")
vu = await getBuffer(`https://lolhuman.herokuapp.com/api/textprome/neon?apikey=${Lolhum}&text=${nye}`)
Vid.sendMessage(from, vu, image,{ quoted: mek})
break
case 'greenneon':
nye = args.join(" ")
vu = await getBuffer(`https://lolhuman.herokuapp.com/api/textprome/greenneon?apikey=${Lolhum}&text=${nye}`)
Vid.sendMessage(from, vu, image,{ quoted: mek})
break
case 'glow':
nye = args.join(" ")
vu = await getBuffer(`https://lolhuman.herokuapp.com/api/textprome/advanceglow?apikey=${Lolhum}&text=${nye}`)
Vid.sendMessage(from, vu, image,{ quoted: mek})
break
case 'metal':
nye = args.join(" ")
vu = await getBuffer(`https://lolhuman.herokuapp.com/api/textprome/metaldark?apikey=${Lolhum}&text=${nye}`)
Vid.sendMessage(from, vu, image,{ quoted: mek})
break
case 'neonlight':
nye = args.join(" ")
vu = await getBuffer(`https://lolhuman.herokuapp.com/api/textprome/neonlight?apikey=${Lolhum}&text=${nye}`)
Vid.sendMessage(from, vu, image,{ quoted: mek})
break
case 'minion':
nye = args.join(" ")
vu = await getBuffer(`https://lolhuman.herokuapp.com/api/textprome/minion?apikey=${Lolhum}&text=${nye}`)
Vid.sendMessage(from, vu, image,{ quoted: mek})
break
case 'neon1':
nye = args.join(" ")
vu = await getBuffer(`https://lolhuman.herokuapp.com/api/textprome/futureneon?apikey=${Lolhum}&text=${nye}`)
Vid.sendMessage(from, vu, image,{ quoted: mek})
break
case 'writing':
nye = args.join(" ")
vu = await getBuffer(`https://lolhuman.herokuapp.com/api/textprome/sandwriting?apikey=${Lolhum}&text=${nye}`)
Vid.sendMessage(from, vu, image,{ quoted: mek})
break
case 'summer':
nye = args.join(" ")
vu = await getBuffer(`https://lolhuman.herokuapp.com/api/textprome/sandsummer?apikey=${Lolhum}&text=${nye}`)
Vid.sendMessage(from, vu, image,{ quoted: mek})
break

//================================ REST API DAPPA UHUY============================================//
//======================================OTHER MENU===================================//
//============================================================================//
case 'asupan':
				reply(mess.wait)
				dapgz = await getBuffer(`https://dapuhy-api.herokuapp.com/api/asupan/asupan?apikey=JCMNOPJE`)
				pideo = await getBuffer(dapgz.result.url)
				Vid.sendMessage(from, dapgz, video, {quoted: freply})
				break
				case 'asupansantuy':
				reply(mess.wait)
				dapgz = await getBuffer(`https://dapuhy-api.herokuapp.com/api/asupan/asupansantuy?apikey=JCMNOPJE`)
				pideo = await getBuffer(dapgz.result.url)
				Vid.sendMessage(from, dapgz, video, {quoted: freply})
				break
				case 'asupanbocil':
				reply(mess.wait)
				dapgz = await getBuffer(`https://dapuhy-api.herokuapp.com/api/asupan/asupanbocil?apikey=JCMNOPJE`)
				pideo = await getBuffer(dapgz.result.url)
				Vid.sendMessage(from, dapgz, video, {quoted: freply})
				break
				case 'asupanukhty':
				reply(mess.wait)
				dapgz = await getBuffer(`https://dapuhy-api.herokuapp.com/api/asupan/asupanukhty?apikey=JCMNOPJE`)
				pideo = await getBuffer(dapgz.result.url)
				Vid.sendMessage(from, dapgz, video, {quoted: freply})
				break
				case 'asupanrikagusriani':
				reply(mess.wait)
				dapgz = await getBuffer(`https://dapuhy-api.herokuapp.com/api/asupan/asupanrikagusriani?apikey=JCMNOPJE`)
				pideo = await getBuffer(dapgz.result.url)
				Vid.sendMessage(from, dapgz, video, {quoted: freply})
				break
				case 'asupanghea':
				reply(mess.wait)
				dapgz = await getBuffer(`https://dapuhy-api.herokuapp.com/api/asupan/asupanghea?apikey=JCMNOPJE`)
				pideo = await getBuffer(dapgz.result.url)
				Vid.sendMessage(from, dapgz, video, {quoted: freply})
				break
				                case 'randomwalpaper':
                nye = await fetchJson(`https://pecundang.herokuapp.com/api/randomwallpaper`)
                nyu = await getBuffer(nye.result)
                Vid.sendMessage(from, nye, image,{ quoted: mek})
                break
                                case 'teknologi':
                nye = await fetchJson(`https://pecundang.herokuapp.com/api/wallpaper/teknologi`)
                nyu = await getBuffer(nye.result)
                Vid.sendMessage(from, nye, image,{ quoted: mek})
                break
                                case 'programing':
                nye = await fetchJson(`https://pecundang.herokuapp.com/api/wallpaper/programming`)
                nyu = await getBuffer(nye.result)
                Vid.sendMessage(from, nye, image,{ quoted: mek})
                break
                                case 'cyberspace':
                nye = await fetchJson(`https://pecundang.herokuapp.com/api/wallpaper/cyberspace`)
                nyu = await getBuffer(nye.result)
                Vid.sendMessage(from, nye, image,{ quoted: mek})
                break
                
//================================ REST API DAPPA UHUY============================================//
//======================================OTHER MENU===================================//
//============================================================================//
 case 'infogempa':
 ngontol = await fetchJson(`https://dapuhy-api.herokuapp.com/api/others/infogempa?apikey=${davidsu}`)
hamlo = `*INFO GEMPA*\n
*WAKTU* : ${ngontol.result.Waktu}
*LINTANG* : ${ngontol.result.Lintang}
*BUJUR* : ${ngontol.result.Bujur}
*MAGNITUDO* : ${ngontol.result.Magnitudo}
*KEDALAMAN* : ${ngontol.result.Kedalaman}
*Wilayah* : ${ngontol.result.Wilayah}`
heyo = await getBuffer(ngontol.result.Map)
Vid.sendMessage(from, heyo, image,{ quoted: mek, caption, hamlo})
break
//====================== ================//
               case 'hash':
                if (!isQuotedSticker) return reply('Reply Stickernya')
                const encmeds = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                const mediastick = await Vid.downloadMediaMessage(encmeds)
                var crypto = require('crypto')
                hash = crypto.createHash('sha256').update(mediastick).digest('base64');
                console.log(color('NGONTOL AMAT KEK WIBU'))
               reply(hash)
                break
//======================  =============//
                case 'randompegunungan':
                nye = await fetchJson(`https://dapuhy-api.herokuapp.com/api/randomimage/pegunungan?apikey=${davidsu}`)
                nyu = await getBuffer(nye.result)
                Vid.sendMessage(from, nye, image,{ quoted: mek})
                break
                            case 'bts':
                nye = await fetchJson(`https://dapuhy-api.herokuapp.com/api/randomimage/batues?apikey=${davidsu}`)
                nyu = await getBuffer(nye.result)
                Vid.sendMessage(from, nyu, image,{ quoted: mek})
                break
                                                case 'blackpink':
                nye = await fetchJson(`https://dapuhy-api.herokuapp.com/api/randomimage/blekpink?apikey=${davidsu}`)
                nyu = await getBuffer(nye.result)
                Vid.sendMessage(from, nyu, image,{ quoted: mek})
                break
                                                case 'exo':
                nye = await fetchJson(`https://dapuhy-api.herokuapp.com/api/randomimage/exontol?apikey=${davidsu}`)
                nyu = await getBuffer(nye.result)
                Vid.sendMessage(from, nyu, image,{ quoted: mek})
                break
                                                case 'game':
                nye = await fetchJson(`https://dapuhy-api.herokuapp.com/api/randomimage/game?apikey=${davidsu}`)
                nyu = await getBuffer(nye.result)
                Vid.sendMessage(from, nyu, image,{ quoted: mek})
                break
                                                case 'teknologi':
                nye = await fetchJson(`https://dapuhy-api.herokuapp.com/api/randomimage/teknologi?apikey=${davidsu}`)
                nyu = await getBuffer(nye.result)
                Vid.sendMessage(from, nyu, image,{ quoted: mek})
                break
                                                case 'islamic':
                nye = await fetchJson(`https://dapuhy-api.herokuapp.com/api/randomimage/islamic?apikey=${davidsu}`)
                nyu = await getBuffer(nye.result)
                Vid.sendMessage(from, nyu, image,{ quoted: mek})
                break
                                                case 'cyberspace':
                nye = await fetchJson(`https://dapuhy-api.herokuapp.com/api/randomimage/cyberspace?apikey=${davidsu}`)
                nyu = await getBuffer(nye.result)
                Vid.sendMessage(from, nyu, image,{ quoted: mek})
                break
/*                                                case '':
                nye = await fetchJson(`${dappa}`)
                nyu = await getBuffer(nye.result)
                Vid.sendMessage(from, nyu, image,{ quoted: mek})
                break
                                                case '':
                nye = await fetchJson(`${dappa}`)
                nyu = await getBuffer(nye.result)
                Vid.sendMessage(from, nyu, image,{ quoted: mek})
                break
                                                case '':
                nye = await fetchJson(`${dappa}`)
                nyu = await getBuffer(nye.result)
                Vid.sendMessage(from, nyu, image,{ quoted: mek})
                break
                                                case '':
                nye = await fetchJson(`${dappa}`)
                nyu = await getBuffer(nye.result)
                Vid.sendMessage(from, nyu, image,{ quoted: mek})
                break
                                                case '':
                nye = await fetchJson(`${dappa}`)
                nyu = await getBuffer(nye.result)
                Vid.sendMessage(from, nyu, image,{ quoted: mek})
                break*/
                
                
                                case 'artpapercut':
                shu = args.join(" ")
                nye = await fetchJson(`https://dapuhy-api.herokuapp.com/api/textpro/artpapercut?text=${shu}&apikey=${dappa}`)
                nyu = await getBuffer(nye.result)
                Vid.sendMessage(from, nyu, image,{ quoted: mek})
                break
                                case 'neondevil':
                shu = args.join(" ")
                nye = await fetchJson(`https://dapuhy-api.herokuapp.com/api/textpro/neondevil?text=${shu}&apikey=${dappa}`)
                nyu = await getBuffer(nye.result)
                Vid.sendMessage(from, nyu, image,{ quoted: mek})
                break
                                case '3dtext':
                shu = args.join(" ")
                nye = await fetchJson(`https://dapuhy-api.herokuapp.com/api/textpro/3dunderwater?text=${shu}&apikey=${dappa}`)
                nyu = await getBuffer(nye.result)
                Vid.sendMessage(from, nyu, image,{ quoted: mek})
                break
                                case 'bearlogo':
                shu = args.join(" ")
                nye = await fetchJson(`https://dapuhy-api.herokuapp.com/api/textpro/bearlogo?text=${shu}&apikey=${dappa}`)
                nyu = await getBuffer(nye.result)
                Vid.sendMessage(from, nyu, image,{ quoted: mek})
                break
                                case 'biscuittext':
                shu = args.join(" ")
                nye = await fetchJson(`https://dapuhy-api.herokuapp.com/api/textpro/biscuit?text=${shu}&apikey=${dappa}`)
                nyu = await getBuffer(nye.result)
                Vid.sendMessage(from, nyu, image,{ quoted: mek})
                break
//======================  =============//
               case 'self':
			    if (!mek.key.fromMe) return reply('OWNER BUKAN?')
			    public = false
			    return reply(  `*「 MODE : SELF 」*`, text)
			    break
			     case 'public':
			    if (!mek.key.fromMe) return reply('OWNER BUKAN?')
			    public = true
			    return reply(  `*「 MODE : PUBLIC 」*`, text)
			    break
//======================  =============//
/*
case '':
       if ((isMedia && !mek.message.videoMessage)) {
						hhhh = await Vid.downloadAndSaveMediaMessage(mek)
						ran = getRandom('.webp')
						await ffmpeg(`./${hhhh}`)
							.input(hhhh)
							.on('start', function (cmd) {
							})
							.on('error', function (err) {
								//fs.unlinkSync(hhhh)
								reply(mess.error.stick)
							})
							.on('end', function () {
								buff = fs.readFileSync(ran)
								costum(buff, sticker, '0@s.whatsapp.net', monospace('AUTOSTICKER'))
								//fs.unlinkSync(hhhh)
								//fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
				}
					break
*/
//======================  =============//
case 'addsticker':          
			    	if (!isQuotedSticker) return reply('Reply stiker nya')
			     	svst = body.slice(12)
			    	if (!svst) return reply('Nama sticker nya apa?')
			    	boij = JSON.parse(JSON.stringify(freply).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			     	delb = await Vid.downloadMediaMessage(boij)
			    	fs.writeFileSync(`./src/sticker/${svst}.webp`, delb)
			     	fs.writeFileSync('./media', JSON.stringify(setiker))
			    	Vid.sendMessage(from, `Sukses Menambahkan Sticker kedalam database\nSilahkan Cek dengan cara ${prefix}liststicker`, MessageType.text, { quoted: freply})
      				break
//======================  =============//
  case 'randomwaifu':
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/waifu`)
                   anu1 = await getBuffer(anu.image)
                   anu2 = `➻ *NAMA* : ${anu.name}\n`
                   anu2 += `➻ *DESC* : ${anu.desc}\n`
                   Vid.sendMessage(from, anu1, image, {caption: anu2, quoted: freply}).catch(e => {
                   console.log(e)
	               })
                   break
                   case 'randomwaifu1':
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/waifu2`)
                   anu1 = await getBuffer(anu.img)                    
                   Vid.sendMessage(from, anu1, image, {quoted: freply}).catch(e => {
                   console.log(e)
	               })
                   break
                                      case 'qrcode':
                   if (args.lenght < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} halo sayang*`)  

                   F = body.slice(8)
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/qrcode?text=${F}`)
                   Vid.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: freply}).catch(e => {
                   console.log(e)
	               })
                   break
                   case 'neko1':
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/nekonime`)
                   anu1 = await getBuffer(anu.result)
                   Vid.sendMessage(from, anu1, image, {caption: `nih kack`, quoted: freply}).catch(e => {
                   console.log(e)
	               })
                   break
                   case 'kusonime':
                   F = body.slice(10)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/kuso?q=${F}`)
                   anu1 = `➻ *INFO* : ${anu.sinopsis}\n`
                   reply(anu1)
                   break
                   case 'renungan':  
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/renungan`)
                   anu1 = `➻ *JUDUL* : ${anu.judul}\n`
                   anu1 += `➻ *PESAN* : ${anu.pesan}\n`
                   anu1 += `➻ *DESC* : ${anu.Isi}\n`
                   reply(anu1)
                   break
                   case 'samehadaku':
                   F = body.slice(12)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/samehadaku?q=${F}`)
                   anu2 = await getBuffer(anu.thumb)
                   anu1 = `➻ *JUDUL* : ${anu.title}\n`
                   anu1 += `➻ *LINK* : ${anu.link}\n`
                   anu1 += `➻ *DESK* : ${anu.desc}\n`
                   Vid.sendMessage(from, anu2, image, {caption: anu1, quoted: freply })
                   break
                   case 'neon1':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/neon_light?text=${F}`)
                   Vid.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: freply}).catch(e => {
                   console.log(e)
	               }) 
                   break  
                   case 'text3d':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${F}`)
                   Vid.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: freply}).catch(e => {
                   console.log(e)
	               }) 
                   break                   
                   case 'galaxy':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/galaxywp?text=${F}`)
                   Vid.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: freply}).catch(e => {
	               freplyz(nyz.error(prefix, command))
                   console.log(e)
	               }) 
                   break
                   case 'gaming':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/gaming?text=${F}`)
                   Vid.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: freply}).catch(e => {
                   console.log(e)
	               }) 
                   break
                   case 'colors':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/watercolor?text=${F}`)
                   Vid.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: freply}).catch(e => {
                   console.log(e)
	               }) 
                   break
                   case 'kling':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   var F = body.slice(7)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1];    				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/sparkling?text1=${F1}&text2=${F2}`)
                   Vid.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: freply}).catch(e => {
                   console.log(e)
	               }) 
                   break
                   case 'infonomer':
                   F = body.slice(11)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${F}`)
                   anu1 = `➻ *NOMER* : ${anu.nomor}\n`
                   anu1 += `➻ *JUDUL* : ${anu.op}\n`
                   anu1 += `➻ *JUDUL* : ${anu.international}\n`
                   reply(anu1)
                   break
                   case 'jadwaltv':
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/jadwaltvnow`)
                   anu1 = `➻ *JAM* : ${anu.result.jam}\n`
                   anu1 += `➻ *JADWAL* : ${anu.result.jadwalTV}\n`
                   reply(anu1)
                   break
                   case 'tvjadwal':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} gtv*`)
                   F = body.slice(10)
                   anu1 = await fetchJson(`https://docs-jojo.herokuapp.com/api/jadwaltv?ch=${F}`)
                   anu1 = `➻ *JAM* : ${anu.result}`
                   reply(anu1)
                   break
                   case 'fml': 
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/fml`)
                   anu1 = `➻ *FML* : ${anu.result.fml}`
                   reply(anu1)
                   break
                   case 'cinta': 
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/katacinta`)
                   anu1 = `➻ *KATA CINTA* : ${anu.result}`
                   reply(anu1)
                   break                                                                            
                   case 'twich': 
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/twichquote`)
                   anu1 = `➻ *THWICH* : ${anu.result}`
                   reply(anu1)
                   break
                   case 'loli':

                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/randomloli`)
                   Vid.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: freply}).catch(e => {
	               freplyz(nyz.error(prefix, command))
                   console.log(e)
	               })
                   break
                   case 'randomhusbu':

                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/husbuando`)
                   anu1 = `➻ *NAMA* : ${anu.waifu}`
                   anu2 = await getBuffer(anu.image)
                   Vid.sendMessage(from, anu2, image, {caption: anu1, quoted: freply}).catch(e => {
                   console.log(e)
	               })                   
                   break
                   case 'fake':
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/fake_identity`)
                   anu1 = `➻ *NAMA* : ${anu.name}\n`
                   anu1 += `➻ *GENDER* : ${anu.gender}\n` 
                   anu1 += `➻ *AGE* : ${anu.age}\n`
                   anu1 += `➻ *BIRTDAY* : ${anu.birtday}\n`
                   anu1 += `➻ *BACHELOR* : ${anu.Bachelor}\n`
                   anu1 += `➻ *ADDRESA* : ${anu.address}\n`
                   anu1 += `➻ *CODE* : ${anu.zip_code}\n`
                   anu1 += `➻ *STATE* : ${anu.state}\n`
                   anu1 += `➻ *COUNTRY* : ${anu.country}\n`
                   anu1 += `➻ *EMAIL* : ${anu.email}\n`
                   anu1 += `➻ *PASS* : ${anu.password}\n` 
                   anu1 += `➻ *PHONE* : ${anu.phone}\n` 
                   anu1 += `➻ *CARD* : ${anu.card}\n`
                   anu1 += `➻ *CODE* : ${anu.code}\n`
                   anu1 += `➻ *DATE* : ${anu.date}\n`
                   anu1 += `➻ *PIN* : ${anu.pin_code}\n`
                   anu1 += `➻ *WEIGHT* : ${anu.weight}\n` 
                   anu1 += `➻ *HEIGHT* : ${anu.height}\n` 
                   anu1 += `➻ *TYPE* : ${anu.blood_type}\n`
                   anu1 += `➻ *STATUS* : ${anu.status}\n`
                   reply(anu1)
                   break
                   case 'pin':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} https://link*`)

                   F = body.slice(11)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/pinterest?url=${F}`)
                   anu1 = await getBuffer(anu.result)
                   Vid.sendMessage(from, anu1, image, {caption: `nihh kack`, quoted: freply}).catch(e => {
                   console.log(e)
	               })
                   break
//======================  =============//
                   case 'stalkig':
                   case 'igstalk':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} jokowi*`)
                   F = body.slice(9)

                   anu = await fetchJson(`https://api.zeks.xyz/api/igstalk?username=${F}&apikey=apivinz`)
                   anu1 = await getBuffer(anu.profile_pic)
                   anu2 = `➻ *NAMA* : ${anu.username}\n`
                   anu2 += `➻ *FULLNAME* : ${anu.fullname}\n`
                   anu2 += `➻ *FOLLOWERS* : ${anu.follower}\n`
                   anu2 += `➻ *FOLLOWING* : ${anu.following}\n`
                   anu2 += `➻ *VERIFY* : ${anu.is_verified}\n`
                   anu2 += `➻ *BISNIS* : ${anu.is_bussiness}\n`
                   anu2 += `➻ *PRIVATE* : ${anu.is_private}\n`
                   anu2 += `➻ *BIO* : ${anu.bio}\n`
                   anu2 += `➻ *SOURCE* : ${anu.source}\n`
                   Vid.sendMessage(from, anu1, image, {caption: anu2, quoted: freply}).catch(e => {
                   console.log(e)
	               })
                   break
                  case 'ghstalk': case 'githubstalk':
try {
if (!q) return reply('Usernamenya?')
await fetchJson(`https://api.github.com/users/${args.join(' ')}`).then(Y => {
            console.log('GITHUB STALKER')
           var ten = `${Y.avatar_url}`
           var teks = `*Username* : ${Y.name}\n*Blog* : ${Y.blog}\n*Location* : ${Y.location}\n*Email* : ${Y.email}\n*Bio* : ${Y.bio}\n*Followers* : ${Y.followers}\n*Following* : ${Y.following}\n*Pub-repos* : ${Y.public_repos}\n*Pub-gists* : ${Y.public_gists}\n\n*Link* : ${Y.html_url}`
            sendMediaURL(from,ten,teks) 
            }) 
} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('username tidak valid')
					}
					break
//======================  =============//










//====================== INFO BOT =============//
case 'buggc':
await Vid.toggleDisappearingMessages(from)
Vid.sendMessage(from, `Yoo`, text)
break
case 'ping':
					  const statusss = public ? 'PUBLIC': 'SELF'
					  var groups = Vid.chats.array.filter(v => v.jid.endsWith('g.us'))
					  var private = Vid.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
					  const chatsId = await Vid.chats.all()
                const timestamp = speed();
                const latensi = speed() - timestamp 
                p0 =` \`\`\`Loaded Message\`\`\`
                
\`\`\` - [ ${totalchat.length} ]  Total Chat\`\`\`
\`\`\` - [ ${groups.length} ] Group Chat\`\`\`
\`\`\` - [ ${private.length} ] Private Chat\`\`\`
\`\`\` - [ ${Vid.user.phone.device_manufacturer} ] HANDPHONE\`\`\`
\`\`\` - [ ${Vid.user.phone.wa_version} ] WA Version\`\`\`
\`\`\` - [ Baileys ] Server\`\`\`
\`\`\` - [ ${statusss} ] MODE\`\`\`
\`\`\` - [ ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / 4096 ] RAM\`\`\`

\`\`\`Speed : ${latensi.toFixed(4)} Second\`\`\``
                return reply(p0, text)
                    break
                    
//======================DOWNLOADER =============//
               case 'play2':   
			  if (args.length < 1) return reply('*Masukan judul nya?*')
                reply(mess.wait)
				play = args.join(" ")
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?q=${play}&apikey=apivinz`)
				if (anu.error) return reply(anu.error)
				infomp3 = `*「 PLAY VIDEO 」*
				
Judul : ${anu.result.title}
Source : ${anu.result.source}
				
*[Wait] Tunggu Sebentar..*`
				buffer = await getBuffer(anu.result.thumbnail)
				buffer1 = await getBuffer(anu.result.url_video)
				Vid.sendMessage(from, buffer, image, {quoted: zdarma, caption: infomp3})
				Vid.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `${anu.result.video}.mp4`, quoted:freply, caption: 'Nih Gan'})
					break


//====================== RANDOM MENU =============//
                       case 'quotes':
                       case 'randomquotes':
                       hu = await fetchJson('https://pecundang.herokuapp.com/api/randomquote')
                       nye = `*Quotes Hari ini = \n${hu.result.quotes}*`
                       Vid.sendMessage(from, nye, text,{ quoted: freply})
                       break
                       case 'cersex':
                       ne = await fetchJson(`https://pecundang.herokuapp.com/api/cersex`)
                       nyu = `*JUDUL* : *${ne.result.judul}*\n*CERITA* : ${ne.result.cerita}`
                      Vid.sendMessage(from, nyu, text,{ quoted: freply})
                      break
//================================== RIWEH SIA ETA MAH ==========================================//
case 'tess':
let po = Vid.prepareMessageFromContent(from, {
"listMessage":{
"title": "*LIST MENU*",
"description": `Hallo Kak ${pushname}\nList Menu Dream Bot Disini Kack`,
"buttonText": "LIST  MENU",
                  "listType": "SINGLE_SELECT",
                  "sections": [
                     {
                        "rows": [
                           {
                              "title": 'hallo',
                              "rowId": `/menu`
                           },
                                                      {
                              "title": 'tampilin menu',
                              "description": "*Untuk Menampilkan Menu*",
                              "rowId": `/menu`
                           },
						   {
                              "title": ".runtime",
                              "rowId": `npatodz`
                           }
                        ]
                     }]}}, {}) 
            Vid.relayWAMessage(po, {waitForAck: true})
			
        break
/*        case 'hlo':
        let kontol = Vid.prepareMessageFromContent(from, {
"templateMessage": {
"hydratedFourRowTemplate": {
"hydratedContentText": `hy Kak ${pushname}`,
"hydratedFooterText": "Selamat Datang David",
"hydratedButtons": [
"urlButton": {
"displayText": "Join Group Whatsapp Dream",
"url": "https://chat.whatsapp.com/KdA0jvJmgQ49uIIg7NmGVJ"
},
"index": 1
}
]
}
}
}, {quoted: mek})
Vid.relayWAMessage(res)
break*/
                     case 'debug2':
 res = Vid.prepareMessageFromContent(from,{
"templateMessage": {
"hydratedFourRowTemplate": {
"hydratedContentText": "Hello,\nSelamat Datang Ivanzz",
"hydratedFooterText": "Debug By Ivanzz",
"hydratedButtons": [
{
"urlButton": {
"displayText": "Join Group Whatsapp Drean",
"url": "https://chat.whatsapp.com/KdA0jvJmgQ49uIIg7NmGVJ"
},
"index": 1
}
]
},
"hydratedTemplate": {
"hydratedContentText": "Hello,\nSelamat Datang David",
"hydratedFooterText": "Debugg",
"hydratedButtons": [
{
"urlButton": {
"displayText": "Join Group Whatsapp Botz",
"url": "https://chat.whatsapp.com/G92HvOax81e9pWMhFrmu6a"
},
"index": 1
}
]
}
}
})
Vid.relayWAMessage(res)
break
case 'debug':
res = await Vid.prepareMessageFromContent(from,{
"templateMessage": {
"hydratedFourRowTemplate": {
"hydratedContentText": "Hi MyMans APIs 👋,\n\nThank you for your message.\n\nHow can I help you today?",
"hydratedFooterText": "WATI's Chatbot",
	"hydratedButtons": [
{
	"quickReplyButton": {
"displayText": "Know the Pricing",
"id": "60dd75b0081979507a679f99"
	},
	"index": 0
},
{
	"quickReplyButton": {
"displayText": "Know how WATI works?",
"id": "60dd75b0081979507a679f99"
	},
	"index": 1
},
{
	"quickReplyButton": {
"displayText": "Get Started",
"id": "60dd75b0081979507a679f99"
	},
	"index": 2
}
	]
},
"hydratedTemplate": {
	"hydratedContentText": "Hi Ivanzz",
	"hydratedFooterText": "Selamat Datang",
	"hydratedButtons": [
{
	"quickReplyButton": {
"displayText": "Debug",
"id": "60dd75b0081979507a679f99"
	},
	"index": 0
},
{
	"quickReplyButton": {
"displayText": "By",
"id": "60dd75b0081979507a679f99"
	},
	"index": 1
},
{
	"quickReplyButton": {
"displayText": "Ivanzz",
"id": "60dd75b0081979507a679f99"
	},
	"index": 2
}
	]
}
	}
}, {quoted: mek})
Vid.relayWAMessage(res)
break
case 'sellsc':
Teket = `---[SELL SELF BAILEYS]---

❒ _price_ : 50k  *boleh nego_
❒ _fitur database_
❒ _fitur akinator yg bisa di respon_
❒ _fitur tebak gambar yg bisa di jawab_
❒ _fake verified, fake thumb,fake gif,fake group,fake status_
❒ _sound maker_
❒ _lol human apikey only/murah kok ngab tinggal beli 10k/bulan :v_
❒ _tembus pesan sementara_
❒ _costum nama owner dan no owner + costum apikey
❒ _yo pasti keren :v_
࿄ _minat?_ ࿄
❏ VIA : GOPAY, DANA, OVO, PULSA (UP 5K)
⛶ https://wa.me/6285865829368
`
Vid.sendMessage(from, Teket, text,{ quoted: fsc})
break
//====================== BECE MENU =============//
                           case 'bc':
					if (!mek.key.fromMe) return reply('Anda Sapa')
					if (args.length < 1) return reply('.......')
					anu = await Vid.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : freply
						bc = await Vid.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Vid.sendMessage(_.jid, bc, image, {caption: `*「 ZBROADCAST 」*\n\n${body.slice(4)}`})
						}
						reply('Suksess broadcast')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BROADCAST  」*\n\n${body.slice(4)}`)
						}
						reply('Suksess broadcast')
					}
					break
					                           case 'bc1':
					if (!mek.key.fromMe) return reply('Anda Sapa')
					if (args.length < 1) return reply('.......')
					anu = await Vid.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : freply
						bc = await Vid.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Vid.sendMessage(_.jid, bc, image, {caption: `         \n${body.slice(4)}`})
						}
						reply('Suksess broadcast')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `                    \n${body.slice(4)}`)
						}
						reply('Suksess broadcast')
					}
					break
					
//============================ TICTACTOE MENU ==============================//
              case 'tictactoe': 
                case 'ttt': 
                case 'ttc':
                if (!isGroup) return reply(ind.groupo()) 
				if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('tag orangnya')
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                if (isTicTacToe(from, tictactoe)) return reply(`Masih ada game yg blum selesai`)
                if (args.length < 0) return reply(`Kirim perintah ${prefix}tictactoe @tag`)
                if (mentioned.length !== 0){
						if (mentioned[0] === sender) return reply(`Sad amat main ama diri sendiri`)
                        let h = randomNomor(1000)
                        mentions(monospace(`@${sender.split('@')[0]} Akan Gelud Dengan @${mentioned[0].split('@')[0]} untuk bermain TictacToe	\n\nKirim Y untuk menerima dan T untuk menolak\n\nHadiah : ${h} limit`), [sender, mentioned[0]], false)
                        tictactoe.push({
                            id: from,
                            status: null,
                            hadiah: h,
                            penantang: sender,
                            ditantang: mentioned[0],
                            TicTacToe: ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣']
                        })
                        limitAdd(sender)
                } else {
                    reply(`Kirim perintah ${prefix}tictactoe @tag`)
                }
                break
                case 'delttt':
                case 'delttc':
                if (!isGroup) return reply(ind.groupo())
                if (!isTicTacToe(from, tictactoe)) return reply(`Tidak ada sesi game tictactoe di grup ini`)
                tictactoe.splice(getPosTic(from, tictactoe), 1)
                reply(`Berhasil menghapus sesi tictactoe di grup ini`)
                break
 //============================ STICKER MENU ===============================//
                     case 'stickmeme':
									
									 var ghs = body.slice(11)
									 if (mek.message.extendedTextMessage != undefined || mek.message.extendedTextMessage != null) {
                                          ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : freply
                                        reply(mess.wait)
					owgi = await Vid.downloadAndSaveMediaMessage(ger)
                     var imgbb = require('imgbb-uploader')
					 anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
                                        teks = `${anu.display_url}`
										buffer = await getBuffer(`https://pecundang.herokuapp.com/api/stickermeme?url=${teks}&teks=${ghs}`)
										Vid.sendMessage(from, buffer, sticker)
									 }
									break
									case 'lolhumcek':
                //[❗] case by DappaGanz
                try {
               U = args.join(" ")
                dapuhy = await fetchJson(`https://api.lolhuman.xyz/api/checkapikey?apikey=${U}`)
                i = dapuhy.result
                vikey = `Apikey ${body.slice(11)} valid!\nUsername : ${i.username}\nRequests : ${i.requests}\nToday : ${i.today}\nAccount Type : ${i.account_type}\nExpired : ${i.expired}`
                Vid.sendMessage(from, vikey, text, {quoted: freply})
                } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply(`「 ❗ 」Apikey lolhuman ${body.slice(11)} tidak valid!`)
				}
                break
                  case 'sticker':
                  case 's':
                  case 'stiker':
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage)) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await Vid.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".webp")
                        ini_txt = 'Dream Bot'
                        tod = 'Create By : David'
                        request({
                            url: `https://api.lolhuman.xyz/api/convert/towebpauthor?apikey=${Lolhum}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                                "package": ini_txt,
                                "author": tod
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            Vid.sendMessage(from, ini_buff, sticker, { quoted: mek }).then(() => {
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
                      case 'take':
                  case 'swm':
                  case 'stikerwm':
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage)) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await Vid.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".webp")
                        ini_txt = args.join(" ")
                        tod = args.join(" ")
                        request({
                            url: `https://api.lolhuman.xyz/api/convert/towebpauthor?apikey=${Lolhum}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                                "package": ini_txt,
                                "author": tod
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            Vid.sendMessage(from, ini_buff, sticker, { quoted: mek }).then(() => {
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
                        case 'take':
    case 'colong':
    		if (!isQuotedSticker) return reply('Stiker aja om')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await Vid.downloadAndSaveMediaMessage(encmedia)
            anu = args.join(" ").split("|")
            satu = anu[0] !== '' ? anu[0] : `SELF BOT`
            dua = typeof anu[1] !== 'undefined' ? anu[1] : `REMAKED`
            require('./lib/fetcher.js').createExif(satu, dua)
			require('./lib/fetcher.js').modStick(media, Vid, mek, from)
			break
                    case 'spamtag':
                  mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                   ngen = args.join(" ")
                   shu = `@${mentioned[0].split('@')[0]} ${ngen}`
                   Vid.sendMessage(from, `${shu}`, text,{ quoted: mek})
                                      Vid.sendMessage(from, `${shu}`, text,{ quoted: mek, contextInfo:{"mentionedJid": [mentioned]}})
                                      Vid.sendMessage(from, `${shu}`, text,{ quoted: mek})
                                      Vid.sendMessage(from, `${shu}`, text,{ quoted: mek})
                                      Vid.sendMessage(from, `${shu}`, text,{ quoted: mek})
                                      Vid.sendMessage(from, `${shu}`, text,{ quoted: mek})
                                      Vid.sendMessage(from, `${shu}`, text,{ quoted: mek})
                                      Vid.sendMessage(from, `${shu}`, text,{ quoted: mek})
                                      Vid.sendMessage(from, `${shu}`, text,{ quoted: mek})
                                      Vid.sendMessage(from, `${shu}`, text,{ quoted: mek})
                                      Vid.sendMessage(from, `${shu}`, text,{ quoted: mek})
                                      Vid.sendMessage(from, `${shu}`, text,{ quoted: mek})
                                      Vid.sendMessage(from, `${shu}`, text,{ quoted: mek})
                                      break
                                      case 'loginig':
                                      dimka.getProfile()
                                      dimka.login()
                                      reply(`Nama : ${username}`)
                                      break
						case 'jadibot':
if (!isPremium) return reply('perintah ini khusus member premium')
const conn = new WAConnection()
conn.version = [2, 2119, 6]
const base64ToImage = require('base64-to-image');
conn.on('qr' ,async qr => {
url = await qrcode.toDataURL(qr)
//console.log(url)
const buff = await Buffer.from(url.split('data:image/png;base64,')[1], 'base64')
await fs.writeFileSync('./jadibot.jpg', buff)
let scen = await Vid.sendMessage(from, fs.readFileSync('./jadibot.jpg'), MessageType.image, {quoted : mek,caption: 'Scan QR ini untuk jadi bot sementara!\n1. Klik titik tiga di pojok kanan atas\n2. Ketuk WhatsApp Web\n3. Scan QR ini \n\nQR Expired dalam 20 detik'})
    
setTimeout(() => {
       Vid.deleteMessage(from, scen.key)
  }, 5000);
  })
  
conn.on ('open',() => {
  console.log ('credentials update')
  const authInfo = conn.base64EncodedAuthInfo()
  fs.writeFileSync(`./jadibot/${sender}.json`, JSON.stringify(authInfo  ,null, '\t'))
})
    conn.on('chat-update', async (chat) => {
        require('./jadiindex.js')(conn, chat)
    })
    
await conn.connect().then(async ({user}) => {
reply('Berhasil tersambung dengan WhatsApp - mu.\n*NOTE: Ini cuma numpang*\n' + JSON.stringify(user, null, 2))
})
break
//=================l=========== OWNER MENU ================================//
               case 'daftarpremium':
				case 'daftarpremium':
				if (isPremium) return reply('Anda Sudah Terdaftar Di User Premium')
				const seriTod = randomNomor(20)
				try {
				ppimg = await Vid.getProfilePicture(`${sender.split('@')[0]}@c.us`)
				} catch {
				ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				imglu = 'https://dappa-result.herokuapp.com/bgverify.jpeg' //ubah sesuka kamu, bisa upload di imgbb.com
				veri = sender
				premium.push(sender)
				fs.writeFileSync('./database/public.json', JSON.stringify(premium))
				jadiUser(sender, seriTod)
				const kentod = 
`
*Selamat @${sender.split('@')[0]}@c.us Kamu Telah Terdaftar Di User Premium*`
                let buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/verify?nama=${sender}&member=${premium.length}&seri=${seriTod}&pp=${ppimg}&bg=${imglu}`)
                Vid.sendMessage(from, buff, MessageType.image, {quoted: freply, caption: kentod, contextInfo: {'mentionedJid': [sender]}})
                break
                case 'status':
                const publis = public ?  'PUBLIC MODE': 'SELF MODE'
                a = fs.readFileSync(`./media/cewek.jpeg`)
                c = fs.readFileSync(`./media/kera.jpeg`)
                k = `
*MODE* : ${publis}`
Vid.sendMessage(from, k, text,{ quoted: freply})
break
case 'hacked':
case 'hack':
                 const dlfile = ('./media/cewek.jpeg')
                Vid.updateProfilePicture(from, dlfile)
                Vid.groupUpdateDescription(from, `*Hack Group By : David*`)
                Vid.groupUpdateSubject(from, `Awikawoksokaojsjsjsjsjsmnsmsnsnsnsnsn`)
                break
                 case 'toimg':
                 case 'toimage':
                 var b = fs.readFileSync(`./media/cewek.jpeg`)
                  var encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                  var media = await Vid.downloadMediaMessage(encmedia)
                   if (!isQuotedSticker) return reply('Reply Stikernya su!')
                   Vid.sendMessage(from, media, MessageType.image, { thumbnail: b, caption: 'NEHH...', quoted: freply})
                   break
                     case 'setfake':
					if(!mek.key.fromMe)return reply('Perintah ini Khusus Owner')
					if (!q) return reply('Format This Wrong')
					fake = q
					textImg(`Succes Mengganti Conversation Fake : ${q}`)
					break
                   case 'bc':
					if (!mek.key.fromMe) return reply('Command Ini Khusus Owner')
					if (args.length < 1) return reply('.......')
					anu = await Vid.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : freply
						bc = await Vid.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Vid.sendMessage(_.jid, bc, image, {caption: `*「 BROADCAST 」*\n\n${body.slice(4)}`})
						}
						reply('Suksess broadcast')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BROADCAST 」*\n\n${body.slice(4)}`)
						}
						reply('Suksess broadcast')
					}
					break
//============================ KONTAK OWNER ===============================//
                case 'admin':
                case 'owner':
                case 'creator':
                case 'developer':
                Vid.sendMessage(from, {displayname: 'David Xyz', vcard: vcard16}, MessageType.contact, {quoted: freply})
                Vid.sendMessage(from, '*Tuh No Boss Saya Jangan Di Spam Yak*',MessageType.text, {quoted: mek})
                break
//============================ BUG MENU ===================================//
                    case 'bugkontak':
		            if(!mek.key.fromMe)return reply(mess.only.owner)
                    if(!q) return reply(`Example : ${prefix}bugkontak nama|nomor`)
                    nama = q.split('|')[0]
                    nomor = q.split('|')[1]
					const vcardd = 'BEGIN:VCARD\n'
                                                    + 'VERSION:3.0\n'
                                                    + `FN:${nama}\n`
                                                    + `ORG:${nama};\n`
                                                    + `TEL;type=CELL;type=VOICE;waid=${nomor}:${nomor}\n`
                                                    + 'END:VCARD'
				  Vid.sendMessage(from, {displayname: mem, vcard: vcardd}, MessageType.contact, { quoted:{
				  key: {
				   fromMe: false,
				   participant: `0@s.whatsapp.net`, // Fake sender Jid
				   remoteJid: "status@broadcast"
				  },
				  message: {
				  orderMessage: {
			      itemCount: 999999999, // Bug
			      status: 1,
		          surface: 1,
			      message: '99999999999',
			      orderTitle: '99999999999', // Idk what this does
			      sellerJid: `0@s.whatsapp.net` // Seller
				   }
				   }
				   }
				   })
					break
					case 'getexif':
					const nye = require('node-webpmux')
					const itil = require('util')
			         let img = nye.image
					var encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                  var media = await Vid.downloadMediaMessage(encmedia)
                   if (!isQuotedSticker) return reply('Reply Stikernya su!')
                    await itil.format(JSON.parse(img.exif.slice(22).toString()))
                    break
		        case 'attp':
                //[❗] case by DappaGanz
                try {
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh`)
                dpuhy = args.join(' ')
                reply(mess.wait)
                dapuhy = await getBuffer(`https://api.xteam.xyz/attp?file&text=${dpuhy}`)
                Vid.sendMessage(from, dapuhy, sticker, {quoted: freply})
                } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply(mess.error)
				}
                break
                case 'ttp':
                david = args.join(" ")
                gugu = await getBuffer(`https://pecundang.herokuapp.com/api/texttopng?teks=${david}`)
                Vid.sendMessage(from, gugu, sticker, { quoted: fgclink})
                break
                case 'ttp1':
               nye = args.join(" ")
               nyu = await getBuffer(`https://pecundang.herokuapp.com/api/texttopng2?teks=${nye}`)
               Vid.sendMessage(from, nyu, sticker,{ quoted: mek})
               break
               case 'ttp2':
               nyi = args.join(" ")
               nyk = await getBuffer(`https://pecundang.herokuapp.com/api/texttopng3?teks=${nyi}`)
               Vid.sendMessage(from, nyk, sticker,{ quoted: freply})
               break
               case 'ttp3':
               ab = args.join(" ")
               ac = await getBuffer(`https://pecundang.herokuapp.com/api/texttopng4?teks=${ab}`)
               break
//============================ ANIME MENU =========================//
                                              case 'randomhentai':
                                        gatauda = body.slice(6)
                                        reply(mess.wait)
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=BotWeA`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        Vid.sendMessage(from, buffer, image, {quoted: mek})
                                        break
//============================ ABOUTE ME ========================//
                case 'sourcecode':
                case 'sc':
                reply('_*Bot ini Menggunakan Sc : www.xnxx.com*_')
                break
//============================ GROUP MENU ================================//
                case 'antilink':
			    if (!mek.key.fromMe) return reply('*Perintah ini Khusus Owner & Admin Group*')
		        if (!isGroup) return reply('Hanya Bisa Digunakan Di grup')					
				if (args.length < 1) return reply('[❗] Tambahkan parameter 1 untuk mengaktifkan dan 0 untuk menonaktifkan')
				if (Number(args[0]) === 1) {
				if (isAntiLink) return reply(`[❗] Fitur ${command} sudah aktif`)
				antilink.push(from)
				fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
				reply(`[❗] Berhasil mengaktifkan fitur ${command} pada group ini`)
				Vid.sendMessage(from,`PERINGATAN!! jika bukan admin kirim link wajib menggunakan #izinadmin`, text, {quoted: fgclink})
				} else if (Number(args[0]) === 0) {
				if (!isAntiLink) return reply(`[❗] Fitur ${command} sudah aktif`)
				antilink.splice(from, 1)
				fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
				reply(`[❗] Berhasil menonaktifkan fitur ${command} pada group ini`)
				} else {
				reply('[❗] Tambahkan parameter 1 untuk mengaktifkan dan 0 untuk menonaktifkan')
				}
				break
				case 'welcome':
				if (args.length < 1) return reply('[❗] Tambahkan parameter 1 untuk mengaktifkan dan 0 untuk menonaktifkan')
				if (Number(args[0]) === 1) {
				if (isWelkom) return reply(`[❗] Fitur ${command} sudah aktif`)
				welkom.push(from)
				fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
				reply(`[❗] Fitur ${command} sudah aktif`)
				} else if (Number(args[0]) === 0) {
				welkom.splice(from, 1)
				fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
				reply(`[❗] Berhasil menonaktifkan fitur ${command} pada group ini`)
				} else {
				reply('[❗] Tambahkan parameter 1 untuk mengaktifkan dan 0 untuk menonaktifkan')
				}
				break
				case 'getbio':
                var yy = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                var p = await Vid.getStatus(`${yy}`, MessageType.text)
                reply(p.status)
                if (p.status == 401) {
                reply("Status Profile Not Found")
                }
                break
                case 'upswstik':
				  if (!mek.key.fromMe) return reply('*Ente owner?')
					Vid.updatePresence(from, Presence.composing)
					if (isQuotedSticker) {
						const swsw = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						cihcih = await Vid.downloadMediaMessage(swsw)
						Vid.sendMessage('status@broadcast', cihcih, sticker, { caption: `${q}` })
					}
					bur = `Sukses Upload Story Video dengan Caption: ${q}`
					Vid.sendMessage(from, bur, text, { quoted: mek })
					break
                 case 'antidelete':
				if (!isGroup) return reply('Only Grup')
				const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
				const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
				const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
				const isRevoke = dataRevoke.includes(from)
				const isCtRevoke = dataCtRevoke.data
				const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
				const argz = body.split(' ')
				if (argz.length === 1) return Vid.sendMessage(from, `Penggunaan fitur antidelete :\n\n${prefix}antidelete [aktif/mati] (Untuk grup)\n${prefix}antidelete [ctaktif/ctmati] (untuk semua kontak)\n${prefix}antidelete banct 628558xxxxxxx (banlist kontak)`, MessageType.text, {quoted: fgclink})
				if (argz[1] == 'aktif') {
					if (isGroup) {
						if (isRevoke) return Vid.sendMessage(from, `Antidelete telah diaktifkan di grup ini sebelumnya!`, MessageType.text, {quoted: fgclink})
						dataRevoke.push(from)
						fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						Vid.sendMessage(from, `Succes Enable Antidelete Grup!`, MessageType.text, {quoted: fgclink})
					} else if (!isGroup) {
						Vid.sendMessage(from, `Untuk kontak penggunaan ${prefix}antidelete ctaktif`, MessageType.text, {quoted: fgclink})
					}
				} else if (argz[1] == 'ctaktif') {
					if (!isGroup) {
						if (isCtRevoke) return Vid.sendMessage(from, `Antidelete telah diaktifkan di semua kontak sebelumnya!`, MessageType.text, {quoted: fgclink})
						dataCtRevoke.data = true
						fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						Vid.sendMessage(from, `Antidelete diaktifkan disemua kontak!`, MessageType.text, {quoted: fgclink})
					} else if (isGroup) {
						Vid.sendMessage(from, `Untuk grup penggunaan ${prefix}antidelete aktif`, MessageType.text, {quoted: fgclink})
					}
				} else if (argz[1] == 'banct') {
					if (isBanCtRevoke) return Vid.sendMessage(from, `kontak ini telah ada di database banlist!`, MessageType.text, {quoted: fgclink})
					if (argz.length === 2 || argz[2].startsWith('0')) return Vid.sendMessage(from, `Masukan nomer diawali dengan 62! contoh 62859289xxxxx`, MessageType.text, {quoted: fgclink})
					dataBanCtRevoke.push(argz[2] + '@s.whatsapp.net')
					fs.writeFileSync('./src/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke, null, 2))
					Vid.sendMessage(from, `Kontak ${argz[2]} telah dimasukan ke banlist antidelete secara permanen!`, MessageType.text, {quoted: fgclink})
				} else if (argz[1] == 'mati') {
					if (isGroup) {
						const index = dataRevoke.indexOf(from)
						dataRevoke.splice(index, 1)
						fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						Vid.sendMessage(from, `Succes disable Antidelete Grup!`, MessageType.text, {quoted: fgclink})
					} else if (!isGroup) {
						Vid.sendMessage(from, `Untuk kontak penggunaan ${prefix}antidelete ctmati`, MessageType.text, {quoted: fgclink})
					}
				} else if (argz[1] == 'ctmati') {
					if (!isGroup) {
						dataCtRevoke.data = false
						fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						Vid.sendMessage(from, `Antidelete dimatikan disemua kontak!`, MessageType.text, {quoted: fgclink})
					} else if (isGroup) {
						Vid.sendMessage(from, `Untuk grup penggunaan ${prefix}antidelete mati`, MessageType.text, {quoted: fgclink})
					}
				}
				break
				case 'attp':
				anakkon = args.join(" ")
				ni = await getBuffer(`https://pecundang.herokuapp.com/api/attp?teks=${anakkon}`)
				Vid.sendMessage(from, ni, sticker,{ quoted : freply})
				break
				case 'getpic':
				if (mek.message.extendedTextMessage != undefined){
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					try {
						pic = await Vid.getProfilePicture(mentioned[0])
					} catch {
						pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
					}
					thumb = await getBuffer(pic)
					Vid.sendMessage(from, thumb,image,{quoted : ftroli})
				   }
				   break
				case 'mention':
				const yer = args.join(" ")
				 Vid.sendMessage(from, `@${yer.split('@')[0]} Nih Bg`, text, {quoted: mek, contextInfo: {'mentionedJid': [yer]}})
                  break
                  case '>': 
case 'exec':
if (!mek.key.fromMe) return reply('Anda Sapa')
const cmyd = body.slice(6)
var itsme = `0@s.whatsapp.net`
var split = `*EXECUTOR SELF BOT*`
const term = {
contextInfo: {
participant: itsme,
quotedMessage: {
extendedTextMessage: {
text: split,
}
}
}
}
exec(cmyd, (err, stdout) => {
if (err) return Vid.sendMessage(from, ` ${err}`, text, { quoted: mek })
if (stdout) {
Vid.sendMessage(from, stdout, text, term)
}
})
break
				   case 'hidetag':
				    if (!isPremium) return reply("_Perintah ini Khusus Member Premium_")
					if (!isGroup) return reply(mess.only.group)
					var value = body.slice(9)
					var group = await Vid.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: freply
					}
				    Vid.sendMessage(from, options, text,{quoted : freply})
					break
					case 'tovideo':
				case 'tovid':
					reply('Proses Boskuh..')
					 if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
                                        const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        const media = await Vid.downloadAndSaveMediaMessage(encmedia)
                                        const upload = await uploadimg(media, Date.now() + '.webp')
                                        const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
                                        const buff = await getBuffer(rume.data.result)
						Vid.sendMessage(from, buff, video, { quoted: freply, caption: 'Bismilah Jadi Bokep' })
					}
					break
//================================ JADIBOT ===============================// 
			case 'jadibot':
			let auth = false
			Vid.on('qr', async qr => {
      let scan = await Vid.sendFile(m.chat, await qrcode.toDataURL(qr, { scale: 8 }), 'Scan QR ini untuk jadi bot sementara\n\n1. Klik titik tiga di pojok kanan atas\n2. Ketuk WhatsApp Web\n3. Scan QR ini \nQR Expired dalam 20 detik', m)
      setTimeout(() => {
        Vid.deleteMessage(m.chat, scan.key)
      }, 30000)
    })
      Vid.on('open', (sender) => {
      Vid.reply(m.chat, 'Berhasil tersambung dengan WhatsApp - mu.\n*NOTE: Ini cuma numpang*\n' + JSON.stringify(user, null, 2), m)
    })
      break
     case 'listbot':
    su = `
*LIST BOT*
BOT 1 : 
@${vanz.split('@')[0]}

BOT 2
@${gw.split('@')[0]}

BOT 3 : 
undefined
`
Vid.sendMessage(from, su, text,{ quoted: freply, contextInfo: {"mentionedJid": [sender, gw, aqulz, akira, dika, vanz, mark]}})
break
case 'simih':
                if (!mek.key.fromMe) return reply('*Perintah ini Khusus Owner*')
				if (args.length < 1) return reply('[❗] Tambahkan parameter 1 untuk mengaktifkan dan 0 untuk menonaktifkan')
				if (Number(args[0]) === 1) {
				if (isSimi) return reply(`[❗] Fitur ${command} sudah aktif`)
				samih.push(from)
				fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
				reply(`[❗] Fitur ${command} sudah aktif`)
				} else if (Number(args[0]) === 0) {
				samih.splice(from, 1)
				fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
				reply(`[❗] Berhasil menonaktifkan fitur ${command} pada group ini`)
				} else {
				reply('[❗] Tambahkan parameter 1 untuk mengaktifkan dan 0 untuk menonaktifkan')
				}
				break
               case 'stopjadibot':
			    reply('Bye Bye ...')
			    break
				default:
				if (resbutton == 'mek') {
                reply1('Ngontol')
                }
                if (resbutton == 'tampilin menu') {
                    const Mark = '0@s.whatsapp.net'
                         const gambar = fs.readFileSync('./media/kera.jpeg')
                         const iduladha = await fetchJson('https://pecundang.herokuapp.com/api/hitungmundur?tanggal=20&bulan=9&tahun=2021')
                         const ulangthn = await fetchJson('https://pecundang.herokuapp.com/api/hitungmundur?tanggal=14&bulan=9&tahun=2021')
                         const tahunbru = await fetchJson('https://pecundang.herokuapp.com/api/hitungmundur?tanggal=1&bulan=1&tahun=2022')
           const statuss = public ? 'PUBLIC': 'SELF'
           uptime = process.uptime()
           const timestampi = speed();
                    var groups = Vid.chats.array.filter(v => v.jid.endsWith('g.us'))
					  var private = Vid.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
           const latensip = speed() - timestampi
shu = `*Hallo Kack @${sender.split('@')[0]}*


◪ *MY  INFO*
🌴 *Owner : @${gw.split('@')[0]}*
🌴 *Wa Version : 2.21.12.21*
🌴 *Server : Baileys*
🌴 *Browser : Chrome*
🌴 *Total Chat : ${totalchat.length}*
🌴 *Total Group : ${groups.length}*
🌴 *Private Chat : ${private.length}*

✽─────────────────── ✽

*Your Progress* :
*Tag* : @${sender.split('@')[0]}
*Status* : ${mek.key.fromMe ? 'Premium' : 'Gratisan'}

*About Me* : 
*Nama : Dream Bot*
*Owner : @${gw.split('@')[0]}*
*Status* : *Premium*
*Api* : wa.me/6285865829368

✽─────────────────── ✽

*RUNTIME & Speed*
*Runtime :* *${kyun(uptime)}*
*Speed : ${latensip.toFixed(4)} Second*

*TOTAL USER*
_${user.lenght}_

*TOTAL HIT TODAY*
${hit_today.lenght}

✽─────────────────── ✽

*❒━* *「  BOT START  」*
*├❒* ${f}${prefix}menu${f}
*├❒* ${f}${prefix}help${f}
*├❒* ${f}${prefix}info${f}
*├❒* ${f}${prefix}owner${f}
*├❒* ${f}${prefix}sc${f}
*│*
*├❒━* *「  TEXTPROME  」*
*├❒* ${l++}.  ${f}${prefix}blackpink${f}
*├❒* ${l++}.  ${f}${prefix}neon${f}
*├❒* ${l++}.  ${f}${prefix}greenneon${f}
*├❒* ${l++}.  ${f}${prefix}glow${f}
*├❒* ${l++}.  ${f}${prefix}summer${f}
*├❒* ${l++}.  ${f}${prefix}neonlight${f}
*├❒* ${l++}.  ${f}${prefix}writing${f}
*├❒* ${l++}.  ${f}${prefix}metal${f}
*├❒* ${l++}.  ${f}${prefix}steel3d${f}
*├❒* ${l++}.  ${f}${prefix}wallgravity${f}
*├❒* ${l++}.  ${f}${prefix}lionlogo${f}
*├❒* ${l++}.  ${f}${prefix}marvelstudio${f}
*├❒* ${l++}.  ${f}${prefix}space${f}
*├❒* ${l++}.  ${f}${prefix}pornhub${f}
*├❒* ${l++}.  ${f}${prefix}ninjalogo${f}
*├❒* ${l++}.  ${f}${prefix}avenger${f}
*│*
*├❒━* *「  CONVERTER  」*
*├❒* ${l++}.  ${f}${prefix}tiktoknowm${f}
*├❒* ${l++}.  ${f}${prefix}igvideo${f}
*├❒* ${l++}.  ${f}${prefix}igphoto${f}
*├❒* ${l++}.  ${f}${prefix}play${f}
*├❒* ${l++}.  ${f}${prefix}play2${f}
*├❒* ${l++}.  ${f}${prefix}ytmp3${f}
*├❒* ${l++}.  ${f}${prefix}ytmp4${f}
*│*
*├❒━* *「  CONVERTER  」*
*├❒* ${l++}.  ${f}${prefix}sticker${f}
*├❒* ${l++}.  ${f}${prefix}stickergif${f}
*├❒* ${l++}.  ${f}${prefix}s${f}
*├❒* ${l++}.  ${f}${prefix}toimg${f}
*├❒* ${l++}.  ${f}${prefix}toimage${f}
*├❒* ${l++}.  ${f}${prefix}stickerwm${f}
*├❒* ${l++}.  ${f}${prefix}swm${f}
*├❒* ${l++}.  ${f}${prefix}ttp [text]${f}
*├❒* ${l++}.  ${f}${prefix}attp [text]${f}
*│*
*├❒━* *「 PHOTOOXY  」*
*├❒* ${l++}.  ${f}${prefix}love${f}
*├❒* ${l++}.  ${f}${prefix}woodheart${f}
*├❒* ${l++}.  ${f}${prefix}cup1${f}
*├❒* ${l++}.  ${f}${prefix}coffe${f}
*├❒* ${l++}.  ${f}${prefix}lovemessage${f}
*├❒* ${l++}.  ${f}${prefix}smoke${f}
*├❒* ${l++}.  ${f}${prefix}woodenboard${f}
*├❒* ${l++}.  ${f}${prefix}shadow${f}
*├❒* ${l++}.  ${f}${prefix}wallgravity${f}
*├❒* ${l++}.  ${f}${prefix}steel3d${f}
*├❒* ${l++}.  ${f}${prefix}romance${f}
*├❒* ${l++}.  ${f}${prefix}burnpaper${f}
*├❒* ${l++}.  ${f}${prefix}summer3d${f}
*├❒* ${l++}.  ${f}${prefix}cup${f}
*├❒* ${l++}.  ${f}${prefix}undergrass${f}
*│*
*├❒━* *「  RANDOME ASUPAN 」*
*├❒* ${l++}.  ${f}${prefix}lewdk${f}
*├❒* ${l++}.  ${f}${prefix}tits${f}
*├❒* ${l++}.  ${f}${prefix}solo${f}
*├❒* ${l++}.  ${f}${prefix}lewd${f}
*├❒* ${l++}.  ${f}${prefix}yuri${f}
*├❒* ${l++}.  ${f}${prefix}holoero${f}
*├❒* ${l++}.  ${f}${prefix}blowjob${f}
*├❒* ${l++}.  ${f}${prefix}eroyuri${f}
*├❒* ${l++}.  ${f}${prefix}femdom${f}
*├❒* ${l++}.  ${f}${prefix}hentai${f}
*├❒* ${l++}.  ${f}${prefix}cum_jpg${f}
*├❒* ${l++}.  ${f}${prefix}erofeet${f}
*├❒* ${l++}.  ${f}${prefix}ero${f}
*├❒* ${l++}.  ${f}${prefix}trap${f}
*├❒* ${l++}.  ${f}${prefix}eron${f}
*├❒* ${l++}.  ${f}${prefix}keta${f}
*├❒* ${l++}.  ${f}${prefix}erok${f}
*├❒* ${l++}.  ${f}${prefix}pussy_jpg${f}
*├❒* ${l++}.  ${f}${prefix}futanari${f}
*├❒* ${l++}.  ${f}${prefix}hololewd${f}
*├❒* ${l++}.  ${f}${prefix}lewdkemo${f}
*├❒* ${l++}.  ${f}${prefix}kemonomimi${f}
*├❒* ${l++}.  ${f}${prefix}nsfw_avatar${f}
*├❒* ${l++}.  ${f}${prefix}pussy_jpg${f}
*│*
*├❒━* *「 SELF / PUBLIC  」*
*├❒* ${l++}.  ${f}${prefix}self${f}
*├❒* ${l++}.  ${f}${prefix}public${f}
*│*
*├❒━* *「 GROUP COMAND 」*
*├❒* ${l++}.  ${f}${prefix}antilink 1/0${f}
*├❒* ${l++}.  ${f}${prefix}antidelete aktif/mati${f}
*├❒* ${l++}.  ${f}${prefix}delete${f}
*├❒* ${l++}.  ${f}${prefix}promote${f}
*├❒* ${l++}.  ${f}${prefix}getpic${f}
*├❒* ${l++}.  ${f}${prefix}getbio${f}
*├❒* ${l++}.  ${f}${prefix}infoall${f}
*├❒* ${l++}.  ${f}${prefix}hidetag${f}
*│*
*├❒━* *「 TICTACTOE MENU  」*
*├❒* ${l++}.  ${f}${prefix}tictactoe @user${f}
*├❒* ${l++}.  ${f}${prefix}ttc @user${f}
*├❒* ${l++}.  ${f}${prefix}delttc${f}
*├❒* ${l++}.  ${f}${prefix}delttt${f}
*│*
*├❒━* *「 ANIME COMMAND  」*
*├❒* ${l++}.  ${f}${prefix}randomwaifu${f}
*├❒* ${l++}.  ${f}${prefix}randomwaifu1${f}
*├❒* ${l++}.  ${f}${prefix}neko1${f}
*├❒* ${l++}.  ${f}${prefix}kusonime${f}
*├❒* ${l++}.  ${f}${prefix}loli${f}
*├❒* ${l++}.  ${f}${prefix}randomhusbu${f}
*├❒* ${l++}.  ${f}${prefix}giyu${f}
*├❒* ${l++}.  ${f}${prefix}nezuko${f}
*├❒* ${l++}.  ${f}${prefix}ichika${f}
*├❒* ${l++}.  ${f}${prefix}nino${f}
*├❒* ${l++}.  ${f}${prefix}itsuki${f}
*├❒* ${l++}.  ${f}${prefix}miku${f}
*├❒* ${l++}.  ${f}${prefix}yotsuba${f}
*├❒* ${l++}.  ${f}${prefix}sakonji${f}
*├❒* ${l++}.  ${f}${prefix}zenitsu${f}
*├❒* ${l++}.  ${f}${prefix}thanjiro${f}
*│*
*├❒━* *「  RANDOME ASUPAN 」*
*├❒* ${l++}.  ${f}${prefix}asupan${f}
*├❒* ${l++}.  ${f}${prefix}asupansantuy${f}
*├❒* ${l++}.  ${f}${prefix}asupanbocil${f}
*├❒* ${l++}.  ${f}${prefix}asupanukhty${f}
*├❒* ${l++}.  ${f}${prefix}asupanrikagusriani${f}
*├❒* ${l++}.  ${f}${prefix}asupanghea${f}
*│*
*├❒━* *「  NO CATEGORY  」*
*├❒* ${l++}.  ${f}${prefix}renungan${f}
*├❒* ${l++}.  ${f}${prefix}samehadaku${f}
*├❒* ${l++}.  ${f}${prefix}infonomer${f}
*├❒* ${l++}.  ${f}${prefix}jadwaltv${f}
*├❒* ${l++}.  ${f}${prefix}tvjadwal${f}
*├❒* ${l++}.  ${f}${prefix}fake${f}
*├❒* ${l++}.  ${f}${prefix}pink 「Link」${f}
*│*
*├❒━* *「 MAKER MENU  」*
*├❒* ${l++}.  ${f}${prefix}neon1${f}
*├❒* ${l++}.  ${f}${prefix}text3d${f}
*├❒* ${l++}.  ${f}${prefix}galaxy${f}
*├❒* ${l++}.  ${f}${prefix}gaming${f}
*├❒* ${l++}.  ${f}${prefix}colors${f}
*├❒* ${l++}.  ${f}${prefix}qrcode${f}
*│*
*├❒━* *「 STALKER MENU  」*
*├❒* ${l++}.  ${f}${prefix}stalkig${f}
*├❒* ${l++}.  ${f}${prefix}igstalk${f}
*├❒* ${l++}.  ${f}${prefix}githubstalk${f}
*├❒* ${l++}.  ${f}${prefix}ghstalk${f}
*│*
*├❒━* *「 RANDOM MENU  」*
*├❒* ${l++}.  ${f}${prefix}islamic${f} 
*├❒* ${l++}.  ${f}${prefix}cyberspace${f} 
*├❒* ${l++}.  ${f}${prefix}teknologi${f} 
*├❒* ${l++}.  ${f}${prefix}bts${f} 
*├❒* ${l++}.  ${f}${prefix}exo${f} 
*├❒* ${l++}.  ${f}${prefix}game${f} 
*├❒* ${l++}.  ${f}${prefix}randompegunungan${f} 
*│*
*├❒━* *「 ATTP / TTP 」*
*├❒* ${l++}.  ${f}${prefix}attp${f}
*├❒* ${l++}.  ${f}${prefix}ttp${f}
*├❒* ${l++}.  ${f}${prefix}ttp1${f}
*├❒* ${l++}.  ${f}${prefix}ttp2${f}
*├❒* ${l++}.  ${f}${prefix}ttp3${f}
*│*
*├❒━* *「 SESSION COMMAND 」*
*│❒* ${l++}.  ${f}${prefix}jadibot${f}
*│❒* ${l++}.  ${f}${prefix}stopjadibot${f}
*│❒* ${l++}.  ${f}${prefix}listbot${f}
*╰─────────────┈ ⳹*

        ║▌│█║▌│ █║▌│█│║▌║
        ║▌│█║▌│ █║▌│█│║▌║
  
*Thanks To : @${Mark.split('@')[0]}*`
Vid.sendMessage(from, shu, text, { quoted: freply, contextInfo: {"mentionedJid": [Mark, gw, dika, aqulz, akira, sender]}})
}
				if (resbutton == 'speed') {
            const timestampi = speed();
            const latensip = speed() - timestampi
            reply1(`*Speed : ${latensip.toFixed(4)} Second*`)
                }
				if (resbutton == 'owner') {
               Vid.sendMessage(from, {displayname: 'David', vcard: vcard16}, MessageType.contact, {quoted: mek})
                }
                if (resbutton == 'hallo') {
                reply1(`Hallo Juga ${pushname}`)
                }
                if (resbutton == '.runtime') {
                 uptime = process.uptime()
                reply1(`*${kyun(uptime)}*`)
                }
				    if (budy.includes("ngontol")){
                    const SS1 = fs.readFileSync('sticker/1.webp')
                    Vid.sendMessage(from, SS1, sticker, {quoted: freply})
                    }
                         if (budy.includes("mastah")){
                    const SS2 = fs.readFileSync('sticker/2.webp')
                    Vid.sendMessage(from, SS2, sticker, {quoted: freply})
                    }
                        if (budy.includes("sayang")){
                    const SS3 = fs.readFileSync('sticker/3.webp')
                    Vid.sendMessage(from, SS3, sticker, {quoted: freply})
                    }
                        if (budy.includes("siapa")){
                    const SS4 = fs.readFileSync('sticker/4.webp')
                    Vid.sendMessage(from, SS4, sticker, {quoted: freply})
                    }
                        if (budy.includes("wkwk")){
                    const SS5 = fs.readFileSync('sticker/6.webp')
                    Vid.sendMessage(from, SS5, sticker, {quoted: freply})
                    }
				if (budy.includes("asalamualikum")){
                huwa = `Waalaikum Salam Kak @${sender.split('@')[0]}`
                Vid.sendMessage(from, huwa, text,{ quoted: freply, contextInfo: {"mentionedJid": [sender]}})
                    }
				if (budy.startsWith('¤')){
                     try {
         	         let evaled = await eval(budy.slice(2))
         	         if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
          	         await reply(evaled)
          		     //hisoka.sendMessage(from, JSON.stringify(eval(body.slice(6))). text)
       	             } catch (err) {
        	         m = String(err)
          	         await reply(m)
  	   	             } 
                    }
					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						return //console.log(color('[WARN]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
