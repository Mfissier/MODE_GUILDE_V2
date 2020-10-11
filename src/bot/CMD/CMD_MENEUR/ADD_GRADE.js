const Discord = require('discord.js');
const client = new Discord.Client();
data_user = require('../../data/structjson/user.json');
data_guilde = require('../../data/structjson/guild.json');

async function ADD_GRADE(message)
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
                    data_user._user[i].grade_discord += parseInt(args[2], 10);
                message.channel.send('L\'utilisateur a eu +' + args[2] + 'grade');
                break;
            }
        }
    }
}

exports.ADD_GRADE = ADD_GRADE;