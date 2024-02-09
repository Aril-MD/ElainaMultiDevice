import axios from 'axios';
import { apivisit } from './kanghit.js';

let handler = async (m, { conn, text, usedPrefix: _p }) => {
  if (!text) throw `Masukkan ID anime!`;
  let res = (await axios.get(API('can', '/api/anime/nekopoi/detail', { id: text }))).data;
  try {
    let v = res.stream;
    let cap = `*Judul:* ${res.title}\n*ID:* ${res.id || '-'}\n*Tanggal:* ${res.date || '-'}\n*Deskripsi:* ${res.series.content || 'Tidak diketahui'}\n\n`;
    for (let x of v) {
      cap += `*Link:* ${x.link || '-'}\n`;
      cap += '\n';
    }
    await conn.sendFile(m.chat, res.image || res.series.image, 'nekopoi.jpg', cap, m);
    await apivisit();
  } catch {
    let v = res.info_meta;
    let arr = [];
    let tekss = res.episode && Array.isArray(res.episode)
      ? res.episode.map(v => `${v.title}\nUpload: ${v.date || 'Tidak diketahui'} || ID: ${v.id}`).filter(v => v).join('\n\n')
      : '';
    await m.reply(`*Judul:* ${res.title}\n*ID:* ${res.id || '-'}\n*Tanggal:* ${res.date || '-'}\n*Judul Jepang:* ${v && v.aliases || '-'}\n*Skor:* ${v && v.skor || '-'}\n*Produser:* ${v && v.produser || '-'}\n*Status:* ${v && v.status || '-'}\n*Total Episode:* ${v && v.episode || '-'}\n*Durasi:* ${v && v.durasi || '-'}\n*Tanggal Rilis:* ${v && v.tayang || '-'}\n*Genre:* ${v && v.genre || '-'}\n\n\n${tekss}`);
    await apivisit();
  }
};

handler.help = ['nekopoidl <id>'];
handler.tags = ['tools'];
handler.command = /^(nekodl|nekopoidl)$/i;

export default handler;