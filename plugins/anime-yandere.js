import cheerio from 'cheerio';
import fetch from 'node-fetch';
import { lookup } from 'mime-types';
import { URL_REGEX } from '@whiskeysockets/baileys';
import { apivisit } from './kanghit.js';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  text = text.endsWith('SMH') ? text.replace('SMH', '') : text;
  if (!text) throw 'Input Query / yande.re Url';
  
  let [query, page] = text.split(' ');
  let res = await getYandeImage(query, page);

  if (res === 'in_progress') {
    await conn.sendMessage(m.chat, 'Fetching image. Please wait...', 'conversation', { quoted: m });
    return;
  }

  let mime = await lookup(res);
  text.match(URL_REGEX)
    ? await conn.sendMessage(
        m.chat,
        { [mime.split('/')[0]]: { url: res }, caption: `Success Download: ${await shortUrl(res)}` },
        { quoted: m }
      )
    : await conn.sendMessage(m.chat, { image: { url: res }, caption: `Result From: ${text.capitalize()}` }, { quoted: m });

  await apivisit;
};

handler.help = handler.alias = ['yandere', 'yande'].map((v) => v + ' <query> [page]');
handler.tags = ['downloader'];
handler.command = /^(yandere|yande)$/i;

export default handler;

async function getYandeImage(query, page = '') {
  if (query.match(URL_REGEX)) {
    let res = await fetch(query);
    let html = await res.text();
    let $ = cheerio.load(html);
    let image = $('img').attr('src');
    if (!image) throw 'Can\'t fetch image :/';
    return image;
  } else {
    let apiUrl = `https://yande.re/post.json?tags=${query}`;
    if (page) {
      const pageNumber = parseInt(page);
      if (!isNaN(pageNumber) && pageNumber > 0) {
        apiUrl += `&page=${pageNumber}`;
      }
    }

    // Simulating in-progress fetching
    await new Promise((resolve) => setTimeout(resolve, 2000));

    let res = await fetch(apiUrl);
    let json = await res.json();
    if (json.length === 0) throw `Query "${query}" not found :/`;
    let data = json[~~(Math.random() * json.length)];
    if (!data) throw `Query "${query}" not found :/`;
    return data.file_url;
  }
}

async function shortUrl(url) {
  return await (await fetch(`https://tinyurl.com/api-create.php?url=${url}`)).text();
}
