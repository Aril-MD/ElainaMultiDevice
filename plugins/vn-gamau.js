import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, `${baka.getRandom()}`, "owernya.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(Kamu mau jadi pacar aku|kamu mau jadi pacar aku?|kamu mau jadi pacarku|kamu mau jadi pacarku?|kamu mau jadi pacar ku|kamu mau jadi pacar ku?|mau jadi pacarku|mau jadi pacarku?|mau jadi pacar aku|mau jadi pacarku?|mau jadi pacar ku|mau jadi pacar ku?|pacaran yu|pacaran yuk|hayu|hayuk|hayuh|ikut gak|ikut ga|ikut gk|ikut|ikut nggak|ikut ngak|sini|free premium|premium free|gratis premium|premium gratis|mau gak|mau ga|mau ngak|mau nggak|ikutt)$/i;
handler.command = new RegExp();

export default handler;

const baka = [
"./vn/owernya.mp3",
]