let handler = async (m, { conn }) => {
    conn.emailotp = conn.emailotp ? conn.emailotp : {}
    let id = m.chat
    if (!(id in conn.emailotp)) throw false
    let json = conn.emailotp[id][1]
    conn.reply(m.chat, '```' + json.jawaban.replace(/[AIUEOaiueo]/ig, '_') + '```', m)
}
handler.command = /^hotp$/i

handler.limit = true

export default handler