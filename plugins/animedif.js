let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) return m.reply(`Example: *${usedPrefix + command}* 1girl, solo, ponytail, blush.`)
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
    try {
let data = (`https://api.yanzbotz.my.id/api/text2img/neima?prompt=${text}`)
conn.sendFile(m.chat, data,"apa", '```Success...\nDont forget to donate```', m)
	} catch (e) {
		m.reply(error);
	}
};
handler.help = ["animedif"]
handler.tags = ["internet"]
handler.command = ["animedif"]
handler.register = true
export default handler