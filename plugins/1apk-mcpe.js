import fs from 'fs'
let handler = async (m, { conn, args, command }) => {

 m.reply(`${htki} *DOWNLOAD* ${htka}

     Minecraft PE Official ( via Mediafire )
    
    --------APK INFO--------
    
*${htjava} Version:* 1.19
*${htjava} Filesize:* 155mb
*${htjava} Link:* https://www.mediafire.com/file/4hixmktsfkhky91/Minecraft_v1.16.101.01_Terbaru.zip/file

`)
}
handler.help = ['mcpe']
handler.tags = ['apk']
handler.command = ['mcpe']
export default handler