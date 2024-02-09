/* Recode Wudysoft */
import {
    promises,
    readFileSync
} from "fs"
import {
    join
} from "path"
import {
    xpRange
} from "../lib/levelling.js"
import moment from "moment-timezone"
import os from "os"
import fs from "fs"
import fetch from "node-fetch"

let handler = async (m, {
    conn,
    usedPrefix: _p,
    __dirname,
    args
}) => {
    await conn.sendMessage(m.chat, {
        react: {
            text: "⏳",
            key: m.key,
        }
    })
                
let p1 = './tumnil/1.jpg'
let p2 = './tumnil/2.jpg'
let p3 = './tumnil/3.jpg'
let p4 = './tumnil/4.jpg'
let p5 = './tumnil/5.jpg'
let prn = `${pickRandom([p1,p2,p3,p4,p5])}`
                
const imek = fs.readFileSync(prn);
let arc = pickRandom(global.AraChu2)
let res = await fetch('https://github.com/ArifzynXD/database/raw/master/asupan/japan.json');
    let json = await res.json();
    const randomIndex = Math.floor(Math.random() * json.length);
    const randomURL = json[randomIndex].url;
        conn.sendMessage(m.chat, { 
        image: await (await fetch(randomURL)).buffer(),
        mimetype: 'image/jpeg',
        fileLength: 10630044057600000000000000000000000000000000000000000000000000,
        caption: '',
        contextInfo: {
	mentionedJid: [m.sender],
	forwardingScore: 256,
	isForwarded: true,
        externalAdReply: {
            title: `ファイル ・「ムファル」。`,
	body: '처녀 사냥꾼',
	sourceUrl: `https//${global.author}`,
	mediaType: 1,
	thumbnail: imek,
	thumbnailUrl: arc,
	renderLargerThumbnail: false
                }}}, { quoted: m });
    
}
handler.tags = ['asupan']
handler.command = /^(japan)$/i
handler.help = ['japan']
handler.exp = 3

export default handler
//----------- FUNCTION -------

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}