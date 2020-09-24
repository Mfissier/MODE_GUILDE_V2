data_to_bot = require('./data/data_to_bot/data_to_bot_guild');
verif_user = require('../bot/test');


const bot  = () => {
  const Discord = require('discord.js');
  const config = require("./config.json");
  const client = new Discord.Client();
  const fs = require("fs");
  data_to_bot = require('./data/data_to_bot/data_to_bot_guild');
  client.commands = new Discord.Collection();
  listen_bot_message_function = require('./CMD/listen_bot_message_function');



// ---------------------- FS COMMANDE  ----------------------------\\
 if(config.token === "setmeplease") return console.log("Set your token up! Go to https://www.discordapp.com/developers and generate a token from a bot user.");
fs.readdir("./commands/", (err, files) => {
    if(err) console.log(err);
    //console.log("voici les données que tu cherches pour Flies : " + files);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
  //console.log(jsfile);
    if(jsfile.length <= 0){jsfile.forEach(
      console.log("Couldn't find commands."));
      return;
    }
    console.log(jsfile);
    console.log("voici les données que tu cherches pour Flies : " + files);
  jsfile.forEach((f, i) =>{
    let props = require(`../../commands/${f}`);
    console.log(props);
    console.log(`${f} loaded!`);
    client.commands.set(props.help.name, props);
  });
});
//------------------------------ MESSAGE BOT -------------------------------\\
  client.on('ready', () => {
    console.log("le bot est lancé... Let's GO !!!");
    console.log(`Logged in as ${client.user.tag}!`);

    //===========================ENREGISTREMENT DES DONNES VERS LE BOT===============================
    data_to_bot.data_to_bot();

    //  let tmp_client = client;
    //  setTimeout(verif_user.test, 5000, client);
    //===========================ENREGISTREMENT DES DONNES VERS LE BOT===============================
  
  });

  client.on('message', async message => {

      let content = message.content.split(" ");
      let command = content[0];
      let args = content.slice(1);
      let prefix = config.prefix;

      let commandfile = client.commands.get(command.slice(prefix.length));
      listen_bot_message_function.listen_bot_message(message, client); 
  });
client.login(config.token);
}
module.exports.bot = bot;