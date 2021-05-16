
const Discord = require('discord.js');
const data_syst = require("../../data/structjson/all_systeme.json");
const { fun_permission_allow_R_H_E } = require('../Fun/fun_permission_allow_R_H_E');
const { fun_permission_allow_R_H_E_F } = require('../Fun/fun_permission_allow_R_H_E_F');
const { fun_permission_allow_R_W_S_H_E_F } = require('../Fun/fun_permission_allow_R_W_S_H_E_F');
const { fun_permission_deny_R } = require('../Fun/fun_permission_deny_R');
const { fun_permission_vocal_allow_R_S } = require('../Fun/fun_permission_vocal_allow_R_S');
const { fun_permission_vocal_denny_S } = require('../Fun/fun_permission_vocal_denny_S');
const { fun_sleep } = require('../Fun/fun_sleep');
const { fun_systeme_permission_create_general } = require('./fun_systeme_permission_create_general');

async function fun_systeme_permission_create_vocal(message, command)
{
    let take_channel;
    let role_coa;
    let role_staff;
    let role_tuto;
    try {
        role_coa = await message.guild.roles.cache.find(Role => Role.id == data_syst.RANG_COALITION_ID);
        role_staff = await message.guild.roles.cache.find(Role => Role.id == data_syst.STAFF_ID);

//__________________________________________
//  Categorie『📞』𝐕𝐨𝐜𝐚𝐥
    /*________________________________________

        🔇』𝐍𝐨-𝐌𝐢𝐜𝐫𝐨
        🍻』𝐓𝐚𝐯𝐞𝐫𝐧𝐞
        👻』𝐃𝐨𝐧𝐣𝐨𝐧
        👻』𝐃𝐨𝐧𝐣𝐨𝐧 2
        👻』𝐃𝐨𝐧𝐣𝐨𝐧 3
        ✨』𝐀𝐮𝐭𝐫𝐞𝐬
        💤』𝐀𝐅𝐊

    __________________________________________*/
//__________________________________________
    await message.channel.send("Ajout des permissions de la catégorie 『📞』𝐕𝐨𝐜𝐚𝐥 !");
    take_channel = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.No_micro_name);
    await fun_permission_vocal_allow_R_S(take_channel, role_coa);
    take_channel = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.Taverne_name);  
    await fun_permission_vocal_allow_R_S(take_channel, role_coa);
    take_channel = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.Donjon_name);  
    await fun_permission_vocal_allow_R_S(take_channel, role_coa);
    take_channel = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.Donjon_2_name);  
    await fun_permission_vocal_allow_R_S(take_channel, role_coa);
    take_channel = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.Donjon_3_name);  
    await fun_permission_vocal_allow_R_S(take_channel, role_coa);
    take_channel = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.Autres_name);  
    await fun_permission_vocal_allow_R_S(take_channel, role_coa);
    take_channel = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.AFK_name);  
    await fun_permission_vocal_denny_S(take_channel, role_coa);
        fun_sleep(3000);
//__________________________________________
        fun_systeme_permission_create_general(message, command);
    } catch (error) {
      console.error(error);
    }
}
exports.fun_systeme_permission_create_vocal = fun_systeme_permission_create_vocal;