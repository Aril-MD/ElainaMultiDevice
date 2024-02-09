let handler = async (m, { conn }) => {
  let werewolf = global.db.data.werewolf || {}
  if (typeof werewolf.status != "undefined" && werewolf.status == "playing") {
    conn.reply(m.chat, "Werewolf game is already in progress", m)
    return
  }
  werewolf.status = "playing"
  werewolf.players = {}
  werewolf.villagers = []
  werewolf.wolves = []
  werewolf.votes = {}
  global.db.data.werewolf = werewolf
  conn.reply(m.chat, "Werewolf game started. Please send '.wwjoin' to join the game", m)
}
handler.help = ['ww']
handler.tags = ['game']
handler.command = /^ww$/i
handler.owner = false
handler.mods = false
handler.premium = false

export default handler