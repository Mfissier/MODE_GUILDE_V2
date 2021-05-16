
const Discord = require('discord.js');
const data_syst = require("../../data/structjson/all_systeme.json");
const { fun_permission_allow_R_H_E } = require('../Fun/fun_permission_allow_R_H_E');
const { fun_permission_allow_R_H_E_F } = require('../Fun/fun_permission_allow_R_H_E_F');
const { fun_permission_allow_R_W_S_H_E_F } = require('../Fun/fun_permission_allow_R_W_S_H_E_F');
const { fun_permission_deny_R } = require('../Fun/fun_permission_deny_R');
const { fun_permission_vocal_allow_R_S } = require('../Fun/fun_permission_vocal_allow_R_S');
const { fun_permission_vocal_denny_S } = require('../Fun/fun_permission_vocal_denny_S');
const { fun_sleep } = require('../Fun/fun_sleep');
const { fun_systeme_permission_create_boutique } = require('./fun_systeme_permission_create_boutique');

async function fun_systeme_permission_create_general(message, command)
{
    //Pas acces au commande profil
    
    let take_channel;
    let role_coa;
    let role_staff;
    let role_tuto;
    try {
        role_coa = await message.guild.roles.cache.find(Role => Role.id == data_syst.RANG_COALITION_ID);
        role_staff = await message.guild.roles.cache.find(Role => Role.id == data_syst.STAFF_ID);

//__________________________________________
//  Categorie『💬』𝐆𝐞́𝐧𝐞́𝐫𝐚𝐥
    /*________________________________________
        
        『📯』𝐀𝐧𝐧𝐨𝐧𝐜𝐞𝐬
        『💬』𝐃𝐢𝐬𝐜𝐮𝐬𝐬𝐢𝐨𝐧
        『🎉』𝐄𝐯𝐞𝐧𝐭𝐬
        『💾』𝐏𝐫𝐨𝐟𝐢𝐥
        『❓』𝐐𝐮𝐞𝐬𝐭𝐢𝐨𝐧𝐬

    __________________________________________*/
    await message.channel.send("Ajout des Ajout des permissions de la catégorie 『💬』𝐆𝐞́𝐧𝐞́𝐫𝐚𝐥!");
    take_channel = await message.guild.channels.cache.find(Collection => Collection.id == data_syst.Annonces_id);  
    await fun_permission_allow_R_H_E(take_channel, role_coa);
    take_channel = await message.guild.channels.cache.find(Collection => Collection.id == data_syst.Discussion_id);  
    await fun_permission_allow_R_W_S_H_E_F(take_channel, role_coa);
    take_channel = await message.guild.channels.cache.find(Collection => Collection.id == data_syst.Events_id);  
    await fun_permission_allow_R_W_S_H_E_F(take_channel, role_coa);
    take_channel = await message.guild.channels.cache.find(Collection => Collection.id == data_syst.Profil_id);  
    await fun_permission_allow_R_W_S_H_E_F(take_channel, role_coa);
    take_channel = await message.guild.channels.cache.find(Collection => Collection.id == data_syst.Question_id);  
    await fun_permission_allow_R_W_S_H_E_F(take_channel, role_coa);
    fun_sleep(3000);
//__________________________________________
//__________________________________________
        fun_systeme_permission_create_boutique(message, command);
    } catch (error) {
      console.error(error);
    }
}
exports.fun_systeme_permission_create_general = fun_systeme_permission_create_general;