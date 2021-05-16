
const Discord = require('discord.js');
const data_syst = require("../../data/structjson/all_systeme.json");
const { fun_permission_allow_R_H_E } = require('../Fun/fun_permission_allow_R_H_E');
const { fun_permission_allow_R_H_E_F } = require('../Fun/fun_permission_allow_R_H_E_F');
const { fun_permission_allow_R_W_S_H_E_F } = require('../Fun/fun_permission_allow_R_W_S_H_E_F');
const { fun_permission_deny_R } = require('../Fun/fun_permission_deny_R');
const { fun_permission_vocal_allow_R_S } = require('../Fun/fun_permission_vocal_allow_R_S');
const { fun_permission_vocal_denny_S } = require('../Fun/fun_permission_vocal_denny_S');
const { fun_sleep } = require('../Fun/fun_sleep');


async function send(message) {
    message.channel.send('!systeme_save');
  }
async function fun_systeme_permission_create_tuto(message, command)
{
    let take_channel;
    let role_coa;
    let role_staff;
    let role_tuto;
    let rang_roles_tuto_2;
    let rang_roles_tuto_3;
    let rang_roles_tuto_4;
    let rang_roles_tuto_5;
    let rang_roles_tuto_6;
    let rang_roles_tuto_7;
    let rang_roles_tuto_8;
    let rang_roles_tuto_9;
    let rang_roles_tuto_10;
    let rang_roles_tuto_11;
    let rang_roles_tuto_12;
    let rang_roles_tuto_13;
    let rang_roles_tuto_14;
    let rang_roles_tuto_15;
    let rang_roles_tuto_16;
    let rang_roles_tuto_17;
    let rang_roles_tuto_18;
    try {
        role_coa = await message.guild.roles.cache.find(Role => Role.id == data_syst.RANG_COALITION_ID);
        role_staff = await message.guild.roles.cache.find(Role => Role.id == data_syst.STAFF_ID);
        
        
        rang_roles_tuto_2 =  await message.guild.roles.cache.find(Role => Role.id == data_syst.roles_tuto_2_id);
        rang_roles_tuto_3 =  await message.guild.roles.cache.find(Role => Role.id == data_syst.roles_tuto_3_id);
        rang_roles_tuto_4 =  await message.guild.roles.cache.find(Role => Role.id == data_syst.roles_tuto_4_id);
        rang_roles_tuto_5 =  await message.guild.roles.cache.find(Role => Role.id == data_syst.roles_tuto_5_id);
        rang_roles_tuto_6 =  await message.guild.roles.cache.find(Role => Role.id == data_syst.roles_tuto_6_id);
        rang_roles_tuto_7 =  await message.guild.roles.cache.find(Role => Role.id == data_syst.roles_tuto_7_id);
        rang_roles_tuto_8 =  await message.guild.roles.cache.find(Role => Role.id == data_syst.roles_tuto_8_id);
        rang_roles_tuto_9 =  await message.guild.roles.cache.find(Role => Role.id == data_syst.roles_tuto_9_id);
        rang_roles_tuto_10 =  await message.guild.roles.cache.find(Role => Role.id == data_syst.roles_tuto_10_id);
        rang_roles_tuto_11 =  await message.guild.roles.cache.find(Role => Role.id == data_syst.roles_tuto_11_id);
        rang_roles_tuto_12 =  await message.guild.roles.cache.find(Role => Role.id == data_syst.roles_tuto_12_id);
        rang_roles_tuto_13 =  await message.guild.roles.cache.find(Role => Role.id == data_syst.roles_tuto_13_id);
        rang_roles_tuto_14 =  await message.guild.roles.cache.find(Role => Role.id == data_syst.roles_tuto_14_id);
        rang_roles_tuto_15 =  await message.guild.roles.cache.find(Role => Role.id == data_syst.roles_tuto_15_id);
        rang_roles_tuto_16 =  await message.guild.roles.cache.find(Role => Role.id == data_syst.roles_tuto_16_id);
        rang_roles_tuto_17 =  await message.guild.roles.cache.find(Role => Role.id == data_syst.roles_tuto_17_id);
        rang_roles_tuto_18 =  await message.guild.roles.cache.find(Role => Role.id == data_syst.roles_tuto_18_id);
//__________________________________________
//__________________________________________
    //__________________________________________
    //  Categorie TUTORIEL
        /*________________________________________
        "channel_tuto_bases_id" : "",
        "channel_tuto_pseudo_id" : "",
        "channel_tuto_level_id" : "",
        "channel_tuto_mention_id" : "",
        "channel_tuto_roles_id" : "",
        "channel_tuto_les_canaux_id" : "",
        "channel_tuto_les_commandes_id" : "",
        "channel_tuto_argument_id" : "",
        "channel_tuto_demarrage_id" : "",
        "channel_tuto_etoiles_id" : "",
        "channel_tuto_economie_id" : "",
        "channel_tuto_ton_profil_id" : "",
        "channel_tuto_cmd_id" : "",
        "channel_tuto_métier_id" : "",
        "channel_tuto_boutique_id" : "",
        "channel_tuto_résumé_id"  : "",
        "channel_tuto_question_id" : "",
        __________________________________________*/
        await message.channel.send("Ajout des Ajout des permissions de la catégorie **Tutoriel** !");
        take_channel = await message.guild.channels.cache.find(Collection => Collection.id == data_syst.channel_tuto_bases_id);
        role_tuto = await message.guild.roles.cache.find(Role => Role.id == data_syst.roles_tuto_1_id);
        take_channel.overwritePermissions(
            [
                {
                    id: role_coa.id,
                    deny: ['VIEW_CHANNEL'],
                },
                {
                    id: role_tuto.id,
                    allow: ['VIEW_CHANNEL','SEND_MESSAGES', 'READ_MESSAGE_HISTORY',],
                },
                {
                    id : rang_roles_tuto_2,
                    deny : ['VIEW_CHANNEL'],
                },
                {
                    id : rang_roles_tuto_3,
                    deny : ['VIEW_CHANNEL'],
                },
                {
                    id : rang_roles_tuto_4,
                    deny : ['VIEW_CHANNEL'],
                },
                {
                    id : rang_roles_tuto_5,
                    deny : ['VIEW_CHANNEL'],
                },
                {
                    id : rang_roles_tuto_6,
                    deny : ['VIEW_CHANNEL'],
                },
                {
                    id : rang_roles_tuto_7,
                    deny : ['VIEW_CHANNEL'],
                },
                {
                    id : rang_roles_tuto_8,
                    deny : ['VIEW_CHANNEL'],
                },
                {
                    id : rang_roles_tuto_9,
                    deny : ['VIEW_CHANNEL'],
                },
                {
                    id : rang_roles_tuto_10,
                    deny : ['VIEW_CHANNEL'],
                },
                {
                    id : rang_roles_tuto_11,
                    deny : ['VIEW_CHANNEL'],
                },
                {
                    id : rang_roles_tuto_12,
                    deny : ['VIEW_CHANNEL'],
                },
                {
                    id : rang_roles_tuto_13,
                    deny : ['VIEW_CHANNEL'],
                },
                {
                    id : rang_roles_tuto_14,
                    deny : ['VIEW_CHANNEL'],
                },
                {
                    id : rang_roles_tuto_15,
                    deny : ['VIEW_CHANNEL'],
                },
                {
                    id : rang_roles_tuto_16,
                    deny : ['VIEW_CHANNEL'],
                },
                {
                    id : rang_roles_tuto_17,
                    deny : ['VIEW_CHANNEL'],
                },
                {
                    id : rang_roles_tuto_18,
                    deny : ['VIEW_CHANNEL'],
                },
            ]);
        take_channel = await message.guild.channels.cache.find(Collection => Collection.id == data_syst.channel_tuto_pseudo_id);
            role_tuto = await message.guild.roles.cache.find(Role => Role.id == data_syst.roles_tuto_2_id);
                await fun_permission_allow_R_W_S_H_E_F(take_channel, role_tuto);
        take_channel = await message.guild.channels.cache.find(Collection => Collection.id == data_syst.channel_tuto_level_id);
            role_tuto = await message.guild.roles.cache.find(Role => Role.id == data_syst.roles_tuto_3_id);
                await fun_permission_allow_R_W_S_H_E_F(take_channel, role_tuto);
        take_channel = await message.guild.channels.cache.find(Collection => Collection.id == data_syst.channel_tuto_mention_id);
        role_tuto = await message.guild.roles.cache.find(Role => Role.id == data_syst.roles_tuto_4_id);
        take_channel.overwritePermissions(
            [
                {
                    id: role_coa.id,
                    allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY',],
                    deny: ['SEND_MESSAGES'],
                },
                {
                    id: role_tuto.id,
                    allow: ['VIEW_CHANNEL','SEND_MESSAGES', 'READ_MESSAGE_HISTORY',],
                },
            ]);
            
        take_channel = await message.guild.channels.cache.find(Collection => Collection.id == data_syst.channel_tuto_roles_id);
            role_tuto = await message.guild.roles.cache.find(Role => Role.id == data_syst.roles_tuto_5_id);
                await fun_permission_allow_R_W_S_H_E_F(take_channel, role_tuto);
        take_channel = await message.guild.channels.cache.find(Collection => Collection.id == data_syst.channel_tuto_les_canaux_id);
            role_tuto = await message.guild.roles.cache.find(Role => Role.id == data_syst.roles_tuto_6_id);
                await fun_permission_allow_R_W_S_H_E_F(take_channel, role_tuto);
        take_channel = await message.guild.channels.cache.find(Collection => Collection.id == data_syst.channel_tuto_les_commandes_id);
            role_tuto = await message.guild.roles.cache.find(Role => Role.id == data_syst.roles_tuto_7_id);
                await fun_permission_allow_R_W_S_H_E_F(take_channel, role_tuto);
        take_channel = await message.guild.channels.cache.find(Collection => Collection.id == data_syst.channel_tuto_argument_id);
            role_tuto = await message.guild.roles.cache.find(Role => Role.id == data_syst.roles_tuto_8_id);
                await fun_permission_allow_R_W_S_H_E_F(take_channel, role_tuto);
        take_channel = await message.guild.channels.cache.find(Collection => Collection.id == data_syst.channel_tuto_demarrage_id);
            role_tuto = await message.guild.roles.cache.find(Role => Role.id == data_syst.roles_tuto_9_id);
                await fun_permission_allow_R_W_S_H_E_F(take_channel, role_tuto);
    //___VIEW CHANNEL ETOILES FOR TUTO    
        take_channel = await message.guild.channels.cache.find(Collection => Collection.id == data_syst.channel_tuto_etoiles_id);
            role_tuto = await message.guild.roles.cache.find(Role => Role.id == data_syst.roles_tuto_10_id);
                await fun_permission_allow_R_W_S_H_E_F(take_channel, role_tuto);
/*
        take_channel = await message.guild.channels.cache.find(Collection => Collection.id == data_syst.Etoiles_id);
            await fun_permission_allow_R_H_E(take_channel, role_tuto);
*/
    //___VIEW CHANNEL ETOILES FOR TUTO
    //_____________________________________________

    //___VIEW CHANNEL ECONOMIE FOR TUTO 
        take_channel = await message.guild.channels.cache.find(Collection => Collection.id == data_syst.channel_tuto_economie_id);
            role_tuto = await message.guild.roles.cache.find(Role => Role.id == data_syst.roles_tuto_11_id);    
                await fun_permission_allow_R_W_S_H_E_F(take_channel, role_tuto);
        /*
        take_channel = await message.guild.channels.cache.find(Collection => Collection.id == data_syst.Transfert_id);
            await fun_permission_allow_R_H_E(take_channel, role_tuto);
        */
       /*
        take_channel = await message.guild.channels.cache.find(Collection => Collection.id == data_syst.Finances_id);
            await fun_permission_allow_R_H_E(take_channel, role_tuto);
        */
    //___VIEW CHANNEL ECONOMIE FOR TUTO
    //_____________________________________________

    //___VIEW CHANNEL ECONOMIE FOR TUTO
        take_channel = await message.guild.channels.cache.find(Collection => Collection.id == data_syst.channel_tuto_ton_profil_id);
            role_tuto = await message.guild.roles.cache.find(Role => Role.id == data_syst.roles_tuto_12_id);
                await fun_permission_allow_R_W_S_H_E_F(take_channel, role_tuto);
        take_channel = await message.guild.channels.cache.find(Collection => Collection.id == data_syst.Profil_id);
            await fun_permission_allow_R_H_E(take_channel, role_tuto);
    //___VIEW CHANNEL PROFIL FOR TUTO
    //_____________________________________________

        take_channel = await message.guild.channels.cache.find(Collection => Collection.id == data_syst.channel_tuto_cmd_id);
            role_tuto = await message.guild.roles.cache.find(Role => Role.id == data_syst.roles_tuto_13_id);
                await fun_permission_allow_R_W_S_H_E_F(take_channel, role_tuto);
        take_channel = await message.guild.channels.cache.find(Collection => Collection.id == data_syst.channel_tuto_métier_id);
            role_tuto = await message.guild.roles.cache.find(Role => Role.id == data_syst.roles_tuto_14_id);
                await fun_permission_allow_R_W_S_H_E_F(take_channel, role_tuto);
    //___VIEW CHANNEL BOUTIQUE FOR TUTO
            take_channel = await message.guild.channels.cache.find(Collection => Collection.id == data_syst.channel_tuto_boutique_id);
                role_tuto = await message.guild.roles.cache.find(Role => Role.id == data_syst.roles_tuto_15_id);
                    await fun_permission_allow_R_W_S_H_E_F(take_channel, role_tuto);
        /*
        take_channel = await message.guild.channels.cache.find(Collection => Collection.id == data_syst.boutique_id);
            await fun_permission_allow_R_W_S_H_E_F(take_channel, role_tuto);
        */
    //___VIEW CHANNEL BOUTIQUE FOR TUTO
    //_____________________________________________
        take_channel = await message.guild.channels.cache.find(Collection => Collection.id == data_syst.channel_tuto_résumé_id);
            role_tuto = await message.guild.roles.cache.find(Role => Role.id == data_syst.roles_tuto_16_id);
                await fun_permission_allow_R_W_S_H_E_F(take_channel, role_tuto);
    //___VIEW CHANNEL CMD_HELP FOR TUTO
        take_channel = await message.guild.channels.cache.find(Collection => Collection.id == data_syst.channel_tuto_question_id);
            role_tuto = await message.guild.roles.cache.find(Role => Role.id == data_syst.roles_tuto_17_id);
                await fun_permission_allow_R_W_S_H_E_F(take_channel, role_tuto);
    //___VIEW CHANNEL CMD_HELP FOR TUTO
    //__________________________________________
        take_channel = await message.guild.channels.cache.find(Collection => Collection.id == data_syst.Welcome_id);
            role_tuto = await message.guild.roles.cache.find(Role => Role.id == data_syst.roles_tuto_18_id);
                await fun_permission_allow_R_W_S_H_E_F(take_channel, role_tuto);
    //__________________________________________
    //__________________________________________
    message.channel.send('**Les Ajout des permissions ont été mises correctement pour l\'ensemble des canaux. Chargement, ...**');
    setTimeout(send, 20000, message);
    } catch (error) {
      console.error(error);
    }
}
exports.fun_systeme_permission_create_tuto = fun_systeme_permission_create_tuto;