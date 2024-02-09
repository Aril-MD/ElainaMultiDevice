let handler = async (m, { conn, args, usedPrefix, command }) => {

  let betAmount = parseInt(args[0]);
  if (isNaN(betAmount) || betAmount <= 0) {
    conn.reply(m.chat, `*Example*: .slot 1000`, m);
    return;
  }

  let user = global.db.data.users[m.sender];
  if (user.balance < betAmount) {
    conn.reply(m.chat, `Maaf, Balance Anda tidak cukup untuk membuat taruhan sebesar ${betAmount}.`, m);
    return;
  }

  let symbols = ['🍐', '🍊', '🍒', '🔔', '🍇'];

  let result = [];
  for (let i = 0; i < 3; i++) {
    let symbol = symbols[Math.floor(Math.random() * symbols.length)];
    result.push(symbol);
  }

  let win = result[1] === '🔔' && result[0] === '🍐' && result[2] === '🍇';

  let winAmount = win ? betAmount * 5 : 0;

  user.balance -= betAmount;
  user.balance += winAmount;

  conn.reply(
    m.chat,
    `[  🎰 | SLOTS ]
-------------------
${result.join(' : ')}
-------------------
[  🎰 | SLOTS ]
${win ? 'You win!' : 'You lose'}
${win ? `Anda memenangkan taruhan besar ${winAmount}` : ''}
Sisa balance anda: ${user.balance}`,
    m,
    {
      contextInfo: {
        externalAdReply: {
        showAdAttribution: true,
          title: `ᴇʟᴀɪɴᴀ ᴀɪ `,
          body: "",
          thumbnailUrl: thumb,
          sourceUrl: sid,
          mediaType: 1,
          renderLargerThumbnail: true, 
          showAdAttribution: true
        }
      }
    }
  );
};

handler.help = ['slot'];
handler.tags = ['game'];
handler.command = /^(slot)$/i;

export default handler;
