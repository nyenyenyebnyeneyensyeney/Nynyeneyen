//RECODE BY MHANKBARBAR
//SELF BOT BY Vid
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
const speed = require('performance-now')
const request = require('request')
const qrcodes = require("qrcode")
const imgbb = require('imgbb-uploader')
const toMs = require('ms')
const ms = require('parse-ms')
const moment = require('moment-timezone')
const fetch = require('node-fetch')
const phoneNum = require('awesome-phonenumber')
const ffmpeg = require('fluent-ffmpeg')
const imageToBase64 = require('image-to-base64')
const lolis = require('lolis.life')
const loli = new lolis()
const Exif = require('./lib/exif');
const exif = new Exif();

//********** FUNCTIONS **********//
const { removeBackgroundFromImageFile } = require('remove.bg')
const { color, bgcolor } = require('./lib/color')
const prem = JSON.parse(fs.readFileSync('./src/prem.json'))
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { exec } = require('child_process')
const { uploadimg } = require('./lib/uploadimg')

//********** DATABASE **********//
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
const premium = JSON.parse(fs.readFileSync('./database/public.json'))
const setting = JSON.parse(fs.readFileSync('./src/settings.json'))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const tictac = require('./lib/tictac')
const { isTicTacToe, getPosTic } = require('./lib/tictactoe')

const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
//*********** CUSTOMABLE ***********//
prefix = '' //Biarin Aja Nanti Emror
f = '*'
blocked = []
s = '❒'
a = '```'
bung = '🌹'
iniprem = '⚓'
gra = '◽'
lim = '⛱️'
gru = '◾'
fake = 'freply'
owner = '6285865829368'
fakeimage = fs.readFileSync(`./image/cewek.jpeg`)
numbernye = '0' 
const mark = '0@s.whastapp.net'
const dika = '6288292024190@s.whatsapp.net'
const vanz = '62895423946200@s.whatsapp.net'
const aqulz = '6285158549166@s.whatsapp.net'
const akira = '6282287521931@s.whatsapp.net'
const gw = '6287880120452@s.whatsapp.net'
namabot = '*YTEAM BOT*' //Ganti Nama Bot Kalian
namaowner = 'David' //Ganti Seterah Kalian
public = true
let tictactoe = []

//*********** VCARD  ***********//
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
const Lolkey = 'OpenVcs500k'

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
		start('2', 'Bentar Kak')
	})
	Vid.on('open', () => {
		success('2', 'Tersambung')
	})
	await Vid.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./mek.json', JSON.stringify(Vid.base64EncodedAuthInfo(), null, '\t'))
Vid.on('group-update', async(chat) => {
    console.log(chat)
    var from = chat.jid
    var group = await Vid.groupMetadata(from)
    if(!chat.desc == ''){
    var tag = chat.descOwner.split('@')[0] + '@s.whatsapp.net'
    var teks = `「 *Group Description Change* 」\n\nDeskripsi Group telah diubah oleh\n❒ ${s}Admin : @${chat.descOwner.split('@')[0]}${s}\n❒ ${s}Pada : ${tanggal()}${s}\n❒ ${s}Deskripsi Baru${s} :\n ${chat.desc}`
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
*WELCOME  @${num.split('@')[0]}* 
━━━━━━━━━━━━━━━━━━━━━━━
Welcome To Group *${mdata.subject}*
Semoga Betah Ye 

「◪━━━━━━ *INTRO* ━━━━━━━
┃
┃▢ Nama : 
┃▢ Gender :
┃▢ Asal : 
┃▢ Umur : 
┃▢ Jomblo : ?
┃  _*Say Hy To Members Group*_
┃  _Dont To Spam Me Or I'am Banned_
┗━━━━━━━━━━━━━━━━━━━━━
`
				let buff = await getBuffer(ppimg)
				Vid.sendMessage(mdata.id, teks, MessageType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, remoteJid: `0@s.whatsapp.net` }, message: { groupInviteMessage: { groupJid: "62816566217-1617422360@g.us", inviteCode: "EiznDZqIWu40QPVO0Q9MVn", groupName: "                          ", caption: "*YTEAM BOTZ*\nCreate By : *DAVID*", 'jpegThumbnail': fs.readFileSync('./media/cewek.jpeg')} } }})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await Vid.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `*「 GROUP LEAVE DETECT 」*

◪ User : *@${num.split('@')[0]}*
◪ Leave From : *${mdata.subject}*
Good By Beban Gc`
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
			teks = `*「 PROMOTE GROUP DETECT 」*

◪ User : *@${num.split('@')[0]}*
◪ Promote Group : *${mdata.subject}*
Ekhh @${num.split('@')[0]} Rusuhin Aee Nih Gc Mumpung Lu Admin
Awokawokaowk`
			Vid.sendMessage(mdata.id, buff, MessageType.image, {caption : teks, contextInfo: {mentionedJid: [num]}, quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `Kntl`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": buff, "mimetype": "application/octet-stream", "title": `PROMOTE`, "fileLength": "36", "pageCount": 0, "fileName": `_Welcome_` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		} else if (anu.action == 'demote') {
			num = anu.participants[0]
			const mdata = await Vid.groupMetadata(anu.jid)
			try {
					ppimg = await Vid.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
			let buff = await getBuffer(ppimg)
			teks = `*「 DEMOTE GROUP DETECT 」*

◪ User : *@${num.split('@')[0]}*
◪ Demote Group  : *${mdata.subject}*
`
			Vid.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {mentionedJid: [num]}, quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `Ktl`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": buff, "mimetype": "application/octet-stream", "title": `DEMOTE`, "fileLength": "36", "pageCount": 0, "fileName": `_Welcome_` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
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
	Vid.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
	
	Vid.on('chat-update', async (mek) => {
		try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
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
			const isOwner = ownerNumber.includes(sender)
			const q = args.join(' ')
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				Vid.sendMessage(from, teks, text, {quoted:freply})
			}
			 const textImg = (teks) => {
            return Vif.sendMessage(from, teks, text, {quoted: freply, thumbnail: fs.readFileSync(`image/Om.jpeg`)})
           }
			const sendMess = (hehe, teks) => {
				Vid.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? Vid.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : Vid.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			    function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
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
const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `*YTEAM BOTZ*\nCREATE BY : *DAVID*`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync(`media/Vid.jpeg`)} } }
const ftroli = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `*YTEAM BOTZ*\nCREATE BY : *DAVID*`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync(`media/Vid.jpeg`)} } }

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
//============== ANTILINK =================//
        if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
        if (chats.match(/(https:\/\/chat.whatsapp.com)/gi)) {
        reply(`*「 GROUP LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`)
        Vid.groupRemove(from, [sender])
          }
        }
        
if (body.startsWith('>')) {
if (!mek.key.fromMe) return reply('Lu Siapa?')
try {
var konsol = args.join(' ')
function Res(sul) {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sat)
}
return reply(bang)
}
reply(util.format(eval(`(async () => { ${konsol} })()`)))
} catch(e) {
emror = String(e)
reply(`${emror}`)
}
}

//============================ EVAL =========1==========//

//============== FUNCTION TICTACTOE ============= //
            if (isTicTacToe(from, tictactoe)) tictac(budy, prefix, tictactoe, from, sender, reply, mentions)        

			if (!isGroup && !isCmd) console.log(color(time, "white"), color("[ PRIVATE ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"))
            if (isGroup && !isCmd) console.log(color(time, "white"), color("[  GROUP  ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"), "in", color(groupName, "yellow"))
            if (!isGroup && isCmd) console.log(color(time, "white"), color("[ COMMAND ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"))
            if (isGroup && isCmd) console.log(color(time, "white"), color("[ COMMAND ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"), "in", color(groupName, "yellow"))
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
				
case 'JuP7RUFbyygfUys+coyouaGHo96uxoTfAv3yehucf7U=':
const statu = public ? 'PUBLIC': 'SELF'
                reply('Loading Menu Yteam Bot')
initod = `
━━━━ *WHATSAPP BOT* ━━━ 

◪ *MY GITHUB*
*https://github.com/dreamteam14*

◪ *MY YOUTUBE*
*https://bit.ly/3xpb9iA*

◪ *OFFICIAL GROUP*
*https://bit.ly/3AFnZLA*

◪ *DONASI*
*https://saweria.co/FARDANWINX*

◪ *KONTAK ME*
@${gw.split('@')[0]}

✾──────────────────✾
*Hallo Kak @${sender.split('@')[0]}*

❒ 「*ABOUT ME*」 ❒
┃=> ${bung}  *${prefix}info*
┃=> ${bung}  *${prefix}lapor*
┃=> ${bung}  *${prefix}help*
┃=> ${bung}  *${prefix}speed*
┃=> ${bung}  *${prefix}runtime*
╰──────────────

❒  *「SELF/PUBLIC」*  ❒
┃=> ${bung}  *${prefix}self*
┃=> ${bung}  *${prefix}public*
╰──────────────✾

❒  *「GROUP MENU」*  ❒
┃=> ${bung}  *${prefix}antilink 1/0*
┃=> ${bung}  *${prefix}antidelete aktif/mati*
┃=> ${bung}  *${prefix}delete*
┃=> ${bung}  *${prefix}promote*
┃=> ${bung}  *${prefix}getpic*
┃=> ${bung}  *${prefix}getbio*
┃=> ${bung}  *${prefix}infoall*
┃=> ${bung}  *${prefix}hidetag*
╰──────────────✾

❒  *「SESSION」*  ❒
┃=> ${bung}  *${prefix}jadibot*
┃=> ${bung}  *${prefix}stopjadibot*
┃=> ${bung}  *${prefix}listbot*
╰──────────────✾


❒  *「TICTACTOE」*  ❒
┃=> ${bung}  *${prefix}${prefix}tictactoe @user${f}
┃=> ${bung}  *${prefix}${prefix}ttc @user${f}
┃=> ${bung}  *${prefix}${prefix}delttc${f}
┃=> ${bung}  *${prefix}${prefix}delttt${f}
╰──────────────✾

❒  *「CONVERTER」*  ❒
┃=> ${bung}  *${prefix}sticker${f}
┃=> ${bung}  *${prefix}stickergif${f}
┃=> ${bung}  *${prefix}s${f}
┃=> ${bung}  *${prefix}toimg${f}
┃=> ${bung}  *${prefix}toimage${f}
┃=> ${bung}  *${prefix}stickerwm${f}
┃=> ${bung}  *${prefix}swm${f}
┃=> ${bung}  *${prefix}ttp [text]${f}
┃=> ${bung}  *${prefix}attp [text]${f}
╰──────────────✾

✾──────────────────────────✾

_*YTEAM BOTZ*_
*Create By* : @${gw.split('@')[0]}
*Suport By* : @${mark.split('@')[0]}

◪  *「THANKS TO」*  ◪
┃=> @${gw.split('@')[0]}
┃=> @${dika.split('@')[0]}
┃=> @${vanz.split('@')[0]}
┃=> @${aqulz.split('@')[0]}
┃=> @${akira.split('@')[0]}
╰──────────────✾`
Vid.relayWAMessage({"key":{"remoteJid":from,"fromMe":true,"id":generateMessageID()},"message":{"orderMessage":{ itemCount: 999, status: 0,surface: 0,thumbnail: fs.readFileSync('./media/cewek.jpeg'), message: shu,sellerJid: '6285865829368@s.whatsapp.net'}},"messageTimestamp":"1616760057","status":"ERROR"}, text, {quoted: freply, contextInfo: {"mentionedJid": [sender, gw, aqulz, akira, dika, vanz, mark]}})
break
  }
			switch(command) {
                          case 'help':
                         case 'menu':
           const statuss = public ? 'PUBLIC': 'SELF'
                reply('Loading Menu Yteam Bot')
shu = `
━━━━━━ WHATSAPP BOT ━━━━━━ 

◪ *MY GITHUB*
*https://github.com/dreamteam14*

◪ *MY YOUTUBE*
*https://bit.ly/3xpb9iA*

◪ *OFFICIAL GROUP*
*https://bit.ly/3AFnZLA*

◪ *DONASI*
*https://saweria.co/DREAMBOT*

◪ *KONTAK ME*
@${gw.split('@')[0]}

✾──────────────────✾
*Hallo Kack @${sender.split('@')[0]}*

❒ 「 *ABOUT ME* 」 ❒
┃=> ${bung}  *${prefix}info*
┃=> ${bung}  *${prefix}lapor*
┃=> ${bung}  *${prefix}help*
┃=> ${bung}  *${prefix}speed*
┃=> ${bung}  *${prefix}runtime*
╰──────────────

❒  *「SELF/PUBLIC」*  ❒
┃=> ${bung}  *${prefix}self*
┃=> ${bung}  *${prefix}public*
╰──────────────✾

❒  *「GROUP MENU」*  ❒
┃=> ${bung}  *${prefix}antilink 1/0*
┃=> ${bung}  *${prefix}antidelete aktif/mati*
┃=> ${bung}  *${prefix}delete*
┃=> ${bung}  *${prefix}promote*
┃=> ${bung}  *${prefix}getpic*
┃=> ${bung}  *${prefix}getbio*
┃=> ${bung}  *${prefix}infoall*
┃=> ${bung}  *${prefix}hidetag*
╰──────────────✾

❒  *「SESSION」*  ❒
┃=> ${bung}  *${prefix}jadibot*
┃=> ${bung}  *${prefix}stopjadibot*
┃=> ${bung}  *${prefix}listbot*
╰──────────────✾


❒  *「TICTACTOE」*  ❒
┃=> ${bung}  *${prefix}${prefix}tictactoe @user${f}
┃=> ${bung}  *${prefix}${prefix}ttc @user${f}
┃=> ${bung}  *${prefix}${prefix}delttc${f}
┃=> ${bung}  *${prefix}${prefix}delttt${f}
╰──────────────✾

❒  *「CONVERTER」*  ❒
┃=> ${bung}  *${prefix}sticker${f}
┃=> ${bung}  *${prefix}stickergif${f}
┃=> ${bung}  *${prefix}s${f}
┃=> ${bung}  *${prefix}toimg${f}
┃=> ${bung}  *${prefix}toimage${f}
┃=> ${bung}  *${prefix}stickerwm${f}
┃=> ${bung}  *${prefix}swm${f}
┃=> ${bung}  *${prefix}ttp [text]${f}
┃=> ${bung}  *${prefix}attp [text]${f}
╰──────────────✾

✾──────────────────────✾

_*YTEAM BOTZ*_
*Create By* : @${gw.split('@')[0]}
*Suport By* : @${mark.split('@')[0]}

◪  *「THANKS TO」*  ◪
┃=> @${gw.split('@')[0]}
┃=> @${dika.split('@')[0]}
┃=> @${vanz.split('@')[0]}
┃=> @${aqulz.split('@')[0]}
┃=> @${akira.split('@')[0]}
╰──────────────✾`
Vid.sendMessage(from, shu, text, { quoted: freply, contextInfo: {"mentionedJid": [sender, gw, aqulz, akira, dika, vanz, mark]}})
break
case 'tes':
            let yoe = await Vid.prepareMessageFromContent(from, {
				  "listMessage":{
                  "title": `*HALLO  MASTAH*`,
                  "description": "*SAY HY TO MEMBERS*",
                  "buttonText": "TOUCH ME",
                  "listType": "SINGLE_SELECT",
                  "sections": [
                     {
                        "title": "Halo Mastah",
                        "rows": [
                           {
                              "title": `I LOVE YOU DAVID😍`,
                              "rowId": `${prefix}menu`
                           }					
                        ]
                     }
				     ]}}, {})  
					 let wkk = Vid.relayWAMessage(yoe, {waitForAck: true})
					 Vid.sendMessage(from, wkk, MessageType.product, {quoted: mek, contextInfo: {"mentionedJid": [sender, gw, aqulz, akira, dika, vanz, mark]}})
                     break
                     case 'debug2':
 res = await Vid.prepareMessageFromContent(from,{
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
"index": 0
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
"index": 0
}
]
}
}
}, {quoted: mek})
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
//============================ TICTACTOE MENU ==============================//
              case 'tictactoe': 
                case 'ttt': 
                case 'ttc':
                if (!isPremium) return reply("_Perintah ini Khusus Member Premium_")
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
                    case 'stickerwm':
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage)) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await Vid.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".webp")
                        ini_txt = 'Yteam Botz'
                        tod = 'Create By : David'
                        request({
                            url: `https://api.lolhuman.xyz/api/convert/towebpauthor?apikey=${Lolkey}`,
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
                    case 'stiker':
				case 'sticker':
				case 'stickergif':
				case 'stikergif':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await Vid.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								Vid.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
						} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await Vid.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								Vid.sendMessage(from, buff, sticker)
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
						}
						break
//=================l=========== OWNER MENU ================================//
               case 'daftarpremium':
				case 'daftar':
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
*Selamat @${sender.split('@')[0]}@c.us Kamu Telah Teraftar Di User Premium*`
                let buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/verify?nama=${sender}&member=${premium.length}&seri=${seriTod}&pp=${ppimg}&bg=${imglu}`)
                Vid.sendMessage(from, buff, MessageType.image, {quoted: freply, caption: kentod, contextInfo: {'mentionedJid': [sender]}})
                break
                case 'status':
                a = fs.readFileSync(`./media/cewek.jpeg`)
                c = fs.readFileSync(`./media/kera.jpeg`)
                k = `
*「 STATUS BOTZ 」*

MODE = public ? 'PUBLIC': 'SELF' MODE
`
Vid.sendMessage(from, k, text,{ quoted: freply})
break
                 case 'toimg':
                 case 'toimage':
                 var b = fs.readFileSync(`./media/cewek.jpeg`)
                  var encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                  var media = await drm.downloadMediaMessage(encmedia)
                   if (!isQuotedSticker) return reply('Reply Stikernya su!')
                   drm.sendMessage(from, media, MessageType.image, { thumbnail: b, caption: 'NEHH...', quoted: freply})
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
                Vid.sendMessage(from, {displayname: 'David Xyz', vcard: vcard}, MessageType.contact, {quoted: freply})
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
				Vid.sendMessage(from,`PERINGATAN!! jika bukan admin kirim link wajib menggunakan #izinadmin`, text, {quoted: fkontak})
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
					if (!isGroup) return reply(mess.only.group)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 'Aktif') {
						if (isWelkom) return reply('Udah aktif um')
						welkom.push(from)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
					} else if (Number(args[0]) === 'Mati') {
						welkom.splice(from, 1)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
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
//================================ JADIBOT ===============================// 
			    case 'stopjadibot':
			    reply('Bye Bye ...')
			    break
				default:
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
