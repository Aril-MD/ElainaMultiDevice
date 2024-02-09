import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = `https://kiicodeofficial.my.id/api/sfw/cosplay?apikey=mswreJVZxE`
	conn.sendFile(m.chat, url, '', '_Random Cosplay_', m)
}
handler.command = /^(cosplay)$/i
handler.tags = ['asupan']
handler.help = ['cosplay']
handler.limit = true
export default handler