import { googleImage } from '@bochilteam/scraper'
import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn }) => {
conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
    let res = await googleImage('meme indonesia')
    let image = res.getRandom()
    await conn.sendFile(m.chat, image, null, 'ᴀsᴜᴘᴀɴ ᴍᴇᴍᴇ ʀᴀɴᴅᴏᴍ\nᴅᴀɴ ᴠᴇʀsɪ sᴛɪᴄᴋᴇʀ👇', m, null)
    let stiker = await sticker(null, global.API(image), global.packname, global.author)
    if (stiker) return await conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
}
handler.help = ['meme']
handler.tags = ['internet']
handler.command = /^(meme)$/i
handler.limit = true
export default handler