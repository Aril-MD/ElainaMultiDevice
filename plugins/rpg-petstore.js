let handler = async (m, { conn, command, text, usedPrefix }) => {
  const petInfo = `
      🐈 • CAT: 2 pet token
      🐕 • DOG: 2 pet token
      🐎 • HORSE: 4 pet token
      🦊 • FOX: 6 pet token

    🍖 • PET FOOD: 950 money
  `
  const petStore = `
    *PET STORE*
    🐈 • CAT
    🐕 • DOG
    🐎 • HORSE
    🦊 • FOX
    🍖 • PETFOOD

    ${usedPrefix}petshop <petname>
    ${usedPrefix}feed <petname>
  `

  try {
    if (/^petshop$/i.test(command)) {
      return conn.reply(m.chat, petStore, m)
    } else if (/^(cat|dog|fox|horse|petfood)$/i.test(command)) {
      if (/cat|dog|fox|horse/i.test(command)) {
        let petname = command.toLowerCase()
        if (global.db.data.users[m.sender][petname] > 0) {
          return m.reply(`🐾 Kamu sudah punya *${petname}*`)
        }
        let cost = {
          cat: 2,
          dog: 2,
          horse: 4,
          fox: 6
        }[petname]
        if (global.db.data.users[m.sender].pet < cost) {
          return m.reply(`🪙 Kamu butuh ${cost} pet token`)
        }
        global.db.data.users[m.sender].pet -= cost
        global.db.data.users[m.sender][petname] += 1
        return m.reply(`🛍️ Sukses membeli *${petname}*`)
      } else if (/^petfood/i.test(command)) {
        let count = text ? parseInt(text.trim()) : 1
        if (isNaN(count)) {
          return m.reply(`Gunakan perintah ${usedPrefix}petshop <pet> atau ${usedPrefix}feed <pet>`)
        }
        if (global.db.data.users[m.sender].money < count * 950) {
          return m.reply("💰 Uangmu Tidak Cukup")
        }
        global.db.data.users[m.sender].money -= count * 950
        global.db.data.users[m.sender].petFood += count
        m.reply("*🧊 Success!* Kamu baru saja membeli * " + count + " * pet food.")
      }
    } else if (/^feed$/i.test(command)) {
      let petname = text.toLowerCase()
      if (!/cat|dog|fox|horse/i.test(petname) || !global.db.data.users[m.sender][petname]) {
        return m.reply(`❌ Hewan peliharaanmu tidak terdaftar.`)
      }
      if (global.db.data.users[m.sender].petFood < 1) {
        return m.reply(`🍖 Kamu perlukan petfood`)
      }
      global.db.data.users[m.sender].petFood -= 1
      let exp = Math.ceil(Math.random() * 100)
      global.db.data.users[m.sender].exp += exp
      m.reply(`🍗 Hewan peliharaanmu sangat senang, exp +${exp}`)
    } else {
      return conn.reply(m.chat, petInfo.trim() + '\n\nKamu memiliki:\n' + Object.entries(global.db.data.users[m.sender]).filter(([key]) => /^[a-z]{3,4}$/.test(key)).map(([key, value]) => `${key}: ${value}`).join('\n'), m)
    }
  } catch (err) {
    m.reply(err.message)
    console.error(err)
  }
}
handler.help = ['petshop', 'cat', 'dog', 'fox', 'horse', 'feed', 'petfood']
handler.tags = ['rpg']
handler.command = /^(petshop|cat|dog|fox|horse|feed|petfood)$/i
handler.owner = false
handler.mods = false
handler.register = true
handler.limit = true

export default handler 
