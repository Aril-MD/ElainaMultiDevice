
let buatall = 1
let handler = async (m, { conn, args, usedPrefix, DevMode }) => {
    let imgr = flaaa.getRandom()
    conn.casino = conn.casino ? conn.casino : {}
    if (m.chat in conn.casino) return conn.reply(m.chat, 'Masih ada yang melakukan casino disini, tunggu sampai selesai!!', m)
    else conn.casino[m.chat] = true
    try {
        let randomaku = `${Math.floor(Math.random() * 101)}`.trim()
        let randomkamu = `${Math.floor(Math.random() * 81)}`.trim()
        let Aku = (randomaku * 1)
        let Kamu = (randomkamu * 1)
        let count = args[0]
        count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / buatall) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
        count = Math.max(1, count)
        if (args.length < 1) return conn.reply(m.chat, `${usedPrefix}casino <jumlah>\n ${usedPrefix}casino 1000`, m)
        if (global.db.data.users[m.sender].exp >= count * 1) {
            global.db.data.users[m.sender].exp -= count * 1
            if (Aku > Kamu) {
                let caption = `💰 *C A S I N O* 💰
                
${htjava} *@${m.sender.split("@")[0]}* - [USER]
┗┅⭑ ${Kamu} Point

${htjava} *@${nomorbot.split("@")[0]}* - [BOT]
┗┅⭑ ${Aku} Point

❌ *LOSE* ❌
Kamu kehilangan ${count} Uang(xp)`.trim()
                conn.sendFile(m.chat, imgr + 'LOSE', 'casino.mp3', caption, m)
            } else if (Aku < Kamu) {
                let caption = `💰 *C A S I N O* 💰
                
${htjava} *@${m.sender.split("@")[0]}* - [USER]
┗┅⭑ ${Kamu} Point

${htjava} *@${nomorbot.split("@")[0]}* - [BOT]
┗┅⭑ ${Aku} Point

🎉 *WIN* 🎉
Kamu mendapatkan ${count * 2} Uang(xp)`.trim()
                conn.sendFile(m.chat, imgr + 'WIN', 'casino.mp3', caption, m)
            } else {
                let caption = `💰 *C A S I N O* 💰
                
${htjava} *@${m.sender.split("@")[0]}* - [USER]
┗┅⭑ ${Kamu} Point

${htjava} *@${nomorbot.split("@")[0]}* - [BOT]
┗┅⭑ ${Aku} Point

🔖*DRAW* 🔖
Kamu mendapatkan ${count * 1} Uang(xp)`.trim()
                conn.sendFile(m.chat, imgr + 'DRAW', 'casino.mp3', caption, m)
            }
        } else {
            conn.reply(m.chat, `Uang(xp) kamu tidak mencukupi untuk Casino silahkan *.claim* terlebih dahulu!`.trim(), m)
        }
    } catch (e) {
        console.log(e)
        conn.reply(m.chat, 'Error!!', m)
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.reply(jid, `casino.js error\nNo: *${m.sender.split`@`[0]}*\nCommand: *${m.text}*\n\n*${e}*`, m)       
            }
        }
    } finally {
        delete conn.casino[m.chat]
    }
}

handler.help = ['casino <jumlah>']
handler.tags = ['rpg']
handler.command = /^(casino|csn)$/i
handler.group = true

export default handler 

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
