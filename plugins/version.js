import fs from 'fs';
let handler = async (m, { conn }) => {
  conn.reply(m.chat, `${namebot} ᴠᴇʀsɪᴏɴ: *${global.version}*`, m, {
    contextInfo: {
      externalAdReply: {
      showAdAttribution: true,
        body: `ʙᴏᴛ ᴠᴇʀsɪᴏɴ ${global.version}`,
        thumbnailUrl: `${global.elaina}`,
        sourceUrl: sid,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  });
};

handler.command = ['version','versi'];
handler.help = ['version'];
handler.tags = ['info'];

export default handler;
