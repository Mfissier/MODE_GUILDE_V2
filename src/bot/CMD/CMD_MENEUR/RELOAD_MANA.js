const Discord = require('discord.js');
const client = new Discord.Client();
data_user = require('../../data/structjson/user.json');
data_guilde = require('../../data/structjson/guild.json');

async function RELOAD_MANA(message)
{
    args = message.content.split(/ +/g);
    if (message.mentions.users.first())
    {
        let member_mention = message.mentions.users.first();
        for (let i =0 ; i < data_user._user.length; i++)
        {
            if (data_user._user[i].id == member_mention.id)
            {
                if (args[1])
                    data_user._user[i].mana = parseInt(data_user._user[i].mana_max);
                    //console.log(data_user._user[i].mana);
                message.channel.send('L\'utilisateur a retrouver son mana');
                break;
            }
        }
    }
}

exports.RELOAD_MANA = RELOAD_MANA;