import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, `${yare.getRandom()}`, "yare.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(Yare yare|yare yare|Yare|yare|y?)$/i;
handler.command = new RegExp()

export default handler;

const yare = [
"./vn/yare.mp3",
]