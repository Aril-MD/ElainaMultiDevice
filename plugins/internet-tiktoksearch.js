import fetch from 'node-fetch';

const handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Masukkan Text\n\nContoh:\n${usedPrefix + command} Akane kurokawa`;;
  const spas = "              ";
  const res = await fetch(`https://api.ikyy.my.id/tiktoksearch?text=${text}`);	
  const data = await res.json();
  const json = data.result[0];
  await conn.sendFile(m.chat, json.play, 'tiktok.mp4', `
${spas}*「 T I K T O K S E A R C H 」*

*📛Author:* ${json.author}
*📍Region:* ${json.region}
*🕐Durasi:* ${json.duration} detik
*🖇️Title:* ${json.title}

${titlebot}`, m);
  await conn.sendFile(m.chat, json.music, 'error.mp3', null, m, true);
};

handler.help = ['tiktoksearch'];
handler.command = /^(tiktoksearch|ttsearch|tiktoks|ttsr)$/i;
handler.tags = ['downloader'];
handler.limit = true;
handler.group = false;
handler.premium = false;
handler.owner = false;
handler.admin = false;
handler.botAdmin = false;
handler.fail = null;
handler.private = false;

export default handler;