import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {

if (!text) throw `*MASUKAN NAMA LAGU*`

try {

let res = await fetch(`https://new-api-lorenzo.cyclic.app/api/search/spotify?apikey=YT:LORENZOBOTMD&query=${text}`)

let json = await res.json()

let { link } = json.result[0]

let res2 = await fetch(`https://api.ikyy.my.id/spotifydl?url=${link}`)

let json2 = await res2.json()

let { thumbnail, title, artists } = json2.result

let spotifyi = `❒═════❬ 𝐒𝐏𝐎𝐓𝐈𝐅𝐘 ❭═════╾❒\n┬\n├‣✨ *TITLE:* ${title}\n┴\n┬\n├‣🗣️ *ARTIST:* ${artists}\n┴\n┬\n├‣🌐 *𝚄𝚁𝙻*: ${link}\n┴\n┬\n├‣💚 *SEARCH URL:* ${json2.result.link}\n┴`

conn.sendFile(m.chat, thumbnail, 'error.jpg', spotifyi, m)

let aa = await conn.sendMessage(m.chat, { audio: { url: json2.result.link }, fileName: `error.mp3`, mimetype: 'audio/mp4' }, { quoted: m }) 

if (!aa) return conn.sendFile(m.chat, json2.result.link, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' }) 

} catch {

throw '* 𝙴𝚁𝚁𝙾𝚁*'

}}

handler.command = /^(spotify|spotsearch)$/i
handler.help = ['spotify'].map(v => v + ' <query>')
handler.tags = ['downloader', 'premium']

handler.premium = true

export default handler