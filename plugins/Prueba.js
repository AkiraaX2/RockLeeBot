let handler = async function (m, { conn, text, usedPrefix }) {

        let pp = './src/Menu.jpg' 
        m.react('📚') 
  let m2 = `
> *Título:* 
> *Duración:*`
 await conn.sendButton(m.chat, m2, pp, [
    ['📚 MENU 📚', `${usedPrefix}allmenu`],
    ['🫅 OWNER 🫅', `${usedPrefix}owner`]
  ], null, [['🍒 Canal', `${fgcanal}`]], m)
}
handler.help = ['help']
handler.tags = ['dl']
handler.command = ['menu', 'help']
handler.disabled = false

export default handler