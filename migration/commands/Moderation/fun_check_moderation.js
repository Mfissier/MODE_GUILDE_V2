const { GuildEmoji } = require('discord.js');
const data_syst = require('../../data/structjson/all_systeme.json');
const data_guild = require('../../data/structjson/guild.json');
const data_user = require('../../data/structjson/user.json');
const data_admin = require('../../data/structjson/admin.json');
const { fun_bann } = require('../Administration/fun_bann');
const { fun_kick, fun_add_bras_droit, fun_add_conseiller, fun_delete_conseiller, fun_delete_brasdroit, fun_lock_cmd, fun_add_rang_option, fun_delete_rang_option, fun_add_coffre, fun_delete_coffre, fun_payement } = require('./fun_big_cmd_moderation');
const { fun_gestion_penitent } = require('./fun_gestion_penitent');
const { fun_add_exp_discord, fun_delete_stars, fun_delete_exp_discord_max, fun_delete_mana, fun_delete_mana_max, fun_delete_perco_nbr, fun_delete_perco_max, fun_delete_grade_discord, fun_add_stars, fun_add_exp_discord_max, fun_add_mana, fun_add_mana_max, fun_add_perco_nbr, fun_add_perco_max, fun_add_grade_discord, fun_delete_exp_discord, fun_reload_mana, fun_reload, fun_rename } = require('./fun_gestion_profil');
const { fun_index_users } = require('../Fun/fun_index_users');

async function fun_check_moderation(message, command) {
    let roles_meneur = [];
    let roles_conseiller = [];
    let roles_brasdroit = [];
    let roles_member = message.member._roles;
    let meneur_statue = false;
    let conseiller_statue = false;
    let brasdroit_statue = false;
    let index_user;    
    for(let i = 0; i < data_guild._guild.length; i++) {
        if (data_guild._guild[i].rolemeneur.length > 10)
            roles_meneur.push(data_guild._guild[i].rolemeneur);
        if (data_guild._guild[i].brasdroit.length > 10)
            roles_brasdroit.push(data_guild._guild[i].brasdroit);
        if (data_guild._guild[i].conseiller.length > 10)
            roles_conseiller.push(data_guild._guild[i].conseiller);
    }
    for (let y = 0; y < roles_meneur.length; y++) {
        if (roles_member.indexOf(roles_meneur[y]) > -1) {
            meneur_statue = true;
        }
    }

    for (let y = 0; y < roles_brasdroit.length; y++) {
        if (roles_member.indexOf(roles_brasdroit[y]) > -1) {
            brasdroit_statue = true;
        }
    }

    for (let y = 0; y < roles_conseiller.length; y++) {
        if (roles_member.indexOf(roles_conseiller[y]) > -1) {
            conseiller_statue = true;
        }
    }
    console.log("conseiller_statue = "+ conseiller_statue);
    console.log("brasdroit_statue = "+ brasdroit_statue);
    console.log("meneur_statue = "+ meneur_statue);
    if (meneur_statue == false && brasdroit_statue == false && conseiller_statue == false) {
        if (data_admin.ADMIN.indexOf(message.member.id) == -1) {
            return;
        }            
    }
        if (command[0].toUpperCase() == "!-STARS")
            fun_delete_stars(message,command);
        if (command[0].toUpperCase() == "!-XP")  
            fun_delete_exp_discord(message,command);
        if (command[0].toUpperCase() == "!-XPMAX")
            fun_delete_exp_discord_max(message,command);
        if (command[0].toUpperCase() == "!-MANA")
            fun_delete_mana(message,command);
        if (command[0].toUpperCase() == "!-MANAMAX")
            fun_delete_mana_max(message,command);
        if (command[0].toUpperCase() == "!-PERCO")
            fun_delete_perco_nbr(message,command);
        if (command[0].toUpperCase() == "!-PERCOMAX")
            fun_delete_perco_max(message,command);
        if (command[0].toUpperCase() == "!-GRADE")
            fun_delete_grade_discord(message,command);
        if (command[0].toUpperCase() == "!+STARS")
            fun_add_stars(message,command);
        if (command[0].toUpperCase() == "!+XP")
            fun_add_exp_discord (message,command);
        if (command[0].toUpperCase() == "!+XPMAX")
            fun_add_exp_discord_max(message,command);
        if (command[0].toUpperCase() == "!+MANA")
            fun_add_mana(message,command);
        if (command[0].toUpperCase() == "!+MANAMAX")
            fun_add_mana_max(message,command);
        if (command[0].toUpperCase() == "!+PERCO")
            fun_add_perco_nbr(message,command);
        if (command[0].toUpperCase() == "!+PERCOMAX")
            fun_add_perco_max(message,command);
        if (command[0].toUpperCase() == "!+GRADE")
            fun_add_grade_discord(message,command);
        if (command[0].toUpperCase() == "!RELOADMANA")
            fun_reload_mana(message,command);
        if (command[0].toUpperCase() == "!RELOAD") 
            fun_reload(message,command);
        if (command[0].toUpperCase() == "!+NAME") 
            fun_rename(message,command);
    
    if (meneur_statue == true || brasdroit_statue == true || data_admin.ADMIN.indexOf(message.member.id) > -1) {
        if (command[0].toUpperCase() == "!+PENITENT") 
            fun_gestion_penitent(message,command);
        if (command[0].toUpperCase() == "!KICK") 
            fun_kick(message,command);
        if (command[0].toUpperCase() == "!BAN") 
            fun_bann(message,command);
        if (command[0].toUpperCase() == "!LOCK") 
            fun_lock_cmd(message,command);
        if (command[0].toUpperCase() == "!+RANG") 
            fun_add_rang_option(message,command);
        if (command[0].toUpperCase() == "!-RANG") 
            fun_delete_rang_option(message, command);
        
    } else {
        return(message.channel.send("🤖 ** Seul un Meneur ou un Bras droit peux faire cette commande !**"))
    }
    
    if (meneur_statue == true || data_admin.ADMIN.indexOf(message.member.id) > -1) {
        if (command[0].toUpperCase() == "!+BRASDROIT") 
            fun_add_bras_droit(message,command);
        if (command[0].toUpperCase() == "!+CONSEILLER") 
            fun_add_conseiller(message,command);
        if (command[0].toUpperCase() == "!-CONSEILLER") 
            fun_delete_conseiller(message,command);
        if (command[0].toUpperCase() == "!-BRASDROIT") 
            fun_delete_brasdroit(message,command);        
        if (command[0].toUpperCase() == "!+COFFRE") {
            if (message.channel.id != data_syst.Transfert_id)
                return(message.channel.send("🤖 ** Cette commande ce fait dans le canal <#"+ data_syst.Transfert_id +"> !**"))
            fun_add_coffre(message,command);
        }
            
        if (command[0].toUpperCase() == "!-COFFRE") {
            if (message.channel.id != data_syst.Transfert_id)
                return(message.channel.send("🤖 ** Cette commande ce fait dans le canal <#"+ data_syst.Transfert_id +"> !**"))
            fun_delete_coffre(message,command);
        }
        if (command[0].toUpperCase() == "!PAYEMENT") {
            if (message.channel.id != data_syst.Transfert_id)
                return(message.channel.send("🤖 ** Cette commande ce fait dans le canal <#"+ data_syst.Transfert_id +"> !**"))
            fun_payement(message,command);
        }
    } else {
        return(message.channel.send("🤖 ** Seul un Meneur peux faire cette commande !**"))
    }
}
exports.fun_check_moderation = fun_check_moderation;