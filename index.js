const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1200448965259300874')
    .setType('STREAMING')
    .setURL('https://www.youtube.com/watch?v=4YbnyLqSLbw') //Must be a youtube video link 
    .setState('Valorant')
    .setName('ris')
    .setDetails(`Valorant [${formatTime()}]`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://media.discordapp.net/attachments/1201127101311492118/1202948372835864586/4d5d5fd9503beeabdc30310eb269d065.png?ex=661923f9&is=6606aef9&hm=2cb8d01a4d124b814af7f9e49755746d9857a3577b3502e9c53a1a9370984b0d&=&format=webp&quality=lossless&width=422&height=409') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('prems, game creds & nitro boosts') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/emojis/1191505419764510801.gif?size=80&quality=lossless') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('legit shop') //Text when you hover the Small image
    .addButton('Shop ‹𝟥', ' https://discord.gg/Yz3KqWxMvk')
    .addButton('Vouches ‹𝟥', 'https://discord.gg/Yz3KqWxMvk');

  client.user.setActivity(r);
  client.user.setPresence({ status: "idle" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `ris ૮ ˶ᵔ ᵕ ᵔ˶ ა `;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
