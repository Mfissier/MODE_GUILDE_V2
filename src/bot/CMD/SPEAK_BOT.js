const Discord = require('discord.js');
const client = new Discord.Client();
data_guild = require('../data/structjson/guild.json');
data_user = require('../data/structjson/user.json');

async function SPEAK_BOT(message)
{
    args = message.content.split(/ +/g);
    channel_n = await message.guild.channels.cache.find(Collection => Collection.id == '765135901293805569');
    
    let argument = '';
    for(let i = 1; i < args.length; i++)
    {
        argument += args[i];
        argument += ' ';
    }
    channel_n.send(argument);
}
exports.SPEAK_BOT = SPEAK_BOT;