import { sticker } from '../lib/sticker.js'
import axios from 'axios'

let handler = async (m, {
    conn,
    args,
    usedPrefix,
    command
}) => {
let text
    if (args.length >= 1) {
        text = args.slice(0).join(" ")
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text
    } else throw "*Example*: .qc how to make bots"
   if (!text) return m.reply('enter text')
   if (text.length > 10000) return m.reply('Max 50 Texts!')
   conn.sendMessage(m.chat, { react: { text: '🍃', key: m.key }})
   try {
    let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://i.ibb.co/3Fh9V6p/avatar-contact.png')

   const obj = {
      "type": "quote",
      "format": "png",
      "backgroundColor": "#FFFFFF",
      "width": 512,
      "height": 768,
      "scale": 2,
      "messages": [{
         "entities": [],
         "avatar": true,
         "from": {
            "id": 1,
            "name": m.name,
            "photo": {
               "url": pp
            }
         },
         "text": text,
         "replyMessage": {}
      }]
   }
   const json = await axios.post('https://quote-api.neoxr.eu/generate', obj, {
      headers: {
         'Content-Type': 'application/json'
      }
   })
   const buffer = Buffer.from(json.data.result.image, 'base64')
   let stiker = await sticker(buffer, false, global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'Quotly.webp', '', m)
    } catch (error) {
    console.log(error)
    m.reply("Error Kak")
  }
}

handler.help = ['qc']
handler.tags = ['tools']
handler.command = /^(qc|quotely)$/i

export default handler