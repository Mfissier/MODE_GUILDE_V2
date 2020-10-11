const Discord = require('discord.js');
const client = new Discord.Client();
data_user = require('../../data/structjson/user.json');
data_guilde = require('../../data/structjson/guild.json');

async function ADD_PERCO_USR(message)
{
    args = message.content.split(/ +/g);
    if (message.mentions.users.first())
    {
        let member_mention = message.mentions.users.first();
        for (let i =0 ; i < data_user._user.length; i++)
        {
            if (data_user._user[i].id == member_mention.id)
            {
                if (args[2])
                    data_user._user[i].perco_nbr += parseInt(args[2], 10);
                message.channel.send('L\'utilisateur a +' + args[2] +' de PERCO_USR');
                break;
            }
        }
    }
}

exports.ADD_PERCO_USR = ADD_PERCO_USR;