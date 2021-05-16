const Discord = require('discord.js');
const data_syst = require('../../../data/structjson/all_systeme.json');
const data_user = require('../../../data/structjson/user.json');
const { fun_index_users } = require('../../Fun/fun_index_users');
const data_ins = require('../../../data/structjson/inscription.json');
const { fun_time_delete_inscription } = require('../../Fun/fun_time_delete_inscription');
async function fun_channel_tuto_pseudo(message, command)
{

    let index_user = fun_index_users(message.member.id);
    let nchan;
    if (command.length > 1) {
        message.channel.send("🤖 **Comme en jeu, ton pseudo ne dois contenir aucun espace !**");
        return;
    } else if (command[0].length < 2 || command[0].length > 31) {
        message.channel.send("🤖 **Ton pseudo dois contenir entre 2 et 31 caractères !**");
        return;
    }
    for (let i = 0; i < data_user._user.length; i++) {
        if (data_user._user[i].id == message.member.id) {
            data_user._username = command[0];
            break;
        }
    }
    new_object = Object.assign({}, data_ins._register[0]);
    data_ins._register.push(new_object);
    data_ins._register[data_ins._register.length - 1].usrname = command[0];
    data_ins._register[data_ins._register.length - 1].idusr = message.member.id;
    data_ins._register[data_ins._register.length - 1].time_out_id = setTimeout(fun_time_delete_inscription, 1000 * 60 * 45, message, message.member.id);
    await message.member.roles.remove(data_syst.roles_tuto_2_id);
    await message.member.roles.add(data_syst.roles_tuto_3_id);
    data_user._user[index_user].tuto_rang = data_syst.roles_tuto_3_id;
    nchan = await message.guild.channels.cache.find(elem => elem.id == data_syst.channel_tuto_level_id).send("🤖 **<@"+ data_user._user[index_user].id +">**"); 
}
exports.fun_channel_tuto_pseudo = fun_channel_tuto_pseudo;