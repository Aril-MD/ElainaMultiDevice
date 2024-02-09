import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix }) => {

if (args.length == 0) return conn.reply(m.chat, `Gunakan ${usedPrefix}kpop\nSilakan tulis: ${usedPrefix}kpop [pencarian]\nContoh: ${usedPrefix}kpop bts\n\nPencarian yang tersedia:\nblackpink, exo, bts`, m)

if (args[0] == 'blackpink' || args[0] == 'exo' || args[0] == 'bts') {

fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/kpop/' + args[0] + '.txt')

.then(res => res.text())

.then(body => {

let randomkpop = body.split('\n')

let randomkpopx = randomkpop[Math.floor(Math.random() * randomkpop.length)]

conn.sendFile(m.chat, randomkpopx, '', 'Dasar Kpopers', m)

})

.catch(() => {

conn.reply(m.chat, 'Terjadi kesalahan, coba lagi. Jika masalah berlanjut, beri tahu pembuat saya', m)

})

} else {

conn.reply(m.chat, `Maaf, pencarian tidak tersedia. Silakan tulis ${usedPrefix}kpop untuk melihat daftar pencarian yang tersedia`, m)

}}

handler.help = ['kpop'].map(v => v + ' <query>')

handler.tags = ['image']

handler.command = /^(kpop)$/i

export default handler