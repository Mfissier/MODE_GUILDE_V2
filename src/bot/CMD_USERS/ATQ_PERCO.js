const Discord = require('discord.js');
const { Collection } = require('mongoose');
const GESTION_GRADE = require('./GESTION_GRADE.JS');
const  SEARCH_INDEX_GUILD  = require('./SEARCH_INDEX_GUILD.JS');

const client = new Discord.Client();
data_user = require('../data/structjson/user.json');
data_guilde = require('../data/structjson/guild.json');
data_perco = require('../data/structjson/perco.json');



async function ATAQ_PERCO(message)
{
    args = message.content.split(/ +/g);
    member_cmd = message.member.user;
    let ind_guild;
    let channel_n;
    if (args.length > 1)
    {
            for (let i = 0; i < data_perco.PVP_PERCO.length; i++)
            {
                console.log(data_perco.PVP_PERCO[i].statue);
                console.log(data_perco.PVP_PERCO[i].groupe_perco_id_chef);
                console.log(member_cmd.id);
                if (member_cmd.id == data_perco.PVP_PERCO[i].groupe_perco_id_chef && data_perco.PVP_PERCO[i].statue == true)
                {
                    message.channel.send('FIND LE CHEF');
                    for (let y = 0; y < data_perco.PVP_PERCO[i].membre_perco_valide_id.length; y++)
                    {
                        for(let j = 0; j < data_user._user.length; j++)
                        {
                            if (data_perco.PVP_PERCO[i].membre_perco_valide_id[y] == data_user._user[j].id)
                            {
                                console.log(data_user._user[j].mana);
                                if (data_user._user[j].mana > 0)
                                {
                                    let nbr_stars_don = 0
                                    if (data_user._user[j].rang_power == 'TUEUR DE PERCEPTEUR')
                                    {
                                        data_user._user[j].stars += 2;
                                        data_user._user[j].mana -= 1;
                                        nbr_stars_don = 2;
                                    } else {
                                        data_user._user[j].stars += 1;
                                        data_user._user[j].mana -= 1;
                                        nbr_stars_don = 1;
                                    }
                                    data_user._user[j].perco_attack_nbr += 1;
                                    ind_guild = SEARCH_INDEX_GUILD.SEARCH_INDEX_GUILD(data_user._user[j].rang_guild);
                                    if (ind_guild < 0)
                                    break;
                                    channel_n = message.guild.channels.cache.find(Collection => Collection.id == data_guild.channel_all_rewards[ind_guild]);
                                    if (channel_n)
                                        channel_n.send('** Le membre <@!'+ data_user._user[j].id +'> à réçu '+ nbr_stars_don +' ⭐ en tuant un percepteur !** Pos :' + args[1])
                                    break;
                                } else {
                                    GESTION_GRADE.GESTION_GRADE(data_user._user[j].id, 2, message);
                                    console.log('AJOUT D\'XP');
                                    break;                            
                                }
                            }
                        }
                    }
                    console.log("???? " + member_cmd.id);
                    for(let j = 0; j < data_user._user.length; j++)
                    {
                        console.log(data_user._user[j].id);
                        if (member_cmd.id == data_user._user[j].id)
                        {
                                console.log('OK ON EST BON ! ou pas');
                                if (data_user._user[j].mana > 0)
                                {
                                data_user._user[j].stars += 2;
                                data_user._user[j].perco_attack_nbr += 1;
                                data_user._user[j].mana -= 1;
                                ind_guild = SEARCH_INDEX_GUILD.SEARCH_INDEX_GUILD(data_user._user[j].rang_guild);
                                console.log(ind_guild);
                                console.log('LE CHEF A BIEN RECU SES ETOILES');
                                if (ind_guild < 0)
                                    break;
                                channel_n = message.guild.channels.cache.find(Collection => Collection.id == data_guild.channel_all_rewards[ind_guild]);
                                if (channel_n)
                                    channel_n.send('** Le membre <@!'+ data_user._user[j].id +'> à réçu 2 ⭐ en tuant un percepteur !Pos : ** ' + args[1])
                            } else {
                                GESTION_GRADE.GESTION_GRADE(data_user._user[j].id, 4, message);                           
                                break; 
                            }
                            message.channel.send('**ATTENTION :**\n**Le chef de groupe <@!' +member_cmd.id+ '> doit envoyer un sreen de la fin du combat.**');
                            break;
                        }
                        
                    }

                }
            }
    }
    
}

exports.ATAQ_PERCO = ATAQ_PERCO;