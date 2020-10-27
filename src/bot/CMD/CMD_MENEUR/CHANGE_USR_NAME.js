const Discord = require('discord.js');
const client = new Discord.Client();
const { Collection } = require('mongoose');
data_user = require('../../data/structjson/user.json');
data_guilde = require('../../data/structjson/guild.json');

async function CHANGE_USR_NAME(message)
{
    args = message.content.split(/ +/g);
    if (message.mentions.users.first())
    {
        let member_mention = message.mentions.users.first();
        for (let i =0 ; i < data_user._user.length; i++)
        {
            if (data_user._user[i].id == member_mention.id)
            {
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
}

exports.CHANGE_USR_NAME = CHANGE_USR_NAME;