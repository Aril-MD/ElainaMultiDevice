let handler = async(m, { conn }) => {
let pc = Object.entries(await conn.chats)
let niorg = pc.filter(([jid]) => jid.endsWith('@s.whatsapp.net'))
let thumbListpc = `https://telegra.ph/file/d5a1cc2ab8af9bf5acf83.jpg`
let txt = ''
    for (let [jid] of niorg)
txt += `${htjava} ${await conn.getName(jid)}\n${'@' + jid.replace(/@.+/, '')}\n\n`
return conn.reply(m.chat, htki + ' *CHAT PRIVATE* ' + htka + '\n' + '*Total:* ' + niorg.length + '\n\n' + txt.trim(), m, { mentions: conn.parseMention(txt) })
}
handler.help = ['listpc']
handler.tags = ['owner']
handler.command = /^listpc|pclist|daftarpc$/i
handler.owner = true

export default handler 