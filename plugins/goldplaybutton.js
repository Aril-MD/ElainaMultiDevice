import fetch from 'node-fetch'
let handler = async (m, { conn, args, text, command, usedPrefix, isCreator, isPrems }) => {
  if (!text) return m.reply(`Example: ${usedPrefix}${command} Reyz`)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let res = `https://api.lolhuman.xyz/api/ephoto1/goldplaybutton?apikey=${global.lolkey}&text=${text}`
  conn.sendFile(m.chat, res, 'goldplaybutton.jpg', '```Success...\nDont forget to donate```', m, false)
}
handler.help = ['goldplaybutton'].map(v => v + ' <text>')
handler.tags = ['lolhuman-maker']
handler.command = /^(goldplaybutton|gold)$/i
handler.limit = true

export default handler 