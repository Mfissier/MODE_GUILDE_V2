const Discord = require('discord.js');
const { Collection, set } = require('mongoose');
const { destroy_Bot } = require('../restart_and_close_bot');
const client = new Discord.Client();
data_user = require('../data/structjson/user.json');
data_tuto = require('../data/structjson/tutoriel.json');
data_guild = require('../data/structjson/guild.json');
data_recrutement = require('../data/structjson/validation_usr.json');
fs = require('fs');


async function JESUIS(message)
{
  let channel_id = message.channel.id;
  let cmd_member = message.member.user;
  args = message.content.split(/ +/g);
console.log(message.content);
  let channel_presentation = message.guild.channels.cache.find(Collection => Collection.name == '『📋』bienvenu');;
  if (channel_id == channel_presentation.id) {
    console.log(message.content.indexOf('&'));
    if ((message.content.indexOf('&') > -1) || (message.content.indexOf('#') > -1))
    {
        message.channel.send('🤖 **Tu as du cité un rang et non pas un membre pour la personne qui t\'as recruté !**');
        return;
    }
    if (cmd_member.id == message.mentions.users.first().id)
    {
        message.channel.send('🤖 **Tu ne peux pas te recruter toi-même.**');
        return;
    }
           if (!message.mentions.users.first()) {

                message.channel.send('🤖 **Tu n\'as pas mentionné ton recruteur :** \n> \
**Met un @ dans le chat et cherche le nom de ton recruteur !**')
           }
           if (args.length < 4)
           {
            message.channel.send('🤖 **Il manque un ou plusieurs arguments !**')
            return;
           }
               
           let ok_find_guild = 0;
           let index_guild = 0;
           for (let i = 0; i < data_guild.name_guild.length; i++) {
                if(data_guild.name_guild[i].toUpperCase() == args[2].toUpperCase()) {
                    ok_find_guild = 1;
                    index_guild = i;
                    break;
                }
           }
           if (ok_find_guild == 0){
                let description = [];
                for (let i = 0; i < data_guild.name_guild.length; i++)
                description.push(' ' +data_guild.name_guild[i] +' ');
                message.channel.send('🤖 **Je n\'ai pas trouvé ta guilde !\n\
Liste des guildes :**\n> ' + description);
            }
            else {
               channel_n = message.guild.channels.cache.find(Collection => Collection.id == data_guild.channel_staff[index_guild]);
                if (channel_n.id) {
                    console.log('RECHERCHE UTILISATEUR');
                    for(let i = 0; data_user._user.length; i++)
                    {
                        if (data_user._user[i].id == message.member.user.id)
                        {
                            data_user._user[i].username = args[1];
                            console.log('user_find');

                            break;
                        }
                    }
                    role_p = message.guild.roles.cache.find(Role => Role.name === 'BIENVENU');
                    message.member.roles.remove(role_p.id);
                    let new_object = await Object.assign({},data_recrutement.recrutement[0]);
                    data_recrutement.recrutement.push(new_object);

                    data_recrutement.recrutement[data_recrutement.recrutement.length - 1].statue = true;
                    let id_user_cp;
                    id_user_cp = cmd_member.id;
                    data_recrutement.recrutement[data_recrutement.recrutement.length - 1].id_usr = id_user_cp;
                    data_recrutement.recrutement[data_recrutement.recrutement.length - 1].id_recruteur = message.mentions.users.first().id;
                    data_recrutement.recrutement[data_recrutement.recrutement.length - 1].username = args[1];
                    console.log('id_usr' +data_recrutement.recrutement[data_recrutement.recrutement.length - 1].id_usr);

                    message.member.send(':robot:  Bientôt parmis nous !\n\
                    Ton dossier est en train d\'être examiné par un chef de la guilde **' +  data_guild.name_guild[index_guild].toUpperCase() + '**, tu auras accès à plus de channels une fois validé\n\
**A très bientôt !**' );
                    let sethannel = await channel_n.send('Le membre <@!'+ cmd_member.id +'> demande à faire parti de la guilde.\n\
Son pseudo est => '+ args[1]);
                    console.log(sethannel.id);
                    await sethannel.react("✅");
                    await sethannel.react("🚫");
                    let id_message = sethannel.id;
                    data_recrutement.recrutement[data_recrutement.recrutement.length - 1].id_message = id_message;
                    await data_user._user.push(new_object);
                    
                }
            }         
  }
}
exports.JESUIS = JESUIS;