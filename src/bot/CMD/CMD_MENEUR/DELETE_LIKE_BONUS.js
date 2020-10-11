const Discord = require('discord.js');
const client = new Discord.Client();
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
}

exports.DELETE_LIKE_BONUS = DELETE_LIKE_BONUS;