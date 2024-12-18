const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348106008290";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_57_12_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDM4LFxuICAgICAgICA3MyxcbiAgICAgICAgOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDczLFxuICAgICAgICA1NixcbiAgICAgICAgMjUsXG4gICAgICAgIDUxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI4LFxuICAgICAgICAzMixcbiAgICAgICAgMjI4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDc0LFxuICAgICAgICA1NCxcbiAgICAgICAgODAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDYxLFxuICAgICAgICA3MixcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0LFxuICAgICAgICA0MCxcbiAgICAgICAgODMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTcsXG4gICAgICAgIDgwLFxuICAgICAgICAxODIsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDQ1LFxuICAgICAgICA0NixcbiAgICAgICAgMjQxLFxuICAgICAgICA4MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxMzksXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNixcbiAgICAgICAgNyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMDksXG4gICAgICAgIDMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjI3LFxuICAgICAgICA4MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzksXG4gICAgICAgIDQ0LFxuICAgICAgICA2LFxuICAgICAgICAzMixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAzMyxcbiAgICAgICAgNzksXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODUsXG4gICAgICAgIDU4LFxuICAgICAgICA2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDg5LFxuICAgICAgICAyNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDc4LFxuICAgICAgICA1LFxuICAgICAgICAxMyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTY5LFxuICAgICAgICA5NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjksXG4gICAgICAgIDI0MyxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxODgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNyxcbiAgICAgICAgMTUxLFxuICAgICAgICA5NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjcsXG4gICAgICAgIDEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDExMSxcbiAgICAgICAgNSxcbiAgICAgICAgOTksXG4gICAgICAgIDE0NixcbiAgICAgICAgMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMixcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE2LFxuICAgICAgICA1NixcbiAgICAgICAgMjQ4LFxuICAgICAgICA5NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDM0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTMwLFxuICAgICAgICA5MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxODIsXG4gICAgICAgIDExLFxuICAgICAgICA5MixcbiAgICAgICAgMTk1LFxuICAgICAgICA3NixcbiAgICAgICAgNDcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzIsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2MixcbiAgICAgICAgNixcbiAgICAgICAgMTQxLFxuICAgICAgICA5LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA5NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDM1LFxuICAgICAgICAzNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTkxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2MixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDM3LFxuICAgICAgICA5NCxcbiAgICAgICAgODMsXG4gICAgICAgIDcwLFxuICAgICAgICA2OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQ2LFxuICAgICAgICA4MixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4NixcbiAgICAgICAgOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTkxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjksXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzQsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJSeTNZN3hWcEhPUElnTmN0RitmL1RzTjhSVzBPOUVXMHJYdEZqcjFnRXZvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJlM1VLMjRRaFN3ZXl5Mm5NX0lfR2l3XCIsXG4gIFwicGhvbmVJZFwiOiBcImZmYWE5ZmJlLTk3YTUtNDhlMC05ZjcxLWNmNWUwMmM1MWI0ZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NixcbiAgICAgIDQ4LFxuICAgICAgMTMwLFxuICAgICAgMTI1LFxuICAgICAgMjE2LFxuICAgICAgMTIyLFxuICAgICAgMTQsXG4gICAgICAxMCxcbiAgICAgIDIzMixcbiAgICAgIDEwLFxuICAgICAgMTY3LFxuICAgICAgMjI3LFxuICAgICAgMzMsXG4gICAgICA0OCxcbiAgICAgIDg5LFxuICAgICAgODAsXG4gICAgICAyNDAsXG4gICAgICA1NyxcbiAgICAgIDE4NCxcbiAgICAgIDgwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzLFxuICAgICAgMTI2LFxuICAgICAgMjQ1LFxuICAgICAgNjAsXG4gICAgICAxOTgsXG4gICAgICAxODksXG4gICAgICA3OSxcbiAgICAgIDEzMCxcbiAgICAgIDU4LFxuICAgICAgMjM4LFxuICAgICAgMjE1LFxuICAgICAgNDYsXG4gICAgICAyMTIsXG4gICAgICAxNyxcbiAgICAgIDYxLFxuICAgICAgMTA2LFxuICAgICAgMjUzLFxuICAgICAgNDUsXG4gICAgICAxMjcsXG4gICAgICAxODZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWkMzNUhTUTdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMDYwMDgyOTA6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJTYXJhaCBBdWd1c3RpbmVcIixcbiAgICBcImxpZFwiOiBcIjIwNDQxOTM3MTE2MzcyODoxMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOVEQyL29IRU9PY2lyc0dHQVlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjd3S1gxYlFJL1gwZUZEQk5xWlJGYjFDNVNIcE9XajRzTlJheHR0dGlQRFE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYUtJRjJ3R0c0Ly9wL1FKUnl3TVZNcjUrVjhnaENnS3JvbVVyUFJNTTVxSm41VUN6enZkM1pCK25lb1djZ3N0d09ZMFQweUhaSVUzMktBTGRFL3VjRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidUdMQ1UxVXFVUDk5Qi9ic2RkOTB3Z3kwcUtYem9tRUNkWlkwOUtzallYT2xRaUczMThaeENzZmMrR01ldlZ3dmlYOVJ4Nm5UU1oydUpzaVhyVzkraGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEwNjAwODI5MDoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDUyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQ1MTIyMzAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBSjBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFKMC5qc29uIjogIntcImtleURhdGFcIjpcIkFkUiswblNvL3QrbnRTVGJ2QXNHcUtiTzJabE85NkR3eEZ5M0FacGxTTFU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjEzNjQwMDM0MCxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzM0NDY0OTYyMzgyXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
