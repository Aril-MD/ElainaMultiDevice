let axios = require ('axios')
let uploadImage = require ('../lib/uploadImage.js')
const { RemoVebg } = require("../lib/zyko")
const { md } = require("../lib/function")
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) return m.reply(`Kirim/Reply Gambar Dengan Caption ${usedPrefix+command} blue\n\npilihan warna lain nya\naqua\nred\nblue\npurple\nmagenta`)
  if (!text) return m.reply(`Kirim/Reply Gambar Dengan Caption ${usedPrefix+command} blue\n\npilihan warna lain nya\naqua\nred\nblue\npurple\nmagenta`)
  await md(m)
  let media = await q.download()
  let urll = await uploadImage(media)
  let res = await RemoVebg(urll, text)
  conn.sendMessage(m.chat, {image: res, caption: `*Result* : ${text}`})
}
handler.help = ['chgbackground', 'changebg'].map(v => v + ' <reply/image>')
handler.tags = ['internet']
handler.command = /^(chgbackground|changebg)$/i
handler.premium = true
export default handler