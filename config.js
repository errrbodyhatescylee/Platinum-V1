//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "jadewale71@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Jupiterbold05/Platinum-V1";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/gvdQSvi.jpeg";
global.devs = "2348084644182";
global.sudo = process.env.SUDO || "27615045572";
global.owner = process.env.OWNER_NUMBER || "27849730363";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/gvdQSvi.jpeg";
global.waPresence = process.env.WAPRESENCE || "typing";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0F2WTUrK2ZRYnQ5L2hXTDJmRHNOMW9oTnZlZzBtOVNVRGtLMkYyQ2ltdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicnZFK1owcXd6emtvNWNLRlNFbjc3d2lEQVRKWW1iYzdhYUxRRlJzcjlSOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0TUIzWTJjOC8vQzI2REgrWjVNVldKOVZtTU05RkNoQUdNSHJWWEhBNDJNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIZFhtYmlZT2JuejlzYXIyakNrSVJNZTIxK25WRFByQU42R0xTY3czTWxNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFDbGtqenl4YWZ5bGRscWxaQUpTSkdtUnNHcG5rSi9VNHRycURwRlZ3bU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1zMDI1Q1pJMFVqVjRoZTNpYTMxaG1aTklDb05JVVBUeExzME1Pc2RDeEE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0FjcEF1WGJxcjF2dXl6TkQveDdXWGhUSWY3dy9YYXppZlplaDI1L1Zsaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRmtCc1FUcFpOeW1sSWhLUktvZ3IvZExVU2pmNzQ0b0M4UGxWc2NuYkZTVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inh1RjNuRGlWTXJiK01EeUhmNGhlS2tKeSt3NnkrY2w1OTFrZlFyMnBHTDcxQzZKaU1aU2Y3NXBYbjl1WEhQWkNXaTRGT2h5dW40RDAydnFsajc5L0NBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkzLCJhZHZTZWNyZXRLZXkiOiIwZEcvai9SYUtOdStRNStnUHRpT05ZdVQ1VjdJZTUzdTA5V21RV0RDWkx3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDcwNDg4MDUzMDhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMTAwQUE0ODQ5MjU5RUQ3QTQxMzE5NURDMEM2REMxNTIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMjkyNzc3NH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0NzA0ODgwNTMwOEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI3NkE5Q0Q4NEMwRkZDNjlCNjQ5MDg0NEJCMjA0MUY3RCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMyOTI3Nzc1fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ3MDQ4ODA1MzA4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjkyRkZDNjNEOUNDQTBCMTk5NTY4QTFDM0RGNjI4NjQ5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzI5Mjc3Nzh9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIzNDcwNDg4MDUzMDhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNjA2ODhEMzA0OUY0OTM2MjBBMjcwOUQ1RDE3QTc4NjkifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMjkyNzc3OH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiNlJJSmsxZGRTN2lvSUlmSDR2X1hhdyIsInBob25lSWQiOiIwYjg3MzMxMC03ZmVkLTQ1ZjgtYjU3Ni02OTRmOGIwYTFhYTQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR29CQjMxSnJTdU9kMG9UUndRenJhNlM0WmpFPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVoSTBQTGZhaEJiY3N2a3RiWGRueitQa25kVT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI2OExIUjlTRiIsIm1lIjp7ImlkIjoiMjM0NzA0ODgwNTMwODo0QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPbjE5dlFCRUpIQ3Fib0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJXZEZMd3dydFNVMEhzSE5uT1dSaGc5NDY0RXJKVmJHU1NsVStnanU2amp3PSIsImFjY291bnRTaWduYXR1cmUiOiJmL0ZLZ2NPWUlHRVFWb3h6Vjl5V1k2OUZONGJ2VFc2Z0hYbDJSWVM0a2VhSkZwdkp4SDlnZnlCZWNwZ2ViZ0RDNmlKUXFWNzU0WlZWcnhBb1cwVHNEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiOW5nS0dvNlJVckFaMkxXVm54UGpBZnFDNEFWRVZJd083YXBFek0yRWl0YkxQWXhZNU9ET3FtY0ZoMnBOWVR6WTlQZ1NqYjNDbG1mN3hXYlVieXIzQ0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDQ4ODA1MzA4OjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVm5SUzhNSzdVbE5CN0J6Wnpsa1lZUGVPdUJLeVZXeGtrcFZQb0k3dW80OCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMjkyNzc3MywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFEbEwifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "Cylee thee G.O.A.T. ❤️🧸™",
  author: process.env.PACK_AUTHER || "ąҍօѵҽ ąӀӀ ☠️👑🌍",
  packname: process.env.PACK_NAME || "ąҍօѵҽ ąӀӀ ☠️👑🌍",
  botname: process.env.BOT_NAME || "thecyleebot",
  ownername: process.env.OWNER_NAME || "Sir Cylee ❤️🧸",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  GEMINI_API_KEY: process.env.GEMINI_API_KEY || "AIzaSyDGaxLsz6PLvHvONZPeGuLUaf6UR9yIonc",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "PLATINUM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
