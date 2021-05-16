const Discord = require('discord.js');
const data_guild = require('../../../data/structjson/guild.json');
const data_syst = require('../../../data/structjson/all_systeme.json');
const data_tuto = require('../../../data/structjson/tutoriel.json');

async function fun_welcome_create(message, command)
{
    let take_channel;
    let take_msg;
    let text = 'Salutation :thumbsup: \n\
Si tu es ici c\'est pour nous rejoindre.\n\
**Ecris le nom de la guilde que tu veux rejoindre !**\n\
> **__LISTE DES GUILDES__**\n';
    let add_txt = "";
    let nbr_guild = 1;
    for (let i = 0; i < data_tuto.id_guild.length; i++)
    {
        if (data_tuto.name_guild[i].length > 1)
            add_txt += '> **'+ (nbr_guild++) +'°) ' + data_tuto.name_guild[i].toUpperCase()  + '**\n';
    }
    if (data_tuto.tuto_statue == false)
    {
        take_channel = await message.guild.channels.cache.find(elem => elem.id == data_syst.Welcome_id);
        take_msg = await take_channel.send(text + add_txt + '*Un copié/collé devrai t\'aider...* :scream:');    
        data_tuto.id_msg_welcome = take_msg.id;
        data_tuto.tuto_statue = true;
    } else
    {
        take_msg = await message.channel.messages.cache.find(elem => elem.id == data_tuto.id_msg_welcome);
        await take_msg.edit(text + add_txt + '*Un copié/collé devrai t\'aider... *:scream:');
    }
}
exports.fun_welcome_create = fun_welcome_create;