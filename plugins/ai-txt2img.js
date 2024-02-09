import axios from "axios"

let handler = async (m, { conn, isOwner, usedPrefix, command, text }) => {
if (!text) throw 'Example: .txt2img highly detailed, intricate, 4k, 8k, sharp focus, detailed hair, detailed'
m.reply(`_Generating Images ${text}_`)
const payloads = {
  server_name: "frieren",
  prompt: text,
  negative_prompt: "nsfw, bad anatomy, lowres, extra hands, extra legs, extra finger",
  width: 512,
  height: 768,
  steps: 25,
  model_id: "anything_v3",
  sampler: "UniPC",
  cfg: 7.5,
  seed: "",
  enhance_prompt: "yes",
  multi_lingual: "no",
  image_num: 1,
  panorama: "no",
  safety_checker: "no",
  safety_checker_type: "blur",
  lora_model: "more_details",
  "lora_strength": 1,
  clip_skip: 2,
  embeddings_model: "",
  webhook: ""
}
const { data } = await axios
	.request({
		baseURL: "https://api.itsrose.life",
		url: "/image/diffusion/txt2img",
		method: "POST",
		params: {
			apikey: global.rose,
		},
		data: payloads,
	})
	.catch((e) => e?.["response"]);
const { status, message } = data; 
if (!status) {
	return m.reply(message);
}
const { result } = data;
let metadata = `*model_id:* ${result.metadata.model_id}\n*negative_prompt:* ${result.metadata.negative_prompt}\n*scheduler:* ${result.metadata.scheduler}\n*width:* ${result.metadata.W}\n*height:* ${result.metadata.H}\n*scale:* ${result.metadata.guidance_scale}\n*seed:* ${result.metadata.seed}\n*steps:* ${result.metadata.steps}\n*samples:* ${result.metadata.n_samples}\n*lora_model:* ${result.metadata.lora}\n*lora_strength:* ${result.metadata.lora_strength}`
await conn.reply(m.chat, metadata, m)
await conn.sendFile(m.chat, result.images[0], 'conco.jpg', ``, m)
}
handler.help = ['txt2img']
handler.tags = ['ai']
handler.command = /^(txt2img)$/i
handler.limit = true

export default handler