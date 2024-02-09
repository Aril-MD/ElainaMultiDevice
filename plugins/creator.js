import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let edtr = `@${m.sender.split`@`[0]}`

let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;ARIL MD\nNICKNAME:👑 Owner ARIL MD\nORG:ARIL MD\nTITLE:soft\nitem1.TEL;waid=6282220427314:+62 822-2042-7314\nitem1.X-ABLabel:📞 Nomor Owner\nitem2.URL:https://github.com/Aril-MD/ElainaMultiDevice\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET:arilmd368@gmail.com\nitem3.X-ABLabel:💌 Mail Owner ARIL MD\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:📍 Lokasi Saya\nBDAY;value=date:🐦 12-04-2007\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: global.fkontak })
let caption = `👋 Hai *${edtr}*, Nih Owner *${conn.user.name}* kak`
    await conn.reply(m.chat, caption, tag_own, { mentions: conn.parseMention(caption) })

}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|pengembang|creator)$/i

export default handler