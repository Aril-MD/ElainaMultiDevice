import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
    let vn = "./vn/yowaimo2.mp3"
	conn.sendFile(m.chat, vn, "lemah.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix =
	/^(lemah|dasar lemah|lemah lu|lemah amat)$/i;
handler.command = new RegExp();

export default handler;
