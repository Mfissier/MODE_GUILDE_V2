verif_user = require('../bot/test');
check_for_create_profil = require('./data/Save/check_for_create_profil');
data_to_bot = require('./data/data_to_bot/data_to_bot_guild');

all_systeme = require ('./data/structjson/all_systeme.json');
data_donjon = require('./data/structjson/donjon_sys.json');
data_user = require('./data/structjson/user.json');
data_perco = require('./data/structjson/perco.json');
data_recrutement = require('./data/structjson/validation_usr.json');

const SEARCH_INDEX_GUILD = require('./CMD_USERS/SEARCH_INDEX_GUILD.JS');
const  GESTION_GRADE  = require('./CMD_USERS/GESTION_GRADE.JS');
const create_all_profil = require('./data/create_all_profil');
const { Collection } = require('mongoose');

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
<<<<<<< HEAD

client.login('NzAzOTI2MTE0ODcwODg2NDEw.XqVsSA.gzZ1QvNrkQkx5gGi1LpJd3gHjBc');
=======
client.login('NzAzOTI2MTE0ODcwODg2NDEw.XqVsSA.xtRtns-SWlaZ6P1W-rrcJN8Edhw');
>>>>>>> 4e084d383c8cd2a586ce34b4a9316ebec82c1165
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
  client.on('guildMemberAdd', (guildMember) => {
    console.log('new_player ???');
    guildMember.roles.add(guildMember.guild.roles.cache.find(role => role.name === "PRESENTATION"));
  });

  client.on('message', async message => {
      let content = message.content.split(" ");
      let command = content[0];
      let args = content.slice(1);
      let prefix = config.prefix;
      let commandfile = client.commands.get(command.slice(prefix.length));
      listen_bot_message_function.listen_bot_message(message, client); 
  });

  client.on('voiceStateUpdate', (oldMember, newMember) => {
    console.log('id member=> ' + oldMember.id);
    
    for (let i = 0; i < data_user._user.length; i++)
    {
      if (data_user._user[i].id == oldMember.id)
      {
        console.log(data_user._user[i].vocal_status);
        if (data_user._user[i].vocal_status == 'false' || data_user._user[i].vocal_status == false)
        {
            for (let y = 0; y < data_guilde.guild.length; y++)
            {
              console.log(data_guilde.guild[y]);
              if (data_guilde.guild[y] == data_user._user[i].rang_guild)
              {

                  // let channel_rewards_vocal = client.channels.cache.find(elem => elem.id == data_guilde.channel_all_rewards[y]);
                  // if (channel_rewards_vocal)
                  //   channel_rewards_vocal.send('**Le membre <@!'+ data_user._user[i].id +'> a gagné 1 :stars: en se connectant en vocal ! **:robot:');
                  // data_user._user[i].stars += 1;
                  // data_user._user[i].vocal_status == true;
                  break;
              }
            }
            break;
        } else
            break;
      }
    }
    let voice_channel;
    //console.log(oldMember.guild.channels.cache.find(elem => elem.id == oldMember.channelID).id  );
  })


client.on('messageReactionAdd', async (reaction, user) => {

	if (reaction.partial) {
		try {
			await reaction.fetch();
		} catch (error) { 
			console.error('Something went wrong when fetching the message: ', error);
			return;
		}
  }
  if (reaction.message)
  {
    if (user.id == '703926114870886410') //703926114870886410 security bot
      return;
    let index_guild = 0;
    let channel_id = reaction.message.channel.id;
    for (let i = 0; i < data_guilde.channel_staff.length; i++)
        if (data_guilde.channel_staff[i] == channel_id)
          index_guild = i;
    for (let i = 1; i < data_recrutement.recrutement.length; i++)
    {
        if (data_recrutement.recrutement[i].id_message == reaction.message.id && data_recrutement.recrutement[i].statue == true)
        {
          if (reaction.emoji.name == '✅')
          {
              console.log('member accepted');
              for (let y = 0; y < data_user._user.length; y++)
              {
                  if (data_user._user[y].id == data_recrutement.recrutement[i].id_usr)
                  {
                      data_user._user[y].rang_guild = data_guilde.guild[index_guild];
                      let member_recrut = reaction.message.guild.members.cache.find(element => element.id == data_recrutement.recrutement[i].id_usr);
                      let roles_add = reaction.message.guild.roles.cache.find(Role => Role.name === 'INITIE');
                      member_recrut.roles.add(roles_add);
                      data_user._user[y].rang_power = 'INITIE';
                      let roles_add_guild = reaction.message.guild.roles.cache.find(Role => Role.id === data_guilde.guild[index_guild]);
                      member_recrut.roles.add(roles_add_guild);
                      data_user._user[y].username = data_recrutement.recrutement[i].username;
                      member_recrut.setNickname(data_recrutement.recrutement[i].username);
                      data_recrutement.recrutement[i].statue = false;
                      let channel_rec = reaction.message.guild.channels.cache.find(Collection => Collection.id == data_guilde.channel_staff_mission[index_guild]);
                      member_recrut.send('**Vous avez été accepté dans la guilde ' + data_guilde.name_guild[index_guild].toUpperCase() + ' ! :partying_face: **');
                      channel_rec.send('**Le membre <@!'+ data_user._user[y].id + '> ** doit être passé au rang INITIE en jeu !');
                      reaction.message.edit('**Le membre a bien été accepté. Il reçoit le rang INITIE ! Welcome <@!'+ data_user._user[y].id +'> !**');

                      for (let x = 0; x < data_user._user.length; x++)
                      {
                        if (data_user._user[x].id == data_recrutement.recrutement[i].id_recruteur)
                        {
                          if (data_user._user[x].rang_power == 'RECRUTEUR')
                          {
                              data_user._user[x].stars += 2;
                              GESTION_GRADE.GESTION_GRADE(data_user._user[x].id, 5, reaction.message);
                              channel_rec = reaction.message.guild.channels.cache.find(Collection => Collection.id == data_guilde.channel_all_rewards[index_guild]);
                              channel_rec.send('** Le membre <@!'+ data_user._user[x].id +'> à reçu 2 ⭐ et 5 xp en recrutant  <@!' + data_user._user[y].id +'>** !')
                              break;
                          } else
                          {
                            data_user._user[x].stars += 1;
                            GESTION_GRADE.GESTION_GRADE(data_user._user[x].id, 2, reaction.message);
                            channel_rec = reaction.message.guild.channels.cache.find(Collection => Collection.id == data_guilde.channel_all_rewards[index_guild]);
                            channel_rec.send('** Le membre <@!'+ data_user._user[x].id +'> à reçu 1 ⭐ et 2 xp en recrutant  <@!' + data_user._user[y].id +'>** !');
                            break;
                          }
                        }
                      }
                      break;
                  }
              }
              for (let y = 0; y < data_user._user.length; y++)
              {
                if (data_user._user[y].id == user.id)
                {
                  data_user._user[y].stars += 1;
                  break;
                }
              }
          }
          if (reaction.emoji.name == '🚫')
          {
            console.log('refusé');
            for (let y = 0; y < data_user._user.length; y++)
            {
                if (data_user._user[y].id == data_recrutement.recrutement[i].id_usr)
                {
                    let member_recrut = reaction.message.guild.members.cache.find(element => element.id == data_recrutement.recrutement[i].id_ussr);
                    data_recrutement.recrutement[i].statue = false;
                    reaction.message.edit('**Le membre <@!'+member_recrut.id +'> s\'est prit un coup de marteau !**');
                    member_recrut.kick('**Vous n\'avez pas été accepté dans la guilde ' + data_guilde.name_guild[index_guild] + '**');
                    break;
                }
            }
          }
          
            // Accepted : remplir la data avec la guilde id + rang + 
            // kik 
        }
    }
  }
///////////////////////////////////___________GROUPE PVP__________///////////////////////////////////
  if (reaction.message)
  {
    for (let i = 1; i < data_perco.PVP_PERCO.length; i++)
    {
      if (data_perco.PVP_PERCO[i].id_groupe_message == reaction.message.id && data_perco.PVP_PERCO[i].statue == true && reaction.emoji.name == '❎' && user.id != data_perco.PVP_PERCO[i].groupe_perco_id_chef && data_perco.PVP_PERCO[i].membre_perco_valide_id.find(element=> element == user.id))
      {

        let nbr_inscrit_statue_on = 0;
        for (let y = 0; y < data_perco.PVP_PERCO[i].membre_perco_valide_id.length; y++)
        {
            if (user.id == data_perco.PVP_PERCO[i].membre_perco_valide_id[y])
            {
              data_perco.PVP_PERCO[i].membre_perco_valide_id[y] = 'x';
              break;
            }
        }
        for (let y = 0; y < data_perco.PVP_PERCO[i].membre_perco_valide_id.length; y++)
        {
          if (data_perco.PVP_PERCO[i].membre_perco_valide_id != 'x')
          {
            nbr_inscrit_statue_on += 1;
            break;
          }
        }
        if (nbr_inscrit_statue_on == 0)
        {
          data_perco.PVP_PERCO[i].statue = false;
          reaction.message.edit('**:cold_face: GROUPE_DELETE :cold_face: **');
        }
        
      }


      if ((data_perco.PVP_PERCO[i].PVP_PERCO_STATUE == true && (data_perco.PVP_PERCO[i].id_groupe_message == reaction.message.id)) 
      || (reaction.emoji.name == '🚫' && user.id == data_perco.PVP_PERCO[i].groupe_perco_id_chef && (data_perco.PVP_PERCO[i].id_groupe_message == reaction.message.id) && data_perco.PVP_PERCO[i].delete == false))
      {
        /*
        console.log('ENTRER DANS LA FONCTION : ')
        console.log("data_perco.PVP_PERCO[i].PVP_PERCO_STATUE = "+ data_perco.PVP_PERCO[i].PVP_PERCO_STATUE + "\n\
        data_perco.PVP_PERCO[i].statue = " +data_perco.PVP_PERCO[i].statue  + "\n\
        data_perco.PVP_PERCO[i].delete = "+ data_perco.PVP_PERCO[i].delete + "\n\
        (data_perco.PVP_PERCO[i].id_groupe_message == reaction.message.id)" + data_perco.PVP_PERCO[i].id_groupe_message);
        */
        let display_inscrit = [];
        if (reaction.emoji.name == '🆗')
        {
          if (data_perco.PVP_PERCO[i].groupe_perco_id_chef == user.id)
          {
            data_perco.PVP_PERCO[i].PVP_PERCO_STATUE = false;
            data_perco.PVP_PERCO[i].statue = true;
            for (let ind_display = 0; ind_display < data_perco.PVP_PERCO[i].membre_perco_valide_id.length; ind_display++)
            {
              if (data_perco.PVP_PERCO[i].membre_perco_valide_id[ind_display] != 'x')
                  display_inscrit.push('<@!'+ data_perco.PVP_PERCO[i].membre_perco_valide_id[[ind_display]]+ '> : [ :✅: ]\n');
            }
            let nbr_inscrit = 0;
            for (let j = 0; j < data_perco.PVP_PERCO[i].membre_perco_valide_id.length; j++)
            {
              if (data_perco.PVP_PERCO[i].membre_perco_valide_id[j] != 'x')
                nbr_inscrit += 1;
            }
            if (nbr_inscrit == 0)
              return;
            reaction.message.edit("**🚨CREATION GROUPE PERCO PAR  <@!"+ data_perco.PVP_PERCO[i].groupe_perco_id_chef +"> 🚨** \n\n\
▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️\n\
"+display_inscrit+"\
▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️\n\
**> GROUPE VALIDE\n\n\
**Pouvoir du chef de groupe  👑 <@!"+ data_perco.PVP_PERCO[i].groupe_perco_id_chef+"> **\n\
> 🚫 **pour fermer ce groupe** \n\
▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️\n\
");
          }
        }
          
        if (reaction.emoji.name == '🚫')
        {
          if (data_perco.PVP_PERCO[i].groupe_perco_id_chef == user.id)
          {
            data_perco.PVP_PERCO[i].PVP_PERCO_STATUE = false;
            data_perco.PVP_PERCO[i].statue = false;
            data_perco.PVP_PERCO[i].delete = true;
            reaction.message.edit('**:cold_face: GROUPE_DELETE :cold_face: **');
            // console.log('GROUPE_DELETE : ' + data_perco.PVP_PERCO[i].PVP_PERCO_STATUE)
            // console.log("data_perco.PVP_PERCO[i].PVP_PERCO_STATUE = "+ data_perco.PVP_PERCO[i].PVP_PERCO_STATUE + "\n\
            // data_perco.PVP_PERCO[i].statue = " +data_perco.PVP_PERCO[i].statue  + "\n\
            // data_perco.PVP_PERCO[i].delete = "+ data_perco.PVP_PERCO[i].delete+ "\n\
            // (data_perco.PVP_PERCO[i].id_groupe_message == reaction.message.id)" + data_perco.PVP_PERCO[i].id_groupe_message);
            // reaction.message.edit('**GROUPE_DELETE !**');
          }
        }
        for (let x = 0; x < data_perco.PVP_PERCO.length; x++)
           if (data_perco.PVP_PERCO[x].PVP_PERCO_STATUE == true)
              if (data_perco.PVP_PERCO[x].groupe_perco_id_chef == user.id)
                return;
        if (user.id != data_perco.PVP_PERCO[i].groupe_perco_id_chef)
        {
          if (reaction.emoji.name == '✅' )
          {
            console.log();
            for (let y = 0; y < data_user._user.length; y++)
            {
                if (data_perco.PVP_PERCO[i].reservation_status == false)
                {
                  if (data_user._user[y].id == user.id)
                  {
                      console.log('find user');
                      for (let z = 0; z < data_perco.PVP_PERCO.length; z++)
                      {
                        if (data_perco.PVP_PERCO[i].membre_perco_valide_id[z] == 'x')
                        { 
                          data_perco.PVP_PERCO[i].membre_perco_valide_id[z] = user.id;
                          console.log('Case vide => enregistrement');
                          break;
                        }
                      }
                      if (!data_perco.PVP_PERCO[i].membre_perco_valide_id.find(element => element == user.id))
                      {
                        let data_assing = [];
                        data_assing = Object.assign(user.id)
                        data_perco.PVP_PERCO[i].membre_perco_valide_id.push(data_assing);
                        console.log('add_member');
                      }
                      if (data_perco.PVP_PERCO[i].membre_perco_valide_id.length == 5)
                            console.log('Le maximum de membre a été fait. Envois du groupe end !!! Mise a jour des donnés du groupe !');
                      else
                      {
                          //__AFFICHAGE__//
                          for (let ind_display = 0; ind_display < data_perco.PVP_PERCO[i].membre_perco_valide_id.length; ind_display++)
                          {
                            if (data_perco.PVP_PERCO[i].membre_perco_valide_id[ind_display] != 'x')
                                display_inscrit.push('<@!'+ data_perco.PVP_PERCO[i].membre_perco_valide_id[[ind_display]]+ '> : [ :✅: ]\n');
                          }
                          let nbr_inscrit = 0;
                          for (let j = 0; j < data_perco.PVP_PERCO[i].membre_perco_valide_id.length; j++)
                          {
                            if (data_perco.PVP_PERCO[i].membre_perco_valide_id[j] != 'x')
                              nbr_inscrit += 1;
                          }
                          reaction.message.edit("**🚨CREATION GROUPE PERCO PAR  <@!"+ data_perco.PVP_PERCO[i].groupe_perco_id_chef +"> 🚨** \n\n\
▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️\n\
"+display_inscrit+"\
▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️\n\
**__Il reste "+ nbr_inscrit +"/4 places !__**\n\n\
**Pouvoir du chef de groupe**  👑 <@!"+ data_perco.PVP_PERCO[i].groupe_perco_id_chef+"> \n\
▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️\n\
> 🆗 **pour valider le groupe** \n\
> 🚫 **pour fermer ce groupe** \n\
▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️\n\n\
**Ce groupe est ouvert à tous** :pirate_flag:\n\
> ✅ **Pour s'inscrire ! **\n\
> ❎ **Pour vous desinscrire !  **\n\
");
                          if (nbr_inscrit == 4)
                          {
                            display_inscrit = [];
                            data_perco.PVP_PERCO[i].PVP_PERCO_STATUE = await false;
                            data_perco.PVP_PERCO[i].statue = await true;
                            for (let ind_display = 0; ind_display < data_perco.PVP_PERCO[i].membre_perco_valide_id.length; ind_display++)
                            {
                              if (data_perco.PVP_PERCO[i].membre_perco_valide_id[ind_display] != 'x')
                                  display_inscrit.push('<@!'+ data_perco.PVP_PERCO[i].membre_perco_valide_id[[ind_display]]+ '> : [ :✅: ]\n');
                            }
                            let nbr_inscrit = 0;
                            for (let j = 0; j < data_perco.PVP_PERCO[i].membre_perco_valide_id.length; j++)
                            {
                              if (data_perco.PVP_PERCO[i].membre_perco_valide_id[j] != 'x')
                                nbr_inscrit += 1;
                            }
                            reaction.message.edit("🚨**CREATION GROUPE PERCO PAR **  <@!"+ data_perco.PVP_PERCO[i].groupe_perco_id_chef +"> 🚨\n\n\
▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️\n\
"+display_inscrit+"\
▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️\n\
** GROUPE VALIDE **\n\n\
**Pouvoir du chef de groupe** \n\
👑 <@!"+ data_perco.PVP_PERCO[i].groupe_perco_id_chef+"> \n\
> 🚫 **pour fermer ce groupe** \n\
▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️\n");
                          }
                      }
                      break;
                    }
                } else {
                  if (data_perco.PVP_PERCO[i].membre_perco_id.find(element => element == user.id))
                  {
                    console.log('===>>> ce membre est bien inscrit');
                    for (let z = 0; z < data_perco.PVP_PERCO.length; z++)
                    {
                      if (data_perco.PVP_PERCO[i].membre_perco_valide_id[z] == 'x')
                      { 
                        data_perco.PVP_PERCO[i].membre_perco_valide_id[z] = user.id;
                        console.log('Case vide => enregistrement');
                        break;
                      }
                    }
                    if (data_perco.PVP_PERCO[i].membre_perco_valide_id.find(element => element == user.id))
                      break;
                    data_perco.PVP_PERCO[i].membre_perco_valide_id.push(user.id);
                    for (let ind_display = 0; ind_display < data_perco.PVP_PERCO[i].membre_perco_id.length; ind_display++)
                          {
                            if (data_perco.PVP_PERCO[i].membre_perco_valide_id[ind_display] != 'x')
                            {
                              if (data_perco.PVP_PERCO[i].membre_perco_id.find(element => element == data_perco.PVP_PERCO[i].membre_perco_valide_id[ind_display]))
                                  display_inscrit.push('<@!'+ data_perco.PVP_PERCO[i].membre_perco_id[ind_display]+ '> : [ :✅: ]\n');
                              else
                                  display_inscrit.push('<@!'+ data_perco.PVP_PERCO[i].membre_perco_id[ind_display]+ '> : [ :x: ]\n');
                            }
                              
                          }
                          let nbr_inscrit = 0;
                          let nbr_total_valide = 0;
                          for (let j = 0; j < data_perco.PVP_PERCO[i].membre_perco_valide_id.length; j++)
                          {
                            if (data_perco.PVP_PERCO[i].membre_perco_valide_id[j] != 'x')
                              nbr_inscrit += 1;
                          }
                          for (let j = 0; j < data_perco.PVP_PERCO[i].membre_perco_id.length; j++)
                          {
                            if (data_perco.PVP_PERCO[i].membre_perco_id[j] != 'x')
                              nbr_total_valide += 1;
                          }
                          
                          reaction.message.edit("**🚨CREATION GROUPE PERCO PAR  <@!"+ data_perco.PVP_PERCO[i].groupe_perco_id_chef +"> 🚨** \n\n\
▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️\n\
"+display_inscrit+"\
▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️\n\
**__Il reste "+ nbr_inscrit +"/"+ data_perco.PVP_PERCO[i].membre_perco_id.length +" places !__**\n\n\
**Pouvoir du chef de groupe  👑 <@!"+ data_perco.PVP_PERCO[i].groupe_perco_id_chef+"> **\n\
▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️\n\
> 🆗 **pour valider le groupe** \n\
> 🚫 **pour fermer ce groupe** \n\
▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️\n\n\
**Ce groupe est reservé aux membres cités :pirate_flag:**\n\
> ✅ **Pour s'inscrire ! **\n\
> ❎ **Pour vous desinscrire !  **\n\
");
                    if (nbr_total_valide == nbr_inscrit)
                    {
                      data_perco.PVP_PERCO[i].PVP_PERCO_STATUE = await false;
                      data_perco.PVP_PERCO[i].statue = await true;
                        display_inscrit = [];
                        for (let ind_display = 0; ind_display < data_perco.PVP_PERCO[i].membre_perco_valide_id.length; ind_display++)
                        {
                          if (data_perco.PVP_PERCO[i].membre_perco_valide_id[ind_display] != 'x')
                              display_inscrit.push('<@!'+ data_perco.PVP_PERCO[i].membre_perco_valide_id[[ind_display]]+ '> : [ :✅: ]\n');
                        }
                        let nbr_inscrit = 0;
                        for (let j = 0; j < data_perco.PVP_PERCO[i].membre_perco_valide_id.length; j++)
                        {
                          if (data_perco.PVP_PERCO[i].membre_perco_valide_id[j] != 'x')
                            nbr_inscrit += 1;
                        }
                        reaction.message.edit("🚨**CREATION GROUPE PERCO PAR  <@!"+ data_perco.PVP_PERCO[i].groupe_perco_id_chef +"> 🚨** \n\n\
▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️\n\
"+display_inscrit+"\
▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️\n\
**GROUPE VALIDE**\n\n\
**Pouvoir du chef de groupe ** 👑 <@!"+ data_perco.PVP_PERCO[i].groupe_perco_id_chef+"> \n\
> 🚫 **pour fermer ce groupe** \n\
▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️\n\
");
                    }
                    break;
                  }
                }
            }
          }
          if (reaction.emoji.name == '❎' )
          {
                if (data_perco.PVP_PERCO[i].membre_perco_valide_id.find(element => element == user.id))
                {
                  
                  for (let y = 0; y < data_perco.PVP_PERCO[i].membre_perco_valide_id.length;  y++)
                  {
                      if (data_perco.PVP_PERCO[i].membre_perco_valide_id[y] == user.id)
                      {
                        if (data_perco.PVP_PERCO[i].membre_perco_id.find(element => element == data_perco.PVP_PERCO[i].membre_perco_valide_id[y]))
                        {
                          for (let j = 0; j < data_perco.PVP_PERCO[i].membre_perco_id.length; j++)
                          {
                              if (data_perco.PVP_PERCO[i].membre_perco_id[j] == data_perco.PVP_PERCO[i].membre_perco_valide_id[y])
                              {
                                data_perco.PVP_PERCO[i].membre_perco_id[j] = 'x';
                                break;
                              }
                          } 
                        }
                        data_perco.PVP_PERCO[i].membre_perco_valide_id[y] = 'x';
                        break;
                      }
                  }
                  if (data_perco.PVP_PERCO[i].reservation_status == false)
                  {
                    for (let ind_display = 0; ind_display < data_perco.PVP_PERCO[i].membre_perco_valide_id.length; ind_display++)
                    {
                      if (data_perco.PVP_PERCO[i].membre_perco_valide_id[ind_display] != 'x')
                          display_inscrit.push('<@!'+ data_perco.PVP_PERCO[i].membre_perco_valide_id[[ind_display]]+ '> : [ :✅: ]\n');
                    }
                    let nbr_inscrit = 0;
                    for (let j = 0; j < data_perco.PVP_PERCO[i].membre_perco_valide_id.length; j++)
                    {
                      if (data_perco.PVP_PERCO[i].membre_perco_valide_id[j] != 'x')
                        nbr_inscrit += 1;
                    }
                    reaction.message.edit("**🚨CREATION GROUPE PERCO PAR  <@!"+ data_perco.PVP_PERCO[i].groupe_perco_id_chef +"> 🚨** \n\n\
▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️\n\
"+display_inscrit+"\
▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️\n\
**__Il reste "+ nbr_inscrit +"/5 places !__**\n\n\
**Pouvoir du chef de groupe  👑 <@!"+ data_perco.PVP_PERCO[i].groupe_perco_id_chef+"> **\n\
▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️\n\
> 🆗 **pour valider le groupe** \n\
> 🚫 **pour fermer ce groupe** \n\
▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️\n\n\
**Ce groupe est ouvert à tous :pirate_flag:**\n\
> ✅ **Pour s'inscrire ! **\n\
> ❎ **Pour vous desinscrire !  **\n\
");
                  } else {
                    for (let ind_display = 0; ind_display < data_perco.PVP_PERCO[i].membre_perco_id.length; ind_display++)
                    {
                      if (data_perco.PVP_PERCO[i].membre_perco_valide_id[ind_display] != 'x')
                      {
                        if (data_perco.PVP_PERCO[i].membre_perco_id.find(element => element == data_perco.PVP_PERCO[i].membre_perco_valide_id[ind_display]))
                            display_inscrit.push('<@!'+ data_perco.PVP_PERCO[i].membre_perco_id[ind_display]+ '> : [ :✅: ]\n');
                        else
                            display_inscrit.push('<@!'+ data_perco.PVP_PERCO[i].membre_perco_id[ind_display]+ '> : [ :x: ]\n');
                      }
                    }
                    let nbr_inscrit = 0;
                    let nbr_total_valide = 0;
                    for (let j = 0; j < data_perco.PVP_PERCO[i].membre_perco_id.length; j++)
                    {
                      if (data_perco.PVP_PERCO[i].membre_perco_id[j] != 'x')
                        nbr_inscrit += 1;
                    }
                    for (let j = 0; j < data_perco.PVP_PERCO[i].membre_perco_valide_id.length; j++)
                    {
                      if (data_perco.PVP_PERCO[i].membre_perco_valide_id[j] != 'x')
                      nbr_total_valide += 1;
                    }
                    if (nbr_inscrit == 0)
                    {
reaction.message.edit("**🚨CREATION GROUPE PERCO PAR  <@!"+ data_perco.PVP_PERCO[i].groupe_perco_id_chef +"> 🚨** \n\n\
▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️\n\
"+display_inscrit+"\
▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️\n\
**__Il reste "+ nbr_inscrit +"/5 places !__**\n\n\
**Pouvoir du chef de groupe  👑 <@!"+ data_perco.PVP_PERCO[i].groupe_perco_id_chef+"> **\n\
▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️\n\
> 🆗 **pour valider le groupe** \n\
> 🚫 **pour fermer ce groupe** \n\
▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️\n\n\
**Ce groupe est ouvert à tous :pirate_flag:**\n\
> ✅ **Pour s'inscrire ! **\n\
> ❎ **Pour vous desinscrire !  **\n\
");
                      data_perco.PVP_PERCO[i].reservation_status = false;
                    } else {
                    reaction.message.edit("**🚨CREATION GROUPE PERCO PAR  <@!"+ data_perco.PVP_PERCO[i].groupe_perco_id_chef +"> 🚨** \n\n\
▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️\n\
"+display_inscrit+"\
▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️\n\
**__Il reste "+ nbr_total_valide  +"/"+ nbr_inscrit +" places !__**\n\n\
**Pouvoir du chef de groupe  👑 <@!"+ data_perco.PVP_PERCO[i].groupe_perco_id_chef+"> **\n\
▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️\n\
> 🆗 **pour valider le groupe** \n\
> 🚫 **pour fermer ce groupe** \n\
▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️\n\n\
**Ce groupe est reservé aux membres cités :pirate_flag:**\n\
> ✅ **Pour s'inscrire ! **\n\
> ❎ **Pour vous desinscrire !  **\n\
");
                    }
                  }
                  console.log(display_inscrit);
                  console.log(data_perco.PVP_PERCO[i].membre_perco_valide_id);
                  console.log(data_perco.PVP_PERCO[i].membre_perco_id);

                }
          }
        }
      }
        
    }
  }
  ////////////////////////////////////////////DATA/////////////////////////////////////////////////////
  /*
        "PVP_PERCO" : [{
        "id_groupe_message" : "",
        "groupe_perco_id_chef" : "",
        "name_of_groupe" : "",
        "PVP_PERCO_STATUE" : false,
        "membre_perco_invitation_id" : [],
        "membre_perco_id" : [],
        "reservation_status" : false,
        "membre_perco_valide_id" : [],
        "delete_group" : false, 
        "time_create" : "",
        "time_for_valid" : "",
        "ATQ_STATUE" : false,
        "WIN_LOST" : ""
        🆗
        🚫 
        ✅
        ❎
  */
  ///////////////////////////////////___________GROUPE PVP__________///////////////////////////////////
  let channel_s;
  let ind_guild;
  /////////////////////////////_________________RANG MUSE_____________________________//////////////////////////
  if (reaction.message)
  {
    let url_find = reaction.message.attachments.map(Collection => Collection.url);
    if (url_find.length > 0)
    {
        for (let i = 1; i < data_user._user.length; i++)
        {
            console.log(url_find[0].indexOf(data_user._user[i].id));
            console.log(url_find[0]);
            if(reaction.message.author.id == data_user._user[i].id)
            {
              console.log(reaction.emoji.name);
            if (reaction.emoji.name == '🎨')
            {
              if (data_user._user[i].rang_power == "MUSE")
              {
                data_user._user[i].muse_xp += 1;
                console.log(data_user._user[i].muse_xp);
                if (data_user._user[i].muse_xp >= 5)
                {
                  if (data_user._user[i].mana > 0)
                  {
                      data_user._user[i].mana -= 1;
                      data_user._user[i].stars += 1;
                      ind_guild = await SEARCH_INDEX_GUILD.SEARCH_INDEX_GUILD(data_user._user[i].rang_guild);
                      if (ind_guild >= 0)
                        channel_s = await reaction.message.guild.channels.cache.find(Collection => Collection.id == data_guilde.channel_all_rewards[ind_guild]);
                      if (channel_s)
                        await channel_s.send('Le membre <@!' + data_user._user[i].id + '> à gagné 1 ⭐ et perds 1 💧');
                  } 
                    await GESTION_GRADE.GESTION_GRADE(data_user._user[i].id, 5, reaction.message);
                } 
                  
              }
              }
              console.log('ici');
              console.log(data_user._user[i].id);
              break;
            }
        }
      }
  }
/////////////////////////////_________________RANG MUSE_____________________________//////////////////////////

//////////////////////////////////////////////////////////////////////////////////////
        //////////////////______DONJON______/////////////////////////
        //////////////////______DONJON______/////////////////////////
        //////////////////______DONJON______/////////////////////////
        //////////////////______DONJON______/////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
  for (let i = 0  ; i < data_donjon.donjon.length; i++) {
      if (data_donjon.donjon[i].id_message == reaction.message.id ) {
        let nbr_stars_don = 0;
          let all_users = reaction.users.cache.map(Collection => Collection);
          all_users = all_users.map(all_users => all_users.id);

          for (let y = 0; y < data_donjon.donjon[i].id_inscris.length ; y++) {
            if (data_donjon.donjon[i].statue == false)
              break;
            if (all_users.find(all_users => all_users == data_donjon.donjon[i].id_inscris[y])) {
                let Description = [];
                if (data_donjon.donjon[i].id_inscris_on.find(Element => Element == all_users[all_users.length - 1]))
                  break;
                data_donjon.donjon[i].id_inscris_on = all_users;
                if (reaction._emoji.name == '✅')
                  data_donjon.donjon[i].nbr_on += 1;
                for (let j = 0; j < data_donjon.donjon[i].id_inscris.length; j++) {
                    if (data_donjon.donjon[i].id_inscris_on.find(Element => Element == data_donjon.donjon[i].id_inscris[j]))
                      Description.push('<@!'+data_donjon.donjon[i].id_inscris[j]+ '> : [ :✅: ]\n'); 
                    else
                       Description.push('<@!'+data_donjon.donjon[i].id_inscris[j]+ '> : [ :x: ]\n'); 
                }
                if (data_donjon.donjon[i].nbr_on >= data_donjon.donjon[i].nbr_on_max){
                  console.log(data_donjon.donjon[i].id_inscris.length);
                  for (let j = 0; j < data_donjon.donjon[i].id_inscris.length; j++) {
                    for (let y = 1; y < data_user._user.length; y++) {
                        if (data_user._user[y].id == data_donjon.donjon[i].id_inscris[j]) {
                          if (data_user._user[y].mana > 0) {
                  
                            if (data_user._user[y].rang_power == 'ESPION')
                            {
                              nbr_stars_don = 2;
                              data_user._user[y].mana -= 1;
                              data_user._user[y].stars += 2;
                            } else
                            {
                              data_user._user[y].mana -= 1;
                              data_user._user[y].stars += 1;
                              nbr_stars_don = 1;
                            }

                            data_user._user[y].inscription_donjon = 0;
                            await GESTION_GRADE.GESTION_GRADE(data_user._user[y].id, 4, reaction.message);
                            if (data_user._user[y].rang_guild) {
                                ind_guild = await SEARCH_INDEX_GUILD.SEARCH_INDEX_GUILD(data_user._user[y].rang_guild);
                                  channel_s = await reaction.message.guild.channels.cache.find(Collection => Collection.id == data_guilde.channel_all_rewards[ind_guild]);
                                  channel_s.send('Le membre <@!' + data_user._user[y].id + '> à gagné '+ nbr_stars_don + ' ⭐ et perds 1 💧');
                            }
                          }
                          else {
                            GESTION_GRADE.GESTION_GRADE(data_user._user[y].id, 4, reaction.message);
                            data_user._user[y].inscription_donjon = 0;
                          }
                          break;
                        }
                    }
                  }
                    for (let y = 1; y < data_user._user.length; y++) {
                        if (data_user._user[y].id == data_donjon.donjon[i].id_creator) {
                          if (data_user._user[y].mana > 0) {
                            if (data_user._user[y].rang_power == 'ESPION')
                            {
                              nbr_stars_don = 2;
                              data_user._user[y].mana -= 1;
                              data_user._user[y].stars += 2;
                            } else
                            {
                              data_user._user[y].mana -= 1;
                              data_user._user[y].stars += 1;
                              nbr_stars_don = 1;
                            }
                            data_user._user[y].inscription_donjon = 0;
                            GESTION_GRADE.GESTION_GRADE(data_user._user[y].id, 4, reaction.message);
                            if (data_user._user[y].rang_guild) {
                                ind_guild = SEARCH_INDEX_GUILD.SEARCH_INDEX_GUILD(data_user._user[y].rang_guild);
                                channel_s = reaction.message.guild.channels.cache.find(Collection => Collection.id == data_guilde.channel_all_rewards[ind_guild]);
                                channel_s.send('Le membre <@!' + data_user._user[y].id + '> à gagné '+ nbr_stars_don +' ⭐ et perds 1 💧');
                            }
                          }
                          else {
                            data_user._user[y].inscription_donjon = 0;
                            GESTION_GRADE.GESTION_GRADE(data_user._user[y].id, 4, reaction.message);
                          }
                          break;
                        }
                    }
                  reaction.message.edit('**⭐DONJON VALIDE⭐** <@!'+ data_donjon.donjon[i].id_creator+'> \n\
*Si il manque un vote, la récompense sera annulée.*\n\
**UN SREEN EST OBLIGATOIRE POUR EVITER LE COUP DE MARTEAU**\n\
▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️\n' +Description + '▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️\n\
Validation => :white_check_mark:\n\
En attente... => [:x:]');
                  data_donjon.donjon[i].statue = false;
                  break;
                } else {
                  reaction.message.edit('**UN DONJON A ETE LANCÉ PAR** <@!'+  data_donjon.donjon[i].id_creator+'> \n\
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
  //////////////////////////////////////////////////////////////////////////////////////
          //////////////////______DONJON______/////////////////////////
          //////////////////______DONJON______/////////////////////////
          //////////////////______DONJON______/////////////////////////
          //////////////////______DONJON______/////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////
});
}
module.exports.bot = bot;