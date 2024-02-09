import fetch from 'node-fetch'
import { pickRandom } from '../lib/other-function.js'
let handler = async (m, { conn, usedPrefix }) => {
let cecan = pickRandom(global.cecan)
    conn.sendFile(m.chat, cecan, '', "Random Cecan", m, null, {
                mentions: conn.parseMention("Random cecan")})
}
handler.help = handler.command = ['cecan']
handler.tags = ['asupan']

export default handler