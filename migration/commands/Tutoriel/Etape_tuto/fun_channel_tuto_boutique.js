const Discord = require('discord.js');
const data_syst = require('../../../data/structjson/all_systeme.json');
const data_user = require('../../../data/structjson/user.json');
const { fun_index_users } = require('../../Fun/fun_index_users');

async function fun_channel_tuto_boutique(message, command)
{
    let index_user = fun_index_users(message.member.id);
    if (data_user._user[index_user].tuto_boutique_statue == false)
        return(message.channel.send("🤖 **Tu n'as pas acheté ton rang ! Rends toi dans la <#"+ data_syst.boutique_id +">**"));
    if (command[0].toUpperCase() != '!NEXT')
        return (message.channel.send("🤖 La commande est **!NEXT**"));
    await message.member.roles.remove(data_syst.roles_tuto_15_id);
    await message.member.roles.add(data_syst.roles_tuto_16_id);
    data_user._user[index_user].tuto_rang = data_syst.roles_tuto_16_id;
    let nchan = await message.guild.channels.cache.find(elem => elem.id == data_syst.channel_tuto_résumé_id).send("🤖 **<@"+ data_user._user[index_user].id +">**"); 
}
exports.fun_channel_tuto_boutique = fun_channel_tuto_boutique;

