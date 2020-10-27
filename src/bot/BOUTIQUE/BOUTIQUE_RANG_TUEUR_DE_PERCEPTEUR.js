const Discord = require('discord.js');
const { Collection } = require('mongoose');
const client = new Discord.Client();
data_user = require('../data/structjson/user.json');
data_guilde = require('../data/structjson/guild.json');

async function BOUTIQUE_RANG_TUEUR_DE_PERCEPTEUR(message)
{
    cmd_user = message.member.user;
    id_channel = message.channel.id; 
    let args = message.content.split(/ +/g);
    let name_rang = 'TUEUR';
    if (args.length > 1)
    {
        if (args[1].toUpperCase() != name_rang.toUpperCase())
        return;

    } else
        return;
    
    index_guild = 0;
    for (let i = 0; i < data_guilde.channel_boutique.length; i++)
    {
        if (id_channel == data_guilde.channel_boutique[i])
        {
            index_guild = i;
            break;
            // START !
        }
        index_guild = -1;
    }
    if (index_guild == -1)
        return;   
        for (let i = 0; i < data_user._user.length; i++)
        {
            if (data_user._user[i].id == cmd_user.id)
            {
                if (data_user._user[i].rang_power == 'TUEUR DE PERCEPTEUR')
                {
                    message.channel.send('🤖  **Vous avez déjà le rang TUEUR DE PERCEPTEUR !**')
                    return;
                }
                if (data_user._user[i].stars < 4)
                {
                    message.channel.send('🤖  **Vous n\'avez pas assez de :star: pour acheter cet article !**')
                    return;
                }
                data_user._user[i].stars -= 4;
                data_user._user[i].rang_power = 'TUEUR DE PERCEPTEUR';
                let roles_find_user = message.member._roles;
                for (let x = 0; x < data_all_system.ALL_RANGS.length; x++)
                {
                    if (roles_find_user.find(element => element == message.guild.roles.cache.find(element => element.name == data_all_system.ALL_RANGS[x]).id))
                        await message.member.roles.remove(message.guild.roles.cache.find(element => element.name == data_all_system.ALL_RANGS[x]).id);
                }
                message.member.roles.add(message.guild.roles.cache.find(element => element.name == 'TUEUR DE PERCEPTEUR'));
                console.log(message.member._roles);
                console.log(data_all_system.ALL_RANGS);
                let channel_s = message.guild.channels.cache.find(Collection => Collection.id == data_guilde.channel_all_rewards[index_guild]);
                if (!channel_s)
                    return;
                channel_s.send('**Le membre <@!'+ data_user._user[i].id +'> est devenu un TUEUR DE PERCEPTEUR !**');
                channel_s = message.guild.channels.cache.find(Collection => Collection.id == data_guilde.channel_staff_mission[index_guild]);
                if (!channel_s)
                    return;
                channel_s.send('** <@&'+ data_guild.staff[index_guild] +'> \n\
    Le membre <@!' + data_user._user[i].id + '> doit recevoir le rang __TUEUR DE PERCEPTEUR__ en jeu !**');
                break;
            }
        }
}
exports.BOUTIQUE_RANG_TUEUR_DE_PERCEPTEUR = BOUTIQUE_RANG_TUEUR_DE_PERCEPTEUR;