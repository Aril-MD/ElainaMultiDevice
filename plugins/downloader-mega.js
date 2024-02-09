import { File } from 'megajs'
import { fileTypeFromBuffer } from 'file-type'

let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.mega = conn.mega ? conn.mega : {}
    if (!args[0]) return m.reply(`Masukan Url!\n\nContoh :\n${usedPrefix + command} https://mega.nz/file/FltHDCzD#oNm8SD_e9oFTCczmnEW4zB9gsakSGzVaVtd9euj7yK8`)
    if (m.sender in conn.mega) return m.reply('Kamu Masih Mendownload!')
    conn.mega[m.sender] = true
    let file = File.fromURL(args[0])
    await m.reply('_In Progress Please Wait..._')
    try {
        file = await file.loadAttributes()
        let data = await file.downloadBuffer()
        let mimetype = await fileTypeFromBuffer(data)
        await conn.sendMessage(m.chat, { document: data, fileName: file.name, mimetype }, { quoted: m })
    } catch (e) {
        throw e
    } finally {
        delete conn.mega[m.sender]
    }
}
handler.help = ['mega']
handler.tags = ['downloader']
handler.command = /^mega(dl)?$/i
handler.limit = true
export default handler