let handler = async (m, { conn, args, usedPrefix, command, isOwner }) => {
const sender = m.key.fromMe ? (conn.user.id.split(':')[0]+'@s.whatsapp.net' || conn.user.id) : (m.key.participant || m.key.remoteJid)
const owned = `6283181666350@s.whatsapp.net`
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *ʟɪsᴛ - ᴘᴀɴᴇʟ* )▭▬▭

┏━━━━━━━━━━━━━━━━━━━━━━━
┣ *ʀᴀᴍ 𝟷ɢʙ/ ᴅɪsᴋ 𝟷ɢʙ/ᴄᴘᴜ 𝟹𝟶%*
┃◦ ʀᴘ: 𝟷.𝟶𝟶𝟶
┣ *ʀᴀᴍ 𝟸ɢʙ/ᴅɪsᴋ 𝟸ɢʙ/ᴄᴘᴜ 𝟼𝟶%*
┃◦ ʀᴘ: 𝟸.𝟶𝟶𝟶
┣ *ʀᴀᴍ 𝟹ɢʙ/ᴅɪsᴋ 𝟹ɢʙ/ᴄᴘᴜ 𝟿𝟶%*
┃◦ ʀᴘ: 𝟹.𝟶𝟶𝟶
┣ *ʀᴀᴍ 𝟺ɢʙ/ᴅɪsᴋ 𝟺ɢʙ/ᴄᴘᴜ 𝟷𝟸𝟶%*
┃◦ ʀᴘ: 𝟺.𝟶𝟶𝟶
┣ *ʀᴀᴍ 𝟺ɢʙ/ᴅɪsᴋ 𝟻ɢʙ/ᴄᴘᴜ 𝟷𝟻𝟶%*
┃◦ ʀᴘ: 𝟻.𝟶𝟶𝟶
┣ *ʀᴀᴍ 𝟼ɢʙ/ᴅɪsᴋ 𝟼ɢʙ/ᴄᴘᴜ 𝟷𝟿𝟶%*
┃◦ ʀᴘ: 𝟼.𝟶𝟶𝟶
┣ *ʀᴀᴍ 𝟽ɢʙ/ᴅɪsᴋ 𝟽ɢʙ/ᴄᴘᴜ 𝟸𝟸𝟶%*
┃◦ ʀᴘ: 𝟽.𝟶𝟶𝟶
┣ *ʀᴀᴍ 𝟾ɢʙ/ᴅɪsᴋ 𝟾ɢʙ/ᴄᴘᴜ 𝟸𝟻𝟶%*
┃◦ ʀᴘ: 𝟾.𝟶𝟶𝟶
┣ *ʀᴀᴍ 𝟿ɢʙ/ᴅɪsᴋ 𝟿ɢʙ/ᴄᴘᴜ 𝟸𝟾𝟶%*
┃◦ ʀᴘ: 𝟿.𝟶𝟶𝟶
┣ *ʀᴀᴍ 𝟷𝟶ɢʙ/ᴅɪsᴋ 𝟷𝟶ɢʙ/ᴄᴘᴜ 𝟹𝟷𝟶%*
┃◦ ʀᴘ: 𝟷𝟶.𝟶𝟶𝟶
┣ *ʀᴀᴍ ᴜɴʟɪ/ᴅɪsᴋ ᴜɴʟɪ/ᴄᴘᴜ ᴜɴʟɪ*
┃◦ ʀᴘ: 𝟷𝟸.𝟶𝟶𝟶
┗━━━━━━━━━━━━━━━━━━━━━━━
• ᴍɪɴᴀᴛ ʙᴜʏ? ᴄʜᴀᴛ : ${global.nomorown}
• ᴘᴏᴡᴇʀᴇᴅ ʙʏ *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
await conn.relayMessage(m.chat,  {
                        scheduledCallCreationMessage: {
                           callType: "AUDIO",
                           scheduledTimestampMs: 1200,
                           title: text12
                        }
                    }, {})
                }
handler.help = ['listpanel']
handler.tags = ['listpanel']
handler.command = /^(listpanel|panel)$/i

export default handler
