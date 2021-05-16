const Discord = require('discord.js');
const { fun_sleep } = require('../Fun/fun_sleep');
data_syst = require('../../data/structjson/all_systeme.json');


async function send(message) {
  message.channel.send('!systeme_permission_create');
}

async function fun_systeme_data_create(message, command)
{
    try {


































      data_syst.RANG_NOMADE_ID = await message.guild.roles.cache.find(Role => Role.name === data_syst.RANG_NOMADE).id;
      data_syst.RANG_COALITION_ID = await message.guild.roles.cache.find(Role => Role.name === data_syst.RANG_COALITION).id;
      data_syst.RANG_TRESORIER_ID = await message.guild.roles.cache.find(Role => Role.name === data_syst.RANG_TRESORIER).id;
      data_syst.RANG_PROTECTEUR_ID = await message.guild.roles.cache.find(Role => Role.name === data_syst.RANG_PROTECTEUR).id;
      data_syst.RANG_CHERCHEUR_DE_TRESOR_ID = await message.guild.roles.cache.find(Role => Role.name === data_syst.RANG_CHERCHEUR_DE_TRESOR).id;
      data_syst.RANG_SECRETAIRE_ID = await message.guild.roles.cache.find(Role => Role.name === data_syst.RANG_SECRETAIRE).id;
      data_syst.RANG_RECRUTEUR_ID = await message.guild.roles.cache.find(Role => Role.name === data_syst.RANG_RECRUTEUR).id;
      data_syst.RANG_TUEUR_DE_PERCEPTEUR_ID = await message.guild.roles.cache.find(Role => Role.name === data_syst.RANG_TUEUR_DE_PERCEPTEUR).id;
      data_syst.RANG_BRACONNIER_ID = await message.guild.roles.cache.find(Role => Role.name === data_syst.RANG_BRACONNIER).id;
      data_syst.RANG_APPRENTIE_ID = await message.guild.roles.cache.find(Role => Role.name === data_syst.RANG_APPRENTIE).id;
      data_syst.RANG_PENITENT_ID = await message.guild.roles.cache.find(Role => Role.name === data_syst.RANG_PENITENT).id;
      data_syst.RANG_BOULET_ID = await message.guild.roles.cache.find(Role => Role.name === data_syst.RANG_BOULET).id;
      data_syst.RANG_RESERVISTE_ID = await message.guild.roles.cache.find(Role => Role.name === data_syst.RANG_RESERVISTE).id;
      data_syst.RANG_ESPION_ID = await message.guild.roles.cache.find(Role => Role.name === data_syst.RANG_ESPION).id;
      data_syst.RANG_ESSAI_ID = await message.guild.roles.cache.find(Role => Role.name === data_syst.RANG_ESSAI).id;
      data_syst.RANG_DESERTEUR_ID = await message.guild.roles.cache.find(Role => Role.name === data_syst.RANG_DESERTEUR).id;
      data_syst.RANG_INITIE_ID = await message.guild.roles.cache.find(Role => Role.name === data_syst.RANG_INITIE).id;
      data_syst.RANG_ARTISAN_ID = await message.guild.roles.cache.find(Role => Role.name === data_syst.RANG_ARTISAN).id;
      data_syst.RANG_MASCOTTE_ID = await message.guild.roles.cache.find(Role => Role.name === data_syst.RANG_MASCOTTE).id;
      data_syst.MEMBRE_NON_GUILDE_ID = await message.guild.roles.cache.find(Role => Role.name === data_syst.RANG_MEMBRE_NON_GUILDE).id;
      data_syst.RANG_MUSE_ID = await message.guild.roles.cache.find(Role => Role.name === data_syst.RANG_MUSE).id;
      data_syst.NOUVEAU_ID = await message.guild.roles.cache.find(Role => Role.name === data_syst.RANG_NOUVEAU).id;
      data_syst.STAFF_ID = await message.guild.roles.cache.find(Role => Role.name === data_syst.STAFF).id;


      data_syst.Likeur_bronze_id = await message.guild.roles.cache.find(Role => Role.name === data_syst.Likeur_bronze_name).id;
      data_syst.Likeur_argent_id = await message.guild.roles.cache.find(Role => Role.name === data_syst.Likeur_argent_name).id;
      data_syst.Likeur_or_id = await message.guild.roles.cache.find(Role => Role.name === data_syst.Likeur_or_name).id;
      data_syst.Likeur_Platine_id = await message.guild.roles.cache.find(Role => Role.name === data_syst.Likeur_Platine_name).id;
      data_syst.Recruteur_bronze_id = await message.guild.roles.cache.find(Role => Role.name === data_syst.Recruteur_bronze_name).id;
      data_syst.Recruteur_argent_id = await message.guild.roles.cache.find(Role => Role.name === data_syst.Recruteur_argent_name).id;
      data_syst.Recruteur_Or_id = await message.guild.roles.cache.find(Role => Role.name === data_syst.Recruteur_Or_name).id;
      data_syst.Recruteur_Platine_id = await message.guild.roles.cache.find(Role => Role.name === data_syst.Recruteur_Platine_name).id;
      data_syst.Espion_bronze_id = await message.guild.roles.cache.find(Role => Role.name === data_syst.Espion_bronze_name).id;
      data_syst.Espion_argent_id = await message.guild.roles.cache.find(Role => Role.name === data_syst.Espion_argent_name).id;
      data_syst.Espion_Or_id = await message.guild.roles.cache.find(Role => Role.name === data_syst.Espion_Or_name).id;
      data_syst.Espion_Platine_id = await message.guild.roles.cache.find(Role => Role.name === data_syst.Espion_Platine_name).id;
      data_syst.Muse_bronze_id = await message.guild.roles.cache.find(Role => Role.name === data_syst.Muse_bronze_name).id;
      data_syst.Muse_argent_id = await message.guild.roles.cache.find(Role => Role.name === data_syst.Muse_argent_name).id;
      data_syst.Muse_Or_id = await message.guild.roles.cache.find(Role => Role.name === data_syst.Muse_Or_name).id;
      data_syst.Muse_Platine_id = await message.guild.roles.cache.find(Role => Role.name === data_syst.Muse_Platine_name).id;
      data_syst.Attaquant_bronze_id = await message.guild.roles.cache.find(Role => Role.name === data_syst.Attaquant_bronze_name).id;
      data_syst.Attaquant_argent_id = await message.guild.roles.cache.find(Role => Role.name === data_syst.Attaquant_argent_name).id;
      data_syst.Attaquant_Or_id = await message.guild.roles.cache.find(Role => Role.name === data_syst.Attaquant_Or_name).id;
      data_syst.Attaquant_Platine_id = await message.guild.roles.cache.find(Role => Role.name === data_syst.Attaquant_Platine_name).id;
      data_syst.Defenseur_bronze_id = await message.guild.roles.cache.find(Role => Role.name === data_syst.Defenseur_bronze_name).id;
      data_syst.Defenseur_argent_id = await message.guild.roles.cache.find(Role => Role.name === data_syst.Defenseur_argent_name).id;
      data_syst.Defenseur_Or_id = await message.guild.roles.cache.find(Role => Role.name === data_syst.Defenseur_Or_name).id;
      data_syst.Defenseur_Platine_id = await message.guild.roles.cache.find(Role => Role.name === data_syst.Defenseur_Platine_name).id;
      data_syst.Braconnier_bronze_id = await message.guild.roles.cache.find(Role => Role.name === data_syst.Braconnier_bronze_name).id;
      data_syst.Braconnier_argent_id = await message.guild.roles.cache.find(Role => Role.name === data_syst.Braconnier_argent_name).id;
      data_syst.Braconnier_Or_id = await message.guild.roles.cache.find(Role => Role.name === data_syst.Braconnier_Or_name).id;
      data_syst.Braconnier_Platine_id = await message.guild.roles.cache.find(Role => Role.name === data_syst.Braconnier_Platine_name).id;
      data_syst.Chercheur_de_Trésor_bronze_id = await message.guild.roles.cache.find(Role => Role.name === data_syst.Chercheur_de_Trésor_bronze_name).id;
      data_syst.Chercheur_de_Trésor_argent_id = await message.guild.roles.cache.find(Role => Role.name === data_syst.Chercheur_de_Trésor_argent_name).id;
      data_syst.Chercheur_de_Trésor_Or_id = await message.guild.roles.cache.find(Role => Role.name === data_syst.Chercheur_de_Trésor_Or_name).id;
      data_syst.Chercheur_de_Trésor_Platine_id = await message.guild.roles.cache.find(Role => Role.name === data_syst.Chercheur_de_Trésor_Platine_name).id;
      data_syst.Voleur_bronze_id = await message.guild.roles.cache.find(Role => Role.name === data_syst.Voleur_bronze_name).id;
      data_syst.Voleur_argent_id = await message.guild.roles.cache.find(Role => Role.name === data_syst.Voleur_argent_name).id;
      data_syst.Voleur_Or_id = await message.guild.roles.cache.find(Role => Role.name === data_syst.Voleur_Or_name).id;
      data_syst.Voleur_Platine_id = await message.guild.roles.cache.find(Role => Role.name === data_syst.Voleur_Platine_name).id;
      data_syst.Donateur_bronze_id = await message.guild.roles.cache.find(Role => Role.name === data_syst.Donateur_bronze_name).id;
      data_syst.Donateur_argent_id = await message.guild.roles.cache.find(Role => Role.name === data_syst.Donateur_argent_name).id;
      data_syst.Donateur_Or_id = await message.guild.roles.cache.find(Role => Role.name === data_syst.Donateur_Or_name).id;
      data_syst.Donateur_Platine_id = await message.guild.roles.cache.find(Role => Role.name === data_syst.Donateur_Platine_name).id;

      

      data_syst.Welcome_id = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.Welcome_name).id;
      data_syst.Système_id = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.Système_name).id;
      data_syst.Règlement_id = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.Règlement_name).id;
      data_syst.Information_id = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.Information_name).id;
      data_syst.Blacklist_id   = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.Blacklist_name).id;
      data_syst.CMD_HELP_id  = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.CMD_HELP_name).id;
      data_syst.Etoiles_id = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.Etoiles_name).id;
      data_syst.Recompenses_id = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.Recompenses_name).id;
      data_syst.Global_id = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.Global_name).id;
      data_syst.Guildes_id = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.Guildes_name).id;
      data_syst.Ladder_id = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.Ladder_name).id;
      data_syst.Annonces_id = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.Annonces_name).id;
      data_syst.Discussion_id = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.Discussion_name).id;
      data_syst.Events_id = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.Events_name).id;
      data_syst.Idées_id = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.Idées_name).id;
      data_syst.Profil_id = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.Profil_name).id;
      data_syst.Question_id  = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.Question_name).id;
      data_syst.boutique_id = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.boutique_name).id;
      data_syst.Finances_id = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.Finances_name).id;
      data_syst.Transfert_id = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.Transfert_name).id;
      data_syst.Artisan_id = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.Artisan_name).id;
      data_syst.Commerce_id = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.Commerce_name).id;
      data_syst.Succès_id  = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.Succès_name).id;
      data_syst.Espion_id = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.Espion_name).id;
      data_syst.Tueur_id = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.Tueur_name).id;
      data_syst.Chercheur_id = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.Chercheur_name).id;
      data_syst.Muse_id = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.Muse_name).id;
      data_syst.Braconnier_id = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.Braconnier_name).id;
      data_syst.Information_AVA_id = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.Information_AVA_name).id;
      data_syst.Tutoriel_id = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.Tutoriel_name).id;
      data_syst.Dofus_news_id = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.Dofus_news_name).id;
      data_syst.Almanax_id = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.Almanax_name).id;
      data_syst.Portail_id = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.Portail_name).id;
      data_syst.Sondage_id = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.Sondage_name).id;
      data_syst.Report_id = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.Report_name).id;
      data_syst.Projet_id = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.Projet_name).id;
      data_syst.Staff_coa_id = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.Staff_coa_name).id;
      data_syst.Staff_coa_pos_perco_id = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.Staff_coa_pos_perco_name).id;
      data_syst.CMD_HELP_STAFF_id = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.CMD_HELP_STAFF_name).id;

      data_syst.channel_tuto_bases_id = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.channel_tuto_bases_name).id;
      data_syst.channel_tuto_pseudo_id = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.channel_tuto_pseudo_name).id;
      data_syst.channel_tuto_level_id = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.channel_tuto_level_name).id;
      data_syst.channel_tuto_mention_id = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.channel_tuto_mention_name).id;
      data_syst.channel_tuto_roles_id = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.channel_tuto_roles_name).id;
      data_syst.channel_tuto_les_canaux_id = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.channel_tuto_les_canaux_name).id;
      data_syst.channel_tuto_les_commandes_id = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.channel_tuto_les_commandes_name).id;
      data_syst.channel_tuto_argument_id = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.channel_tuto_argument_name).id;
      data_syst.channel_tuto_demarrage_id = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.channel_tuto_demarrage_name).id;
      data_syst.channel_tuto_etoiles_id = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.channel_tuto_etoiles_name).id;
      data_syst.channel_tuto_economie_id = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.channel_tuto_economie_name).id;
      data_syst.channel_tuto_ton_profil_id = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.channel_tuto_ton_profil_name).id;
      data_syst.channel_tuto_cmd_id = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.channel_tuto_cmd_name).id;
      data_syst.channel_tuto_métier_id = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.channel_tuto_métier_name).id;
      data_syst.channel_tuto_boutique_id = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.channel_tuto_boutique_name).id;
      data_syst.channel_tuto_résumé_id = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.channel_tuto_résumé_name).id;
      data_syst.channel_tuto_question_id = await message.guild.channels.cache.find(Collection => Collection.name == data_syst.channel_tuto_question_name).id;
      




      data_syst.roles_tuto_1_id = await message.guild.roles.cache.find(Role => Role.name === data_syst.roles_tuto_1_name).id;
      data_syst.roles_tuto_2_id = await message.guild.roles.cache.find(Role => Role.name === data_syst.roles_tuto_2_name).id;
      data_syst.roles_tuto_3_id = await message.guild.roles.cache.find(Role => Role.name === data_syst.roles_tuto_3_name).id;
      data_syst.roles_tuto_4_id = await message.guild.roles.cache.find(Role => Role.name === data_syst.roles_tuto_4_name).id;
      data_syst.roles_tuto_5_id = await message.guild.roles.cache.find(Role => Role.name === data_syst.roles_tuto_5_name).id;
      data_syst.roles_tuto_6_id = await message.guild.roles.cache.find(Role => Role.name === data_syst.roles_tuto_6_name).id;
      data_syst.roles_tuto_7_id = await message.guild.roles.cache.find(Role => Role.name === data_syst.roles_tuto_7_name).id;
      data_syst.roles_tuto_8_id = await message.guild.roles.cache.find(Role => Role.name === data_syst.roles_tuto_8_name).id;
      data_syst.roles_tuto_9_id = await message.guild.roles.cache.find(Role => Role.name === data_syst.roles_tuto_9_name).id;
      data_syst.roles_tuto_10_id = await message.guild.roles.cache.find(Role => Role.name === data_syst.roles_tuto_10_name).id;
      data_syst.roles_tuto_11_id = await message.guild.roles.cache.find(Role => Role.name === data_syst.roles_tuto_11_name).id;
      data_syst.roles_tuto_12_id = await message.guild.roles.cache.find(Role => Role.name === data_syst.roles_tuto_12_name).id;
      data_syst.roles_tuto_13_id = await message.guild.roles.cache.find(Role => Role.name === data_syst.roles_tuto_13_name).id;
      data_syst.roles_tuto_14_id = await message.guild.roles.cache.find(Role => Role.name === data_syst.roles_tuto_14_name).id;
      data_syst.roles_tuto_15_id = await message.guild.roles.cache.find(Role => Role.name === data_syst.roles_tuto_15_name).id;
      data_syst.roles_tuto_16_id = await message.guild.roles.cache.find(Role => Role.name === data_syst.roles_tuto_16_name).id;
      data_syst.roles_tuto_17_id = await message.guild.roles.cache.find(Role => Role.name === data_syst.roles_tuto_17_name).id;
      data_syst.roles_tuto_18_id = await message.guild.roles.cache.find(Role => Role.name === data_syst.roles_tuto_18_name).id;

      message.channel.send("**La data a bien été créé et organisé. Chargement,...**");
      setTimeout(send, 5000, message);
    } catch (error) {
    console.error(error);
  }
}
exports.fun_systeme_data_create = fun_systeme_data_create;