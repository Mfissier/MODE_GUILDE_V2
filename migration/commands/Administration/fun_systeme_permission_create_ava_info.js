
const Discord = require('discord.js');
const data_syst = require("../../data/structjson/all_systeme.json");
const { fun_permission_allow_R_H_E } = require('../Fun/fun_permission_allow_R_H_E');
const { fun_permission_allow_R_H_E_F } = require('../Fun/fun_permission_allow_R_H_E_F');
const { fun_permission_allow_R_W_S_H_E_F } = require('../Fun/fun_permission_allow_R_W_S_H_E_F');
const { fun_permission_deny_R } = require('../Fun/fun_permission_deny_R');
const { fun_permission_vocal_allow_R_S } = require('../Fun/fun_permission_vocal_allow_R_S');
const { fun_permission_vocal_denny_S } = require('../Fun/fun_permission_vocal_denny_S');
const { fun_sleep } = require('../Fun/fun_sleep');
const { fun_systeme_permission_create_martial_staff } = require('./fun_systeme_permission_create_martial_staff');

async function fun_systeme_permission_create_ava_info(message, command)
{
    let take_channel;
    let role_coa;
    let role_staff;
    let role_tuto;
    try {
        role_coa = await message.guild.roles.cache.find(Role => Role.id == data_syst.RANG_COALITION_ID);
        role_staff = await message.guild.roles.cache.find(Role => Role.id == data_syst.STAFF_ID);
//__________________________________________
// Categorie 『🏹』𝐀𝐯𝐀
    /*________________________________________

        『🌈』𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧𝐬
        『💡』𝐓𝐮𝐭𝐨𝐫𝐢𝐞𝐥
        『🔱』𝐃𝐞𝐬𝐭𝐫𝐮𝐜𝐭𝐢𝐨𝐧

    __________________________________________*/
    await message.channel.send("Ajout des Ajout des permissions de la catégorie 『🏹』𝐀𝐯𝐀!");
    take_channel = await message.guild.channels.cache.find(Collection => Collection.id == data_syst.Information_AVA_id);
    await fun_permission_allow_R_H_E(take_channel, role_coa);
    take_channel = await message.guild.channels.cache.find(Collection => Collection.id == data_syst.Tutoriel_id);
    await fun_permission_allow_R_H_E(take_channel, role_coa);
    take_channel = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.VOCAL_Destruction);
    await fun_permission_vocal_allow_R_S(take_channel, role_coa);
    fun_sleep(3000);
//__________________________________________
//__________________________________________

//__________________________________________
//  Categorie『🌓』𝐈𝐋𝐘𝐙𝐀𝐄𝐋𝐋𝐄
    /*________________________________________
    
    『❓』𝐃𝐨𝐟𝐮𝐬-𝐍𝐞𝐰𝐬
    『⏰』𝐀𝐥𝐦𝐚𝐧𝐚𝐱
    『💫』𝐏𝐨𝐫𝐭𝐚𝐢𝐥𝐬
    __________________________________________*/
    await message.channel.send("Ajout des Ajout des permissions de la catégorie 『🌓』𝐈𝐋𝐘𝐙𝐀𝐄𝐋𝐋𝐄 !");
    take_channel = await message.guild.channels.cache.find(Collection => Collection.id == data_syst.Dofus_news_id);
    await fun_permission_allow_R_H_E(take_channel, role_coa);
    take_channel = await message.guild.channels.cache.find(Collection => Collection.id == data_syst.Almanax_id);
    await fun_permission_allow_R_H_E(take_channel, role_coa);
    take_channel = await message.guild.channels.cache.find(Collection => Collection.id == data_syst.Portail_id);
    await fun_permission_allow_R_W_S_H_E_F(take_channel, role_coa);
    fun_sleep(3000);
//__________________________________________
//__________________________________________
    fun_systeme_permission_create_martial_staff(message,command);

    } catch (error) {
      console.error(error);
    }
}
exports.fun_systeme_permission_create_ava_info = fun_systeme_permission_create_ava_info;