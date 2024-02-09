import puppeteer from "puppeteer"
import fetch from "node-fetch"
let handler = async (m, {
    conn,
    isOwner,
    usedPrefix,
    command,
    args
}) => {
    let query = "Masukan Kodenya!!!\nContoh:\n.carbon console.log('hello world ')"
    let text
    if (args.length >= 1) {
        text = args.slice(0).join(" ")
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text
    } else throw query
    await m.reply(wait)
    try {
        let result = await Carbonify(text)
        await conn.sendFile(m.chat, result, "", "*From:*\n" + m.name, m)
    } catch (e) {
        try {
            let result = await CarbonifyV2(text)
            await conn.sendFile(m.chat, result, "", "*From:*\n" + m.name, m)
        } catch (e) {
            try {
                let result = await CarbonifyV3(text)
                await conn.sendFile(m.chat, result, "", "*From:*\n" + m.name, m)
            } catch (e) {
                throw eror
            }
        }
    }
}
handler.help = ["carbon"]
handler.tags = ["ai"]
handler.command = /^carbon(ify)?$/i
handler.limit = true
export default handler

const config = {
    bg: "rgba(0, 0, 0, 1)",
    t: "3024-night",
    wt: "sharp",
    l: "auto",
    // width: 680,
    ds: true,
    dsyoff: "20px",
    dsblur: "68px",
    wc: true,
    wa: true,
    pv: "0px",
    ph: "0px",
    //ln: false,
    // fl: 1,
    fm: "Droid Sans Mono",
    fs: "14px",
    // lh: "133%",
    si: false,
    es: "2x",
    wm: false
};

function convertToParams(myData) {
    var out = [];
    for (var key in myData) {
        if (myData.hasOwnProperty(key)) {
            out.push(key + "=" + encodeURIComponent(myData[key]));
        }
    }
    return out.join("&");
};

async function Carbonify(teks) {
    const snippets = [{
        name: "Carbonify",
        code: teks
    }]
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({
        width: 800,
        height: 800,
        deviceScaleFactor: 2
    });
    let index = 1;
    for (const snippet of snippets) {
        console.log(`Carbonifying snippet ${index} of ${snippets.length}`);
        await page.goto(
            `https://carbon.now.sh?${convertToParams(config)}&code=${encodeURI(
        snippet.code
      )}`
        );

        const codeContainer = await page.$("#export-container");
        await page.addStyleTag({
            content: ".CodeMirror-sizer{min-height: 0!important}"
        });
        return await codeContainer.screenshot({
            path: `./sticker/${snippet.name.split(".")[0]}.png`,
        });
        index++;
    }
    await browser.close();
}

async function CarbonifyV3(input) {
    let Blobs = await fetch("https://carbon-api.vercel.app/api", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "code": input
            })
        })
        .then(response => response.blob())
    let arrayBuffer = await Blobs.arrayBuffer();
    let buffer = Buffer.from(arrayBuffer);
    return buffer
}

async function CarbonifyV2(input) {
    let Blobs = await fetch("https://carbonara.solopov.dev/api/cook", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "code": input
            })
        })
        .then(response => response.blob())
    let arrayBuffer = await Blobs.arrayBuffer();
    let buffer = Buffer.from(arrayBuffer);
    return buffer