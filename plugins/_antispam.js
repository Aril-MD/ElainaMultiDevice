export async function all(m) {
    if (!m.message)
        return
    this.spam = this.spam ? this.spam : {}
    if (m.sender in this.spam) {
        this.spam[m.sender].count++
        if (m.messageTimestamp.toNumber() - this.spam[m.sender].lastspam > 3) {
            if (this.spam[m.sender].count > 5) {
                global.db.data.users[m.sender].banned = true
                m.reply('*📮Kamu di banned karena spam*\n\n*💬Laporkan masalah ini ke wa.me/6282220427314?text=Bang+tolong+unban+nomor+ku🗿*')
            }
            this.spam[m.sender].count = 0
            this.spam[m.sender].lastspam = m.messageTimestamp.toNumber()
        }
    }
    else
        this.spam[m.sender] = {
            jid: m.sender,
            count: 0,
            lastspam: 0
        }
}
