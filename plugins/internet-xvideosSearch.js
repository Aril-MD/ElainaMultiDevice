import api from 'api-dylux'
let pp = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=gempa'
async function handler(m, { conn, text }) {
if (!text) throw 'masukan text contoh sex brutal 🗿\n\ncara download ketik xvideosdl link'
api.xvideosSearch(text)
.then(res => {
var da = res.map(data => `${htki} *SEARCH +18* ${htka}

title: ${data.title}
duration: ${data.duration}
quality: ${data.quality}
url: ${data.url}\n`).join('\n');
conn.sendFile(m.chat, pp, 'image.jpg', da, m);
})
.catch(err => {
console.error(err);
conn.reply(m.chat, 'Terjadi kesalahan saat pencarian.', m);
});
}


handler.help = ['xvideosSearch'].map(v => v + ' <text>')
handler.tags = ['internet'];
handler.command = /^(xvideosSearch|xsr)$/i
handler.premium = true
export default handler;