var handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
	const sections = "ʟɪsᴛ ᴏᴘᴛɪᴏɴs :\n\n┌ ◦ ᴡᴇʟᴄᴏᴍᴇ\n│ ◦ ᴅᴇʟᴇᴛᴇ\n│ ◦ ᴀɴᴛɪᴠɪᴇᴡᴏɴᴄᴇ\n│ ◦ sᴇʟғ\n│ ◦ ᴘᴜʙʟɪᴄ\n│ ◦ sɪᴍɪ\n│ ◦ ɴsғᴡ\n│ ◦ ᴘʀᴇᴍɴsғᴡᴄʜᴀᴛ\n│ ◦ ᴀɴᴛɪʟɪɴᴋ\n│ ◦ ᴀɴᴛɪᴄᴀʟʟ\n│ ◦ ᴀɴᴛɪᴅᴇʟᴇᴛᴇ\n│ ◦ ᴀɴᴛɪsᴘᴀᴍ\n│ ◦ ᴀᴜᴛᴏsᴛɪᴄᴋᴇʀ\n│ ◦ ᴀᴜᴛᴏʟᴇᴠᴇʟᴜᴘ\n│ ◦ ᴅᴇᴛᴇᴄᴛ\n│ ◦ ʀᴇsᴛʀɪᴄᴛ\n│ ◦ ɴʏɪᴍᴀᴋ\n│ ◦ ᴀᴜᴛᴏʀᴇᴀᴅ\n│ ◦ ᴘᴄᴏɴʟʏ\n│ ◦ ɢᴄᴏɴʟʏ\n│ ◦ sᴡᴏɴʟʏ\n└ ◦ ᴀɴɪᴍᴇᴜᴘᴅᴀᴛᴇ\n\n";
  const contoh = sections + usedPrefix + "ᴇɴᴀʙʟᴇ ɢᴄᴏɴʟʏ";
  let isEnable = /true|enable|(turn)?on|1/i.test(command);
  let chat = global.db.data.chats[m.chat];
  let user = global.db.data.users[m.sender];
  let bot = global.db.data.settings[conn.user.jid] || {};
  let type = (args[0] || '').toLowerCase();
  let isAll = false, isUser = false;
  
  switch (type) {
    case 'welcome':
      if (!m.isGroup) {
        if (!isOwner) {
          return await conn.reply(m.chat, 'Only owner can use this command in private chat!', m);
        }
      } else if (!isAdmin) {
        return await conn.reply(m.chat, 'Only admin can use this command in group chat!', m);
      }
      chat.welcome = isEnable;
      break;
    case 'detect':
      if (!m.isGroup) {
        if (!isOwner) {
          return await conn.reply(m.chat, 'Only owner can use this command in private chat!', m);
        }
      } else if (!isAdmin) {
        return await conn.reply(m.chat, 'Only admin can use this command in group chat!', m);
      }
      chat.detect = isEnable;
      break;
    case 'viewonce':
    case 'antiviewonce':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          return await conn.reply(m.chat, 'Only admin or owner can use this command in group chat!', m);
        }
      }
      chat.viewonce = isEnable;
      break;
    case 'delete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          return await conn.reply(m.chat, 'Only admin or owner can use this command in group chat!', m);
        }
      }
      chat.delete = isEnable;
      break;
    case 'antidelete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          return await conn.reply(m.chat, 'Only admin or owner can use this command in group chat!', m);
        }
      }
      chat.delete = !isEnable;
      break;
    case 'document':
      chat.useDocument = isEnable;
      break;
    case 'self':
      isAll = true;
      if (!isROwner) {
        return await conn.reply(m.chat, 'Only regular owner can use this command!', m);
      }
      global.opts['self'] = isEnable;
      break;
    case 'public':
      isAll = true;
      if (!isROwner) {
        return await conn.reply(m.chat, 'Only regular owner can use this command!', m);
      }
      global.opts['self'] = !isEnable;
      break;
    case 'antilink':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          return await conn.reply(m.chat, 'Only admin or owner can use this command in group chat!', m);
        }
      }
      chat.antiLink = isEnable;
      break;
    case 'autoSticker':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          return await conn.reply(m.chat, 'Only admin or owner can use this command in group chat!', m);
        }
      }
      chat.autoSticker = isEnable;
      break;
    case 'autoupnime':
      if (!isROwner) {
        return await conn.reply(m.chat, 'Only regular owner can use this command!', m);
      }
      chat.updateAnime = isEnable;
      break;
    case 'simi':
      if (!isROwner) {
        return await conn.reply(m.chat, 'Only regular owner can use this command!', m);
      }
      chat.simi = isEnable;
      break;
    case 'antispam':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          return await conn.reply(m.chat, 'Only admin or owner can use this command in group chat!', m);
        }
      }
      chat.antiSpam = isEnable;
      break;
    case 'anticall':
      isAll = true;
      if (!isOwner) {
        return await conn.reply(m.chat, 'Only owner can use this command!', m);
      }
      chat.anticall = isEnable;
      break;
    case 'nsfw':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          return await conn.reply(m.chat, 'Only admin or owner can use this command in group chat!', m);
        }
      }
      chat.nsfw = isEnable;
      break;
    case 'premnsfwchat':
      if (m.isGroup) {
        if (!isROwner) {
          return await conn.reply(m.chat, 'Only regular owner can use this command!', m);
        }
      }
      chat.premnsfw = isEnable;
      break;
    case 'autolevelup':
      isUser = true;
      user.autolevelup = isEnable;
      break;
    case 'restrict':
      isAll = true;
      if (!isOwner) {
        return await conn.reply(m.chat, 'Only owner can use this command!', m);
      }
      bot.restrict = isEnable;
      break;
    case 'nyimak':
      isAll = true;
      if (!isROwner) {
        return await conn.reply(m.chat, 'Only regular owner can use this command!', m);
      }
      global.opts['nyimak'] = isEnable;
      break;
    case 'autoread':
      isAll = true;
      if (!isROwner) {
        return await conn.reply(m.chat, 'Only regular owner can use this command!', m);
      }
      global.opts['autoread'] = isEnable;
      break;
    case 'pconly':
    case 'privateonly':
      isAll = true;
      if (!isROwner) {
        return await conn.reply(m.chat, 'Only regular owner can use this command!', m);
      }
      global.opts['pconly'] = isEnable;
      break;
    case 'gconly':
    case 'grouponly':
      isAll = true;
      if (!isROwner) {
        return await conn.reply(m.chat, 'Only regular owner can use this command!', m);
      }
      global.opts['gconly'] = isEnable;
      break;
    case 'swonly':
    case 'statusonly':
      isAll = true;
      if (!isROwner) {
        return await conn.reply(m.chat, 'Only regular owner can use this command!', m);
      }
      global.opts['swonly'] = isEnable;
      break;
    default:
      if (!/[01]/.test(command)) return await conn.reply(m.chat, contoh, m);
  }

  conn.reply(m.chat, `*––––––『 OPTIONS 』––––––*\n🗂️ *Type:* ${type}\n📊 *Status:* Success ✅\n🎚️ *Options:* ${isEnable ? 'Enable' : 'Disable'}\n📣 *For:* ${isAll ? 'This Bot' : isUser ? '' : 'This Chats'}`, m);
};

handler.help = ['enable', 'disable'].map(v => v + 'able <option>');
handler.tags = ['group', 'owner'];
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i;

export default handler;
