import yts from 'yt-search';
import fs from 'fs';
let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*[❗INFORMASI❗] NOMBOR YANG ANDA CARI TIDAK DITEMUKAN, SILA MASUKKAN NOMBOR/TITULO YANG BETUL*\n\n*—◉ EJEMPLO:*\n*${usedPrefix + command} Masukkan judul video*`;
  try {
    let vids_ = {
      from: m.sender,
      urls: []
    };
    if (!global.videoList) {
      global.videoList = [];
    }
    if (global.videoList[0]?.from == m.sender) {
      delete global.videoList;
    }
    let results = await yts(text);
    let textoInfo = `*[❗] Anda dapat mengunduh video yang Anda inginkan dengan cara berikut:*
    ◉ ${usedPrefix}audio <nomor>
    ◉ ${usedPrefix}video <nomor>

    *—◉ Contoh:*
    *◉ ${usedPrefix}audio 5*
    *◉ ${usedPrefix}video 8*`.trim();
    let teks = results.all.map((v, i) => {
      let link = v.url;
      vids_.urls.push(link);
      return `[${i + 1}] ${v.title}
↳ 🫐 *_Link :_* ${v.url}
↳ 🕒 *_Durasi :_* ${v.timestamp}
↳ 📥 *_Diunggah :_* ${v.ago}
↳ 👁 *_Ditonton :_* ${v.views}`
    }).join('\n\n◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦\n\n');
    conn.sendFile(m.chat, results.all[0].thumbnail, 'yts.jpeg', textoInfo + '\n\n' + teks, m);
    global.videoList.push(vids_);
  } catch {
    await m.reply('*[❗INFORMASI❗] TERJADI KESALAHAN, SILA BERIKAN NOMOR YANG BENAR UNTUK KONSENTRASI VIDEO*');
  }
}
handler.help = ['playlist *<teks>*'];
handler.tags = ['search'];
handler.command = /^playlist|playlist2$/i;
export default handler;