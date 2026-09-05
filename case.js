
require('./setting/config')
const { 
  default: baileys, proto, jidNormalizedUser, generateWAMessage, 
  generateWAMessageFromContent, getContentType, prepareWAMessageMedia 
} = require("@whiskeysockets/baileys");

const {
  downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, 
  generateWAMessageContent, makeInMemoryStore, MediaType, areJidsSameUser, 
  WAMessageStatus, downloadAndSaveMediaMessage, AuthenticationState, 
  GroupMetadata, initInMemoryKeyStore, MiscMessageGenerationOptions, 
  useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, 
  WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, 
  WALocationMessage, WAContextInfo, WAGroupMetadata, ProxyAgent, 
  waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, 
  WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, 
  WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, 
  MediariyuInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, 
  WAMediaUpload, mentionedJid, processTime, Browser, MessageType, 
  Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, 
  GroupSettingChange, DisriyuectReason, WASocket, getStream, WAProto, 
  isBaileys, AnyMessageContent, fetchLatestBaileysVersion, 
  templateMessage, InteractiveMessage, Header 
} = require("@whiskeysockets/baileys");

const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const axios = require('axios')
const fsx = require('fs-extra')
const crypto = require('crypto')
const googleTTS = require('google-tts-api')
const ffmpeg = require('fluent-ffmpeg')
const speed = require('performance-now')
const timestampp = speed();
const jimp = require("jimp")
//const readMore = more.repeat(4001);
const latensi = speed() - timestampp
const moment = require('moment-timezone')
const yts = require('yt-search');
const ytdl = require('@vreden/youtube_scraper');
const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins, generateProfilePicture } = require('./allfunc/storage')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid, addExif } = require('./allfunc/exif.js')
const richpic = fs.readFileSync(`./media/image1.jpg`)
const numberEmojis = ["1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"];
// At the very top of your index.js or main bot file
const tictactoeGames = {}; // Stores ongoing Tic-Tac-Toe games per chat
const hangmanGames = {};   // Stores ongoing Hangman games per chat
const hangmanVisual = [
    "😃🪓______", // 6 attempts left
    "😃🪓__|____",
    "😃🪓__|/___",
    "😃🪓__|/__",
    "😃🪓__|/\\_",
    "😃🪓__|/\\_", 
    "💀 Game Over!" // 0 attempts left
];
const { getSetting, setSetting } = require("./setting/Settings.js")
const groupCache = new Map(); // Cache group metadata

module.exports = devtrust = async (devtrust, m, chatUpdate, store) => {
const { from } = m
try {
      

const body = (
    m.mtype === "conversation" ? m.message?.conversation :
    m.mtype === "extendedTextMessage" ? m.message?.extendedTextMessage?.text :

    m.mtype === "imageMessage" ? m.message?.imageMessage?.caption :
    m.mtype === "videoMessage" ? m.message?.videoMessage?.caption :
    m.mtype === "documentMessage" ? m.message?.documentMessage?.caption || "" :
    m.mtype === "audioMessage" ? m.message?.audioMessage?.caption || "" :
    m.mtype === "stickerMessage" ? m.message?.stickerMessage?.caption || "" :

    m.mtype === "buttonsResponseMessage" ? m.message?.buttonsResponseMessage?.selectedButtonId :
    m.mtype === "listResponseMessage" ? m.message?.listResponseMessage?.singleSelectReply?.selectedRowId :
    m.mtype === "templateButtonReplyMessage" ? m.message?.templateButtonReplyMessage?.selectedId :
    m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg?.nativeFlowResponseMessage?.paramsJson).id :


    m.mtype === "messageContextInfo" ? m.message?.buttonsResponseMessage?.selectedButtonId ||
    m.message?.listResponseMessage?.singleSelectReply?.selectedRowId || m.text :
    m.mtype === "reactionMessage" ? m.message?.reactionMessage?.text :
    m.mtype === "contactMessage" ? m.message?.contactMessage?.displayName :
    m.mtype === "contactsArrayMessage" ? m.message?.contactsArrayMessage?.contacts?.map(c => c.displayName).join(", ") :
    m.mtype === "locationMessage" ? `${m.message?.locationMessage?.degreesLatitude}, ${m.message?.locationMessage?.degreesLongitude}` :
    m.mtype === "liveLocationMessage" ? `${m.message?.liveLocationMessage?.degreesLatitude}, ${m.message?.liveLocationMessage?.degreesLongitude}` :
    m.mtype === "pollCreationMessage" ? m.message?.pollCreationMessage?.name :
    m.mtype === "pollUpdateMessage" ? m.message?.pollUpdateMessage?.name :
    m.mtype === "groupInviteMessage" ? m.message?.groupInviteMessage?.groupJid :

    m.mtype === "viewOnceMessage" ? (m.message?.viewOnceMessage?.message?.imageMessage?.caption ||
                                     m.message?.viewOnceMessage?.message?.videoMessage?.caption ||
                                     "[Pesan sekali lihat]") :
    m.mtype === "viewOnceMessageV2" ? (m.message?.viewOnceMessageV2?.message?.imageMessage?.caption ||
                                       m.message?.viewOnceMessageV2?.message?.videoMessage?.caption ||
                                       "[Pesan sekali lihat]") :
    m.mtype === "viewOnceMessageV2Extension" ? (m.message?.viewOnceMessageV2Extension?.message?.imageMessage?.caption ||
                                                m.message?.viewOnceMessageV2Extension?.message?.videoMessage?.caption ||
                                                "[Pesan sekali lihat]") :

    m.mtype === "ephemeralMessage" ? (m.message?.ephemeralMessage?.message?.conversation ||
                                      m.message?.ephemeralMessage?.message?.extendedTextMessage?.text ||
                                      "[Pesan sementara]") :

    m.mtype === "interactiveMessage" ? "[Pesan interaktif]" :

    m.mtype === "protocolMessage" ? "[Pesan telah dihapus]" :

    ""
);
const prefix = '.'; // Only dot as prefix
const owner = JSON.parse(fs.readFileSync('./allfunc/owner.json'))
const Premium = JSON.parse(fs.readFileSync('./allfunc/premium.json'))
const isCmd = body.startsWith(prefix);
const args = body.slice(prefix.length).trim().split(/ +/); // everything after the dot
const command = args.shift().toLowerCase(); // first word is the command
const text = args.join(" ")
const botNumber = await devtrust.decodeJid(devtrust.user.id)
const isCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isDev = owner
  .map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net')
  const isOwner = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender);
const isPremium = [botNumber, ...Premium].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const qtext = q = args.join(" ")
const tempMailData = {};
const quoted = m.quoted ? m.quoted : m
const from = mek.key.remoteJid
const { spawn: spawn, exec } = require('child_process')
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupMetadata = m.isGroup ? await devtrust.groupMetadata(from).catch(e => {}) : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const groupName = m.isGroup ? groupMetadata.subject : "";
const pushname = m.pushName || "No Name"
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const mime = (quoted.msg || quoted).mimetype || ''
const todayDateWIB = new Date().toLocaleDateString('id-ID', {
  timeZone: 'Asia/Jakarta',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});
const bubbleCharMap = {
    'a':'ⓐ','b':'ⓑ','c':'ⓒ','d':'ⓓ','e':'ⓔ','f':'ⓕ','g':'ⓖ','h':'ⓗ','i':'ⓘ','j':'ⓙ',
    'k':'ⓚ','l':'ⓛ','m':'ⓜ','n':'ⓝ','o':'ⓞ','p':'ⓟ','q':'ⓠ','r':'ⓡ','s':'ⓢ','t':'ⓣ',
    'u':'ⓤ','v':'ⓥ','w':'ⓦ','x':'ⓧ','y':'ⓨ','z':'ⓩ',
    'A':'Ⓐ','B':'Ⓑ','C':'Ⓒ','D':'Ⓓ','E':'Ⓔ','F':'Ⓕ','G':'Ⓖ','H':'Ⓗ','I':'Ⓘ','J':'Ⓙ',
    'K':'Ⓚ','L':'Ⓛ','M':'Ⓜ','N':'Ⓝ','O':'Ⓞ','P':'Ⓟ','Q':'Ⓠ','R':'Ⓡ','S':'Ⓢ','T':'Ⓣ',
    'U':'Ⓤ','V':'Ⓥ','W':'Ⓦ','X':'Ⓧ','Y':'Ⓨ','Z':'Ⓩ'
};
const glitchCharMap = {
    'a':'̷a','b':'̷b','c':'̷c','d':'̷d','e':'̷e','f':'̷f','g':'̷g','h':'̷h','i':'̷i',
    'j':'̷j','k':'̷k','l':'̷l','m':'̷m','n':'̷n','o':'̷o','p':'̷p','q':'̷q','r':'̷r',
    's':'̷s','t':'̷t','u':'̷u','v':'̷v','w':'̷w','x':'̷x','y':'̷y','z':'̷z',
    'A':'̷A','B':'̷B','C':'̷C','D':'̷D','E':'̷E','F':'̷F','G':'̷G','H':'̷H','I':'̷I',
    'J':'̷J','K':'̷K','L':'̷L','M':'̷M','N':'̷N','O':'̷O','P':'̷P','Q':'̷Q','R':'̷R',
    'S':'̷S','T':'̷T','U':'̷U','V':'̷V','W':'̷W','X':'̷X','Y':'̷Y','Z':'̷Z'
};
const fancyCharMap = {
    'a': '𝒜', 'b': 'ℬ', 'c': '𝒞', 'd': '𝒟', 'e': 'ℰ', 'f': 'ℱ', 'g': '𝒢',
    'h': 'ℋ', 'i': 'ℐ', 'j': '𝒥', 'k': '𝒦', 'l': 'ℒ', 'm': 'ℳ', 'n': '𝒩',
    'o': '𝒪', 'p': '𝒫', 'q': '𝒬', 'r': 'ℛ', 's': '𝒮', 't': '𝒯', 'u': '𝒰',
    'v': '𝒱', 'w': '𝒲', 'x': '𝒳', 'y': '𝒴', 'z': '𝒵',
    'A': '𝒜', 'B': 'ℬ', 'C': '𝒞', 'D': '𝒟', 'E': 'ℰ', 'F': 'ℱ', 'G': '𝒢',
    'H': 'ℋ', 'I': 'ℐ', 'J': '𝒥', 'K': '𝒦', 'L': 'ℒ', 'M': 'ℳ', 'N': '𝒩',
    'O': '𝒪', 'P': '𝒫', 'Q': '𝒬', 'R': 'ℛ', 'S': '𝒮', 'T': '𝒯', 'U': '𝒰',
    'V': '𝒱', 'W': '𝒲', 'X': '𝒳', 'Y': '𝒴', 'Z': '𝒵',
};
async function loading() {
    const toki = [
        `ℜ𝔬𝔟𝔦𝔫 𝔛𝔡 𝔦𝔫𝔦𝔱𝔦𝔞𝔩𝔦𝔷𝔦𝔫𝔤...`,

        `ℜ𝔬𝔟𝔦𝔫 𝔛𝔡 𝔠𝔬𝔫𝔫𝔢𝔠𝔱𝔢𝔡 𝔰𝔲𝔠𝔠𝔢𝔰𝔰𝔣𝔲𝔩𝔩𝔶...`
    ];

    // Send initial message
    let msg = await devtrust.sendMessage(from, { text: "ℜ𝔬𝔟𝔦𝔫 𝔛𝔡 𝔦𝔫𝔦𝔱𝔦𝔞𝔩𝔦𝔷𝔦𝔫𝔤....." });

    // Loop to edit same message
    for (let i = 0; i < toki.length; i++) {
        await devtrust.sendMessage(from, {
            text: toki[i],
            edit: msg.key
        });
        await new Promise(resolve => setTimeout(resolve, 200)); // smooth delay
    }
}
// SUDO 

const SUDO_FILE = './database/sudo.json';

function loadSudoList() {
  if (!fs.existsSync(SUDO_FILE)) {
    fs.writeFileSync(SUDO_FILE, JSON.stringify([]));
  }
  return JSON.parse(fs.readFileSync(SUDO_FILE));
}

function saveSudoList(data) {
  fs.writeFileSync(SUDO_FILE, JSON.stringify(data, null, 2));
}
// AZA 
const ACCOUNT_FILE = './database/accounts.json';

function loadAccounts() {
  if (!fs.existsSync(ACCOUNT_FILE)) {
    fs.writeFileSync(ACCOUNT_FILE, JSON.stringify({}));
  }
  return JSON.parse(fs.readFileSync(ACCOUNT_FILE));
}

function saveAccounts(data) {
  fs.writeFileSync(ACCOUNT_FILE, JSON.stringify(data, null, 2));
}
const reply = (teks) => {
    devtrust.sendMessage(m.chat, {
        text: teks,
        contextInfo: {
            mentionedJid: [sender],
            forwardingScore: 2,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "Just Prince",
                newsletterJid: "120363428122519422@newsletter", // Updated JID
            },
        }
    }, { quoted: m });
}
async function sendImage(imageUrl, caption) {
  devtrust.sendMessage(m.chat, {
    image: { url: imageUrl },
    caption,
    contextInfo: {
      forwardingScore: 2,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: "120363428122519422@newsletter",
        newsletterName: "Just Prince",
      }
    }
  }, { quoted: m });
}
const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);
const Richie = "Prince Dev";
if (!devtrust.public) {
if (!isCreator) return
}
const example = (teks) => {
return `Usage : *${prefix+command}* ${teks}`
}
let antilinkStatus = {};
if (!global.banned) global.banned = {} // stores banned users JIDs
if (getSetting(m.sender, "autobio", true)) {
    devtrust.updateProfileStatus(`Noctis Xmd Connected ☑️`).catch(_ => _)
}
if (isCmd)  {
    console.log(chalk.black(chalk.bgWhite('[ Noctis Xmd ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(body || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=>In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
}

if (getSetting(m.chat, "autoReact", false)) {
    const emojis = [
        "😁", "😂", "🤣", "😃", "😄", "😅", "😆", "😉", "😊",
        "😍", "😘", "😎", "🤩", "🤔", "😏", "😣", "😥", "😮", "🤐",
        "😪", "😫", "😴", "😌", "😛", "😜", "😝", "🤤", "😒", "😓",
        "😔", "😕", "🙃", "🤑", "😲", "😖", "😞", "😟", "😤", "😢",
        "😭", "😨", "😩", "🤯", "😬", "😰", "😱", "🥵", "🥶", "😳",
        "🤪", "🀄", "😠", "🀄", "😷", "🤒", "🤕", "🤢", "🤮", "🤧",
        "😇", "🥳", "🤠", "🤡", "🤥", "🤫", "🤭", "🧐", "🤓", "😈",
        "👿", "👹", "👺", "💀", "👻", "🖕", "🙏", "🤖", "🎃", "😺",
        "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "💋", "💌",
        "💘", "💝", "💖", "💗", "💓", "💞", "💕", "💟", "💔", "❤️"
    ];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    try {
        await devtrust.sendMessage(m.chat, {
            react: { text: randomEmoji, key: m.key },
        });
    } catch (err) {
        console.error('Error while reacting:', err.message);
    }
}

if (getSetting(m.chat, "autoTyping", false)) {
    devtrust.sendPresenceUpdate('composing', from)
}
if (getSetting(m.chat, "autoRecording", false)) {
    devtrust.sendPresenceUpdate('recording', from)
}
if (getSetting(m.chat, "autoRecordType", false)) {
    let xeonrecordin = ['recording','composing']
    let xeonrecordinfinal = xeonrecordin[Math.floor(Math.random() * xeonrecordin.length)]
    devtrust.sendPresenceUpdate(xeonrecordinfinal, from)
}
     
//----------------------Func End----------------//
if (getSetting(m.sender, "autoViewStatus", false) && m.key.remoteJid === "status@broadcast") {
    try {
        await devtrust.readMessages([m.key]);
        console.log(`👀 Viewed status from: ${m.key.participant}`);
    } catch (err) {
        console.log("❌ Error viewing status:", err);
    }
}

if (getSetting(m.chat, "autoRecording", false)) {
    devtrust.sendPresenceUpdate('recording', from)
}  
    
if (getSetting(m.chat, "autoTyping", false)) {
    devtrust.sendPresenceUpdate('composing', from)
}

if (getSetting(m.chat, "autoRecordType", false)) {
    let xeonrecordin = ['recording','composing']
    let xeonrecordinfinal = xeonrecordin[Math.floor(Math.random() * xeonrecordin.length)]
    devtrust.sendPresenceUpdate(xeonrecordinfinal, from)
}

if (getSetting(m.sender, "autoread", false)) {
   try {
      await devtrust.readMessages([m.key]) 
   } catch (e) {
      console.log("Auto-Read Error:", e)
   }
}

if (getSetting(m.sender, "banned", false)) {
    await devtrust.sendMessage(m.chat, { text: `⛔ You are banned from using this bot, @${m.sender.split('@')[0]}`, mentions: [m.sender] }, { quoted: m })
    return
}

if (getSetting(m.chat, "feature.autoreply", false)) {
   const autoReplyList = { "hi": "Hello 👋", "hello": "Hi there!", "I am Noctis Xmd😍 🥷": "Coolest Whatsapp bot 😌" }
   if (autoReplyList[m.text?.toLowerCase()]) {
      await devtrust.sendMessage(m.chat, { text: autoReplyList[m.text.toLowerCase()] }, { quoted: m })
   }
}
const antilinkGroups = JSON.parse(fs.readFileSync('./database/banned.json', 'utf-8') || '[]');
let chatbot = false; // Default state of the chatbot

if (m.isGroup && antilinkGroups.includes(m.chat)) {
    const linkRegex = /https?:\/\/[^\s]+/; // Regex to detect links
    if (linkRegex.test(m.text)) {
        // Delete the message
        await devtrust.sendMessage(m.chat, { delete: m.key });

        // Warn the sender
        reply(`⚠️ Links are not allowed in this group, @${m.sender.split('@')[0]}!`);

      //  Optional: Remove the sender (uncomment to enable)
         await devtrust.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
    }
}
if (getSetting(m.chat, "feature.antibadword", false)) {
   const badWords = ["fuck", "bitch", "sex", "nigga","bastard","fool","mumu","idiot","werey","mother","mama","ass","mad","dick","pussy","bast"]
   if (badWords.some(word => m.text?.toLowerCase().includes(word))) {
      await devtrust.sendMessage(m.chat, { text: `❌ @${m.sender.split('@')[0]} watch your language 😟!`, mentions: [m.sender] })
      await devtrust.sendMessage(m.chat, { delete: m.key })
   }
}
 
if (getSetting(m.chat, "feature.antibot", false)) {
   let botPrefixes = ['.', '!', '/', '#']
   if (botPrefixes.includes(m.text?.trim()[0])) {
      if (m.sender !== ownerNumber + "@s.whatsapp.net") {
         await devtrust.sendMessage(m.chat, { text: `🤖 Anti-Bot active! @${m.sender.split('@')[0]} not allowed.`, mentions: [m.sender] })
         await devtrust.sendMessage(m.chat, { delete: m.key })
      }
   }
}
//LOADING FUNCTION BY PRINCE 
async function nexusLoading() {
    const nexusMylove = [

        `Loading menu...`
    ];

    // Send initial message
    let msg = await devtrust.sendMessage(from, { text: "Connecting to Noctis Xmd 😍 server....." });

    // Loop to edit same message
    for (let i = 0; i < nexusMylove.length; i++) {
        await devtrust.sendMessage(from, {
            text: nexusMylove[i],
            edit: msg.key
        });
        await new Promise(resolve => setTimeout(resolve, 200)); // smooth delay
    }
}
//END OF FUNC
// Newsletter JIDs to auto-react to
const newsletterJids = ["120363428122519422@newsletter"];

// Extended emoji list for fun & variety
const newsletterEmojis = [
    '❤️', '🧡', '💛', '💚', '💙', '💜', '🤎', '🖤', '🤍', '💔', '❣️', '💕', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '🥺', '😊', '🙏', '😙', '😻', '🔥', '😀', '😍', '🥰', '😘', '🤗', '🤩', '😎', '😇', '⭐','🥳', '😋', '🎉', '🔥'
];

// Utility to pick random emoji fast
const hansRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Listen to incoming messages
devtrust.ev.on('messages.upsert', async (chatUpdate) => {
    try {
        const msg = chatUpdate.messages?.[0];
        if (!msg || msg.key.fromMe) return;

        const sender = msg.key.remoteJid;

        // ✅ Auto-react only to newsletter messages
        if (newsletterJids.includes(sender)) {
            const serverId = msg.newsletterServerId;
            if (serverId) {
                const emoji = hansRandom(newsletterEmojis);
                await devtrust.newsletterReactMessage(sender, serverId.toString(), emoji);
            }
        }

    } catch (err) {
        console.error("❌ Newsletter auto-reaction error:", err);
    }
});

if (m.message) {
    console.log(chalk.hex('#3498db')(`message " ${m.message} "  from ${pushname} id ${m.isGroup ? `group ${groupMetadata.subject}` : 'private chat'}`));
}

function formatUptime(seconds) {
    const days = Math.floor(seconds / (24 * 60 * 60));
    seconds = seconds % (24 * 60 * 60);
    const hours = Math.floor(seconds / (60 * 60));
    seconds = seconds % (60 * 60);
    const minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);

    let time = '';
    if (days > 0) time += `${days}d `;
    if (hours > 0) time += `${hours}h `;
    if (minutes > 0) time += `${minutes}m `;
    if (seconds > 0 || time === '') time += `${seconds}s`;

    return time.trim();
}

// Format RAM usage
function formatRam(total, free) {
    const used = (total - free) / (1024 * 1024 * 1024);
    const totalGb = total / (1024 * 1024 * 1024);
    const percent = ((used / totalGb) * 100).toFixed(1);
    return `${used.toFixed(1)}GB / ${totalGb.toFixed(1)}GB (${percent}%)`;
}

// Count total commands
function countCommands() {
    return 158; // Replace with actual command count
}

// Get mood emoji based on time
function getMoodEmoji() {
    const hour = getLagosTime().getHours();
    if (hour < 12) return '🌅';
    if (hour < 18) return '☀️';
    return '🌙';
}

// Get countdown to next day
function getCountdown() {
    const now = getLagosTime();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    
    const diff = tomorrow - now;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    return `(${hours}h ${minutes}m)`;
}

// Get current time in Africa/Lagos timezone
function getLagosTime() {
    try {
        // Try using Intl API for proper timezone handling
        const options = {
            timeZone: 'Africa/Lagos',
            hour12: false,
            hour: 'numeric',
            minute: 'numeric'
        };
        
        const formatter = new Intl.DateTimeFormat('en-GB', options);
        const parts = formatter.formatToParts(new Date());
        
        const hour = parts.find(part => part.type === 'hour').value;
        const minute = parts.find(part => part.type === 'minute').value;
        
        // Create a new Date object with the correct time
        const now = new Date();
        const lagosDate = new Date(now.toLocaleString('en-US', {timeZone: 'Africa/Lagos'}));
        
        return lagosDate;
    } catch (error) {
        // Fallback for environments without Intl API support
        const now = new Date();
        const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
        // Africa/Lagos is UTC+1
        return new Date(utc + (3600000 * 1));
    }
}
// count case
penis = fs.readFileSync("./case.js").toString(),
matches = penis.match(/case '[^']+'(?!.*case '[^']+')/g) || [],
caseCount = matches.length,
caseNames = matches.map(match => match.match(/case '([^']+)'/)[1]);

let totalCases = caseCount,
listCases = caseNames.join('\n⭔ '); 

async function autoJoinGroup(devtrust, inviteLink) {
  try {
    // Extract invite code from link
    const inviteCode = inviteLink.match(/([a-zA-Z0-9_-]{22})/)?.[1];
    
    if (!inviteCode) {
      throw new Error('Invalid invite link');
    }
    
    // Join the group
    const result = await devtrust.groupAcceptInvite(inviteCode);
    console.log('✅ Joined group:', result);
    return result;
    
  } catch (error) {
    console.error('❌ Failed to join group:', error.message);
    return null;
  }
}

// Format time specifically for Africa/Lagos
function formatLagosTime() {
    const lagosTime = getLagosTime();
    const hours = lagosTime.getHours().toString().padStart(2, '0');
    const minutes = lagosTime.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}

switch(command) {
case 'menu':{
await autoJoinGroup(devtrust, "https://chat.whatsapp.com/HBu4gLNl10IBUzrP8lpFYz?s=cl&p=a&mlu=4&ilr=4");
await devtrust.sendMessage(m.chat, {react: {text: '👦🏾', key: m.key}})
    
    const menuImages = [
       'https://files.catbox.moe/9vti1a.png'
       
    ];

    // Randomly select an image for the menu
    const devtrustImageUrl = menuImages[Math.floor(Math.random() * menuImages.length)];
    const used = process.memoryUsage();
    const cpus = os.cpus()[0];
    let uptime = runtime(process.uptime());
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const platform = os.platform();
    const date = new Date();
const readmore = String.fromCharCode(8206).repeat(4001) // this forces "read more"

    const menuText = `
╔═━━━✦✦✦━━━━━━═╗
 👑 *NOCTIS CRASHER XMD*
╚═━━━✦✦✦━━━━━━═╝

◆ *OWNER:* *PRINCE PREMIUM*
◆ *VERSION:* NOCTIS XMD V1
◆ *PREFIX:* ${prefix}
◆ *USER:* ${m.pushName}
◆ *PLAN:* not confirmed✓
◆ *TIME:* ${date.toLocaleTimeString('en-GB', { timeZone: 'Africa/Lagos' })} (Africa/Lagos)
◆ *UPTIME:* ${uptime}
◆ *Total Available Commands* : *${totalCases} Commands*
◆ *TODAY:* ${date.toLocaleDateString('en-GB', { weekday: 'long' })}
◆ *DATE:* ${date.toLocaleDateString('en-GB')}
◆ *PLATFORM:* ${platform} ${os.release()}
◆ *RUNTIME:* Node.js ${process.version}
◆ *CPU:* ${cpus.model} ${cpus.speed}MHz
◆ *RAM:* ${(totalMem - freeMem) / 1024 / 1024 / 1024}GB / ${(totalMem / 1024 / 1024 / 1024).toFixed(1)}GB
◆ *MODE:* ${devtrust.public ? '🌍 Public' : '🔒 Self'}
◆ *MOOD:* 🌸 (24h rotation)

━━━━━━━━━━━━━━━

${readMore}

🤖 *Ai Menu*
⊱ ${prefix}ai
⊱ ${prefix}gbt
⊱ ${prefix}gbt4
⊱ ${prefix}gpt5
⊱ ${prefix}metaai
⊱ ${prefix}codeai
⊱ ${prefix}triviaai
⊱ ${prefix}photoai
⊱ ${prefix}storyai

━━━━━━━━━━━━━━━

📌 *Group Management*  

⊱ ${prefix}hidetag 
⊱ ${prefix}tagall 
⊱ ${prefix}demote 
⊱ ${prefix}promote  
⊱ ${prefix}mute  
⊱ ${prefix}unmute  
⊱ ${prefix}join <link>
⊱ ${prefix}kick @tag   
⊱ ${prefix}left       
⊱ ${prefix}add 509xxx 
⊱ ${prefix}creategroup <name> 
⊱ ${prefix}resetlink 
⊱ ${prefix}grouplink   
⊱ ${prefix}kickadmins
⊱ ${prefix}kickall 
⊱ ${prefix}listadmins
⊱ ${prefix}listonline
⊱ ${prefix}opentime  
⊱ ${prefix}closetime   
⊱ ${prefix}antilink    
⊱ ${prefix}vcf

━━━━━━━━━━━━━━━

👨‍💻 *Owner menu*  
  
⊱ ${prefix}poem
⊱ ${prefix}newmail
⊱ ${prefix}readmail
⊱ ${prefix}deltmp
⊱ ${prefix}tempmail2
⊱ ${prefix}tempmail-inbox
⊱ ${prefix}github
⊱ ${prefix}addsudo
⊱ ${prefix}setsudo
⊱ ${prefix}listsudo
⊱ ${prefix}delsudo
⊱ ${prefix}rewrite 
⊱ ${prefix}codeai
⊱ ${prefix}npm
⊱ ${prefix}setpp
⊱ ${prefix}owner
⊱ ${prefix}repo
⊱ ${prefix}ban
⊱ ${prefix}unban
⊱ ${prefix}autoreply
⊱ ${prefix}antibadword
⊱ ${prefix}antibot
⊱ ${prefix}autoread
⊱ ${prefix}autobio
⊱ ${prefix}autorecording 
⊱ ${prefix}autotyping 
⊱ ${prefix}autoviewstatus
⊱ ${prefix}autoreact 
⊱ ${prefix}delete
⊱ ${prefix}block
⊱ ${prefix}unblock
⊱ ${prefix}alive
⊱ ${prefix}ping
⊱ ${prefix}self
⊱ ${prefix}public

━━━━━━━━━━━━━━━

🏌🏻‍♂️ *Fun menu*  

⊱ ${prefix}wouldyou
⊱ ${prefix}flirt
⊱ ${prefix}moe
⊱ ${prefix}sfw 
⊱ ${prefix}cartoonify
⊱ ${prefix}story
⊱ ${prefix}rate
⊱ ${prefix}ship
⊱ ${prefix}truthdare
⊱ ${prefix}compliment
⊱ ${prefix}roast
⊱ ${prefix}trivia
⊱ ${prefix}triviaai
⊱ ${prefix}moe
⊱ ${prefix}aipic
⊱ ${prefix}hentai
⊱ ${prefix}chinagirl
⊱ ${prefix}bluearchive
⊱ ${prefix}boypic
⊱ ${prefix}carimage
⊱ ${prefix}random-girl
⊱ ${prefix}hijab-girl
⊱ ${prefix}indonesia-girl
⊱ ${prefix}japan-girl
⊱ ${prefix}korean-girl
⊱ ${prefix}loli
⊱ ${prefix}malaysia-girl
⊱ ${prefix}profile-pictures
⊱ ${prefix}thailand-girl
⊱ ${prefix}tiktok-girl
⊱ ${prefix}vietnam-girl
⊱ ${prefix}joke
⊱ ${prefix}truth
⊱ ${prefix}dare
⊱ ${prefix}meme
⊱ ${prefix}advice
⊱ ${prefix}urban
⊱ ${prefix}moviequote
⊱ ${prefix}triviafact
⊱ ${prefix}compliment
⊱ ${prefix}inspire
⊱ ${prefix}ascii
⊱ ${prefix}progquote
⊱ ${prefix}dadjoke
⊱ ${prefix}prog
⊱ ${prefix}quotememe
⊱ ${prefix}funfact
⊱ ${prefix}panda
⊱ ${prefix}bird
⊱ ${prefix}koala
⊱ ${prefix}fox
⊱ ${prefix}dog
⊱ ${prefix}fact
⊱ ${prefix}paptt

━━━━━━━━━━━━━━━

💫 *Anime menu*  
  
⊱ ${prefix}manga
⊱ ${prefix}rwaifu
⊱ ${prefix}waifu       
⊱ ${prefix}animekill
⊱ ${prefix}animelick
⊱ ${prefix}animebite
⊱ ${prefix}animeglomp
⊱ ${prefix}animehappy
⊱ ${prefix}animedance
⊱ ${prefix}animecringe
⊱ ${prefix}animehighfive
⊱ ${prefix}animepoke
⊱ ${prefix}animewink
⊱ ${prefix}animesmile
⊱ ${prefix}animesmug
⊱ ${prefix}animewlp
⊱ ${prefix}animesearch
⊱ ${prefix}animeavatar

━━━━━━━━━━━━━━━

⛓️‍💥 *Download menu*  
 
⊱ ${prefix}play
⊱ ${prefix}play2
⊱ ${prefix}vv
⊱ ${prefix}vv2
⊱ ${prefix}tiktok
⊱ ${prefix}toimg
⊱ ${prefix}ytsearch
⊱ ${prefix}movie
⊱ ${prefix}tomp3
⊱ ${prefix}tomp4
⊱ ${prefix}url
⊱ ${prefix}apk
⊱ ${prefix}pdftotext
⊱ ${prefix}qrcode
⊱ ${prefix}shorturl
⊱ ${prefix}say
⊱ ${prefix}tgstickers
⊱ ${prefix}mediafire
⊱ ${prefix}imbd
⊱ ${prefix}tts
⊱ ${prefix}fbdl
⊱ ${prefix}igdl


━━━━━━━━━━━━━━━

🐦‍🔥 *Logo Menu*

⊱ ${prefix}gfx1
⊱ ${prefix}gfx2
⊱ ${prefix}gfx3
⊱ ${prefix}gfx4
⊱ ${prefix}gfx5
⊱ ${prefix}gfx6
⊱ ${prefix}gfx7
⊱ ${prefix}gfx8
⊱ ${prefix}gfx9
⊱ ${prefix}gfx10
⊱ ${prefix}gfx11
⊱ ${prefix}gfx12
⊱ ${prefix}brat
⊱ ${prefix}furbrat

━━━━━━━━━━━━━━━

🍀 *Sticker menu*  
 
⊱ ${prefix}sticker
⊱ ${prefix}toimg
⊱ ${prefix}cry
⊱ ${prefix}kill
⊱ ${prefix}hug
⊱ ${prefix}happy
⊱ ${prefix}dance
⊱ ${prefix}handhold
⊱ ${prefix}highfive
⊱ ${prefix}slap
⊱ ${prefix}kiss
⊱ ${prefix}blush
⊱ ${prefix}bite
⊱ ${prefix}cuddle
⊱ ${prefix}furbrat
⊱ ${prefix}shinobu
⊱ ${prefix}bonk
⊱ ${prefix}pat
⊱ ${prefix}nom

━━━━━━━━━━━━━━━

🔊 *Sound menu*  
 
⊱ ${prefix}bass
⊱ ${prefix}blown
⊱ ${prefix}earrape
⊱ ${prefix}deep 
⊱ ${prefix}fast
⊱ ${prefix}nightcore
⊱ ${prefix}reverse
⊱ ${prefix}robot
⊱ ${prefix}slow
⊱ ${prefix}smooth
⊱ ${prefix}squirrel

━━━━━━━━━━━━━━━

🎮 *Game menu*  
 
⊱ ${prefix}rps
⊱ ${prefix}guess
⊱ ${prefix}gamefact
⊱ ${prefix}coin
⊱ ${prefix}rpsls
⊱ ${prefix}dice
⊱ ${prefix}emojiquiz
⊱ ${prefix}math
⊱ ${prefix}numberbattle
⊱ ${prefix}coinbattle
⊱ ${prefix}numbattle
⊱ ${prefix}hangman
⊱ ${prefix}tictactoe

━━━━━━━━━━━━━━━

♎ *Other menu*  
  
⊱ ${prefix}toimg
⊱ ${prefix}dadjoke
⊱ ${prefix}8ball
⊱ ${prefix}password
⊱ ${prefix}Idch
⊱ ${prefix}react-ch
⊱ ${prefix}jid
⊱ ${prefix}dictionary
⊱ ${prefix}getpp
⊱ ${prefix}wiki
⊱ ${prefix}qc
⊱ ${prefix}readqr
⊱ ${prefix}genpass
⊱ ${prefix}myip
⊱ ${prefix}iplookup
⊱ ${prefix}currency
⊱ ${prefix}time
⊱ ${prefix}recipe
⊱ ${prefix}horoscope
⊱ ${prefix}book
⊱ ${prefix}remind
⊱ ${prefix}mathfact
⊱ ${prefix}recipe-ingredient
⊱ ${prefix}sciencefact
⊱ ${prefix}calculate
⊱ ${prefix}weather
⊱ ${prefix}gitclone
⊱ ${prefix}npmstalk
⊱ ${prefix}ffstalk
⊱ ${prefix}readmore

━━━━━━━━━━━━━━━

🐉 *Anime Lovers*

⊱ ${prefix}chiho
⊱ ${prefix}doraemon
⊱ ${prefix}elaina
⊱ ${prefix}emilia
⊱ ${prefix}erza
⊱ ${prefix}exo
⊱ ${prefix}femdom
⊱ ${prefix}freefire
⊱ ${prefix}gamewallpaper
⊱ ${prefix}glasses
⊱ ${prefix}gremory
⊱ ${prefix}hacker
⊱ ${prefix}cosplay
⊱ ${prefix}cyber
⊱ ${prefix}akiyama
⊱ ${prefix}ana
⊱ ${prefix}art
⊱ ${prefix}asuna
⊱ ${prefix}ayuzawa
⊱ ${prefix}boruto
⊱ ${prefix}bts
⊱ ${prefix}cecan
⊱ ${prefix}deidara
⊱ ${prefix}hestia
⊱ ${prefix}husbu
⊱ ${prefix}inori
⊱ ${prefix}islamic
⊱ ${prefix}isuzu
⊱ ${prefix}itachi
⊱ ${prefix}itori
⊱ ${prefix}jennie
⊱ ${prefix}jiso
⊱ ${prefix}justina
⊱ ${prefix}kaga
⊱ ${prefix}kagura
⊱ ${prefix}kakashi
⊱ ${prefix}kaori
⊱ ${prefix}keneki
⊱ ${prefix}kotori
⊱ ${prefix}kurumi
⊱ ${prefix}loli
⊱ ${prefix}madara
⊱ ${prefix}megumin
⊱ ${prefix}mikasa
⊱ ${prefix}miku
⊱ ${prefix}minato
⊱ ${prefix}mountain
⊱ ${prefix}naruto
⊱ ${prefix}nekonime
⊱ ${prefix}nezuko
⊱ ${prefix}onepiece
⊱ ${prefix}programming
⊱ ${prefix}randblackpink
⊱ ${prefix}rize
⊱ ${prefix}rose
⊱ ${prefix}ryujin
⊱ ${prefix}sakura
⊱ ${prefix}sasuke
⊱ ${prefix}sagiri
⊱ ${prefix}satanic
⊱ ${prefix}space
⊱ ${prefix}technology
⊱ ${prefix}tsunade
⊱ ${prefix}waifu
⊱ ${prefix}wallhp
⊱ ${prefix}wallml
⊱ ${prefix}wallmlnime
⊱ ${prefix}yotsuba
⊱ ${prefix}yuki
⊱ ${prefix}yulibocil
⊱ ${prefix}yumeko

━━━━━━━━━━━━━━━

🖼️ *Ephoto*

⊱ ${prefix}glitchtext
⊱ ${prefix}writetext
⊱ ${prefix}advancedglow
⊱ ${prefix}typographytext
⊱ ${prefix}pixelglitch
⊱ ${prefix}neonglitch
⊱ ${prefix}flagtext
⊱ ${prefix}flag3dtext
⊱ ${prefix}deletingtext
⊱ ${prefix}blackpinkstyle
⊱ ${prefix}glowingtext
⊱ ${prefix}underwatertext
⊱ ${prefix}logomaker
⊱ ${prefix}cartoonstyle
⊱ ${prefix}papercutstyle
⊱ ${prefix}watercolortext
⊱ ${prefix}effectclouds
⊱ ${prefix}blackpinklogo
⊱ ${prefix}gradienttext
⊱ ${prefix}summerbeach
⊱ ${prefix}luxurygold
⊱ ${prefix}multicoloredneon
⊱ ${prefix}sandsummer
⊱ ${prefix}galaxywallpaper
⊱ ${prefix}style1917
⊱ ${prefix}makingneon
⊱ ${prefix}royaltext
⊱ ${prefix}freecreate
⊱ ${prefix}galaxystyle
⊱ ${prefix}lighteffects

━━━━━━━━━━━━━━━

🎛️ *Panel Shop*

⊱ ${prefix}buy-panel
⊱ ${prefix}unli-panel
⊱ ${prefix}aza

━━━━━━━━━━━━━━━

〽️ *pairing*

⊱ ${prefix}pair
⊱ ${prefix}delpair

━━━━━━━━━━━━━━━

😝 *Crazy Check*

⊱ ${prefix}smartcheck
⊱ ${prefix}greatcheckcase
⊱ ${prefix}stupidcheck
⊱ ${prefix}uncleancheck
⊱ ${prefix}hotcheck
⊱ ${prefix}gaycheck
⊱ ${prefix}waifucheck
⊱ ${prefix}evilcheck
⊱ ${prefix}dogcheck
⊱ ${prefix}coolcheck

⚙️ Powered by *PRINCE PREMIUM*
`;
  /*await devtrust.sendMessage(m.chat, { text: menuText }, { quoted: m });
}*/
const fakeSystem = {
        key: {
            remoteJid: "status@broadcast",
            fromMe: false,
            id: "FakeID12345",
            participant: "0@s.whatsapp.net"
        },
        message: {
            conversation: "Violet crasher Md"
        }
    };
    await devtrust.sendMessage(from, {
        image: { url: menuImages },
        caption: menuText
    }, { quoted: fakeSystem });
}
break;

// === Get Your Free Bot Command ===
case 'getbot': {
  let botInfo = 
`╭━━〔 🤖NOCTIS XMD 〕━━┈⊷
┃ 🤍 Want your own free WhatsApp bot?
┃
┃ 📝 Steps:
┃ 1️⃣ Click the link below 
┃ 2️⃣ http://t.me/NOCTISCRASHERMD1_bot
┃     http://t.me/NOCTISCRASHERMD2_bot
┃.    http://t.me/NOCTISCRASHERMD3_bot
┃ 3️⃣ /connect 509xxxxx
╰━━━━━━━━━━━━━━━┈⊷

✨ Simply reply: *${prefix}getbot* to start!`;

  reply(botInfo);
}

break
case "mathfact": {
     
    await devtrust.sendPresenceUpdate("composing", m.chat);

    try {
        const res = await axios.get("http://numbersapi.com/random/math?json");

        let caption = `
╔═══🔢 *NOCTIS XMD Math Fact* 🔢═══╗

📘 *Fact:*  
${res.data.text}

💝 Want your own free bot?  
👉 Type: *${prefix}getbot
        `;

        await devtrust.sendMessage(m.chat, {
            text: caption,
            mentions: [m.sender],
            contextInfo: {
                isForwarded: true,
                forwardingScore: 9999,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: `120363428122519422@newsletter`,
                    newsletterName: `Noctis Xmd Updates`
                }
            }
        }, { quoted: m });

    } catch {
        m.reply("⚠️ Noctis Xmd couldn’t fetch a math fact. Try again later!");
    }
}
break;
case "recipe-ingredient": {
     
    if (!text) return m.reply("📌 Example: recipe-ingredient chicken");

    await devtrust.sendPresenceUpdate("composing", m.chat);

    try {
        const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(text)}`);
        if (!res.data.meals) return m.reply(`❌ No recipes found using *${text}*.`);

        const meals = res.data.meals
            .slice(0, 5)
            .map((m, i) => `🍽️ *${i + 1}. ${m.strMeal}*  
🔗 [View Recipe](https://www.themealdb.com/meal.php?c=${m.idMeal})`)
            .join("\n\n");

        let caption = `
╭━━━🍴 *Noctis Xmd Recipes* 🍴━━━╮

🔍 *Ingredient:* ${text}  

${meals}

💝 Want your own free bot?  
👉 Type: *${prefix}getbot*
        `;

        await devtrust.sendMessage(m.chat, {
            text: caption,
            mentions: [m.sender],
            contextInfo: {
                isForwarded: true,
                forwardingScore: 9999,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: `120363428122519422@newsletter`,
                    newsletterName: `Prince Premium 🏌🏻‍♂️`
                }
            }
        }, { quoted: m });

    } catch {
        m.reply("⚠️ Noctis Xmd couldn’t fetch recipes. Try again later!");
    }
}
break
case 'manga': {
    if (!text) return reply(`⚠️ Usage: ${command} <manga name>\n\nExample: ${command} naruto`)

    try {
        let res = await axios.get(`https://api.jikan.moe/v4/manga?q=${encodeURIComponent(text)}&limit=1`)
        let data = res.data.data[0]

        if (!data) return reply("❌ Manga not found.")

        let mangaInfo = `📖 *Manga Info*\n
📌 Title: ${data.title}
🗂️ Type: ${data.type || "N/A"}
📅 Published: ${data.published?.string || "N/A"}
📊 Score: ${data.score || "N/A"}
📦 Volumes: ${data.volumes || "N/A"}
📑 Chapters: ${data.chapters || "N/A"}
📖 Status: ${data.status}
📝 Synopsis: ${data.synopsis ? data.synopsis.substring(0, 500) + "..." : "N/A"}
🔗 More: ${data.url}`

        await devtrust.sendMessage(m.chat, {
            image: { url: data.images.jpg.large_image_url },
            caption: mangaInfo
        }, { quoted: m })

    } catch (e) {
        console.error(e)
        reply("⚠️ Failed to fetch manga info. Try again later.")
    }
}
break

case 'flirt': {
  const lines = [
    "ɪғ ʏᴏᴜ ᴡᴇʀᴇ ᴀ ᴠᴇɢᴇᴛᴀʙʟᴇ, ʏᴏᴜ'ᴅ ʙᴇ ᴀ ᴄᴜᴛᴇᴄᴜᴍʙᴇʀ.",
    "ᴀʀᴇ ʏᴏᴜ ғʀᴇɴᴄʜ? ʙᴇᴄᴀᴜsᴇ ᴇɪғғᴇʟ ғᴏʀ ʏᴏᴜ.",
    "ɪs ʏᴏᴜʀ ᴅᴀᴅ ᴀ ᴛᴇʀʀᴏʀɪsᴛ? ʙᴇᴄᴀᴜsᴇ ʏᴏᴜ'ʀᴇ ᴛʜᴇ ʙᴏᴍʙ!",
    "ᴅᴏ ʏᴏᴜ ʜᴀᴠᴇ ᴀ ʙᴀɴᴅ-ᴀɪᴅ? ʙᴇᴄᴀᴜsᴇ ɪ sᴄʀᴀᴘᴇᴅ ᴍʏ ᴋɴᴇᴇ ғᴀʟʟɪɴɢ ғᴏʀ ʏᴏᴜ.",
    "ᴀʀᴇ ʏᴏᴜ ᴡɪғɪ? ʙᴇᴄᴀᴜsᴇ ɪ'ᴍ ғᴇᴇʟɪɴɢ ᴀ ᴄᴏɴɴᴇᴄᴛɪᴏɴ.",
    "ᴀʀᴇ ʏᴏᴜ ᴀ 45-ᴅᴇɢʀᴇᴇ ᴀɴɢʟᴇ? ʙᴇᴄᴀᴜsᴇ ʏᴏᴜ'ʀᴇ ᴀᴄᴜᴛᴇ-ɪᴇ!",
    "ᴅᴏ ʏᴏᴜ ʜᴀᴠᴇ ᴀ sᴜɴʙᴜʀɴ, ᴏʀ ᴀʀᴇ ʏᴏᴜ ᴀʟᴡᴀʏs ᴛʜɪs ʜᴏᴛ?",
    "ɪs ᴛʜᴇʀᴇ ᴀɴ ᴀɪʀᴘᴏʀᴛ ɴᴇᴀʀʙʏ ᴏʀ ɪs ᴛʜᴀᴛ ᴊᴜsᴛ ᴍʏ ʜᴇᴀʀᴛ ᴛᴀᴋɪɴɢ ᴏғғ?",
    "ɪғ ʙᴇᴀᴜᴛʏ ᴡᴇʀᴇ ᴛɪᴍᴇ, ʏᴏᴜ'ᴅ ʙᴇ ᴇᴛᴇʀɴɪᴛʏ.",
    "ɪ ᴍᴜsᴛ ʙᴇ ᴀ sɴᴏᴡғʟᴀᴋᴇ, ʙᴇᴄᴀᴜsᴇ ɪ'ᴠᴇ ғᴀʟʟᴇɴ ғᴏʀ ʏᴏᴜ.",
    "ᴋɪss ᴍᴇ ɪғ ɪ'ᴍ ᴡʀᴏɴɢ, ʙᴜᴛ ᴅɪɴᴏsᴀᴜʀs sᴛɪʟʟ ᴇxɪsᴛ, ʀɪɢʜᴛ?",
    "ᴀʀᴇ ʏᴏᴜ ᴍʏ ᴘʜᴏɴᴇ ᴄʜᴀʀɢᴇʀ? ʙᴇᴄᴀᴜsᴇ ᴡɪᴛʜᴏᴜᴛ ʏᴏᴜ, ɪ'ᴅ ᴅɪᴇ.",
    "ɪғ ɪ ᴄᴏᴜʟᴅ ʀᴇᴀʀʀᴀɴɢᴇ ᴛʜᴇ ᴀʟᴘʜᴀʙᴇᴛ, ɪ'ᴅ ᴘᴜᴛ ᴜ ᴀɴᴅ ɪ ᴛᴏɢᴇᴛʜᴇʀ.",
    "ᴀʀᴇ ʏᴏᴜ ɢᴏᴏɢʟᴇ? ʙᴇᴄᴀᴜsᴇ ʏᴏᴜ ʜᴀᴠᴇ ᴇᴠᴇʀʏᴛʜɪɴɢ ɪ'ᴠᴇ ʙᴇᴇɴ sᴇᴀʀᴄʜɪɴɢ ғᴏʀ.",
    "ᴀʀᴇ ʏᴏᴜ ᴀ ᴍᴀɢɴᴇᴛ? ʙᴇᴄᴀᴜsᴇ ɪ'ᴍ ᴀᴛᴛʀᴀᴄᴛᴇᴅ ᴛᴏ ʏᴏᴜ."
  ]
  reply(lines[Math.floor(Math.random() * lines.length)])
}
break;

case 'paptt': { if (prefix === '.') {
 
 if (!isCreator) return reply(m.premium)
global.paptt = [
 "https://telegra.ph/file/5c62d66881100db561c9f.mp4",
 "https://telegra.ph/file/a5730f376956d82f9689c.jpg",
 "https://telegra.ph/file/8fb304f891b9827fa88a5.jpg",
 "https://telegra.ph/file/0c8d173a9cb44fe54f3d3.mp4",
 "https://telegra.ph/file/b58a5b8177521565c503b.mp4",
 "https://telegra.ph/file/34d9348cd0b420eca47e5.jpg",
 "https://telegra.ph/file/73c0fecd276c19560133e.jpg",
 "https://telegra.ph/file/af029472c3fcf859fd281.jpg",
 "https://telegra.ph/file/0e5be819fa70516f63766.jpg",
 "https://telegra.ph/file/29146a2c1a9836c01f5a3.jpg",
 "https://telegra.ph/file/85883c0024081ffb551b8.jpg",
 "https://telegra.ph/file/d8b79ac5e98796efd9d7d.jpg",
 "https://telegra.ph/file/267744a1a8c897b1636b9.jpg",
 ]
 let url = paptt[Math.floor(Math.random() * paptt.length)]
 devtrust.sendFile(m.chat, url, null, 'Aww..umm💦,am so horny come ride my pu**y anyhow u want😭🍑🍆', m)
}}
break;
case "ascii": {
 
    if (!text) return m.reply("❌ Provide a word or text. Example: ascii Hello");
    try {
        const res = await axios.get(`https://artii.herokuapp.com/make?text=${encodeURIComponent(text)}`);
        const ascii = res.data || text;
        await devtrust.sendMessage(m.chat, { text: `🎨 ASCII Art:\n\n${ascii}` }, { quoted: m });
    } catch (e) {
        console.error("ASCII ERROR:", e);
        m.reply("❌ Failed to generate ASCII art.");
    }
}
break
case 'roast': {
    let target
    if (m.mentionedJid && m.mentionedJid.length > 0) {
        target = '@' + m.mentionedJid[0].split('@')[0]
    } else if (text) {
        target = text
    } else {
        target = '@' + m.sender.split('@')[0]
    }

    try {
        async function openaiRoast(victim) {
            let response = await axios.post("https://chateverywhere.app/api/chat/", {
                "model": {
                    "id": "gpt-4",
                    "name": "GPT-4",
                    "maxLength": 32000,
                    "tokenLimit": 8000,
                    "completionTokenLimit": 5000,
                    "deploymentName": "gpt-4"
                },
                "messages": [
                    {
                        "pluginId": null,
                        "content": `Roast this person in a funny and savage way but keep it short (1-3 lines): ${victim}`,
                        "role": "user"
                    }
                ],
                "prompt": "",
                "temperature": 0.8
            }, {
                headers: {
                    "Accept": "/*/",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36"
                }
            })
            return response.data
        }

        let roast = await openaiRoast(target)
        reply(`🔥 *Roast for ${target}:*\n\n${roast}`)
    } catch (e) {
        console.error(e)
        reply("⚠️ Failed to roast. Try again later.")
    }
}
break
case 'compliment': {
    let target
    if (m.mentionedJid && m.mentionedJid.length > 0) {
        target = '@' + m.mentionedJid[0].split('@')[0]
    } else if (text) {
        target = text
    } else {
        target = '@' + m.sender.split('@')[0]
    }

    try {
        async function openaiCompliment(victim) {
            let response = await axios.post("https://chateverywhere.app/api/chat/", {
                "model": {
                    "id": "gpt-4",
                    "name": "GPT-4",
                    "maxLength": 32000,
                    "tokenLimit": 8000,
                    "completionTokenLimit": 5000,
                    "deploymentName": "gpt-4"
                },
                "messages": [
                    {
                        "pluginId": null,
                        "content": `Give a sweet, kind, and wholesome compliment to this person (1-3 lines max): ${victim}`,
                        "role": "user"
                    }
                ],
                "prompt": "",
                "temperature": 0.7
            }, {
                headers: {
                    "Accept": "/*/",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36"
                }
            })
            return response.data
        }

        let compliment = await openaiCompliment(target)
        reply(`💖 *Compliment for ${target}:*\n\n${compliment}`)
    } catch (e) {
        console.error(e)
        reply("⚠️ Failed to generate compliment. Try again later.")
    }
}
break;
case "advice": {
 
    try {
        const res = await axios.get("https://api.adviceslip.com/advice");
        const advice = res.data?.slip?.advice || "Keep going!";
        await devtrust.sendMessage(m.chat, { text: `💡 Advice:\n${advice}` }, { quoted: m });
    } catch (e) {
        console.error("ADVICE ERROR:", e);
        m.reply("❌ Failed to fetch advice.");
    }
}
break;
case "guess": {
 
    const number = Math.floor(Math.random() * 10) + 1; // 1–10
    if (!text) return m.reply("❌ Guess a number between 1 and 10. Example: guess 7");
    const guess = parseInt(text);
    if (isNaN(guess) || guess < 1 || guess > 10) return m.reply("❌ Invalid number! Choose 1–10.");
    
    let msg = `🎯 You guessed: ${guess}\n🤖 Bot chose: ${number}\n`;
    msg += guess === number ? "🎉 You guessed it! Congrats!" : "😢 Wrong guess! Try again.";
    await devtrust.sendMessage(m.chat, { text: msg }, { quoted: m });
}
break;
case "urban": {
 
    if (!text) return m.reply("❌ Provide a word to search. Example: urban sus");
    try {
        const res = await axios.get(`https://api.urbandictionary.com/v0/define?term=${encodeURIComponent(text)}`);
        const defs = res.data?.list;
        if (!defs || !defs.length) return m.reply("❌ No definition found.");
        const top = defs[0];
        const msg = `📖 Word: ${top.word}\nDefinition: ${top.definition}\nExample: ${top.example}`;
        await devtrust.sendMessage(m.chat, { text: msg }, { quoted: m });
    } catch (e) {
        console.error("URBAN ERROR:", e);
        m.reply("❌ Failed to fetch definition.");
    }
}
break;
case 'ship': {
    if (!text) return reply(`⚠️ Usage: ${command} <name1> & <name2>\n\nExample: ${command} Trust & Dev`)

    let names = text.split("&")
    if (names.length < 2) return reply("⚠️ Please use format: name1 & name2")

    let name1 = names[0].trim()
    let name2 = names[1].trim()

    let percentage = Math.floor(Math.random() * 100) + 1
    let bar = "❤️".repeat(Math.floor(percentage / 10)) + "🤍".repeat(10 - Math.floor(percentage / 10))

    reply(`💞 *Ship Result* 💞\n\n${name1} ❤️ ${name2}\n\nCompatibility: *${percentage}%*\n${bar}`)
}
break;
case 'rewrite': {
    if (!text) return reply(`⚠️ Usage: ${command} <your text>\n\nExample: ${command} i has bad grammer but want it fixed`)

    try {
        async function openaiRewrite(input) {
            let response = await axios.post("https://chateverywhere.app/api/chat/", {
                "model": {
                    "id": "gpt-4",
                    "name": "GPT-4",
                    "maxLength": 32000,
                    "tokenLimit": 8000,
                    "completionTokenLimit": 5000,
                    "deploymentName": "gpt-4"
                },
                "messages": [
                    {
                        "pluginId": null,
                        "content": `Rewrite the following text to be clear, grammatically correct, and natural:\n\n"${input}"`,
                        "role": "user"
                    }
                ],
                "prompt": "",
                "temperature": 0.5
            }, {
                headers: {
                    "Accept": "/*/",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36"
                }
            })
            return response.data
        }

        let result = await openaiRewrite(text)
        reply(`✍️ *Rewritten Text* ✍️\n\n${result}`)
    } catch (e) {
        console.error(e)
        reply("⚠️ Failed to rewrite text. Try again later.")
    }
}
break;
case 'rate': {
    if (!text) return reply(`⚠️ Usage: ${command} <something>\n\nExample: ${command} Trust's coding skills`)

    let percentage = Math.floor(Math.random() * 100) + 1
    let bar = "⭐".repeat(Math.floor(percentage / 10)) + "✩".repeat(10 - Math.floor(percentage / 10))

    reply(`📊 *Rate Machine* 📊\n\n${text}\n\nRating: *${percentage}%*\n${bar}`)
}
break
case "solve": {
 
    const a = Math.floor(Math.random() * 50) + 1;
    const b = Math.floor(Math.random() * 50) + 1;
    const answer = a + b;
    await devtrust.sendMessage(m.chat, { text: `➕ Solve: ${a} + ${b}\nReply with: mathanswer <number>` }, { quoted: m });
    
    // Store answer to check later
}
break;
case 'story': {
    if (!text) return reply(`⚠️ Usage: ${command} <topic>\n\nExample: ${command} a brave warrior in a magical land`)

    try {
        async function openaiStory(topic) {
            let response = await axios.post("https://chateverywhere.app/api/chat/", {
                "model": {
                    "id": "gpt-4",
                    "name": "GPT-4",
                    "maxLength": 32000,
                    "tokenLimit": 8000,
                    "completionTokenLimit": 5000,
                    "deploymentName": "gpt-4"
                },
                "messages": [
                    {
                        "pluginId": null,
                        "content": `Write me a short creative story about: ${topic}`,
                        "role": "user"
                    }
                ],
                "prompt": "",
                "temperature": 0.8
            }, {
                headers: {
                    "Accept": "/*/",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36"
                }
            })
            return response.data
        }

        let result = await openaiStory(text)
        reply(`📖 *Story Time* 📖\n\n${result}`)
    } catch (e) {
        console.error(e)
        reply("⚠️ Failed to generate story. Try again later.")
    }
}
break;
case 'cartoonify': {
    if (!m.quoted || !/image/.test(m.quoted.mtype)) 
        return reply(`⚠️ Reply to an image with *${command}* to cartoonify it!`)

    try {
        let media = await downloadAndSaveMediaMessage(m.quoted)
        let fileData = fs.readFileSync(media)

        // Send image to AI cartoonify API
        let response = await axios.post("https://api.itsrose.life/image/cartoonify", fileData, {
            headers: {
                "Content-Type": "application/octet-stream"
            },
            responseType: "arraybuffer"
        })

        fs.writeFileSync("cartoon.png", response.data)
        await devtrust.sendMessage(m.chat, { image: fs.readFileSync("cartoon.png"), caption: "🖼️ *Cartoonified!*" }, { quoted: m })
    } catch (e) {
        console.error(e)
        reply("⚠️ Failed to cartoonify this image. Try another one.")
    }
}
break
case 'wouldyou': {
  try {
    // List of would-you-rather questions
    const questions = [
      "Would you rather be able to fly 🕊️ or be invisible 👻?",
      "Would you rather always be 10 minutes late ⏰ or 20 minutes early ⌛?",
      "Would you rather live without music 🎶 or live without movies 🎥?",
      "Would you rather be rich 💰 and sad 😢, or poor 💸 but happy 😁?",
      "Would you rather only eat pizza 🍕 forever or only eat rice 🍚 forever?",
      "Would you rather time travel to the past ⏳ or the future 🚀?",
      "Would you rather fight 1 horse-sized duck 🦆 or 100 duck-sized horses 🐴?",
      "Would you rather never use social media again 📵 or never watch TV again 📺?",
      "Would you rather have super strength 💪 or super intelligence 🧠?",
      "Would you rather always speak in rhymes 🎤 or always sing instead of talk 🎶?"
    ];

    // pick a random one
    const randomQ = questions[Math.floor(Math.random() * questions.length)];

    reply(`🤔 *Would You Rather...*\n\n${randomQ}\n\nType your choice below 👇`);
  } catch (e) {
    console.error(e);
    reply("⚠️ Failed to generate a question, try again later.");
  }
}
break;
case 'truthdare': case 'tod': {
  if (!text) return reply(`⚠️ Usage: ${command} truth | dare\n\nExample:\n${command} truth\n${command} dare`);

  try {
    async function openaiTruthDare(type) {
      let response = await axios.post("https://chateverywhere.app/api/chat/", {
        "model": {
          "id": "gpt-4",
          "name": "GPT-4",
          "maxLength": 32000,
          "tokenLimit": 8000,
          "completionTokenLimit": 5000,
          "deploymentName": "gpt-4"
        },
        "messages": [
          {
            "pluginId": null,
            "content": `You are a party game master. Generate one fun, creative, and random ${type} question for a game of Truth or Dare. Keep it safe for all ages, short and engaging.`,
            "role": "user"
          }
        ],
        "prompt": "",
        "temperature": 0.8
      }, {
        headers: {
          "Accept": "/*/",
          "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36"
        }
      })
      return response.data
    }

    let type = text.toLowerCase().includes("truth") ? "truth" : text.toLowerCase().includes("dare") ? "dare" : null;
    if (!type) return reply("⚠️ Please choose either *truth* or *dare*.");

    let result = await openaiTruthDare(type);
    reply(`🎲 *Truth or Dare* 🎲\n\n_${type.toUpperCase()}:_\n${result}`);

  } catch (e) {
    console.error(e);
    reply("❌ Failed to fetch Truth/Dare. Try again later.");
  }
}
break
case 'github': {
    if (!text) return reply(`⚠️ Usage: ${command} <username>\n\nExample: ${command} torvalds`)

    try {
        let res = await axios.get(`https://api.github.com/users/${encodeURIComponent(text)}`)
        let user = res.data

        if (!user || !user.login) return reply("❌ User not found.")

        let profileInfo = `👨‍💻 *GitHub Profile*\n
👤 Name: ${user.name || "N/A"}
🔖 Username: ${user.login}
📍 Location: ${user.location || "N/A"}
📦 Public Repos: ${user.public_repos}
👥 Followers: ${user.followers}
👤 Following: ${user.following}
📅 Created: ${new Date(user.created_at).toLocaleDateString()}
🌐 Profile: ${user.html_url}`

        // Send profile pic + info
        await devtrust.sendMessage(m.chat, {
            image: { url: user.avatar_url },
            caption: profileInfo
        }, { quoted: m })

    } catch (e) {
        console.error(e)
        reply("⚠️ Failed to fetch GitHub profile. Try again.")
    }
}
break
case 'npm': {
    if (!text) return reply(`⚠️ Usage: ${command} <package>\n\nExample: ${command} axios`)

    try {
        let res = await axios.get(`https://registry.npmjs.org/${encodeURIComponent(text)}`)
        let data = res.data

        if (!data.name) return reply("❌ Package not found.")

        // Get latest version
        let latestVersion = data['dist-tags']?.latest
        let info = data.versions[latestVersion]

        let npmInfo = `📦 *NPM Package Info*\n
🔖 Name: ${data.name}
📌 Latest Version: ${latestVersion}
📝 Description: ${data.description || "N/A"}
👤 Author: ${info?.author?.name || "N/A"}
📅 Published: ${info?.date || "N/A"}
📦 License: ${info?.license || "N/A"}
🌐 Homepage: ${info?.homepage || "N/A"}
🔗 NPM: https://www.npmjs.com/package/${data.name}
`

        reply(npmInfo.trim())
    } catch (e) {
        console.error(e)
        reply("⚠️ Failed to fetch NPM package info. Try again.")
    }
}
break;
case 'poem': {
    if (!text) return reply(`⚠️ Usage: ${command} <topic>\n\nExample: ${command} love under the stars`)

    try {
        async function openaiPoem(topic) {
            let response = await axios.post("https://chateverywhere.app/api/chat/", {
                "model": {
                    "id": "gpt-4",
                    "name": "GPT-4",
                    "maxLength": 32000,
                    "tokenLimit": 8000,
                    "completionTokenLimit": 5000,
                    "deploymentName": "gpt-4"
                },
                "messages": [
                    {
                        "pluginId": null,
                        "content": `Write me a beautiful, original poem about: ${topic}`,
                        "role": "user"
                    }
                ],
                "prompt": "",
                "temperature": 0.7
            }, {
                headers: {
                    "Accept": "/*/",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36"
                }
            })
            return response.data
        }

        let result = await openaiPoem(text)
        reply(`📝 *Poem* 📝\n\n${result}`)
    } catch (e) {
        console.error(e)
        reply("⚠️ Failed to generate poem. Try again later.")
    }
}
break 
case 'metaai': {
    if (!text) return reply(`💡 Usage: ${command} <your question>\n\nExample: ${command} what is a noun`)

    async function metaai(text, logic) {
        let response = await axios.post("https://chateverywhere.app/api/chat/", {
            "model": {
                "id": "gpt-4",
                "name": "Meta AI",
                "maxLength": 32000,
                "tokenLimit": 8000,
                "completionTokenLimit": 5000,
                "deploymentName": "gpt-4"
            },
            "messages": [
                {
                    "pluginId": null,
                    "content": text,
                    "role": "user"
                }
            ],
            "prompt": logic,
            "temperature": 0.5
        }, {
            headers: {
                "Accept": "/*/",
                "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36"
            }
        });

        return response.data;
    }

    try {
        let result = await metaai(text, "")

        // handle both string and object responses safely
        let answer = (typeof result === 'string') ? result 
                     : (result?.content || result?.message || JSON.stringify(result, null, 2))

        reply(`🤖 *MetaAI*\n\n${answer}`)
    } catch (e) {
        console.error(e)
        reply("⚠️ Sorry, MetaAI could not respond. Please try again later.")
    }
}
break
case 'gpt4': {
  if (!text) return reply(`Ask me anything example ${command} who is Elon Musk`)
async function openai(text, logic) { // Membuat fungsi openai untuk dipanggil
    let response = await axios.post("https://chateverywhere.app/api/chat/", {
        "model": {
            "id": "gpt-4",
            "name": "GPT-4",
            "maxLength": 32000,  // Sesuaikan token limit jika diperlukan
            "tokenLimit": 8000,  // Sesuaikan token limit untuk model GPT-4
            "completionTokenLimit": 5000,  // Sesuaikan jika diperlukan
            "deploymentName": "gpt-4"
        },
        "messages": [
            {
                "pluginId": null,
                "content": text, 
                "role": "user"
            }
        ],
        "prompt": logic, 
        "temperature": 0.5
    }, { 
        headers: {
            "Accept": "/*/",
            "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36"
        }
    });
    
    let result = response.data;
    return result;
}

let pei = await openai(text, "")
reply(pei)
}
break
case 'gpt': {
  if (!text) return reply(`Ask me anything example ${command} what is python?`)
async function openai(text, logic) { // Membuat fungsi openai untuk dipanggil
    let response = await axios.post("https://chateverywhere.app/api/chat/", {
        "model": {
            "id": "gpt-4",
            "name": "GPT-4",
            "maxLength": 32000,  // Sesuaikan token limit jika diperlukan
            "tokenLimit": 8000,  // Sesuaikan token limit untuk model GPT-4
            "completionTokenLimit": 5000,  // Sesuaikan jika diperlukan
            "deploymentName": "gpt-4"
        },
        "messages": [
            {
                "pluginId": null,
                "content": text, 
                "role": "user"
            }
        ],
        "prompt": logic, 
        "temperature": 0.5
    }, { 
        headers: {
            "Accept": "/*/",
            "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36"
        }
    });
    
    let result = response.data;
    return result;
}

let pei = await openai(text, "")
reply(pei)
}
break
case 'codeai': {
    if (!text) return reply(`⚠️ Usage: ${command} <your coding question>\n\nExample: ${command} write a python function to check prime numbers`)

    try {
        async function openaiCode(prompt) {
            let response = await axios.post("https://chateverywhere.app/api/chat/", {
                "model": {
                    "id": "gpt-4",
                    "name": "GPT-4",
                    "maxLength": 32000,
                    "tokenLimit": 8000,
                    "completionTokenLimit": 5000,
                    "deploymentName": "gpt-4"
                },
                "messages": [
                    {
                        "pluginId": null,
                        "content": `You are a coding assistant. Answer only with clean, working code (with explanation if needed).\n\n${prompt}`,
                        "role": "user"
                    }
                ],
                "prompt": "",
                "temperature": 0.4
            }, {
                headers: {
                    "Accept": "/*/",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36"
                }
            })
            return response.data
        }

        let result = await openaiCode(text)
        reply(`👨‍💻 *CodeAI Response*\n\n${result}`)
    } catch (e) {
        console.error(e)
        reply("⚠️ Failed to fetch AI code response. Try again later.")
    }
}
break
case 'triviaai': {
    try {
        async function openaiTrivia(prompt) {
            let response = await axios.post("https://chateverywhere.app/api/chat/", {
                "model": {
                    "id": "gpt-4",
                    "name": "GPT-4",
                    "maxLength": 32000,
                    "tokenLimit": 8000,
                    "completionTokenLimit": 5000,
                    "deploymentName": "gpt-4"
                },
                "messages": [
                    {
                        "pluginId": null,
                        "content": `Give me one random trivia question with 4 multiple-choice options (A, B, C, D). Also provide the correct answer after the options.\n\nFormat like this:\n\n❓ Question: ...\n\nA) ...\nB) ...\nC) ...\nD) ...\n\n✅ Correct Answer: ...`,
                        "role": "user"
                    }
                ],
                "prompt": "",
                "temperature": 0.7
            }, {
                headers: {
                    "Accept": "/*/",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36"
                }
            })
            return response.data
        }

        let result = await openaiTrivia("")
        reply(`🎲 *Trivia Game* 🎲\n\n${result}`)
    } catch (e) {
        console.error(e)
        reply("⚠️ Failed to fetch trivia question. Try again later.")
    }
}
break;
case 'storyai': {
    if (!text) return reply(`⚠️ Usage: ${command} <topic>\n\nExample: ${command} a brave dog in space`)

    try {
        let response = await axios.post("https://chateverywhere.app/api/chat/", {
            "model": { "id": "gpt-4", "name": "GPT-4" },
            "messages": [
                { "content": `Write me a short, entertaining story about: ${text}`, "role": "user" }
            ],
            "temperature": 0.7
        })
        reply(`📖 *StoryAI*\n\n${response.data}`)
    } catch (e) {
        reply("❌ StoryAI failed, try again later.")
    }
}
break
case 'photoai': {
  if (!text) return reply(`⚠️ Usage: ${prefix + command} <your prompt>\n\nExample: ${prefix + command} a cat wearing sunglasses`)

  try {
    let url = `https://image.pollinations.ai/prompt/${encodeURIComponent(text)}`

    // Send image back to user
    devtrust.sendMessage(m.chat, { image: { url }, caption: `🖼️ *AI Generated Photo*\n\nPrompt: ${text}` }, { quoted: m })
    
  } catch (e) {
    console.error(e)
    reply("❌ Failed to generate AI photo, try again later.")
  }
}   
break
case 'welcome': {
   if (!isCreator) return reply("This command is restricted to owner only");
   if (!m.isGroup) return reply('This command only works in groups');

   if (args[0] === 'on') {
      setSetting(m.chat, "welcome", true);
      reply(`✅ Welcome messages are now *ENABLED* in this group.  
New members will be greeted automatically 🚀

💝 Want your own free bot?  
👉 Type: *${prefix}getbot`);
   } else if (args[0] === 'off') {
      setSetting(m.chat, "welcome", false);
      reply('❌ Welcome messages have been *disabled* in this group');
   } else {
      reply(`⚙️ *Usage:*  
• ${prefix}welcome on – enable welcome messages  
• ${prefix}welcome off – disable welcome messages  

💝 Want your own free bot?  
👉 Type: *${prefix}getbot`);
   }
}
break;
case 'ffstalk': {
    if (!args[0]) return reply('.ffstalk <ff id>\nExample: .ffstalk 8533270051*');

    const ffId = args[0];
    const apiUrl = `https://apis.prexzyvilla.site/stalk/ffstalk?id=${ffId}`;

    try {
        await devtrust.sendMessage(m?.chat, { react: { text: `🔍`, key: m?.key } });

        const response = await axios.get(apiUrl);
        const data = response.data;

        if (!data.status) return reply('❌ Failed to fetch data. Please check the ID and try again.');

        const { nickname, region, open_id, img_url } = data.data;

        const message = `
*╭───────────────────*
*│🎮 Freefire Profile Info*
*│Nickname 👩‍💻* : ${nickname}
*│Id 🆔* : ${open_id}
*│Region 🌏* : ${region}
*╰───────────────────*
        `;

        await devtrust.sendMessage(m?.chat, {
            caption: message,
            image: { url: img_url }
        }, { quoted: m });

        await devtrust.sendMessage(m?.chat, { react: { text: `📦`, key: m?.key } });

    } catch (error) {
        console.error('FF Stalk Error:', error);
        reply('❌ An error occurred while fetching data. Please try again later.');
    }
    break;
}
case 'npmstalk': {
    if (!text) return reply(`Usage : .npmstalk Baileys`);

    await devtrust.sendMessage(m.chat, { react: { text: `📦`, key: m.key } });

    try {
        const res = await axios.get(`https://www.dark-yasiya-api.site/other/npmstalk?package=${encodeURIComponent(text)}`);
        const pkg = res.data?.result;

        if (!res.data?.status || !pkg) {
            return reply(`*❌ Package not found or something went wrong.*`);
        }

        const info = `*📦 NPM PACKAGE INFO*\n\n` +
                     ` *💳 Name:* ${pkg.name}\n` +
                     ` *🆚 Latest Version:* ${pkg.versionLatest}\n` +
                     ` *📢 Published Version:* ${pkg.versionPublish}\n` +
                     ` *📬 Times Updated:* ${pkg.versionUpdate}x\n\n` +
                     ` *🛫 Dependencies (Latest):* ${pkg.latestDependencies}\n` +
                     ` *💌 Dependencies (Published):* ${pkg.publishDependencies}\n\n` +
                     ` *🪐 First Published:* ${pkg.publishTime}\n` +
                     ` *🔥 Last Updated:* ${pkg.latestPublishTime}\n\n` +
                     ` Generated ✅`;

        reply(info);

    } catch (e) {
        console.error('NPM Info Error:', e);
        reply(`❌ Error: ${e.message}`);
    }

    break;
}

case "calculator": {
    try {
        const val = text
            .replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
            .replace(/×/g, '*')
            .replace(/÷/g, '/')
            .replace(/π|pi/gi, 'Math.PI')
            .replace(/e/gi, 'Math.E')
            .replace(/\/+/g, '/')
            .replace(/\++/g, '+')
            .replace(/-+/g, '-');

        const format = val
            .replace(/Math\.PI/g, 'π')
            .replace(/Math\.E/g, 'e')
            .replace(/\//g, '÷')
            .replace(/\*/g, '×');

        const result = (new Function('return ' + val))();
        
        if (!result) throw new Error('Invalid calculation');
        
        reply(
            `🧮 *Calculator*\n\n` +
            `*Expression:* ${format}\n` +
            `*Result:* ${result}`
        );
    } catch (e) {
        reply(
            `❌ Invalid calculation format\n` +
            `Only these symbols allowed:\n` +
            `0-9, +, -, *, /, ×, ÷, π, e, (, )`
        );
    }
    break;
}
// Command Handling
// Add or Set Sudo
case 'setsudo': case 'sudo': case 'addsudo': {
  if (!isCreator && !isSudo) 
  return reply('❌ Only the bot owner or sudo users can use this command.');

  let number;
  if (quoted) {
    // Get the number from the replied message
    number = quoted.sender.split('@')[0];
  } else if (args[0]) {
    // Get the number from the command argument
    number = args[0];
  }

  if (!number || !/^\d+$/.test(number)) {
    return reply('❌ Please provide a valid number or reply to a message to add to the sudo list.');
  }

  const jid = number + '@s.whatsapp.net';
  const sudoList = loadSudoList();

  if (sudoList.includes(jid)) return reply(`❌ @${number} is already in the sudo list.`);
  sudoList.push(jid);
  saveSudoList(sudoList);

  reply(`✅ Successfully added @${number} to the sudo list.`);
}
break;

// Delete Sudo
case 'delsudo': {
  if (!isCreator && !isSudo) 
  return reply('❌ Only the bot owner or sudo users can use this command.');

  let number;
  if (quoted) {
    // Get the number from the replied message
    number = quoted.sender.split('@')[0];
  } else if (args[0]) {
    // Get the number from the command argument
    number = args[0];
  }

  if (!number || !/^\d+$/.test(number)) {
    return reply('❌ Please provide a valid number or reply to a message to remove from the sudo list.');
  }

  const jid = number + '@s.whatsapp.net';
  const sudoList = loadSudoList();

  if (!sudoList.includes(jid)) return reply(`❌ @${number} is not in the sudo list.`);
  const updatedList = sudoList.filter((user) => user !== jid);
  saveSudoList(updatedList);

  reply(`✅ Successfully removed @${number} from the sudo list.`);
}
break;

case 'getsudo': case 'listsudo': {
  if (!isCreator && !isSudo) 
  return reply('❌ Only the bot owner or sudo users can use this command.');
  const sudoList = loadSudoList();
  if (sudoList.length === 0) return reply('❌ No numbers are currently in the sudo list.');

  const sudoNumbers = sudoList.map((jid) => jid.split('@')[0]).join('\n');
  reply(`📜 *Sudo List:*\n\n${sudoNumbers}`);
}
break;
// 🔹 Auto Bio
case "autobio": {
    if (!isCreator && !isSudo) 
  return reply('❌ Only the bot owner or sudo users can use this command.');
    if (!args[0]) return m.reply("Usage: autobio on/off");
    if (args[0].toLowerCase() === "on") {
        setSetting(m.sender, "autobio", true);
        m.reply(`✅ Autibio *ENABLED* in this group. 

💝 Want your own free bot?  
👉 Type: *${prefix}getbot`);
    } else if (args[0].toLowerCase() === "off") {
        setSetting(m.sender, "autobio", false);
        m.reply("❌ Auto Bio disabled");
    } else m.reply("Usage: autobio on/off");
}
break;

// 🔹 Auto Read
case "autoread": {
       if (!isCreator && !isSudo) 
  return reply('❌ Only the bot owner or sudo users can use this command.');;
    if (!args[0]) return m.reply("Usage: autoread on/off");
    if (args[0].toLowerCase() === "on") {
        setSetting(m.sender, "autoread", true);
        m.reply(`✅ Autoread *ENABLED* in this group.

💝 Want your own free bot?  
👉 Type: *${prefix}getbot`);
    } else if (args[0].toLowerCase() === "off") {
        setSetting(m.sender, "autoread", false);
        m.reply("⛔ Auto-Read disabled for you");
    } else m.reply("Usage: autoread on/off");
}
break;

// 🔹 Auto View Status
case "autoviewstatus": {
   if (!isCreator && !isSudo) 
  return reply('❌ Only the bot owner or sudo users can use this command.');;
    if (!args[0]) return m.reply("Usage: autoviewstatus on/off");
    if (args[0].toLowerCase() === "on") {
        setSetting(m.sender, "autoViewStatus", true);
        m.reply(`Auto View Status is now *ON* ✅✅

💝 Want your own free bot?  
👉 Type: *${prefix}getbot`);
    } else if (args[0].toLowerCase() === "off") {
        setSetting(m.sender, "autoViewStatus", false);
        m.reply("Auto View Status is now *OFF* ❌");
    } else m.reply("Usage: autoviewstatus on/off");
}
break;

// 🔹 Auto Typing
case "autotyping": {
   if (!isCreator && !isSudo) 
  return reply('❌ Only the bot owner or sudo users can use this command.');;
    if (!args[0]) return m.reply("Usage: autotyping on/off");
    if (!m.isGroup) return m.reply("This command is restricted to groups only");

    if (args[0].toLowerCase() === "on") {
        setSetting(m.chat, "autoTyping", true);
        m.reply("✅ Auto Typing *enabled* in this group ");
    } else if (args[0].toLowerCase() === "off") {
        setSetting(m.chat, "autoTyping", false);
        m.reply("❌ Auto Typing *disabled* in this group");
    } else m.reply("Usage: autotyping on/off");
}
break;

// 🔹 Auto Recording
case "autorecording": {
   if (!isCreator && !isSudo) 
  return reply('❌ Only the bot owner or sudo users can use this command.');;
    if (!args[0]) return m.reply("Usage: autorecording on/off");
    if (!m.isGroup) return m.reply("This command only works in groups.");

    if (args[0].toLowerCase() === "on") {
        setSetting(m.chat, "autoRecording", true);
        m.reply("✅ Auto Recording enabled in this group");
    } else if (args[0].toLowerCase() === "off") {
        setSetting(m.chat, "autoRecording", false);
        m.reply("❌ Auto Recording disabled in this group");
    } else m.reply("Usage: autorecording on/off");
}
break;

// 🔹 Auto Record Type
case "autorecordtype": {
    if (!isAdmins && !isCreator) return m.reply("This command is restricted to owner only");
    if (!args[0]) return m.reply("Usage: autorecordtype on/off");
    if (!m.isGroup) return m.reply("This command is restricted to groups only");

    if (args[0].toLowerCase() === "on") {
        setSetting(m.chat, "autoRecordType", true);
        m.reply("✅ Auto Record Type enabled in this group");
    } else if (args[0].toLowerCase() === "off") {
        setSetting(m.chat, "autoRecordType", false);
        m.reply("❌ Auto Record Type disabled in this group");
    } else m.reply("Usage: autorecordtype on/off");
}
break;

// 🔹 Auto React
case "autoreact": {
    if (!isAdmins && !isCreator) return m.reply("This command is restricted to owner only")
    if (!args[0]) return m.reply(".autoreact on/off");
    if (!m.isGroup) return m.reply("This command is restricted to groups only");

    if (args[0].toLowerCase() === "on") {
        setSetting(m.chat, "autoReact", true);
        m.reply(`✅ Auto React *enabled* in this group

💝 Want your own free bot?  
👉 Type: *${prefix}getbot`);
    } else if (args[0].toLowerCase() === "off") {
        setSetting(m.chat, "autoReact", false);
        m.reply("❌ Auto React *disabled* in this group");
    } else m.reply("Usage: autoreact on/off");
}
break;
// 🔹 Banned
case "ban": {
    if (!isCreator) return m.reply(`╭━━〔 👑 ɴᴏᴄᴛɪs-xᴍᴅ 𝙿𝚁𝙾𝚃𝙴𝙲𝚃 👑 〕━━┈⊷
┃ ❌ *ACCESS DENIED — OWNER ONLY!*
╰━━━━━━━━━━━━━━━┈⊷

💝 Want your own bot?
👉 Type: *${prefix}getbot*`);
    if (!args[0]) return m.reply("Usage: ban <@user>");
    let user = args[0].replace(/[^0-9]/g, "") + "@s.whatsapp.net";
    setSetting(user, "banned", true);
    m.reply(`❌ @${user.split("@")[0]} is now banned`, { mentions: [user] });
}
break;

case "unban": {
    if (!isCreator) return m.reply(`╭━━〔 👑 ɴᴏᴄᴛɪs-xᴍᴅ 𝙿𝚁𝙾𝚃𝙴𝙲𝚃 👑 〕━━┈⊷
┃ ❌ *ACCESS DENIED — OWNER ONLY!*
╰━━━━━━━━━━━━━━━┈⊷

💝 Want your own bot?
👉 Type: *${prefix}getbot*`);
    if (!args[0]) return m.reply("Usage: unban <@user>");
    let user = args[0].replace(/[^0-9]/g, "") + "@s.whatsapp.net";
    setSetting(user, "banned", false);
    m.reply(`✅ @${user.split("@")[0]} is now unbanned`, { mentions: [user] });
}
break;

// 🔹 Feature: Auto Reply
case "autoreply": {
    if (!isCreator) return m.reply(`╭━━〔 👑 ᴠɴᴏᴄᴛɪs-xᴍᴅ 𝙿𝚁𝙾𝚃𝙴𝙲𝚃 👑 〕━━┈⊷
┃ ❌ *ACCESS DENIED — OWNER ONLY!*
╰━━━━━━━━━━━━━━━┈⊷

💝 Want your own bot?
👉 Type: *${prefix}getbot*`);
    if (!args[0]) return m.reply("Usage: autoreply on/off");
    if (args[0].toLowerCase() === "on") {
        setSetting(m.chat, "feature.autoreply", true);
        m.reply("✅ Auto Reply *enabled* in this chat");
    } else if (args[0].toLowerCase() === "off") {
        setSetting(m.chat, "feature.autoreply", false);
        m.reply("❌ Auto Reply *disabled* in this chat");
    } else m.reply("Usage: autoreplyfeature on/off");
}
break;

// 🔹 Feature: Anti Spam


// 🔹 Feature: Anti Bad Word
case "antibadword": {
   if (!isCreator && !isSudo) 
  return reply('❌ Only the bot owner or sudo users can use this command.');;
    if (!args[0]) return m.reply("Usage: antibadword on/off");
    if (args[0].toLowerCase() === "on") {
        setSetting(m.chat, "feature.antibadword", true);
        m.reply("✅ Anti Bad Word *enabled* in this chat");
    } else if (args[0].toLowerCase() === "off") {
        setSetting(m.chat, "feature.antibadword", false);
        m.reply("❌ Anti Bad Word *disabled* in this chat");
    } else m.reply("Usage: antibadword on/off");
}
break;

// 🔹 Feature: Anti Bot
case "antibot": {
   if (!isCreator && !isSudo) 
  return reply('❌ Only the bot owner or sudo users can use this command.');;
    if (!args[0]) return m.reply("Usage: antibot on/off");
    if (args[0].toLowerCase() === "on") {
        setSetting(m.chat, "feature.antibot", true);
        m.reply("✅ Anti Bot *enabled* in this chat");
    } else if (args[0].toLowerCase() === "off") {
        setSetting(m.chat, "feature.antibot", false);
        m.reply("❌ Anti Bot *disabled* in this chat");
    } else m.reply("Usage: antibot on/off");
}
break
// 🔹 Repo case
case "owner": {
    

   // 📌 Fill these placeholders with your details
   const ownerName = "⚡ prince premium dev";  // <── change name here
   const ownerNumber = "50958110376"; // <── change number here
   const displayTag = "Kallmetrust(Dev)🫵👦🏻";       // <── how you want it displayed

   let vcard = `BEGIN:VCARD
VERSION:3.0
FN:${ownerName}
TEL;type=CELL;type=VOICE;waid=${ownerNumber}:+${ownerNumber}
END:VCARD`;

   let caption = `
╭───「 👑 Owner Info 」
│
│ Name: ${ownerName}  
│ WhatsApp: wa.me/${ownerNumber}  
│ Role: ${displayTag}  
│
╰───────────────◆
💝 Want your own free bot?  
👉 Type: *${prefix}getbot*
   `;

   await devtrust.sendMessage(m.chat, { 
      contacts: { displayName: displayTag, contacts: [{ vcard }] } 
   }, { quoted: m });

   await devtrust.sendMessage(m.chat, {
      text: caption,
      mentions: [m.sender],
      contextInfo: {
         isForwarded: true,
         forwardingScore: 9999,
         forwardedNewsletterMessageInfo: {
            newsletterJid: `120363428122519422@newsletter`, // your channel/newsletter ID
            newsletterName: `ɴᴏᴄᴛɪs-xᴍᴅ update  📢`
         }
      }
   }, { quoted: m });
}
break;
case "repo": {
 
   // 📌 Fill your Telegram details here
   const tgUsername = "t.me/Princechristze";   // <── your Telegram username
   const tgChannel  = "@NOCTIS CRASHER TECH";    // <── your Telegram channel
   const waChannel  = "https://whatsapp.com/channel/0029VbDClYr1noz35rhw1X2T";

   let caption = `
╭───「 📂 Repository Info 」
│. 《 Queen Leesha Repo 》
│* Link 1 - http://t.me/NOCTIS-XMD1_bot
│* Link 2 - https://t.me/NOCTIS-XMD2_bot
│
│ 🚧 Repo is *not public yet*  
│ 🔗 Contact my Owner on Telegram:  
│ ${tgUsername}  
│  
│ 📢 Stay updated via the Tg Channel:  
│ ${tgChannel}  
│ 📢 Stay updated via the WhatsApp Channel:  
│ ${waChannel} 
│
╰───────────────◆
💝 Want your own free bot?  
👉 Type: *${prefix}getbot
   `;

   await devtrust.sendMessage(m.chat, {
      text: caption,
      mentions: [m.sender],
      contextInfo: {
         isForwarded: true,
         forwardingScore: 9999,
         forwardedNewsletterMessageInfo: {
            newsletterJid: `120363428122519422@newsletter`, // your channel/newsletter ID
            newsletterName: `prince premium dev 🏌🏻‍♂️`
         }
      }
   }, { quoted: m });
}
break;
case 'url':
case 'tourl': {    

    let q = m.quoted ? m.quoted : m;
    if (!q || !q.download) return reply(`Reply to an Image or Video with command ${prefix + command}`);
    
    let mime = q.mimetype || '';
    if (!/image\/(png|jpe?g|gif)|video\/mp4/.test(mime)) {
        return reply('Only images or MP4 videos are supported!');
    }

    let media;
    try {
        media = await q.download();
    } catch (error) {
        return reply('Failed to download media!');
    }

    const uploadImage = require('./allfunc/Data6');
    const uploadFile = require('./allfunc/Data7');
    let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime);
    let link;
    try {
        link = await (isTele ? uploadImage : uploadFile)(media);
    } catch (error) {
        return reply('Failed to upload media!');
    }

    devtrust.sendMessage(m.chat, {
        text: `[ Done by noctis xmd ✅ ]\n${link}`
    }, { quoted: m });
}
break;
case 'tiktok':
case 'tt':
    {
        if (!text) {
            return reply(`Example: ${prefix + command} link`);
        }
        if (!text.includes('tiktok.com')) {
            return reply(`Link Invalid!! Please provide a valid TikTok link.`);
        }
        
        m.reply("*Initializing....*");
    
        const tiktokApiUrl = `https://api.bk9.dev/download/tiktok?url=${encodeURIComponent(text)}`;

        fetch(tiktokApiUrl)
            .then(response => response.json())
            .then(data => {
                if (!data.status || !data.BK9 || !data.BK9.BK9) {
                    return reply('Failed to get a valid download link from the API.');
                }
                
                const videoUrl = data.BK9.BK9;
                
                devtrust.sendMessage(m.chat, {
                    caption: "*Approved ✅*",
                    video: { url: videoUrl }
                }, { quoted: m });
            })
            .catch(err => {
                console.error(err);
                reply("An error occurred while fetching the video. Please check your network or try a different link.");
            });
    }
    break;
case 'apk':
case 'apkdl': {
  if (!text) {
    return reply(` *Example:* ${prefix + command} com.whatsapp`);
  }
  
  try {
    const packageId = text.trim();
    const res = await fetch(`https://api.bk9.dev/download/apk?id=${encodeURIComponent(packageId)}`);
    const data = await res.json();

    if (!data.status || !data.BK9 || !data.BK9.dllink) {
      return reply(' *APK not found.* The package ID might be incorrect or the API failed. Please try a different one.');
    }

    const { name, emperor, dllink, package: packageName } = data.BK9;

    await devtrust.sendMessage(m.chat, {
      image: { url: emperor},
      caption:
`╭〔 *📦 APK Downloader* 〕─⬣
│
│ 🧩 *Name:* _${name}_
│ 📁 *Package:* _${packageName}_
│ 📥 *Download:* [Click Here](${dllink})
│
╰────────────⬣
_Sending file, please wait..._`
    }, { quoted: m });

    await devtrust.sendMessage(m.chat, {
      document: { url: dllink },
      fileName: `${name}.apk`,
      mimetype: 'application/vnd.android.package-archive'
    }, { quoted: m });

  } catch (e) {
    console.error(e);
    reply('*Failed to fetch APK.* An unexpected error occurred. Please try again later.');
  }
}
break;
case 'tomp4': {
   if (!m.quoted) return reply("🖼️ Reply to a *sticker or gif* with tomp4")
   let mime = m.quoted.mimetype || ''
   if (!/webp|gif/.test(mime)) return reply("⚠️ Reply must be a sticker or gif")

   try {
      // Download the quoted sticker/gif
      let media = await devtrust.downloadMediaMessage(m.quoted)

      // Send it as video/mp4
      await devtrust.sendMessage(m.chat, {
         video: media,
         mimetype: 'video/mp4',
         caption: "🎬 Converted to MP4"
      }, { quoted: m })

   } catch (e) {
      console.log(e)
      reply("❌ Failed to convert to MP4")
   }
}
break
case 'tomp3': {
   if (!m.quoted) return reply("🎥 Reply to a *video* with tomp3")
   let mime = m.quoted.mimetype || ''
   if (!/video/.test(mime)) return reply("⚠️ Reply to a video only")

   try {
      // download the quoted video
      let media = await devtrust.downloadMediaMessage(m.quoted)

      // send it back as audio (mp3)
      await devtrust.sendMessage(m.chat, {
         audio: media,
         mimetype: 'audio/mpeg',
         ptt: false
      }, { quoted: m })

   } catch (e) {
      console.log(e)
      reply("❌ Failed to convert to MP3")
   }
}
break
case 'kickadmins': {
    if (!m.isGroup) return reply(m.group)
if (!isCreator && !isSudo) 
  return reply('❌ Only the bot owner or sudo users can use this command.');
    

    let metadata = await devtrust.groupMetadata(m.chat)
    let participants = metadata.participants

    for (let member of participants) {
        // Skip bot and command issuer
        if (member.id === botNumber) continue
        if (member.id === m.sender) continue

        // Only kick admins
        if (member.admin === "superadmin" || member.admin === "admin") {
            await devtrust.groupParticipantsUpdate(
                m.chat,
                [member.id],
                'remove'
            )
            await sleep(1500) // prevent WA rate limit
        }
    }

    m.reply("✅ All Admin kicked Successfully")
}
break;
case 'kickall': {
if (!isCreator && !isSudo) 
  return reply('❌ Only the bot owner or sudo users can use this command.');
    if (!m.isGroup) return reply(m.group)
    if (!isCreator) return reply(m.admin)
    

    let metadata = await devtrust.groupMetadata(m.chat)
    let participants = metadata.participants

    for (let member of participants) {
        // skip owner & bot itself
        if (member.id === botNumber) continue
        if (member.admin === "superadmin" || member.admin === "admin") continue 

        await devtrust.groupParticipantsUpdate(
            m.chat,
            [member.id],
            'remove'
        )
        await sleep(1500) // delay so WA won’t block
    }

    m.reply("All members Removed successfully by noctis xmd ✅")
}
break;

case 'ydhdkk': { if (prefix === '.') {
 if (!isCreator) return reply(m.premium)
global.paptt = [
 "https://telegra.ph/file/5c62d66881100db561c9f.mp4",
 "https://telegra.ph/file/a5730f376956d82f9689c.jpg",
 "https://telegra.ph/file/8fb304f891b9827fa88a5.jpg",
 "https://telegra.ph/file/0c8d173a9cb44fe54f3d3.mp4",
 "https://telegra.ph/file/b58a5b8177521565c503b.mp4",
 "https://telegra.ph/file/34d9348cd0b420eca47e5.jpg",
 "https://telegra.ph/file/73c0fecd276c19560133e.jpg",
 "https://telegra.ph/file/af029472c3fcf859fd281.jpg",
 "https://telegra.ph/file/0e5be819fa70516f63766.jpg",
 "https://telegra.ph/file/29146a2c1a9836c01f5a3.jpg",
 "https://telegra.ph/file/85883c0024081ffb551b8.jpg",
 "https://telegra.ph/file/d8b79ac5e98796efd9d7d.jpg",
 "https://telegra.ph/file/267744a1a8c897b1636b9.jpg",
 ]
 let url = paptt[Math.floor(Math.random() * paptt.length)]
 devtrust.sendFile(m.chat, url, null, 'Aww..umm💦,am so horny come ride my pu**y anyhow u want😍🍑🍆', m)
}}
break
case 'coffee': {
devtrust.sendMessage(m.chat, {caption: m.success, image: { url: 'https://coffee.alexflipnote.dev/random' }}, { quoted: m })
            }
            break
case 'myip': {
        if (!isCreator) return reply(m.only.owner)
var http = require('http')
http.get({
'host': 'api.ipify.org',
'port': 80,
'path': '/'
}, function(resp) {
resp.on('data', function(ip) {
    reply("Your Ip Address Is: " + ip)
})
})
            }
        break;
case "movie": {
     
    if (!text) return m.reply("📌 Example: movie Inception");

    await devtrust.sendPresenceUpdate("composing", m.chat);

    try {
        const res = await axios.get(`http://www.omdbapi.com/?t=${encodeURIComponent(text)}&apikey=6372bb60`);
        if (res.data.Response === "False") return m.reply("❌ Movie not found.");

        const data = res.data;

        let caption = `
╭━━━🎬 *ɴᴏᴄᴛɪs-xᴍᴅ movie Search* 🎬━━━╮

🍿 *Title:* ${data.Title}  
📅 *Year:* ${data.Year}  
🔖 *Rated:* ${data.Rated}  
🗓 *Released:* ${data.Released}  
⏳ *Runtime:* ${data.Runtime}  
🎭 *Genre:* ${data.Genre}  
🎬 *Director:* ${data.Director}  
👥 *Actors:* ${data.Actors}  

📝 *Plot:*  
${data.Plot}

⭐ *IMDB Rating:* ${data.imdbRating}  
🔗 [IMDB Link](https://www.imdb.com/title/${data.imdbID})

💝 Want your own free bot?  
👉 Type: *${prefix}getbot*
        `;

        await devtrust.sendMessage(m.chat, {
            image: { url: data.Poster !== "N/A" ? data.Poster : "https://i.ibb.co/4f4tTnG/no-poster.png" },
            caption,
            mentions: [m.sender],
            contextInfo: {
                isForwarded: true,
                forwardingScore: 9999,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: `120363428122519422@newsletter`,
                    newsletterName: `prince premium dev ⚡`
                }
            }
        }, { quoted: m });

    } catch (e) {
        console.error(e);
        m.reply("⚠️ ᴠɪᴏʟᴇᴛ ᴄʀᴀsʜᴇʀ couldn’t fetch the movie info. Try again later!");
    }
}
break;
case "recipe-ingredientbykckcjc": {
    if (!text) return m.reply("Provide an ingredient. Example: recipe-ingredient chicken");
    try {
        const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(text)}`);
        if (!res.data.meals) return m.reply(" No recipes found with that ingredient.");
        const meals = res.data.meals.slice(0,5).map((m,i)=>`${i+1}. ${m.strMeal}\nhttps://www.themealdb.com/meal.php?c=${m.idMeal}`).join("\n\n");
        await devtrust.sendMessage(m.chat, { text: `🍴 Recipes with "${text}":\n\n${meals}` }, { quoted: m });
    } catch {
        m.reply("Failed to fetch recipes.");
    }
}
break;
case "sciencefact": {
    try {
        const res = await axios.get("https://uselessfacts.jsph.pl/random.json?language=en");
        await devtrust.sendMessage(m.chat, { text: `🔬 Science Fact:\n${res.data.text}` }, { quoted: m });
    } catch {
        m.reply("Failed to fetch science fact.");
    }
}
break;
case "book": {
    if (!text) return m.reply("Provide a book title or author\nExample: book Harry Potter");
    try {
        const res = await axios.get(`https://openlibrary.org/search.json?q=${encodeURIComponent(text)}&limit=5`);
        if (!res.data.docs.length) return m.reply(" No books found.");
        const books = res.data.docs.map((b,i)=>`${i+1}. ${b.title} by ${b.author_name?.[0] || "Unknown"}\nLink: https://openlibrary.org${b.key}`).join("\n\n");
        await devtrust.sendMessage(m.chat, { text: `📚 Book Search Results:\n\n${books}` }, { quoted: m });
    } catch {
        m.reply("Failed to fetch book information.");
    }
}
break;
case "recipe": {
    if (!text) return m.reply("Please Provide a dish name\nExample: recipe pancakes");
    try {
        const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(text)}`);
        if (!res.data.meals) return m.reply("No recipes found.");
        const meal = res.data.meals[0];
        const msg = `🍽 Recipe: ${meal.strMeal}\nCategory: ${meal.strCategory}\nCuisine: ${meal.strArea}\n\nIngredients:\n${Array.from({length:20}).map((_,i)=>meal[`strIngredient${i+1}`] ? `${meal[`strIngredient${i+1}`]} - ${meal[`strMeasure${i+1}`]}` : '').filter(Boolean).join("\n")}\n\nInstructions:\n${meal.strInstructions}`;
        await devtrust.sendMessage(m.chat, { text: msg }, { quoted: m });
    } catch {
        m.reply("Failed to fetch recipe.");
    }
}
break;

case "remind": {
    if (!text) return m.reply("Usage: remind <seconds> <message>\nExample: remind 60 Take a break");
    const [sec, ...msgArr] = text.split(" ");
    const msgText = msgArr.join(" ");
    const delay = parseInt(sec) * 1000;
    if (isNaN(delay) || !msgText) return m.reply(" Invalid usage.");
    await m.reply(`⏰ Reminder set for ${sec} seconds.`);
    setTimeout(() => {
        devtrust.sendMessage(m.chat, { text: `⏰ Reminder: ${msgText}` });
    }, delay);
}
break;
case "define":
case "dictionary": {
    if (!text) return m.reply("Provide a word to define\nExample: define computer");
    try {
        const res = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${text}`);
        const meanings = res.data[0].meanings[0].definitions[0].definition;
        await devtrust.sendMessage(m.chat, { text: `📖 ${text}:\n${meanings}` }, { quoted: m });
    } catch {
        m.reply("Could not find definition.");
    }
}
break;
case "currency": {
    if (!text) return m.reply(" Usage: currency <amount> <from> <to>\nExample: currency 100 USD NGN");
    const [amount, from, to] = text.split(" ");
    if (!amount || !from || !to) return m.reply(" Missing arguments!");

    try {
        const res = await axios.get(`https://api.exchangerate.host/convert?from=${from.toUpperCase()}&to=${to.toUpperCase()}&amount=${amount}`);
        await devtrust.sendMessage(m.chat, { text: `💱 ${amount} ${from.toUpperCase()} = ${res.data.result} ${to.toUpperCase()}` }, { quoted: m });
    } catch (e) {
        m.reply("Failed to convert currency.");
    }
}
break;
case "timdhxke": {
    if (!text) return m.reply("Provide a city or timezone\nExample: time Lagos");
    try {
        const res = await axios.get(`http://worldtimeapi.org/api/timezone/${encodeURIComponent(text)}`);
        await devtrust.sendMessage(m.chat, { text: `🕒 Current time in ${res.data.timezone}:\n${res.data.datetime}` }, { quoted: m });
    } catch (e) {
        m.reply("Could not fetch time for that location.");
    }
}
break;
case "iplookup": {
    if (!text) return m.reply("Provide an IP or domain\nExample: iplookup 8.8.8.8");
    try {
        const res = await axios.get(`https://ipapi.co/${text}/json/`);
        await devtrust.sendMessage(m.chat, { text: `🌐 IP Info for ${text}:\nCountry: ${res.data.country_name}\nRegion: ${res.data.region}\nCity: ${res.data.city}\nOrg: ${res.data.org}\nISP: ${res.data.org}` }, { quoted: m });
    } catch (e) {
        m.reply("Could not fetch IP info.");
    }
}
break;
case "genpass": {
    const length = parseInt(text) || 12;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let pass = "";
    for (let i=0;i<length;i++) pass += chars.charAt(Math.floor(Math.random()*chars.length));
    await devtrust.sendMessage(m.chat, { text: `🔑 Generated Password ✅:\n${pass}` }, { quoted: m });
}
break;
case "readqr": {
    if (!m.quoted || !m.quoted.image) return m.reply("Reply to an image containing a QR code.");
    const buffer = await m.quoted.download();
    try {
        const res = await axios.post("https://api.qrserver.com/v1/read-qr-code/", buffer, {
            headers: { "Content-Type": "multipart/form-data" }
        });
        const qrText = res.data[0].symbol[0].data;
        await devtrust.sendMessage(m.chat, { text: `📱 QR Code Content:\n${qrText}` }, { quoted: m });
    } catch (e) {
        m.reply("Failed to read QR code.");
    }
}
break;
case "weather": {
    if (!text) return m.reply("Please provide a city name\nExample: weather Lagos");
    const res = await axios.get(`https://wttr.in/${encodeURIComponent(text)}?format=3`);
    await devtrust.sendMessage(m.chat, { text: `🌤 Weather:\n${res.data}` }, { quoted: m });
}
break;
case "calculate": {
    if (!text) return m.reply("Provide an expression\nExample: calculate 12+25*3");
    try {
        const result = eval(text); // ⚠️ use with caution; you can use mathjs for safety
        await devtrust.sendMessage(m.chat, { text: `🧮 Result: ${result}` }, { quoted: m });
    } catch {
        m.reply("Invalid expression.");
    }
}
break;
case "wiki": {
    if (!text) return m.reply("Please provide a search term\nExample: wiki JavaScript");
    const res = await axios.get(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(text)}`);
    await devtrust.sendMessage(m.chat, { text: `📚 ${res.data.title}\n\n${res.data.extract}` }, { quoted: m });
}
break;
case "qrcode": {
    if (!text) return m.reply("Provide text to generate QR code\nExample: qrcode HelloWorld");
    const url = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(text)}`;
    await devtrust.sendMessage(m.chat, { image: { url }, caption: "📱 QR Code Generated" }, { quoted: m });
}
break;
case "pdftotext": {
    if (!m.quoted || !m.quoted.fileName?.endsWith(".pdf")) return m.reply("Reply to a PDF file.");
    const pdfBuffer = await m.quoted.download(); // your MD bot method
    const pdf = await pdfParse(pdfBuffer);
    await devtrust.sendMessage(m.chat, { text: `📄 PDF Text:\n\n${pdf.text}` }, { quoted: m });
}
break;

case "hangman": {
    const chatId = m.chat;
    const args = text?.split(" ") || [];
    let game = hangmanGames[chatId];

    // Start new game
    if (!game) {
        if (!args[0]) return m.reply("Start game with a word\nExample: hangman banana");
        const word = args[0].toLowerCase();
        const display = "_".repeat(word.length).split("");
        hangmanGames[chatId] = { word, display, attempts: 6, guessed: [] };
        await devtrust.sendMessage(chatId, { text: `🕹 Hangman Started!\n${display.join(" ")}\nAttempts left: 6\nVisual:\n${hangmanVisual[0]}\nGuess letters: hangman <letter>` }, { quoted: m });
        return;
    }

    // Guess a letter
    if (!args[0]) return m.reply("Provide a letter. Example: hangman a");
    const letter = args[0].toLowerCase();
    if (letter.length !== 1) return m.reply("❌ Guess one letter at a time.");
    if (game.guessed.includes(letter)) return m.reply("⚠️ Already guessed.");

    game.guessed.push(letter);
    if (game.word.includes(letter)) {
        game.display = game.display.map((c, i) => (game.word[i] === letter ? letter : c));
    } else {
        game.attempts -= 1;
    }

    // Check win
    if (!game.display.includes("_")) {
        await devtrust.sendMessage(chatId, { text: `🎉 You guessed the word: ${game.word}` }, { quoted: m });
        delete hangmanGames[chatId];
        return;
    }

    // Check lose
    if (game.attempts <= 0) {
        await devtrust.sendMessage(chatId, { text: `💀 Game over! The word was: ${game.word}` }, { quoted: m });
        delete hangmanGames[chatId];
        return;
    }

    await devtrust.sendMessage(chatId, { text: `🕹 Hangman\nWord: ${game.display.join(" ")}\nAttempts left: ${game.attempts}\nVisual:\n${hangmanVisual[6 - game.attempts]}\nGuessed: ${game.guessed.join(", ")}` }, { quoted: m });
}
break;
case "tictactoe": {
    const chatId = m.chat;
    const args = text?.split(" ") || [];
    let game = tictactoeGames[chatId];

    // Start new game
    if (!game) {
        const mentions = m.mentionedJid;
        if (!mentions || mentions.length < 2) return m.reply("Mention 2 users\nExample: tictactoe @user1 @user2");

        const board = Array(9).fill(null); // null means empty
        const turn = mentions[0];
        tictactoeGames[chatId] = { board, turn, players: mentions };
        const display = board.map((v, i) => numberEmojis[i]).join("");
        await devtrust.sendMessage(chatId, { text: `🎮 Tic-Tac-Toe Started!\n${display}\nTurn: @${turn.split("@")[0]}\nPlay: tictactoe <position 1-9>` }, { quoted: m, mentions });
        return;
    }

    // Play move
    if (!args[0]) return m.reply("❌ Choose position 1-9. Example: tictactoe 5");
    const pos = parseInt(args[0]) - 1;
    if (isNaN(pos) || pos < 0 || pos > 8) return m.reply("❌ Invalid position!");
    if (m.sender !== game.turn) return m.reply("❌ Not your turn!");
    if (game.board[pos] !== null) return m.reply("❌ Already taken!");

    const symbol = game.turn === game.players[0] ? "❌" : "⭕";
    game.board[pos] = symbol;

    // Check win
    const b = game.board;
    const wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    const winner = wins.find(w => w.every(i => b[i] === symbol));

    const displayBoard = b.map((v, i) => v || numberEmojis[i]).join("");

    if (winner) {
        await devtrust.sendMessage(chatId, { text: `🎉 Player @${game.turn.split("@")[0]} wins!\n${displayBoard}` }, { quoted: m, mentions: [game.turn] });
        delete tictactoeGames[chatId];
        return;
    }

    if (!b.includes(null)) {
        await devtrust.sendMessage(chatId, { text: `🤝 It's a tie!\n${displayBoard}` }, { quoted: m });
        delete tictactoeGames[chatId];
        return;
    }

    // Next turn
    game.turn = game.turn === game.players[0] ? game.players[1] : game.players[0];
    await devtrust.sendMessage(chatId, { text: `🎮 Next Turn: @${game.turn.split("@")[0]}\n${displayBoard}` }, { quoted: m, mentions: [game.turn] });
}
break;
case "numbattle": {
    const userRoll = Math.floor(Math.random() * 100) + 1;
    const botRoll = Math.floor(Math.random() * 100) + 1;
    let msg = `🎲 You rolled: ${userRoll}\n🤖 Bot rolled: ${botRoll}\n`;
    msg += userRoll > botRoll ? "🎉 You win!" : userRoll < botRoll ? "😢 You lose!" : "🤝 It's a tie!";
    await devtrust.sendMessage(m.chat, { text: msg }, { quoted: m });
}
break;
case "coinbattle": {
    const userFlip = Math.random() < 0.5 ? "Heads" : "Tails";
    const botFlip = Math.random() < 0.5 ? "Heads" : "Tails";
    let msg = `🪙 You flipped: ${userFlip}\n🤖 Bot flipped: ${botFlip}\n`;
    msg += userFlip === botFlip ? "🎉 You win!" : "😢 You lose!";
    await devtrust.sendMessage(m.chat, { text: msg }, { quoted: m });
}
break;
case "numberbattle": {
    const number = Math.floor(Math.random() * 50) + 1;
    if (!text) return m.reply("❌ Guess a number between 1 and 50\nExample: numberbattle 25");
    const guess = parseInt(text);
    let msg = `🎯 Your guess: ${guess}\n🎲 Target number: ${number}\n`;
    msg += guess === number ? "🎉 Perfect guess!" : guess > number ? "⬇️ Too high!" : "⬆️ Too low!";
    await devtrust.sendMessage(m.chat, { text: msg }, { quoted: m });
}
break;
case "math": {
    const a = Math.floor(Math.random() * 50) + 1;
    const b = Math.floor(Math.random() * 50) + 1;
    const answer = a + b;
    await devtrust.sendMessage(m.chat, { text: `➕ Solve: ${a} + ${b}\nReply with: mathanswer <number>` }, { quoted: m });
    
    // Store answer to check later
}
break;
case "emojiquiz": {
    const quizzes = [
        { emoji: "🐍", answer: "snake" },
        { emoji: "🍎", answer: "apple" },
        { emoji: "🏎️", answer: "car" },
        { emoji: "🎸", answer: "guitar" },
        { emoji: "☕", answer: "coffee" }
    ];
    const quiz = quizzes[Math.floor(Math.random() * quizzes.length)];
    await devtrust.sendMessage(m.chat, { text: `🧩 Guess the Emoji:\n${quiz.emoji}\nReply with: emojianswer <your guess>` }, { quoted: m });
    
    // Store the correct answer for checking
}
break;
case "dice": {
    const roll = Math.floor(Math.random() * 6) + 1;
    await devtrust.sendMessage(m.chat, { text: `🎲 You rolled a ${roll}!` }, { quoted: m });
}
break;
case "rpsls": {
    if (!text) return m.reply("Choose rock, paper, scissors, lizard, or spock\nExample: rpsls spock");
    const choices = ["rock", "paper", "scissors", "lizard", "spock"];
    const userChoice = text.toLowerCase();
    if (!choices.includes(userChoice)) return m.reply("❌ Invalid choice! Use rock, paper, scissors, lizard, or spock.");

    const botChoice = choices[Math.floor(Math.random() * choices.length)];

    const winMap = {
        rock: ["scissors", "lizard"],
        paper: ["rock", "spock"],
        scissors: ["paper", "lizard"],
        lizard: ["spock", "paper"],
        spock: ["scissors", "rock"]
    };

    let result = "";
    if (userChoice === botChoice) result = "🤝 It's a tie!";
    else if (winMap[userChoice].includes(botChoice)) result = "🎉 You win!";
    else result = "😢 You lose!";

    await devtrust.sendMessage(
        m.chat,
        { text: `🪨 You chose: ${userChoice}\n🤖 Bot chose: ${botChoice}\n\n${result}` },
        { quoted: m }
    );
}
break;
case "coin": {
    const result = Math.random() < 0.5 ? "🪙 Heads" : "🪙 Tails";
    await devtrust.sendMessage(m.chat, { text: `🎲 Coin Flip Result: ${result}` }, { quoted: m });
}
break;
case "gamefact": {
    try {
        const res = await axios.get("https://www.freetogame.com/api/games");
        const games = res.data;
        const game = games[Math.floor(Math.random() * games.length)];
        await devtrust.sendMessage(
            m.chat,
            { text: `🎮 Game: ${game.title}\nGenre: ${game.genre}\nPlatform: ${game.platform}\nMore Info: ${game.game_url}` },
            { quoted: m }
        );
    } catch (e) {
        console.error("GAMEFACT ERROR:", e);
        m.reply("❌ Failed to fetch a game fact.");
    }
}
break;
case "fox": {
    try {
        const res = await axios.get("https://randomfox.ca/floof/");
        const img = res.data?.image;
        if (!img) return m.reply("❌ Could not fetch a fox image.");
        await devtrust.sendMessage(m.chat, { image: { url: img }, caption: "🦊 Random Fox!" }, { quoted: m });
    } catch (e) {
        console.error("FOX ERROR:", e);
        m.reply("❌ Failed to fetch a fox image.");
    }
}
break;
case "bchcn": {
    try {
        const res = await axios.get("https://some-random-api.ml/img/koala");
        const img = res.data?.link;
        if (!img) return m.reply("❌ Could not fetch a koala image.");
        await devtrust.sendMessage(m.chat, { image: { url: img }, caption: "🐨 Random Koala!" }, { quoted: m });
    } catch (e) {
        console.error("KOALA ERROR:", e);
        m.reply("❌ Failed to fetch a koala image.");
    }
}
break;
case "hxjxjjkm": {
    try {
        const res = await axios.get("https://some-random-api.ml/img/birb");
        const img = res.data?.link;
        if (!img) return m.reply("❌ Could not fetch a bird image.");
        await devtrust.sendMessage(m.chat, { image: { url: img }, caption: "🐦 Random Bird!" }, { quoted: m });
    } catch (e) {
        console.error("BIRD ERROR:", e);
        m.reply("❌ Failed to fetch a bird image.");
    }
}
break;
case "panda": {
    try {
        const res = await axios.get("https://some-random-api.ml/img/panda");
        const img = res.data?.link;         
        await devtrust.sendMessage(m.chat, { image: { url: img }, caption: "🐼 Random Panda!" }, { quoted: m });
    } catch (e) {
        console.error("PANDA ERROR:", e);
        m.reply("❌ Failed to fetch a panda image.");
    }
}
break;
case "funfact": {
    try {
        const res = await axios.get("https://uselessfacts.jsph.pl/random.json?language=en");
        const fact = res.data?.text || "Did you know? Bots are awesome!";
        await devtrust.sendMessage(m.chat, { text: `💡 Fun Fact:\n${fact}` }, { quoted: m });
    } catch (e) {
        console.error("FUNFACT ERROR:", e);
        m.reply("❌ Failed to fetch a fun fact.");
    }
}
break;
case "vkfkk": {
    try {
        const res = await axios.get("https://api.quotable.io/random");
        const quote = res.data?.content || "Keep pushing forward!";
        const author = res.data?.author || "Unknown";
        await devtrust.sendMessage(m.chat, { text: `🖋 "${quote}"\n— ${author}` }, { quoted: m });
    } catch (e) {
        console.error("QUOTEMEME ERROR:", e);
        m.reply("❌ Failed to fetch a quote.");
    }
}
break;
case "prog": {
    try {
        const res = await axios.get("https://v2.jokeapi.dev/joke/Programming?type=single");
        const joke = res.data?.joke || "Why do programmers prefer dark mode? Because light attracts bugs!";
        await devtrust.sendMessage(m.chat, { text: `💻 Programming Joke:\n${joke}` }, { quoted: m });
    } catch (e) {
        console.error("PROG JOKE ERROR:", e);
        m.reply("❌ Failed to fetch a programming joke.");
    }
}
break;
case "dadjoke": {
    try {
        const res = await axios.get("https://icanhazdadjoke.com/", { headers: { Accept: "application/json" } });
        const joke = res.data?.joke || "I would tell you a joke about construction, but I'm still working on it!";
        await devtrust.sendMessage(m.chat, { text: `👨‍🦳 Dad Joke:\n${joke}` }, { quoted: m });
    } catch (e) {
        console.error("DAD JOKE ERROR:", e);
        m.reply("❌ Failed to fetch a dad joke.");
    }
}
break;
case "progquote": {
    try {
        const res = await axios.get("https://hdramming-quotes-api.herokuapp.com/quotes/random");
        const quote = res.data?.en || "Talk is cheap. Show me the code.";
        const author = res.data?.author || "Linus Torvalds";
        await devtrust.sendMessage(m.chat, { text: `💻 "${quote}"\n— ${author}` }, { quoted: m });
    } catch (e) {
        console.error("PROGQUOTE ERROR:", e);
        m.reply("❌ Failed to fetch a programming quote.");
    }
}
break;
case "asciivjxnd": {
    if (!text) return m.reply("❌ Provide a word or text\nExample: ascii Hello");
    try {
        const res = await axios.get(`https://artii.herokuapp.com/make?text=${encodeURIComponent(text)}`);
        const ascii = res.data || text;
        await devtrust.sendMessage(m.chat, { text: `🎨 ASCII Art:\n\n${ascii}` }, { quoted: m });
    } catch (e) {
        console.error("ASCII ERROR:", e);
        m.reply("❌ Failed to generate ASCII art.");
    }
}
break;
case "advice": {
    try {
        const res = await axios.get("https://api.adviceslip.com/advice");
        const advice = res.data?.slip?.advice || "Keep going!";
        await devtrust.sendMessage(m.chat, { text: `💡 Advice:\n${advice}` }, { quoted: m });
    } catch (e) {
        console.error("ADVICE ERROR:", e);
        m.reply("❌ Failed to fetch advice.");
    }
}
break;
case "guess": {
    const number = Math.floor(Math.random() * 10) + 1; // 1–10
    if (!text) return m.reply("Guess a number between 1 and 10.\nExample: guess 7");
    const guess = parseInt(text);
    if (isNaN(guess) || guess < 1 || guess > 10) return m.reply("❌ Invalid number! Choose 1–10.");
    
    let msg = `🎯 You guessed: ${guess}\n🤖 Bot chose: ${number}\n`;
    msg += guess === number ? "🎉 You guessed it! Congrats!" : "😢 Wrong guess! Try again.";
    await devtrust.sendMessage(m.chat, { text: msg }, { quoted: m });
}
break;
case "urban": {
    if (!text) return m.reply("❌ Provide a word to search. Example: urban sus");
    try {
        const res = await axios.get(`https://api.urbandictionary.com/v0/define?term=${encodeURIComponent(text)}`);
        const defs = res.data?.list;
        if (!defs || !defs.length) return m.reply("❌ No definition found.");
        const top = defs[0];
        const msg = `📖 Word: ${top.word}\nDefinition: ${top.definition}\nExample: ${top.example}`;
        await devtrust.sendMessage(m.chat, { text: msg }, { quoted: m });
    } catch (e) {
        console.error("URBAN ERROR:", e);
        m.reply("❌ Failed to fetch definition.");
    }
}
break;
case "moviequote": {
    try {
        const res = await axios.get("https://movie-quote-api.herokuapp.com/v1/quote/");
        const quote = res.data?.quote || "May the Force be with you.";
        const movie = res.data?.show || "Unknown";
        await devtrust.sendMessage(
            m.chat,
            { text: `🎬 "${quote}"\n— ${movie}` },
            { quoted: m }
        );
    } catch (e) {
        console.error("MOVIE QUOTE ERROR:", e);
        m.reply("❌ Failed to fetch a movie quote.");
    }
}
break;
case "triviafact": {
    try {
        const res = await axios.get("https://uselessfacts.jsph.pl/random.json?language=en");
        const fact = res.data?.text || "Did you know? You're awesome!";
        await devtrust.sendMessage(m.chat, { text: `🧠 Trivia Fact:\n${fact}` }, { quoted: m });
    } catch (e) {
        console.error("TRIVIA FACT ERROR:", e);
        m.reply("❌ Failed to fetch trivia fact.");
    }
}
break;
case "cbhcchhcx": {
    try {
        const res = await axios.get("https://type.fit/api/quotes");
        const quotes = res.data;
        const q = quotes[Math.floor(Math.random() * quotes.length)];
        await devtrust.sendMessage(
            m.chat,
            { text: `🌟 "${q.text}"\n— ${q.author || "Unknown"}` },
            { quoted: m }
        );
    } catch (e) {
        console.error("INSPIRE ERROR:", e);
        m.reply("❌ Failed to fetch inspiring quote.");
    }
}
break;
case "compliment": {
    try {
        const res = await axios.get("https://complimentr.com/api");
        const compliment = res.data?.compliment || "You are awesome!";
        await devtrust.sendMessage(m.chat, { text: `💖 ${compliment}` }, { quoted: m });
    } catch (e) {
        console.error("COMPLIMENT ERROR:", e);
        m.reply("❌ Failed to fetch a compliment.");
    }
}
break;
case "dog": {
    try {
        const res = await axios.get("https://dog.ceo/api/breeds/image/random");
        const img = res.data?.message;
        if (!img) return m.reply("❌ Could not fetch a dog image.");
        await devtrust.sendMessage(
            m.chat,
            { image: { url: img }, caption: "🐶 Random Dog!" },
            { quoted: m }
        );
    } catch (e) {
        console.error("DOG ERROR:", e);
        m.reply("❌ Failed to fetch a dog image.");
    }
}
break;
case 'sfw': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/sfw' }}, { quoted: m })
}
break;

case 'moe': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/moe' }}, { quoted: m })
}
break;

case 'aipic': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/aipic' }}, { quoted: m })
}
break;

case 'hentai': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/hentai' }}, { quoted: m })
}
break;

case 'chinagirl': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/chinagirl' }}, { quoted: m })
}
break;

case 'bluearchive': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/bluearchive' }}, { quoted: m })
}
break;

case 'boypic': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/boypic' }}, { quoted: m })
}
break;

case 'carimage': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/carimage' }}, { quoted: m })
}
break;

case 'random-girl': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/randomgirl' }}, { quoted: m })
}
break;

case 'hijab-girl': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/hijabgirl' }}, { quoted: m })
}
break;

case 'indonesia-girl': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/indonesiagirl' }}, { quoted: m })
}
break;

case 'japan-girl': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/japangirl' }}, { quoted: m })
}
break;

case 'korean-girl': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/koreangirl' }}, { quoted: m })
}
break;

case 'loli': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/loli' }}, { quoted: m })
}
break;

case 'malaysia-girl': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/malaysiagirl' }}, { quoted: m })
}
break;

case 'profile-pictures': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/profilepictures' }}, { quoted: m })
}
break;

case 'thailand-girl': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/thailandgirl' }}, { quoted: m })
}
break;

case 'tiktokgirl': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/tiktok-girl' }}, { quoted: m })
}
break;

case 'vietnam-girl': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/vietnamgirl' }}, { quoted: m })
}
break;
case "cat": {
    try {
        const res = await axios.get("https://api.thecatapi.com/v1/images/search");
        const img = res.data[0]?.url;
        if (!img) return m.reply("❌ Could not fetch a cat image.");
        await devtrust.sendMessage(
            m.chat,
            { image: { url: img }, caption: "🐱 Random Cat!" },
            { quoted: m }
        );
    } catch (e) {
        console.error("CAT ERROR:", e);
        m.reply("❌ Failed to fetch a cat image.");
    }
}
break;
case "rps": {
    if (!text) return m.reply("❌ Choose rock, paper, or scissors. Example: rps rock");
    const choices = ["rock", "paper", "scissors"];
    const userChoice = text.toLowerCase();
    if (!choices.includes(userChoice)) return m.reply("❌ Invalid choice! Use rock, paper, or scissors.");

    const botChoice = choices[Math.floor(Math.random() * choices.length)];

    let result = "";
    if (userChoice === botChoice) result = "🤝 It's a tie!";
    else if (
        (userChoice === "rock" && botChoice === "scissors") ||
        (userChoice === "paper" && botChoice === "rock") ||
        (userChoice === "scissors" && botChoice === "paper")
    ) result = "🎉 You win!";
    else result = "😢 You lose!";

    await devtrust.sendMessage(
        m.chat,
        { text: `🪨 You chose: ${userChoice}\n🤖 Bot chose: ${botChoice}\n\n${result}` },
        { quoted: m }
    );
}
break;
case "8ball": {
    const answers = [
        "It is certain ✅",
        "Without a doubt ✅",
        "You may rely on it ✅",
        "Ask again later 🤔",
        "Cannot predict now 🤷",
        "Don't count on it ❌",
        "My sources say no ❌",
        "Very doubtful ❌"
    ];
    if (!text) return m.reply("❌ Ask me a question! Example: 8ball Will I get rich?");
    const answer = answers[Math.floor(Math.random() * answers.length)];
    await devtrust.sendMessage(m.chat, { text: `🎱 Question: ${text}\nAnswer: ${answer}` }, { quoted: m });
}
break;
case "trivia": {
    try {
        const res = await axios.get("https://opentdb.com/api.php?amount=1&type=multiple");
        const trivia = res.data.results[0];
        const options = [...trivia.incorrect_answers, trivia.correct_answer].sort(() => Math.random() - 0.5);
        const text = `❓ ${trivia.question}\n\nOptions:\n${options.map((o,i)=>`${i+1}. ${o}`).join("\n")}`;
        await devtrust.sendMessage(m.chat, { text }, { quoted: m });
        // Store trivia.correct_answer if you want to check the user's answer later
    } catch (e) {
        console.error("TRIVIA ERROR:", e);
        m.reply("❌ Failed to fetch trivia question.");
    }
}
break;
case "meme": {
    try {
        const res = await axios.get("https://meme-api.com/gimme");
        const meme = res.data;
        if (!meme?.url) return m.reply("❌ Could not fetch a meme.");
        await devtrust.sendMessage(
            m.chat,
            { image: { url: meme.url }, caption: `😂 ${meme.title}` },
            { quoted: m }
        );
    } catch (e) {
        console.error("MEME ERROR:", e);
        m.reply("❌ Failed to fetch a meme.");
    }
}
break;
case 'gfx':
case 'gfx2':
case 'gfx3':
case 'gfx4':
case 'gfx5':
case 'gfx6':
case 'gfx7':
case 'gfx8':
case 'gfx9':
case 'gfx10':
case 'gfx11':
case 'gfx12': {
  const [text1, text2] = text.split('|').map(v => v.trim());
  if (!text1 || !text2) {
    return reply(`*Violet - Gfx*\n\n\`\`\`Example:\`\`\` ${prefix + command} Violet | Xd`);
  }

  reply(` *Generating your stylish image*...\n\n🔤 Text 1: ${text1}\n🔡 Text 2: ${text2}\n\n⏳ Please wait!`);

  try {
    const style = command.toUpperCase();
    const apiUrl = `https://api.nexoracle.com/image-creating/${command}?apikey=d0634e61e8789b051e&text1=${encodeURIComponent(text1)}&text2=${encodeURIComponent(text2)}`;

    await sendImage(apiUrl, ` ᴠɪᴏʟᴇᴛ ᴋɪɴɢ ᴅᴇᴠ🥶- ${style} Style\n\n🔤 Text 1: ${text1}\n🔡 Text 2: ${text2}`);
  } catch (err) {
    console.error(err);
    reply(`Failed to generate ${command.toUpperCase()} image.`);
  }
  break;
}

case 'getpp':{
    if (!isCreator) return reply("Sorry, only the owner can use this command");
let userss = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let ghosst = userss
	try {
   var ppuser = await devtrust.profilePictureUrl(ghosst, 'image')
} catch (err) {
   var ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
devtrust.sendMessage(from, { image: { url: ppuser }}, { quoted: m })
}
break;
case 'yts': case 'ytsearch': {
  if (!isCreator) return reply(`Sorry, only the owner can use this command`)
                if (!text) return reply(`Example : ${prefix + command} story wa anime`)
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `📟 No : ${no++}\n🚀 Type : ${i.type}\n🆔 Video ID : ${i.videoId}\n📨 Title : ${i.title}\n👀 Views : ${i.views}\n⏰ Duration : ${i.timestamp}\n📤 Uploaded : ${i.ago}\n🔗 Url : ${i.url}\n\n─────────────────\n\n`
                }
                devtrust.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
  
case 'animewlp':{
if (!isCreator) return reply(`Sorry, only the owner can use this command`)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/wallpaper`)       
            await devtrust.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: m.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break;


case 'resetlink': {
if (!isCreator) return reply(`Sorry, only the owner can use this command`)
if (!m.isGroup) return reply(mess.only.group)
devtrust.groupRevokeInvite(m.chat)
}
break;
case 'animedl': {
if (!isCreator) return reply(`Sorry, only the owner can use this command`)
    if (!q.includes("|")) {
        return reply("📌 *Please provide a valid anime name and episode number!*\n\nExample: `.animedl Solo Leveling | 1`");
    }

    try {
        const [animeName, episode] = q.split("|").map(x => x.trim()); 

        const apiUrl = `https://draculazxy-xyzdrac.hf.space/api/Animedl?q=${encodeURIComponent(animeName)}&ep=${encodeURIComponent(episode)}`;

        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; 

        const { data } = await axios.get(apiUrl, {
            httpsAgent: new (require('https').Agent)({ rejectUnauthorized: false })
        });

        if (data.STATUS !== 200 || !data.download_link) {
            return reply("⚠️ *Failed to retrieve the anime episode!*\n\nPlease check the anime name and episode number.");
        }

        const { anime, episode: epNumber, download_link } = data;

        let message = `
🎥 *Anime Found!*

📺 *Name:* ${anime}
📌 *Episode:* ${epNumber}

📥 *Downloading... Please wait!*
Mrs Trust 💘 DOWNLOADER ✅
        `.trim();

        await reply(message);

    
        await devtrust.sendMessage(m.chat, {
            document: { url: download_link },
            mimetype: "video/mp4",
            fileName: `${anime} - Episode ${epNumber}.mp4`
        }, { quoted: m });

    } catch (error) {
        console.error("❌ Anime Downloader Error:", error.message);
        reply("⚠️ *Server Error!*\n\nPlease try again later.");
    }
}
break;
case 'animesearch': {
if (!isCreator) return reply(`Sorry, only the owner can use this command`)
if (!text) return reply(`Which anime are you lookin for?`)
const malScraper = require('mal-scraper')
        const anime = await malScraper.getInfoFromName(text).catch(() => null)
        if (!anime) return reply(`Could not find`)
let animetxt = `
🎀 *Title: ${anime.title}*
🎋 *Type: ${anime.type}*
🎐 *Premiered on: ${anime.premiered}*
💠 *Total Episodes: ${anime.episodes}*
📈 *Status: ${anime.status}*
💮 *Genres: ${anime.genres}
📍 *Studio: ${anime.studios}*
🌟 *Score: ${anime.score}*
💎 *Rating: ${anime.rating}*
🏅 *Rank: ${anime.ranked}*
💫 *Popularity: ${anime.popularity}*
♦️ *Trailer: ${anime.trailer}*
🌐 *URL: ${anime.url}*
❄ *Description:* ${anime.synopsis}*`
                await devtrust.sendMessage(m.chat,{image:{url:anime.picture}, caption:animetxt},{quoted:m})
                }
                break;
                
            case 'animehighfive':{
            if (isban) return reply(`Sorry, only the owner can use this command`)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/highfive`)       
            await devtrust.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: m.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break;
case 'animecringe':{
if (!isCreator) return reply(`Sorry, only the owner can use this command`)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/cringe`)       
            await devtrust.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: m.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break;
case 'animedance':{
if (!isCreator) return reply(`Sorry, only the owner can use this command`)
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/dance`)       
            await devtrust.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: m.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break;
case 'animehappy':{
if (!isCreator) return reply(`Sorry, only the owner can use this command`)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/happy`)       
            await devtrust.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: m.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break;
case 'animeglomp':{
if (!isCreator) return reply(`Sorry, only the owner can use this command`)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/glomp`)       
            await devtrust.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: m.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break;
case 'animesmug':{
if (!isCreator) return reply(`Sorry, only the owner can use this command`)
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/smug`)       
            await devtrust.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: m.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break;
case 'animeblush':{
if (!isCreator) return reply(`Sorry, only the owner can use this command`)
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/blush`)       
            await devtrust.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: m.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break;

case 'animewave':{
if (!isCreator) return reply(`Sorry, only the owner can use this command`)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/wave`)       
            await devtrust.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: m.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break;
case 'animesmile':{
if (!isCreator) return reply(`Sorry, only the owner can use this command`)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/smile`)       
            await devtrust.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: m.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break;
case 'animepoke':{
if (!isCreator) return reply(`Sorry, only the owner can use this command`)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/poke`)       
            await devtrust.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: m.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break;
case 'animewink':{
if (!isCreator) return reply(`Sorry, only the owner can use this command`)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/wink`)       
            await devtrust.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: m.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break;
case 'animebonk':{
if (!isCreator)  return reply(`Sorry, only the owner can use this command`)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bonk`)       
            await devtrust.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: m.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break;
case 'animebully':{
if (!isCreator) return reply(`Sorry, only the owner can use this command`)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bully`)       
            await devtrust.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: m.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break;
case 'animeyeet':{
if (!isCreator) return reply(`Sorry, only the owner can use this command`)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/yeet`)       
            await devtrust.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: m.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break;
case 'createlogo': {
  if (!text) {
    return m.reply(" Enter the logo title, idea and slogan. Format: .createlogo Title|Idea|Slogan");
  }

  const [title, idea, slogan] = text.split("|");

  if (!title || !idea || !slogan) {
    return m.reply(" Incorrect format. Use : .createlogo Title|Idea|Slogan\n\n*Example :* .logogen SATURO|thegoat| always");
  }

  try {
    const payload = {
      ai_icon: [333276, 333279],
      height: 300,
      idea: idea,
      industry_index: "N",
      industry_index_id: "",
      pagesize: 4,
      session_id: "",
      slogan: slogan,
      title: title,
      whiteEdge: 80,
      width: 400
    };

    const { data } = await axios.post("https://www.sologo.ai/v1/api/logo/logo_generate", payload);
    
    if (!data.data.logoList || data.data.logoList.length === 0) {
      return m.reply("Failed to Create Logo");
    }

    const logoUrls = data.data.logoList.map(logo => logo.logo_thumb);
    
    for (const url of logoUrls) {
      await devtrust.sendMessage(m.chat, { image: { url: url } });
    }
  } catch (error) {
    console.error("Error generating logo:", error);
    await m.reply("Failed to Create Logo");
  }
};
break;        
case 'animebite':{
if (!isCreator) return reply(`Sorry, only the owner can use this command`)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bite`)       
            await devtrust.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: m.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break;
case 'animelick':{
if (!isCreator) return reply(`Sorry, only the owner can use this command`)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/lick`)       
            await devtrust.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: m.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break;
case 'animekill':{
if (!isCreator) return reply(`Sorry, only the owner can use this command`)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/kill`)       
            await devtrust.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: m.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break;


           case 'cry': case 'kill': case 'hug': case 'pat': case 'lick': 
case 'kiss': case 'bite': case 'yeet': case 'bully': case 'bonk':
case 'wink': case 'poke': case 'nom': case 'slap': case 'smile': 
case 'wave': case 'awoo': case 'blush': case 'smug': case 'glomp': 
case 'happy': case 'dance': case 'cringe': case 'cuddle': case 'highfive': 
case 'shinobu': case 'handhold': {
 if (!isCreator) return reply("Sorry only the owner can use this command")
axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
devtrust.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break;
 case 'ai': {
  if (!text) return reply('Example: .ai ᴡʜᴏ ɪs ᴍᴀʀᴋ ᴢᴜɢᴇʀʙᴇʀᴋ?');

  await devtrust.sendPresenceUpdate('composing', m.chat);

  try {
    const { data } = await axios.post("https://chateverywhere.app/api/chat/", {
      model: {
        id: "gpt-4",
        name: "GPT-4",
        maxLength: 32000,
        tokenLimit: 8000,
        completionTokenLimit: 5000,
        deploymentName: "gpt-4"
      },
      messages: [{ pluginId: null, content: text, role: "user" }],
      prompt: text,
      temperature: 0.5
    }, {
      headers: {
        "Accept": "*/*",
        "User-Agent": "WhatsApp Bot"
      }
    });

    await devtrust.sendMessage(m.chat, {
      text: `╭─❍ AI Assistant\n│\n│ Q: ${text}\n│\n│ A:\n│ ${data}\n│\n╰─✅Need anything else?`
    }, { quoted: m });

  } catch (e) {
    await reply(`AI encountered a problem: ${e.message}`);
  }
}
break
case 'idch': {
if (!isCreator) return reply("Sorry, only the owner can use this command");
if (!text) return reply("example : link channel")
if (!text.includes("https://whatsapp.com/channel/")) return reply("not a valid Link ")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await devtrust.newsletterMetadata("invite", result)
let teks = `
* *🆔 ID :* ${res.id}
* *👤 Name :* ${res.name}
* *👥 Follower:* ${res.subscribers}
* *📊 Status :* ${res.state}
* *✔️ Verified :* ${res.verification == "VERIFIED" ? "Verified" : "No"}
`
return reply(teks)
}
    break;
 case 'closetime': {
    if (!isCreator) return reply("Sorry, only the owner can use this command");

    let unit = args[1];
    let value = Number(args[0]);
    if (!value) return reply("*Usage:* closetime <number> <second/minute/hour/day>\n\n*Example:* 10 minute");

    let timer;
    if (unit === 'second') {
        timer = value * 1000;
    } else if (unit === 'minute') {
        timer = value * 60000;
    } else if (unit === 'hour') {
        timer = value * 3600000;
    } else if (unit === 'day') {
        timer = value * 86400000;
    } else {
        return reply('*Choose:*\nsecond\nminute\nhour\nday\n\n*Example:*\n10 minute');
    }

    reply(`⏳ Close Time ${value} ${unit} starting from now...`);

    setTimeout(async () => {
        try {
            await devtrust.groupSettingUpdate(m.chat, 'announcement');
            reply(`✅ *On time!* Group has been closed by Admin\nNow only Admins can send messages.`);
        } catch (e) {
            reply('❌ Failed: ' + e.message);
        }
    }, timer);
}
break;
case 'opentime': {
    if (!isCreator) return reply("Sorry, only the owner can use this command");

    let unit = args[1];
    let value = Number(args[0]);
    if (!value) return reply('*Usage:* opentime <number> <second/minute/hour/day>\n*Example:* 5 second');

    let timer;
    if (unit === 'second') {
        timer = value * 1000;
    } else if (unit === 'minute') {
        timer = value * 60000;
    } else if (unit === 'hour') {
        timer = value * 3600000;
    } else if (unit === 'day') {
        timer = value * 86400000;
    } else {
        return reply('*Choose:*\nsecond\nminute\nhour\nday\n\n*Example:*\n5 second');
    }

    reply(`⏳ Open Time ${value} ${unit} starting from now...`);

    setTimeout(async () => {
        try {
            await devtrust.groupSettingUpdate(m.chat, 'not_announcement');
            reply(`✅ *On time!* Group has been opened by Admin\nNow members can send messages.`);
        } catch (e) {
            reply('❌ Failed: ' + e.message);
        }
    }, timer);
}
break;
case 'fact':
 if (!isCreator) return reply("This command is restricted to owner only");
    const bby = "https://apis.davidcyriltech.my.id/fact";

    try {
        const nyash = await axios.get(bby);
        const bwess = 'https://files.catbox.moe/ba5km9.jpg';
        const ilovedavid = nyash.data.fact;
        await devtrust.sendMessage(m.chat, { image: { url: bwess }, caption: ilovedavid });
    } catch (error) {
        reply("An Error Occured.");
    }
    break;
case 'listonline': {
if (!isCreator) return m.reply("Owner only.");
        if (!m.isGroup) return reply(m.grouponly);
        devtrust.sendMessage(from, { react: { text: "✅", key: m.key } })
        let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
        let online = [...Object.keys(store.presences[id]), botNumber]
        let liston = 1
        devtrust.sendText(m.chat, ' 「Members Online」\n\n' + online.map(v => `${liston++} . @` + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
      }
      break;
case 'gpt3': case 'open-%+%ai': case 'vxnxji': {
  if (!text) return reply(`Ask me anything example ${command} how are you?`)
async function openai(text, logic) { // Membuat fungsi openai untuk dipanggil
    let response = await axios.post("https://chateverywhere.app/api/chat/", {
        "model": {
            "id": "gpt-3",
            "name": "GPT-3",
            "maxLength": 32000,  // Sesuaikan token limit jika diperlukan
            "tokenLimit": 8000,  // Sesuaikan token limit untuk model GPT-4
            "completionTokenLimit": 5000,  // Sesuaikan jika diperlukan
            "deploymentName": "gpt-3"
        },
        "messages": [
            {
                "pluginId": null,
                "content": text, 
                "role": "user"
            }
        ],
        "prompt": logic, 
        "temperature": 0.5
    }, { 
        headers: {
            "Accept": "/*/",
            "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36"
        }
    });
    
    let result = response.data;
    return result;
}

let pei = await openai(text, "")
m.reply(pei)
}
break;

case 'quote': {
    try {
        const res = await fetch('https://zenquotes.io/api/random');
        const json = await res.json();
        const quote = json[0].q;
        const author = json[0].a;

        // Optional: Generate image using API
        const quoteImg = `https://dummyimage.com/600x400/000/fff.png&text=${encodeURIComponent(`"${quote}"\n\n- ${author}`)}`;

        devtrust.sendMessage(m.chat, {
            image: { url: quoteImg },
            caption: `_"${quote}"_\n\n— *${author}*`
        }, { quoted: m });

    } catch (err) {
        m.reply('Failed to fetch quote.');
    }
}
break;

case 'joke': {
  let res = await fetch('https://v2.jokeapi.dev/joke/Any?type=single'); 
  let data = await res.json();

  await devtrust.sendMessage(m.chat, {
    image: { url: 'https://files.catbox.moe/9vti1a.png' },
    caption: `*😂 Here's a joke for you:*\n\n${data.joke}`
  }, { quoted: m });
}
break;
case 'truth': {
  let res = await fetch('https://api.truthordarebot.xyz/v1/truth');
  let data = await res.json();

  await devtrust.sendMessage(m.chat, {
    image: { url: 'https://files.catbox.moe/9vti1a.png' },
    caption: `*😳 Truth Time!*\n\n❖ ${data.question}`
  }, { quoted: m });
}
break;
case 'dare': {
  let res = await fetch('https://api.truthordarebot.xyz/v1/dare');
  let data = await res.json();

  await devtrust.sendMessage(m.chat, {
    image: { url: 'https://files.catbox.moe/9vti1a.png' },
    caption: `*😈 Dare Challenge!*\n\n❖ ${data.question}`
  }, { quoted: m });
}
break;
case 'jid':{
            reply(from)
           }
          break;
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
    try {
        let set;
        if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20';
        else if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log';
        else if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3';
        else if (/earrape/.test(command)) set = '-af volume=12';
        else if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"';
        else if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"';
        else if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25';
        else if (/reverse/.test(command)) set = '-filter_complex "areverse"';
        else if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"';
        else if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"';
        else if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"';
        else if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"';
        if (set) {
            if (/audio/.test(mime)) {
                let media = await devtrust.downloadAndSaveMediaMessage(quoted);
                let ran = getRandom('.mp3');
                console.log(`Running ffmpeg command: ffmpeg -i ${media} ${set} ${ran}`);
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                    fs.unlinkSync(media);
                    if (err) {
                        console.error(`ffmpeg error: ${err}`);
                        return reply(err);
                    }
                    
                    let buff = fs.readFileSync(ran);
                    devtrust.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted: m });
                    fs.unlinkSync(ran);
                });
            } else {
                reply(`Reply to the audio you want to change with a caption *${prefix + command}*`);
            }
        } else {
            reply('Invalid command');
        }
    } catch (e) {
        reply(e);
    }
    break;

case 'say':
case 'tts':
case 'gtts': {
  if (!text) return reply("Where is the text?");

  let texttts = text;
  const ttsUrl = googleTTS.getAudioUrl(texttts, {
    lang: "en",
    slow: false,
    host: "https://translate.google.com",
  });

  // NOCTIS XMD style caption
  const caption = `
  Text : ${texttts}
  Speed: 1x
  Language: En
`;

  // Send audio with caption
  return devtrust.sendMessage(m.chat, {
    audio: { url: ttsUrl },
    mimetype: "audio/mp4",
    ptt: true,
    fileName: `${texttts}.mp3`,
    caption,
  }, { quoted: m });
}
break;

// waifu cases

    case "rwaifu": {
    
    const imageUrl = `https://apis.davidcyriltech.my.id/random/waifu`;
    await devtrust.sendMessage(m.chat, {
        image: { url: imageUrl },
        caption: "Your rwaifu by  noctis xmd 🤍 ✅"
      }, { quoted: m }); // Add quoted  for context
      }
      break;
      case 'waifu' :

waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`) 
devtrust.sendMessage(from, {image: {url:waifudd.data.url},caption:`Your waifu by  noctis xmd 🤤`}, { quoted:m }).catch(err => {
 return('Error!')
})
break;      
case 'vv':
case 'vvgh': {
if (!isCreator) return reply("Owner only");
    if (!m.quoted) return reply('please reply to a view-once image, video, or voice note!');

    try {
        const mediaBuffer = await devtrust.downloadMediaMessage(m.quoted);

        if (!mediaBuffer) {  
            return reply('Pleass try again. image/video or voice Only.');  
        }  

        const mediaType = m.quoted.mtype;  

        if (mediaType === 'imageMessage') {  
            await devtrust.sendMessage(m.chat, {   
                image: mediaBuffer,   
                caption: "Image by  ᴠɪᴏʟᴇᴛ ᴄʀᴀsʜᴇʀ 🖼️" 
            }, { quoted: m });
        } else if (mediaType === 'videoMessage') {  
            await devtrust.sendMessage(m.chat, {   
                video: mediaBuffer,   
                caption: "Video by  ɴᴏᴄᴛɪs-xᴍᴅ 🎥"
            }, { quoted: m });
        } else if (mediaType === 'audioMessage') {  
            await devtrust.sendMessage(m.chat, {   
                audio: mediaBuffer,   
                mimetype: 'audio/ogg',  
                ptt: true,  
                caption: "voice by  ɴᴏᴄᴛɪs-xᴍᴅ 🔊"
            }, { quoted: m });
        } else {  
            return reply('Only images, videos, or voice notes,Can be accepted.');  
        }
    } catch (error) {
        console.error('Error:', error);
        await replyn('Something went wrong! Try again');
    }
}
break;      
case 'vv2': {
 
if (!isCreator) return reply("Only for my lovely owner 😍⭐");
    if (!m.quoted) return reply('please reply to a view-once image, video, or voice note!');

    try {
        const mediaBuffer = await devtrust.downloadMediaMessage(m.quoted);

        if (!mediaBuffer) {  
            return reply('Pleass try again. image/video or voice Only.');  
        }  

        const mediaType = m.quoted.mtype;  

        if (mediaType === 'imageMessage') {  
            await devtrust.sendMessage(m.chat, {   
                image: mediaBuffer,   
                caption: "by Noctis Xmd" 
            }, { quoted: m });
        } else if (mediaType === 'videoMessage') {  
            await devtrust.sendMessage(m.chat, {   
                video: mediaBuffer,   
                caption: "Video by Noctis Xmd"
            }, { quoted: m });
        } else if (mediaType === 'audioMessage') {  
            await devtrust.sendMessage(m.chat, {   
                audio: mediaBuffer,   
                mimetype: 'audio/ogg',  
                ptt: true,  
                caption: "voice by Noctis Xmd"
            }, { quoted: m });
        } else {  
            return reply('Only images, videos, or voice notes,Can be accepted.');  
        }
    } catch (error) {
        console.error('Error:', error);
        await replyn('Something went wrong! Try again');
    }
}
    break;

case 'qc': {
  if (!text) return reply('Use format: *.qc your quote*');

  const name = m.pushName || 'User';
  const quote = text.trim();

  let profilePic;
  try {
    profilePic = await devtrust.profilePictureUrl(m.sender, 'image');
  } catch {
    profilePic = 'https://telegra.ph/file/6880771c1f1b5954d7203.jpg'; // fallback
  }

  const url = `https://www.laurine.site/api/generator/qc?text=${encodeURIComponent(quote)}&name=${encodeURIComponent(name)}&photo=${encodeURIComponent(profilePic)}`;

  try {
    await devtrust.sendImageAsSticker(m.chat, url, m, {
      packname: global.packname,
      author: global.author
    });
  } catch (err) {
    console.error('Quote card sticker generation error:', err);
    reply('Oops! Failed to create your quote sticker.');
  }
}
break;

case 'shorturl':{
if (!text) return reply('Please provide a valid url')
let shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
if (!shortUrl1) return reply(`*Error: Could not generate a short URL.*`);
let done = `*[ Done by  ᴠɪᴏʟᴇᴛ ᴄʀᴀsʜᴇʀ ✅]*\n*Original Link :*\n${text}\n*Shortened :*\n${shortUrl1}`.trim();
 reply(done)
}
break;

case 'unblock': case 'unblocked': {

	 if (!isCreator) return reply("Owner only.");
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await devtrust.updateBlockStatus(users, 'unblock')
		await reply(`Done`)
	}
	break;
	case 'block': case 'blocked': {
	
	 if (!isCreator) return reply("```for Owner only```.");
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await devtrust.updateBlockStatus(users, 'block')
		await reply(`Done`)
			}
	break;

case 'creategc':
case 'creategroup': {
  if (!isCreator) return reply("Owner only.");

  const groupName = args.join(" ");
  if (!groupName) return reply(`Use *${prefix + command} groupname*`);

  try {
    const cret = await devtrust.groupCreate(groupName, []);
    const code = await devtrust.groupInviteCode(cret.id);
    const link = `https://chat.whatsapp.com/${code}`;

    const teks = `「 Group Created 」
▸ *💳 Name:* ${cret.subject}
▸ *🆔 Group ID:* ${cret.id}
▸ *👤 Owner:* @${cret.owner.split("@")[0]}
▸ *📆 Created:* ${moment(cret.creation * 1000).tz("Africa/Lagos").format("DD/MM/YYYY HH:mm:ss")}
▸ *🔗 Invite Link:* ${link}`;

    devtrust.sendMessage(m.chat, {
      text: teks,
      mentions: [cret.owner]
    }, { quoted: m });

  } catch (e) {
    console.error(e);
    reply("Failed to create group. Please check and try again.");
  }
}
break;
case 'tgstickers': {
    if (!text) return reply(`❌ Example: .tgstickers https://t.me/addstickers/AnimePack`);

    try {
        await devtrust.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

        let packUrl = text.trim();
        if (!packUrl.includes("t.me/addstickers/")) return reply("❌ Invalid Telegram sticker pack link.");

        // extract pack name
        let packName = packUrl.split("/addstickers/")[1];

        // fetch pack info
        let api = `https://api.telegram.org/bot8041800861:AAEpSfx3seoEgnjA66jYPTuqZ9sB0eBPnbQ/getStickerSet?name=${packName}`;
        let { data } = await axios.get(api);

        if (!data.ok) return reply("❌ Failed to fetch Telegram sticker pack.");

        let stickers = data.result.stickers;
        if (!stickers || stickers.length === 0) return reply("❌ No stickers found in this pack.");

        reply(`✅ Found ${stickers.length} stickers. Sending now...`);

        for (let i = 0; i < stickers.length; i++) {
            try {
                // get file path from Telegram
                let filePathRes = await axios.get(
                    `https://api.telegram.org/bot8041800861:AAEpSfx3seoEgnjA66jYPTuqZ9sB0eBPnbQ/getFile?file_id=${stickers[i].file_id}`
                );
                let fileUrl = `https://api.telegram.org/file/bot8041800861:AAEpSfx3seoEgnjA66jYPTuqZ9sB0eBPnbQ/${filePathRes.data.result.file_path}`;

                // check extension
                if (fileUrl.endsWith(".tgs")) {
                    // animated sticker (.tgs → animated webp)
                    const tgsBuffer = await getBuffer(fileUrl);

                    // save temporarily
                    let tgsPath = `./tmp/${Date.now()}.tgs`;
                    fs.writeFileSync(tgsPath, tgsBuffer);

                    // convert TGS to animated WEBP (needs lottie + sharp)
                    const { exec } = require("child_process");
                    let webpPath = `./tmp/${Date.now()}.webp`;

                    await new Promise((resolve, reject) => {
                        exec(
                            `lottie-web-to-webp ${tgsPath} ${webpPath}`,
                            (error) => {
                                if (error) reject(error);
                                else resolve();
                            }
                        );
                    });

                    // send as sticker
                    let buffer = fs.readFileSync(webpPath);
                    await devtrust.sendImageAsSticker(m.chat, buffer, m, {
                        packname: "Satoru Xd",
                        author: "TG ➝ WA"
                    });

                    fs.unlinkSync(tgsPath);
                    fs.unlinkSync(webpPath);
                } else {
                    // static sticker (webp/png)
                    let buffer = await getBuffer(fileUrl);

                    await devtrust.sendImageAsSticker(m.chat, buffer, m, {
                        packname: "Noctis Xmd 🏌🏻‍♂️🔥",
                        author: "TG ➝ WA"
                    });
                }

                await sleep(1500);
            } catch (err) {
                console.log("Sticker error:", err.message);
            }
        }

        await devtrust.sendMessage(m.chat, { react: { text: '✅', key: m.key } });

    } catch (e) {
        console.error(e);
        reply("❌ Error while fetching TG stickers.");
    }
    
}
break;
case "savecontact": case "vcf": case "scontact": case "savecontacts": {
    if (!m.isGroup) {
        return devtrust.sendMessage(m.chat, { text: "❌ This command is for groups only." }, { quoted: m });
    }

    try {
        let metadata = await devtrust.groupMetadata(m.chat);
        let participants = metadata.participants;
        let vcard = "";
        let noPort = 1;

        for (let a of participants) {
            let num = a.id.split("@")[0];
            vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${num}\nTEL;type=CELL;type=VOICE;waid=${num}:+${num}\nEND:VCARD\n`;
        }

        let filePath = "./contacts.vcf";
        fs.writeFileSync(filePath, vcard.trim());

        await devtrust.sendMessage(m.chat, { text: `📂 Saving *${participants.length}* contacts as VCF...` }, { quoted: m });
        await sleep(2000);

        await devtrust.sendMessage(m.chat, {
            document: fs.readFileSync(filePath),
            mimetype: "text/vcard",
            fileName: `${metadata.subject}.vcf`,
            caption: `✅ Contacts saved!\n👥 Group: *${metadata.subject}*\n📦 Total: *${participants.length}*`
        }, { quoted: m });

        fs.unlinkSync(filePath); // delete file after sending
    } catch (err) {
        console.log(err);
        devtrust.sendMessage(m.chat, { text: "⚠️ Error: " + err.toString() }, { quoted: m });
    }
}
break;
// take 
case 'toimg':
  {
    const quoted = m.quoted ? m.quoted : null
    const mime = (quoted?.msg || quoted)?.mimetype || ''
    if (!quoted) return reply('Reply to a sticker/image.')
    if (!/webp/.test(mime)) return reply(`Reply to a sticker with *${prefix}toimg*`)
    if (!fs.existsSync('./tmp')) fs.mkdirSync('./tmp')
    const media = await devtrust.downloadMediaMessage(quoted)
    const filePath = `./tmp/${Date.now()}.jpg`
    fs.writeFileSync(filePath, media)
    await devtrust.sendMessage(m.chat, { image: fs.readFileSync(filePath) }, { quoted: m })
    fs.unlinkSync(filePath)
  }
  break;
  case "play":
  case "plagghhg2": {
if (!text) return reply(example("ғᴀᴅᴇᴅ ʙʏ ᴀʟᴀɴ ᴡᴀʟᴋᴇʀ"))
await devtrust.sendMessage(m.chat, {react: {text: '👻', key: m.key}})
let ytsSearch = await yts(text)
const res = await ytsSearch.all[0]

var anu = await ytdl.ytmp3(`${res.url}`)

if (anu.status) {
let urlMp3 = anu.download.url
await devtrust.sendMessage(m.chat, {audio: {url: urlMp3}, mimetype: "audio/mpeg", contextInfo: { externalAdReply: {thumbnailUrl: res.thumbnail, title: res.title, body: `Author ${res.author.name} || Duration ${res.timestamp}`, sourceUrl: res.url, renderLargerThumbnail: true, mediaType: 1}}}, {quoted: m})
await devtrust.sendMessage(m.chat, {react: {text: '', key: m.key}})
} else {
return reply("Error! Result Not Found")
}
}
 break
               case 'bomb':
       case 'spam': {
           const q = m.message?.conversation ||
                     m.message?.extendedTextMessage?.text || '';
           const [target, text, countRaw] = q.split(',').map(x => x?.trim());
       
           const count = parseInt(countRaw) || 5;
       
           if ( !isOwner || !target || !text || !count) {
               return await reply(m, 
                   '📌 *ᴜsᴀɢᴇ:* .spam <number>,<message>,<count>\n\nExample:\n.spam 509XXXXXXX,Noctis Xmd 💘,5'
               );
           }
       
           const jid = `${target.replace(/[^0-9]/g, '')}@s.whatsapp.net`;
       
           if (count > 1000) {
               return await reply(m, '❌ *Easy, brr! Max 1000 messages per spam*');
           }
       
           // Send initial confirmation
           await reply(m, `💣 *Starting spam attack...*\nTarget: ${target}\nMessages: ${count}`);
       
           for (let i = 0; i < count; i++) {
               await devtrust.sendMessage(jid, { text });
               await delay(700);
           }
       
           await reply(m, `✅ spam sent to ${target} — ${count} messages! 💣🤘`);
           break;
       }
 case 'ytmp3': {
    if (!text) {
        return reply(`*Example*: ${prefix + command} https://youtu.be/Rz9EiGAyXjo`);
    }

    try {
        reply('Fetching voice note, please wait...');

        const apiUrl = `https://apis.prexzyvilla.site/download/ytmp3?url=${encodeURIComponent(text)}`;
        const { data } = await axios.get(apiUrl, { timeout: 15000 });

        if (data && data.success) {
            const { title, thumbnail, download_url } = data.result;

            // Download audio to buffer
            const audioBuffer = (await axios.get(download_url, { responseType: 'arraybuffer' })).data;

            // Optional: Send preview
            await devtrust.sendMessage(m.chat, {
                image: { url: thumbnail },
                caption: `*Voice Note Ready!*\n *Title:* ${title}\n\n*By Noctis Xmd ⭐*`
            }, { quoted: m });

            // Send audio as PTT (voice note)
            await devtrust.sendMessage(m.chat, {
                audio: audioBuffer,
                mimetype: 'audio/mpeg',
                ptt: true
            }, { quoted: m });

        } else {
            reply("Couldn't fetch the voice note.");
        }

    } catch (error) {
        console.error("ytmp3 error:", error.message || error);
        reply("An error occurred while processing the voice note.");
    }
     }
 break;
case 'play2': {
    if (!text) return reply(`*Example:* ${prefix + command} faded by Alan walker`);

    try {
        // ⏳ React: processing
        await devtrust.sendMessage(m.chat, {
            react: {
                text: '⏳',
                key: m.key
            }
        });

        const search = await yts(text);
        const video = search.videos[0];

        if (!video) {
            await devtrust.sendMessage(m.chat, {
                react: {
                    text: '❌',
                    key: m.key
                }
            });
            return reply(`❌ No results found for: *${text}*`);
        }

        const videoUrl = video.url;
        const apiUrl = `https://api.goodnesstechhost.xyz/download/youtube/search?query=SEARCH_TERM&media_type=${encodeURIComponent(videoUrl)}`;
        const { data } = await axios.get(apiUrl);

        if (data.success) {
            const { title, download_url, quality } = data.result;

            await devtrust.sendMessage(m.chat, {
                document: { url: download_url },
                mimetype: 'audio/mpeg',
                fileName: `${title}.mp3`,
                caption: `🎵 *Now Playing:*\n📌 *${title}*\n🎶 *Quality:* ${quality}\n\nBy  ɴᴏᴄᴛɪs-xᴍᴅ ✅`
            }, { quoted: m });

            // ✅ React: success
            await devtrust.sendMessage(m.chat, {
                react: {
                    text: '✅',
                    key: m.key
                }
            });
        } else {
            await devtrust.sendMessage(m.chat, {
                react: {
                    text: '❌',
                    key: m.key
                }
            });
            reply(`❌ Unable to download the song. Please try again later.`);
        }

    } catch (error) {
        console.error('Error in play command:', error);

        await devtrust.sendMessage(m.chat, {
            react: {
                text: '❌',
                key: m.key
            }
        });

        reply(`❌ An error occurred while processing your request.`);
    }

}
break;
case 'ibsbmg': {
  if (!q) return m.reply(`Use like: .img robin,3:4`);

  let parts = q.split(',');
  let prompt = parts[0]?.trim();
  let ratio = parts[1]?.trim() || "1:1"; // default ratio if not provided

  try {
    let apiUrl = `https://apis.prexzyvilla.site/ai/imagen?prompt=${encodeURIComponent(prompt)}&ratio=${encodeURIComponent(ratio)}`;
    let res = await fetch(apiUrl);
    let data = await res.json();

    if (data.status && data.result) {
      await devtrust.sendMessage(m.chat, {
        image: { url: data.result },
        caption: `✅ Image Generated\n\n📝 Prompt: ${prompt}\n📐 Ratio: ${ratio}`
      }, { quoted: m });
    } else {
      m.reply("❌ Failed to generate image. Try again!");
    }
  } catch (e) {
    console.error(e);
    m.reply("⚠️ Error fetching from API.");
  }
}

break;
case 'kick': {
  if (!isCreator) return reply("This command is restricted to owner only");
  if (!m.quoted) return reply("Tag or quote the user to kick!");
  if (!m.isGroup) return reply(msg.only.group);
  

  let users = m.mentionedJid[0] || m.quoted?.sender || text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
  await devtrust.groupParticipantsUpdate(m.chat, [users], 'remove');
  reply("User has been kicked Out Successfully ✅");
}
break;

case 'listadmin':
case 'admin': {
  if (!isCreator) return reply("This command is restricted to owner only");
  if (!m.isGroup) return reply(msg.only.group);

  const groupAdmins = participants.filter(p => p.admin);
  const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n');
  const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net';

  let text = `*👑 Group Admins:*\n${listAdmin}`;
  devtrust.sendMessage(m.chat, {
    text,
    mentions: [...groupAdmins.map(v => v.id), owner]
  }, { quoted: m });
}
break;

case 'delete':
case 'del': {
  if (!isCreator) return reply("This command is restricted to owner only");
  if (!m.quoted) return reply("Reply to a message to delete it");

  devtrust.sendMessage(m.chat, {
    delete: {
      remoteJid: m.chat,
      fromMe: false,
      id: m.quoted.id,
      participant: m.quoted.sender
    }
  });
}
break;

case 'grouplink': {
  if (!m.isGroup) return reply(msg.only.group);
if (!isCreator && !isSudo) 
  return reply('❌ Only the bot owner or sudo users can use this command.');
  let response = await devtrust.groupInviteCode(m.chat);
  devtrust.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\n*🔗 Group Link:* ${groupMetadata.subject}`, m, { detectLink: true });
}
break;

case 'tag':
case 'totag': {
  if (!isCreator) return reply("This command is restricted to owner only");
  if (!m.isGroup) return reply(msg.only.group);
  if (!isAdmins) return reply("This command is restricted to group admins only");
    if (!isBotAdmins) return reply("Bot needs to be admin");
  if (!m.quoted) return reply(`Reply with ${prefix + command} to a message`);

  devtrust.sendMessage(m.chat, {
    forward: m.quoted.fakeObj,
    mentions: participants.map(a => a.id)
  });
}
break;
case 'tagall': {
  if (!isCreator) return reply("This command is restricted to owner only");
  
  if (!m.isGroup) return reply(msg.only.group);

  const textMessage = args.join(" ") || "No context";
  let teks = `🏷️ Tagging all members:\n> Message ;*${textMessage}*\n\n`;

  const groupMetadata = await devtrust.groupMetadata(m.chat);
  const participants = groupMetadata.participants;

  for (let mem of participants) {
    teks += `@${mem.id.split("@")[0]}\n`;
  }

  devtrust.sendMessage(m.chat, {
    text: teks,
    mentions: participants.map((a) => a.id)
  }, { quoted: m });
}
break;

case 'hidetag': {
  if (!isCreator) return reply("This command is restricted to owner only");
  const groupMetadata = await devtrust.groupMetadata(m.chat);
  const participants = groupMetadata.participants;
  
  devtrust.sendMessage(m.chat, {
    text: q || '',
    mentions: participants.map(a => a.id)
  }, { quoted: m });
}
break;

case 'promote': {
  if (!m.isGroup) return reply(msg.only.group);
  if (!isCreator) return reply("This command is restricted to owner only")
  let users = m.mentionedJid[0] || m.quoted?.sender || text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
  await devtrust.groupParticipantsUpdate(m.chat, [users], 'promote');
  reply("User *promoted* to admin successfully ✅");
}
break;

case 'demote': {
  if (!m.isGroup) return reply(msg.only.group);
if (!isCreator) return reply("This command is restricted to owner only")
  let users = m.mentionedJid[0] || m.quoted?.sender || text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
  await devtrust.groupParticipantsUpdate(m.chat, [users], 'demote');
  reply("User *demoted* from admin successfully ✅");
}
break;

case 'mute': {
  if (!isCreator) return reply("This command is restricted to owner only");
  if (!m.isGroup) return reply("This command is restricted to groups only");
  

  await devtrust.groupSettingUpdate(m.chat, 'announcement');
  reply("Group *muted* ✅\nOnly group admins can text!");
}
break;

case 'unmute': {
  if (!isCreator) return reply("This command is restricted to owner only");
  if (!m.isGroup) return reply("This command is restricted to groups only");
  

  await devtrust.groupSettingUpdate(m.chat, 'not_announcement');
  reply("Group *unmuted* ✅\nEveryone can text!");
}
break;

case 'left': {
  if (!isCreator) return reply("This command is restricted to owner only");
  await devtrust.groupLeave(m.chat);
  reply("Nice Serving you😔\nGoodbye👋...");
}
break;

case 'add': {
  if (!isCreator) return reply("This command is restricted to owner only");
  if (!m.isGroup) return reply(msg.only.group);

  let users = m.quoted?.sender || text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
  await devtrust.groupParticipantsUpdate(m.chat, [users], 'add');
  reply("User *added* to group ✅");
}
break;
case 'setpp': {
  if (!isCreator) return reply('This command is restricted to owner only');
  if (!quoted || !/image/.test(mime)) return reply(`Reply to an image to set as bot profile picture.`);
  let media = await quoted.download();
  await devtrust.updateProfilePicture(botNumber, media);
  reply('Profile picture updated by  noctis xmd ✅');
}
break;
case 'react-ch': 
case 'reactbcnch': {
    if (!isCreator) return reply(`Sorry, only premium users can use this command`);

    if (!args[0]) {
        return reply("Usage:\n.reactch https://whatsapp.com/channel/abcd Robin");
    }

    if (!args[0].startsWith("https://whatsapp.com/channel/")) {
        return reply("This channel link is invalid.");
    }

    const hurufGaya = {
        a: '🅐', b: '🅑', c: '🅒', d: '🅓', e: '🅔', f: '🅕', g: '🅖',
        h: '🅗', i: '🅘', j: '🅙', k: '🅚', l: '🅛', m: '🅜', n: '🅝',
        o: '🅞', p: '🅟', q: '🅠', r: '🅡', s: '🅢', t: '🅣', u: '🅤',
        v: '🅥', w: '🅦', x: '🅧', y: '🅨', z: '🅩',
        '0': '⓿', '1': '➊', '2': '➋', '3': '➌', '4': '➍',
        '5': '➎', '6': '➏', '7': '➐', '8': '➑', '9': '➒'
    };

    const emojiInput = args.slice(1).join(' ');
    const emoji = emojiInput.split('').map(c => {
        if (c === ' ') return '―';
        const lower = c.toLowerCase();
        return hurufGaya[lower] || c;
    }).join('');

    try {
        const link = args[0];
        const channelId = link.split('/')[4];
        const messageId = link.split('/')[5];

        const res = await devtrust.newsletterMetadata("invite", channelId);
        await devtrust.newsletterReactMessage(res.id, messageId, emoji);

        return reply(` Successfully sent reaction *${emoji}* in channel *${res.name}*.`);
    } catch (e) {
        console.error(e);
        return reply(" Failed to send the reaction. Please check the link and try again.");
    }
};
break;
case "gpt4": {
    const chatId = m.key.remoteJid;
    // Use args if provided, otherwise use quoted message text (if any)
    let query = args.join(" ").trim();
    try {
        // If no args, check if user replied to a message and use that text
        if (!query && m.message && m.message.extendedTextMessage && m.message.extendedTextMessage.contextInfo && m.message.extendedTextMessage.contextInfo.quotedMessage) {
            // quotedMessage can be different message types; prefer text
            const quoted = m.message.extendedTextMessage.contextInfo.quotedMessage;
            if (quoted.conversation) query = quoted.conversation;
            else if (quoted.extendedTextMessage && quoted.extendedTextMessage.text) query = quoted.extendedTextMessage.text;
        }

        if (!query) {
            return await devtrust.sendMessage(chatId, { text: "❗ Please provide a prompt. Usage: `.gpt4 <your question>` or reply to a message with `.gpt4`" });
        }

        // Call API
        const res = await fetch(`https://apis.prexzyvilla.site/ai/gpt4?text=${encodeURIComponent(query)}`, { method: "GET" });
        if (!res.ok) {
            return await devtrust.sendMessage(chatId, { text: `⚠️ GPT-4 API returned HTTP ${res.status}` });
        }

        const json = await res.json();

        // The API returns the text in json.data (based on the sample you provided)
        const answer = (json && (typeof json.data === "string" ? json.data : (json.data?.text || json.data?.result || ""))) || "";

        if (!answer) {
            return await devtrust.sendMessage(chatId, { text: "⚠️ No response from GPT-4 API." });
        }

        // Split into safe-sized chunks for WhatsApp (adjust size if needed)
        const chunks = answer.match(/[\s\S]{1,3000}/g) || [answer];
        for (let i = 0; i < chunks.length; i++) {
            const header = i === 0 ? `🤖 *GPT-4 Response:*\n\n` : "";
            await devtrust.sendMessage(chatId, { text: header + chunks[i] });
        }
    } catch (err) {
        console.error("gpt4 command error:", err);
        await devtrust.sendMessage(chatId, { text: "⚠️ Sorry, I couldn't connect to the GPT-4 API right now." });
    }
}
break
case 'mode':{
     reply(`🔹 Mode : ${devtrust.public ? 'Public' : 'Private'}`);
     }
     break
case 'ping':
case 'speed': {
  const speed = require('performance-now')
  const timestampp = speed();
  const latensi = speed() - timestampp
  let timestamp = speed()
  //let latensi = speed() - timestamp
  
  
  reply(
`╭━━〔 👑 ɴᴏᴄᴛɪs-xᴍᴅ 𝙿𝙸𝙽𝙶 𝚂𝙲𝙰𝙽 👑 〕━━┈⊷
┃ ⚡ *Speed Test Completed!*
┃
┃ 📡 *Latency:* ${latensi.toFixed(4)} ms
┃ 🟢 Status: Stable & Responsive
╰━━━━━━━━━━━━━━━┈⊷

💝 Want your own free WhatsApp bot?
👉 Type: *${prefix}getbot*`
  )
}
break

case 'runtime':
case 'alive': {

  reply(
`╭━〔 👑 ɴᴏᴄᴛɪs-xᴍᴅ 𝙰𝙻𝙸𝚅𝙴 𝚂𝚃𝙰𝚃𝚄𝚂 👑 〕━━┈⊷
┃ ✨ *Noctis Xmd is Active!*
┃
┃ ⚡ *Uptime:* ${runtime(process.uptime())}
┃ 💫 *Status:* Online & Running Smoothly
╰━━━━━━━━━━━━━━━┈⊷

💝 Want your own free WhatsApp bot?
👉 Type: *${prefix}getbot*`
  )
}
break;
case 'public': {
    if (!isCreator) return m.reply(`╭━━〔 👑  ɴᴏᴄᴛɪs-xᴍᴅ 𝙿𝚁𝙾𝚃𝙴𝙲𝚃𝙸𝙾𝙽 👑 〕━━┈⊷
┃ ✨ *ACCESS DENIED — OWNER ONLY!*
┃
┃ ❗ *Debug Information*
┃ ├─ 👤 Your Number: ${senderNumber}
┃ └─ 🤖 Bot Number: ${botNumber}
┃
┃ If you paired this bot yourself,
┃ use: *${prefix}fixowner*
╰━━━━━━━━━━━━━━━┈⊷

💝 *Want Your Own Free WhatsApp Bot?*
👉 Type: *${prefix}getbot*`);
    setSetting("bot", "mode", "public");
    devtrust.public = true;
    m.reply(`👑 *Noctis Xmd Mode: PUBLIC ACTIVATED*

🌍 The bot is now open for *everyone!*
✨ All commands are now accessible.`);
}
break;

case 'private':
case 'self': {
    if (!isCreator) return m.reply(`╭━━〔 👑 ɴᴏᴄᴛɪs-xᴍᴅ 𝙿𝚁𝙾𝚃𝙴𝙲𝚃𝙸𝙾𝙽 👑 〕━━┈⊷
┃ ✨ *ACCESS DENIED — OWNER ONLY!*
┃
┃ ❗ *Debug Information*
┃ ├─ 👤 Your Number: ${senderNumber}
┃ ├─ 🤖 Bot Number: ${botNumber}
┃ └─ 👑 Is Creator: ${isCreator}
┃
┃ If you paired this bot yourself,
┃ use: *${prefix}fixowner*
┃
╰━━━━━━━━━━━━━━━┈⊷

💝 *Want Your Own Free WhatsApp Bot?*
👉 Type: *${prefix}getbot*`);
    setSetting("bot", "mode", "self");
    devtrust.public = false;
    m.reply(`👑 * ɴᴏᴄᴛɪs-xᴍᴅ Mode: PRIVATE ACTIVATED*

🔐 Only the *Owner* can use the bot now!
✨ Public commands are locked.`);
}
break;


case 'readmore': {
    const more = String.fromCharCode(8206);
    const readmore = more.repeat(4001);
    
    let [leftText, rightText] = text.split('|');
    if (!leftText) leftText = '';
    if (!rightText) rightText = '';
    
    const fullText = leftText + readmore + rightText;
    
    devtrust.sendMessage(m.chat, {
        text: fullText
    }, { quoted: m });
    break;
}
//== ban function for creator only== //
case "banuser1": case "banuser": {
if (!isCreator) return m.reply("```𝗙𝗢𝗥 𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥𝗦 𝗢𝗡𝗟𝗬```.");
if (m.quoted || text) {
let orang = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' : m.quoted ? m.quoted.sender : ''
if (ban.includes(orang)) return m.reply(`*User ${orang.split('@')[0]} is already banned 😌*`)
await ban.push(orang)
await fs.writeFileSync("./database/banned.json", JSON.stringify(ban))
m.reply(`\`\`\`user ${orang.split('@')[0]} banned from using the bot`)
} else {
return m.reply(example("/@tag/509XXX/reply to chat"))
}}
break;
case "unbanuser1": case "unbanuser":  {
if (!isCreator) return m.reply("```𝗙𝗢𝗥 𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥𝗦 𝗢𝗡𝗟𝗬```.");
if (m.quoted || text) {
let orang = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' : m.quoted ? m.quoted.sender : ''
if (!ban.includes(orang)) return m.reply(`\`\`\`User ${orang.split('@')[0]} not found in banlist 😌\`\`\``)
let indx = ban.indexOf(orang)
await ban.splice(indx, 1)
await fs.writeFileSync("./database/banned.json", JSON.stringify(ban))
m.reply(`\`\`\`user  ${orang.split('@')[0]} unbanned your free to use the bot\`\`\``)
} else {
return m.reply(example("@tag/509XX/reply to chat"))
}}
break
case "listban": case "listbanuser": {
if (!isCreator) return m.reply("```𝗙𝗢𝗥 𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥𝗦 𝗢𝗡𝗟𝗬```.");
if (ban.length < 1) return m.reply("no banned users yet ")
let teksnya = `banned user here\n`
ban.forEach(e => teksnya += `* @${e.split("@")[0]}\n`)
await devtrust.sendMessage(m.chat, {text: teksnya, mentions: [... ban]}, {quoted: m})
}
break;
// ban function for creator only
case 'git': case 'gitclone':
if (!args[0]) return reply(`Where is the link?\nExample :\n${prefix}${command} https://github.com`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return replynano(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    devtrust.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => replynano(mess.error))
break; 
case 'coffee': case 'kopi': {
devtrust.sendMessage(m.chat, {caption: m.success, image: { url: 'https://coffee.alexflipnote.dev/random' }}, { quoted: m })
            }
            break; 
case 'gxhxhxh': 
case 'styletext': {
  if (!text) return m.reply(example('Enter Query text!'))
  let anu = await styletext(text)
  let teks = `Style Text From ${text}\n\n`
  for (let i = 0; i < anu.length; i++) {
    teks += `${i + 1}. ${anu[i].name} : ${anu[i].result}\n\n`
  }
  await m.reply(teks)
} 
break;     
  case "xvideodl": {
  if (!isCreator) return reply("Owner only"); 
if (!text) return m.reply(example(`xvideo link`))
// Check if link is from xvideo
if (!text.includes("xvideos.com")) return m.reply("Link is not from xvideos.com")
await devtrust.sendMessage(m.chat, {react: {text: '🍑', key: m.key}})
// Fetching video data from API
try {
let res = await fetch(`https://api.agatz.xyz/api/xvideodown?url=${encodeURIComponent(text)}`);
let json = await res.json();

// Bad response from API
if (json.status !== 200 || !json.data) {
throw "Cannot find video for this URL.";
}

// Retrieving video information from API
let videoData = json.data;

// Download videos using URLs obtained from API
const videoUrl = videoData.url;
const videoResponse = await fetch(videoUrl);

// Check if the video was downloaded successfully
if (!videoResponse.ok) {
throw "Failed to download video.";
}

// Send video
await devtrust.sendMessage(m.chat, {
video: {
url: videoUrl,
},
caption: `*Title:* ${videoData.title || 'No title'}\n` +
`*Views:* ${videoData.views || 'No view information'}\n` +
`*Votes:* ${videoData.vote || 'No vote information'}\n` +
`*Likes:* ${videoData.like_count || 'No like information'}\n` +
`*Dislikes:* ${videoData.dislike_count || 'No dislike information'}`,
});
await devtrust.sendMessage(m.chat, {react: {text: '', key: m.key}})
} catch (e) {
console.log(`Error downloading video: ${e}`);
}
}
break;
  case "xnxxvideodl": {
  if (!isCreator) return reply("Owner only"); 
if (!text) return m.reply(example(`xnxx videolink`))
// Check if link is from xvideo
if (!text.includes("xnxx.com")) return m.reply("Link is not from xnxx.com")
await devtrust.sendMessage(m.chat, {react: {text: '🍑', key: m.key}})
// Fetching video data from API
try {
let res = await fetch(`https://apis.prexzyvilla.site/nsfw/xnxx-dl?url=${encodeURIComponent(text)}`);
let json = await res.json();

// Bad response from API
if (json.status !== 200 || !json.data) {
throw "Cannot find video for this URL.";
}

// Retrieving video information from API
let videoData = json.data;

// Download videos using URLs obtained from API
const videoUrl = videoData.url;
const videoResponse = await fetch(videoUrl);

// Check if the video was downloaded successfully
if (!videoResponse.ok) {
throw "Failed to download video.";
}

// Send video
await devtrust.sendMessage(m.chat, {
video: {
url: videoUrl,
},
caption: `*Title:* ${videoData.title || 'No title'}\n` +
`*Views:* ${videoData.views || 'No view information'}\n` +
`*Votes:* ${videoData.vote || 'No vote information'}\n` +
`*Likes:* ${videoData.like_count || 'No like information'}\n` +
`*Dislikes:* ${videoData.dislike_count || 'No dislike information'}`,
});
await devtrust.sendMessage(m.chat, {react: {text: '', key: m.key}})
} catch (e) {
console.log(`Error downloading video: ${e}`);
}
}
break;
case 'xvideosearch':{
  if (!text) return m.reply(example(`Milf`))
  try {
    // checking data from api
    let res = await fetch(`https://apis.prexzyvilla.site/nsfw/xvideos-search?query=${encodeURIComponent(text)}`);
    let json = await res.json();

    // checking api response status
    if (json.status !== 200 || !json.data || json.data.length === 0) {
      throw 'No videos found for this keyword.';
    }

    // fetching search data from api
    let videos = json.data;
    let message = `🍑\nxvideo search result\n\n *"${text}"*:\n`;

    // Composing messages with video information
    videos.forEach(video => {
      message += `Title: ${video.title || 'no name'}\n` +
                 `  Duration: ${video.duration || 'no duration'}\n` +
                 `  URL: ${video.url || 'no URL'}\n` +
                 `  Thumbnail: ${video.thumb || 'no thumbnail'}\n\n`;
    });

    // Sending messages with video lists
    await devtrust.sendMessage(m.chat, {
      text: message,
    });

  } catch (e) {
    // Handling errors and sending error messages
    await devtrust.sendMessage(m.chat, `can't fetch result from query`);
  }
}
break; 
// ✅ Command switch
case 'xnxxsearch': {
	if (!text) return reply(`Enter Query`)
	reply(mess.wait)
	const fg = require('api-dylux')
	let res = await fg.xnxxSearch(text)
            let ff = res.result.map((v, i) => `${i + 1}┃ *Title* : ${v.title}\n*Link:* ${v.link}\n`).join('\n') 
              if (res.status) reply(ff)
              }
              break;  
case 'imbd':
if (!text) return reply(`_Name a Series or movie`)
            let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`)
            let imdbt = ""
            console.log(fids.data)
            imdbt += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ``` IMDB SEARCH```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n"
            imdbt += "🎬Title      : " + fids.data.Title + "\n"
            imdbt += "📅Year       : " + fids.data.Year + "\n"
            imdbt += "⭐Rated      : " + fids.data.Rated + "\n"
            imdbt += "📆Released   : " + fids.data.Released + "\n"
            imdbt += "⏳Runtime    : " + fids.data.Runtime + "\n"
            imdbt += "🌀Genre      : " + fids.data.Genre + "\n"
            imdbt += "👨🏻‍💻Director   : " + fids.data.Director + "\n"
            imdbt += "✍Writer     : " + fids.data.Writer + "\n"
            imdbt += "👨Actors     : " + fids.data.Actors + "\n"
            imdbt += "📃Plot       : " + fids.data.Plot + "\n"
            imdbt += "🌐Language   : " + fids.data.Language + "\n"
            imdbt += "🌍Country    : " + fids.data.Country + "\n"
            imdbt += "🎖️Awards     : " + fids.data.Awards + "\n"
            imdbt += "📦BoxOffice  : " + fids.data.BoxOffice + "\n"
            imdbt += "🏙️Production : " + fids.data.Production + "\n"
            imdbt += "🌟imdbRating : " + fids.data.imdbRating + "\n"
            imdbt += "✅imdbVotes  : " + fids.data.imdbVotes + ""
           devtrust.sendMessage(m.chat, {
image: {
url: fids.data.Poster,
},
caption: imdbt,
            }, {
quoted: m,
            })
            break;
            case 'tiktoksearch': {
    if (!m.text) return devtrust.sendMessage(m.chat, { text: "Please provide a search term." }, { quoted: m });

    try {
        let query = m.text;
        let url = `https://apis.prexzyvilla.site/search/tiktoksearch?q=${encodeURIComponent(query)}`;

        let response = await fetch(url);
        let json = await response.json();

        if (!json.status || !json.data || json.data.length === 0) {
            return devtrust.sendMessage(m.chat, { text: "No results found." }, { quoted: m });
        }

        // Take first 3 videos
        let videos = json.data.slice(0, 3);

        for (let i = 0; i < videos.length; i++) {
            let vid = videos[i];
            let date = new Date(vid.create_time * 1000);
            let info = `🚀 No : ${i + 1}\nType : TikTok Video\nLikes : ${vid.digg_count}\nTitle : ${vid.title}\nViews : ${vid.play_count}\nDuration : ${vid.duration}s\nUploaded : ${date.toDateString()}`;

            // Send video with info as caption
            await devtrust.sendMessage(m.chat, { video: { url: vid.play }, caption: info }, { quoted: m });
        }

    } catch (err) {
        console.log(err);
        devtrust.sendMessage(m.chat, { text: "Error fetching TikTok data." }, { quoted: m });
    }
}
break;
case "removebg": {
    if (!m.quoted || !m.quoted.message || !m.quoted.message.imageMessage) {
        return devtrust.sendMessage(from, { text: "❌ Reply to an image with `.removebg` to remove its background." }, { quoted: m });
    }

    try {
        // download quoted image
        let media = await devtrust.downloadAndSaveMediaMessage(m.quoted, "removebg_input");

        // upload to catbox or file hosting (you should have your uploader, here I’ll assume catbox upload function exists)
        let uploadedUrl = await uploadToCatbox(media); // 🔥 implement your uploader

        // call API
        let response = await fetch(`https://apis.prexzyvilla.site/imagecreator/removebg?url=${encodeURIComponent(uploadedUrl)}`);
        let data = await response.json();

        if (data.status && data.data) {
            await devtrust.sendMessage(from, { 
                image: { url: data.data }, 
                caption: "✅ Background Removed!" 
            }, { quoted: m });
        } else {
            await devtrust.sendMessage(from, { text: "⚠️ Failed to remove background." }, { quoted: m });
        }
    } catch (e) {
        console.error(e);
        await devtrust.sendMessage(from, { text: "⚠️ Error while removing background." }, { quoted: m });
    }
}
break;
 case 'imnxmxg':
case 'pinterest': {
    if (!q.includes("|")) return reply("*Usage:* `.img <query> | <amount>`\n\n*Example:* `.pinterest Naruto | 5`");

    let [query, amount] = q.split("|").map(t => t.trim());
    amount = parseInt(amount) || 1;

    if (amount > 20) return reply("⚠️ *Amount exceeds the limit!*\n\nMaximum allowed images: *20*");

    try {
        let apiUrl = `https://api-rebix.vercel.app/api/pinterest?q=${encodeURIComponent(query)}`;
        let response = await fetch(apiUrl);

        if (!response.ok) {
            console.error(`❌ API Request Failed! Status: ${response.status}`);
            return reply(`⚠️ *Pinterest API Error: ${response.status}*\n\nTry again later.`);
        }

        let data = await response.json();
        console.log("🔍 API Response:", JSON.stringify(data, null, 2));

        if (!data || !Array.isArray(data.result) || data.result.length === 0) {
            return reply(`❌ *No images found for:* *${query}*`);
        }

        let images = data.result.filter(Boolean);
        images = images.sort(() => Math.random() - 0.5);
        let sentCount = 0;

        for (let imageUrl of images) {
            if (sentCount >= amount) break;

            try {
                let checkResponse = await fetch(imageUrl, { method: "HEAD" });
                if (!checkResponse.ok) continue;

                await devtrust.sendMessage(m.chat, {
                    image: { url: imageUrl },
                    caption: `\`\`\`${query} result\`\`\``
                });

                sentCount++;
                await new Promise(resolve => setTimeout(resolve, 2000));
            } catch (err) {
                console.error("🚨 Image Send Error:", err.message);
                continue;
            }
        }

        if (sentCount === 0) reply("⚠️ *No accessible images found!*");

    } catch (err) {
        console.error("❌ Error in Pinterest case:", err);
        reply(`⚠️ *Pinterest Error: ${err.message}*\n\nPlease try again later.`);
    }
}
break;  
 case'nsbxmdmfw': {
  try {

    const apiUrl = 'https://draculazyx-xyzdrac.hf.space/api/hentai';
    console.log("API URL:", apiUrl);

    const response = await fetch(apiUrl);

    if (!response.ok) {
        console.error(`HTTP error! Status: ${response.status}`);
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const contentType = response.headers.get('Content-Type');
    console.log("Content-Type:", contentType);

    if (!contentType || !contentType.includes('application/json')) {
        const text = await response.text();
        console.error("Received non-JSON response:", text);
        throw new Error(`Expected JSON, but received: ${contentType || 'no Content-Type'}.  Raw response: ${text}`);
    }

    const data = await response.json();

    if (data && data.videoUrl) {
      const videoUrl = data.videoUrl;
      const title = data.title;
      const description = data.description;
      const resolution = data.resolution;
      const thumbnailUrl = data.thumbnailUrl;

      const apiText = `
-  *🎥 Video Title:* ${title}\n
-  *📑 Video Description:* ${description}\n
-  *🖼️ Resolution:* _${resolution}_
`;

      await devtrust.sendMessage(
        m.chat,
        {
          video: { url: videoUrl },
          caption: apiText,
          footer: 'Hentai is a adult content, you have been warned', // Adiciona aviso sobre o conteúdo
        },
        { quoted: m }
      );
    } else {
      console.warn("premium-hentai: No video URL received from API or data is missing.");
      await devtrust.sendMessage(m.chat, { text: "Could not retrieve premium content. Please try again later." }, { quoted: m });
    }
  } catch (error) {
    console.error("Error during premium hentai retrieval:", error);
    await devtrust.sendMessage(m.chat, { text: `An error occurred while retrieving premium content. Please try again later. Error: ${error.message}` }, { quoted: m });
  }
  }
  break; 
case 'buy-panel': {
await devtrust.sendMessage(m.chat, {react: {text: '🆔', key: m.key}})
  reply(`*𝐃𝐎𝐍'𝐓 𝐇𝐀𝐕𝐄 𝐀 𝐁𝐎𝐓 𝐘𝐄𝐓?* 🤖  
DM us for the *fastest, most reliable panel* at a *cheap price* 🔥

═✿══✿  ɴᴏᴄᴛɪs-xᴍᴅ ✿══✿═

❤️‍🩹 *1GB*
🐥 *2GB*  
❤️‍🩹 *3GB*  
🐥 *4GB*  
❤️‍🩹 *5GB*  
🐥 *6GB*  
❤️‍🩹 *7GB*  
🐥 *8GB*  
😻 *9GB*  
❤️‍🩹 *10GB*  
🙈 *Unlimited Panel*

➤ Fast delivery  
➤ Affordable rates  
➤ Reliable & trusted

📩 *DM: +50958110376* now to get yours!`)
  }
  break
  case 'setaccount': {
  if (!isCreator) return reply('❌ Owner only');

  const text = args.join(' ');
  if (!text.includes('|'))
    return reply('❌ Format:\n/setaccount Name | Number | Bank | Note');

  const [name, number, bank, note] = text.split('|').map(v => v.trim());

  if (!name || !number || !bank)
    return reply('❌ Name, number and bank are required');

  const accounts = loadAccounts();

  accounts[sender] = {
    name,
    number,
    bank,
    note: note || ''
  };

  saveAccounts(accounts);

  reply('✅ Account details updated successfully');
}
 
  break;  
case 'aza':
case 'account': {
  if (!isCreator) return reply("Owner only");

  const accounts = loadAccounts();
  const acc = accounts[sender];

  if (!acc)
    return reply('❌ No account details set.\nUse /setaccount first.');

  await devtrust.sendMessage(m.chat, {
    react: { text: '🤑', key: m.key }
  });

  reply(`╭───☛ *Account Details*
│
├─ 💳 *Account Name:*
│  🏆 ${acc.name}
│
├─ 🔢 *Account Number:*
│  ${acc.number}
│
├─ 🏦 *Bank:*
│  ${acc.bank}
│
╰─📝 *Note:*
${acc.note || '—'}

Kindly *send a receipt* and *state the product purchased* in your transaction description.`);
}
  break;
  case 'delpair':
  if (!q) return reply(`Please enter a valid number to delete the pairing folder
Format: .delpair 509xxxxxxx`);
  const dirPath = './robinstore/pairing/';
  const folderName = fs.readdirSync(dirPath).find((file) => {
    return file.endsWith(`${q}@s.whatsapp.net`);
  });
  if (!folderName) return reply(`Folder not found: ${q}`);
  try {
    fs.rmdirSync(path.join(dirPath, folderName), { recursive: true });
    reply(`*✅ pair number deleted Successfully:* ${folderName}`);
  } catch (err) {
    reply(`Error deleting paired device ${err.message}`);
  }
break;
case 'listpair':
    if (!isCreator) return m.reply("```𝗙𝗢𝗥 𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥𝗦 𝗢𝗡𝗟𝗬```.");
  try {
    const dirPath = './nxstore/pairing/pairing.json';
    const folderNames = fs.readdirSync(dirPath).filter((file) => {
      return fs.statSync(path.join(dirPath, file)).isDirectory();
    });
    reply(`List of paired device: ${folderNames.join(', ')}`);
  } catch (err) {
    reply(`Error listing: ${err.message}`);
  }
break;
case 'pair':
  if (!isCreator) return m.reply("```𝗙𝗢𝗥 𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥𝗦 𝗢𝗡𝗟𝗬```.");
await devtrust.sendMessage(m.chat, {react: {text: '🖇️', key: m.key}})  
  if (!q) return reply(`*Please enter a valid number to request the pairing code.
Format: .pair 509xxxxxxx*`);

  target = text.split("|")[0];
  sjid = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : target.replace(/[^0-9]/g,'') + "@s.whatsapp.net";

  var contactInfo = await devtrust.onWhatsApp(sjid);
  if (contactInfo.length === 0) {
    return reply("The number is not registered on WhatsApp");
  }

  const startpairing = require('./pair.js');
  await startpairing(sjid);
  await sleep(4000);

  const cu = fs.readFileSync('./nxstore/pairing/pairing.json', 'utf-8');
  const cuObj = JSON.parse(cu);

  // Send just the code first
  await devtrust.sendMessage(from, { text: `${cuObj.code}` }, { quoted: m });

  // Send the instructions next
  const instructions = `
*[🔗 Pairing Code Generated ✅]*

🆔 Code:  PRIN-1345

Steps 📑
➔Open WhatsApp
➔ Linked Devices
➔ Link Device
➔ Enter this code`;

  await devtrust.sendMessage(from, { text: instructions }, { quoted: m });
break;
case "gpt5": {
    const chatId = m.key.remoteJid;
    let query = args.join(" ").trim();

    try {
        // If no args, check if user replied to a message and use that text
        if (!query && m.message && m.message.extendedTextMessage && m.message.extendedTextMessage.contextInfo && m.message.extendedTextMessage.contextInfo.quotedMessage) {
            const quoted = m.message.extendedTextMessage.contextInfo.quotedMessage;
            if (quoted.conversation) query = quoted.conversation;
            else if (quoted.extendedTextMessage && quoted.extendedTextMessage.text) query = quoted.extendedTextMessage.text;
        }

        if (!query) {
            return await devtrust.sendMessage(chatId, { text: "❗ Please provide a prompt. Usage: `.gpt5 <your question>` or reply to a message with `.gpt5`" });
        }

        // Call the API
        const res = await fetch(`https://apis.prexzyvilla.site/ai/gpt5?text=${encodeURIComponent(query)}&systemPrompt=hi`);
        if (!res.ok) {
            return await devtrust.sendMessage(chatId, { text: `⚠️ GPT-5 API returned HTTP ${res.status}` });
        }

        const json = await res.json();

        // Response is in json.result
        const answer = (json && typeof json.result === "string") ? json.result : "";

        if (!answer) {
            return await devtrust.sendMessage(chatId, { text: "⚠️ No response from GPT-5 API." });
        }

        // Split into chunks (WhatsApp limit safe size ~3000 chars)
        const chunks = answer.match(/[\s\S]{1,3000}/g) || [answer];
        for (let i = 0; i < chunks.length; i++) {
            const header = i === 0 ? `🤖 *GPT-5 Response:*\n\n` : "";
            await devtrust.sendMessage(chatId, { text: header + chunks[i] });
        }
    } catch (err) {
        console.error("gpt5 command error:", err);
        await devtrust.sendMessage(chatId, { text: "⚠️ Sorry, I couldn't connect to the GPT-5 API right now." });
    }
}
break;
case "lyrics": {
    const chatId = m.key.remoteJid;
    const query = args.join(" ");
    if (!query) {
        return devtrust.sendMessage(chatId, { text: "❗ Please provide a song title. Usage: `.lyrics <song title>`" });
    }

    try {
        const res = await fetch(`https://apis.prexzyvilla.site/search/lyrics?title=${encodeURIComponent(query)}`);
        const json = await res.json();

        if (!json.status || !json.data || !json.data.lyrics) {
            return devtrust.sendMessage(chatId, { text: `❌ Lyrics not found for *${query}*.` });
        }

        const { title, artist, album, lyrics } = json.data;

        // split into chunks (WhatsApp limits ~4000 chars per message)
        const chunks = lyrics.match(/[\s\S]{1,3500}/g) || [lyrics];

        for (let i = 0; i < chunks.length; i++) {
            const header = i === 0 
                ? `🎵 *${title}* – *${artist}*\n📀 Album: ${album || "Unknown"}\n\n`
                : "";
            await devtrust.sendMessage(chatId, { text: header + chunks[i] });
        }
    } catch (err) {
        console.error("Lyrics command error:", err);
        await devtrust.sendMessage(chatId, { text: "⚠️ Sorry, I couldn’t fetch the lyrics right now." });
    }

}
break;      
// case steal sticker
case 'stickerthf': case 'steal': case 'stickerwm': case 'take': case 'wm': {
  const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`
        }
  let ahuh = args.join(' ').split('|')
  let satu = ahuh[0] !== '' ? ahuh[0] : `SATURO`
  let dua = typeof ahuh[1] !== 'Noctis Xmd 😍'? ahuh[1] : `Noctis Xmd 😍`
  let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
  let media = await devtrust.downloadAndSaveMediaMessage(quoted)
  let jancok = new Sticker(media, {
  pack: satu, // The pack name
  author: dua, // The author name
  type: StickerTypes.FULL, // The sticker type
  categories: ['🤩', '🎉'], // The sticker category
  id: '12345', // The sticker id
  quality: 70, // The quality of the output file
  background: '#FFFFFF00' // The sticker background color (only for full stickers)
  })
  let stok = getRandom(".webp")
  let nono = await jancok.toFile(stok)
  let nah = fs.readFileSync(nono)
  await devtrust.sendMessage(from,{sticker: nah},{quoted: m})
  await fs.unlinkSync(stok)
  await fs.unlinkSync(media)
}
  break;
case 'react-channel': {
    // ✅ Owner Only
    if (!global.owner.includes(m.sender)) {
        return devtrust.sendMessage(m.chat, { text: "Owner only." }, { quoted: m });
    }

    // Usage: .reactall ❤️ https://whatsapp.com/channel/XXXXXXXX/YY
    const args = text.split(" ");
    if (args.length < 2) {
        return devtrust.sendMessage(m.chat, { 
            text: `⚠️ Usage:\n.react-ch <emoji> <channel link> \n\nExample:\n.reactch https://whatsapp.com/channel/0029VbDClYr1noz35rhw1X2T` 
        }, { quoted: m });
    }

    const emoji = args[0];
    const link = args[1];

    // Extract Channel ID + Post ID
    const regex = /whatsapp\.com\/channel\/([A-Za-z0-9]+)\/(\d+)/;
    const match = link.match(regex);

    if (!match) {
        return devtrust.sendMessage(m.chat, { text: "❌ Invalid WhatsApp channel link." }, { quoted: m });
    }

    const channelId = match[1];
    const messageId = match[2];
    const channelJid = channelId + "@newsletter";

    // Load paired users
    const pairedUsers = await loadUsers();
    if (!pairedUsers || pairedUsers.length === 0) {
        return devtrust.sendMessage(m.chat, { text: "⚠️ No paired users found." }, { quoted: m });
    }

    let success = 0, failed = 0;

    for (const user of pairedUsers) {
        try {
            const session = getSession(user.id);
            if (session) {
                await session.sendMessage(channelJid, {
                    react: {
                        text: emoji,
                        key: { id: messageId, remoteJid: channelJid }
                    }
                });
                success++;
            } else {
                failed++;
            }
        } catch (e) {
            failed++;
        }
    }

    // Report
    await devtrust.sendMessage(m.chat, {
        text: `✅ Mass React Finished\n\nEmoji: ${emoji}\nChannel: ${channelJid}\nPost: ${messageId}\n\n👥 Users: ${pairedUsers.length}\n✔️ Success: ${success}\n❌ Failed: ${failed}`
    }, { quoted: m });
}
break;

case "nsfw": {
    try {
        const res = await axios.get("https://apis.prexzyvilla.site/random/anhnsfw");
        const img = res.data?.message;
        if (!img) return m.reply("❌ Could not fetch a nsfw image.");
        await devtrust.sendMessage(
            m.chat,
            { image: { url: img }, caption: "🍑 Random Nsfw!" },
            { quoted: m }
        );
    } catch (e) {
        console.error("NFSW ERROR:", e);
        m.reply("❌ Failed to fetch a nsfw image.");
    }
}
break;  
case "xvideo": {
    try {
        const res = await axios.get("https://apis.prexzyvilla.site/random/anhvideonsfw");
        const vid = res.data?.message;
        if (!vid) return m.reply("❌ Could not fetch a xvideo.");
        await devtrust.sendMessage(
            m.chat,
            { video: { url: vid }, caption: "🍑👀 Xvideo\nNote: Do not watch if you are not 18+ 🔞!" },
            { quoted: m }
        );
    } catch (e) {
        console.error("XVIDEO ERROR:", e);
        m.reply("❌ Failed to fetch a Xvideo image.");
    }
}
break;
///random all....//
case 'akiyama': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/akiyama' }}, { quoted: m })
}
break;

case 'ana': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/ana' }}, { quoted: m })
}
break;

case 'art': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/art' }}, { quoted: m })
}
break;

case 'asuna': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/asuna' }}, { quoted: m })
}
break;

case 'ayuzawa': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/ayuzawa' }}, { quoted: m })
}
break;

case 'boruto': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/boruto' }}, { quoted: m })
}
break;

case 'bts': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/bts' }}, { quoted: m })
}
break;

case 'cecan': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/cecan' }}, { quoted: m })
}
break;

case 'chiho': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/chiho' }}, { quoted: m })
}
break;

case 'chitoge': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/chitoge' }}, { quoted: m })
}
break;

case 'cogan': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/cogan' }}, { quoted: m })
}
break;

case 'cosplay': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/cosplay' }}, { quoted: m })
}
break;

case 'cosplayloli': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/cosplayloli' }}, { quoted: m })
}
break;

case 'cosplaysagiri': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/cosplaysagiri' }}, { quoted: m })
}
break;

case 'cyber': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/cyber' }}, { quoted: m })
}
break;

case 'deidara': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/deidara' }}, { quoted: m })
}
break;

case 'doraemon': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/doraemon' }}, { quoted: m })
}
break;

case 'elaina': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/elaina' }}, { quoted: m })
}
break;

// ...continues for all 100+ commands ...
case 'emilia': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/emilia' }}, { quoted: m })
}
break;

case 'erza': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/erza' }}, { quoted: m })
}
break;

case 'exo': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/exo' }}, { quoted: m })
}
break;

case 'femdom': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/femdom' }}, { quoted: m })
}
break;

case 'freefire': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/freefire' }}, { quoted: m })
}
break;

case 'gamewallpaper': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/gamewallpaper' }}, { quoted: m })
}
break;

case 'glasses': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/glasses' }}, { quoted: m })
}
break;

case 'gremory': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/gremory' }}, { quoted: m })
}
break;

case 'hacker': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/hacker' }}, { quoted: m })
}
break;

case 'hestia': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/hestia' }}, { quoted: m })
}
break;

case 'husbu': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/husbu' }}, { quoted: m })
}
break;

case 'inori': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/inori' }}, { quoted: m })
}
break;

case 'islamic': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/islamic' }}, { quoted: m })
}
break;

case 'isuzu': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/isuzu' }}, { quoted: m })
}
break;

case 'itachi': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/itachi' }}, { quoted: m })
}
break;

case 'itori': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/itori' }}, { quoted: m })
}
break;

case 'jennie': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/jennie' }}, { quoted: m })
}
break;

case 'jiso': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/jiso' }}, { quoted: m })
}
break;

case 'justina': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/justina' }}, { quoted: m })
}
break;

case 'kaga': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/kaga' }}, { quoted: m })
}
break;

case 'kagura': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/kagura' }}, { quoted: m })
}
break;

case 'kakashi': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/kakashi' }}, { quoted: m })
}
break;

case 'kaori': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/kaori' }}, { quoted: m })
}
break;

case 'cartoon': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/cartoon' }}, { quoted: m })
}
break;

case 'shortquote': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/shortquote' }}, { quoted: m })
}
break;

case 'keneki': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/keneki' }}, { quoted: m })
}
break;

case 'kotori': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/kotori' }}, { quoted: m })
}
break;

case 'kpop': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/kpop' }}, { quoted: m })
}
break;

case 'kucing': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/kucing' }}, { quoted: m })
}
break;

case 'kurumi': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/kurumi' }}, { quoted: m })
}
break;

case 'lisa': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/lisa' }}, { quoted: m })
}
break;

case 'loli': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/loli' }}, { quoted: m })
}
break;

case 'madara': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/madara' }}, { quoted: m })
}
break;

case 'megumin': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/megumin' }}, { quoted: m })
}
break;

case 'mikasa': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/mikasa' }}, { quoted: m })
}
break;

case 'mikey': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/mikey' }}, { quoted: m })
}
break;

case 'miku': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/miku' }}, { quoted: m })
}
break;

case 'minato': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/minato' }}, { quoted: m })
}
break;

case 'mobile': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/mobile' }}, { quoted: m })
}
break;

case 'motor': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/motor' }}, { quoted: m })
}
break;

case 'mountain': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/mountain' }}, { quoted: m })
}
break;

case 'naruto': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/naruto' }}, { quoted: m })
}
break;

case 'neko': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/neko' }}, { quoted: m })
}
break;

case 'neko2': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/neko2' }}, { quoted: m })
}
break;

case 'nekonime': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/nekonime' }}, { quoted: m })
}
break;

case 'nezuko': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/nezuko' }}, { quoted: m })
}
break;

case 'onepiece': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/onepiece' }}, { quoted: m })
}
break;

case 'pentol': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/pentol' }}, { quoted: m })
}
break;

case 'pokemon': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/pokemon' }}, { quoted: m })
}
break;

case 'profil': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/profil' }}, { quoted: m })
}
break;

case 'programming': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/programming' }}, { quoted: m })
}
break;

case 'pubg': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/pubg' }}, { quoted: m })
}
break;

case 'randblackpink': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/randblackpink' }}, { quoted: m })
}
break;

case 'randomnime': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/randomnime' }}, { quoted: m })
}
break;

case 'randomnime2': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/randomnime2' }}, { quoted: m })
}
break;

case 'rize': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/rize' }}, { quoted: m })
}
break;

case 'rose': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/rose' }}, { quoted: m })
}
break;

case 'ryujin': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/ryujin' }}, { quoted: m })
}
break;

case 'sagiri': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/sagiri' }}, { quoted: m })
}
break;

case 'sakura': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/sakura' }}, { quoted: m })
}
break;

case 'sasuke': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/sasuke' }}, { quoted: m })
}
break;

case 'satanic': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/satanic' }}, { quoted: m })
}
break;

case 'shina': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/shina' }}, { quoted: m })
}
break;

case 'shinka': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/shinka' }}, { quoted: m })
}
break;

case 'shinomiya': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/shinomiya' }}, { quoted: m })
}
break;

case 'shizuka': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/shizuka' }}, { quoted: m })
}
break;

case 'shota': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/shota' }}, { quoted: m })
}
break;

case 'space': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/space' }}, { quoted: m })
}
break;

case 'technology': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/technology' }}, { quoted: m })
}
break;

case 'tejina': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/tejina' }}, { quoted: m })
}
break;

case 'toukachan': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/toukachan' }}, { quoted: m })
}
break;

case 'tsunade': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/tsunade' }}, { quoted: m })
}
break;

case 'wfbbbu': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/waifu' }}, { quoted: m })
}
break;

case 'wallhp': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/wallhp' }}, { quoted: m })
}
break;

case 'wallml': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/wallml' }}, { quoted: m })
}
break;

case 'wallmlnime': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/wallmlnime' }}, { quoted: m })
}
break;

case 'yotsuba': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/yotsuba' }}, { quoted: m })
}
break;

case 'yuki': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/yuki' }}, { quoted: m })
}
break;

case 'yulibocil': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/yulibocil' }}, { quoted: m })
}
break;

case 'yumeko': {
    devtrust.sendMessage(m.chat, { caption: m.success, image: { url: 'https://apis.prexzyvilla.site/random/anime/yumeko' }}, { quoted: m })
}
break;
case "gemivbnni": {
    const chatId = m.key.remoteJid;
    // Use args if provided, otherwise use quoted message text (if any)
    let query = args.join(" ").trim();
    try {
        // If no args, check if user replied to a message and use that text
        if (!query && m.message && m.message.extendedTextMessage && m.message.extendedTextMessage.contextInfo && m.message.extendedTextMessage.contextInfo.quotedMessage) {
            // quotedMessage can be different message types; prefer text
            const quoted = m.message.extendedTextMessage.contextInfo.quotedMessage;
            if (quoted.conversation) query = quoted.conversation;
            else if (quoted.extendedTextMessage && quoted.extendedTextMessage.text) query = quoted.extendedTextMessage.text;
        }

        if (!query) {
            return await devtrust.sendMessage(chatId, { text: "❗ Please provide a prompt. Usage: `.gemini <your question>` or reply to a message with `.gemini`" });
        }

        // Call API
        const res = await fetch(`https://apis.prexzyvilla.site/ai/gemini?text=${encodeURIComponent(query)}`, { method: "GET" });
        if (!res.ok) {
            return await devtrust.sendMessage(chatId, { text: `⚠️ GEMINI API returned HTTP ${res.status}` });
        }

        const json = await res.json();

        // The API returns the text in json.data (based on the sample you provided)
        const answer = (json && (typeof json.data === "string" ? json.data : (json.data?.text || json.data?.result || ""))) || "";

        if (!answer) {
            return await devtrust.sendMessage(chatId, { text: "⚠️ No response from GEMINI API." });
        }

        // Split into safe-sized chunks for WhatsApp (adjust size if needed)
        const chunks = answer.match(/[\s\S]{1,3000}/g) || [answer];
        for (let i = 0; i < chunks.length; i++) {
            const header = i === 0 ? `🤖 *Gemini Response:*\n\n` : "";
            await devtrust.sendMessage(chatId, { text: header + chunks[i] });
        }
    } catch (err) {
        console.error("gemibi command error:", err);
        await devtrust.sendMessage(chatId, { text: "⚠️ Sorry, I couldn't connect to the GEMINI API right now." });
    }
}
break;
case 'movie': {
    if (!text) return reply(`❗ Example: ${prefix + command} <movie-name>`);

    try {
        await reply(`🔍 *Searching for movies...*\nPlease wait.`);
        const apiUrl = `https://www.dark-yasiya-api.site/movie/sinhalasub/search?text=${encodeURIComponent(text)}`;
        const response = await axios.get(apiUrl);

        const { status, result } = response.data;
        if (!status || !result || result.movies.length === 0) {
            return reply(`❌ No movies found for "${text}". Please try again.`);
        }

        global.movieSearchResults = result.movies;

        let movieList = `🎥 *Search Results for "${text}":*\n\n`;
        result.movies.forEach((movie, index) => {
            movieList += `${index + 1}. *${movie.title}*\n   🌟 ${movie.imdb} | 📅 ${movie.year}\n   🔗 [Details](${movie.link})\n\n`;
        });
        movieList += `\nTo select a movie, use the command:\n*.selectmovie <number>* (e.g., *.selectmovie 1*).`;

        await reply(movieList);
    } catch (error) {
        console.error('Error searching for movies:', error.message);
        reply(`❌ An error occurred while searching for movies. Please try again.`);
    }
}
break;

case 'selectmovie': {
    if (!text) return reply(`❗ Example: ${prefix + command} <number>\nSelect a movie from the list.`);
    if (!global.movieSearchResults || global.movieSearchResults.length === 0) {
        return reply(`❌ No movies found. Please use the *movie* command first.`);
    }

    const selectedIndex = parseInt(text.trim()) - 1;
    if (isNaN(selectedIndex) || selectedIndex < 0 || selectedIndex >= global.movieSearchResults.length) {
        return reply(`❌ Invalid number. Please choose a valid movie number from the list.`);
    }

    const selectedMovie = global.movieSearchResults[selectedIndex];
    const movieDetailsUrl = `https://www.dark-yasiya-api.site/movie/sinhalasub/movie?url=${encodeURIComponent(selectedMovie.link)}`;

    try {
        await reply(`🔍 *Fetching movie details...*\nPlease wait.`);
        const response = await axios.get(movieDetailsUrl);

        const { status, result } = response.data;
        if (!status || !result) {
            return reply(`❌ Failed to fetch movie details. Please try again.`);
        }

        const movie = result.data;
        global.movieLinks = movie.dl_links;
        global.selectedMovieTitle = movie.title;

        let movieInfo = `🎬 *${movie.title}*\n\n`;
        movieInfo += `📅 *Release Date:* ${movie.date}\n`;
        movieInfo += `🌍 *Country:* ${movie.country}\n`;
        movieInfo += `⏳ *Runtime:* ${movie.runtime}\n`;
        movieInfo += `⭐ *IMDb Rating:* ${movie.imdbRate}/10 (${movie.imdbVoteCount} votes)\n`;
        movieInfo += `🎥 *TMDb Rating:* ${movie.tmdbRate}/10\n\n`;
        movieInfo += `💾 *Available Qualities:*\n`;
        movie.dl_links.forEach((link, index) => {
            movieInfo += `${index + 1}. *${link.quality}* - ${link.size}\n`;
        });
        movieInfo += `\nTo download, use the command:\n*.dlmovie <number>* (e.g., *.dlmovie 2*).`;

        await devtrust.sendMessage(m.chat, { image: { url: movie.image }, caption: movieInfo }, { quoted: m });
    } catch (error) {
        console.error('Error fetching movie details:', error.message);
        reply(`❌ An error occurred while fetching movie details. Please try again.`);
    }
}
break;

case 'dlmovie': {
    if (!text) return reply(`❗ Example: ${prefix + command} <number>\nChoose a quality number from the list provided earlier.`);
    if (!global.movieLinks || global.movieLinks.length === 0) {
        return reply(`❌ No movie details found. Please use the *selectmovie* command first.`);
    }

    const selectedIndex = parseInt(text.trim()) - 1;
    if (isNaN(selectedIndex) || selectedIndex < 0 || selectedIndex >= global.movieLinks.length) {
        return reply(`❌ Invalid number. Please choose a valid quality number from the list.`);
    }

    const selectedLink = global.movieLinks[selectedIndex]?.link;
    if (!selectedLink) {
        return reply(`❌ Could not find the selected quality. Please try again.`);
    }

    try {
        await reply(`⏳ *Downloading the movie...*\nThis might take a while, please be patient.`);

        const movieFile = await axios({
            url: selectedLink,
            method: 'GET',
            responseType: 'stream'
        });

        const filePath = `./movie_${Date.now()}.mp4`;
        const writer = fs.createWriteStream(filePath);
        movieFile.data.pipe(writer);

        writer.on('finish', async () => {
            const movieTitle = global.selectedMovieTitle || 'Movie';
            await devtrust.sendMessage(m.chat, {
                document: { url: filePath },
                mimetype: 'video/mp4',
                fileName: `${movieTitle}.mp4`,
                caption: `🎥\n*Title:* ${movieTitle}\n\n> Generated`
            });

            fs.unlinkSync(filePath);
        });

        writer.on('error', (err) => {
            console.error('Error saving the movie file:', err);
            reply(`❌ Failed to download the movie. Please try again.`);
        });
    } catch (error) {
        console.error('Error downloading the movie:', error.message);
        reply(`❌ An error occurred while downloading the movie. Please try again.`);
    }
}
break;
case 'deepsjfkeek': {
  if (!text) {
    return reply("❌ Please provide a prompt.\n\nExample: ${prefix + command} Hello");
  }

  try {
    const response = await axios.get(
      `https://apis.prexzyvilla.site/ai/deepseek?text=${encodeURIComponent(text)}`)

    console.log("Deepseek-v3 raw data:", response.data);

    if (response.data && response.data.success) {
      reply(response.data.result || JSON.stringify(response.data, null, 2));
    } else {
      reply(`❌ Failed to get a response. Response was: ${JSON.stringify(response.data)}`);
    }
  } catch (error) {
    console.error("❌ Deepseek-v3 API Error:", error);
    reply("❌ An error occurred while contacting Deepseek-v3: ${error.message}");
  }
  break;
}
case "grovnnk-ai": {
    const chatId = m.key.remoteJid;
    // Use args if provided, otherwise use quoted message text (if any)
    let query = args.join(" ").trim();
    try {
        // If no args, check if user replied to a message and use that text
        if (!query && m.message && m.message.extendedTextMessage && m.message.extendedTextMessage.contextInfo && m.message.extendedTextMessage.contextInfo.quotedMessage) {
            // quotedMessage can be different message types; prefer text
            const quoted = m.message.extendedTextMessage.contextInfo.quotedMessage;
            if (quoted.conversation) query = quoted.conversation;
            else if (quoted.extendedTextMessage && quoted.extendedTextMessage.text) query = quoted.extendedTextMessage.text;
        }

        if (!query) {
            return await devtrust.sendMessage(chatId, { text: "❗ Please provide a prompt. Usage: `.grok-ai <your question>` or reply to a message with `.grok-ai`" });
        }

        // Call API
        const res = await fetch(`https://apis.prexzyvilla.site/ai/grok?text=${encodeURIComponent(query)}`, { method: "GET" });
        if (!res.ok) {
            return await devtrust.sendMessage(chatId, { text: `⚠️ GROK-AI API returned HTTP ${res.status}` });
        }

        const json = await res.json();

        // The API returns the text in json.data (based on the sample you provided)
        const answer = (json && (typeof json.data === "string" ? json.data : (json.data?.text || json.data?.result || ""))) || "";

        if (!answer) {
            return await devtrust.sendMessage(chatId, { text: "⚠️ GROK-AI No response from API." });
        }

        // Split into safe-sized chunks for WhatsApp (adjust size if needed)
        const chunks = answer.match(/[\s\S]{1,3000}/g) || [answer];
        for (let i = 0; i < chunks.length; i++) {
            const header = i === 0 ? `🤖 *Grok-ai Response:*\n\n` : "";
            await devtrust.sendMessage(chatId, { text: header + chunks[i] });
        }
    } catch (err) {
        console.error("grok-ai command error:", err);
        await devtrust.sendMessage(chatId, { text: "⚠️ Sorry, I couldn't connect to the Grok API right now." });
    }
}
break;
case 'stupidcheck': case 'uncleancheck': case 'hotcheck': case 'smartcheck': case 'greatcheck': case 'evilcheck': case 'dogcheck': case 'coolcheck': case 'gaycheck': case 'waifucheck': {
    cantik = body.slice(1);
    const okebnh1 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100'];
    const xeonkak = okebnh1[Math.floor(Math.random() * okebnh1.length)];
    let perc = `%`;
    let msgs = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: xeonkak + perc
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Generated ✅'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        hasMediaAttachment: false,
                        ...await prepareWAMessageMedia({ image: fs.readFileSync('./media/thumb.png') }, { upload: devtrust.waUploadToServer })
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [{
                            "name": "quick_reply",
                            "buttonParamsJson": `{\"display_text\":\"✅\",\"id\":\"\"}`
                        }],
                    }),
                    contextInfo: {
                        mentionedJid: [m.sender],
                        forwardingScore: 999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: '',
                            newsletterName: '',
                            serverMessageId: 143
                        }
                    }
                })
            }
        }
    }, { quoted: m });
    return await devtrust.relayMessage(m.chat, msgs.message, {});
}
break;

case "metabcn-ai": {
    const chatId = m.key.remoteJid;
    // Use args if provided, otherwise use quoted message text (if any)
    let query = args.join(" ").trim();
    try {
        // If no args, check if user replied to a message and use that text
        if (
            !query &&
            m.message &&
            m.message.extendedTextMessage &&
            m.message.extendedTextMessage.contextInfo &&
            m.message.extendedTextMessage.contextInfo.quotedMessage
        ) {
            // quotedMessage can be different message types; prefer text
            const quoted = m.message.extendedTextMessage.contextInfo.quotedMessage;
            if (quoted.conversation) query = quoted.conversation;
            else if (quoted.extendedTextMessage && quoted.extendedTextMessage.text)
                query = quoted.extendedTextMessage.text;
        }

        if (!query) {
            return await devtrust.sendMessage(chatId, {
                text: "❗ Please provide a prompt. Usage: `.meta-ai <your question>` or reply to a message with `.meta-ai`",
            });
        }

        // Call API
        const res = await fetch(
            `https://apis.prexzyvilla.site/ai/meta-ai?text=${encodeURIComponent(query)}`,
            { method: "GET" }
        );
        if (!res.ok) {
            return await devtrust.sendMessage(chatId, {
                text: `⚠️ Meta AI API returned HTTP ${res.status}`,
            });
        }

        const json = await res.json();

        // The API returns the text in json.data
        const answer =
            (json &&
                (typeof json.data === "string"
                    ? json.data
                    : json.data?.text || json.data?.result || "")) ||
            "";

        if (!answer) {
            return await devtrust.sendMessage(chatId, {
                text: "⚠️ No response from Meta AI API.",
            });
        }

        // Split into safe-sized chunks for WhatsApp (adjust size if needed)
        const chunks = answer.match(/[\s\S]{1,3000}/g) || [answer];
        for (let i = 0; i < chunks.length; i++) {
            const header = i === 0 ? `🤖 *Meta AI Response:*\n\n` : "";
            await devtrust.sendMessage(chatId, { text: header + chunks[i] });
        }
    } catch (err) {
        console.error("meta command error:", err);
        await devtrust.sendMessage(chatId, {
            text: "⚠️ Sorry, I couldn't connect to the Meta AI API right now.",
        });
    }
}
break;
case "qwenxj": {
    const chatId = m.key.remoteJid;
    // Use args if provided, otherwise use quoted message text (if any)
    let query = args.join(" ").trim();
    try {
        // If no args, check if user replied to a message and use that text
        if (!query && m.message && m.message.extendedTextMessage && m.message.extendedTextMessage.contextInfo && m.message.extendedTextMessage.contextInfo.quotedMessage) {
            // quotedMessage can be different message types; prefer text
            const quoted = m.message.extendedTextMessage.contextInfo.quotedMessage;
            if (quoted.conversation) query = quoted.conversation;
            else if (quoted.extendedTextMessage && quoted.extendedTextMessage.text) query = quoted.extendedTextMessage.text;
        }

        if (!query) {
            return await devtrust.sendMessage(chatId, { text: "❗ Please provide a prompt. Usage: `.qwen <your question>` or reply to a message with `.qwen`" });
        }

        // Call API
        const res = await fetch(`https://apis.prexzyvilla.site/ai/qwen?text=${encodeURIComponent(query)}`, { method: "GET" });
        if (!res.ok) {
            return await devtrust.sendMessage(chatId, { text: `⚠️ Qwen API returned HTTP ${res.status}` });
        }

        const json = await res.json();

        // The API returns the text in json.data (based on the sample you provided)
        const answer = (json && (typeof json.data === "string" ? json.data : (json.data?.text || json.data?.result || ""))) || "";

        if (!answer) {
            return await devtrust.sendMessage(chatId, { text: "⚠️ No response from Qwen API." });
        }

        // Split into safe-sized chunks for WhatsApp (adjust size if needed)
        const chunks = answer.match(/[\s\S]{1,3000}/g) || [answer];
        for (let i = 0; i < chunks.length; i++) {
            const header = i === 0 ? `🤖 *Qwen Response:*\n\n` : "";
            await devtrust.sendMessage(chatId, { text: header + chunks[i] });
        }
    } catch (err) {
        console.error("qwen command error:", err);
        await devtrust.sendMessage(chatId, { text: "⚠️ Sorry, I couldn't connect to the Qwen API right now." });
    }
}
break;
case 'fb':
case 'fbdl':
case 'facebook':
 case 'fb': {   
        const path = require('path');
                const text = m.message?.conversation || m.message?.extendedTextMessage?.text;
        const url = text?.split(' ')?.slice(1)?.join(' ')?.trim();

        if (!url) {
          return m.reply("Please provide a Facebook video URL.\nExample: .fbdl https://www.facebook.com/...");
        }

        if (!url.includes('facebook.com')) {
          return m.reply("That is not a Facebook link.");
        }

        // Send initial loading reaction
        await devtrust.sendMessage(m.chat, {
          react: { text: '⏳', key: m.key }
        });

        try {
          const response = await axios.get(`https://apis.prexzyvilla.site/download/facebook?url=${encodeURIComponent(url)}`);
          const data = response.data;

          if (!data || data.status !== 200 || !data.facebook || !data.facebook.sdVideo) {
            await devtrust.sendMessage(m.chat, { react: { text: '❌', key: m.key } }); // Send error reaction
            return replynano("Sorry, the API didn't respond correctly. Please try again later!");
          }

          const fbvid = data.facebook.sdVideo;

          if (!fbvid) {
            await devtrust.sendMessage(m.chat, { react: { text: '❌', key: m.key } }); // Send error reaction
            return m.reply("Wrong Facebook data. Please ensure the video exists.");
          }

          const tmpDir = path.join(process.cwd(), 'tmp');
          if (!fs.existsSync(tmpDir)) {
            fs.mkdirSync(tmpDir, { recursive: true });
          }

          const tempFile = path.join(tmpDir, `fb_${Date.now()}.mp4`);

          const videoResponse = await axios({
            method: 'GET',
            url: fbvid,
            responseType: 'stream',
            headers: {
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
              'Accept': 'video/mp4,video/*;q=0.9,*/*;q=0.8',
              'Accept-Language': 'en-US,en;q=0.5',
              'Range': 'bytes=0-',
              'Connection': 'keep-alive',
              'Referer': 'https://www.facebook.com/'
            }
          });

          const writer = fs.createWriteStream(tempFile);
          videoResponse.data.pipe(writer);

          await new Promise((resolve, reject) => {
            writer.on('finish', resolve);
            writer.on('error', reject);
          });

          if (!fs.existsSync(tempFile) || fs.statSync(tempFile).size === 0) {
            devtrust.sendMessage(m.chat, { react: { text: '❌', key: m.key } }); // Send error reaction
            throw new Error('Failed to download video');
          }

          // Send success reaction before sending video
          await devtrust.sendMessage(m.chat, { react: { text: '✅', key: m.key } });

          await devtrust.sendMessage(m.chat, {
            video: { url: tempFile },
            mimetype: "video/mp4",
            caption: `By Noctis Xmd 😍 ✅`
          }, { quoted: m });

          try {
            fs.unlinkSync(tempFile);
          } catch (err) {
            console.error('Error cleaning up temp file:', err);
          }

        } catch (error) {
          console.error('Error in Facebook command:', error);
          m.reply("An error occurred. API might be down. Error: " + error.message);
        }
    }
    break;
    case 'igdl':
case 'instagram':
case 'ig': {
  if (!text) return reply(
    "Provide a instagram media link\nExample: .igdl <link>"
  );

  try {
    const apiUrl = `https://delirius-apiofc.vercel.app/download/instagram?url=${encodeURIComponent(text)}`;
    const res = await fetch(apiUrl);
    if (!res.ok) return reply("⚠️ Instagram API not reachable.");

    const json = await res.json();
    if (!json.status || !Array.isArray(json.data) || json.data.length === 0) {
      return reply("❌ Failed to fetch Instagram media.");
    }

    for (const media of json.data) {
      if (media.type === "video") {
        await devtrust.sendMessage(m.chat, {
          video: { url: media.url },
          caption: `Url: ${text}\nInstagram Image Retrieved ✅`
        }, { quoted: m });
      } else if (media.type === "image") {
        await devtrust.sendMessage(m.chat, {
          image: { url: media.url },
          caption: `Url: ${text}\nInstagram Image Retrieved ✅`
        }, { quoted: m });
      }
    }

  } catch (err) {
    console.error("Igdl Error", err);
    reply("Error downloading Instagram video");
  }
}
break;
case "tempmail2":
case "tmpmail":
case "newmail": {
    if (!tempMailData[m.sender]) {
        try {
            // Generate a random email using 1SecMail API
            const response = await axios.get('https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1');
            const data = response.data[0];

            if (!data) {
                return reply("❌ Failed to generate a temporary email. Please try again.");
            }

            // Save the generated email for the user
            tempMailData[m.sender] = { email: data };
            reply(`✅ *Temporary Email Created:*\n\n📧 Email: ${data}\n\nUse *${prefix}checkmail* to check your inbox.\nUse *${prefix}delmail* to delete your email.`);
        } catch (error) {
            console.error(error);
            reply("❌ An error occurred while creating a temporary email. Please try again.");
        }
    } else {
        reply(`📧 *You already have a temporary email:*\n\n${tempMailData[m.sender].email}\n\nUse *${prefix}checkmail* to check your inbox.`);
    }
    break;
}

// **Check Emails**
case "checkmails":
case "readmail":
case "reademail": {
    const userMail = tempMailData[m.sender];
    if (!userMail) {
        return reply(`❌ You don't have a temporary email. Use *${prefix}tempmail* to create one.`);
    }

    try {
        // Get the list of emails from the inbox using 1SecMail API
        const [login, domain] = userMail.email.split('@');
        const response = await axios.get(`https://www.1secmail.com/api/v1/?action=getMessages&login=${login}&domain=${domain}`);
        
        const inbox = response.data;
        if (!inbox || inbox.length === 0) {
            return reply(`📭 *No mails received yet!*\nUse *${prefix}delmail* to delete mail.`);
        }

        let messageList = "📩 *Your Emails:*\n\n";
        for (const email of inbox) {
            messageList += `📧 *From:* ${email.from}\n🗓️ *Date:* ${email.date}\n✉️ *Subject:* ${email.subject}\n🔑 *ID:* ${email.id}\n\n`;
        }
        reply(messageList.trim());
    } catch (error) {
        console.error(error);
        reply("❌ An error occurred while checking emails. Please try again.");
    }
    break;
}
// **Delete Temporary Email**
case "delmail":
case "deletemail":
case "deltemp":
case "deltmp": {
    const userMail = tempMailData[m.sender];
    if (userMail) {
        try {
            // Delete the temporary email using 1SecMail API
            const [login, domain] = userMail.email.split('@');
            const response = await axios.get(`https://www.1secmail.com/api/v1/?action=deleteMailbox&login=${login}&domain=${domain}`);
            
            if (response.data.result === 'success') {
                delete tempMailData[m.sender]; // Remove from local storage
                reply("✅ Your temporary email has been deleted.");
            } else {
                reply("❌ Failed to delete your temporary email. Please try again.");
            }
        } catch (error) {
            console.error(error);
            reply("❌ An error occurred while deleting your temporary email. Please try again.");
        }
    } else {
        reply("❌ You don't have a temporary email to delete.");
    }
    break;
}
case 'tempmail2': {
  try {
    const res = await axios.get(`https://apis.HansTz.my.id/temp-mail`);
    const data = res.data;

    if (!data.success) return reply(`❌ Failed to generate temp mail.`);

    global.tempMailSession = data.session_id;

    reply(`✅ *Temporary Mail Created!*\n\n` +
      `• Email: ${data.email}\n` +
      `• Session ID: ${data.session_id}\n` +
      `• Expires: ${data.expires_at}\n\n` +
      `Use *${prefix}tempmail-inbox ${data.session_id}* to check inbox.`);
  } catch (err) {
    console.error(err);
    reply(`❌ Error creating temp mail:\n> ${err.message}`);
  }
}
break;

case 'tempmail-inbox': {
  if (!args[0]) return reply(`❌ Provide a valid session ID.\n*Example:* ${prefix}tempmail-inbox U2Vzc2lvbjox23abc`);

  try {
    const sessionId = args[0];
    const res = await axios.get(`https://apis.HansTz.my.id/temp-mail/inbox?id=${sessionId}`);
    const data = res.data;

    if (!data.success) return reply(`❌ Failed to fetch inbox.`);

    if (data.messages.length === 0)
      return reply(`📭 Inbox is empty.`);

    let inboxText = data.messages.map((msg, i) =>
      `📧 *Message ${i + 1}*\n` +
      `• From: ${msg.fromAddr}\n` +
      `• To: ${msg.toAddr}\n` +
      `• Size: ${msg.rawSize} bytes\n` +
      `• Text: ${msg.text ? msg.text.substring(0, 300) + '...' : 'No preview'}\n` +
      `• Download: ${msg.downloadUrl}`
    ).join('\n\n');

    reply(`*📬 Temp Mail Inbox*\n\n${inboxText}`);
  } catch (err) {
    console.error(err);
    reply(`❌ Error checking inbox:\n> ${err.message}`);
  }
}
break;
 // ✨ TEXT MAKER COMMANDS HUB
// Usage: /command Your Text
// Example: /glitchtext Prexzy
// ▫️ /glitchtext - Digital glitch effects
case "glitchtext": {
    if (args.length < 1) {
        return devtrust.sendMessage(from, { text: "❌ Please provide text!\nExample: .glitchtext Violet" }, { quoted: m });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/glitchtext?text=${encodeURIComponent(text)}`;
        await devtrust.sendMessage(from, { image: { url }, caption: `⚡ Glitch Text Generated for: ${text}` }, { quoted: m });
    } catch (e) {
        console.error(e);
        await devtrust.sendMessage(from, { text: "⚠️ Error generating Glitch Text." }, { quoted: m });
    }
}
break;

// ▫️ /writetext - Write on wet glass
case "writetext": {
    if (args.length < 1) {
        return devtrust.sendMessage(from, { text: "❌ Please provide text!\nExample: .writetext Violet" }, { quoted: m });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/writetext?text=${encodeURIComponent(text)}`;
        await devtrust.sendMessage(from, { image: { url }, caption: `✍️ Write Text Logo Generated for: ${text}` }, { quoted: m });
    } catch (e) {
        console.error(e);
        await devtrust.sendMessage(from, { text: "⚠️ Error generating Write Text logo." }, { quoted: m });
    }
}
break;

// ▫️ /advancedglow - Advanced glow effects
case "advancedglow": {
    if (args.length < 1) {
        return devtrust.sendMessage(from, { text: "❌ Please provide text!\nExample: .advancedglow Violet" }, { quoted: m });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/advancedglow?text=${encodeURIComponent(text)}`;
        await devtrust.sendMessage(from, { image: { url }, caption: `💡 Advanced Glow Generated for: ${text}` }, { quoted: m });
    } catch (e) {
        console.error(e);
        await devtrust.sendMessage(from, { text: "⚠️ Error generating Advanced Glow." }, { quoted: m });
    }
}
break;

// ▫️ /typographytext - Typography on pavement
case "typographytext": {
    if (args.length < 1) {
        return devtrust.sendMessage(from, { text: "❌ Please provide text!\nExample: .typographytext Violet" }, { quoted: m });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/typographytext?text=${encodeURIComponent(text)}`;
        await devtrust.sendMessage(from, { image: { url }, caption: `🖋️ Typography Text Generated for: ${text}` }, { quoted: m });
    } catch (e) {
        console.error(e);
        await devtrust.sendMessage(from, { text: "⚠️ Error generating Typography Text." }, { quoted: m });
    }
}
break;

// ▫️ /pixelglitch - Pixel glitch effects
case "pixelglitch": {
    if (args.length < 1) {
        return devtrust.sendMessage(from, { text: "❌ Please provide text!\nExample: .pixelglitch Violet" }, { quoted: m });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/pixelglitch?text=${encodeURIComponent(text)}`;
        await devtrust.sendMessage(from, { image: { url }, caption: `🧩 Pixel Glitch Generated for: ${text}` }, { quoted: m });
    } catch (e) {
        console.error(e);
        await devtrust.sendMessage(from, { text: "⚠️ Error generating Pixel Glitch." }, { quoted: m });
    }
}
break;

// ▫️ /neonglitch - Neon glitch effects
case "neonglitch": {
    if (args.length < 1) {
        return devtrust.sendMessage(from, { text: "❌ Please provide text!\nExample: .neonglitch Violet" }, { quoted: m });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/neonglitch?text=${encodeURIComponent(text)}`;
        await devtrust.sendMessage(from, { image: { url }, caption: `💥 Neon Glitch Generated for: ${text}` }, { quoted: m });
    } catch (e) {
        console.error(e);
        await devtrust.sendMessage(from, { text: "⚠️ Error generating Neon Glitch." }, { quoted: m });
    }
}
break;

// ▫️ /flagtext - Nigeria flag text
case "flagtext": {
    if (args.length < 1) {
        return devtrust.sendMessage(from, { text: "❌ Please provide text!\nExample: .flagtext Violet" }, { quoted: m });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/flagtext?text=${encodeURIComponent(text)}`;
        await devtrust.sendMessage(from, { image: { url }, caption: `🇳🇬 Nigeria Flag Text Generated for: ${text}` }, { quoted: m });
    } catch (e) {
        console.error(e);
        await devtrust.sendMessage(from, { text: "⚠️ Error generating Flag Text." }, { quoted: m });
    }
}
break;

// ▫️ /flag3dtext - 3D American flag text
case "flag3dtext": {
    if (args.length < 1) {
        return devtrust.sendMessage(from, { text: "❌ Please provide text!\nExample: .flag3dtext Violet" }, { quoted: m });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/flag3dtext?text=${encodeURIComponent(text)}`;
        await devtrust.sendMessage(from, { image: { url }, caption: `🇺🇸 3D Flag Text Generated for: ${text}` }, { quoted: m });
    } catch (e) {
        console.error(e);
        await devtrust.sendMessage(from, { text: "⚠️ Error generating 3D Flag Text." }, { quoted: m });
    }
}
break;

// ▫️ /deletingtext - Eraser deleting effect
case "deletingtext": {
    if (args.length < 1) {
        return devtrust.sendMessage(from, { text: "❌ Please provide text!\nExample: .deletingtext Violet" }, { quoted: m });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/deletingtext?text=${encodeURIComponent(text)}`;
        await devtrust.sendMessage(from, { image: { url }, caption: `🩶 Deleting Text Effect Generated for: ${text}` }, { quoted: m });
    } catch (e) {
        console.error(e);
        await devtrust.sendMessage(from, { text: "⚠️ Error generating Deleting Text." }, { quoted: m });
    }
}
break;

// ▫️ /blackpinkstyle - Blackpink style logo
case "blackpinkstyle": {
    if (args.length < 1) {
        return devtrust.sendMessage(from, { text: "❌ Please provide text!\nExample: .blackpinkstyle Violet" }, { quoted: m });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/blackpinkstyle?text=${encodeURIComponent(text)}`;
        await devtrust.sendMessage(from, { image: { url }, caption: `🎀 Blackpink Style Generated for: ${text}` }, { quoted: m });
    } catch (e) {
        console.error(e);
        await devtrust.sendMessage(from, { text: "⚠️ Error generating Blackpink Style." }, { quoted: m });
    }
}
break;
// ▫️ /glowingtext - Glowing text effects
case "glowingtext": {
    if (args.length < 1) {
        return devtrust.sendMessage(from, { text: "❌ Please provide text!\nExample: .glowingtext Violet" }, { quoted: m });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/glowingtext?text=${encodeURIComponent(text)}`;
        await devtrust.sendMessage(from, { image: { url }, caption: `💫 Glowing Text Generated for: ${text}` }, { quoted: m });
    } catch (e) {
        console.error(e);
        await devtrust.sendMessage(from, { text: "⚠️ Error generating Glowing Text." }, { quoted: m });
    }
}
break;

// ▫️ /underwatertext - 3D underwater text
case "underwatertext": {
    if (args.length < 1) {
        return devtrust.sendMessage(from, { text: "❌ Please provide text!\nExample: .underwatertext Violet" }, { quoted: m });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/underwatertext?text=${encodeURIComponent(text)}`;
        await devtrust.sendMessage(from, { image: { url }, caption: `🌊 Underwater Text Generated for: ${text}` }, { quoted: m });
    } catch (e) {
        console.error(e);
        await devtrust.sendMessage(from, { text: "⚠️ Error generating Underwater Text." }, { quoted: m });
    }
}
break;

// ▫️ /logomaker - Bear logo maker
case "logomaker": {
    if (args.length < 1) {
        return devtrust.sendMessage(from, { text: "❌ Please provide text!\nExample: .logomaker Violet" }, { quoted: m });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/logomaker?text=${encodeURIComponent(text)}`;
        await devtrust.sendMessage(from, { image: { url }, caption: `🐻 Logo Maker Generated for: ${text}` }, { quoted: m });
    } catch (e) {
        console.error(e);
        await devtrust.sendMessage(from, { text: "⚠️ Error generating Logo Maker." }, { quoted: m });
    }
}
break;

// ▫️ /cartoonstyle - Cartoon graffiti text
case "cartoonstyle": {
    if (args.length < 1) {
        return devtrust.sendMessage(from, { text: "❌ Please provide text!\nExample: .cartoonstyle Violet" }, { quoted: m });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/cartoonstyle?text=${encodeURIComponent(text)}`;
        await devtrust.sendMessage(from, { image: { url }, caption: `🎨 Cartoon Style Text Generated for: ${text}` }, { quoted: m });
    } catch (e) {
        console.error(e);
        await devtrust.sendMessage(from, { text: "⚠️ Error generating Cartoon Style Text." }, { quoted: m });
    }
}
break;

// ▫️ /papercutstyle - 3D paper cut style
case "papercutstyle": {
    if (args.length < 1) {
        return devtrust.sendMessage(from, { text: "❌ Please provide text!\nExample: .papercutstyle Violet" }, { quoted: m });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/papercutstyle?text=${encodeURIComponent(text)}`;
        await devtrust.sendMessage(from, { image: { url }, caption: `✂️ Paper Cut Style Generated for: ${text}` }, { quoted: m });
    } catch (e) {
        console.error(e);
        await devtrust.sendMessage(from, { text: "⚠️ Error generating Paper Cut Style." }, { quoted: m });
    }
}
break;

// ▫️ /watercolortext - Watercolor text effect
case "watercolortext": {
    if (args.length < 1) {
        return devtrust.sendMessage(from, { text: "❌ Please provide text!\nExample: .watercolortext Violet" }, { quoted: m });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/watercolortext?text=${encodeURIComponent(text)}`;
        await devtrust.sendMessage(from, { image: { url }, caption: `🖌️ Watercolor Text Generated for: ${text}` }, { quoted: m });
    } catch (e) {
        console.error(e);
        await devtrust.sendMessage(from, { text: "⚠️ Error generating Watercolor Text." }, { quoted: m });
    }
}
break;

// ▫️ /effectclouds - Text on clouds in sky
case "effectclouds": {
    if (args.length < 1) {
        return devtrust.sendMessage(from, { text: "❌ Please provide text!\nExample: .effectclouds Violet" }, { quoted: m });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/effectclouds?text=${encodeURIComponent(text)}`;
        await devtrust.sendMessage(from, { image: { url }, caption: `☁️ Clouds Text Generated for: ${text}` }, { quoted: m });
    } catch (e) {
        console.error(e);
        await devtrust.sendMessage(from, { text: "⚠️ Error generating Cloud Text." }, { quoted: m });
    }
}
break;

// ▫️ /blackpinklogo - Blackpink logo creator
case "blackpinklogo": {
    if (args.length < 1) {
        return devtrust.sendMessage(from, { text: "❌ Please provide text!\nExample: .blackpinklogo Violet" }, { quoted: m });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/blackpinklogo?text=${encodeURIComponent(text)}`;
        await devtrust.sendMessage(from, { image: { url }, caption: `💖 Blackpink Logo Generated for: ${text}` }, { quoted: m });
    } catch (e) {
        console.error(e);
        await devtrust.sendMessage(from, { text: "⚠️ Error generating Blackpink Logo." }, { quoted: m });
    }
}
break;

// ▫️ /gradienttext - 3D gradient text effect
case "gradienttext": {
    if (args.length < 1) {
        return devtrust.sendMessage(from, { text: "❌ Please provide text!\nExample: .gradienttext Robin" }, { quoted: m });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/gradienttext?text=${encodeURIComponent(text)}`;
        await devtrust.sendMessage(from, { image: { url }, caption: `🌈 Gradient Text Generated for: ${text}` }, { quoted: m });
    } catch (e) {
        console.error(e);
        await devtrust.sendMessage(from, { text: "⚠️ Error generating Gradient Text." }, { quoted: m });
    }
}
break;

// ▫️ /summerbeach - Write in sand summer beach
case "summerbeach": {
    if (args.length < 1) {
        return devtrust.sendMessage(from, { text: "❌ Please provide text!\nExample: .summerbeach Violet" }, { quoted: m });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/summerbeach?text=${encodeURIComponent(text)}`;
        await devtrust.sendMessage(from, { image: { url }, caption: `🏖️ Summer Beach Text Generated for: ${text}` }, { quoted: m });
    } catch (e) {
        console.error(e);
        await devtrust.sendMessage(from, { text: "⚠️ Error generating Summer Beach Text." }, { quoted: m });
    }
}
break;

// ▫️ /luxurygold - Luxury gold text effect
case "luxurygold": {
    if (args.length < 1) {
        return devtrust.sendMessage(from, { text: "❌ Please provide text!\nExample: .luxurygold Violet" }, { quoted: m });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/luxurygold?text=${encodeURIComponent(text)}`;
        await devtrust.sendMessage(from, { image: { url }, caption: `🥇 Luxury Gold Text Generated for: ${text}` }, { quoted: m });
    } catch (e) {
        console.error(e);
        await devtrust.sendMessage(from, { text: "⚠️ Error generating Luxury Gold Text." }, { quoted: m });
    }
}
break;
// ▫️ /multicoloredneon - Multicolored neon lights
case "multicoloredneon": {
    if (args.length < 1) {
        return devtrust.sendMessage(from, { text: "❌ Please provide text!\nExample: .multicoloredneon Violet" }, { quoted: m });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/multicoloredneon?text=${encodeURIComponent(text)}`;
        await devtrust.sendMessage(from, { image: { url }, caption: `🌈 Multicolored Neon Generated for: ${text}` }, { quoted: m });
    } catch (e) {
        console.error(e);
        await devtrust.sendMessage(from, { text: "⚠️ Error generating Multicolored Neon." }, { quoted: m });
    }
}
break;

// ▫️ /sandsummer - Write in sand summer beach
case "sandsummer": {
    if (args.length < 1) {
        return devtrust.sendMessage(from, { text: "❌ Please provide text!\nExample: .sandsummer Violet" }, { quoted: m });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/sandsummer?text=${encodeURIComponent(text)}`;
        await devtrust.sendMessage(from, { image: { url }, caption: `🏝️ Sand Summer Text Generated for: ${text}` }, { quoted: m });
    } catch (e) {
        console.error(e);
        await devtrust.sendMessage(from, { text: "⚠️ Error generating Sand Summer Text." }, { quoted: m });
    }
}
break;

// ▫️ /galaxywallpaper - Galaxy mobile wallpaper
case "galaxywallpaper": {
    if (args.length < 1) {
        return devtrust.sendMessage(from, { text: "❌ Please provide text!\nExample: .galaxywallpaper Violet" }, { quoted: m });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/galaxywallpaper?text=${encodeURIComponent(text)}`;
        await devtrust.sendMessage(from, { image: { url }, caption: `🌌 Galaxy Wallpaper Generated for: ${text}` }, { quoted: m });
    } catch (e) {
        console.error(e);
        await devtrust.sendMessage(from, { text: "⚠️ Error generating Galaxy Wallpaper." }, { quoted: m });
    }
}
break;

// ▫️ /style1917 - 1917 style text effect
case "style1917": {
    if (args.length < 1) {
        return devtrust.sendMessage(from, { text: "❌ Please provide text!\nExample: .style1917 Violet" }, { quoted: m });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/style1917?text=${encodeURIComponent(text)}`;
        await devtrust.sendMessage(from, { image: { url }, caption: `🎖️ 1917 Style Text Generated for: ${text}` }, { quoted: m });
    } catch (e) {
        console.error(e);
        await devtrust.sendMessage(from, { text: "⚠️ Error generating 1917 Style Text." }, { quoted: m });
    }
}
break;

// ▫️ /makingneon - Neon light with galaxy style
case "makingneon": {
    if (args.length < 1) {
        return devtrust.sendMessage(from, { text: "❌ Please provide text!\nExample: .makingneon Violet" }, { quoted: m });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/makingneon?text=${encodeURIComponent(text)}`;
        await devtrust.sendMessage(from, { image: { url }, caption: `🌠 Making Neon Generated for: ${text}` }, { quoted: m });
    } catch (e) {
        console.error(e);
        await devtrust.sendMessage(from, { text: "⚠️ Error generating Making Neon." }, { quoted: m });
    }
}
break;

// ▫️ /royaltext - Royal text effect
case "royaltext": {
    if (args.length < 1) {
        return devtrust.sendMessage(from, { text: "❌ Please provide text!\nExample: .royaltext Violet" }, { quoted: m });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/royaltext?text=${encodeURIComponent(text)}`;
        await devtrust.sendMessage(from, { image: { url }, caption: `👑 Royal Text Generated for: ${text}` }, { quoted: m });
    } catch (e) {
        console.error(e);
        await devtrust.sendMessage(from, { text: "⚠️ Error generating Royal Text." }, { quoted: m });
    }
}
break;

// ▫️ /freecreate - 3D hologram text effect
case "freecreate": {
    if (args.length < 1) {
        return devtrust.sendMessage(from, { text: "❌ Please provide text!\nExample: .freecreate Violet" }, { quoted: m });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/freecreate?text=${encodeURIComponent(text)}`;
        await devtrust.sendMessage(from, { image: { url }, caption: `🧊 3D Hologram Text Generated for: ${text}` }, { quoted: m });
    } catch (e) {
        console.error(e);
        await devtrust.sendMessage(from, { text: "⚠️ Error generating Free Create Text." }, { quoted: m });
    }
}
break;

// ▫️ /galaxystyle - Galaxy style name logo
case "galaxystyle": {
    if (args.length < 1) {
        return devtrust.sendMessage(from, { text: "❌ Please provide text!\nExample: .galaxystyle Violet" }, { quoted: m });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/galaxystyle?text=${encodeURIComponent(text)}`;
        await devtrust.sendMessage(from, { image: { url }, caption: `🪐 Galaxy Style Logo Generated for: ${text}` }, { quoted: m });
    } catch (e) {
        console.error(e);
        await devtrust.sendMessage(from, { text: "⚠️ Error generating Galaxy Style Logo." }, { quoted: m });
    }
}
break;

// ▫️ /lighteffects - Green neon light effects
case "lighteffects": {
    if (args.length < 1) {
        return devtrust.sendMessage(from, { text: "❌ Please provide text!\nExample: .lighteffects Violet" }, { quoted: m });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/lighteffects?text=${encodeURIComponent(text)}`;
        await devtrust.sendMessage(from, { image: { url }, caption: `💡 Light Effects Generated for: ${text}` }, { quoted: m });
    } catch (e) {
        console.error(e);
        await devtrust.sendMessage(from, { text: "⚠️ Error generating Light Effects." }, { quoted: m });
    }
}
break


default:
if (body.startsWith('<')) {
if (!isCreator) return;
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return m.reply(bang)}
try {
m.reply(util.format(eval(`(async () => { return ${body.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))}}
if (body.startsWith('>')) {
if (!isCreator) return;
try {
let evaled = await eval(body.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}
}
if (body.startsWith('®')) {
if (!isCreator) return;
require("child_process").exec(body.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}
}
} catch (err) {
console.log(require("util").format(err));
}
}
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
require('fs').unwatchFile(file)
console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
delete require.cache[file]
require(file)
})