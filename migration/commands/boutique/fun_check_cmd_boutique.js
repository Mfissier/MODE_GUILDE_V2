const Discord = require('discord.js');
const data_guild = require('../../data/structjson/guild.json');
const data_syst = require('../../data/structjson/all_systeme.json');
const data_tuto = require('../../data/structjson/tutoriel.json');
const data_user = require('../../data/structjson/user.json');
const { fun_achat_rang_espion } = require('./fun_achat_rang_espion');
const { fun_achat_rang_tueur } = require('./fun_achat_rang_tueur');
const { fun_achat_rang_muse } = require('./fun_achat_rang_muse');
const { fun_achat_rang_recruteur } = require('./fun_achat_rang_recruteur');
const { fun_achat_rang_chercheur } = require('./fun_achat_rang_chercheur');
const { fun_achat_rang_braconnier } = require('./fun_achat_rang_braconnier');
const { fun_achat_rang_nomade } = require('./fun_achat_rang_nomade');
const { fun_achat_mana } = require('./fun_achat_mana');
const { fun_achat_migration } = require('./fun_achat_migration');
const { fun_achat_taxe } = require('./fun_achat_taxe');
const { fun_achat_percepteur } = require('./fun_achat_percepteur');
const { fun_index_users } = require('../Fun/fun_index_users');

function fun_check_cmd_boutique(message, command) {
    let index_user = fun_index_users(message.member.id);
    let roles_meneur = [];
    let roles_conseiller = [];
    let roles_brasdroit = [];
    let roles_member = message.member._roles;
    let meneur_statue = false;
    let conseiller_statue = false;
    let brasdroit_statue = false;
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

    if (data_user._user[index_user].tuto_boutique_statue == true && data_user._user[index_user].tuto_statue == false)
        return(message.channel.send("🤖 **Vous avez déjà acheté votre rang !**\n\
**Il ne te manque plus qu'a te rendre ici** => <#"+ data_syst.channel_tuto_boutique_id +">"));

    if (command[0].toUpperCase() == '!RANG') {
        if (command.length < 2){
            return;
        }
        if (command[1].toLowerCase() == "espion") {
            fun_achat_rang_espion(message, command);
            return;
        }
        if (command[1].toLowerCase() == "tueur") {
            if (data_user._user[index_user].tuto_statue == false)
                return(message.channel.send("🤖 **Vous ne pouvez acheter que le __!rang Espion, Chercheur ou recruteur__  !**"));
            fun_achat_rang_tueur(message,command);
            return;
        }
        if (command[1].toLowerCase() == "muse") {
            if (data_user._user[index_user].tuto_statue == false)
                return(message.channel.send("🤖 **Vous ne pouvez acheter que le __!rang Espion, Chercheur ou recruteur__  !**"));
            fun_achat_rang_muse(message,command);
            return;
        }
        if (command[1].toLowerCase() == "recruteur") {
            fun_achat_rang_recruteur(message,command);
            return;
        }
        if (command[1].toLowerCase() == "chercheur") {
            fun_achat_rang_chercheur(message,command);
            return;
        }
        if (command[1].toLowerCase() == "braconnier") {
            if (data_user._user[index_user].tuto_statue == false)
                return(message.channel.send("🤖 **Vous ne pouvez acheter que le __!rang Espion, Chercheur ou recruteur__  !**"));
            fun_achat_rang_braconnier(message,command);
            return;
        }
        if (command[1].toLowerCase() == "nomade") {
            if (data_user._user[index_user].tuto_statue == false)
                return(message.channel.send("🤖 **Vous ne pouvez acheter que le __!rang Espion, Chercheur ou recruteur__  !**"));
            fun_achat_rang_nomade(message,command);
            return;
        }
    }
    if (command[0].toLowerCase() == '!mana') {
        if (data_user._user[index_user].tuto_statue == false)
            return(message.channel.send("🤖 **Vous ne pouvez acheter que le __!rang Espion, Chercheur ou recruteur__  !**"));
        fun_achat_mana(message, command);
        return;
    }
    if (command[0].toLowerCase() == '!percepteur'){
        if (data_user._user[index_user].tuto_statue == false)
            return(message.channel.send("🤖 **Vous ne pouvez acheter que le __!rang Espion, Chercheur ou recruteur__  !**"));
        fun_achat_percepteur(message, command);
        return;
    }
    if (command[0].toLowerCase() == '!taxe') {
        if (data_user._user[index_user].tuto_statue == false)
            return(message.channel.send("🤖 **Vous ne pouvez acheter que le __!rang Espion, Chercheur ou recruteur__  !**"));
        fun_achat_taxe(message, command);
        return;
    }
    if (command[0].toLowerCase() == '!migration') {
        if (meneur_statue == true || brasdroit_statue == true || conseiller_statue == true) {
                return(message.channel.send("🤖 **Les membres du Staff ne peuvent pas migrer de guilde... !**"));
        }
        if (data_user._user[index_user].tuto_statue == false)
            return(message.channel.send("🤖 **Vous ne pouvez acheter que le __!rang Espion, Chercheur ou recruteur__  !**"));
        fun_achat_migration(message, command);
        return;
    }
}
exports.fun_check_cmd_boutique = fun_check_cmd_boutique;

















































