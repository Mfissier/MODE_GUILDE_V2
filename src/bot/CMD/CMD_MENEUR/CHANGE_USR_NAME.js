const Discord = require('discord.js');
const client = new Discord.Client();
data_user = require('../../data/structjson/user.json');
data_guilde = require('../../data/structjson/guild.json');

async function CHANGE_USR_NAME(message)
{
    args = message.content.split(/ +/g);
    if (message.mentions.users.first())
    {
        console.log(args[1]);
        let member_mention = message.mentions.users.first();
        for (let i =0 ; i < data_user._user.length; i++)
        {
            if (data_user._user[i].id == member_mention.id)
            {
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
}

exports.CHANGE_USR_NAME = CHANGE_USR_NAME;