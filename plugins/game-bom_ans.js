import fetch from 'node-fetch'
let reward = 10000
export async function before(m) {
	let body = typeof m.text == 'string' ? m.text : false
	this.bomb = this.bomb ? this.bomb : {}
	let id = m.chat
   if (!(id in this.bomb) && m.quoted && /kotak/i.test(m.quoted.text)) return this.reply(m.chat,`Sesi telah berakhir`, m)
   if ((id in this.bomb) && !isNaN(body)) {
      let timeout = 180000
      let json = this.bomb[id][1].find(v => v.position == body)
      if (!json) return this.reply(m.chat, `Untuk membuka kotak kirim angka 1 - 9`, m)
      if (json.emot == '💣') {
         json.state = true
         let bomb = this.bomb[id][1]
         let teks = `❏  *B O M B*\n\n`
         teks += `*Duaarrr Mampus Ada BOM 💣*\n\n`
         teks += bomb.slice(0, 3).map(v => v.state ? v.emot : v.number).join('') + '\n'
         teks += bomb.slice(3, 6).map(v => v.state ? v.emot : v.number).join('') + '\n'
         teks += bomb.slice(6).map(v => v.state ? v.emot : v.number).join('') + '\n\n'
         teks += `Timeout : [ *${((timeout / 1000) / 60)} menit* ]\n`
         teks += `*Permainan selesai!*, kotak berisi bom terbuka : (- ${reward} Money)`
         return this.reply(m.chat, teks, m, {
		contextInfo: {
externalAdReply: {
               title: wm,
               mediaType: 1,
               previewType: 0,
               renderLargerThumbnail: true,
               thumbnailUrl: 'https://telegra.ph/file/287cbe90fe5263682121d.jpg',
               sourceUrl: sgc
}}}).then(() => {
            global.db.data.users[m.sender].money < reward ? global.db.data.users[m.sender].money = 0 : global.db.data.users[m.sender].money -= reward
            clearTimeout(this.bomb[id][2])
            delete this.bomb[id]
         })
      } else if (json.state) {
         return this.reply(m.chat, `Kotak ${json.number} sudah di buka silahkan pilih kotak yang lain.`, m)
      } else {
         json.state = true
         let changes = this.bomb[id][1]
         let open = changes.filter(v => v.state && v.emot != '💣').length
         if (open >= 8) {
            let teks = `❏  *B O M B*\n\n`
            teks += `Kirim angka *1* - *9* untuk membuka *9* kotak nomor di bawah ini :\n\n`
            teks += changes.slice(0, 3).map(v => v.state ? v.emot : v.number).join('') + '\n'
            teks += changes.slice(3, 6).map(v => v.state ? v.emot : v.number).join('') + '\n'
            teks += changes.slice(6).map(v => v.state ? v.emot : v.number).join('') + '\n\n'
            teks += `Timeout : [ *${((timeout / 1000) / 60)} menit* ]\n`
            teks += `*Permainan selesai!* kotak berisi bom tidak terbuka : (+ ${reward} Money)`
            return this.reply(m.chat, teks, m, {
		contextInfo: {
externalAdReply: {
               title: wm,
               mediaType: 1,
               previewType: 0,
               renderLargerThumbnail: true,
               thumbnailUrl: 'https://telegra.ph/file/308a4f10cc4576a90b4a0.jpg',
               sourceUrl: sgc
}}}).then(() => {
               global.db.data.users[m.sender].money += reward
               clearTimeout(this.bomb[id][2])
               delete this.bomb[id]
            })
         } else {
            let teks = `❏  *B O M B*\n\n`
            teks += `Kirim angka *1* - *9* untuk membuka *9* kotak nomor di bawah ini :\n\n`
            teks += changes.slice(0, 3).map(v => v.state ? v.emot : v.number).join('') + '\n'
            teks += changes.slice(3, 6).map(v => v.state ? v.emot : v.number).join('') + '\n'
            teks += changes.slice(6).map(v => v.state ? v.emot : v.number).join('') + '\n\n'
            teks += `Timeout : [ *${((timeout / 1000) / 60)} menit* ]\n`
            teks += `Kotak berisi bom tidak terbuka : (+ ${reward} Money)`
            this.reply(m.chat, teks, m).then(() => {
               global.db.data.users[m.sender].money += reward
            }) 
         }
      }
   }
}	

async function randomInt(min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min + 1)) + min
   }
async function formatNumber(integer) {
      let numb = parseInt(integer)
      return Number(numb).toLocaleString().replace(/,/g, '.')
   }
   