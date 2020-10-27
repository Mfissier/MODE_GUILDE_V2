data_user = require('../data/structjson/user.json');
data_guild = require('../data/structjson/guild.json');

async function COFFRE_ADD(message)
{
    let id_channel_send = message.channel.id
    args = message.content.split(/ +/g);
    console.log(message.content);
    console.log(message.channel.id);
    for (let i = 0; i < data_guild.name_guild.length; i++)
    {
        if (data_guild.channel_finances[i] == id_channel_send)
        {
            if (args[1])
            {
                data_guild.coffre_guild[i] += parseInt(args[1], 10);
                message.channel.send('**'+parseInt(args[1], 10) + ' kamas ont été rajouté dans le coffre !**');
                break;
            }
            break;
        }
    }  
}

exports.COFFRE_ADD = COFFRE_ADD;