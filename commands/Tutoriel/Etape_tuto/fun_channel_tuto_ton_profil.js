const Discord = require('discord.js');
const data_syst = require('../../../data/structjson/all_systeme.json');
const { fun_index_guild } = require('../../Fun/fun_index_guild');
const data_user = require('../../../data/structjson/user.json');
const { fun_index_users } = require('../../Fun/fun_index_users');
async function fun_channel_tuto_ton_profil(message, command)
{   
    index_user = await fun_index_users(message.member.id);
    if (command[0].toUpperCase() != '!NEXT')
        return (message.channel.send("🤖 La commande est **!NEXT**"));
    if (data_user._user[index_user].tuto_profil == false)
        return(message.channel.send("🤖 **Tu n'as vérifier ton profil ! Rends toi ici => <#"+ data_syst.Profil_id +">**"));
    await message.member.roles.remove(data_syst.roles_tuto_12_id);
    await message.member.roles.add(data_syst.roles_tuto_13_id);
    data_user._user[index_user].tuto_rang = data_syst.roles_tuto_13_id;
    let nchan = await message.guild.channels.cache.find(elem => elem.id == data_syst.channel_tuto_cmd_id).send("🤖 **<@"+ data_user._user[index_user].id +">**"); 
}
exports.fun_channel_tuto_ton_profil = fun_channel_tuto_ton_profil;