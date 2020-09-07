
const bot  = () => {

  const Discord = require('discord.js');
  const config = require("./config.json");
  const mongo = require('../../mongo');
  const client = new Discord.Client();
  const fs = require("fs");
  client.commands = new Discord.Collection();

  listen_bot_message_function = require('./listen_bot_message_function');

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
    // ALL_ROLES = client.guilds.cache.find(Guild => Guild.roles).roles.cache.map(roles => roles.id);
    // console.log(ALL_ROLES);
    //  client.guilds.cache.find(Guild => Guild.roles).roles.cache.find(roles => roles.id === ALL_ROLES[1]).delete();


  });

  client.on('message', async msg => {
     if (msg.content === 'ping') {
       try {
         
      msg.reply('Pong!');
       console.log("Pong !");
       
  //  console.log(`on vient de trouver ${message.guild.members.get("user ID here")} !!!!`);
  var userID = msg.member.id;    
  var trucmachin = client.users.cache.get(userID);
       
      //  console.log(trucmachin, userID);
      //  var trucmachinArray = Array.from(client.users.cache);
        mongo.test(trucmachin, userID);
      //  mongo.test(trucmachinArray);
      
       } catch (error) {
         console.log("errorsss");
       }
     }
   });
  
   console.log(config.token);

  // set message listener 
  client.on('message', async message => {
  //a little bit of data parsing/general checks
        
      // if(message.author.client){
      //     try{
      //       return;
      //   } catch(error){
      //     console.log("error");
      //   }
      // };
        
      //   if(message.channel.type === 'dm'){
      //       try {
      //         return;
      //       } catch(error){
      //       console.log("error");
      //         }
      //   };

        let content = message.content.split(" ");
        let command = content[0];
        let args = content.slice(1);
        let prefix = config.prefix;


      //   //checks if message contains a command and runs it
        let commandfile = client.commands.get(command.slice(prefix.length));
        
        // if(commandfile){
        //     try{
        //       commandfile.run(client,message,args);
        //     } catch(error){
        //       console.log("error");
        //       }
        // };
      listen_bot_message_function.listen_bot_message(message, client); 
  });

client.login(config.token);



 }
 


module.exports.bot = bot;