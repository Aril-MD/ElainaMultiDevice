import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Nama Charanya?`
  try {
  let res = await fetch(`https://genshin-db-api.vercel.app/api/characters?query=${text}&queryLanguages=English&resultLanguage=English`)
  let anu = await res.json()
  let gi = anu
  let teks = `*Name:* ${gi.name}\n*Fullname:* ${gi.fullname}\n*Title:* ${gi.title}\n*Rarity:* ${gi.rarity}\n*Element:* ${gi.element}\n*WeaponType:* ${gi.weapontype}\n*Substat:* ${gi.substat}\n*Gender:* ${gi.gender}\n*Body:* ${gi.body}\n*Association:* ${gi.association}\n*Region:* ${gi.region}\n*Affiliation:* ${gi.affiliation}\n*Birthday:* ${gi.birthday}\n*Constellation:* ${gi.constellation}\n*Description:* ${gi.description}\n\n\n`
  anu = anu.costs.ascend1.map((v) => `*Name:* ${v.name}\n*Count:* ${v.count}`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
  conn.sendFile(m.chat, gi.images.cover1, '' , teks + anu, m)
  } catch (e) {
  m.reply(`Tidak Dapat Menemukan Apa Yang Kamu Cari`)
  }
}
handler.help = ['charagi']
handler.tags = ['search']
handler.command = /^(charagi)$/i
handler.limit = true

export default handler
