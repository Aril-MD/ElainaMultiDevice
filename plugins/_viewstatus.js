handler.before = async function (m, { isAdmin, isBotAdmin }) {
	if (m.key.remoteJid != 'status@broadcast') return !1
	if (!db.data.users[m.sender].viewstatus) return !1
	let txt = `*Status From : @${m.sender.split('@')[0]}*${m.text ? `\n\n${m.text}` : ''}`
	for (let x of global.owner(([number]) => number).map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net')) {
		try {
			let buffer = await m.download()
			await this.sendFile(x, buffer, '', txt, null, false, { mentions: [m.sender], quoted: fkontak })
		} catch (e) {
			console.log(e)
			await this.reply(x, txt, fkontak, { mentions: [m.sender] })
		}
	}
	return !0
}