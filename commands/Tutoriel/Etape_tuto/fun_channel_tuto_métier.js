const Discord = require('discord.js');
const data_syst = require('../../../data/structjson/all_systeme.json');
const data_user = require('../../../data/structjson/user.json');
const { fun_index_users } = require('../../Fun/fun_index_users');

async function fun_channel_tuto_métier(message, command)
{
    if (command[0].toUpperCase() != '!ACHAT')
        return (message.channel.send("🤖 La commande est **!ACHAT**"));
    await message.member.roles.remove(data_syst.roles_tuto_14_id);
    await message.member.roles.add(data_syst.roles_tuto_15_id);
    let index_user;
    index_user = fun_index_users(message.member.id);
    data_user._user[index_user].tuto_rang = data_syst.roles_tuto_15_id;
    if (data_user._user[index_user].stars < 10)
        data_user._user[index_user].stars = 10;
    let nchan = await message.guild.channels.cache.find(elem => elem.id == data_syst.channel_tuto_boutique_id).send("🤖 **<@"+ data_user._user[index_user].id +">**"); 
}
exports.fun_channel_tuto_métier = fun_channel_tuto_métier;

