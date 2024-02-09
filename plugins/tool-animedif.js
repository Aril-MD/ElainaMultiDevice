import axios from "axios"
import uploadImage from "../lib/uploadImage.js"

let handler = async (m, { conn, usedPrefix, text: prompt, command }) => {
    if (!prompt) return m.reply(`Example: *${usedPrefix + command}* 1girl, solo, ponytail, blush.`)
    conn.animedif = conn.animedif ? conn.animedif: {}
    if (m.sender in conn.animedif) {
        return m.reply("You have undone job, please wait...")
    }
    conn.animedif[m.sender] = true
    m.reply(wait)
    let url
    let q = m.quoted ? m.quoted: m
    let mime = (q.msg || q).mimetype || q.mediaType || ""
    if (/image\/(jpe?g|png)/.test(mime)) {
        url = await uploadImage(await q.download?.())
    }
    try {
        let sampler = "DPM++ SDE Karras"
        let steps = 25
        let style = "ACG"
        let width = 512
        let height = 512
        let controlNet = url ? "scribble": "none"
        let cfg = 10
        let image_num = 4
        let init_image = url ? "True": "None"

        let { data } = await axios.request({
            baseURL: APIs["rose"],
            url: "/image/anime/diffusion",
            method: "GET",
            params: {
                prompt, style, width, height, sampler, ...(url ? {
                    init_image: url
                }: {}), cfg, controlNet, steps, image_num, apikey: APIKeys[APIs["rose"]]
            }
        })
        .catch((e) => e?.response)

        let { status, message, result } = data
        let { images } = result
        if (!status) {
            delete conn["animedif"][m.sender]
            return m.reply(message)
        }
        let caption = `_Style_: *_${style}_*
_Ratio_: *_${width} ${height}_*
_ControlNet_: *_${controlNet}_*
_Steps_: *_${steps}_*
_CFG_: *_${cfg}_*
_Sampler_: *_${sampler}_*
_Init Image_: *_${init_image}_*
\n` +
"_Prompt_: ```" + prompt + "```"

        let img = Buffer.from(images[0], "base64")
        await conn.sendFile(m.chat, img, null, caption, m)
    } catch (e) {
        console.log(e)
        m.reply("Failed :(")
    } finally {
        delete conn.animedif[m.sender]
    }
}
handler.help = ["animedif"]
handler.tags = ["internet"]
handler.command = ["animedif", "diffusion"]

export default handler