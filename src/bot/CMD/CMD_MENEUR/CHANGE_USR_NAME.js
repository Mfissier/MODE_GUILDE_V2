const Discord = require('discord.js');
const client = new Discord.Client();
<<<<<<< HEAD
const { Collection } = require('mongoose');
=======
>>>>>>> 4e084d383c8cd2a586ce34b4a9316ebec82c1165
data_user = require('../../data/structjson/user.json');
data_guilde = require('../../data/structjson/guild.json');

async function CHANGE_USR_NAME(message)
{
    args = message.content.split(/ +/g);
    if (message.mentions.users.first())
    {
<<<<<<< HEAD
=======
        console.log(args[1]);
>>>>>>> 4e084d383c8cd2a586ce34b4a9316ebec82c1165
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
                    let member_cmd = message.guild.members.cache.find(element =>  element.id == member_mention.id)
                    if (member_cmd)
                    {
                        data_user._user[i].username = args[2];
                        member_cmd.setNickname(args[2]);
                        message.channel.send('L\'utilisateur s\'appel '+args[2]+'');
                    } else {
                        message.channel.send('🤖  **Il y a du y avoir une erreur !**');
                        return;
                    }
                break;
            }
        }
    } else
        message.channel.send('🤖  **Vous avez oublié de mentionner le membre !**');
=======
                if (args[2])
                {

                    let member_cmd = message.guild.members.cache.find(element =>  element.id == member_mention.id)
                    member_cmd.setNickname(args[2]);
                    data_user._user[i].username = args[2];
                
            }
                message.channel.send('L\'utilisateur s\'appel '+args[2]+'');
                break;
            }
        }
    }
>>>>>>> 4e084d383c8cd2a586ce34b4a9316ebec82c1165
}

exports.CHANGE_USR_NAME = CHANGE_USR_NAME;