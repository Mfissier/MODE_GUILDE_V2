const Discord = require('discord.js');
const data_syst = require('../../../data/structjson/all_systeme.json');
const { fun_index_users } = require('../../Fun/fun_index_users');
const data_user = require('../../../data/structjson/user.json');
const data_ins = require('../../../data/structjson/inscription.json');

async function fun_channel_tuto_mention(message, command)
{
    let nchan
    let index_user = fun_index_users(message.member.id);
    if (!message.mentions.users.first()) {
        message.channel.send("🤖 Malheureusement, ton message ne contient aucune mention\n\
<@!"+ message.member.id +"> *par exemple*");
        return;
    } else if (message.mentions.users.first().id == message.member.id) {
        message.channel.send("🤖 **Vous ne pouvez pas vous recruter vous-même !!**");
        return;
    }
    for (let i = 0; i < data_ins._register.length; i++){
        if (data_ins._register[i].delete_statue == false && data_ins._register[i].idusr == message.member.id) {
            data_ins._register[i].id_recruteur = message.mentions.users.first().id;
            break 
        }
    }
    if (data_user._user[index_user].tuto_statue == true) {
        nchan = await message.guild.channels.cache.find(elem => elem.id == data_syst.channel_tuto_question_id).send("🤖 **<@"+ data_user._user[index_user].id +">**"); 
        await message.member.roles.remove(data_syst.roles_tuto_4_id);
        await message.member.roles.add(data_syst.roles_tuto_18_id);
        data_user._user[index_user].tuto_rang = data_syst.roles_tuto_18_id;
        data_user._user[index_user].tuto_statue = false;
        nchan = await message.guild.channels.cache.find(elem => elem.id == data_syst.Welcome_id).send("🤖 **<@"+ data_user._user[index_user].id +">**"); 
        return;
    }
    data_user._user[index_user].tuto_statue = false;
    await message.member.roles.remove(data_syst.roles_tuto_4_id);
    await message.member.roles.add(data_syst.roles_tuto_5_id);
    data_user._user[index_user].tuto_rang = data_syst.roles_tuto_5_id;
    nchan = await message.guild.channels.cache.find(elem => elem.id == data_syst.channel_tuto_roles_id).send("🤖 **<@"+ data_user._user[index_user].id +">**"); 
}
exports.fun_channel_tuto_mention = fun_channel_tuto_mention;

