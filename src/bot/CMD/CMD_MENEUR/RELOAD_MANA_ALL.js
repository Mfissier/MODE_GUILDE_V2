const Discord = require('discord.js');
const client = new Discord.Client();
const { Collection } = require('mongoose');
data_user = require('../../data/structjson/user.json');
data_guilde = require('../../data/structjson/guild.json');

async function RELOAD_MANA_ALL(message)
{
    args = message.content.split(/ +/g);

        for (let i =0 ; i < data_user._user.length; i++)
        {
            data_user._user[i].mana = parseInt(data_user._user[i].mana_max);
        }
    message.channel.send('🤖  **Le mana a été réinitialisé pour l\'ensemble des membres !**');
}



exports.RELOAD_MANA_ALL = RELOAD_MANA_ALL;