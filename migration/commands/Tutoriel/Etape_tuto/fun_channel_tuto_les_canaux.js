const Discord = require('discord.js');
const data_syst = require('../../../data/structjson/all_systeme.json');
const { fun_index_users } = require('../../Fun/fun_index_users');
const data_user = require('../../../data/structjson/user.json');

async function fun_channel_tuto_les_canaux(message, command)
{
    let index_user = fun_index_users(message.member.id);
    if (!message.mentions.channels.first()) {
        message.channel.send("🤖 **Vous n'avez mentionné aucun canal...**\n\
<@&"+ data_syst.roles_tuto_5_id +"> *par exemple*");
    }
    message.member.roles.remove(data_syst.roles_tuto_6_id);
    message.member.roles.add(data_syst.roles_tuto_7_id);
    data_user._user[index_user].tuto_rang = data_syst.roles_tuto_7_id;
    let nchan = await message.guild.channels.cache.find(elem => elem.id == data_syst.channel_tuto_les_commandes_id).send("🤖 **<@"+ data_user._user[index_user].id +">**"); 
}
exports.fun_channel_tuto_les_canaux = fun_channel_tuto_les_canaux;