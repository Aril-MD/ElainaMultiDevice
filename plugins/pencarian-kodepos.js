import fetch from 'node-fetch';

let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Masukkan kota atau wilayah.\nContoh: *.kodepos medan';

  m.reply('Tunggu sebentar...');

  let kota = encodeURIComponent(args[0]);
  let apiUrl = `https://ll--lasdanon.repl.co/api/search/kodepos?q=${kota}&apikey=Onlasdan`;

  let res = await fetch(apiUrl);
  let json = await res.json();

  if (json.code === 200 && json.data.length > 0) {
    let result = json.data;
    let message = 'Hasil Pencarian Kode Pos:\n\n';
    for (let i = 0; i < result.length; i++) {
      let { province, regency, subdistrict, ward, postalcode } = result[i];
      message += `Provinsi: ${province}\nKabupaten/Kota: ${regency}\nKecamatan: ${subdistrict}\nKelurahan: ${ward}\nKode Pos: ${postalcode}\n\n`;
    }
    await conn.reply(m.chat, message, m);
  } else {
    throw 'Tidak ada hasil yang ditemukan';
  }
};

handler.help = ['kodepos'];
handler.tags = ['pencarian'];
handler.command = /^(kodepos)$/i;
handler.limit = true;

export default handler;