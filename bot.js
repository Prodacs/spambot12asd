const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("613423050720804886")
setInterval(function() {
channel.send(`حب امك ولا تحب غير ابوك لنك في الخرة راح تموت صح ولا غلط و لو مش فاهم لطيزي لترجعلي `);
}, 30)
})

client.login(process.env.BOT_TOKEN);