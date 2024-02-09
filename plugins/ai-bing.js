import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
    if (!text) throw m.reply('how can I assist you today?')
    try {
        conn.reply(m.chat, `_Please wait! This process may take up to several minutes._`, m);
        let data = await fetch(`https://api.ibeng.tech/api/ai/bingcreate?q=${text}&apikey=uYmf6Sgjxl`);
        let json = await data.json();
        let results = await json.result;
        if (!results || results.length === 0) throw 'No results found.';
        
        let links = results.map((link, index) => `*(${index + 1}).* [${link}]`).join('\n');
        conn.sendFile(m.chat, results[0], 'bing.png', `*The following are the results of a search with the query:*\n_${text}_\n\n*Following are the photo links generated from Bing AI:*\n${links}\n\n\n*How to retrieve media using the link above:*\n_.get <link>_\n*Example:*\n_.get ${results.getRandom()}_`, m);
    } catch (err) {
        m.reply('Error: ' + err.reason);
    }
};

handler.command = handler.help = ['bing'];
handler.tags = ['ai'];
handler.premium = true 

export default handler;