let handler = async (m, { conn, participants, groupMetadata }) => {
let loadd = [
    "□□■■■■■■■■\n             𝟷𝟶٪",
    "■■□□■■■■■■\n             𝟹𝟶٪",
    "■■■■□□■■■■\n             𝟻𝟶٪",
    "■■■■■■□□■■\n             𝟾𝟶٪",
    "■■■■■■■■□□\n             𝟷𝟶𝟶٪",
    "ʟ ᴏ ᴀ ᴅ ɪ ɴ ɢ  ᴄ ᴏ ᴍ ᴘ ʟ ᴇ ᴛ ᴇ. . ."
  ]

let { key } = await conn.sendMessage(m.chat, {text: 'ʟ ᴏ ᴀ ᴅ ɪ ɴ ɢ. . .'})//Pengalih isu

for (let i = 0; i < loadd.length; i++) {
  await new Promise(resolve => setTimeout(resolve, 250));
await conn.sendMessage(m.chat, {text: loadd[i], edit: key })}
    const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/avatar_contact.png'
    const { isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, delete: del } = global.db.data.chats[m.chat]
    const groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
    let text = `*「 Tag Admin 」*\n

*Group Admins:*
${listAdmin}
`.trim()
    conn.sendFile(m.chat, pp, 'pp.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}

handler.help = ['tagadmin', 'listadmin']
handler.tags = ['group']
handler.command = /^(tagadmin|listadmin)$/i

handler.group = true

export default handler