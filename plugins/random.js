import fetch from "node-fetch";

let handler = async (m, { conn, command }) => {
    let apiUrl = `https://aemt.me/${command}`
    let buffer = await fetch(apiUrl)
        .then(res => res.buffer())
        .catch(async (err) => {
            console.log(`API request failed with error: ${err}`)
            // Handle the error as needed
        })
    if (buffer) {
        conn.sendFile(m.chat, buffer, 'hasil.jpg', `Random ${command}`, m)
    } else {
m.reply('Ups terjadi error');
    }
}

handler.help = handler.command = ['china','vietnam','thailand','indonesia','korea','japan','malaysia']
handler.tags = ['asupan']

export default handler