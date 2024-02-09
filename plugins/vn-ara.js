import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, `${ara.getRandom()}`, "ara.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(Ara ara|ara ara|Ara|ara)$/i;
handler.command = new RegExp()

export default handler;

const ara = [
"./vn/ara.mp3",
"./vn/ara1.mp3",
"./vn/ara2.mp3",
"./vn/ara3.mp3",
"./vn/ara4.mp3",
]