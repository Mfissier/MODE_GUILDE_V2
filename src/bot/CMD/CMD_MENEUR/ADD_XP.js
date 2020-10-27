const Discord = require('discord.js');
const client = new Discord.Client();
<<<<<<< HEAD
const { Collection } = require('mongoose');
=======
>>>>>>> 4e084d383c8cd2a586ce34b4a9316ebec82c1165
data_user = require('../../data/structjson/user.json');
data_guilde = require('../../data/structjson/guild.json');

async function ADD_XP(message)
{
    args = message.content.split(/ +/g);
    if (message.mentions.users.first())
    {
        let member_mention = message.mentions.users.first();
        for (let i =0 ; i < data_user._user.length; i++)
        {
            if (data_user._user[i].id == member_mention.id)
            {
<<<<<<< HEAD
                if (args.length < 3)
                {
                    message.channel.send('🤖  **Il manque des arguments**');
                    return;
                }
                if (parseInt(args[2], 10))
                {
                    if (parseInt(args[2], 10) <= 0)
                    {
                        message.channel.send('🤖  **Le nombre ne peux pas être inférieur ou egal à 0**');
                        return;
                    }
                    data_user._user[i].exp_discord += parseInt(args[2], 10);
                message.channel.send('🤖   **Le membre a gagné +' + args[2] +' EXP !**');
                } else {
                    message.channel.send('🤖  **Chiffre incorrect !**');
                    return;
                }
                break;
            }
        }
    } else
        message.channel.send('🤖  **Vous avez oublié de mentionner le membre !**');
=======
                if (args[2])
                    data_user._user[i].exp_discord += parseInt(args[2], 10);
                message.channel.send('L\'utilisateur a +' + args[2] +'  EXP');
                break;
            }
        }
    }
>>>>>>> 4e084d383c8cd2a586ce34b4a9316ebec82c1165
}

exports.ADD_XP = ADD_XP;