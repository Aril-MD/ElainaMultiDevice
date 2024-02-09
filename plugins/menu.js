import { promises } from 'fs'
import canvafy from "canvafy";
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'
const { generateWAMessageFromContent, proto } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn, usedPrefix: _p, __dirname, args, command}) => {
let loadd = [
    "□□■■■■■■■■\n             𝟷𝟶٪",
    "■■□□■■■■■■\n             𝟹𝟶٪",
    "■■■■□□■■■■\n             𝟻𝟶٪",
    "■■■■■■□□■■\n             𝟾𝟶٪",
    "■■■■■■■■□□\n             𝟷𝟶𝟶٪",
    "ʟ ᴏ ᴀ ᴅ ɪ ɴ ɢ  ᴄ ᴏ ᴍ ᴘ ʟ ᴇ ᴛ ᴇ. . ."
  ]

let { key } = await conn.sendMessage(m.chat, {text: 'ʟ ᴏ ᴀ ᴅ ɪ ɴ ɢ. . .'})//Pengalih isu

for (let i = 0; i < loadd.length; i++) {
  await new Promise(resolve => setTimeout(resolve, 850));
await conn.sendMessage(m.chat, {text: loadd[i], edit: key })}
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender;
let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/2bc30e1f5f92312ef44c1.jpg')

const defaultMenu = {
  before: `
`.trimStart(),
  header: '',
  body: '',
  footer: '',
  after: '',
}
let yaya =`
⌬〡 *ɴᴀᴍᴇ ʙᴏᴛ* : ${global.namebot}
⌬〡 *ᴄʀᴇᴀᴛᴏʀ* : ${global.nameown}
⌬〡︎ *ᴠᴇʀsɪᴏɴs* : ${global.version}
⌬〡︎ *ᴛʏᴘᴇ sᴄʀɪᴘᴛ* : ᴘʟᴜɢɪɴs
⌬〡 *ɪɴsᴛɢʀᴀᴍ* : ${global.sig}

╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌
ʜɪ sɪs, ʙᴇғᴏʀᴇ ɢᴏɪɴɢ ᴛᴏ ᴛʜᴇ ғᴇᴀᴛᴜʀᴇs ᴍᴇɴᴜ, ᴘʟᴇᴀsᴇ ʀᴇᴀᴅ ᴛʜᴇ ʀᴜʟᴇs ғᴏʀ ᴜsɪɴɢ ᴛʜᴇ ʙᴏᴛ 

𝟷. sᴘᴀᴍ ʙᴏᴛs ᴀʀᴇ ᴘʀᴏʜɪʙɪᴛᴇᴅ
𝟸. ᴄᴀʟʟɪɴɢ ʙᴏᴛs ɪs ᴘʀᴏʜɪʙɪᴛᴇᴅ
𝟹. ᴄᴀʟʟɪɴɢ ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ ɪs ᴘʀᴏʜɪʙɪᴛᴇᴅ
𝟺. sᴘᴀᴍ ᴛᴏ ɴᴏ ᴏᴡɴᴇʀ ɪs ᴘʀᴏʜɪʙɪᴛᴇᴅ

╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌
*ᴛʏᴘᴇ .ᴀʟʟᴍᴇɴᴜ ᴛᴏ ᴅɪsᴘʟᴀʏ ᴛʜᴇ ᴍᴇɴᴜ*

_ᴍᴀʜɪʀᴜ ʙᴏᴛ ᴜɴᴅᴇʀ ᴅᴇᴠᴇʟᴏᴘᴍᴇɴᴛ_ ɪғ ʏᴏᴜ ᴡᴀɴᴛ ᴛᴏ ʀᴇɴᴛ/ғᴏʀ ʜᴏsᴛɪɴɢ ᴘᴜʀᴘᴏsᴇs, ᴛʏᴘᴇ .ᴏᴡɴᴇʀ [ɴᴏᴛ ᴀ ʙᴏᴛ]

_ɴᴏᴛᴇ: ɪғ ʏᴏᴜ ᴅᴏɴ'ᴛ ᴋɴᴏᴡ ʜᴏᴡ ᴛᴏ ᴜsᴇ ᴛʜᴇ ʙᴏᴛ, ʏᴏᴜ ᴄᴀɴ ᴛʏᴘᴇ .ᴛᴜᴛᴏʀɪᴀʟ_

ᴜɴᴛᴜᴋ ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴀʟʟᴍᴇɴᴜ ᴋᴇᴛɪᴋ *.ᴀʟʟᴍᴇɴᴜ*`

//conn.sendMessage(m.chat, { video: { url: 'https://telegra.ph/file/f33273a16b254724bd3c1.mp4' }, caption: 'gak tau', viewOnce: true, footer: author }, { quoted: m });

let tags = {
'arilmenu': { }
}
 
  /*try {
  	// DEFAULT MENU
      let dash = global.dashmenu
  	let m1 = global.dmenut
      let m2 = global.dmenub
      let m3 = global.dmenuf
      let m4 = global.dmenub2
      
      // COMMAND MENU
      let cc = global.cmenut
      let c1 = global.cmenuh
      let c2 = global.cmenub
      let c3 = global.cmenuf
      let c4 = global.cmenua
      */
      // LOGO L P
      let lprem = global.lopr
      let llim = global.lolm
      let tag = `@${m.sender.split('@')[0]}`
    
    //-----------TIME---------
    let ucpn = `${ucapan()}`
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
   //let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let _mpt
    if (process.send) {
      process.send('uptime')
      _mpt = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let mpt = clockString(_mpt)
    let usrs = db.data.users[m.sender]
      
    let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
    let wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
 
    let mode = global.opts['self'] ? 'Private' : 'Publik'
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { age, exp, limit, level, role, registered, eris} = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let premium = global.db.data.users[m.sender].premiumTime
    let prems = `${premium > 0 ? 'Premium': 'Free'}`
    let platform = os.platform()
    
    let bjir = 'https://telegra.ph/file/4ab54f74dc727480029cd.jpg'
    //---------------------
    
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
          }
    conn.menu = conn.menu ? conn.menu : {}
    let fitur = Object.values(plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1)
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%_p' + help)
                .replace(/%islimit/g, menu.limit ? llim : '')
                .replace(/%isPremium/g, menu.premium ? lprem : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: uptime, muptime,
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      //tag, dash,m1,m2,m3,m4,cc, c1, c2, c3, c4,lprem,llim,
      ucpn,platform, wib, mode, _p, eris, age, tag, name, prems, level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    
 let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}

let p = await new canvafy.Security()
. setAvatar (pp)
. setBackground ("color","#FF0033")
. setLocale ("id")
. setOverlayOpacity (1.0)
. setAvatarBorder ("#fff")
   .setCreatedTimestamp(Date.now())
        .setSuspectTimestamp(1)
.build()

 conn.sendFile(m.chat, p, '', yaya, m, null, {
  fileLength: '10000',
  contextInfo: {
    externalAdReply: {
      showAdAttribution: true,
      mediaType: 1,
      description: wm,
      title: `ʜᴀʟʟᴏ ᴋᴀᴋ ${name}`,
      body: `${ucapan()}`,
renderLargerThumbnail: true,
      thumbnail: await (await fetch (`https://telegra.ph/file/4ab54f74dc727480029cd.jpg`)).buffer(),
      sourceUrl: 'https://github.com/Aril-MD'     
}}}, { quoted: fkon })

let delay = time => new Promise(res => setTimeout(res, time))
let elaina = {
                 audio:fs.readFileSync('./vn/menuawal.mp3'),mimetype:'audio/mpeg',ptt:true,viewOnce:true,thumbnaiUrl:thumb
                    
                    
                }
            await delay(1000)              
            conn.sendMessage(m.chat, elaina,{ quoted: m })
}               
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i

handler.register = false

export default handler

//----------- FUNCTION -------

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}
function clockStringP(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [ye, ' *Years 🗓️*\n',  mo, ' *Month 🌙*\n', d, ' *Days ☀️*\n', h, ' *Hours 🕐*\n', m, ' *Minute ⏰*\n', s, ' *Second ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "ᴋᴏᴋ ʙᴇʟᴜᴍ ᴛɪᴅᴜʀ ᴋᴀᴋ? 🥱"
  if (time >= 4) {
    res = "ᴘᴀɢɪ ᴋᴀᴋ 🌄"
  }
  if (time >= 10) {
    res = "sɪᴀɴɢ ᴋᴀᴋ ☀️"
  }
  if (time >= 15) {
    res = "sᴏʀᴇ ᴋᴀᴋ 🌇"
  }
  if (time >= 18) {
    res = "ᴍᴀʟᴀᴍ ᴋᴀᴋ 🌙"
  }
  return res
}