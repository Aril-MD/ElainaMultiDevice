import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 m.reply(`${htki} *DOWNLOAD* ${htka}

     [PSCC] Photoshop Touch ( via Mediafire )
    
    --------APK INFO--------
    
*${htjava} Version:* unknown 
*${htjava} Filesize:* 22mb
*${htjava} Link:* https://www.mediafire.com/file/e05njvpdx0z81gr/PS_CC_by_Vijay_Gfx.apk/file

`)
}


handler.help = ['pscc']
handler.tags = ['apk']
handler.command = ['pscc']
export default handler