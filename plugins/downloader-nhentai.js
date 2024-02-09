import axios from 'axios'

let handler = async (m, { conn, text }) => {
  if (!text) {
    conn.reply(m.chat, '*Example*: .nhentai 277xxxx', m)
    return
  }
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  try {
    let response = await axios.get(`https://api.lolhuman.xyz/api/nhentai/${text}?apikey=${global.lolkey}`)
    let result = response.data.result
    let tags = result.tags.map(tag => `#${tag}`).join(' ')
    let caption = `
*Judul*: ${result.title_romaji}
*Judul Asli*: ${result.title_native}
*Tags*: ${tags}
*Link Baca*: ${result.read}
`.trim()
    conn.sendFile(m.chat, result.image[0], 'nhentai.jpg', caption, m)
  } catch (e) {
    if (e.response && e.response.status == 404) {
      conn.reply(m.chat, `Doujinshi dengan code ${text} tidak ditemukan.`, m)
    } else {
      conn.reply(m.chat, 'Terjadi kesalahan saat memproses permintaan.', m)
      console.log(e)
    }
  }
}

handler.help = ['nhentai <kode>']
handler.tags = ['premium','downloader']
handler.premium = true
handler.command = /^nhentai$/i

export default handler