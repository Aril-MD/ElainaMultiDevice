import fs from 'fs';
import fetch from 'node-fetch';
let handler = async (m, { conn }) => { 

         let caption = `*Mʏ Gᴄ Oғғɪᴄɪᴀʟ*`;
  conn.reply(m.chat, caption, m, {
      contextInfo: {
        externalAdReply: {
          title: "E L A I N A  M U L T I D E V I C E",
          thumbnailUrl: 'https://telegra.ph/file/6890ee54916c4de72bf0e.jpg',
          sourceUrl: sgc,
          mediaType: 1,
          renderLargerThumbnail: true, 
          showAdAttribution: true
        }
      }
    });
 }
 handler.help = ['gcbot', 'gcelaina'];
handler.tags = ['main'];
handler.command = /^(gcbot|groupbot|botgc|botgroup|gcelaina|groupelaina)$/i;
export default handler;