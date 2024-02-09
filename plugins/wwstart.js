let handler = async (m, { conn }) => {
  let werewolf = global.db.data.werewolf || {}
  if (typeof werewolf.status == "undefined" || werewolf.status != "playing") {
    conn.reply(m.chat, "Werewolf game is not in progress", m)
    return
  }
  if (Object.keys(werewolf.players).length < 5) {
    conn.reply(m.chat, "At least 5 players are required to start the game", m)
    return
  }
  let players = Object.keys(werewolf.players)
  let wolves = []
  while (wolves.length < Math.ceil(players.length / 3)) {
    let wolf = players[Math.floor(Math.random() * players.length)]
    if (werewolf.players[wolf] == "villager") {
      werewolf.players[wolf] = "wolf"
      werewolf.wolves.push(wolf)
      wolves.push(wolf)
    }
  }
  global.db.data.werewolf = werewolf
  conn.reply(m.chat, "Werewolf game started. There are " + players.length + " players, including " + werewolf.wolves.length + " wolves. Please send '.wwvote' to vote for a player", m)
}
handler.help = ['wwstart']
handler.tags = ['game']
handler.command = /^wwstart$/i
handler.owner = false
handler.mods = false
handler.premium = false

export default handler