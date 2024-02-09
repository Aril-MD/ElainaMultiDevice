let handler = async (m, { conn }) => {
  let werewolf = global.db.data.werewolf || {}
  if (typeof werewolf.players == "undefined" || Object.keys(werewolf.players).length == 0) {
    conn.reply(m.chat, "There are no players in this game", m)
    return
  }
  let players = Object.keys(werewolf.players)
  let villagerCount = 0
  let wolfCount = 0
  let playerList = ""
  for (let i = 0; i < players.length; i++) {
    let player = players[i]
    let role = werewolf.players[player]
    if (role == "villager") {
      villagerCount++
    } else if (role == "werewolf") { // mengganti wolf menjadi werewolf agar dapat lebih mudah dibaca
      wolfCount++
    }
    let playerName = conn.getName(player) // mengambil nama pengguna dengan menggunakan fungsi getName
    playerList += `${i + 1}. ${playerName} (@${player.split("@")[0]})\n` // mengubah format penomoran dan mengganti tanda ` dengan $
  }
  conn.reply(m.chat, `There are ${players.length} players in this game, including ${villagerCount} villagers and ${wolfCount} werewolves:\n\n${playerList}`, m) // mengubah format pesan agar lebih mudah dibaca
}

handler.help = ['wwplayer']
handler.tags = ['game']
handler.command = /^wwplayer$/i
handler.owner = false
handler.mods = false
handler.premium = false

export default handler