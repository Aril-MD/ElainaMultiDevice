import fetch from "node-fetch"
let handler = async (m, usedPrefix, command) => {
 let g = await fetch(`https://raw.githubusercontent.com/inirey/RESTAPI/master/data/aesthetic.json`)
let f = await g.json()
let a = f[Math.floor(Math.random() * f.length)]
conn.sendFile(m.chat, a, 'wpaesthetic.jpg', 'Wallpaper Aesthetic', m)
}
handler.help = ['wpaesthetic']
handler.tags = ['image']
handler.command = /^wpaesthetic$/i
handler.limit = true
export default handler 
