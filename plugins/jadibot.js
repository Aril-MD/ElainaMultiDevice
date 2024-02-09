let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  const caption = `
*❏––––––『 JADIBOT 』––––––❏*

👑ELAINA MELAYANI👑
-----------------------------------------------------------------
JASA JADIBOT : 15K
JASA UNBAN : 3K
MURID UNBAN : 5K
Payment ? Dana/QRIS

Own Contact : https://wa.me/6282220427314


        ☣ *ELAINA* ☣

`.trim()
  conn.sendFile(m.chat, 'https://telegra.ph/file/6890ee54916c4de72bf0e.jpg', null, caption, m)
}
handler.help = ['jadibot']
handler.tags = ['jadibot']
handler.command = /^(jadibot)$/i;

handler.register = false
export default handler