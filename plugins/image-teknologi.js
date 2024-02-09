import fetch from "node-fetch"
let handler = async (m, usedPrefix, command) => {
 let g = await fetch(`https://raw.githubusercontent.com/inirey/RESTAPI/master/data/Technology.json`)
let f = await g.json()
let a = f[Math.floor(Math.random() * f.length)]
conn.sendFile(m.chat, a, 'wpgame.jpg', 'Wallpaper technology', m)
}
handler.help = ['wptechnogy']
handler.tags = ['internet']
handler.command = /^wptechnology$/i
handler.limit = true
export default handler 
