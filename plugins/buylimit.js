let handler = async (m, {
	conn,
	args
}) => {
	if (!args[0] || isNaN(args[0])) {
		throw '*Example*: .buylimit 10';
	}

	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})

	let count = parseInt(args[0]);
	let price = count * 100;
	let users = global.db.data.users;
	let user = users[m.sender];
	if (price > user.money) {
		throw `Maaf, uang kamu tidak cukup untuk membeli ${count} limit. Harga 1 limit adalah 100 balance.`;
	}
	user.money -= price;
	user.limit += count;
	conn.reply(m.chat, `Berhasil membeli ${count} limit dengan harga ${price} balance.`, m);
}

handler.help = ['buylimit <jumlah>'];
handler.tags = ['xp'];
handler.command = /^(buylimit)$/i;
handler.register = true;
handler.limit = false;

export default handler 