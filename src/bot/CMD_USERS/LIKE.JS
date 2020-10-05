const Discord = require('discord.js');
const { Collection } = require('mongoose');
const  GESTION_GRADE  = require('./GESTION_GRADE.JS');
const SEARCH_INDEX_GUILD  = require('./SEARCH_INDEX_GUILD.JS');
const client = new Discord.Client();
data_user = require('../data/structjson/user.json');
data_guilde = require('../data/structjson/guild.json');

async function LIKE(message)
{
    args = message.content.split(/ +/g);
    /************************************************************ 
                          SECURITY COMMAND;
    *************************************************************/

    if (message.mentions.users.first())
    {
        let new_player = message.mentions.users.first();
        let likeur = message.member.user;
        let index_new_player = 0;
        let index_likeur = 0;
        let channel_s;
        let ind_guild;

        while (data_user._user[index_likeur])
        {
            if (data_user._user[index_likeur].id == likeur.id)
                break;
            index_likeur++
        }
        while (data_user._user[index_new_player])
        {
            if (data_user._user[index_new_player].id == new_player.id)
                break;
            index_new_player++
        }
        if (data_user._user[index_likeur].like_status == true)
            if (data_user._user[index_likeur].like_bonus == false)
                return;
        data_user._user[index_new_player].stars += 1;
        GESTION_GRADE.GESTION_GRADE(data_user._user[index_likeur].id, 2, message);
        console.log('bug ?');
        data_user._user[index_likeur].like_status = true;

        ind_guild = await SEARCH_INDEX_GUILD.SEARCH_INDEX_GUILD(data_user._user[index_likeur].rang_guild);
        if (ind_guild > -1)
        {
            console.log(ind_guild);
            channel_s = await message.guild.channels.cache.find(Collection => Collection.id == data_guilde.channel_all_rewards[ind_guild]);
            channel_s.send('🤖 **Le membre <@!' + data_user._user[index_new_player].id + '> (+ 1 ⭐), il s\'est fait like par <@!' + data_user._user[index_likeur].id +'> !**')
            message.channel.send('🤖 **Le membre <@!' + data_user._user[index_likeur].id + '> a gagné 1 pts d\'xp !**' );
        }
    }   
}

exports.LIKE = LIKE;