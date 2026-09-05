const fs = require('fs')

global.owner = "509" //owner number
global.footer = "Just Noctis" //footer section
global.status = false //"self/public" section of the bot
global.prefa = ['','!','.',',','🐤','🗿']
global.owner = ['62']
global.xprefix = '.'
global.gambar = "https://files.catbox.moe/9vti1a.png"
global.OWNER_NAME = "@PrincePremium" //
global.DEVELOPER = ["50958110376"] //
global.BOT_NAME = "Noctis crasher xmd"
global.bankowner = "Noctis crasher xmd"
global.creatorName = "Noctis crasher xmd"
global.ownernumber = '50958110376'  //creator number
global.location = "haïti, haïti haïti"
global.prefa = ['','!','.','#','&']
//================DO NOT CHANGE OR YOU'LL GET AN ERROR============
global.botName = "Noctis crasher xmd"
global.version = "1.0.1"
global.botname = "Noctis crasher xmd"
global.author = "PrincePremiumdev "
global.themeemoji = "🥷"
global.wagc = 'https://whatsapp.com/channel/0029VbDClYr1noz35rhw1X2T'
global.thumbnail = 'https://files.catbox.moe/9vti1a.png'
global.richpp = ' '
global.packname = "Sticker By PrincePremiumdev"
global.author = "PrincePremiumdev "
global.creator = "50958110376@s.whatsapp.net"
global.ownername = 'Trust' 
global.onlyowner = `Only Prince Premium dev can use this Command 🥶🥷`
  // reply 
global.database = `*To Exist In The Database Contact The Owner of this bot*`
  global.mess = {
wait: "*Configurating.......*",
   success: "*Successfully acknowledged ☑️*",
   on: "*Activated ✅*", 
   prem: "*Feature For Premium Users only*", 
   off: "*Deactivated 📛*",
   query: {
       text: "*Please, Provide A Text Query 📑*",
       link: "Please, provide a valid link 🔗*",
   },
   error: {
       fitur: "*Status 🌐: Feature Or Command error ❌*",
   },
   only: {
       group: "*Group only feature ❌*",
private: "*Private chat feature only ❌*",
       owner: "*Owner feature only ❌*",
       admin: "*bot owner feature only ❌*",
       badmin: "*Seek admin privilege's to use this command ❌*",
       premium: "*Availabe for premium users only ❌*",
   }
}

global.hituet = 0
//false=disable and true=enable
global.autoviewstatus = false
global.autoread = false //auto read messages
global.autobio = true //auto update bio
global.anti92 = true //auto block +92 
global.autoswview = true //auto view status/story

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})

//Property of PrincePremium 
//owner number:+50958110376
//telegram :@Princechistze
