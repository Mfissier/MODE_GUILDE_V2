const Discord = require('discord.js');
const client = new Discord.Client();
<<<<<<< HEAD
const { Collection } = require('mongoose');
=======
>>>>>>> 4e084d383c8cd2a586ce34b4a9316ebec82c1165
data_user = require('../../data/structjson/user.json');
data_guilde = require('../../data/structjson/guild.json');

async function DELETE_LIKE_BONUS(message)
{
    args = message.content.split(/ +/g);
    if (message.mentions.users.first())
    {
        let member_mention = message.mentions.users.first();
        for (let i =0 ; i < data_user._user.length; i++)
        {

            if (data_user._user[i].id == member_mention.id)
<<<<<<< HEAD
            {
                if (args.length < 2)
                {
                    message.channel.send('🤖  **Il manque des arguments**');
                    return;
                }
                data_user._user[i].like_bonus = false;
                console.log("like_bonus_status" + data_user._user[i].like_status);
                message.channel.send('🤖  **Le bonus a été disliké pour le membre !**');
                break;
            }
        }
    } else
    message.channel.send('🤖  **Vous avez oublié de mentionner le membre !**');
=======
                {
                    if(args[1])
                    {
                        data_user._user[i].like_bonus = false;
                        console.log("like_bonus_status" + data_user._user[i].like_status);
                        message.channel.send('Le bonus est disliké =)');
                        break;
                    }
             
                }
        }
    }
>>>>>>> 4e084d383c8cd2a586ce34b4a9316ebec82c1165
}

exports.DELETE_LIKE_BONUS = DELETE_LIKE_BONUS;