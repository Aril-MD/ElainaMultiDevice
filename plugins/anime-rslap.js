import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'
//import db from '../lib/database.js'

let handler = async (m, { conn, args, usedPrefix, command }) => {
	
	 let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
     if (!who) throw `✳️ Tag atau sebutkan seseorang\n\n📌 Contoh : ${usedPrefix + command} @tag`
     
    let user = global.db.data.users[who]
    let name = conn.getName(who) 
   let name2 = conn.getName(m.sender) 
   m.reply(wait)

  let rki = await fetch(`https://api.waifu.pics/sfw/slap`)
    if (!rki.ok) throw await rki.text()
   let jkis = await rki.json()
   let { url } = jkis
   let stiker = await sticker(null, url, `(${name2}) le dio una bofetada a`, `${name}`)
   conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
   
}

handler.help = ['slap @tag']
handler.tags = ['rnime']
handler.command = /^(slap|bofetada)$/i
handler.diamond = true
handler.group = true

export default handler
