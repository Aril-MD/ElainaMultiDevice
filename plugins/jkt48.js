import fetch from 'node-fetch';
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
  let response = args.join(' ').split(' --');
  let query = "JKT48";
  let count = parseInt(response[0]);

  if (!count) {
    try {
      var tio = await fetch(`https://api.lolhuman.xyz/api/pinterest2?apikey=${global.lolkey}&query=${query}`);
      var p = await tio.json();
      let url = p.result[Math.floor(Math.random() * p.result.length)];
      conn.sendFile(m.chat, url, 'loliiiii.jpg', `*🔖R A N D O M   J K T 4 8*`, m);
    } catch (error) {
      console.log(error);
      conn.reply(m.chat, 'Terjadi kesalahan saat menjalankan perintah.', m);
    }
  } else {
    if (count > 10) {
      throw 'Jumlah gambar terlalu banyak! Maksimal 10 gambar.';
    }
    try {
      let url = `https://api.lolhuman.xyz/api/pinterest2?apikey=${global.lolkey}&query=${query}`;
      let res = await fetch(url);
      let data = await res.json();
  
      let images = data.result;
  
      for (let i = 0; i < count; i++) {
        let image = images[Math.floor(Math.random() * images.length)];
        setTimeout(() => {
          conn.sendFile(m.chat, image, '', `*🔖R A N D O M   J K T 4 8*`, m);
        }, i * 5000); // Delay setiap pengiriman gambar selama 1 detik (1000 milidetik)
      }
    } catch (error) {
      console.log(error);
      conn.reply(m.chat, 'Terjadi kesalahan saat menjalankan perintah.', m);
    }
  }
};

handler.help = ['jkt48 <pencarian> <jumlah Opsional>'];
handler.tags = ['tools','internet'];
handler.command = /^(jkt48)$/i;

export default handler