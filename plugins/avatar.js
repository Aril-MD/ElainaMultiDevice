import fetch from 'node-fetch';
let handler = async (m, { conn, args, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.sender, 'image').catch((_) => "https://telegra.ph/file/1ecdb5a0aee62ef17d7fc.jpg");
    m.reply(wait);
    let url = `https://zeltoria.site/api/random/icon`;
    conn.sendFile(m.chat, url, "", "*🔖 AVATAR FOR YOUR PROFILE*", m, null, {
  fileLength: '1000000',
  contextInfo: {
    externalAdReply: {
      showAdAttribution: true,
      mediaUrl: sgc,
      mediaType: 2,
      description: wm,
      title: '[' + ucapan + ']' + 'Join biar dapet terbaru seputar elaina-ai',
      body: botdate,
      thumbnail: await (await fetch (pp)).buffer(),
      sourceUrl: sgc
    }
  }
});
}
handler.help = ['avatar']
handler.tags = ['anime']
handler.command = /^(avatar)$/i
handler.limit = true;

export default handler
