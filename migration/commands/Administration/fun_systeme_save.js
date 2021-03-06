const Discord = require('discord.js');
const data_sys = require('../../data/structjson/all_systeme.json');
const { fun_mkdir } = require('../Fun/fun_mkdir');
var fs = require('fs');
const { fun_sleep } = require('../Fun/fun_sleep');
async function fun_systeme_save(message)
{
    try {
    fun_mkdir("./data/Save/all_systeme");
    fun_sleep(2000);
    data_sys.statue_systeme = true;
    let path = __dirname + '/../../data/Save/all_systeme/' ;
    fun_sleep(2000);
    fs.writeFileSync(path + 'RANG_COALITION_ID.txt', data_sys.RANG_COALITION_ID.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'RANG_NOMADE_ID.txt', data_sys.RANG_NOMADE_ID.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'statue_systeme.txt', data_sys.statue_systeme.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'RANG_TRESORIER_ID.txt', data_sys.RANG_TRESORIER_ID.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'RANG_PROTECTEUR_ID.txt', data_sys.RANG_PROTECTEUR_ID.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'RANG_CHERCHEUR_DE_TRESOR_ID.txt', data_sys.RANG_CHERCHEUR_DE_TRESOR_ID.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'RANG_SECRETAIRE_ID.txt', data_sys.RANG_SECRETAIRE_ID.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'RANG_RECRUTEUR_ID.txt', data_sys.RANG_RECRUTEUR_ID.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'RANG_TUEUR_DE_PERCEPTEUR_ID.txt', data_sys.RANG_TUEUR_DE_PERCEPTEUR_ID.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'RANG_BRACONNIER_ID.txt', data_sys.RANG_BRACONNIER_ID.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'RANG_APPRENTIE_ID.txt', data_sys.RANG_APPRENTIE_ID.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'RANG_PENITENT_ID.txt', data_sys.RANG_PENITENT_ID.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'RANG_BOULET_ID.txt', data_sys.RANG_BOULET_ID.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'RANG_RESERVISTE_ID.txt', data_sys.RANG_RESERVISTE_ID.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'RANG_ESPION_ID.txt', data_sys.RANG_ESPION_ID.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'RANG_ESSAI_ID.txt', data_sys.RANG_ESSAI_ID.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'RANG_DESERTEUR_ID.txt', data_sys.RANG_DESERTEUR_ID.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'RANG_INITIE_ID.txt', data_sys.RANG_INITIE_ID.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'RANG_ARTISAN_ID.txt', data_sys.RANG_ARTISAN_ID.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'RANG_MASCOTTE_ID.txt', data_sys.RANG_MASCOTTE_ID.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'MEMBRE_NON_GUILDE_ID.txt', data_sys.MEMBRE_NON_GUILDE_ID.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'RANG_MUSE_ID.txt', data_sys.RANG_MUSE_ID.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'NOUVEAU_ID.txt', data_sys.NOUVEAU_ID.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'STAFF_ID.txt', data_sys.STAFF_ID.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'LOCK_BOT.txt', data_sys.LOCK_BOT.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'nbr_guilde.txt', data_sys.nbr_guilde.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'coffre_all_guild.txt', data_sys.coffre_all_guild.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'value_stars.txt', data_sys.value_stars.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'nbr_total_star.txt', data_sys.nbr_total_star.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'nbr_total_membre.txt', data_sys.nbr_total_membre.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'nbr_total_membre_absent.txt', data_sys.nbr_total_membre_absent.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'usr_moyenne_level.txt', data_sys.usr_moyenne_level.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'recompenses.txt', data_sys.recompenses.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'like_all_users_guild.txt', data_sys.like_all_users_guild.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'donjon_all.txt', data_sys.donjon_all.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'defense_all.txt', data_sys.defense_all.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'attack_all.txt', data_sys.attack_all.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'search_perco_all.txt', data_sys.search_perco_all.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'skin_all.txt', data_sys.skin_all.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'AVA_all.txt', data_sys.AVA_all.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'don_all.txt', data_sys.don_all.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'vol_all.txt', data_sys.vol_all.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'best_stars_membre.txt', data_sys.best_stars_membre.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'best_attaq_member.txt', data_sys.best_attaq_member.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'best_def_member.txt', data_sys.best_def_member.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'best_ava_member.txt', data_sys.best_ava_member.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'best_skinner_member.txt', data_sys.best_skinner_member.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'best_likeur_member.txt', data_sys.best_likeur_member.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'best_like_me_member.txt', data_sys.best_like_me_member.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'best_search_perco_member.txt', data_sys.best_search_perco_member.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'best_vol_member.txt', data_sys.best_vol_member.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'best_espion_member.txt', data_sys.best_espion_member.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'winrate_vol.txt', data_sys.winrate_vol.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'defeat_vol.txt', data_sys.defeat_vol.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'best_butin_player.txt', data_sys.best_butin_player.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'best_recruteur.txt', data_sys.best_recruteur.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'best_gouverneur.txt', data_sys.best_gouverneur.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'best_player_tresorerie.txt', data_sys.best_player_tresorerie.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'best_taxe_pos_perco.txt', data_sys.best_taxe_pos_perco.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Category_information_id.txt', data_sys.Category_information_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Welcome_id.txt', data_sys.Welcome_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Système_id.txt', data_sys.Système_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Règlement_id.txt', data_sys.Règlement_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Information_id.txt', data_sys.Information_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'CMD_HELP_id.txt', data_sys.CMD_HELP_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Blacklist_id.txt', data_sys.Blacklist_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Categorie_statistiques_id.txt', data_sys.Categorie_statistiques_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Etoiles_id.txt', data_sys.Etoiles_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Recompenses_id.txt', data_sys.Recompenses_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Global_id.txt', data_sys.Global_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Guildes_id.txt', data_sys.Guildes_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Ladder_id.txt', data_sys.Ladder_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Categorie_vocal_id.txt', data_sys.Categorie_vocal_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Categorie_général_id.txt', data_sys.Categorie_général_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Annonces_id.txt', data_sys.Annonces_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Discussion_id.txt', data_sys.Discussion_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Events_id.txt', data_sys.Events_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Profil_id.txt', data_sys.Profil_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Question_id.txt', data_sys.Question_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Categorie_boutique_id.txt', data_sys.Categorie_boutique_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'boutique_id.txt', data_sys.boutique_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Finances_id.txt', data_sys.Finances_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Transfert_id.txt', data_sys.Transfert_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Artisan_id.txt', data_sys.Artisan_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Commerce_id.txt', data_sys.Commerce_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Categorie_métiers_id.txt', data_sys.Categorie_métiers_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Succès_id.txt', data_sys.Succès_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Espion_id.txt', data_sys.Espion_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Tueur_id.txt', data_sys.Tueur_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Chercheur_id.txt', data_sys.Chercheur_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Muse_id.txt', data_sys.Muse_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Braconnier_id.txt', data_sys.Braconnier_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Categorie_AVA_id.txt', data_sys.Categorie_AVA_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Information_AVA_id.txt', data_sys.Information_AVA_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Tutoriel_id.txt', data_sys.Tutoriel_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Categorie_illyzael_id.txt', data_sys.Categorie_illyzael_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Dofus_news_id.txt', data_sys.Dofus_news_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Almanax_id.txt', data_sys.Almanax_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Portail_id.txt', data_sys.Portail_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Categorie_court_martial_id.txt', data_sys.Categorie_court_martial_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Idées_id.txt', data_sys.Idées_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Sondage_id.txt', data_sys.Sondage_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Report_id.txt', data_sys.Report_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Categorie_Staff_coa_id.txt', data_sys.Categorie_Staff_coa_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Projet_id.txt', data_sys.Projet_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Staff_coa_id.txt', data_sys.Staff_coa_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Staff_coa_pos_perco_id.txt', data_sys.Staff_coa_pos_perco_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'CMD_HELP_STAFF_id.txt', data_sys.CMD_HELP_STAFF_id.toString(), (err)=>{if (err) console.log("An error happened");});


    
    
    
    fs.writeFileSync(path + 'Likeur_bronze_id.txt', data_sys.Likeur_bronze_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Likeur_argent_id.txt', data_sys.Likeur_argent_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Likeur_or_id.txt', data_sys.Likeur_or_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Likeur_Platine_id.txt', data_sys.Likeur_Platine_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Recruteur_bronze_id.txt', data_sys.Recruteur_bronze_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Recruteur_argent_id.txt', data_sys.Recruteur_argent_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Recruteur_Or_id.txt', data_sys.Recruteur_Or_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Recruteur_Platine_id.txt', data_sys.Recruteur_Platine_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Espion_bronze_id.txt', data_sys.Espion_bronze_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Espion_argent_id.txt', data_sys.Espion_argent_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Espion_Or_id.txt', data_sys.Espion_Or_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Espion_Platine_id.txt', data_sys.Espion_Platine_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Muse_bronze_id.txt', data_sys.Muse_bronze_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Muse_argent_id.txt', data_sys.Muse_argent_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Muse_Or_id.txt', data_sys.Muse_Or_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Muse_Platine_id.txt', data_sys.Muse_Platine_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Attaquant_bronze_id.txt', data_sys.Attaquant_bronze_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Attaquant_argent_id.txt', data_sys.Attaquant_argent_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Attaquant_Or_id.txt', data_sys.Attaquant_Or_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Attaquant_Platine_id.txt', data_sys.Attaquant_Platine_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Defenseur_bronze_id.txt', data_sys.Defenseur_bronze_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Defenseur_argent_id.txt', data_sys.Defenseur_argent_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Defenseur_Or_id.txt', data_sys.Defenseur_Or_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Defenseur_Platine_id.txt', data_sys.Defenseur_Platine_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Braconnier_bronze_id.txt', data_sys.Braconnier_bronze_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Braconnier_argent_id.txt', data_sys.Braconnier_argent_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Braconnier_Or_id.txt', data_sys.Braconnier_Or_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Braconnier_Platine_id.txt', data_sys.Braconnier_Platine_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Chercheur_de_Trésor_bronze_id.txt', data_sys.Chercheur_de_Trésor_bronze_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Chercheur_de_Trésor_argent_id.txt', data_sys.Chercheur_de_Trésor_argent_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Chercheur_de_Trésor_Or_id.txt', data_sys.Chercheur_de_Trésor_Or_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Chercheur_de_Trésor_Platine_id.txt', data_sys.Chercheur_de_Trésor_Platine_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Voleur_bronze_id.txt', data_sys.Voleur_bronze_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Voleur_argent_id.txt', data_sys.Voleur_argent_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Voleur_Or_id.txt', data_sys.Voleur_Or_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Voleur_Platine_id.txt', data_sys.Voleur_Platine_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Donateur_bronze_id.txt', data_sys.Donateur_bronze_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Donateur_argent_id.txt', data_sys.Donateur_argent_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Donateur_Or_id.txt', data_sys.Donateur_Or_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'Donateur_Platine_id.txt', data_sys.Donateur_Platine_id.toString(), (err)=>{if (err) console.log("An error happened");});
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    


    fs.writeFileSync(path + 'Categorie_Tutoriel_id.txt', data_sys.Categorie_Tutoriel_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'channel_tuto_bases_id.txt', data_sys.channel_tuto_bases_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'channel_tuto_pseudo_id.txt', data_sys.channel_tuto_pseudo_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'channel_tuto_level_id.txt', data_sys.channel_tuto_level_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'channel_tuto_mention_id.txt', data_sys.channel_tuto_mention_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'channel_tuto_roles_id.txt', data_sys.channel_tuto_roles_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'channel_tuto_les_canaux_id.txt', data_sys.channel_tuto_les_canaux_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'channel_tuto_les_commandes_id.txt', data_sys.channel_tuto_les_commandes_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'channel_tuto_argument_id.txt', data_sys.channel_tuto_argument_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'channel_tuto_demarrage_id.txt', data_sys.channel_tuto_demarrage_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'channel_tuto_etoiles_id.txt', data_sys.channel_tuto_etoiles_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'channel_tuto_economie_id.txt', data_sys.channel_tuto_economie_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'channel_tuto_ton_profil_id.txt', data_sys.channel_tuto_ton_profil_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'channel_tuto_cmd_id.txt', data_sys.channel_tuto_cmd_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'channel_tuto_métier_id.txt', data_sys.channel_tuto_métier_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'channel_tuto_boutique_id.txt', data_sys.channel_tuto_boutique_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'channel_tuto_résumé_id.txt', data_sys.channel_tuto_résumé_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'channel_tuto_question_id.txt', data_sys.channel_tuto_question_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'roles_tuto_1_id.txt', data_sys.roles_tuto_1_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'roles_tuto_2_id.txt', data_sys.roles_tuto_2_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'roles_tuto_3_id.txt', data_sys.roles_tuto_3_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'roles_tuto_4_id.txt', data_sys.roles_tuto_4_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'roles_tuto_5_id.txt', data_sys.roles_tuto_5_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'roles_tuto_6_id.txt', data_sys.roles_tuto_6_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'roles_tuto_7_id.txt', data_sys.roles_tuto_7_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'roles_tuto_8_id.txt', data_sys.roles_tuto_8_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'roles_tuto_9_id.txt', data_sys.roles_tuto_9_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'roles_tuto_10_id.txt', data_sys.roles_tuto_10_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'roles_tuto_11_id.txt', data_sys.roles_tuto_11_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'roles_tuto_12_id.txt', data_sys.roles_tuto_12_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'roles_tuto_13_id.txt', data_sys.roles_tuto_13_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'roles_tuto_14_id.txt', data_sys.roles_tuto_14_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'roles_tuto_15_id.txt', data_sys.roles_tuto_15_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'roles_tuto_16_id.txt', data_sys.roles_tuto_16_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'roles_tuto_17_id.txt', data_sys.roles_tuto_17_id.toString(), (err)=>{if (err) console.log("An error happened");});
    fs.writeFileSync(path + 'roles_tuto_18_id.txt', data_sys.roles_tuto_18_id.toString(), (err)=>{if (err) console.log("An error happened");});
    message.channel.send('**Fin de la création du système en commun...**');
    
    } catch (error) {
        console.error(error);  
    }
}
exports.fun_systeme_save = fun_systeme_save;
/*
*/