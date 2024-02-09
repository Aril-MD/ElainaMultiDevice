import canvafy from "canvafy";
import { promises as fsPromises } from 'fs';
import { createHash } from "crypto";
import fetch from "node-fetch";
import fs from 'fs'

let Reg = /\|?(.*)([^\w\s])([0-9]*)$/i;

const handler = async (m, { conn, text, usedPrefix, command }) => {
    conn.registrasi = conn.registrasi ? conn.registrasi : {};
    const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}
    if (conn.registrasi[m.chat]?.[m.sender]) return m.reply('Kamu sedang meminta verifikasi!');
    let user = global.db.data.users[m.sender];
    if (user.registered === true) throw `[💬] Kamu sudah terdaftar\nMau daftar ulang? *${usedPrefix}unreg <SERIAL NUMBER>*`;
    const umurRandom = Math.floor(Math.random() * 100) + 1;
    const formatSalah = `⚠️ ғᴏʀᴍᴀᴛ sᴀʟᴀʜ\n\n✳️ ᴘᴇɴɢɢᴜɴᴀᴀɴ ᴘᴇʀɪɴᴛᴀʜ : *${usedPrefix + command} ɴᴀᴍᴀ.ᴜᴍᴜʀ*\n📌 ᴄᴏɴᴛᴏʜ : *${usedPrefix + command}* ${m.sender.split('@')[0]}.${umurRandom}`;
    if (!Reg.test(text)) throw formatSalah;
    let [_, name, splitter, age] = text.match(Reg);
    if (!name) throw "ɴᴀᴍᴀ ᴛɪᴅᴀᴋ ʙᴏʟᴇʜ ᴋᴏsᴏɴɢ (Alphanumeric)";
    if (!age) throw "Umur tidak boleh kosong (Angka)";
    age = parseInt(age);
    if (age > 25) throw "*Gak boleh!*,\nTua Amat Dah 🗿";
    if (age < 5) throw "*Gak boleh!*,\nBanyak Pedo 🗿";
    if (user.name && user.name.trim() === name.trim()) throw "ɴᴀᴍᴀ sᴜᴅᴀʜ ᴅɪᴘᴀᴋᴀɪ";

    let sn = createHash("md5").update(m.sender).digest("hex");
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender;
    let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/2bc30e1f5f92312ef44c1.jpg');

    let cap = `
*• ᴠᴇʀɪғɪᴋᴀsɪ ʙᴇʀʜᴀsɪʟ •*

• *ɴᴀᴍᴀ:* ${name}
• *ᴜᴍᴜʀ:* ${age} ᴛᴀʜᴜɴ.
• *sᴇʀɪᴀʟ ɴᴜᴍʙᴇʀ (SN):* _*ᴅɪ ᴋɪʀɪᴍ ᴋᴇ ᴘʀɪʙᴀᴅɪ.*_

ᴛᴇʀɪᴍᴀᴋᴀsɪʜ ᴛᴇʟᴀʜ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴠᴇʀɪғɪᴋᴀsɪ. ᴅᴀᴛᴀ ᴘᴇɴɢɢᴜɴᴀ ᴛᴇʟᴀʜ ᴅɪsɪᴍᴘᴀɴ ᴅᴇɴɢᴀɴ ᴀᴍᴀɴ ᴅɪ ᴅᴀᴛᴀʙᴀsᴇ *ᴇʟᴀɪɴᴀ ᴀɪ* ᴅᴀᴛᴀ ᴋᴀᴍᴜ sᴇᴋᴀʀᴀɴɢ sᴜᴅᴀʜ ᴛᴇʀᴠᴇʀɪғɪᴋᴀsɪ ᴅɪ *ᴇʟᴀɪɴᴀ ᴀɪ*

 sᴇᴋᴀʀᴀɴɢ ᴋᴀᴍᴜ ᴅᴀᴘᴀᴛ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ғɪᴛᴜʀ-ғɪᴛᴜʀ ᴋʜᴜsᴜs ʏᴀɴɢ ʜᴀɴʏᴀ ᴛᴇʀsᴇᴅɪᴀ ᴜɴᴛᴜᴋ ᴘᴇɴɢɢᴜɴᴀ ᴛᴇʀᴠᴇʀɪғɪᴋᴀsɪ.
`;

    const json = await createOtpCanvas(pp);
          
    let confirm = "☘️ ʀᴇᴘʟʏ ᴘᴇsᴀɴ ɪɴɪ ᴅᴇɴɢᴀɴ ᴍᴇɴɢᴇᴛɪᴋ ᴋᴏᴅᴇ ᴏᴛᴘ ʏᴀɴɢ ᴀᴅᴀ ᴘᴀᴅᴀ ɢᴀᴍʙᴀʀ!";
    let { key } = await conn.sendFile(m.chat, json.image, '', confirm, m);

    conn.registrasi[m.chat] = {
        ...conn.registrasi[m.chat],
        [m.sender]: {
            message: m,
            sender: m.sender,
            otp: json.otp,
            verified: json.verified,
            caption: cap,
            pesan: conn,
            age,
            user,
            name,
            key,
            timeout: setTimeout(() => {
                conn.sendMessage(m.chat, { delete: key });
                delete conn.registrasi[m.chat][m.sender];
            }, 60 * 1000)
        }
    };
    if (m.isGroup) conn.reply(m.sender, `*🚩 sɴ :* ${sn}\n\n*ᴄᴏᴅᴇ sɴ ᴍᴜ ᴊᴀɴɢᴀɴ sᴀᴍᴘᴇ ʜɪʟᴀɴɢ/ᴋᴇʜᴀᴘᴜs ʏᴀ*`, fkontak);    
}

handler.before = async (m, { conn }) => {
    conn.registrasi = conn.registrasi ? conn.registrasi : {};
    if (m.isBaileys) return;
    if (!conn.registrasi[m.chat]?.[m.sender]) return;
    if (!m.text) return;
    let { timeout, otp, verified, message, sender, pesan, caption, user, name, age, key } = conn.registrasi[m.chat]?.[m.sender];
    if (m.id === message.id) return;
    if (m.id === key.id) return;
    if (m.text == otp) {
        user.name = name.trim();
        user.age = age;
        user.regTime = +new Date;
        user.registered = true;
        let benar = `🐾 ᴏᴛᴘ ʙᴇɴᴀʀ!\n${m.sender.split('@')[0]} ᴛᴇʟᴀʜ ᴅɪ ᴠᴇʀɪғɪᴋᴀsɪ!\n\n`;
        pesan.sendFile(m.chat, verified, '', benar + caption, m);
        clearTimeout(timeout);
        pesan.sendMessage(m.chat, { delete: key });
        delete conn.registrasi[m.chat]?.[m.sender];
    } else {
        m.reply(`✖️ ᴏᴛᴘ sᴀʟᴀʜ!\n${m.sender.split('@')[0]} ᴛɪᴅᴀᴋ ᴅɪ ᴠᴇʀɪғɪᴋᴀsɪ!`);
        clearTimeout(timeout);
        pesan.sendMessage(m.chat, { delete: key });
        delete conn.registrasi[m.chat]?.[m.sender];
    }
}

handler.help = ["daftar", "register"].map(v => v + " <nama>.<umur>");
handler.tags = ["xp"];
handler.command = /^(register|verify|daftar|reg(is)?|verif)$/i;
handler.group = true
export default handler;

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
}

function isNumber(x) {
    return !isNaN(x);
}

function generateRandomCharacter() {
    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#$&@*!?';
    return characters[Math.floor(Math.random() * characters.length)];
}

async function createOtpCanvas(avatar) {
    const codetext = Array.from({ length: 4 }, generateRandomCharacter).join('');
    const captchaBuffer = await new canvafy.Captcha()
        .setBackground("image", "https://telegra.ph/file/d8be76512f1f3bb40f252.jpg")
        .setCaptchaKey(codetext.toString())
        .setBorder("#0000FF")
        .setOverlayOpacity(1.0)
        .build();
    const securityBuffer = await new canvafy.Security()
        .setAvatar(avatar)
        .setBackground("image", "https://telegra.ph/file/d8be76512f1f3bb40f252.jpg")
        .setCreatedTimestamp(Date.now())
        .setSuspectTimestamp(1)
        .setBorder("#0000FF")
        .setLocale("id") // country short code - default "en"
        .setAvatarBorder("#0000FF")
        .setOverlayOpacity(1.0)
        .build();
    return {
        image: captchaBuffer,
        otp: codetext,
        verified: securityBuffer
    };
}
