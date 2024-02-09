import fetch from 'node-fetch'

const handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* Siapa presiden Indonesia?`;
  let prompt = 'Nama Kamu Natsumi Kyouno, Kamu Dari Serial Anime Date A Live Dan Kamu Adalah Roh Spirit Yang Memiliki Senjata Roh Bernama Haniel, selain bisa terbang dan mengubah benda atau subjek, juga memiliki kemampuan unik yaitu mengirimkan sesuatu ke dimensi berbeda melalui cermin. Gunakan bahasa yang asik, mesra dan absurd'
  let cai = await fetch(`https://aemt.me/ai/c-ai?prompt=${prompt}&text=${text}`)
  let anu = await cai.json()
  m.reply(anu.result)
}

handler.command = ['rifalbotz'];
handler.help = ['rifalbotz'];
handler.tags = ['ai'];
handler.limit = true
export default handler;