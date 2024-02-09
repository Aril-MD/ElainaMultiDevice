
let handler = async (m, { conn, participants }) => {
  conn.level = global.db.data.users[m.sender]
  conn.fightnaga = conn.fightnaga ? conn.fightnaga : {}
  const delay = time => new Promise(res => setTimeout(res, time));

  if (typeof conn.fightnaga[m.sender] !== "undefined" && conn.fightnaga[m.sender] === true) {
    return m.reply(`Tidak bisa melakukan battle ⚔️ karena arena yang kamu miliki dipakai untuk fight pet mu yang lain.`);
  }

  let users = participants.map(u => u.id)
  let lawan = users[Math.floor(users.length * Math.random())]

  while (typeof global.db.data.users[lawan] === "undefined" || lawan === m.sender) {
    lawan = users[Math.floor(users.length * Math.random())]
  }

  let lamaPertarungan = acak(8, 20)
  m.reply(`Pet🐴 Kamu (centaur ${global.db.data.users[m.sender].centaur}) menantang 🐴centaurnya ${conn.getName(lawan)} (centaur ${global.db.data.users[lawan].centaur}) lagi berkelahi.\n\nTunggu ${lamaPertarungan} menit lagi dan lihat siapa yang menang🎮.`)

  conn.fightnaga[m.sender] = true
  await delay(1000 * 60 * lamaPertarungan)

  let kesempatan = []
  let alasanMenang = ["hebat", "pro", "ganas pet", "legenda pet", "sangat pro", "rajin ngasi makan pet"]
  let alasanKalah = ["naikin lagi levelnya😐", "cupu", "kurang hebat", "ampas petnya", "pet gembel"]
  for (i = 0; i < global.db.data.users[m.sender].centaur; i++) {
    kesempatan.push(m.sender)
  }

  for (i = 0; i < global.db.data.users[lawan].centaur; i++) {
    kesempatan.push(lawan)
  }

  let pointPemain = 0
  let pointLawan = 0

  for (i = 0; i < 10; i++) {
    let unggul = acak(0, kesempatan.length - 1)
    if (kesempatan[unggul] === m.sender) {
      pointPemain += 1
    } else {
      pointLawan += 1
    }
  }

  if (pointPemain > pointLawan) {
    let hadiah = (pointPemain - pointLawan) * 20000
    global.db.data.users[m.sender].money += hadiah
    global.db.data.users[m.sender].tiketcoin += 1
    m.reply(`*${conn.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${conn.getName(lawan)}*\n\nPet Kamu (centaur ${global.db.data.users[m.sender].centaur}) menang melawan 🐴centaurnya ${conn.getName(lawan)} (centaur ${global.db.data.users[lawan].centaur}) karena centaur🐴kamu ${alasanMenang[acak(0, alasanMenang.length - 1)]}\n\nHadiah RP. ${hadiah.toLocaleString()} dan +1 Tiketcoin`);
  } else if (pointPemain < pointLawan) {
    let denda = (pointLawan - pointPemain) * 100000
    global.db.data.users[m.sender].money -= denda
    global.db.data.users[m.sender].tiketcoin += 1
    m.reply(`*${conn.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${conn.getName(lawan)}*\n\nPet Kamu (centaur ${global.db.data.users[m.sender].centaur}) kalah melawan 🐴centaurnya ${conn.getName(lawan)} (centaur ${global.db.data.users[lawan].centaur}) karena pet kamu ${alasanKalah[acak(0, alasanKalah.length - 1)]}\n\nUangmu berkurang RP. ${denda.toLocaleString()} dan +1 Tiketcoin`);
  } else {
    m.reply(`*${conn.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${conn.getName(lawan)}*\n\nHasil imbang, kamu tidak mendapatkan apa-apa 😂`);
  }

  delete conn.fightnaga[m.sender];
}

handler.help = ["fightcentaur"];
handler.tags = ["game"];
handler.command = /^(fightcentaur)$/i;
handler.limit = true;
handler.group = true;

export default handler;

function acak(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}