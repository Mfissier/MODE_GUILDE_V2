const Discord = require('discord.js');
const data_guild = require('../../../data/structjson/guild.json');
const data_syst = require('../../../data/structjson/all_systeme.json');
const data_tuto = require('../../../data/structjson/tutoriel.json');
const { fun_welcome_create } = require('./fun_welcome_create');

function fun_create_data_tuto(message, command)
{   
    if (!command[1])
        return(message.channel.send('!**Il manque des arguments !**'));
    let nbr = 0;
    for (let i = 0; i < data_guild._guild.length; i++)
    {
        if (command[1].toUpperCase() == data_guild._guild[i].name_guild.toUpperCase())
        {
            data_tuto.id_guild.push(data_guild._guild[i].guild);
            data_tuto.name_guild.push(data_guild._guild[i].name_guild);
            fun_welcome_create(message);    
            return;
        }
    }

}
exports.fun_create_data_tuto = fun_create_data_tuto;