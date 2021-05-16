
const Discord = require('discord.js');
const data_syst = require("../../data/structjson/all_systeme.json");
const { fun_permission_allow_R_H_E } = require('../Fun/fun_permission_allow_R_H_E');
const { fun_permission_allow_R_H_E_F } = require('../Fun/fun_permission_allow_R_H_E_F');
const { fun_permission_allow_R_W_S_H_E_F } = require('../Fun/fun_permission_allow_R_W_S_H_E_F');
const { fun_permission_deny_R } = require('../Fun/fun_permission_deny_R');
const { fun_permission_vocal_allow_R_S } = require('../Fun/fun_permission_vocal_allow_R_S');
const { fun_permission_vocal_denny_S } = require('../Fun/fun_permission_vocal_denny_S');
const { fun_sleep } = require('../Fun/fun_sleep');
const { fun_systeme_permission_create_tuto } = require('./fun_systeme_permission_create_tuto');


async function fun_systeme_permission_create_martial_staff(message, command)
{
    let take_channel;
    let role_coa;
    let role_staff;
    let role_tuto;
    try {
        role_coa = await message.guild.roles.cache.find(Role => Role.id == data_syst.RANG_COALITION_ID);
        role_staff = await message.guild.roles.cache.find(Role => Role.id == data_syst.STAFF_ID);

//__________________________________________
//  Categorie 『⛔』𝐂𝐨𝐮𝐫 𝐌𝐚𝐫𝐭𝐢𝐚𝐥𝐞
    /*________________________________________

    『❓』𝐈𝐝𝐞́𝐞𝐬
    『⌛』𝐒𝐨𝐧𝐝𝐚𝐠𝐞
    『😈』𝐑𝐞𝐩𝐨𝐫𝐭
    __________________________________________*/
    await message.channel.send("Ajout des Ajout des permissions de la catégorie 『⛔』𝐂𝐨𝐮𝐫 𝐌𝐚𝐫𝐭𝐢𝐚𝐥𝐞 !");
    take_channel = await message.guild.channels.cache.find(Collection => Collection.id == data_syst.Idées_id);
    await fun_permission_allow_R_W_S_H_E_F(take_channel, role_coa);
    take_channel = await message.guild.channels.cache.find(Collection => Collection.id == data_syst.Sondage_id);
    await fun_permission_allow_R_H_E(take_channel, role_coa);
    take_channel = await message.guild.channels.cache.find(Collection => Collection.id == data_syst.Report_id);
    await fun_permission_allow_R_W_S_H_E_F(take_channel, role_coa);
    fun_sleep(3000);
//__________________________________________
//__________________________________________


//__________________________________________
//  Categorie 『🔒』𝐒𝐭𝐚𝐟𝐟
    /*________________________________________

        『📑』𝐏𝐫𝐨𝐣𝐞𝐭𝐬
        『👊』𝐒𝐭𝐚𝐟𝐟-𝐂𝐨𝐚𝐥𝐢𝐭𝐢𝐨𝐧
        『🤖』𝐂𝐌𝐃-𝐒𝐭𝐚𝐟𝐟
        『🍻』𝐂𝐡𝐚𝐭

    __________________________________________*/
    await message.channel.send("Ajout des Ajout des permissions de la catégorie 『🔒』𝐒𝐭𝐚𝐟𝐟 !");
    take_channel = await message.guild.channels.cache.find(Collection => Collection.id == data_syst.Projet_id);
    fun_permission_deny_R(take_channel,role_coa);
    fun_permission_allow_R_W_S_H_E_F(take_channel, role_staff);
    take_channel = await message.guild.channels.cache.find(Collection => Collection.id == data_syst.Staff_coa_id);
    fun_permission_deny_R(take_channel,role_coa);
    fun_permission_allow_R_W_S_H_E_F(take_channel, role_staff);
    take_channel = await message.guild.channels.cache.find(Collection => Collection.id == data_syst.CMD_HELP_STAFF_id);
    fun_permission_deny_R(take_channel,role_coa);
    fun_permission_allow_R_W_S_H_E_F(take_channel, role_staff);
    take_channel = await message.guild.channels.cache.find(Collection => Collection.id == data_syst.Staff_coa_pos_perco_name);
    fun_permission_deny_R(take_channel,role_coa);
    fun_permission_allow_R_W_S_H_E_F(take_channel, role_staff);
    take_channel = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.Chat_staff_coa);
    fun_permission_deny_R(take_channel,role_coa);
    fun_permission_vocal_allow_R_S(take_channel, role_staff);
    fun_sleep(3000);
    fun_systeme_permission_create_tuto(message,command);
//__________________________________________
//__________________________________________
    } catch (error) {
      console.error(error);
    }
}
exports.fun_systeme_permission_create_martial_staff = fun_systeme_permission_create_martial_staff;