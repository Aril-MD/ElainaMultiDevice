import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, `${baka.getRandom()}`, "anjay.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(anjay|anjai|anjayy)$/i;
handler.command = new RegExp();

export default handler;

const baka = [
"./vn/anjay.mp3",
]