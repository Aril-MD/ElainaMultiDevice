import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
m.reply(`${htki} *DOWNLOAD* ${htka}

     Node Video PRO  ( via Mediafire )
    
    --------APK INFO--------
    
*${htjava} Version:* 4.9.57
*${htjava} Filesize:* 107mb
*${htjava} Link:* https://www.mediafire.com/file/3jmvd0nl6bpq6c1/NodeVideo_v4.9.57_-_Mod.apk/file
`
)
}


handler.help = ['node']
handler.tags = ['apk']
handler.command = ['node']
export default handler