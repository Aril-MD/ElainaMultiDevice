import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
  m.reply(`${htki} *DOWNLOAD* ${htka}

     Alight Motion MOD ( via Mediafire )
    
    --------APK INFO--------
    
*${htjava} Version:* 3.1.4
*${htjava} Filesize:* 40mb
*${htjava} Link:* http://www.mediafire.com/file/tpxj2grwf8imp6i/Alight_Motion_V.3.1.4_%2528Mod%2529_By_bilqis_neha.apk/file
`)
}
handler.help = ['ammod']
handler.tgas = ['apk']
handler.command = ['ammod']
export default handler
