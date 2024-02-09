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

  let rpat = await fetch(`https://api.waifu.pics/sfw/pat`)
    if (!rpat.ok) throw await rpat.text()
   let json = await rpat.json()
   let { url } = json
   let stiker = await sticker(null, url, `(${name2}) acarició a`, `${name}`)
   conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
   
}

handler.help = ['pat @tag']
handler.tags = ['rnime']
handler.command = /^(acariciar|pat)$/i
handler.diamond = true
handler.group = true

export default handler
