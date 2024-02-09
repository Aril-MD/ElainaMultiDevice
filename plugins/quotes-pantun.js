import fs from 'fs'
import moment from 'moment-timezone'

let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
let tag = `@${m.sender.replace(/@.+/, '')}`
  let mentionedJid = [m.sender]
let name = conn.getName(m.sender)
let cin = `${pickRandom(global.pantun)}`
m.reply(cin)
}
handler.help = ['pantun']
handler.tags = ['quotes']
handler.command = /^(pantun)$/i
handler.limit = true
export default handler

function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Selamat Malam"
  if (time >= 4) {
    res = "Selamat Pagi"
  }
  if (time >= 10) {
    res = "Selamat Siang"
  }
  if (time >= 15) {
    res = "Selamat Sore"
  }
  if (time >= 18) {
    res = "Selamat Malam"
  }
  return res
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

global.pantun = [
'Ada anak kecil bermain batu,\nBatu dilempar masuk ke sumur,\nBelajar itu tak kenal waktu,\nJuga tidak memandang umur. ',
'Tanam kacang di pagi hari,\nTumbuh enam layu sebatang,\nKeburukan orang jangan dicari,\nBila kalian sedang puasa. ',
'Akhir bulan mendapat gaji,\nGaji untuk membeli ketupat,\nRajin-rajinlah sholat dan mengaji,\nJanganlah lupa puasa dan zakat. ',
'Waktu daftar hari terakhir,\nWaktu terasa banyak terbuang,\nKamu nggak perlu khawatir,\ncintaku hanya untukmu seorang. ',
'Ada anak kecil bermain batu,\nBatu dilempar masuk ke sumur,\nBelajar itu tak kenal waktu,\nJuga tidak memandang umur. ',
'Seribu bebek di kandang singa,\nhanya satu berwarna belang,\nBeribu cewek di Indonesia,\nhanya engkau yang aku sayang. ',
'Hari minggu pergi ke pasar,\nBeli sayur dan juga beras,\nTiap hari harus belajar,\nPasti akan menjadi cerdas. ',
'Ayam goreng setengah mateng,\nBelinya di depan tugu.\nAbang sayang, abangku ganteng,\nlneng di sini setia menunggu. ',
'Api kecil dari tungku,\nApinya kecil habis kayu.\nSudah lama kutunggu-tunggu,\nkapan kamu bilang I love you. ',
'Seribu bebek di kandang singa,\nhanya satu berwarna belang\nBeribu cewek di Indonesia,\nhanya engkau yang aku sayang. ',
'Pergi memancing saat fajar,\nPulang siang membawa ikan\nSiapa yang rajin belajar\nJadi orang sukses kemudian. ',
'Beli computer itu biasa\nSupaya belajar jadi semangat\nMari kita belajar puasa\nAgar kita jadi kuat ',
'Minum sekoteng hangat rasanya,\nminum segelas ada yang minta.\nLaki-laki ganteng siapa yang punya?\nBolehkah aku jatuh cinta.',
'Raja gagah lagi sakti Laksamana pergi berperang Supaya tidak sesal di hati Janganlah kena perdaya orang ',
'Pergi mendaki Gunung Daik Hendak menjerat kancil dan rusa Bergotong-royong amalan yang baik Elok diamalkan setiap masa',
'Pinang muda dibelah dua Manik-manik mati dirempuh Dari muda sampai ke tua Pengajaran baik jangan diubah ',
'Tegak-tegak cocokkan pancang Pasang bendera bunyikan tabuh Agak-agak mengatai orang Supaya cedera jangan tumbuh ',
'Batang ketumbar dahan-dahan Kelapa jatuh ke tepi bangsal Biarlah sabar dengan perlahan Siapa gopoh nanti menyesal ',
'Kayu bakar dibuat arang Arang dibakar memanaskan diri Jangan mudah menyalahkan orang Cermin muka lihat sendiri ',
'Lepas di jemur baju dilipat Disimpan dalam almari lama Jangan kita tinggalkan sholat Karena sholat tiang agama',
'Ke restoran membeli makan Perginya bersama sang istri Perintah Tuhan ayo kerjakan Larangan Tuhan ayo jauhi',
'Pulau Sumatra pulau Kalimantan Pulau Bali pulau Sumba Shalat lima waktu ayo tegakkan Tiang agama nan utama',
'Membeli beras ke Mang Duloh Membeli semen ke Mang Omat Iman dan takwa kepada Allah Kunci bahagia dunia akhirat',
'Beli bensin satu tangki Bensi dibeli oleh Mak Rosa Bersihkan hati dari dengki Sucikan raga dari dosa'
]