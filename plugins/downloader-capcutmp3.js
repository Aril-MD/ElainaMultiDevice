import { capcutdl } from '../lib/capcut.js'
let handler = async (m, { conn, args, text, usedPrefix, command }) => { 
  if (!args[0]) throw `🚩 *Example:* ${usedPrefix+command} https://www.capcut.com/watch/7238819486680321281?use_new_ui=1&template_id=7238819486680321281&share_token=ce40538b-b349-41da-869d-73d99b78287e&enter_from=template_detail&region=ID&language=in&platform=copy_link&is_copy_link=1`;
  let data = await capcutdl(text);
  await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
conn.sendMessage(m.chat, { audio: { url: data.originalVideoUrl }, mimetype: 'audio/mpeg', fileName: `${data.title}.mp3` }, { quoted: m })
}
handler.help = ['capcutmp3', 'capcutaudio'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(capcutaudio|capcutmp3|)$/i
export default handler
