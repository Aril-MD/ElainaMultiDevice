import axios from 'axios'
import cheerio from 'cheerio'

var handler = async (m, { conn, args }) => {
    if (!args[0]) {
        throw 'Uhm... URL-nya mana?';
    }

    try {
        await conn.reply(m.chat, 'Tunggu sebentar kak, video sedang di download... server 1', m);

        const tiktokData = await tryServer1(args[0]);

        if (!tiktokData) {
            throw 'Gagal mendownload video!';
        }

        const videoURL = tiktokData.video.noWatermark;

        const videoURLWatermark = tiktokData.video.watermark;

        let ppTiktok = '';
        if (tiktokData.author && tiktokData.author.avatar) {
            ppTiktok = tiktokData.author.avatar;
        }

        const infonya_gan = `Judul: ${tiktokData.title}\nUpload: ${tiktokData.created_at}\n\nSTATUS:\n=====================\nLike = ${tiktokData.stats.likeCount}\nKomen = ${tiktokData.stats.commentCount}\nShare = ${tiktokData.stats.shareCount}\nViews = ${tiktokData.stats.playCount}\nSimpan = ${tiktokData.stats.saveCount}\n=====================\n\nUploader: ${tiktokData.author.name || 'Tidak ada informasi penulis'}\n(${tiktokData.author.unique_id} - https://www.tiktok.com/@${tiktokData.author.unique_id})\nBio: ${tiktokData.author.signature}\nLagu: ${tiktokData.music.play_url}\nResolusi: ${tiktokData.video.ratio}\nFoto Profile: ${ppTiktok}`;

        if (videoURL || videoURLWatermark) {
            await conn.sendFile(m.chat, videoURL, 'tiktok.mp4', `Ini kak videonya\n\n${infonya_gan}`, m);
            setTimeout(async () => {
                //await conn.sendFile(m.chat, videoURLWatermark, 'tiktokwm.mp4', `*Ini Versi Watermark*\n\n${infonya_gan}`, m);
                //await conn.sendFile(m.chat, `${tiktokData.music.play_url}`,'lagutt.mp3', 'ini lagunya',m);
            }, 5000);
        } else {
            throw 'Tidak ada tautan video yang tersedia.';
        }
    } catch (error1) {
        // jika server 1 gagal, gunakan server 2
        try {
            await conn.reply(m.chat, 'Tunggu sebentar kak, video sedang di download... server 2', m);
            const tiktokData2 = await tryServer2(args[0]);

            if (!tiktokData2) {
                throw 'Gagal mendownload video!';
            }

            const videoURL2 = tiktokData2.video;
            const audioURL2 = tiktokData2.audio;
            const thumbnailURL = tiktokData2.thumbnail;

            // Lakukan apa yang Anda perlukan dengan tiktokData2 dari Server 2 di sini
            //await conn.sendFile(m.chat, thumbnailURL, 'thumbnail.jpg', 'Ini thumbnail videonya', m);
            await conn.sendFile(m.chat, videoURL2, 'tiktok2.mp4', 'Ini kak videonya dari Server 2', m);
            //await conn.sendFile(m.chat, audioURL2, 'tiktok.mp3', 'Ini kak audionya', m);
            conn.reply(m.chat, "tiktok.ryzendesu.com", m);

        } catch (error2) {
            // Jika server kedua juga gagal, tangani error di sini
            conn.reply(m.chat, `Error: ${error2}`, m);
        }
    }
};

handler.help = ['tiktok'].map((v) => v + ' <url>');
handler.tags = ['downloader'];
handler.command = /^t(t|iktok(d(own(load(er)?)?|l))?|td(own(load(er)?)?|l))$/i;

export default handler;

async function tryServer1(url) {
    // server 1 tiklydown.eu.org
    let tiklydownAPI = `https://api.tiklydown.eu.org/api/download?url=${url}`;
    let response = await axios.get(tiklydownAPI);
    return response.data;
}

async function tryServer2(url) {
    // jika server 1 gagal, gunakan tikdown.org/id
    const tikdownURL = 'https://tikdown.org/id';
    const response = await axios.get(tikdownURL);

    if (response.status === 200) {
        const gettoken = await axios.get("https://tikdown.org/id");
        const $ = cheerio.load(gettoken.data);
        const token = $("#download-form > input[type=hidden]:nth-child(2)").attr(
            "value"
        );
        const param = {
            url: url,
            _token: token,
        };
        const {
            data
        } = await axios.request("https://tikdown.org/getAjax?", {
            method: "post",
            data: new URLSearchParams(Object.entries(param)),
            headers: {
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "user-agent": "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36",
            },
        });
        var getdata = cheerio.load(data.html);
        if (data.status) {
            return {
                status: true,
                thumbnail: getdata("img").attr("src"),
                video: getdata("div.download-links > div:nth-child(1) > a").attr("href"),
                audio: getdata("div.download-links > div:nth-child(2) > a").attr("href"),
            };
        } else
            return {
                status: false,
            };
    };
}