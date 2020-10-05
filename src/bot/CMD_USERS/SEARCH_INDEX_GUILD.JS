const Discord = require('discord.js');
const { Collection } = require('mongoose');
const client = new Discord.Client();
data_user = require('../data/structjson/user.json');
data_guilde = require('../data/structjson/guild.json');

function SEARCH_INDEX_GUILD(id_guild)
{
    for (let i = 0; data_guilde.guild[i]; i++)
    {
        if (data_guilde.guild[i] == id_guild)
            return(i);
    }
    return(-1);
}
exports.SEARCH_INDEX_GUILD = SEARCH_INDEX_GUILD;