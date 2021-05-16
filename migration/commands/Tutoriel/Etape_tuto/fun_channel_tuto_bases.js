const Discord = require('discord.js');
const index = require('../../../index');
const { fun_check_for_create_profil } = require('../../../data/data_recovery/fun_check_for_create_profil');
const data_syst = require('../../../data/structjson/all_systeme.json');
const data_user = require('../../../data/structjson/user.json');
const { fun_index_guild } = require('../../Fun/fun_index_guild');
const { fun_sleep } = require('../../Fun/fun_sleep');
const { fun_index_users } = require('../../Fun/fun_index_users');

async function fun_channel_tuto_bases(message, command, client)
{
    let nchan;
    let new_object;
    await fun_check_for_create_profil(client);
    
    let index_user = fun_index_users(message.member.id);
    if (index_user == -1) {
        return (message.channel.send("🤖 Veuillez réessayer... Il y a du y avoir une erreur lors de votre enregistrement"));
    }
    data_user._user[index_user].tuto_rang = data_syst.roles_tuto_2_id;
    await message.member.roles.add(data_syst.roles_tuto_2_id);
    if (data_user._user[index_user].rang_guild == data_syst.PENITENT_ID) {
        message.member.roles.remove(data_syst.PENITENT_ID); 
        nchan = await message.guild.channels.cache.find(elem => elem.id == data_syst.channel_tuto_pseudo_id).send("🤖 **Coucou <@"+ data_user._user[index_user].id +"> ! Ravis de te revoir **"); 
    } else if (data_user._user[index_user].tuto_statue == true) {
        nchan = await message.guild.channels.cache.find(elem => elem.id == data_syst.channel_tuto_pseudo_id).send("🤖 **Coucou <@"+ data_user._user[index_user].id +"> ! Ravis de te revoir **"); 
    } else {
        nchan = await message.guild.channels.cache.find(elem => elem.id == data_syst.channel_tuto_pseudo_id).send("🤖 **<@"+ data_user._user[index_user].id +">**"); 
    }
    
}
exports.fun_channel_tuto_bases = fun_channel_tuto_bases;