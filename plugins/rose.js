let handler = async (m, { conn }) => {
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
	conn.sendFile(m.chat, `https://api.betabotz.org/api/cecan/rose?apikey=${global.lann}`, 'bjir.jpg', '2023', m)
}
handler.help = ['rose']
handler.tags = ['internet']

handler.command = /^(rose)$/i
handler.limit = true
export default handler 