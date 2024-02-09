let handler = async(m, { conn, text }) => {

  if (!text) throw `Prefix tidak bisa kosong!`

  global.prefix = new RegExp('^[' + (opts['prefix'] || `${text}`) + ']')
    await m.reply(`Prefix berhasil diubah menjadi *${text}*`)
}
handler.tags = ['owner']
handler.help = ['setprefix']
handler.command = /^(setprefix|setpref)$/i

handler.rowner = true


export default handler