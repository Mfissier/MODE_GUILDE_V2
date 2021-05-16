const Discord = require('discord.js');
const data_syst = require('../../../data/structjson/all_systeme.json');
const { fun_index_users } = require('../../Fun/fun_index_users');
const data_user = require('../../../data/structjson/user.json');
const data_ins = require('../../../data/structjson/inscription.json');

async function fun_channel_tuto_level(message, command)
{
    let index_user = fun_index_users(message.member.id);
    if (!parseInt(command[0], 10)){
        message.channel.send("🤖 **Tu dois écrire ton niveau et donc un chiffre !**");
        return;
    } else if (parseInt(command[0], 10) > 200 || parseInt(command[0], 10) < 0) {
        message.channel.send("🤖 **Ton niveau doit-être compris entre 1 et 200 **!");
        return;
    }
    for (let i = 0; i < data_ins._register.length; i++){
        if (data_ins._register[i].delete_statue == false && data_ins._register[i].idusr == message.member.id) {
            data_ins._register[i].level = parseInt(command[0], 10);
            break 
        }
    }
    await message.member.roles.remove(data_syst.roles_tuto_3_id);
    await message.member.roles.add(data_syst.roles_tuto_4_id);
    data_user._user[index_user].tuto_rang = data_syst.roles_tuto_4_id;
    let nchan = await message.guild.channels.cache.find(elem => elem.id == data_syst.channel_tuto_mention_id).send("🤖 **<@"+ data_user._user[index_user].id +">**"); 
}
exports.fun_channel_tuto_level = fun_channel_tuto_level;