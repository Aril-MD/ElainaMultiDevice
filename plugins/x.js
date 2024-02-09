import fetch from 'node-fetch';

let handler = async (m, { text, usedPrefix, command }) => {
  if (command === 'bjir on') {
    // Mengaktifkan chatbot
    conn.simi = true;
    console.log('Chatbot diaktifkan');
    return m.reply('Chatbot telah diaktifkan');
  } else if (command === 'simi off') {
    // Menonaktifkan chatbot
    conn.simi = false;
    console.log('Chatbot dinonaktifkan');
    return m.reply('Chatbot telah dinonaktifkan');
  }

  if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* Halo`;

  if (conn.simi) {
    const apii = await fetch(`https://api.lolhuman.xyz/api/simi?apikey=${global.lolkey}&text=${encodeURIComponent(text)}&badword=true`);
    const js = await apii.json();

    await m.reply(js.result);
  } else {
    return m.reply('Chatbot saat ini tidak aktif. Silakan aktifkan dengan menggunakan perintah *simi on*');
  }
}

handler.help = ['aielaina']
handler.tags = ['ai'];
handler.command = /^(aielaina)$/i;
handler.premium = false;

export default handler