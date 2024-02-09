import fs from 'fs'

let handler = async (m, { conn }) => {
let ril = `⋄ sᴄʀɪᴘᴛ ᴇʟᴀɪɴᴀ ᴀɪ ⋄
⎙ sᴄʀɪᴘᴛ ɪɴɪ ғʀᴇᴇ
ɴᴏ ᴇɴᴄ

• ᴍɪɴᴀᴛ ᴄʜᴀᴛ : ${global.nomorown}
• ᴘᴏᴡᴇʀᴇᴅ ʙʏ *Aʀɪʟ*
`;

conn.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 35000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: ril,
contextInfo: {
externalAdReply: {
showAdAttribution: true
}}}}}}, {})
conn.sendFile(m.chat, `${aril.getRandom()}`, "script.mp3", null, m, true, { type: "audioMessage", ptt: true, });
};



handler.help = ['script', 'sc']
handler.tags = ['main']
handler.command = ['sc', 'script'] 

export default handler

const aril = [
"./vn/sc.mp3",
"./vn/sc1.mp3",
"./vn/sc2.mp3",
"./vn/sc3.mp3"
]