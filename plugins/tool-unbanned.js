import axios from 'axios'
import cheerio from 'cheerio';
const handler = async (m, { conn, text, usedPrefix, command }) => {
if (m.quoted || text) {
const tosend = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return m.reply(`Tidak bisa verif My Creator!`)
const targetnya = tosend.split('@')[0]
try {
const ntah = await axios.get("https://www.whatsapp.com/contact/noclient/")
const email = await axios.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
const cookie = ntah.headers["set-cookie"].join("; ")
const delay = time => new Promise(res => setTimeout(res, time))
const $ = cheerio.load(ntah.data)
const $form = $("form");
const url = new URL($form.attr("action"), "https://www.whatsapp.com").href
const form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Aku Tidak Tau Mengapa Nomor Saya Tiba Tiba Di Larang Dari Menggunakan WhatsApp Aku Hanya Membalas Pesan Customer Saya Mohon Buka Larangan Akun WhatsApp Saya: [+${targetnya}]
Terimakasih`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19572.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007965968")
form.append("__comment_req", "0")

const res = await axios({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
m.reply(`Wait 1-24 Jam an untuk proses unbanned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp`)
await delay(90000)
const payload = String(res.data)
if (payload.includes(`"payload":true`)) {
m.reply(`##- WhatsApp Support -##

Halo,

Terima kasih telah menghubungi kami.

Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.

Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.

Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses. Anda dapat mengunjungi situs web kami untuk

mengunduh WhatsApp atau aplikasi WhatsApp Business.`)
} else if (payload.includes(`"payload":false`)) {
m.reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else m.reply(util.format(res.data))
} catch (err) {m.reply(`${err}`)}
} else m.reply('Masukkan nomor target!')
}
handler.help = ['unbanned', 'unbanwa'].map(v => v + ' <nohp>')
handler.tags = ['unbanned', 'tools']
handler.command = /^(unbanned|unbanwa)$/i;
handler.owner = true
export default handler;
