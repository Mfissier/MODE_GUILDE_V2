const Discord = require('discord.js');
const data_syst = require('../../../data/structjson/all_systeme.json');
const data_user = require('../../../data/structjson/user.json');
const { fun_index_users } = require('../../Fun/fun_index_users');

async function fun_channel_tuto_question(message, command)
{
    let index_user = fun_index_users(message.member.id);
    if (command[0].toUpperCase() != '!END')
    return (message.channel.send("🤖 La commande est **!END**"));
    await message.member.roles.remove(data_syst.roles_tuto_17_id);
    await message.member.roles.add(data_syst.roles_tuto_18_id);
    data_user._user[index_user].tuto_rang = data_syst.roles_tuto_18_id;
    let nchan = await message.guild.channels.cache.find(elem => elem.id == data_syst.Welcome_id).send("🤖 **<@"+ data_user._user[index_user].id +">**"); 
}
exports.fun_channel_tuto_question = fun_channel_tuto_question;

