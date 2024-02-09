let handler = async (m) => {
let kontol = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 99999, status: 1, thumbnail: await conn.resize(await getBuffer(thumb),300,150), surface: 1, message: 'ʟ ɪ ᴍ ɪ ᴛ', orderTitle: wm, sellerJid: '0@s.whatsapp.net' } } }
let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    if (typeof db.data.users[who] == 'undefined') throw 'Pengguna tidak ada didalam data base'
    let user = global.db.data.users[who]
    let limit = user.premiumTime >= 1 ? 'Unlimited' : user.limit    
let ah = `❏ *ᴜsᴇʀɴᴀᴍᴇ:* ${user.registered ? user.name : conn.getName(who)}
▧ *sᴛᴀᴛᴜs:*  ${who.split`@`[0] == global.nomorwa ? '🎗️Developer🎗️' : user.premiumTime >= 1 ? '👑ℙ𝕣𝕖𝕞𝕚𝕦𝕞👑' : user.level >= 1000 ? 'ᴇʟɪᴛᴇ ᴜsᴇʀ' : 'Free User'}
▧ *ʟɪᴍɪᴛ:* ${limit}`
conn.sendMessage(m.chat, {
text: ah,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
body: 'E L A I N A  M U L T I D E V I C E',
thumbnailUrl: 'https://telegra.ph/file/abd7e131fe4585217b52d.jpg',
sourceUrl: "https://whatsapp.com/channel/0029VaJMOH7CHDyls9qnPm25",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: kontol})
}
handler.help = ['limit [@user]']
handler.tags = ['main']
handler.command = /^(limit)$/i
export default handler