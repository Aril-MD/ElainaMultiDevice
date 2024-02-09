import fetch from "node-fetch"
let handler = async (m, usedPrefix, command) => {
 let g = await fetch(`https://raw.githubusercontent.com/inirey/RESTAPI/master/data/hekel.json`)
let f = await g.json()
let a = f[Math.floor(Math.random() * f.length)]
conn.sendFile(m.chat, a, 'hengkel.jpg', 'hacker', m)
}
handler.help = ['hacker']
handler.tags = ['image']
handler.command = /^hacker$/i
handler.limit = true
export default handler 
