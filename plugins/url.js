const skl = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');

let sk = Config.WORKTYPE == 'public' ? false : true
e.addCommand({pattern: 'url ?(.*)', fromMe: a, desc:'Uploads image to imgur.com'}, (async (m, match) => { 
let q = await m.client.downloadAndSaveMediaMessage({key: {remoteJid: m.reply_message.jid,id: m.reply_message.id},message: m.reply_message.data.quotedMessage});
let res = await i.query.upload(q,v)
await m.client.sendMessage(m.jid, '_*File uploaded!*_ \n\n_File name:_ ' + res.id + '.jpeg \n_File URL:_ ' + res.link + '\n_File size:_ ' + res.size + ' bits' + '\n_Format:_ ' + res.type + '\n_Height:_ ' + res.height + '\n_Width:_ ' + res.width , MessageType.text, { quoted: m.data });}));
