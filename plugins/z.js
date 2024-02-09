let handler = async (m, { conn, usedPrefix, command, text }) => {
        if (text) throw 'mau tanya apa'
         try {
         let tes = await fetch("https://api.akane.my.id/api/ai/gptvoice?query=" + q)        
          conn.sendMessage(from, { audio: tes, mimetype: 'audio/mp3', ptt: true}, {quoted: m})
          } catch (e) {
          	m.reply("Error!")
           }
        }
handler.command = /^(gptvoice)$/i;
handler.help = ["gptvoice"];
handler.tags = ["gptvoive"];

handler.limit = true;
handler.exp = 0;

export default handler;
