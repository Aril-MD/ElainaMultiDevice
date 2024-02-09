import fetch from 'node-fetch';
let handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* Siapa presiden Indonesia? `
try {
  await m.reply(wait)
  let apii = await fetch(`https://api.betabotz.org/api/search/bing-chat?text=${text}&apikey=${global.lann}`)
  let res = await apii.json()
  await m.reply(res.message)
} catch (err) {
  console.error(err)
  throw "Terjadi kesalahan dalam menjawab pertanyaan"
}
}
handler.command = handler.help = ['bard','bardai'];
handler.tags = ['tools'];
handler.premium = false;
export default handler;
