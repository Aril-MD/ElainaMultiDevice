let handler = async (m, { conn }) => {
  let werewolf = global.db.data.werewolf || {}
  if (typeof werewolf.status == "undefined" || werewolf.status != "playing") {
    conn.reply(m.chat, "Werewolf game is not in progress", m)
    return
  }
  if (typeof werewolf.players[m.sender] == "undefined") {
    conn.reply(m.chat, "You are not a participant in this game", m)
    return
  }
  delete werewolf.players[m.sender]
  let index = werewolf.villagers.indexOf(m.sender)
  if (index >= 0) {
    werewolf.villagers.splice(index, 1)
  }
  index = werewolf.wolves.indexOf(m.sender)
  if (index >= 0) {
    werewolf.wolves.splice(index, 1)
  }
  global.db.data.werewolf = werewolf
  conn.reply(m.chat, "You have left the game", m)
}
handler.help = ['wwleft']
handler.tags = ['game']
handler.command = /^wwleft$/i
handler.owner = false
handler.mods = false
handler.premium = false

export default handler