let handler = async (m, { conn }) => {
  let werewolf = global.db.data.werewolf || {}
  if (typeof werewolf.status == "undefined" || werewolf.status != "playing") {
    conn.reply(m.chat, "Werewolf game is not in progress", m)
    return
  }
  if (typeof werewolf.players[m.sender] != "undefined") {
    conn.reply(m.chat, "You have already joined the game", m)
    return
  }
  werewolf.players[m.sender] = "villager"
  werewolf.villagers.push(m.sender)
  global.db.data.werewolf = werewolf
  conn.reply(m.sender, "You have joined the game as a villager", m)
}
handler.help = ['wwjoin']
handler.tags = ['game']
handler.command = /^wwjoin$/i
handler.owner = false
handler.mods = false
handler.premium = false

export default handler