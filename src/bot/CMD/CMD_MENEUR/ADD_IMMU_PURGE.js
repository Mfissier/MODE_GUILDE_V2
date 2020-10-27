const Discord = require('discord.js');
const client = new Discord.Client();
const { Collection } = require('mongoose');
data_user = require('../../data/structjson/user.json');
data_guilde = require('../../data/structjson/guild.json');

async function ADD_IMMU_PURGE(message)
{
    args = message.content.split(/ +/g);
    if (message.mentions.users.first())
    {
        let member_mention = message.mentions.users.first();
        for (let i =0 ; i < data_user._user.length; i++)
        {
            if (data_user._user[i].id == member_mention.id)
            {
                if (args.length < 2)
                {
                    message.channel.send('🤖  **Il manque des arguments**');
                    return;
                }
                data_user._user[i].purge_immu_status = true;
                message.channel.send('🤖  **Le membre est maintenant Immunisé**');
                break;
            }
        }
    } else
        message.channel.send('🤖  **Vous avez oublié de mentionner le membre !**');
}

exports.ADD_IMMU_PURGE = ADD_IMMU_PURGE;