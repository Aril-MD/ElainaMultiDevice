import fetch from 'node-fetch'
let handler = async (m, { conn, args, text, command, usedPrefix, isCreator, isPrems }) => {
  if (!text) return m.reply(`Example: ${usedPrefix}${command} ReyzXD`)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let res = `https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${global.lolkey}&text=${text}`
  conn.sendFile(m.chat, res, 'goldplaybutton.jpg', '```Success...\nDont forget to donate```', m, false)
}
handler.help = ['snow3d','anonymhacker','aovwallpaper','avatarlolnew','beautifulflower','birthdaycake','birthdayday','cartoongravity','codwarzone','cutegravity','fpslogo','freefire','galaxybat','galaxystyle','galaxywallpaper','glittergold','greenbush','greenneon','heartshaped','hologram3d','juventusshirt','lighttext','logogaming','lolbanner','luxurygold','metallogo','mlwallpaper','multicolor3d','noeltext','pubgmaskot','puppycute','realvintage','royaltext','silverplaybutton','starsnight','textbyname','textcake','valorantbanner','watercolor','wetglass','wooden3d','writegalaxy'].map(v => v + ' <text>')
handler.tags = ['lolhuman-maker']
handler.command = /^(snow3d|anonymhacker|aovwallpaper|avatarlolnew|beautifulflower|birthdaycake|birthdayday|cartoongravity|codwarzone|cutegravity|fpslogo|freefire|galaxybat|galaxystyle|galaxywallpaper|glittergold|greenbush|greenneon|heartshaped|hologram3d|juventusshirt|lighttext|logogaming|lolbanner|luxurygold|metallogo|mlwallpaper|multicolor3d|noeltext|pubgmaskot|puppycute|realvintage|royaltext|silverplaybutton|starsnight|textbyname|textcake|valorantbanner|watercolor|wetglass|wooden3d|writegalaxy)$/i
handler.limit = true

export default handler