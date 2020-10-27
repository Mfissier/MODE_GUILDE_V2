const Discord = require('discord.js');
const { Collection } = require('mongoose');
const client = new Discord.Client();
data_user = require('../data/structjson/user.json');
data_guilde = require('../data/structjson/guild.json');

async function BOUTIQUE_PERCO(message)
{
    cmd_user = message.member.user;
    id_channel = message.channel.id;
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
            if (data_user._user[i].perco_nbr > data_user._user[i].perco_max)
            {
                message.channel.send('🤖  **Vous ne pouvez pas avoir plus d'+ data_user._user[i].perco_max +' de percepteur au maximum !**')
                return;
            }
            if (data_user._user[i].stars < 15)
            {
                message.channel.send('🤖  **Vous n\'avez pas assez de :star: pour acheter cette article !**')
                return;
            }
            data_user._user[i].perco_nbr += 1;
            data_user._user[i].stars -= 15;
            let channel_s = message.guild.channels.cache.find(Collection => Collection.id == data_guilde.channel_all_rewards[index_guild]);
            if (!channel_s)
                return;
            channel_s.send('**Le membre <@!'+ data_user._user[i].id +'> a gagner un slot de percepteur !**');
            channel_s = message.guild.channels.cache.find(Collection => Collection.id == data_guilde.channel_staff_mission[index_guild]);
            if (!channel_s)
                return;
            channel_s.send('** <@&'+ data_guild.staff[index_guild] +'> \n\
Le membre <@!' + data_user._user[i].id + '> doit recevoir le droit de poser un percepteur !**');
            break;
        }
    }
}
exports.BOUTIQUE_PERCO = BOUTIQUE_PERCO;