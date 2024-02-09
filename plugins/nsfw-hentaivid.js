import fetch from 'node-fetch'

let handler = async(m, { conn, usedPrefix, command }) => {
    conn.chatRead(m.chat)
    conn.sendMessage(m.chat, {
        react: {
            text: '⏳',
            key: m.key
        }
    })

    let res = await fetch('https://raw.githubusercontent.com/AditPetani/khusus/main/AnimeHVID.json')
    let asup = await res.json()
    
    // Mengambil 1 elemen acak dari array asup
    let randomImages = []
    for (let i = 0; i < 1; i++) {
        let randomIndex = Math.floor(Math.random() * asup.length)
        randomImages.push(asup[randomIndex])
    }

    // Mengirim 1 gambar secara berurutan
    for (let i = 0; i < randomImages.length; i++) {
        conn.sendFile(m.chat, randomImages[i], '', 'Random Hentai 3D', m)
    }
}

handler.help = ['hentaivid']
handler.tags = ['nsfw']
handler.limit = false
handler.register = true
handler.premium = true
handler.vip = true
handler.command = /^(hentaivid)$/i

export default handler