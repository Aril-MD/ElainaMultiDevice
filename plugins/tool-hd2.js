// Kalo kode dibawah ini gak bisa dipake, pake kode dibawahnya, hilangin //

// kode 1

import sharp from 'sharp';

let handler = async (m, { conn, usedPrefix, command }) => {
  let q = m.quoted;
  if (!q) {
    return m.reply(`*[ ⚠️ ] Usage*\n${usedPrefix + command} <reply to an image>\n\n*Xnuvers007 🍁*`);
  }

  let mime = (q.msg || q).mimetype || '';

  if (!mime.startsWith('image/')) {
    return m.reply(`*[ ⚠️ ] Usage*\n${usedPrefix + command} <reply to an image>\n\n*Xnuvers007 🍁*`);
  }
  try {
    // Download gambar
    let media = await q.download();
    console.log('Media downloaded successfully.');

    // memuat gambar dengan sharp
    const image = sharp(media);

    // mendapatkan metadata gambar
    const metadata = await image.metadata();

    // naikin dimensi
    const newWidth = metadata.width * 4;
    const newHeight = metadata.height * 4;

    image.resize(newWidth, newHeight);

    // effect to enhance sharpness
    image.sharpen();

    // JPEG format with 80% quality
    const buffer = await image.jpeg({ quality: 80 }).toBuffer();

    // Send the enhanced image as a file with the caption "Ini Foto HD nya kak"
    conn.sendFile(m.chat, buffer, 'enhanced_image.jpg', 'Ini Foto HD nya kak', m);
    console.log('Enhanced image sent to user.');
  } catch (error) {
    console.error('Error in enhancing:', error);
    m.reply('Failed to enhance the image.');
  }
};

handler.help = ['hade <reply to an image>'];
handler.tags = ['tools'];
handler.command = /^(hade|hd2|jernih2)$/i;

export default handler;

// Kode 2

// import fs from 'fs';
// import Jimp from 'jimp';

// let handler = async (m, { conn, usedPrefix, command, text }) => {
//   let q = m.quoted ? m.quoted : m;
//   let mime = (q.msg || q).mimetype || '';
//   if (!mime.startsWith('image/')) {
//     return m.reply(`*[ ⚠️ ] Usage*\n${usedPrefix + command}hd <balas imagenya>\n\n*Xnuvers007 🍁*`);
//   }

//   try {
//     // ngunduh gambarnya
//     let media = await q.download();
//     console.log('Media downloaded successfully.');

//     // loading gambar dengan jimp
//     const image = await Jimp.read(media);

//     // jadiin 4 kali lipat dari foto original sebelumnya
//     const newWidth = image.bitmap.width * 4;
//     const newHeight = image.bitmap.height * 4;

//     image.resize(newWidth, newHeight);

//     const buffer = await image.getBufferAsync(Jimp.MIME_JPEG);

//     // Kirim gambar yang telah disempurnakan sebagai sebuah file dengan keterangan "Ini Foto HD nya kak"
//     conn.sendFile(m.chat, buffer, 'enhanced_image.jpg', 'Ini Foto HD nya kak', m);
//     console.log('Upscaled image sent to user.');
//   } catch (error) {
//     console.error('Error in upscaling:', error);
//     m.reply('Failed to enhance the image.');
//   }
// };

// handler.help = ['hade <balas foto>'];
// handler.tags = ['tools'];
// handler.command = /^(hade|hd2|jernih2)?$/i;

// export default handler;
