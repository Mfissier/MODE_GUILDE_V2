const Discord = require('discord.js');
const data_syst = require('../../../data/structjson/all_systeme.json');
const { fun_index_users } = require('../../Fun/fun_index_users');
const data_user = require('../../../data/structjson/user.json');

async function fun_channel_tuto_demarrage(message, command)
{
    let index_user = fun_index_users(message.member.id);
    if (command[0].toUpperCase() != '!GOGOGO')
        return (message.channel.send("🤖 La commande est **!GOGOGO**"));
    await message.member.roles.remove(data_syst.roles_tuto_9_id);
    await message.member.roles.add(data_syst.roles_tuto_10_id);
    data_user._user[index_user].tuto_rang = data_syst.roles_tuto_10_id;
    let nchan = await message.guild.channels.cache.find(elem => elem.id == data_syst.channel_tuto_etoiles_id).send("🤖 **<@"+ data_user._user[index_user].id +">**"); 
}
exports.fun_channel_tuto_demarrage = fun_channel_tuto_demarrage;