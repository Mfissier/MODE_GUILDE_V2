const Discord = require('discord.js');
const { Collection } = require('mongoose');
const client = new Discord.Client();
data_user = require('../data/structjson/user.json');
data_guilde = require('../data/structjson/guild.json');

async function BOUTIQUE_MANA(message)
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
            if (data_user._user[i].mana_max > 6)
            {
                message.channel.send('🤖  **Vous ne pouvez pas avoir plus de 6 de mana au maximum !**')
                return;
            }
            if (data_user._user[i].stars < 4)
            {
                message.channel.send('🤖  **Vous n\'avez pas assez de :star: pour acheter cette article !**')
                return;
            }
            data_user._user[i].mana_max += 1;
            data_user._user[i].mana += 1;
            data_user._user[i].stars -= 4;
            let channel_s = message.guild.channels.cache.find(Collection => Collection.id == data_guilde.channel_all_rewards[index_guild]);
            if (!channel_s)
                return;
            channel_s.send('**Le membre <@!'+ data_user._user[i].id +'> a acheté 1 💧max!**');
            break;
        }
    }
}
exports.BOUTIQUE_MANA = BOUTIQUE_MANA;