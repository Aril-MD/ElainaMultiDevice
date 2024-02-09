let handler = async (m, {
 conn
 }) => {
  let stats = Object.entries(db.data.stats).map(([key, val]) => {
    let name = Array.isArray(plugins[key]?.help) ? plugins[key]?.help?.join(' , ') : plugins[key]?.help || key 
    if (/exec/.test(name)) return
    return { name, ...val }
  })
  stats = stats.sort((a, b) => b.total - a.total)
  var handlers = stats.slice(0, 100).map(({
   name, 
   total, 
   last
 }) => {
    return ` *Command* : *${name}*\n• *Global HIT* : ${total}`
  }).join`\n\n`
 conn.sendMessage(m.chat, {
text: handlers,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
thumbnailUrl: thumb,
mediaType: 1,
renderLargerThumbnail: true, 
showAdAttribution: true
}}}, { quoted: m})
};
handler.command = handler.help = ['dashboard', 'dash', 'views']
handler.tags = ['main']
handler.limit = true;
export default handler;