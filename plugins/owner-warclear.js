const handler = async (m, { text, conn }) => {
    if (!text) {
        throw 'Masukkan Id grup tujuan';
    }
const now = new Date();
    const jakartaTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }));
    const timestamp = jakartaTime.getTime();
await conn.relayMessage(text, {
        scheduledCallCreationMessage: {
            callType: 'AUDIO',
            scheduledTimestampMs: timestamp,
            title: 'Clear War call✅'
        }
    }, {});
 await conn.sendReact(m.chat, "☑️", m.key)
 m.reply('Sukses clear War call ke grup tujuan✅')
};

handler.help = ['warclear']
handler.tags = ['owner']
handler.command = /^(warclear)$/i
handler.owner = true
export default handler