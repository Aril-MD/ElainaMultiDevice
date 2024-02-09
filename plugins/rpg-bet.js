const items = [ 'money', 'chip', 'diamond', 'bank', 'emerald', 'gold' ]
let handler = async (m, { conn, args, usedPrefix, DevMode }) => {
    let user = global.db.data.users[m.sender]
    let item = items.filter(v => v in user && typeof user[v] == 'number')
    let type = (args[0] || '').toLowerCase()
    let count = (args[1] && number(parseInt(args[1])) ? Math.max(parseInt(args[1]), 1): /all/i.test(args[1]) ? Math.floor(parseInt(user[type])): 1) * 1
    if (!item.includes(type)) return m.reply(`*List Item:*\n${item.map(v => `${rpg.emoticon(v)}${v}`.trim()).join('\n')}\n\nExample:\n${usedPrefix}judi money 100000`)
    if ((user[type] * 1) < count) return m.reply(`*${type} ${rpg.emoticon(type)}* kamu tidak cukup!!`)
    let moneyDulu = user[type] * 1
    let txt = (m.msg && m.msg.selectedDisplayText ? m.msg.selectedDisplayText: m.text ? m.text: '').toLowerCase()
    try {
        let Bot = (Math.ceil(Math.random() * 91)) * 1
        let Kamu = (Math.floor(Math.random() * 71)) * 1
        let status = 'Kalah'
        if (Bot < Kamu) {
            user[type] += count * 1
            status = 'Menang'
        } else if (Bot > Kamu) {
            user[type] -= count * 1
        } else {
            status = 'Seri'
            user[type] += (Math.floor(count / 1.5)) * 1
        }
        m.reply(`
| *PLAYERS* | *POINT* |
*🤖 BOT:*      ${Bot}
*👤 KAMU:*    ${Kamu}

Kamu *${status}*, kamu ${status == 'Menang' ? `Mendapatkan *+${count * 2}*`: status == 'Kalah' ? `Kehilangan *-${count * 1}*`: `Mendapatkan *+${Math.floor(count / 1.5)}*`} *${type} ${rpg.emoticon(type)}*
`.trim())
    } catch (e) {
        if (moneyDulu > (user[type] * 1)) user[type] = moneyDulu * 1
        m.reply('Error saat melakukan judi (Rejected)')
    }
}

handler.help = ['judi [jumlah]']
handler.tags = ['rpg']
handler.command = /^(judi|bet)$/i
handler.register = true
handler.group = true
handler.rpg = true
export default handler

/*
 * Detect if thats number
 * @param {Number} x 
 * @returns Boolean
 */
function number(x = 0) {
    x = parseInt(x)
    return !isNaN(x) && typeof x == 'number'
}