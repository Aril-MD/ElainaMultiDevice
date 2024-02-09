import axios from 'axios'

let handler = async (m, { conn, args, usedPrefix, command }) => {
    m.reply(wait);
    let url = `https://kiicodeofficial.my.id/api/sfw/${command}?apikey=Ceri`;
    let response = await axios.get(url, { responseType: 'arraybuffer' });
    conn.sendFile(m.chat, response.data, "", "", m);
}
handler.help = ['ayano','bocchi','chisato','ikuyo','kaguya','loli','rlas','takina','yotsuba','yumeko']
handler.command = /^(ayano|bocchi|chisato|ikuyo|kaguya|loli|rlas|takina|yotsuba|yumeko)$/i
handler.tags = ['random-anime2']
handler.limit = true;
export default handler;
