const Discord = require('discord.js');
const client = new Discord.Client();
<<<<<<< HEAD
const { Collection } = require('mongoose');
=======
>>>>>>> 4e084d383c8cd2a586ce34b4a9316ebec82c1165
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
<<<<<<< HEAD
                if (args.length < 2)
                {
                    message.channel.send('🤖  **Il manque des arguments**');
                    return;
                }
                data_user._user[i].mana = parseInt(data_user._user[i].mana_max);
                message.channel.send('🤖  **Le membre a retrouver tout son mana !**');
                break;
            }
        }
    } else
    message.channel.send('🤖  **Vous avez oublié de mentionner le membre !**');
=======
                if (args[1])
                    data_user._user[i].mana = parseInt(data_user._user[i].mana_max);
                    //console.log(data_user._user[i].mana);
                message.channel.send('L\'utilisateur a retrouver son mana');
                break;
            }
        }
    }
>>>>>>> 4e084d383c8cd2a586ce34b4a9316ebec82c1165
}

exports.RELOAD_MANA = RELOAD_MANA;