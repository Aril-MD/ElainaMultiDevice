let handler = async (m, { conn }) => {
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
	conn.sendFile(m.chat, `https://api.betabotz.org/api/nsfw/ahegao?apikey=${global.lann}`, '1.jpg', '```Success...\nDont forget to donate```', m)
}
handler.help = ['ahegao']
handler.tags = ['nsfw']

handler.command = /^(ahegao)$/i
handler.premium = false
handler.register = true
handler.limit = 5

export default handler 