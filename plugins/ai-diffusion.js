import fetch from "node-fetch"


let handler = async (m, { conn, isOwner, usedPrefix, command, text }) => {
if (!text) throw 'Example: .diffusion highly detailed, intricate, 4k, 8k, sharp focus, detailed hair, detailed'
m.reply(wait)
try {
conn.sendFile(m.chat, await(await fetch(`https://api.xyroinee.xyz/api/ai/stablediffusion?q=${text}&apikey=${global.xyro}`)).buffer(), 'anu.jpg', `Prompt: ${text}`, m)
    } catch (e) {
    conn.reply(m.chat, 'Yah Error 😞', m)
    throw e
  }
}
handler.help = ['diffusion']
handler.tags = ['ai']
handler.command = /^(stabledif|diffusion)$/i
handler.limit = true
export default handler