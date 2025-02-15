const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*╭──────────────●●►*
> *BOT OWNER:*
*|* *KALEEM ZIDDI*

> *KALEEM MD REPO:*
*|* *https://Wa.me/+𝟗𝟐𝟑𝟑𝟐𝟏𝟔𝟓𝟔𝟒𝟔𝟖by/?text=𝑯𝒊-𝑲𝑨𝑳𝑬𝑬𝑴𝒁𝑰𝑫𝑫𝑰*

> *KALEEM CHANNEL:*
*|* *https://whatsapp.com/channel/0029Vaw6hp035fLlshIEeR1A*
*╰──────────────●●►*

> *update command Done*
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '12036323288171807@newsletter',
      newsletterName: "UMAR",
      serverMessageId: 999
    },
externalAdReply: { 
title: 'KALEEM MD',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/Sobxsparl/KALEEM-MD" ,
thumbnailUrl: "https://files.catbox.moe/m1rf91.jpg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
