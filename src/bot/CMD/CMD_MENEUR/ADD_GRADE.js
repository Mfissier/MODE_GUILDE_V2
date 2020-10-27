const Discord = require('discord.js');
const client = new Discord.Client();
const { Collection } = require('mongoose');
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
                    data_user._user[i].grade_discord += parseInt(args[2], 10);
                    message.channel.send('🤖  **Le membre a eu +' + args[2] + 'grade**');
                } else {
                    message.channel.send('🤖  **CHIFFRE INCORRECT !**');
                    return;
                }
                break;
            }
        }
    } else
        message.channel.send('🤖  **Vous avez oublié de mentionner le membre !**');
}
//message.channel.send('🤖  **Il manque des arguments**');
exports.ADD_GRADE = ADD_GRADE;