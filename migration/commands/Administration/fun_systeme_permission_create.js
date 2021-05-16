
const Discord = require('discord.js');
const data_syst = require("../../data/structjson/all_systeme.json");
const { fun_permission_allow_R_H_E } = require('../Fun/fun_permission_allow_R_H_E');
const { fun_permission_allow_R_H_E_F } = require('../Fun/fun_permission_allow_R_H_E_F');
const { fun_permission_allow_R_W_S_H_E_F } = require('../Fun/fun_permission_allow_R_W_S_H_E_F');
const { fun_permission_deny_R } = require('../Fun/fun_permission_deny_R');
const { fun_permission_vocal_allow_R_S } = require('../Fun/fun_permission_vocal_allow_R_S');
const { fun_permission_vocal_denny_S } = require('../Fun/fun_permission_vocal_denny_S');
const { fun_sleep } = require('../Fun/fun_sleep');
const { fun_systeme_permission_stat } = require('./fun_systeme_permission_create_stat');

async function fun_systeme_permission_create(message, command)
{
    let take_channel;
    let role_coa;
    let role_staff;
    let roles_tuto_18_id;
    let roles_tuto_17_id;
    try {
        role_coa = await message.guild.roles.cache.find(Role => Role.id == data_syst.RANG_COALITION_ID);
        role_staff = await message.guild.roles.cache.find(Role => Role.id == data_syst.STAFF_ID);
        roles_tuto_18_id = await message.guild.roles.cache.find(Role => Role.id == data_syst.roles_tuto_18_id);
        roles_tuto_17_id = await message.guild.roles.cache.find(Role => Role.id == data_syst.roles_tuto_17_id);
//__________________________________________
//  Categorie 『💫』𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍𝐒 !
    /*________________________________________

        『🌏』𝐖𝐞𝐥𝐜𝐨𝐦𝐞
        『⭐』𝐒𝐲𝐬𝐭𝐞̀𝐦𝐞
        『🔴』𝐑𝐞̀𝐠𝐥𝐞𝐦𝐞𝐧𝐭
        『🌈』𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧𝐬
        『🤖』𝐂𝐌𝐃
        『💣』𝐁𝐥𝐚𝐜𝐤𝐥𝐢𝐬𝐭

    __________________________________________*/
    await message.channel.send("Ajout des permissions de la catégorie 『💫』𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍𝐒 !");
    take_channel = await message.guild.channels.cache.find(Collection => Collection.id == data_syst.Welcome_id);
    take_channel.overwritePermissions(
        [
            {
                id: role_coa.id,
                deny: ['VIEW_CHANNEL'],
            },
            {
                id: roles_tuto_18_id.id,
                allow: ['VIEW_CHANNEL','SEND_MESSAGES', 'READ_MESSAGE_HISTORY',],
            },
        ]);
    take_channel = await message.guild.channels.cache.find(Collection => Collection.id == data_syst.Système_id);  
    await fun_permission_allow_R_H_E(take_channel, role_coa);
    take_channel = await message.guild.channels.cache.find(Collection => Collection.id == data_syst.Règlement_id);  
    await fun_permission_allow_R_H_E(take_channel, role_coa);
    take_channel = await message.guild.channels.cache.find(Collection => Collection.id == data_syst.Information_id);  
    await fun_permission_allow_R_H_E(take_channel, role_coa);
    take_channel = await message.guild.channels.cache.find(Collection => Collection.id == data_syst.Blacklist_id);  
    await fun_permission_allow_R_H_E(take_channel, role_coa);
    take_channel = await message.guild.channels.cache.find(Collection => Collection.id == data_syst.CMD_HELP_id);  
    take_channel.overwritePermissions(
        [
            {
                id: role_coa.id,
                allow: ['VIEW_CHANNEL','SEND_MESSAGES', 'READ_MESSAGE_HISTORY',],
            },
            {
                id: roles_tuto_18_id.id,
                allow: ['VIEW_CHANNEL','SEND_MESSAGES', 'READ_MESSAGE_HISTORY',],
            },
            {
                id: roles_tuto_17_id.id,
                allow: ['VIEW_CHANNEL','SEND_MESSAGES', 'READ_MESSAGE_HISTORY',],
            },
        ]);
    fun_sleep(3000);
    fun_systeme_permission_stat(message, command);
//________________________________ __________
//__________________________________________
    } catch (error) {
      console.error(error);
    }
}
exports.fun_systeme_permission_create = fun_systeme_permission_create;