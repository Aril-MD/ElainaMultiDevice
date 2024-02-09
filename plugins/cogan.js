let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://api.zahwazein.xyz/randomimage/cogan?apikey=zenzkey_f07b21f698', 'cogan.mp4', 'Nih kak', m)
}
handler.help = ['cogan']
handler.tags = ['internet']

handler.command = /^(cogan)$/i
export default handler 