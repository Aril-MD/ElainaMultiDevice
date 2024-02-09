import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {

m.reply(wait)
let res = await fetch('https://api.waifu.pics/nsfw/neko')

if (!res.ok) return m.react('❌')

let json = await res.json()

if (!json.url) return m.react('❌')

await conn.sendFile(m.chat, json.url, 'xneko.png', '*RANDOM NEKO*', m)


}

handler.help = ['xneko']

handler.tags = ['nsfw']

handler.command = ['xneko']

handler.nsfw = true

export default handler