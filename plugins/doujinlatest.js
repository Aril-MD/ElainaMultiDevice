import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
  let res = await fetch(`https://api.xyroinee.xyz/api/anime/doujin-latest?apikey=${global.xyro}`)
  try {
  let json = await res.json()
  res = json.data.map((v) => `*Title:* ${v.title}\n*Chapter:* ${v.chapter}\n*Thumbnail:* ${v.thumbnail}\n*Link:* ${v.url}`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
  conn.sendFile(m.chat, json.data[0].thumbnail, 'anunya.jpg', res, m)
  } catch (e) {
m.reply(eror)
}
}
handler.help = ['doujinlatest']
handler.tags = ['anime']
handler.command = /^(doujinlatest)$/i
handler.limit = true
export default handler
