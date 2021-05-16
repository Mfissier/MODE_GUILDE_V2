const Discord = require('discord.js');
const { fun_gestion_xp_usr } = require('../commands/Fun/fun_gestion_xp_usr');
const { fun_index_users } = require('../commands/Fun/fun_index_users');
const client = new Discord.Client();
data_user = require('../data/structjson/user.json');
data_guilde = require('../data/structjson/guild.json');
data_syst = require('../data/structjson/all_systeme.json');
data_atq = require('../data/structjson/attaque.json');

async function fun_gestion_stats(message) {

let tmp_guild_best_stars_membre = 0;
let tmp_guild_best_attaq_member = 0;
let tmp_guild_best_def_member = 0;
let tmp_guild_best_skinner_member = 0;
let tmp_guild_best_likeur_member = 0;
let tmp_guild_best_like_me_member = 0;
let tmp_guild_best_search_perco_member = 0;
let tmp_guild_best_vol_member = 0;
let tmp_guild_best_espion_member = 0;
let tmp_guild_best_recruteur = 0;

let tmp_syst_best_stars_membre = 0;
let tmp_syst_best_attaq_member = 0;
let tmp_syst_best_def_member = 0;
let tmp_syst_best_skinner_member = 0;
let tmp_syst_best_likeur_member = 0;
let tmp_syst_best_like_me_member = 0;
let tmp_syst_best_search_perco_member = 0;
let tmp_syst_best_vol_member = 0;
let tmp_syst_best_espion_member = 0;
let tmp_syst_best_recruteur = 0;
    data_syst.nbr_total_membre = 0;
    data_syst.nbr_total_star = 0;
    data_syst.like_all_users_guild = 0;
    data_syst.donjon_all = 0;
    data_syst.defense_all = 0;
    data_syst.attack_all = 0;
    data_syst.search_perco_all = 0;
    data_syst.skin_all = 0;
    data_syst.don_all = 0;
    data_syst.vol_all = 0;
    data_syst.best_stars_membre = 0;
    data_syst.best_attaq_member = 0;
    data_syst.best_def_member = 0;
    data_syst.best_skinner_member = 0;
    data_syst.best_likeur_member = 0;
    data_syst.best_like_me_member = 0;
    data_syst.best_search_perco_member = 0;
    data_syst.best_vol_member = 0;
    data_syst.best_espion_member = 0;
    data_syst.best_recruteur = 0;
    for (let i = 0; i < data_guilde._guild.length -1; i++) {
        data_guilde._guild[i].nbr_de_membre = 0;
        data_guilde._guild[i].nbr_total_star = 0;
        data_guilde._guild[i].like_all_users = 0;
        data_guilde._guild[i].donjon_all = 0;
        data_guilde._guild[i].defense_all = 0;
        data_guilde._guild[i].attack_all = 0;
        data_guilde._guild[i].search_perco = 0;
        data_guilde._guild[i].skin_all = 0;
        data_guilde._guild[i].don_all = 0;
        data_guilde._guild[i].vol_all = 0;
        data_guilde._guild[i].best_stars_membre = 0;
        data_guilde._guild[i].best_attaq_member = 0;
        data_guilde._guild[i].best_def_member = 0;
        data_guilde._guild[i].best_skinner_member = 0;
        data_guilde._guild[i].best_likeur_member = 0;
        data_guilde._guild[i].best_like_me_member = 0;
        data_guilde._guild[i].best_search_perco_member = 0;
        data_guilde._guild[i].best_vol_member = 0;
        data_guilde._guild[i].best_espion_member = 0;
        data_guilde._guild[i].best_recruteur = 0;
        tmp_guild_best_stars_membre = 0;
        tmp_guild_best_attaq_member = 0;
        tmp_guild_best_def_member = 0;
        tmp_guild_best_skinner_member = 0;
        tmp_guild_best_likeur_member = 0;
        tmp_guild_best_like_me_member = 0;
        tmp_guild_best_search_perco_member = 0;
        tmp_guild_best_vol_member = 0;
        tmp_guild_best_espion_member = 0;
        tmp_guild_best_recruteur = 0;
        for (let y = 0; y < data_user._user.length; y++) {
            if (data_user._user[y].rang_guild) {
                if (data_guilde._guild[i].guild.length > 10 && data_user._user[y].rang_guild.length > 10) {
                    if (data_user._user[y].rang_guild == data_guilde._guild[i].guild) {
                        if (data_user._user[y].rang_power.length > 10 && data_user._user[y].rang_power != data_syst.RANG_PENITENT_ID) {
                            data_guilde._guild[i].nbr_de_membre += 1;
                            data_guilde._guild[i].nbr_total_star += data_user._user[y].stars;
                            data_guilde._guild[i].like_all_users += data_user._user[y].likeur_member_nbr;
                            data_guilde._guild[i].donjon_all += data_user._user[y].donjon_nbr;
                            data_guilde._guild[i].defense_all += data_user._user[y].perco_defence_nbr;
                            data_guilde._guild[i].attack_all += data_user._user[y].attack_nbr;
                            data_guilde._guild[i].search_perco += data_user._user[y].search_perco_member_nbr;
                            data_guilde._guild[i].skin_all += data_user._user[y].skin_nbr;
                            data_guilde._guild[i].don_all += data_user._user[y].don_nbr;
                            if (tmp_guild_best_stars_membre < data_user._user[y].stars) {
                                tmp_guild_best_stars_membre = data_user._user[y].stars;
                                data_guilde._guild[i].best_stars_membre = data_user._user[y].id;
                            }
                                
                            if (tmp_guild_best_attaq_member < data_user._user[y].attack_nbr) {
                                tmp_guild_best_attaq_member = data_user._user[y].attack_nbr;
                                data_guilde._guild[i].best_attaq_member = data_user._user[y].id;
                            }
                                
                            if (tmp_guild_best_def_member < data_user._user[y].perco_defence_nbr) {
                                tmp_guild_best_def_member = data_user._user[y].perco_defence_nbr;
                                data_guilde._guild[i].best_def_member = data_user._user[y].id;
                            }
                                
                            if (tmp_guild_best_skinner_member < data_user._user[y].skin_nbr) {
                                tmp_guild_best_skinner_member = data_user._user[y].skin_nbr;
                                data_guilde._guild[i].best_skinner_member = data_user._user[y].id;
                            }
                                
                            if (tmp_guild_best_likeur_member < data_user._user[y].likeur_member_nbr) {
                                tmp_guild_best_likeur_member = data_user._user[y].likeur_member_nbr;
                                data_guilde._guild[i].best_likeur_member = data_user._user[y].id;
                            }
                                
                            if (tmp_guild_best_like_me_member < data_user._user[y].like_me_member_nbr) {
                                tmp_guild_best_like_me_member = data_user._user[y].like_me_member_nbr;
                                data_guilde._guild[i].best_like_me_member = data_user._user[y].id;
                            }
                                
                            if (tmp_guild_best_search_perco_member < data_user._user[y].search_perco_member_nbr) {
                                tmp_guild_best_search_perco_member = data_user._user[y].search_perco_member_nbr;
                                data_guilde._guild[i].best_search_perco_member = data_user._user[y].id;
                            }
                                
                            if (tmp_guild_best_vol_member < data_user._user[y].vol_nbr) {
                                tmp_guild_best_vol_member = data_user._user[y].vol_nbr;
                                data_guilde._guild[i].best_vol_member = data_user._user[y].id;
                            }
                                
                            if (tmp_guild_best_espion_member < data_user._user[y].donjon_nbr) {
                                tmp_guild_best_espion_member = data_user._user[y].donjon_nbr;
                                data_guilde._guild[i].best_espion_member = data_user._user[y].id;
                            }
                                
                            if (tmp_guild_best_recruteur < data_user._user[y].recruteur_nbr) {
                                tmp_guild_best_recruteur = data_user._user[y].recruteur_nbr;
                                data_guilde._guild[i].best_recruteur = data_user._user[y].id;
                            }
                                
                        }
                    }
                }
            }
            data_guilde._guild[i].value_stars = Math.round(data_guilde._guild[i].coffre_guild / data_guilde._guild[i].nbr_total_star);
            if (data_guilde._guild[i].value_stars > 10000)
                data_guilde._guild[i].value_stars = 10000;
            if (!data_guilde._guild[i].value_stars)
                data_guilde._guild[i].value_stars = 0;
        }
        if (data_guilde._guild[i].guild.length > 10) {
            tmp_syst_best_stars_membre = 0;
            tmp_syst_best_attaq_member = 0;
            tmp_syst_best_def_member = 0;
            tmp_syst_best_skinner_member = 0;
            tmp_syst_best_likeur_member = 0;
            tmp_syst_best_like_me_member = 0;
            tmp_syst_best_search_perco_member = 0;
            tmp_syst_best_vol_member = 0;
            tmp_syst_best_espion_member = 0;
            tmp_syst_best_recruteur = 0;
            data_syst.nbr_total_membre += data_guilde._guild[i].nbr_de_membre;
            data_syst.nbr_total_star += data_guilde._guild[i].nbr_total_star;
            data_syst.like_all_users_guild += data_guilde._guild[i].like_all_users;
            data_syst.donjon_all += data_guilde._guild[i].donjon_all;
            data_syst.defense_all += data_guilde._guild[i].defense_all;
            data_syst.attack_all += data_guilde._guild[i].attack_all;
            data_syst.search_perco_all += data_guilde._guild[i].search_perco;
            data_syst.skin_all += data_guilde._guild[i].skin_all;
            data_syst.don_all += data_guilde._guild[i].don_all;
            data_syst.vol_all += data_guilde._guild[i].vol_all;
            if (fun_index_users(data_guilde._guild[i].best_stars_membre) != -1) {
                if (tmp_syst_best_stars_membre < data_user._user[fun_index_users(data_guilde._guild[i].best_stars_membre)].stars) {
                    tmp_syst_best_stars_membre = data_user._user[fun_index_users(data_guilde._guild[i].best_stars_membre)].stars;
                    data_syst.best_stars_membre = data_user._user[fun_index_users(data_guilde._guild[i].best_stars_membre)].id;
                }        
            }
            if (fun_index_users(data_guilde._guild[i].best_attaq_member) != -1) {
                if (tmp_syst_best_attaq_member < data_user._user[fun_index_users(data_guilde._guild[i].best_attaq_member)].attack_nbr) {
                    tmp_syst_best_attaq_member = data_user._user[fun_index_users(data_guilde._guild[i].best_attaq_member)].attack_nbr;
                    data_syst.best_attaq_member = data_user._user[fun_index_users(data_guilde._guild[i].best_attaq_member)].id;
                }        
            }
            if (fun_index_users(data_guilde._guild[i].best_def_member) != -1) {
                if (tmp_syst_best_def_member < data_user._user[fun_index_users(data_guilde._guild[i].best_def_member)].perco_defence_nbr) {
                    tmp_syst_best_def_member = data_user._user[fun_index_users(data_guilde._guild[i].best_def_member)].perco_defence_nbr;
                    data_syst.best_def_member = data_user._user[fun_index_users(data_guilde._guild[i].best_def_member)].id;
                }        
            }
            if (fun_index_users(data_guilde._guild[i].best_skinner_member) != -1) {
                if (tmp_syst_best_skinner_member < data_user._user[fun_index_users(data_guilde._guild[i].best_skinner_member)].skin_nbr) {
                    tmp_syst_best_skinner_member = data_user._user[fun_index_users(data_guilde._guild[i].best_skinner_member)].skin_nbr;
                    data_syst.best_skinner_member = data_user._user[fun_index_users(data_guilde._guild[i].best_skinner_member)].id;
                }        
            }
            if (fun_index_users(data_guilde._guild[i].best_likeur_member) != -1) {
                if (tmp_syst_best_likeur_member < data_user._user[fun_index_users(data_guilde._guild[i].best_likeur_member)].likeur_member_nbr) {
                    tmp_syst_best_likeur_member = data_user._user[fun_index_users(data_guilde._guild[i].best_likeur_member)].likeur_member_nbr;
                    data_syst.best_likeur_member = data_user._user[fun_index_users(data_guilde._guild[i].best_likeur_member)].id;
                }        
            }
            if (fun_index_users(data_guilde._guild[i].best_like_me_member) != -1) {
                if (tmp_syst_best_like_me_member < data_user._user[fun_index_users(data_guilde._guild[i].best_like_me_member)].like_me_member_nbr) {
                    tmp_syst_best_like_me_member = data_user._user[fun_index_users(data_guilde._guild[i].best_like_me_member)].like_me_member_nbr;
                    data_syst.best_like_me_member = data_user._user[fun_index_users(data_guilde._guild[i].best_like_me_member)].id;
                }        
            }
            if (fun_index_users(data_guilde._guild[i].best_search_perco_member) != -1) {
                if (tmp_syst_best_search_perco_member < data_user._user[fun_index_users(data_guilde._guild[i].best_search_perco_member)].search_perco_member_nbr) {
                    tmp_syst_best_search_perco_member = data_user._user[fun_index_users(data_guilde._guild[i].best_search_perco_member)].search_perco_member_nbr;
                    data_syst.best_search_perco_member = data_user._user[fun_index_users(data_guilde._guild[i].best_search_perco_member)].id;
                }        
            }
            if (fun_index_users(data_guilde._guild[i].best_vol_member) != -1) {
                if (tmp_syst_best_vol_member < data_user._user[fun_index_users(data_guilde._guild[i].best_vol_member)].vol_nbr) {
                    tmp_syst_best_vol_member = data_user._user[fun_index_users(data_guilde._guild[i].best_vol_member)].vol_nbr;
                    data_syst.best_vol_member = data_user._user[fun_index_users(data_guilde._guild[i].best_vol_member)].id;
                }        
            }
            if (fun_index_users(data_guilde._guild[i].best_espion_member) != -1) {
                if (tmp_syst_best_espion_member < data_user._user[fun_index_users(data_guilde._guild[i].best_espion_member)].donjon_nbr) {
                    tmp_syst_best_espion_member = data_user._user[fun_index_users(data_guilde._guild[i].best_espion_member)].donjon_nbr;
                    data_syst.best_espion_member = data_user._user[fun_index_users(data_guilde._guild[i].best_espion_member)].id;
                }        
            }
            if (fun_index_users(data_guilde._guild[i].best_recruteur) != -1) {
                if (tmp_syst_best_recruteur < data_user._user[fun_index_users(data_guilde._guild[i].best_recruteur)].recruteur_nbr) {
                    tmp_syst_best_recruteur = data_user._user[fun_index_users(data_guilde._guild[i].best_recruteur)].recruteur_nbr;
                    data_syst.best_recruteur = data_user._user[fun_index_users(data_guilde._guild[i].best_recruteur)].id;
                }        
            }
        }
}

}
exports.fun_gestion_stats = fun_gestion_stats;