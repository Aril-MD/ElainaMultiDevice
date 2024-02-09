import ytdl from 'ytdl-core'
import yts from 'yt-search'
import fs from 'fs'
import { pipeline } from 'stream'
import { promisify } from 'util'
import os from 'os'

let streamPipeline = promisify(pipeline);

let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `Use example ${usedPrefix}${command} wake up phonk`;
   conn.sendMessage(m.chat, {
    react: {
      text: '🚩',
      key: m.key,
    }
  });
  try {
  let search = await yts(text);
  let vid = search.videos[Math.floor(Math.random() * search.videos.length)];
  if (!search) throw 'Video Not Found, Try Another Title';
  let { title, thumbnail, timestamp, views, ago, url } = vid;
  let wm = 'ʀᴇʏᴢ ʜᴀʏᴀɴᴀsɪ';
  
  const audioStream = ytdl(url, {
    filter: 'audioonly',
    quality: 'highestaudio',
  });

  // Get the path to the system's temporary directory
  const tmpDir = os.tmpdir();

  // Create writable stream in the temporary directory
  const writableStream = fs.createWriteStream(`${tmpDir}/${title}.mp3`);

  // Start the download
  await streamPipeline(audioStream, writableStream);

  let doc = {
    audio: {
      url: `${tmpDir}/${title}.mp3`
    },
    mimetype: 'audio/mp4',
    fileName: `${title}`,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: false,
        mediaType: 2,
        mediaUrl: url,
        title: title,
        sourceUrl: url, 
        body: 'ᴘ ʟ ᴀ ʏ - ʙ ʏ - ᴇ ʟ ᴀ ɪ ɴ ᴀ',
        thumbnail: await (await conn.getFile(thumbnail)).data, 
        showAdAttribution: true
      }
    }
  };

  await conn.sendMessage(m.chat, doc, { quoted: m });

  // Delete the audio file
  fs.unlink(`${tmpDir}/${title}.mp3`, (err) => {
    if (err) {
      console.error(`Failed to delete audio file: ${err}`);
    } else {
      console.log(`Deleted audio file: ${tmpDir}/${title}.mp3`);
    }
  });
   } catch (e) {
    console.log(e);
    m.reply(`ᴛɪᴅᴀᴋ ᴍᴇɴᴇᴍᴜᴋᴀɴ ᴀᴜᴅɪᴏ:(`);
  }
};

handler.help = ['play','song','music','lagu'].map((v) => v + ' <query>');
handler.tags = ['downloader'];
handler.command = /^play|song|music|lagu$/i;
handler.limit = false;
export default handler;