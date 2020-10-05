



data_to_bot = require('./data/data_to_bot/data_to_bot_guild');
verif_user = require('../bot/test');
check_for_create_profil = require('./data/Save/check_for_create_profil');
all_systeme = require ('./data/structjson/all_systeme.json');
data_donjon = require('./data/structjson/donjon_sys.json');
data_user = require('./data/structjson/user.json');



const SEARCH_INDEX_GUILD = require('./CMD_USERS/SEARCH_INDEX_GUILD.JS');
const  GESTION_GRADE  = require('./CMD_USERS/GESTION_GRADE.JS');
const create_all_profil = require('./data/create_all_profil');



const bot  = () => {
  const Discord = require('discord.js');
  const config = require("./config.json");
  const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
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
client.login('');
//------------------------------ MESSAGE BOT -------------------------------\\
  client.on('ready', () => {
    console.log("le bot est lancé... Let's GO !!!");
    console.log(`Logged in as ${client.user.tag}!`);
    data_to_bot.data_to_bot();
    //check_for_create_profil.check_for_create_profil(client);
    //===========================ENREGISTREMENT DES DONNES VERS LE BOT===============================
    //  let tmp_client = client;
    //  setTimeout(verif_user.test, 5000, client);
    //===========================ENREGISTREMENT DES DONNES VERS LE BOT===============================
  
  });
  client.on('guildMemberAdd', () => {

    console.log('new_player ???');
    check_for_create_profil.check_for_create_profil(client);

  });

  client.on('message', async message => {

      let content = message.content.split(" ");
      let command = content[0];
      let args = content.slice(1);
      let prefix = config.prefix;

      let commandfile = client.commands.get(command.slice(prefix.length));
      listen_bot_message_function.listen_bot_message(message, client); 
  });



client.on('messageReactionAdd', async (reaction, user) => {

	if (reaction.partial) {
		try {
			await reaction.fetch();
		} catch (error) { 
			console.error('Something went wrong when fetching the message: ', error);
			return;
		}
  }
  //////////////////______DONJON______/////////////////////////
    //////////////////______DONJON______/////////////////////////
      //////////////////______DONJON______/////////////////////////
        //////////////////______DONJON______/////////////////////////

  for (let i = 0  ; i < data_donjon.donjon.length; i++)
  {

      if (data_donjon.donjon[i].id_message == reaction.message.id)
      {

          let all_users = await reaction.users.cache.map(Collection => Collection);
          all_users = await all_users.map(all_users => all_users.id);
          let channel_s;
          let ind_guild;
          for (let y = 0; y < data_donjon.donjon[i].id_inscris.length ; y++)
          {
            if (all_users.find(all_users => all_users == data_donjon.donjon[i].id_inscris[y]))
            {
                if (data_donjon.donjon[i].statue == false)
                  break;
                let Description = await [];
                if (data_donjon.donjon[i].id_inscris_on.find(Element => Element == all_users[all_users.length - 1]))
                  break;
                data_donjon.donjon[i].id_inscris_on = all_users;
                await console.log(data_donjon.donjon[i].id_inscris_on[data_donjon.donjon[i].id_inscris_on.length - 1]);
                if (reaction._emoji.name == '✅')
                  data_donjon.donjon[i].nbr_on += await 1;
                for (let j = 0; j < data_donjon.donjon[i].id_inscris.length; j++)
                {
                    if (data_donjon.donjon[i].id_inscris_on.find(Element => Element == data_donjon.donjon[i].id_inscris[j]))
                      await Description.push('<@!'+data_donjon.donjon[i].id_inscris[j]+ '> : [ :✅: ]\n'); 
                    else
                      await Description.push('<@!'+data_donjon.donjon[i].id_inscris[j]+ '> : [ :x: ]\n'); 
                }
                if (data_donjon.donjon[i].nbr_on >= data_donjon.donjon[i].nbr_on_max){
                  console.log(data_donjon.donjon[i].id_inscris.length);
                  for (let j = 0; j < data_donjon.donjon[i].id_inscris.length; j++)
                  {
                    for (let y = 1; y < data_user._user.length; y++)
                    {
                        console.log('if (data_user._user[y].id : '+data_user._user[y].id+'== data_donjon.donjon[i].id_inscris[j]) : '+ data_donjon.donjon[i].id_inscris[j]);
                        if (data_user._user[y].id == data_donjon.donjon[i].id_inscris[j])
                        {
                          if (data_user._user[y].mana > 0)
                          {
                            data_user._user[y].mana -= 1;
                            data_user._user[y].stars += 1;
                            data_user._user[y].inscription_donjon = 0;
                            await GESTION_GRADE.GESTION_GRADE(data_user._user[y].id, 4, 0);
                            if (data_user._user[y].rang_guild)
                            {
                                ind_guild = await SEARCH_INDEX_GUILD.SEARCH_INDEX_GUILD(data_user._user[y].rang_guild);
                                  channel_s = await reaction.message.guild.channels.cache.find(Collection => Collection.id == data_guilde.channel_all_rewards[ind_guild]);
                                  await channel_s.send('Le memnbre <@!' + data_user._user[y].id + '> à gagné 1 ⭐ et perds 1 💧');
                            }
                            
                          }
                          else
                          {
                            await GESTION_GRADE.GESTION_GRADE(data_user._user[y].id, 4, reaction.message);
                            data_user._user[y].inscription_donjon = 0;
                            //channel_n = message.guild.channels.cache.find(Collection => Collection.id == data_guild.channel_général[]);
                          }
                          break;
                        }
                    }
                  }
                    console.log('ID CREATOR = ' + data_donjon.donjon[i].id_creator);
                    for (let y = 1; y < data_user._user.length; y++)
                    {
                        if (data_user._user[y].id == data_donjon.donjon[i].id_creator)
                        {
                          if (data_user._user[y].mana > 0)
                          {
                            data_user._user[y].mana -= 1;
                            data_user._user[y].stars += 1;
                            data_user._user[y].inscription_donjon = 0;
                            await GESTION_GRADE.GESTION_GRADE(data_user._user[y].id, 4, reaction.message);
                            if (data_user._user[y].rang_guild)
                            {
                                ind_guild = await SEARCH_INDEX_GUILD.SEARCH_INDEX_GUILD(data_user._user[y].rang_guild);
                                channel_s = await reaction.message.guild.channels.cache.find(Collection => Collection.id == data_guilde.channel_all_rewards[ind_guild]);
                                await channel_s.send('Le memnbre <@!' + data_user._user[y].id + '> à gagné 1 ⭐ et perds 1 💧');
                            }
                          }
                          else
                          {
                            data_user._user[y].inscription_donjon = 0;
                            //channel_n = message.guild.channels.cache.find(Collection => Collection.id == data_guild.channel_général[]);
                            reaction.message.channel.send('win stars');

                            await GESTION_GRADE.GESTION_GRADE(data_user._user[y].id, 4, reaction.message);
                          }
                          break;
                        }
                    }
                  //|| data_user._user[y].id == data_donjon.donjon[i].id_creator
                await reaction.message.edit('**⭐DONJON VALIDE⭐** <@!'+ data_donjon.donjon[i].id_creator+'> \n\
*Si il manque un vote, la récompense sera annulée.*\n\
▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️\n' +Description + '▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️\n\
Validation => :white_check_mark:\n\
En attente... => [:x:]');
                  data_donjon.donjon[i].statue = false;
                  break;
                } else {
                await  reaction.message.edit('**UN DONJON A ETE LANCÉ PAR** <@!'+  data_donjon.donjon[i].id_creator+'> \n\
*Si il manque un vote, la récompense sera annulée.*\n\
▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️\n' +Description + '▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️\n\
Validation => :white_check_mark:\n\
En attente... => [:x:]');
                  break;
                }
            }
          }
      }
  }
        //////////////////______DONJON______/////////////////////////
      //////////////////______DONJON______/////////////////////////
    //////////////////______DONJON______/////////////////////////
  //////////////////______DONJON______/////////////////////////
  
});
}

module.exports.bot = bot;