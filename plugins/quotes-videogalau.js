let handler = async (m, { conn, usedPrefix, command }) => {
		
			await conn.sendMessage(m.chat, { video: { url: rifal[Math.floor(Math.random() * rifal.length)] }, caption: '```Nih kak, Lagi galau yaa? シ```' }, { quoted: m })
	}

handler.help = ['quotesvideo', 'videogalau']
handler.tags = ['quotes', 'premium']
handler.command = /^(quotesvideo|videogalau)$/i

handler.premium = true

export default handler

const rifal = [
"https://telegra.ph/file/93e0d526b84634a2eb3ed.mp4",
"https://telegra.ph/file/987ae457cf99c998a9028.mp4",
"https://telegra.ph/file/02ef4d699ecf8fd79e69d.mp4",
"https://telegra.ph/file/9e659ed731cb8fb568975.mp4",
"https://telegra.ph/file/fdc433a33cc167c74b797.mp4",
"https://telegra.ph/file/b9b3dece43e557b4addc1.mp4",
"https://telegra.ph/file/e3b87ffb793edfa65c993.mp4",
"https://telegra.ph/file/62eb5c0d4464ceb495e1f.mp4",
"https://telegra.ph/file/ac3cb37dd4334f579e3e7.mp4",
"https://telegra.ph/file/c1ca711348cfb1db1eaa8.mp4",
"https://telegra.ph/file/2eac52f3cfba77430446d.mp4",
"https://telegra.ph/file/4f9ffc7b433af74e92ac6.mp4",
"https://telegra.ph/file/d5b8be4bdf65753a0635d.mp4",
"https://telegra.ph/file/bb5fbf18d2f6326449e40.mp4",
"https://telegra.ph/file/94b295cfba9c26b8a59f3.mp4",
"https://telegra.ph/file/25c2ba5242fa25027bc4f.mp4",
"https://telegra.ph/file/bbbccd9c8f5ac2ba9112c.mp4"
]