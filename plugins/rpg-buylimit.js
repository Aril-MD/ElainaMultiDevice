const moneyperlimit = 30000
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^buy/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].money / moneyperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].money >= moneyperlimit * count) {
    global.db.data.users[m.sender].money -= moneyperlimit * count
    global.db.data.users[m.sender].limit += count
    conn.reply(m.chat, `-${moneyperlimit * count} Money\n+ ${count} Limit`, m)
  } else conn.reply(m.chat, `Money tidak mencukupi untuk membeli ${count} limit`, m)
}
handler.help = ['buy <jumlah limit>', 'buyall']
handler.tags = ['xp']
handler.command = /^buy([0-9]+)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

export default handler 