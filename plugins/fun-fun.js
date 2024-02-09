import fs from 'fs'
let handler = async (m, { conn, args, participants, text, usedPrefix, command }) => {
  switch (command) {
case 'memek':
case 'bego':
case 'goblok':
case 'janda':
case 'perawan':
case 'babi':
case 'tolol':
case 'pinter':
case 'pintar':
case 'asu':
case 'bodoh':
case 'gay':
case 'lesby':
case 'bajingan':
case 'jancok':
case 'anjing':
case 'ngentod':
case 'ngentot':
case 'monyet':
case 'mastah':
case 'newbie':
case 'bangsat':
case 'bangke':
case 'sange':
case 'sangean':
case 'dakjal':
case 'horny':
case 'wibu':
case 'puki':
case 'peak':
case 'pantex':
case 'pantek':
case 'setan':
case 'iblis':
case 'cacat':
case 'yatim':
case 'yapit':
case 'pukimak':
case 'pantat':
case 'peler':
case 'titit':
case 'jawa':
case 'jawir':
case 'hitam':
case 'ngawi':
case 'sigma':
case 'piatu': {
let member = participants.map(u => u.id).filter(v => v !== conn.user.jid)
let org = member[Math.floor(Math.random() * member.length)];    
let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://i.ibb.co/2WzLyGk/profile.jpg')
let fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: true}}}
  conn.sendMessage(m.chat, {
text: `ᴀɴᴀᴋ ${command} ᴅɪsɪɴɪ adalah\n@${org.split('@')[0]}`,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: 'ᴀɢᴀᴋ ʟᴀᴇɴ',
body: 'ᴇʟᴀɪɴᴀ ᴀɪ',
thumbnailUrl: pp, 
sourceUrl: sid, 
mediaType: 1,
renderLargerThumbnail: true, 
mentions: [org] 
}}}, { quoted: fkontak})
      break;
    }
  }
};
handler.tags = ['agak-laen']
handler.help = handler.command = ['memek', 'bego',
'goblok',
'janda',
'perawan',
'babi',
'tolol',
'pinter',
'pintar',
'asu',
'bodoh',
'gay',
'lesby',
'bajingan',
'jancok',
'anjing',
'ngentod',
'ngentot',
'monyet',
'mastah',
'newbie',
'bangsat',
'bangke',
'sange',
'sangean',
'dakjal',
'horny',
'wibu',
'puki',
'peak',
'pantex',
'pantek',
'setan',
'iblis',
'cacat',
'yatim',
'yapit', 
'pukimak', 
'pantat', 
'peler', 
'titit', 
'jawa', 
'jawir', 
'hitam', 
'ngawi', 
'sigma', 
'piatu']
handler.group = true
handler.limit = true
export default handler;