import fetch from 'node-fetch'
let handler = async (m, { conn, args, text, command, usedPrefix, isCreator, isPrems }) => {
  if (!text) return m.reply(`Example: ${usedPrefix}${command} 1girl, solo, ponytail, blush.`)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let res = `https://api.yanzbotz.my.id/api/text2img/neima?prompt=${text}`
  conn.sendFile(m.chat, res, 'neima.jpg', '```Success...\nDont forget to donate```', m, false)
}
handler.command = handler.help = ['neima'];
handler.tags = ['internet','diffusion'];
handler.premium = true;
handler.limit = true;

export default handler;