
const Discord = require('discord.js');
const data_syst = require("../../data/structjson/all_systeme.json");
const { fun_permission_allow_R_H_E } = require('../Fun/fun_permission_allow_R_H_E');
const { fun_permission_allow_R_H_E_F } = require('../Fun/fun_permission_allow_R_H_E_F');
const { fun_permission_allow_R_W_S_H_E_F } = require('../Fun/fun_permission_allow_R_W_S_H_E_F');
const { fun_permission_deny_R } = require('../Fun/fun_permission_deny_R');
const { fun_permission_vocal_allow_R_S } = require('../Fun/fun_permission_vocal_allow_R_S');
const { fun_permission_vocal_denny_S } = require('../Fun/fun_permission_vocal_denny_S');
const { fun_sleep } = require('../Fun/fun_sleep');
const { fun_systeme_permission_create_ava_info } = require('./fun_systeme_permission_create_ava_info');

async function fun_systeme_permission_create_metier(message, command)
{
    let take_channel;
    let role_coa;
    let role_staff;
    let role_tuto;
    try {
        role_coa = await message.guild.roles.cache.find(Role => Role.id == data_syst.RANG_COALITION_ID);
        role_staff = await message.guild.roles.cache.find(Role => Role.id == data_syst.STAFF_ID);
//__________________________________________
//  Categorie『🔥』𝐌𝐞́𝐭𝐢𝐞𝐫𝐬
    /*________________________________________

        『🥇』𝐒𝐮𝐜𝐜𝐞̀𝐬
        『🔪』𝐄𝐬𝐩𝐢𝐨𝐧
        『🔫』𝐓𝐮𝐞𝐮𝐫
        『🔎』𝐂𝐡𝐞𝐫𝐜𝐡𝐞𝐮𝐫
        『🧵』𝐌𝐮𝐬𝐞
        『🦄』𝐁𝐫𝐚𝐜𝐨𝐧𝐧𝐢𝐞𝐫

    __________________________________________*/
    await message.channel.send("Ajout des Ajout des permissions de la catégorie 『🔥』𝐌𝐞́𝐭𝐢𝐞𝐫𝐬 !");
    take_channel = await message.guild.channels.cache.find(Collection => Collection.id == data_syst.Succès_id);  
    await fun_permission_allow_R_H_E(take_channel, role_coa);
    take_channel = await message.guild.channels.cache.find(Collection => Collection.id == data_syst.Espion_id);  
    await fun_permission_allow_R_W_S_H_E_F(take_channel, role_coa);
    take_channel = await message.guild.channels.cache.find(Collection => Collection.id == data_syst.Tueur_id);  
    await fun_permission_allow_R_W_S_H_E_F(take_channel, role_coa);
    take_channel = await message.guild.channels.cache.find(Collection => Collection.id == data_syst.Chercheur_id);  
    await fun_permission_allow_R_W_S_H_E_F(take_channel, role_coa);
    take_channel = await message.guild.channels.cache.find(Collection => Collection.id == data_syst.Muse_id);  
    await fun_permission_allow_R_W_S_H_E_F(take_channel, role_coa);
    take_channel = await message.guild.channels.cache.find(Collection => Collection.id == data_syst.Braconnier_id);  
    await fun_permission_allow_R_W_S_H_E_F(take_channel, role_coa);
    fun_sleep(3000);
//__________________________________________
//__________________________________________
        fun_systeme_permission_create_ava_info(message, command);
    } catch (error) {
      console.error(error);
    }
}
exports.fun_systeme_permission_create_metier = fun_systeme_permission_create_metier;