import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `uhm.. cari apa?\n\ncontoh:\n${usedPrefix + command} mabar`
    let f = await fetch(API('lol', '/api/groupwhatsapp2', { query: text }, 'apikey'))
    let xx = await f.json()
    let v = xx.result
    let teks = v.map(v => {
        return `
🪀 *Nama Group* : ${v.title}
📎 *Link Group :* ${v.link}
`.trim()
    }).filter(v => v).join('\n\n\n')
    m.reply('▣═━–〈 *SEARCH* 〉–━═▣\n\n' + teks)
}
handler.help = ['gcwa']
handler.tags = ['tools']
handler.command = /^groupwa|gcwa$/i
handler.limit = true
export default handler