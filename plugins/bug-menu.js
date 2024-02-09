import fetch from 'node-fetch'
import moment from 'moment-timezone'
import { promises, readFileSync } from 'fs'
import fs from 'fs'
let handler = async (m, { conn, usedPrefix, command, text }) => {
let { limit, role, level, exp, premiumTime } = db.data.users[m.sender]
  let name = await conn.getName(m.sender)
  m.reply(`${htki} Menampilkan Bug Menu ${htka}`)
  let tag = `@${m.sender.replace(/@.+/, '')}`
  let zyko = `${ucapan()}, ${tag}`
//  let ucapan = `${ucapan()} ${name}`
  let res = JSON.parse(readFileSync('./json/emoji.json'))
  let em = res.emoji
  let pp = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=inferno-logo&doScale=false&scaleWidth=400&scaleHeight=400&fontsize=50&fillTextType=0&backgroundColor=black&text=${command}`
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let bug = `
█▓▒░►───────═❏ 
█❏ *Name:* ${name}
█❏ *Tag:* ${tag}
█❏ *Status:* ${premiumTime > 0 ? 'Premium' : 'Free user' }
█❏ *Limit:* ${limit}
█❏ *Role:* ${role}
█❏ *Level:* ${level}
█❏ *Xp:* ${exp}
█▓▒░►───────═❏
         
╔════ ≪ °*Bug Emot*° ≫ ════╗
║❏➣ ${usedPrefix}🌹 628xxxx
║❏➣ ${usedPrefix}🌻 628xxxx
║❏➣ ${usedPrefix}😎 628xxxx
║❏➣ ${usedPrefix}👽 628xxxx
║❏➣ ${usedPrefix}🗿 628xxxx
║❏➣ ${usedPrefix}😃 628xxxx
║❏➣ ${usedPrefix}💀 628xxxx
║❏➣ ${usedPrefix}😅 628xxxx
║❏➣ ${usedPrefix}🥶 628xxxx
║❏➣ ${usedPrefix}®️ 628xxxx
║❏➣ ${usedPrefix}🐓 628xxxx
║❏➣ ${usedPrefix}😱 628xxxx
║❏➣ ${usedPrefix}🍩 628xxxx
║❏➣ ${usedPrefix}😝 628xxxx
║❏➣ ${usedPrefix}💩 628xxxx
║❏➣ ${usedPrefix}🤬 628xxxx
║❏➣ ${usedPrefix}😈 628xxxx
║❏➣ ${usedPrefix}🌷 628xxxx
║❏➣ ${usedPrefix}🌹 628xxxx
╚════ ≪ °${nameown}° ≫ ════╝

╔════ ≪ °*Bug Group*° ≫ ════╗
║❏➣ ${usedPrefix}buggc 62888@g.us
║❏➣ ${usedPrefix}buggcrash 62888@g.us
╚════ ≪ °${nameown}° ≫ ════╝

By : Aril
*Note:* Jangan Salah Gunakan Bug ayaka InI

*Note:* Gunakan lah Bug Botz ini Dengan orang yang bersalah `

conn.sendFile(m.chat, pp, null, bug, m)
}
handler.help = ['bugmenu']
handler.tags = ['bugmenu']
handler.command = /^(bugmenu)$/i

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Sudah Dini Hari Kok Belum Tidur Kak? 🥱"
  if (time >= 4) {
    res = "Pagi Lord 🌄"
  }
  if (time >= 10) {
    res = "Selamat Siang Kak ☀️"
  }
  if (time >= 15) {
    res = "Selamat Sore Kak 🌇"
  }
  if (time >= 18) {
    res = "Malam Kak 🌙"
  }
  return res
}