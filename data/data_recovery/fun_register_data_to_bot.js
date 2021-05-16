const Discord = require('discord.js');
data_syst = require('../structjson/all_systeme.json');
const fs = require('fs');
const { fun_register_tuto } = require('./fun_register_tuto');

function fun_check_data(data)
{
    if (data == 'undefined')
        return (undefined);
    if (data == 'NaN')
        return (NaN);
    if (data == 'false')
        return (false);
    if (data == 'true')
        return (true);
    if (parseInt(data, 10) < 100000000000 && parseInt(data, 10) != NaN)
        return (parseInt(data,10));
    return(data);
}




async function fun_register_data_to_bot(message, command)
{
    //=================================================================================================================================================================
    // ======================================================================= DATA_ALL_SYSTEME ============================================================================
    //=================================================================================================================================================================
    let path = __dirname + '/../Save/all_systeme/';    
     if (fs.existsSync(path + "RANG_COALITION_ID.txt")) 
          data_syst.RANG_COALITION_ID = fun_check_data(fs.readFileSync(path + "RANG_COALITION_ID.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "RANG_NOMADE_ID.txt")) 
          data_syst.RANG_NOMADE_ID = fun_check_data(fs.readFileSync(path + "RANG_NOMADE_ID.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "statue_systeme.txt")) 
          data_syst.statue_systeme = fun_check_data(fs.readFileSync(path + "statue_systeme.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "RANG_TRESORIER_ID.txt")) 
          data_syst.RANG_TRESORIER_ID = fun_check_data(fs.readFileSync(path + "RANG_TRESORIER_ID.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "RANG_PROTECTEUR_ID.txt")) 
          data_syst.RANG_PROTECTEUR_ID = fun_check_data(fs.readFileSync(path + "RANG_PROTECTEUR_ID.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "RANG_CHERCHEUR_DE_TRESOR_ID.txt")) 
          data_syst.RANG_CHERCHEUR_DE_TRESOR_ID = fun_check_data(fs.readFileSync(path + "RANG_CHERCHEUR_DE_TRESOR_ID.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "RANG_SECRETAIRE_ID.txt")) 
          data_syst.RANG_SECRETAIRE_ID = fun_check_data(fs.readFileSync(path + "RANG_SECRETAIRE_ID.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "RANG_RECRUTEUR_ID.txt")) 
          data_syst.RANG_RECRUTEUR_ID = fun_check_data(fs.readFileSync(path + "RANG_RECRUTEUR_ID.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "RANG_TUEUR_DE_PERCEPTEUR_ID.txt")) 
          data_syst.RANG_TUEUR_DE_PERCEPTEUR_ID = fun_check_data(fs.readFileSync(path + "RANG_TUEUR_DE_PERCEPTEUR_ID.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "RANG_BRACONNIER_ID.txt")) 
          data_syst.RANG_BRACONNIER_ID = fun_check_data(fs.readFileSync(path + "RANG_BRACONNIER_ID.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "RANG_APPRENTIE_ID.txt")) 
          data_syst.RANG_APPRENTIE_ID = fun_check_data(fs.readFileSync(path + "RANG_APPRENTIE_ID.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "RANG_PENITENT_ID.txt")) 
          data_syst.RANG_PENITENT_ID = fun_check_data(fs.readFileSync(path + "RANG_PENITENT_ID.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "RANG_BOULET_ID.txt")) 
          data_syst.RANG_BOULET_ID = fun_check_data(fs.readFileSync(path + "RANG_BOULET_ID.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "RANG_RESERVISTE_ID.txt")) 
          data_syst.RANG_RESERVISTE_ID = fun_check_data(fs.readFileSync(path + "RANG_RESERVISTE_ID.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "RANG_ESPION_ID.txt")) 
          data_syst.RANG_ESPION_ID = fun_check_data(fs.readFileSync(path + "RANG_ESPION_ID.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "RANG_ESSAI_ID.txt")) 
          data_syst.RANG_ESSAI_ID = fun_check_data(fs.readFileSync(path + "RANG_ESSAI_ID.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "RANG_DESERTEUR_ID.txt")) 
          data_syst.RANG_DESERTEUR_ID = fun_check_data(fs.readFileSync(path + "RANG_DESERTEUR_ID.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "RANG_INITIE_ID.txt")) 
          data_syst.RANG_INITIE_ID = fun_check_data(fs.readFileSync(path + "RANG_INITIE_ID.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());




     if (fs.existsSync(path + "RANG_ARTISAN_ID.txt")) 
          data_syst.RANG_ARTISAN_ID = fun_check_data(fs.readFileSync(path + "RANG_ARTISAN_ID.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "RANG_MASCOTTE_ID.txt")) 
          data_syst.RANG_MASCOTTE_ID = fun_check_data(fs.readFileSync(path + "RANG_MASCOTTE_ID.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "MEMBRE_NON_GUILDE_ID.txt")) 
          data_syst.MEMBRE_NON_GUILDE_ID = fun_check_data(fs.readFileSync(path + "MEMBRE_NON_GUILDE_ID.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "RANG_MUSE_ID.txt")) 
          data_syst.RANG_MUSE_ID = fun_check_data(fs.readFileSync(path + "RANG_MUSE_ID.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "NOUVEAU_ID.txt")) 
          data_syst.NOUVEAU_ID = fun_check_data(fs.readFileSync(path + "NOUVEAU_ID.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "STAFF_ID.txt")) 
          data_syst.STAFF_ID = fun_check_data(fs.readFileSync(path + "STAFF_ID.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "LOCK_BOT.txt")) 
          data_syst.LOCK_BOT = fun_check_data(fs.readFileSync(path + "LOCK_BOT.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "nbr_guilde.txt")) 
         data_syst.nbr_guilde = fun_check_data(fs.readFileSync(path + "nbr_guilde.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "coffre_all_guild.txt")) 
          data_syst.coffre_all_guild = fun_check_data(fs.readFileSync(path + "coffre_all_guild.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "value_stars.txt")) 
          data_syst.value_stars = fun_check_data(fs.readFileSync(path + "value_stars.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "nbr_total_star.txt")) 
          data_syst.nbr_total_star = fun_check_data(fs.readFileSync(path + "nbr_total_star.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "nbr_total_membre.txt")) 
          data_syst.nbr_total_membre = fun_check_data(fs.readFileSync(path + "nbr_total_membre.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "nbr_total_membre_absent.txt")) 
          data_syst.nbr_total_membre_absent = fun_check_data(fs.readFileSync(path + "nbr_total_membre_absent.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "usr_moyenne_level.txt")) 
          data_syst.usr_moyenne_level = fun_check_data(fs.readFileSync(path + "usr_moyenne_level.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "recompenses.txt")) 
          data_syst.recompenses = fun_check_data(fs.readFileSync(path + "recompenses.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "like_all_users_guild.txt")) 
          data_syst.like_all_users_guild = fun_check_data(fs.readFileSync(path + "like_all_users_guild.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "donjon_all.txt")) 
          data_syst.donjon_all = fun_check_data(fs.readFileSync(path + "donjon_all.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "defense_all.txt")) 
          data_syst.defense_all = fun_check_data(fs.readFileSync(path + "defense_all.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "attack_all.txt")) 
          data_syst.attack_all = fun_check_data(fs.readFileSync(path + "attack_all.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "search_perco_all.txt")) 
          data_syst.search_perco_all = fun_check_data(fs.readFileSync(path + "search_perco_all.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "skin_all.txt")) 
          data_syst.skin_all = fun_check_data(fs.readFileSync(path + "skin_all.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "AVA_all.txt")) 
          data_syst.AVA_all = fun_check_data(fs.readFileSync(path + "AVA_all.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "don_all.txt")) 
          data_syst.don_all = fun_check_data(fs.readFileSync(path + "don_all.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "vol_all.txt")) 
          data_syst.vol_all = fun_check_data(fs.readFileSync(path + "vol_all.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "best_stars_membre.txt")) 
          data_syst.best_stars_membre = fun_check_data(fs.readFileSync(path + "best_stars_membre.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "best_attaq_member.txt")) 
          data_syst.best_attaq_member = fun_check_data(fs.readFileSync(path + "best_attaq_member.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "best_def_member.txt")) 
          data_syst.best_def_member = fun_check_data(fs.readFileSync(path + "best_def_member.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "best_ava_member.txt")) 
          data_syst.best_ava_member = fun_check_data(fs.readFileSync(path + "best_ava_member.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "best_skinner_member.txt")) 
          data_syst.best_skinner_member = fun_check_data(fs.readFileSync(path + "best_skinner_member.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "best_likeur_member.txt")) 
          data_syst.best_likeur_member = fun_check_data(fs.readFileSync(path + "best_likeur_member.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "best_like_me_member.txt")) 
          data_syst.best_like_me_member = fun_check_data(fs.readFileSync(path + "best_like_me_member.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "best_search_perco_member.txt")) 
          data_syst.best_search_perco_member = fun_check_data(fs.readFileSync(path + "best_search_perco_member.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "best_vol_member.txt")) 
          data_syst.best_vol_member = fun_check_data(fs.readFileSync(path + "best_vol_member.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "best_espion_member.txt")) 
          data_syst.best_espion_member = fun_check_data(fs.readFileSync(path + "best_espion_member.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "winrate_vol.txt")) 
          data_syst.winrate_vol = fun_check_data(fs.readFileSync(path + "winrate_vol.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "defeat_vol.txt")) 
          data_syst.defeat_vol = fun_check_data(fs.readFileSync(path + "defeat_vol.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "best_butin_player.txt")) 
          data_syst.best_butin_player = fun_check_data(fs.readFileSync(path + "best_butin_player.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "best_recruteur.txt")) 
          data_syst.best_recruteur = fun_check_data(fs.readFileSync(path + "best_recruteur.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "best_gouverneur.txt")) 
          data_syst.best_gouverneur = fun_check_data(fs.readFileSync(path + "best_gouverneur.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "best_player_tresorerie.txt")) 
          data_syst.best_player_tresorerie = fun_check_data(fs.readFileSync(path + "best_player_tresorerie.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "best_taxe_pos_perco.txt")) 
          data_syst.best_taxe_pos_perco = fun_check_data(fs.readFileSync(path + "best_taxe_pos_perco.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "Category_information_id.txt")) 
          data_syst.Category_information_id = fun_check_data(fs.readFileSync(path + "Category_information_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "Welcome_id.txt")) 
          data_syst.Welcome_id = fun_check_data(fs.readFileSync(path + "Welcome_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "Système_id.txt")) 
          data_syst.Système_id = fun_check_data(fs.readFileSync(path + "Système_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "Règlement_id.txt")) 
          data_syst.Règlement_id = fun_check_data(fs.readFileSync(path + "Règlement_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "Information_id.txt")) 
          data_syst.Information_id = fun_check_data(fs.readFileSync(path + "Information_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "CMD_HELP_id.txt")) 
          data_syst.CMD_HELP_id = fun_check_data(fs.readFileSync(path + "CMD_HELP_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "Blacklist_id.txt")) 
          data_syst.Blacklist_id = fun_check_data(fs.readFileSync(path + "Blacklist_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "Categorie_statistiques_id.txt")) 
          data_syst.Categorie_statistiques_id = fun_check_data(fs.readFileSync(path + "Categorie_statistiques_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "Etoiles_id.txt")) 
          data_syst.Etoiles_id = fun_check_data(fs.readFileSync(path + "Etoiles_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "Recompenses_id.txt")) 
          data_syst.Recompenses_id = fun_check_data(fs.readFileSync(path + "Recompenses_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "Global_id.txt")) 
          data_syst.Global_id = fun_check_data(fs.readFileSync(path + "Global_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "Guildes_id.txt")) 
          data_syst.Guildes_id = fun_check_data(fs.readFileSync(path + "Guildes_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "Ladder_id.txt")) 
          data_syst.Ladder_id = fun_check_data(fs.readFileSync(path + "Ladder_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "Categorie_vocal_id.txt")) 
          data_syst.Categorie_vocal_id = fun_check_data(fs.readFileSync(path + "Categorie_vocal_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "Categorie_général_id.txt")) 
          data_syst.Categorie_général_id = fun_check_data(fs.readFileSync(path + "Categorie_général_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "Annonces_id.txt")) 
          data_syst.Annonces_id = fun_check_data(fs.readFileSync(path + "Annonces_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "Discussion_id.txt")) 
          data_syst.Discussion_id = fun_check_data(fs.readFileSync(path + "Discussion_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "Events_id.txt")) 
          data_syst.Events_id = fun_check_data(fs.readFileSync(path + "Events_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "Profil_id.txt")) 
          data_syst.Profil_id = fun_check_data(fs.readFileSync(path + "Profil_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "Question_id.txt")) 
          data_syst.Question_id = fun_check_data(fs.readFileSync(path + "Question_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "Categorie_boutique_id.txt")) 
          data_syst.Categorie_boutique_id = fun_check_data(fs.readFileSync(path + "Categorie_boutique_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "boutique_id.txt")) 
          data_syst.boutique_id = fun_check_data(fs.readFileSync(path + "boutique_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());     
     if (fs.existsSync(path + "Finances_id.txt")) 
          data_syst.Finances_id = fun_check_data(fs.readFileSync(path + "Finances_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "Transfert_id.txt")) 
          data_syst.Transfert_id = fun_check_data(fs.readFileSync(path + "Transfert_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "Artisan_id.txt")) 
          data_syst.Artisan_id = fun_check_data(fs.readFileSync(path + "Artisan_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "Commerce_id.txt")) 
          data_syst.Commerce_id = fun_check_data(fs.readFileSync(path + "Commerce_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "Categorie_métiers_id.txt")) 
          data_syst.Categorie_métiers_id = fun_check_data(fs.readFileSync(path + "Categorie_métiers_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "Succès_id.txt")) 
          data_syst.Succès_id = fun_check_data(fs.readFileSync(path + "Succès_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "Espion_id.txt")) 
          data_syst.Espion_id = fun_check_data(fs.readFileSync(path + "Espion_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "Tueur_id.txt")) 
          data_syst.Tueur_id = fun_check_data(fs.readFileSync(path + "Tueur_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "Chercheur_id.txt")) 
          data_syst.Chercheur_id = fun_check_data(fs.readFileSync(path + "Chercheur_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "Muse_id.txt")) 
          data_syst.Muse_id = fun_check_data(fs.readFileSync(path + "Muse_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "Braconnier_id.txt")) 
          data_syst.Braconnier_id = fun_check_data(fs.readFileSync(path + "Braconnier_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "Categorie_AVA_id.txt")) 
          data_syst.Categorie_AVA_id = fun_check_data(fs.readFileSync(path + "Categorie_AVA_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "Information_AVA_id.txt")) 
          data_syst.Information_AVA_id = fun_check_data(fs.readFileSync(path + "Information_AVA_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "Tutoriel_id.txt")) 
          data_syst.Tutoriel_id = fun_check_data(fs.readFileSync(path + "Tutoriel_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "Categorie_illyzael_id.txt")) 
          data_syst.Categorie_illyzael_id = fun_check_data(fs.readFileSync(path + "Categorie_illyzael_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "Dofus_news_id.txt")) 
          data_syst.Dofus_news_id = fun_check_data(fs.readFileSync(path + "Dofus_news_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "Almanax_id.txt")) 
          data_syst.Almanax_id = fun_check_data(fs.readFileSync(path + "Almanax_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "Portail_id.txt")) 
          data_syst.Portail_id = fun_check_data(fs.readFileSync(path + "Portail_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "Categorie_court_martial_id.txt")) 
          data_syst.Categorie_court_martial_id = fun_check_data(fs.readFileSync(path + "Categorie_court_martial_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "Idées_id.txt")) 
          data_syst.Idées_id = fun_check_data(fs.readFileSync(path + "Idées_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "Sondage_id.txt")) 
          data_syst.Sondage_id = fun_check_data(fs.readFileSync(path + "Sondage_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "Report_id.txt")) 
          data_syst.Report_id = fun_check_data(fs.readFileSync(path + "Report_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "Categorie_Staff_coa_id.txt")) 
          data_syst.Categorie_Staff_coa_id = fun_check_data(fs.readFileSync(path + "Categorie_Staff_coa_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "Projet_id.txt")) 
          data_syst.Projet_id = fun_check_data(fs.readFileSync(path + "Projet_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "Staff_coa_id.txt")) 
          data_syst.Staff_coa_id = fun_check_data(fs.readFileSync(path + "Staff_coa_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "Staff_coa_pos_perco_id.txt")) 
          data_syst.Staff_coa_pos_perco_id = fun_check_data(fs.readFileSync(path + "Staff_coa_pos_perco_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "CMD_HELP_STAFF_id.txt")) 
          data_syst.CMD_HELP_STAFF_id = fun_check_data(fs.readFileSync(path + "CMD_HELP_STAFF_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
       
     if (fs.existsSync(path + "Categorie_Tutoriel_id.txt")) 
        data_syst.Categorie_Tutoriel_id = fun_check_data(fs.readFileSync(path + "Categorie_Tutoriel_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "channel_tuto_bases_id.txt")) 
        data_syst.channel_tuto_bases_id = fun_check_data(fs.readFileSync(path + "channel_tuto_bases_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "channel_tuto_pseudo_id.txt")) 
        data_syst.channel_tuto_pseudo_id = fun_check_data(fs.readFileSync(path + "channel_tuto_pseudo_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "channel_tuto_level_id.txt")) 
        data_syst.channel_tuto_level_id = fun_check_data(fs.readFileSync(path + "channel_tuto_level_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "channel_tuto_mention_id.txt")) 
        data_syst.channel_tuto_mention_id = fun_check_data(fs.readFileSync(path + "channel_tuto_mention_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "channel_tuto_roles_id.txt")) 
        data_syst.channel_tuto_roles_id = fun_check_data(fs.readFileSync(path + "channel_tuto_roles_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "channel_tuto_les_canaux_id.txt")) 
        data_syst.channel_tuto_les_canaux_id = fun_check_data(fs.readFileSync(path + "channel_tuto_les_canaux_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "channel_tuto_les_commandes_id.txt")) 
        data_syst.channel_tuto_les_commandes_id = fun_check_data(fs.readFileSync(path + "channel_tuto_les_commandes_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "channel_tuto_argument_id.txt")) 
        data_syst.channel_tuto_argument_id = fun_check_data(fs.readFileSync(path + "channel_tuto_argument_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "channel_tuto_demarrage_id.txt")) 
        data_syst.channel_tuto_demarrage_id = fun_check_data(fs.readFileSync(path + "channel_tuto_demarrage_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "channel_tuto_etoiles_id.txt")) 
        data_syst.channel_tuto_etoiles_id = fun_check_data(fs.readFileSync(path + "channel_tuto_etoiles_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "channel_tuto_economie_id.txt")) 
        data_syst.channel_tuto_economie_id = fun_check_data(fs.readFileSync(path + "channel_tuto_economie_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "channel_tuto_ton_profil_id.txt")) 
        data_syst.channel_tuto_ton_profil_id = fun_check_data(fs.readFileSync(path + "channel_tuto_ton_profil_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "channel_tuto_cmd_id.txt")) 
        data_syst.channel_tuto_cmd_id = fun_check_data(fs.readFileSync(path + "channel_tuto_cmd_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "channel_tuto_métier_id.txt")) 
        data_syst.channel_tuto_métier_id = fun_check_data(fs.readFileSync(path + "channel_tuto_métier_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "channel_tuto_boutique_id.txt")) 
        data_syst.channel_tuto_boutique_id = fun_check_data(fs.readFileSync(path + "channel_tuto_boutique_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "channel_tuto_résumé_id.txt")) 
        data_syst.channel_tuto_résumé_id = fun_check_data(fs.readFileSync(path + "channel_tuto_résumé_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "channel_tuto_question_id.txt")) 
        data_syst.channel_tuto_question_id = fun_check_data(fs.readFileSync(path + "channel_tuto_question_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "roles_tuto_1_id.txt")) 
        data_syst.roles_tuto_1_id = fun_check_data(fs.readFileSync(path + "roles_tuto_1_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "roles_tuto_2_id.txt")) 
        data_syst.roles_tuto_2_id = fun_check_data(fs.readFileSync(path + "roles_tuto_2_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "roles_tuto_3_id.txt")) 
        data_syst.roles_tuto_3_id = fun_check_data(fs.readFileSync(path + "roles_tuto_3_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "roles_tuto_4_id.txt")) 
        data_syst.roles_tuto_4_id = fun_check_data(fs.readFileSync(path + "roles_tuto_4_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "roles_tuto_5_id.txt")) 
        data_syst.roles_tuto_5_id = fun_check_data(fs.readFileSync(path + "roles_tuto_5_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "roles_tuto_6_id.txt")) 
        data_syst.roles_tuto_6_id = fun_check_data(fs.readFileSync(path + "roles_tuto_6_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "roles_tuto_7_id.txt")) 
        data_syst.roles_tuto_7_id = fun_check_data(fs.readFileSync(path + "roles_tuto_7_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "roles_tuto_8_id.txt")) 
        data_syst.roles_tuto_8_id = fun_check_data(fs.readFileSync(path + "roles_tuto_8_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "roles_tuto_9_id.txt")) 
        data_syst.roles_tuto_9_id = fun_check_data(fs.readFileSync(path + "roles_tuto_9_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "roles_tuto_10_id.txt")) 
        data_syst.roles_tuto_10_id = fun_check_data(fs.readFileSync(path + "roles_tuto_10_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "roles_tuto_11_id.txt")) 
        data_syst.roles_tuto_11_id = fun_check_data(fs.readFileSync(path + "roles_tuto_11_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "roles_tuto_12_id.txt")) 
        data_syst.roles_tuto_12_id = fun_check_data(fs.readFileSync(path + "roles_tuto_12_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "roles_tuto_13_id.txt")) 
        data_syst.roles_tuto_13_id = fun_check_data(fs.readFileSync(path + "roles_tuto_13_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "roles_tuto_14_id.txt")) 
        data_syst.roles_tuto_14_id = fun_check_data(fs.readFileSync(path + "roles_tuto_14_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "roles_tuto_15_id.txt")) 
        data_syst.roles_tuto_15_id = fun_check_data(fs.readFileSync(path + "roles_tuto_15_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "roles_tuto_16_id.txt")) 
        data_syst.roles_tuto_16_id = fun_check_data(fs.readFileSync(path + "roles_tuto_16_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "roles_tuto_17_id.txt")) 
        data_syst.roles_tuto_17_id = fun_check_data(fs.readFileSync(path + "roles_tuto_17_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
     if (fs.existsSync(path + "roles_tuto_18_id.txt")) 
        data_syst.roles_tuto_18_id = fun_check_data(fs.readFileSync(path + "roles_tuto_18_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
            
            
        
        if (fs.existsSync(path + "Likeur_bronze_id.txt")) 
          data_syst.Likeur_bronze_id = fun_check_data(fs.readFileSync(path + "Likeur_bronze_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
        if (fs.existsSync(path + "Likeur_argent_id.txt")) 
          data_syst.Likeur_argent_id = fun_check_data(fs.readFileSync(path + "Likeur_argent_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
        if (fs.existsSync(path + "Likeur_or_id.txt")) 
          data_syst.Likeur_or_id = fun_check_data(fs.readFileSync(path + "Likeur_or_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
        if (fs.existsSync(path + "Likeur_Platine_id.txt")) 
          data_syst.Likeur_Platine_id = fun_check_data(fs.readFileSync(path + "Likeur_Platine_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
        if (fs.existsSync(path + "Recruteur_bronze_id.txt")) 
          data_syst.Recruteur_bronze_id = fun_check_data(fs.readFileSync(path + "Recruteur_bronze_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
        if (fs.existsSync(path + "Recruteur_argent_id.txt")) 
          data_syst.Recruteur_argent_id = fun_check_data(fs.readFileSync(path + "Recruteur_argent_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
        if (fs.existsSync(path + "Recruteur_Or_id.txt")) 
          data_syst.Recruteur_Or_id = fun_check_data(fs.readFileSync(path + "Recruteur_Or_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
        if (fs.existsSync(path + "Recruteur_Platine_id.txt")) 
          data_syst.Recruteur_Platine_id = fun_check_data(fs.readFileSync(path + "Recruteur_Platine_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
        if (fs.existsSync(path + "Espion_bronze_id.txt")) 
          data_syst.Espion_bronze_id = fun_check_data(fs.readFileSync(path + "Espion_bronze_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
        if (fs.existsSync(path + "Espion_argent_id.txt")) 
          data_syst.Espion_argent_id = fun_check_data(fs.readFileSync(path + "Espion_argent_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
        if (fs.existsSync(path + "Espion_Or_id.txt")) 
          data_syst.Espion_Or_id = fun_check_data(fs.readFileSync(path + "Espion_Or_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
        if (fs.existsSync(path + "Espion_Platine_id.txt")) 
          data_syst.Espion_Platine_id = fun_check_data(fs.readFileSync(path + "Espion_Platine_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
        if (fs.existsSync(path + "Muse_bronze_id.txt")) 
          data_syst.Muse_bronze_id = fun_check_data(fs.readFileSync(path + "Muse_bronze_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
        if (fs.existsSync(path + "Muse_argent_id.txt")) 
          data_syst.Muse_argent_id = fun_check_data(fs.readFileSync(path + "Muse_argent_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
        if (fs.existsSync(path + "Muse_Or_id.txt")) 
          data_syst.Muse_Or_id = fun_check_data(fs.readFileSync(path + "Muse_Or_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
        if (fs.existsSync(path + "Muse_Platine_id.txt")) 
          data_syst.Muse_Platine_id = fun_check_data(fs.readFileSync(path + "Muse_Platine_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
        if (fs.existsSync(path + "Attaquant_bronze_id.txt")) 
          data_syst.Attaquant_bronze_id = fun_check_data(fs.readFileSync(path + "Attaquant_bronze_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
        if (fs.existsSync(path + "Attaquant_argent_id.txt")) 
          data_syst.Attaquant_argent_id = fun_check_data(fs.readFileSync(path + "Attaquant_argent_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
        if (fs.existsSync(path + "Attaquant_Or_id.txt")) 
          data_syst.Attaquant_Or_id = fun_check_data(fs.readFileSync(path + "Attaquant_Or_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
        if (fs.existsSync(path + "Attaquant_Platine_id.txt")) 
          data_syst.Attaquant_Platine_id = fun_check_data(fs.readFileSync(path + "Attaquant_Platine_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
        if (fs.existsSync(path + "Defenseur_bronze_id.txt")) 
          data_syst.Defenseur_bronze_id = fun_check_data(fs.readFileSync(path + "Defenseur_bronze_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
        if (fs.existsSync(path + "Defenseur_argent_id.txt")) 
          data_syst.Defenseur_argent_id = fun_check_data(fs.readFileSync(path + "Defenseur_argent_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
        if (fs.existsSync(path + "Defenseur_Or_id.txt")) 
          data_syst.Defenseur_Or_id = fun_check_data(fs.readFileSync(path + "Defenseur_Or_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
        if (fs.existsSync(path + "Defenseur_Platine_id.txt")) 
          data_syst.Defenseur_Platine_id = fun_check_data(fs.readFileSync(path + "Defenseur_Platine_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
        if (fs.existsSync(path + "Braconnier_bronze_id.txt")) 
          data_syst.Braconnier_bronze_id = fun_check_data(fs.readFileSync(path + "Braconnier_bronze_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
        if (fs.existsSync(path + "Braconnier_argent_id.txt")) 
          data_syst.Braconnier_argent_id = fun_check_data(fs.readFileSync(path + "Braconnier_argent_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
        if (fs.existsSync(path + "Braconnier_Or_id.txt")) 
          data_syst.Braconnier_Or_id = fun_check_data(fs.readFileSync(path + "Braconnier_Or_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
        if (fs.existsSync(path + "Braconnier_Platine_id.txt")) 
          data_syst.Braconnier_Platine_id = fun_check_data(fs.readFileSync(path + "Braconnier_Platine_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
        if (fs.existsSync(path + "Chercheur_de_Trésor_bronze_id.txt")) 
          data_syst.Chercheur_de_Trésor_bronze_id = fun_check_data(fs.readFileSync(path + "Chercheur_de_Trésor_bronze_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
        if (fs.existsSync(path + "Chercheur_de_Trésor_argent_id.txt")) 
          data_syst.Chercheur_de_Trésor_argent_id = fun_check_data(fs.readFileSync(path + "Chercheur_de_Trésor_argent_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
        if (fs.existsSync(path + "Chercheur_de_Trésor_Or_id.txt")) 
          data_syst.Chercheur_de_Trésor_Or_id = fun_check_data(fs.readFileSync(path + "Chercheur_de_Trésor_Or_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
        if (fs.existsSync(path + "Chercheur_de_Trésor_Platine_id.txt")) 
          data_syst.Chercheur_de_Trésor_Platine_id = fun_check_data(fs.readFileSync(path + "Chercheur_de_Trésor_Platine_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
        if (fs.existsSync(path + "Voleur_bronze_id.txt")) 
          data_syst.Voleur_bronze_id = fun_check_data(fs.readFileSync(path + "Voleur_bronze_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
        if (fs.existsSync(path + "Voleur_argent_id.txt")) 
          data_syst.Voleur_argent_id = fun_check_data(fs.readFileSync(path + "Voleur_argent_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
        if (fs.existsSync(path + "Voleur_Or_id.txt")) 
          data_syst.Voleur_Or_id = fun_check_data(fs.readFileSync(path + "Voleur_Or_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
        if (fs.existsSync(path + "Voleur_Platine_id.txt")) 
          data_syst.Voleur_Platine_id = fun_check_data(fs.readFileSync(path + "Voleur_Platine_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
        if (fs.existsSync(path + "Donateur_bronze_id.txt")) 
          data_syst.Donateur_bronze_id = fun_check_data(fs.readFileSync(path + "Donateur_bronze_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
        if (fs.existsSync(path + "Donateur_argent_id.txt")) 
          data_syst.Donateur_argent_id = fun_check_data(fs.readFileSync(path + "Donateur_argent_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
        if (fs.existsSync(path + "Donateur_Or_id.txt")) 
          data_syst.Donateur_Or_id = fun_check_data(fs.readFileSync(path + "Donateur_Or_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
        if (fs.existsSync(path + "Donateur_Platine_id.txt")) 
          data_syst.Donateur_Platine_id = fun_check_data(fs.readFileSync(path + "Donateur_Platine_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());






























































































// console.log("Likeur_bronze_id" + data_syst.Likeur_bronze_id);
// console.log("Likeur_argent_id" + data_syst.Likeur_argent_id);
// console.log("Likeur_or_id" + data_syst.Likeur_or_id);
// console.log("Likeur_Platine_id" + data_syst.Likeur_Platine_id);
// console.log("Recruteur_bronze_id" + data_syst.Recruteur_bronze_id);
// console.log("Recruteur_argent_id" + data_syst.Recruteur_argent_id);
// console.log("Recruteur_Or_id" + data_syst.Recruteur_Or_id);
// console.log("Recruteur_Platine_id" + data_syst.Recruteur_Platine_id);
// console.log("Espion_bronze_id" + data_syst.Espion_bronze_id);
// console.log("Espion_argent_id" + data_syst.Espion_argent_id);
// console.log("Espion_Or_id" + data_syst.Espion_Or_id);
// console.log("Espion_Platine_id" + data_syst.Espion_Platine_id);
// console.log("Muse_bronze_id" + data_syst.Muse_bronze_id);
// console.log("Muse_argent_id" + data_syst.Muse_argent_id);
// console.log("Muse_Or_id" + data_syst.Muse_Or_id);
// console.log("Muse_Platine_id" + data_syst.Muse_Platine_id);
// console.log("Attaquant_bronze_id" + data_syst.Attaquant_bronze_id);
// console.log("Attaquant_argent_id" + data_syst.Attaquant_argent_id);
// console.log("Attaquant_Or_id" + data_syst.Attaquant_Or_id);
// console.log("Attaquant_Platine_id" + data_syst.Attaquant_Platine_id);
// console.log("Defenseur_bronze_id" + data_syst.Defenseur_bronze_id);
// console.log("Defenseur_argent_id" + data_syst.Defenseur_argent_id);
// console.log("Defenseur_Or_id" + data_syst.Defenseur_Or_id);
// console.log("Defenseur_Platine_id" + data_syst.Defenseur_Platine_id);
// console.log("Braconnier_bronze_id" + data_syst.Braconnier_bronze_id);
// console.log("Braconnier_argent_id" + data_syst.Braconnier_argent_id);
// console.log("Braconnier_Or_id" + data_syst.Braconnier_Or_id);
// console.log("Braconnier_Platine_id" + data_syst.Braconnier_Platine_id);
// console.log("Chercheur_de_Trésor_bronze_id" + data_syst.Chercheur_de_Trésor_bronze_id);
// console.log("Chercheur_de_Trésor_argent_id" + data_syst.Chercheur_de_Trésor_argent_id);
// console.log("Chercheur_de_Trésor_Or_id" + data_syst.Chercheur_de_Trésor_Or_id);
// console.log("Chercheur_de_Trésor_Platine_id" + data_syst.Chercheur_de_Trésor_Platine_id);
// console.log("Voleur_bronze_id" + data_syst.Voleur_bronze_id);
// console.log("Voleur_argent_id" + data_syst.Voleur_argent_id);
// console.log("Voleur_Or_id" + data_syst.Voleur_Or_id);
// console.log("Voleur_Platine_id" + data_syst.Voleur_Platine_id);
// console.log("Donateur_bronze_id" + data_syst.Donateur_bronze_id);
// console.log("Donateur_argent_id" + data_syst.Donateur_argent_id);
// console.log("Donateur_Or_id" + data_syst.Donateur_Or_id);
// console.log("Donateur_Platine_id" + data_syst.Donateur_Platine_id);
            
// console.log('Categorie_Tutoriel_id => ' + data_syst.Categorie_Tutoriel_id);
// console.log('channel_tuto_bases_id => ' + data_syst.channel_tuto_bases_id);
// console.log('channel_tuto_pseudo_id => ' + data_syst.channel_tuto_pseudo_id);
// console.log('channel_tuto_level_id => ' + data_syst.channel_tuto_level_id);
// console.log('channel_tuto_mention_id => ' + data_syst.channel_tuto_mention_id);
// console.log('channel_tuto_roles_id => ' + data_syst.channel_tuto_roles_id);
// console.log('channel_tuto_les_canaux_id => ' + data_syst.channel_tuto_les_canaux_id);
// console.log('channel_tuto_les_commandes_id => ' + data_syst.channel_tuto_les_commandes_id);
// console.log('channel_tuto_argument_id => ' + data_syst.channel_tuto_argument_id);
// console.log('channel_tuto_demarrage_id => ' + data_syst.channel_tuto_demarrage_id);
// console.log('channel_tuto_etoiles_id => ' + data_syst.channel_tuto_etoiles_id);
// console.log('channel_tuto_economie_id => ' + data_syst.channel_tuto_economie_id);
// console.log('channel_tuto_ton_profil_id => ' + data_syst.channel_tuto_ton_profil_id);
// console.log('channel_tuto_cmd_id => ' + data_syst.channel_tuto_cmd_id);
// console.log('channel_tuto_métier_id => ' + data_syst.channel_tuto_métier_id);
// console.log('channel_tuto_boutique_id => ' + data_syst.channel_tuto_boutique_id);
// console.log('channel_tuto_résumé_id => ' + data_syst.channel_tuto_résumé_id);
// console.log('channel_tuto_question_id => ' + data_syst.channel_tuto_question_id);
// console.log('roles_tuto_1_id => ' + data_syst.roles_tuto_1_id);
// console.log('roles_tuto_2_id => ' + data_syst.roles_tuto_2_id);
// console.log('roles_tuto_3_id => ' + data_syst.roles_tuto_3_id);
// console.log('roles_tuto_4_id => ' + data_syst.roles_tuto_4_id);
// console.log('roles_tuto_5_id => ' + data_syst.roles_tuto_5_id);
// console.log('roles_tuto_6_id => ' + data_syst.roles_tuto_6_id);
// console.log('data_syst.roles_tuto_7_id => ' + data_syst.roles_tuto_7_id);
// console.log('data_syst.roles_tuto_8_id => ' + data_syst.roles_tuto_8_id);
// console.log('data_syst.roles_tuto_9_id => ' + data_syst.roles_tuto_9_id);
// console.log('data_syst.roles_tuto_10_id => ' + data_syst.roles_tuto_10_id);
// console.log('data_syst.roles_tuto_11_id => ' + data_syst.roles_tuto_11_id);
// console.log('data_syst.roles_tuto_12_id => ' + data_syst.roles_tuto_12_id);
// console.log('data_syst.roles_tuto_13_id => ' + data_syst.roles_tuto_13_id);
// console.log('data_syst.roles_tuto_14_id => ' + data_syst.roles_tuto_14_id);
// console.log('data_syst.roles_tuto_15_id => ' + data_syst.roles_tuto_15_id);
// console.log('data_syst.roles_tuto_16_id => ' + data_syst.roles_tuto_16_id);
// console.log('data_syst.roles_tuto_17_id => ' + data_syst.roles_tuto_17_id);
// console.log('data_syst.roles_tuto_18_id => ' + data_syst.roles_tuto_18_id);
// console.log('data_syst.COALITION_ID => ' + data_syst.COALITION_ID);
// console.log('TRESORIER_ID => ' + data_syst.RANG_TRESORIER_ID);
// console.log('PROTECTEUR_ID => ' + data_syst.RANG_PROTECTEUR_ID);
// console.log('CHERCHEUR_DE_TRESOR_ID => ' + data_syst.RANG_CHERCHEUR_DE_TRESOR_ID);
// console.log('SECRETAIRE_ID => ' + data_syst.RANG_SECRETAIRE_ID);
// console.log('RECRUTEUR_ID => ' + data_syst.RANG_RECRUTEUR_ID);
// console.log('TUEUR_DE_PERCEPTEUR_ID => ' + data_syst.RANG_TUEUR_DE_PERCEPTEUR_ID);
// console.log('BRACONNIER_ID => ' + data_syst.RANG_BRACONNIER_ID);
// console.log('APPRENTIE_ID => ' + data_syst.RANG_APPRENTIE_ID);
// console.log('PENITENT_ID => ' + data_syst.RANG_PENITENT_ID);
// console.log('BOULET_ID => ' + data_syst.RANG_BOULET_ID);
// console.log('RESERVISTE_ID => ' + data_syst.RANG_RESERVISTE_ID);
// console.log('ESPION_ID => ' + data_syst.RANG_ESPION_ID);
// console.log('ESSAI_ID => ' + data_syst.RANG_ESSAI_ID);
// console.log('DESERTEUR_ID => ' + data_syst.RANG_DESERTEUR_ID);
// console.log('INITIE_ID => ' + data_syst.RANG_INITIE_ID);
// console.log('ARTISAN_ID => ' + data_syst.RANG_ARTISAN_ID);
// console.log('MASCOTTE_ID => ' + data_syst.RANG_MASCOTTE_ID);
// console.log('MEMBRE_NON_GUILDE_ID => ' + data_syst.MEMBRE_NON_GUILDE_ID);
// console.log('MUSE_ID => ' + data_syst.RANG_MUSE_ID);
// console.log('NOUVEAU_ID => ' + data_syst.NOUVEAU_ID);
// console.log('LOCK_BOT => ' + data_syst.LOCK_BOT);
// console.log('nbr_guilde => ' + data_syst.nbr_guilde);
// console.log('coffre_all_guild => ' + data_syst.coffre_all_guild);
// console.log('value_stars => ' + data_syst.value_stars);
// console.log('nbr_total_star => ' + data_syst.nbr_total_star);
// console.log('nbr_total_membre => ' + data_syst.nbr_total_membre);
// console.log('nbr_total_membre_absent => ' + data_syst.nbr_total_membre_absent);
// console.log('usr_moyenne_level => ' + data_syst.usr_moyenne_level);
// console.log('recompenses => ' + data_syst.recompenses);
// console.log('like_all_users_guild => ' + data_syst.like_all_users_guild);
// console.log('donjon_all => ' + data_syst.donjon_all);
// console.log('defense_all => ' + data_syst.defense_all);
// console.log('attack_all => ' + data_syst.attack_all);
// console.log('search_perco_all => ' + data_syst.search_perco_all);
// console.log('skin_all => ' + data_syst.skin_all);
// console.log('AVA_all => ' + data_syst.AVA_all);
// console.log('don_all => ' + data_syst.don_all);
// console.log('vol_all => ' + data_syst.vol_all);
// console.log('best_stars_membre => ' + data_syst.best_stars_membre);
// console.log('best_attaq_member => ' + data_syst.best_attaq_member);
// console.log('best_def_member => ' + data_syst.best_def_member);
// console.log('best_ava_member => ' + data_syst.best_ava_member);
// console.log('best_skinner_member => ' + data_syst.best_skinner_member);
// console.log('best_likeur_member => ' + data_syst.best_likeur_member);
// console.log('best_like_me_member => ' + data_syst.best_like_me_member);
// console.log('best_search_perco_member => ' + data_syst.best_search_perco_member);
// console.log('best_vol_member => ' + data_syst.best_vol_member);
// console.log('best_espion_member => ' + data_syst.best_espion_member);
// console.log('winrate_vol => ' + data_syst.winrate_vol);
// console.log('defeat_vol => ' + data_syst.defeat_vol);
// console.log('best_butin_player => ' + data_syst.best_butin_player);
// console.log('best_recruteur => ' + data_syst.best_recruteur);
// console.log('best_gouverneur => ' + data_syst.best_gouverneur);
// console.log('best_player_tresorerie => ' + data_syst.best_player_tresorerie);
// console.log('best_taxe_pos_perco => ' + data_syst.best_taxe_pos_perco);
// console.log('Category_information_id => ' + data_syst.Category_information_id);
// console.log('Welcome_id => ' + data_syst.Welcome_id);
// console.log('Système_id => ' + data_syst.Système_id);
// console.log('Règlement_id => ' + data_syst.Règlement_id);
// console.log('Information_id => ' + data_syst.Information_id);
// console.log('CMD_HELP_id => ' + data_syst.CMD_HELP_id);
// console.log('Blacklist_id => ' + data_syst.Blacklist_id);
// console.log('Categorie_statistiques_id => ' + data_syst.Categorie_statistiques_id);
// console.log('Etoiles_id => ' + data_syst.Etoiles_id);
// console.log('Recompenses_id => ' + data_syst.Recompenses_id);
// console.log('Global_id => ' + data_syst.Global_id);
// console.log('Guildes_id => ' + data_syst.Guildes_id);
// console.log('Ladder_id => ' + data_syst.Ladder_id);
// console.log('Categorie_vocal_id => ' + data_syst.Categorie_vocal_id);
// console.log('Categorie_général_id => ' + data_syst.Categorie_général_id);
// console.log('Annonces_id => ' + data_syst.Annonces_id);
// console.log('Discussion_id => ' + data_syst.Discussion_id);
// console.log('Events_id => ' + data_syst.Events_id);
// console.log('Profil_id => ' + data_syst.Profil_id);
// console.log('Question_id => ' + data_syst.Question_id);
// console.log('Categorie_boutique_id => ' + data_syst.Categorie_boutique_id);
// console.log('Finances_id => ' + data_syst.Finances_id);
// console.log('Transfert_id => ' + data_syst.Transfert_id);
// console.log('Artisan_id => ' + data_syst.Artisan_id);
// console.log('Commerce_id => ' + data_syst.Commerce_id);
// console.log('Categorie_métiers_id => ' + data_syst.Categorie_métiers_id);
// console.log('Succès_id => ' + data_syst.Succès_id);
// console.log('Espion_id => ' + data_syst.Espion_id);
// console.log('Tueur_id => ' + data_syst.Tueur_id);
// console.log('Chercheur_id => ' + data_syst.Chercheur_id);
// console.log('Muse_id => ' + data_syst.Muse_id);
// console.log('Braconnier_id => ' + data_syst.Braconnier_id);
// console.log('Categorie_AVA_id => ' + data_syst.Categorie_AVA_id);
// console.log('Information_AVA_id => ' + data_syst.Information_AVA_id);
// console.log('Tutoriel_id => ' + data_syst.Tutoriel_id);
// console.log('Categorie_illyzael_id => ' + data_syst.Categorie_illyzael_id);
// console.log('Dofus_news_id => ' + data_syst.Dofus_news_id);
// console.log('Almanax_id => ' + data_syst.Almanax_id);
// console.log('Portail_id => ' + data_syst.Portail_id);
// console.log('Categorie_court_martial_id => ' + data_syst.Categorie_court_martial_id);
// console.log('Idées_id => ' + data_syst.Idées_id);
// console.log('Sondage_id => ' + data_syst.Sondage_id);
// console.log('Report_id => ' + data_syst.Report_id);
// console.log('Categorie_Staff_coa_id => ' + data_syst.Categorie_Staff_coa_id);
// console.log('Projet_id => ' + data_syst.Projet_id);
// console.log('Staff_coa_id => ' + data_syst.Staff_coa_id);
// console.log('CMD_HELP_STAFF_id => ' + data_syst.CMD_HELP_STAFF_id);
       
       
fun_register_tuto();
       
       
       
}
exports.fun_register_data_to_bot = fun_register_data_to_bot;
/*
fs.readdir(path, (err, files_user) => {
});
*/