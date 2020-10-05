const Discord = require('discord.js');
const client = new Discord.Client();
data_user = require('../../data/structjson/user.json');
data_guilde = require('../../data/structjson/guild.json');

async function ADD_USR_IN_GUILD(message)
{
    args = message.content.split(/ +/g);
    if (message.mentions.users.first())
    {
        let member_mention = message.mentions.users.first();
        let index_member_mention = 0;
        while(data_user._user[index_member_mention])
        {
            if (data_user._user[index_member_mention].id == member_mention.id)
                break;
            index_member_mention++;
        }
        console.log(data_user._user[index_member_mention].id);
        if (args.length <= 2)
        {
            message.channel.send('🤖 **Il manque des arguments !**');
            return;
        }
        
    }
}

exports.ADD_USR_IN_GUILD = ADD_USR_IN_GUILD;