
const Discord = require('discord.js');
const data_syst = require("../../data/structjson/all_systeme.json");
const { fun_permission_allow_R_H_E } = require('../Fun/fun_permission_allow_R_H_E');
const { fun_permission_allow_R_H_E_F } = require('../Fun/fun_permission_allow_R_H_E_F');
const { fun_permission_allow_R_W_S_H_E_F } = require('../Fun/fun_permission_allow_R_W_S_H_E_F');
const { fun_permission_deny_R } = require('../Fun/fun_permission_deny_R');
const { fun_permission_vocal_allow_R_S } = require('../Fun/fun_permission_vocal_allow_R_S');
const { fun_permission_vocal_denny_S } = require('../Fun/fun_permission_vocal_denny_S');
const { fun_sleep } = require('../Fun/fun_sleep');
const { fun_systeme_permission_create_metier } = require('./fun_systeme_permission_create_metier');

async function fun_systeme_permission_create_boutique(message, command)
{
    let take_channel;
    let role_coa;
    let role_staff;
    let role_tuto_15;
    let role_tuto_11;
    try {
        role_coa = await message.guild.roles.cache.find(Role => Role.id == data_syst.RANG_COALITION_ID);
        role_staff = await message.guild.roles.cache.find(Role => Role.id == data_syst.STAFF_ID);
        role_tuto_15 = await message.guild.roles.cache.find(Role => Role.id == data_syst.roles_tuto_15_id);
        role_tuto_11 = await message.guild.roles.cache.find(Role => Role.id == data_syst.roles_tuto_11_id);
//__________________________________________
//  Categorie『🛒』𝐁𝐨𝐮𝐭𝐢𝐪𝐮𝐞
    /*________________________________________

        『🏬』𝐁𝐨𝐮𝐭𝐢𝐪𝐮𝐞
        『💰』𝐅𝐢𝐧𝐚𝐧𝐜𝐞𝐬
        『💸』𝗧𝗿𝗮𝗻𝘀𝗳𝗲𝗿𝘁
        『💡』𝐀𝐫𝐭𝐢𝐬𝐚𝐧𝐬
        『💬』𝐂𝐨𝐦𝐦𝐞𝐫𝐜𝐞𝐬

    __________________________________________*/

    await message.channel.send("Ajout des Ajout des permissions de la catégorie 『🛒』𝐁𝐨𝐮𝐭𝐢𝐪𝐮𝐞 !");
    take_channel = await message.guild.channels.cache.find(Collection => Collection.id == data_syst.boutique_id);
    take_channel.overwritePermissions(
    [
        {
            id: role_coa.id,
            allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY', 'ADD_REACTIONS', 'ATTACH_FILES', 'USE_EXTERNAL_EMOJIS']
        },
        {
            id: role_tuto_15.id,
            allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY', 'ADD_REACTIONS', 'ATTACH_FILES', 'USE_EXTERNAL_EMOJIS']
        },
    ]);
    take_channel = await message.guild.channels.cache.find(Collection => Collection.id == data_syst.Finances_id);  
    take_channel.overwritePermissions([
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
    take_channel = await message.guild.channels.cache.find(Collection => Collection.id == data_syst.Transfert_id);  
    take_channel.overwritePermissions([
        {
            id: role_coa.id,
            allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY', 'ADD_REACTIONS', 'ATTACH_FILES', 'USE_EXTERNAL_EMOJIS']
        },
        {
            id: role_tuto_11.id,

            allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY',],
            deny : ['SEND_MESSAGES']
        },
    ]);
    take_channel = await message.guild.channels.cache.find(Collection => Collection.id == data_syst.Artisan_id);  
    await fun_permission_allow_R_W_S_H_E_F(take_channel, role_coa);
    take_channel = await message.guild.channels.cache.find(Collection => Collection.id == data_syst.Commerce_id);  
    await fun_permission_allow_R_W_S_H_E_F(take_channel, role_coa);
    fun_sleep(3000);
//__________________________________________
//__________________________________________
    fun_systeme_permission_create_metier(message,command);
    } catch (error) {
      console.error(error);
    }
}
exports.fun_systeme_permission_create_boutique = fun_systeme_permission_create_boutique;