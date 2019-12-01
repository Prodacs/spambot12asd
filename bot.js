const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("650731667841089539")
setInterval(function() {
channel.send(`وات وتين نطين حل عني سويت البوت خلصني  `);
}, 30)
})

client.login(process.env.BOT_TOKEN);