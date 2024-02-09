import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, `${wibu.getRandom()}`, "wibu.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(wibu|Wibu|dasar wibu)$/i;
handler.command = new RegExp();

export default handler;

const wibu = [
"./vn/wibu.mp3",
"./vn/wibu1.mp3",
]