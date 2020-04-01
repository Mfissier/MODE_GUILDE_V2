const bot  = () => {

  const Discord = require('discord.js');
  const config = require("./config.json")
  const client = new Discord.Client();
  const fs = require("fs");
  client.commands = new Discord.Collection();
 
  listen_bot_message_function = require('./listen_bot_message_function');

  //------------------BDD---------------------------------\\
  // const mongoose = require('mongoose');
  // mongoose.connect('http://localhost:3001');

  //______________________



// ---------------------- FS COMMANDE  ----------------------------\\


 if(config.token === "setmeplease") return console.log("Set your token up! Go to https://www.discordapp.com/developers and generate a token from a bot user.");

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if(jsfile.length <= 0){
      console.log("Couldn't find commands.");
      return;
    }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });

});

//------------------------------ MESSAGE BOT -------------------------------\\

  client.on('ready', () => {
    console.log("le bot est lancé... Let's GO !!!");
    console.log(`Logged in as ${client.user.tag}!`);
  });

  client.on('message', async msg => {
    if (msg.content === 'ping') {
      msg.reply('Pong!');
      console.log("Pong !");
    }
  });
  client.login(config.token);


  // set message listener 
  client.on('message', async message => {
  //a little bit of data parsing/general checks
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
    let content = message.content.split(" ");
    let command = content[0];
    let args = content.slice(1);
    let prefix = config.prefix;


    //checks if message contains a command and runs it
    let commandfile = bot.commands.get(command.slice(prefix.length));
    if(commandfile) commandfile.run(bot,message,args);
    listen_bot_message_function.listen_bot_message(message);
  });

}

module.exports.bot = bot;