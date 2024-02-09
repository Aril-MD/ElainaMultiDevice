"use strict"
import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, args, text }) => {
	if (!text[0]) return m.reply(`Teksnya Mana Kak?\nContoh: .attp not gender`)
	let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
    let stiker = await sticker(null, `https://api.zahwazein.xyz/creator/ttp?text=${text}&apikey=zenzkey_ab72cdd5af82`, global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
}
handler.help = ['ttp <teks>']
handler.tags = ['sticker']
handler.command = /^ttp$/i
handler.limit = true

export default handler