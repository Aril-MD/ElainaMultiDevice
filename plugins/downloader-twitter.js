import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
	if (!text) throw 'Input Twitter URL'
	let res = await twitterDl(text)
	await m.reply('_In progress, please wait..._')
	for (let x = 0; x < res.media.length; x++) {
		let caption = x === 0 ? res.caption.replace(/https:\/\/t.co\/[a-zA-Z0-9]+/gi, '').trim() : ''
		conn.sendFile(m.chat, res.media[x].url, '', caption, m)
	}
}
handler.help = ['twitter']
handler.tags = ['downloader']
handler.command = /^((twt|twitter)(dl)?)$/i

export default handler

async function twitterDl(url) {
	let id = /twitter\.com\/[^/]+\/status\/(\d+)/.exec(url)[1]
	if (!id) throw 'Invalid URL'
	let res = await fetch(`https://tweetpik.com/api/tweets/${id}`)
	if (res.status !== 200) throw res.statusText
	let json = await res.json()
	if (json.media) {
		let media = []
		for (let i of json.media) {
			if (/video|animated_gif/.test(i.type)) {
				let vid = await (await fetch(`https://tweetpik.com/api/tweets/${id}/video`)).json()
				vid = vid.variants.pop()
				media.push({
					url: vid.url,
					type: i.type
				})
			} else {
				media.push({
					url: i.url,
					type: i.type
				})
			}
		}
		return {
			caption: json.text,
			media 
		}
	} else throw 'No media found'
}
