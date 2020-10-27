const Discord = require('discord.js');
const client = new Discord.Client();
data_guild = require('../data/structjson/guild.json');
data_user = require('../data/structjson/user.json');

async function ENVOI_restat(message)
{
    message.channel.send('!restat_bonus');
}
async function ENVOI_SAVE(message)
{
    message.channel.send('!save');
}
async function REPEAT_SAVE(message)
{
    command = message.content.split(/ +/g);

    if (command[0] == '!save')
    {
        setInterval(ENVOI_SAVE, 14400000, message);
    }
    if (command[0] == '!restat_bonus')
    {
        for (let i = 0; i < data_user._user.length; i++)
        {
            data_user._user[i].vocal_status = false;
            data_user._user[i].cheat = 0;
            data_user._user[i].pts_voc_status = false;
            data_user._user[i].like_status = false;
            data_user._user[i].like_bonus = false;
            data_user._user[i].mana = data_user._user[i].mana_max;
        }
        setInterval(ENVOI_restat, 14400000 * 3, message);
    }
}

exports.REPEAT_SAVE = REPEAT_SAVE;