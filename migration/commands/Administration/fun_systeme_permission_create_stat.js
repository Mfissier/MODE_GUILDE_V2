
const Discord = require('discord.js');
const data_syst = require("../../data/structjson/all_systeme.json");
const { fun_permission_allow_R_H_E } = require('../Fun/fun_permission_allow_R_H_E');
const { fun_permission_allow_R_H_E_F } = require('../Fun/fun_permission_allow_R_H_E_F');
const { fun_permission_allow_R_W_S_H_E_F } = require('../Fun/fun_permission_allow_R_W_S_H_E_F');
const { fun_permission_deny_R } = require('../Fun/fun_permission_deny_R');
const { fun_permission_vocal_allow_R_S } = require('../Fun/fun_permission_vocal_allow_R_S');
const { fun_permission_vocal_denny_S } = require('../Fun/fun_permission_vocal_denny_S');
const { fun_sleep } = require('../Fun/fun_sleep');
const { fun_systeme_permission_create_vocal } = require('./fun_systeme_permission_create_vocal');


async function fun_systeme_permission_stat(message, command)
{
    let take_channel;
    let role_coa;
    let role_staff;
    let role_tuto_11;
    let role_tuto_10;
    let role_tuto_15;
    try {
        role_coa = await message.guild.roles.cache.find(Role => Role.id == data_syst.RANG_COALITION_ID);
        role_staff = await message.guild.roles.cache.find(Role => Role.id == data_syst.STAFF_ID);
        role_tuto_11 = await message.guild.roles.cache.find(Role => Role.id == data_syst.roles_tuto_11_id);
        role_tuto_10 = await message.guild.roles.cache.find(Role => Role.id == data_syst.roles_tuto_10_id);
        role_tuto_15 = await message.guild.roles.cache.find(Role => Role.id == data_syst.roles_tuto_15_id);
//__________________________________________
//  Categorie『🧬』𝗦𝗧𝗔𝗧𝗜𝗦𝗧𝗜𝗤𝗨𝗘𝗦 !
    /*________________________________________

        『⭐』𝐄𝐭𝐨𝐢𝐥𝐞𝐬
        『💎』𝐑𝐞́𝐜𝐨𝐦𝐩𝐞𝐧𝐬𝐞𝐬
        『🥇』𝗚𝗹𝗼𝗯𝗮𝗹
        『✨』𝗚𝘂𝗶𝗹𝗱𝗲𝘀
        『⭐』𝗟𝗮𝗱𝗱𝗲𝗿

    __________________________________________*/
    await message.channel.send("Ajout des permissions de la catégorie『🧬』𝗦𝗧𝗔𝗧𝗜𝗦𝗧𝗜𝗤𝗨𝗘𝗦 !");
    take_channel = await message.guild.channels.cache.find(Collection => Collection.id == data_syst.Etoiles_id);
    take_channel.overwritePermissions(
        [
            {
                id: role_coa.id,
                allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY',],
                deny : ['SEND_MESSAGES']
            },
            {
                id: role_tuto_10.id,
                allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY',],
                deny : ['SEND_MESSAGES']
            },
            {
                id: role_tuto_15.id,
                allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY',],
                deny : ['SEND_MESSAGES']
            },
        ]);
    take_channel = await message.guild.channels.cache.find(Collection => Collection.id == data_syst.Recompenses_id);  
    take_channel.overwritePermissions(
    [
        {
            id: role_coa.id,
            allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY',],
            deny : ['SEND_MESSAGES']
        },
        {
            id: role_tuto_11.id,
            allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY',],
            deny : ['SEND_MESSAGES']
        },
    ]);
    take_channel = await message.guild.channels.cache.find(Collection => Collection.id == data_syst.Global_id);  
    await fun_permission_allow_R_H_E(take_channel, role_coa);
    take_channel = await message.guild.channels.cache.find(Collection => Collection.id == data_syst.Guildes_id);  
    await fun_permission_allow_R_H_E(take_channel, role_coa);
    take_channel = await message.guild.channels.cache.find(Collection => Collection.id == data_syst.Ladder_id);  
    await fun_permission_allow_R_H_E(take_channel, role_coa);
    fun_sleep(3000);
    fun_systeme_permission_create_vocal(message, command);
//__________________________________________
//__________________________________________
    } catch (error) {
      console.error(error);
    }
}
exports.fun_systeme_permission_stat = fun_systeme_permission_stat;