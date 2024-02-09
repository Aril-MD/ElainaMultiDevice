const rewards = {
    limit: 11,
  }
  const cooldown = 33320000
  let handler = async (m,{ conn} ) => {
    let user = global.db.data.users[m.sender]
    if (new Date - user.lastclaim < cooldown) throw `*ʏᴏᴜ ʜᴀᴠᴇ ᴀʟʀᴇᴀᴅʏ ᴄʟᴀɪᴍᴇᴅ ᴛʜɪs ᴅᴀɪʟʏ ʟɪᴍɪᴛ!, ᴡᴀɪᴛ ғᴏʀ* :\n${((user.lastclaim + cooldown) - new Date()).toTimeString()}`
    let text = ''
    for (let reward of Object.keys(rewards)) {
      if (!(reward in user)) continue
      user[reward] += rewards[reward]
      text += `*+${rewards[reward]}* ${reward}\n`
    }
    conn.reply(m.chat, text.trim(), m)
    user.lastclaim = new Date * 1
  }
  handler.help = ['claimlimit']
  handler.tags = ['main']
  handler.command = /^(claim|gratis)$/i
  
  handler.cooldown = cooldown
  
  export default handler