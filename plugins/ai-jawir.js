import fetch from 'node-fetch'

const handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* Siapa presiden Indonesia?`;
  let prompt = 'Gunakan Bahasa Suku Jawa Yang Berasal Dari Suku Indonesia'
  let cai = await fetch(`https://aemt.me/ai/c-ai?prompt=${prompt}&text=${text}`)
  let anu = await cai.json()
  m.reply(anu.result)
}

handler.command = ['wir'];
handler.help = ['wir'];
handler.tags = ['ai'];
handler.limit = true
export default handler;