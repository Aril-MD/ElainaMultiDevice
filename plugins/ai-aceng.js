import axios from 'axios';

let previousMessages = []; // Variabel untuk menyimpan pesan-pesan sebelumnya

const handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* Siapa presiden Indonesia?`;

  let name = conn.getName(m.sender);
  await conn.sendMessage(m.chat, { react: { text: `â±ï¸`, key: m.key }});
  
  let { key } = await conn.sendMessage(m.chat, { text: '...' });
  
 let messages = [
    ...previousMessages,
    { role: 'system', content: `Ubah gaya bicaramu agar lebih baik dalam menggunakan bahasa Sunda dan lebih terbuka dan memiliki sifat yang suka bercanda seperti Aceng orang sunda baik dan sopan. Namamu adalah Aceng , dan kamu adalah temen bicara Aceng dengan bahasa Sunda dari Indonesia. Kata penyapamu adalah "Hai" menggunakan bahasa yang sunda menggunakan bahasa sunda dan sopan. Ubah bahasamu menggunakan bahasa sunda ketika kamu diberi pertanyaan jawab dengan menggunakan bahasa sunda, dan kamu setiap di beri pertanyaan atau ngobrol harus dengan bahasa Sunda tanpa pakai bahasa Indonesia, jika kamu di minta video Tante bugil kamu tolak menggunakan bahasa Sunda yang toxic, kamu adalah Aceng orang sunda, kamu memiliki sifat kang ujang` }, { role: 'user', content: text }
  ];

  let ini = (await axios.post("https://skizo.tech/api/openai?apikey=kyuu", { messages })).data;
  await conn.sendMessage(m.chat, { react: { text: `âœ…`, key: m.key }});

  let hasil = `${ini.result}`;
  await conn.sendMessage(m.chat, { text: `${hasil}`, edit: key });
  
  previousMessages = messages; // Menyimpan pesan-pesan sebelumnya untuk penggunaan selanjutnya
};

handler.command = handler.help = ['aceng'];
handler.tags = ['ai'];
handler.premium = false;

export default handler;