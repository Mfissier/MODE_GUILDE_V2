const Discord = require('discord.js');
const { Collection } = require('mongoose');
const SEARCH_INDEX_GUILD = require('./SEARCH_INDEX_GUILD.JS');
const client = new Discord.Client();
data_user = require('../data/structjson/user.json');
data_guilde = require('../data/structjson/guild.json');

function GESTION_GRADE(idmember, nbr_xp, message)
{
    let index_channel = message.channel.id;
    let index_guilde;
        for (let i = 0; i < data_user._user.length; i++)
        {
            if (data_user._user[i].id == idmember)
            {
                data_user._user[i].exp_discord += nbr_xp;
                if (data_user._user[i].exp_discord > data_user._user[i].exp_discord_max)
                {
                    data_user._user[i].exp_discord_max += 5;
                    if (data_user._user[i].grade_discord == data_user._user[i].grade_discord_max)
                        return; 
                    data_user._user[i].grade_discord += 1;
                    data_user._user[i].exp_discord = 0;
                    data_user._user[i].stars += 1;
                    if (message && data_user._user[i].rang_guild)
                    {
                        let ind_guild = SEARCH_INDEX_GUILD.SEARCH_INDEX_GUILD(data_user._user[i].rang_guild);
                        if (ind_guild == -1)
                            return;
                        let channel_s = message.guild.channels.cache.find(Collection => Collection.id == data_guilde.channel_all_rewards[ind_guild]);
                        if (!channel_s)
                            return;
                        channel_s.send('**Le membre <@!'+ data_user._user[i].id +'> a monté d\'un grade [+ 1 ⭐] !**');
                    }   
                }
            }
        }
}
exports.GESTION_GRADE = GESTION_GRADE;