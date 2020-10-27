const Discord = require('discord.js');
const client = new Discord.Client();
const { Collection } = require('mongoose');
data_user = require('../../data/structjson/user.json');
data_guilde = require('../../data/structjson/guild.json');

async function RESTART_BONUS_ALL(message)
{
    args = message.content.split(/ +/g);

        for (let i =0 ; i < data_user._user.length; i++)
        {
            data_user._user[i].like_bonus = false;
            data_user._user[i].like_status = false;
            data_user._user[i].vocal_status = false;

        }
    message.channel.send('🤖  ** Tous les membres ont leurs bonus à zero!**');
}



exports.RESTART_BONUS_ALL = RESTART_BONUS_ALL;