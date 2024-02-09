import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Mau Cari Apa?`
  m.reply(wait)
  try {
  let res = await fetch(`https://api.xyroinee.xyz/api/search/bukalapak?q=${text}&apikey=${global.xyro}`)
  let anu = await res.json()
  anu = anu.data.map((v) => `*Title:* ${v.title}\n*Rating:* ${v.rating}\n*Terjual:* ${v.terjual}\n*Harga:* ${v.harga}\n*Link:* ${v.link}`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
  conn.reply(m.chat, anu, m)
  } catch (e) {
  m.reply(`Tidak Dapat Menemukan Apa Yang Kamu Cari`)
  }
}
handler.help = ['bukalapak']
handler.tags = ['internet']
handler.command = /^(bukalapak)$/i
handler.limit = true

export default handler
