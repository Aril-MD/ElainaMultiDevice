import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, `${salam.getRandom()}`, "salam.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /(ass?alam|اَلسَّلاَمُ عَلَيْكُمْ|السلام عليکم)/i;
handler.command = new RegExp()

export default handler;

const salam = [
"./vn/salam.mp3",
"./vn/salam1.mp3"
]