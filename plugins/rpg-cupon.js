let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    if (typeof global.db.data.users[who] == 'undefined') throw 'Pengguna tidak ada didalam data base'
    m.reply(`${global.db.data.users[who].cupon} Your cupon\nCupon ini adalah sebuah hadiah dari owner\n\nCara menggunakan:\n/open cupon 1`)
}
handler.help = ['cupon [@user]']
handler.tags = ['xp']
handler.command = /^(cupon)$/i
handler.limit = true

export default handler
