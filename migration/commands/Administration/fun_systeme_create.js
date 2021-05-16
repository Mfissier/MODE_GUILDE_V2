const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const { NaN } = require('mathjs');
const { measureMemory } = require('vm');
const data_sys = require('../../data/structjson/all_systeme.json');
const { fun_sleep } = require('../Fun/fun_sleep');
const clog = console.log;
async function send(message) {
  message.channel.send('!systeme_roles_create');
}


async function fun_systeme_create(message, command) {
    try {
        message.channel.send('Creation des canaux de la catégorie ' + data_sys.Category_information_name);
        await   message.guild.channels.create(data_sys.Category_information_name, {type: 'category'});
        fun_sleep(200);
        data_sys.Category_information_id = await message.guild.channels.cache.find(Collection => Collection.name == data_sys.Category_information_name);
        fun_sleep(200);
        await   message.guild.channels.create(data_sys.Welcome_name, { reason: 'new_channels', parent: data_sys.Category_information_id});
        fun_sleep(200);
        await   message.guild.channels.create(data_sys.Système_name, { reason: 'new_channels' , parent: data_sys.Category_information_id});
        fun_sleep(200);
        await   message.guild.channels.create(data_sys.Règlement_name, { reason: 'new_channels' , parent: data_sys.Category_information_id});
        fun_sleep(200);
        await   message.guild.channels.create(data_sys.Information_name ,{ reason: 'new_channels', parent: data_sys.Category_information_id});
        fun_sleep(200);
        await   message.guild.channels.create(data_sys.Blacklist_name, { reason: 'new_channels' , parent: data_sys.Category_information_id});
        fun_sleep(200);
        await   message.guild.channels.create(data_sys.CMD_HELP_name, { reason: 'new_channels' , parent: data_sys.Category_information_id});
        fun_sleep(200);

        fun_sleep(200);
        message.channel.send('Creation des canaux de la catégorie ' + data_sys.Categorie_statistiques_name);
        await   message.guild.channels.create(data_sys.Categorie_statistiques_name, {type: 'category'});
        fun_sleep(200);
        data_sys.Categorie_statistiques_id = await message.guild.channels.cache.find(Collection => Collection.name == data_sys.Categorie_statistiques_name).id;
        fun_sleep(200);
        await   message.guild.channels.create(data_sys.Etoiles_name ,{ reason: 'new_channels', parent: data_sys.Categorie_statistiques_id});
        fun_sleep(200);
        await   message.guild.channels.create(data_sys.Recompenses_name, { reason: 'new_channels', parent: data_sys.Categorie_statistiques_id});      
        fun_sleep(200);
        await   message.guild.channels.create(data_sys.Global_name, { reason: 'new_channels', parent: data_sys.Categorie_statistiques_id});
        fun_sleep(200);
        await   message.guild.channels.create(data_sys.Guildes_name, { reason: 'new_channels', parent: data_sys.Categorie_statistiques_id});
        fun_sleep(200);
        await   message.guild.channels.create(data_sys.Ladder_name, { reason: 'new_channels', parent: data_sys.Categorie_statistiques_id});
        fun_sleep(200);
        await   message.guild.channels.create(data_sys.Categorie_vocal_name, {type: 'category'});
        fun_sleep(200);

        fun_sleep(200);
        message.channel.send('Creation des canaux de la catégorie ' + data_sys.Categorie_vocal_name);
        data_sys.Categorie_vocal_id = await message.guild.channels.cache.find(Collection => Collection.name == data_sys.Categorie_vocal_name).id;
        fun_sleep(200);
        await   message.guild.channels.create(data_sys.No_micro_name , {type: 'voice', parent : data_sys.Categorie_vocal_id});
        fun_sleep(200);
        await   message.guild.channels.create(data_sys.Taverne_name , {type: 'voice', parent : data_sys.Categorie_vocal_id});
        fun_sleep(200);
        await   message.guild.channels.create(data_sys.Donjon_name , {type: 'voice', parent : data_sys.Categorie_vocal_id});
        fun_sleep(200);
        await   message.guild.channels.create(data_sys.Donjon_2_name , {type: 'voice', parent : data_sys.Categorie_vocal_id});
        fun_sleep(200);
        await   message.guild.channels.create(data_sys.Donjon_3_name , {type: 'voice', parent : data_sys.Categorie_vocal_id});
        fun_sleep(200);
        await   message.guild.channels.create(data_sys.Autres_name , {type: 'voice', parent : data_sys.Categorie_vocal_id});
        fun_sleep(200);
        await   message.guild.channels.create(data_sys.AFK_name , {type: 'voice', parent : data_sys.Categorie_vocal_id});
        fun_sleep(200);

        fun_sleep(200);
        message.channel.send('Creation des canaux de la catégorie ' + data_sys.Categorie_général_name);
        await   message.guild.channels.create(data_sys.Categorie_général_name, {type: 'category'});
        fun_sleep(200);
        data_sys.Categorie_général_id = await message.guild.channels.cache.find(Collection => Collection.name == data_sys.Categorie_général_name).id;
        fun_sleep(200);
        await   message.guild.channels.create(data_sys.Annonces_name, { reason: 'new_channels' , parent: data_sys.Categorie_général_id});        
        fun_sleep(200);
        await   message.guild.channels.create(data_sys.Discussion_name ,{ reason: 'new_channels', parent: data_sys.Categorie_général_id});
        fun_sleep(200);
        await   message.guild.channels.create(data_sys.Events_name, { reason: 'new_channels', parent: data_sys.Categorie_général_id});
        fun_sleep(200);
        await   message.guild.channels.create(data_sys.Profil_name ,{ reason: 'new_channels', parent: data_sys.Categorie_général_id});
        fun_sleep(200);
        await   message.guild.channels.create(data_sys.Question_name ,{ reason: 'new_channels', parent: data_sys.Categorie_général_id});
        fun_sleep(200);

        fun_sleep(200);
        message.channel.send('Creation des canaux de la catégorie ' + data_sys.Categorie_boutique_name);
        await   message.guild.channels.create(data_sys.Categorie_boutique_name, {type: 'category'});
        fun_sleep(200);
        data_sys.Categorie_boutique_id = await message.guild.channels.cache.find(Collection => Collection.name == data_sys.Categorie_boutique_name).id;
        fun_sleep(200);
        await   message.guild.channels.create(data_sys.boutique_name ,{ reason: 'new_channels', parent: data_sys.Categorie_boutique_id});
        fun_sleep(200);
        await   message.guild.channels.create(data_sys.Finances_name ,{ reason: 'new_channels', parent: data_sys.Categorie_boutique_id});
        fun_sleep(200);
        await   message.guild.channels.create(data_sys.Transfert_name ,{ reason: 'new_channels', parent: data_sys.Categorie_boutique_id});
        fun_sleep(200);
        await   message.guild.channels.create(data_sys.Artisan_name ,{ reason: 'new_channels', parent: data_sys.Categorie_boutique_id});
        fun_sleep(200);
        await   message.guild.channels.create(data_sys.Commerce_name ,{ reason: 'new_channels', parent: data_sys.Categorie_boutique_id});
        fun_sleep(200);

        fun_sleep(200);
        message.channel.send('Creation des canaux de la catégorie ' + data_sys.Categorie_métiers_name);
        await   message.guild.channels.create(data_sys.Categorie_métiers_name, {type: 'category'});
        fun_sleep(200);
        data_sys.Categorie_métiers_id = await message.guild.channels.cache.find(Collection => Collection.name == data_sys.Categorie_métiers_name).id;        
        fun_sleep(200);
        await   message.guild.channels.create(data_sys.Succès_name ,{ reason: 'new_channels', parent: data_sys.Categorie_métiers_id});
        fun_sleep(200);
        await   message.guild.channels.create(data_sys.Espion_name ,{ reason: 'new_channels', parent: data_sys.Categorie_métiers_id});
        fun_sleep(200);
        await   message.guild.channels.create(data_sys.Tueur_name ,{ reason: 'new_channels', parent: data_sys.Categorie_métiers_id});
        fun_sleep(200);
        await   message.guild.channels.create(data_sys.Chercheur_name ,{ reason: 'new_channels', parent: data_sys.Categorie_métiers_id});
        fun_sleep(200);
        await   message.guild.channels.create(data_sys.Muse_name ,{ reason: 'new_channels', parent: data_sys.Categorie_métiers_id});
        fun_sleep(200);
        await   message.guild.channels.create(data_sys.Braconnier_name ,{ reason: 'new_channels', parent: data_sys.Categorie_métiers_id});
        fun_sleep(200);

        fun_sleep(200);
        message.channel.send('Creation des canaux de la catégorie ' + data_sys.Categorie_AVA_name);
        await   message.guild.channels.create(data_sys.Categorie_AVA_name, {type: 'category'});
        fun_sleep(200);
        data_sys.Categorie_AVA_id = await message.guild.channels.cache.find(Collection => Collection.name == data_sys.Categorie_AVA_name).id;
        fun_sleep(200);
        await   message.guild.channels.create(data_sys.Information_AVA_name ,{ reason: 'new_channels', parent: data_sys.Categorie_AVA_id});
        fun_sleep(200);
        await   message.guild.channels.create(data_sys.Tutoriel_name ,{ reason: 'new_channels', parent: data_sys.Categorie_AVA_id});
        fun_sleep(200);
        await   message.guild.channels.create(data_sys.VOCAL_Destruction , {type: 'voice', parent : data_sys.Categorie_AVA_id});
        fun_sleep(200);

        fun_sleep(200);
        message.channel.send('Creation des canaux de la catégorie ' + data_sys.Categorie_illyzael_name);
        await   message.guild.channels.create(data_sys.Categorie_illyzael_name, {type: 'category'});
        fun_sleep(200);
        data_sys.Categorie_illyzael_id = await message.guild.channels.cache.find(Collection => Collection.name == data_sys.Categorie_illyzael_name).id;
        fun_sleep(200);
        await   message.guild.channels.create(data_sys.Dofus_news_name, { reason: 'new_channels', parent: data_sys.Categorie_illyzael_id});
        fun_sleep(200);
        await   message.guild.channels.create(data_sys.Almanax_name, { reason: 'new_channels', parent: data_sys.Categorie_illyzael_id});
        fun_sleep(200);
        await   message.guild.channels.create(data_sys.Portail_name, { reason: 'new_channels', parent: data_sys.Categorie_illyzael_id});
        fun_sleep(200);

        fun_sleep(200);
        message.channel.send('Creation des canaux de la catégorie ' + data_sys.Categorie_court_martial_name);
        await   message.guild.channels.create(data_sys.Categorie_court_martial_name, {type: 'category'});
        fun_sleep(200);
        data_sys.Categorie_court_martial_id = await message.guild.channels.cache.find(Collection => Collection.name == data_sys.Categorie_court_martial_name).id;
        fun_sleep(200);
        await   message.guild.channels.create(data_sys.Sondage_name ,{ reason: 'new_channels', parent: data_sys.Categorie_court_martial_id});
        fun_sleep(200);
        await   message.guild.channels.create(data_sys.Idées_name ,{ reason: 'new_channels', parent: data_sys.Categorie_court_martial_id});
        fun_sleep(200);
        await   message.guild.channels.create(data_sys.Report_name ,{ reason: 'new_channels', parent: data_sys.Categorie_court_martial_id});
        fun_sleep(200);

        fun_sleep(200);
        message.channel.send('Creation des canaux de la catégorie ' + data_sys.Categorie_Staff_coa_name);
        await   message.guild.channels.create(data_sys.Categorie_Staff_coa_name, {type: 'category'});
        fun_sleep(200);
        data_sys.Categorie_Staff_coa_id = await message.guild.channels.cache.find(Collection => Collection.name == data_sys.Categorie_Staff_coa_name).id;
        fun_sleep(200);
        await   message.guild.channels.create(data_sys.Projet_name ,{ reason: 'new_channels', parent: data_sys.Categorie_Staff_coa_id});
        fun_sleep(200);
        await   message.guild.channels.create(data_sys.Staff_coa_name ,{ reason: 'new_channels', parent: data_sys.Categorie_Staff_coa_id});
        fun_sleep(200);
        await   message.guild.channels.create(data_sys.CMD_HELP_STAFF_name ,{ reason: 'new_channels', parent: data_sys.Categorie_Staff_coa_id});
        fun_sleep(200);
        await   message.guild.channels.create(data_sys.Chat_staff_coa , {type: 'voice', parent : data_sys.Categorie_Staff_coa_id});
        fun_sleep(200);

        fun_sleep(200);
        message.channel.send('Creation des canaux de la catégorie ' + data_sys.Categorie_Tutoriel_name);
        await   message.guild.channels.create(data_sys.Categorie_Tutoriel_name, {type: 'category'});
        fun_sleep(200);
        data_sys.Categorie_Tutoriel_id = await message.guild.channels.cache.find(Collection => Collection.name == data_sys.Categorie_Tutoriel_name).id;
        fun_sleep(200);
        await   message.guild.channels.create(data_sys.channel_tuto_bases_name ,{ reason: 'new_channels', parent: data_sys.Categorie_Tutoriel_id});
        fun_sleep(200);
        await   message.guild.channels.create(data_sys.channel_tuto_pseudo_name ,{ reason: 'new_channels', parent: data_sys.Categorie_Tutoriel_id});
        fun_sleep(200);
        await   message.guild.channels.create(data_sys.channel_tuto_level_name ,{ reason: 'new_channels', parent: data_sys.Categorie_Tutoriel_id});
        fun_sleep(200);
        await   message.guild.channels.create(data_sys.channel_tuto_mention_name ,{ reason: 'new_channels', parent: data_sys.Categorie_Tutoriel_id});
        fun_sleep(200);
        await   message.guild.channels.create(data_sys.channel_tuto_roles_name ,{ reason: 'new_channels', parent: data_sys.Categorie_Tutoriel_id});
        fun_sleep(200);

        fun_sleep(200);
        await   message.guild.channels.create(data_sys.channel_tuto_les_canaux_name ,{ reason: 'new_channels', parent: data_sys.Categorie_Tutoriel_id});
        fun_sleep(200);
        await   message.guild.channels.create(data_sys.channel_tuto_les_commandes_name ,{ reason: 'new_channels', parent: data_sys.Categorie_Tutoriel_id});
        fun_sleep(200);
        await   message.guild.channels.create(data_sys.channel_tuto_argument_name ,{ reason: 'new_channels', parent: data_sys.Categorie_Tutoriel_id});
        fun_sleep(200);
        await   message.guild.channels.create(data_sys.channel_tuto_demarrage_name ,{ reason: 'new_channels', parent: data_sys.Categorie_Tutoriel_id});
        fun_sleep(200);
        await   message.guild.channels.create(data_sys.channel_tuto_etoiles_name ,{ reason: 'new_channels', parent: data_sys.Categorie_Tutoriel_id});
        fun_sleep(200);

        fun_sleep(200);
        await   message.guild.channels.create(data_sys.channel_tuto_economie_name ,{ reason: 'new_channels', parent: data_sys.Categorie_Tutoriel_id});
        fun_sleep(200);
        await   message.guild.channels.create(data_sys.channel_tuto_ton_profil_name ,{ reason: 'new_channels', parent: data_sys.Categorie_Tutoriel_id});
        fun_sleep(200);
        await   message.guild.channels.create(data_sys.channel_tuto_cmd_name ,{ reason: 'new_channels', parent: data_sys.Categorie_Tutoriel_id});
        fun_sleep(200);
        await   message.guild.channels.create(data_sys.channel_tuto_métier_name ,{ reason: 'new_channels', parent: data_sys.Categorie_Tutoriel_id});
        fun_sleep(200);
        await   message.guild.channels.create(data_sys.channel_tuto_boutique_name ,{ reason: 'new_channels', parent: data_sys.Categorie_Tutoriel_id});
        fun_sleep(200);

        fun_sleep(200);
        await   message.guild.channels.create(data_sys.channel_tuto_résumé_name ,{ reason: 'new_channels', parent: data_sys.Categorie_Tutoriel_id});
        fun_sleep(200);
        await   message.guild.channels.create(data_sys.channel_tuto_question_name ,{ reason: 'new_channels', parent: data_sys.Categorie_Tutoriel_id});
        fun_sleep(200);

        message.channel.send("**Les canaux ont bien été créés, chargement...**");
        setTimeout(send, 5000, message);
    } catch (error) {
      console.error(error);
    }
}
exports.fun_systeme_create = fun_systeme_create;

