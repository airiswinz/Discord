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
 .setAssetsLargeImage('https://i.pinimg.com/564x/d1/92/f4/d192f4e8c7c281ae9a7bd850b5f99164.jpg') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('prems, game creds & nitro boosts') //Text when you hover the Large image
    .setAssetsSmallImage('https://media.discordapp.net/attachments/1167525454308180030/1224036299703455944/green_check.gif?ex=661c07a3&is=660992a3&hm=2c67683c6fa44f018ebe0d42b811f0ec74490b0ddefe31e93588cecb88fb512e&=&width=58&height=59') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('legit shop') //Text when you hover the Small image
    .addButton('Shop ‹𝟥', ' https://discord.gg/JTnVN2NJhq')
    .addButton('Vouches ‹𝟥', 'https://discord.gg/Yjg2KpWryS');

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
