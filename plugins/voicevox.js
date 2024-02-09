import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*example:* ${usedPrefix + command} Good morning`
  
  let a = await fetch(`https://api.lolhuman.xyz/api/translate/auto/ja?apikey=${global.lolkey}&text=${text}`)
  let js = await a.json()

  if (js.result.translated) {
    let b = `https://api.yanzbotz.my.id/api/tts/aoi?query=${js.result.translated}`
    conn.sendFile(m.chat, b, '', null, m, true)
  }
}

handler.help = ['voicevox']
handler.tags = ['ai', 'internet']
handler.command = /^(voicevox)$/i
handler.limit = true

export default handler