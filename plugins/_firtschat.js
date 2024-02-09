import moment from 'moment-timezone'
let handler = m => m

handler.before = async function (m) {

    if (m.chat.endsWith('broadcast')) return
    if (m.fromMe) return
    if (m.isGroup) return
   // if (db.data.settings.groupOnly) return
    let user = global.db.data.users[m.sender]
    let { banned } = db.data.users[m.chat]
    let username = this.getName(m.sender) 
    if (new Date - user.pc < 86400000) return // setiap 24 jam sekali
 //   await this.modifyChat(m.chat, 'mute', -Math.floor(new Date / 1e3) * 1e3 - 1e3).catch(console.log)
    
    let dann = `Hai ${ucapan()} *${username.replace(/@.+/, '')}* 👋
${banned ? `📮 Maaf, kamu dibanned!\nHubungi: https://wa.me/+${global.nomorown}` : `💬 Ada yang bisa *ELAINA - AI* bantu kak ?`}`
   
    await m.reply(dann)
    user.pc = new Date * 1
}

export default handler
function ucapan() {
        const hour_now = moment.tz('Asia/Jakarta').format('HH')
        var ucapanWaktu = 'Pagi kak'
        if (hour_now >= '03' && hour_now <= '10') {
          ucapanWaktu = 'Pagi kak 🌄'
        } else if (hour_now >= '10' && hour_now <= '15') {
          ucapanWaktu = 'Siang kak 🌅'
        } else if (hour_now >= '15' && hour_now <= '17') {
          ucapanWaktu = 'Sore kak 🌆'
        } else if (hour_now >= '17' && hour_now <= '18') {
          ucapanWaktu = 'Selamat Petang kak🌆'
        } else if (hour_now >= '18' && hour_now <= '23') {
          ucapanWaktu = 'Malam kak 🌃'
        } else {
          ucapanWaktu = 'Selamat Malam🌃!'
        }	
        return ucapanWaktu
}
//Powered By Aril