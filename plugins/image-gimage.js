import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Use example ${usedPrefix}${command} Minecraft`
    const res = await googleImage(text)
    let image = res.getRandom()
    let link = image
    let caption = `*${htki} GOOGLE IMAGE ${htka}*
🔎 *Result:* ${text}
🌎 *Source:* Google

🔗 *link:* ${link}
`
conn.sendFile(m.chat, link, 'image.jpg', caption, m)
}
handler.help = ['gimage <query>', 'image <query>']
handler.tags = ['image']
handler.command = /^(gimage|image)$/i
handler.limit = true
export default handler