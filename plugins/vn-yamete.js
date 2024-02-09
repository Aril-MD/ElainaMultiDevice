import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, `${baka.getRandom()}`, "yamte.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(yamete|yamate|yameteh|yametekudasai|yametehkudasai|yamete kudasai|yameteh kudasai)$/i;
handler.command = new RegExp();

export default handler;

const baka = [
"./vn/yamte.mp3",
]