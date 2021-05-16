const data_syst = require('../../data/structjson/all_systeme.json');
const data_guild = require('../../data/structjson/guild.json');
const data_user = require('../../data/structjson/user.json');
const { fun_gestion_xp_usr } = require('../Fun/fun_gestion_xp_usr');
const { fun_index_users } = require('../Fun/fun_index_users');
const data_admin = require('../../data/structjson/admin.json');
async function fun_add_exp_discord (message, command) {
    let All_MEMBERS = message.mentions.users.map(User => User);
    let tmp_txt = "";
    let nbr = -1;

    if (!message.mentions.users.first()) 
        return(message.channel.send("🤖 **Il faut mentionner au moin une personne !**"));
    for (let i = 0; i < command.length; i++) {
        if (parseInt(command[i], 10)) {
            nbr = Math.round(parseInt(command[i], 10));
            break;
        }
    }
    if (nbr == -1)
        return(message.channel.send("🤖 **Vous n'avez pas donné de nombre !**"));
    if (All_MEMBERS.length > 50) {
        return(message.channel.send("🤖 **Vous ne pouvez pas donner à plus de 50 membres à la fois !**"));
    }
    if (All_MEMBERS.length > 1)
        tmp_txt = "**Les membres ";
    else
        tmp_txt = "**Le membre ";
    for (let i = 0; i < All_MEMBERS.length; i++) {
        if (fun_index_users(All_MEMBERS[i].id)) {
            fun_gestion_xp_usr(message, fun_index_users(All_MEMBERS[i].id), nbr);
            tmp_txt += "<@!"+ data_user._user[fun_index_users(All_MEMBERS[i].id)].id +">";
            if (All_MEMBERS.length -1 > i)
                tmp_txt += " | "; 
        }
    }
    tmp_txt += " [+"+ nbr +" d'xp] **"; 
    message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send(tmp_txt + "\n**[__Commande Admin__] faite par un membre du staff : <@!"+ message.member.id +"> !**");
}
exports.fun_add_exp_discord = fun_add_exp_discord;
async function fun_add_stars(message, command) {

    let All_MEMBERS = message.mentions.users.map(User => User);
    let tmp_txt = "";
    let nbr = -1;

    if (!message.mentions.users.first()) 
        return(message.channel.send("🤖 **Il faut mentionner au moin une personne !**"));
    for (let i = 0; i < command.length; i++) {
        if (parseInt(command[i], 10)) {
            nbr = Math.round(parseInt(command[i], 10));
            break;
        }
    }
    if (nbr == -1)
        return(message.channel.send("🤖 **Vous n'avez pas donné de nombre !**"));
    if (All_MEMBERS.length > 50) {
        return(message.channel.send("🤖 **Vous ne pouvez pas donner à plus de 50 membres à la fois !**"));
    }
    if (All_MEMBERS.length > 1)
        tmp_txt = "**Les membres ";
    else
        tmp_txt = "**Le membre ";
    for (let i = 0; i < All_MEMBERS.length; i++) {
        if (fun_index_users(All_MEMBERS[i].id)) {
            data_user._user[fun_index_users(All_MEMBERS[i].id)].stars += nbr;
            tmp_txt += "<@!"+ data_user._user[fun_index_users(All_MEMBERS[i].id)].id +">";
            if (All_MEMBERS.length -1 > i)
                tmp_txt += " | "; 
        }
    }
    tmp_txt += " [+"+ nbr +" :star:] **"; 
    message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send(tmp_txt + "\n**[__Commande Admin__] faite par un membre du staff : <@!"+ message.member.id +"> !**");
}
async function fun_delete_stars(message, command){

    let All_MEMBERS = message.mentions.users.map(User => User);
    let tmp_txt = "";
    let nbr = -1;

    if (!message.mentions.users.first()) 
        return(message.channel.send("🤖 **Il faut mentionner au moin une personne !**"));
    for (let i = 0; i < command.length; i++) {
        if (parseInt(command[i], 10)) {
            nbr = Math.round(parseInt(command[i], 10));
            break;
        }
    }
    if (nbr == -1)
        return(message.channel.send("🤖 **Vous n'avez pas donné de nombre !**"));
    if (All_MEMBERS.length > 50) {
        return(message.channel.send("🤖 **Vous ne pouvez pas donner à plus de 50 membres à la fois !**"));
    }
    if (All_MEMBERS.length > 1)
        tmp_txt = "**Les membres ";
    else
        tmp_txt = "**Le membre ";
    for (let i = 0; i < All_MEMBERS.length; i++) {
        if (fun_index_users(All_MEMBERS[i].id)) {
            data_user._user[fun_index_users(All_MEMBERS[i].id)].stars -= nbr;
            tmp_txt += "<@!"+ data_user._user[fun_index_users(All_MEMBERS[i].id)].id +">";
            if (All_MEMBERS.length -1 > i)
                tmp_txt += " | "; 
        }
    }
    tmp_txt += " [-"+ nbr +" :star:] **"; 
    message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send(tmp_txt + "\n**[__Commande Admin__] faite par un membre du staff : <@!"+ message.member.id +"> !**");
}
async function fun_delete_exp_discord(message,command){

    let All_MEMBERS = message.mentions.users.map(User => User);
    let tmp_txt = "";
    let nbr = -1;

    if (!message.mentions.users.first()) 
        return(message.channel.send("🤖 **Il faut mentionner au moin une personne !**"));
    for (let i = 0; i < command.length; i++) {
        if (parseInt(command[i], 10)) {
            nbr = Math.round(parseInt(command[i], 10));
            break;
        }
    }
    if (nbr == -1)
        return(message.channel.send("🤖 **Vous n'avez pas donné de nombre !**"));
    if (All_MEMBERS.length > 50) {
        return(message.channel.send("🤖 **Vous ne pouvez pas donner à plus de 50 membres à la fois !**"));
    }
    if (All_MEMBERS.length > 1)
        tmp_txt = "**Les membres ";
    else
        tmp_txt = "**Le membre ";
    for (let i = 0; i < All_MEMBERS.length; i++) {
        if (fun_index_users(All_MEMBERS[i].id)) {
            data_user._user[fun_index_users(All_MEMBERS[i].id)].exp_discord -= nbr;
            tmp_txt += "<@!"+ data_user._user[fun_index_users(All_MEMBERS[i].id)].id +">";
            if (All_MEMBERS.length -1 > i)
                tmp_txt += " | "; 
        }
    }
    tmp_txt += " [-"+ nbr +" xp] **"; 
    message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send(tmp_txt + "\n**[__Commande Admin__] faite par un membre du staff : <@!"+ message.member.id +"> !**");
}
async function fun_delete_exp_discord_max(message,command){

    let All_MEMBERS = message.mentions.users.map(User => User);
    let tmp_txt = "";
    let nbr = -1;

    if (!message.mentions.users.first()) 
        return(message.channel.send("🤖 **Il faut mentionner au moin une personne !**"));
    for (let i = 0; i < command.length; i++) {
        if (parseInt(command[i], 10)) {
            nbr = Math.round(parseInt(command[i], 10));
            break;
        }
    }
    if (nbr == -1)
        return(message.channel.send("🤖 **Vous n'avez pas donné de nombre !**"));
    if (All_MEMBERS.length > 50) {
        return(message.channel.send("🤖 **Vous ne pouvez pas donner à plus de 50 membres à la fois !**"));
    }
    if (All_MEMBERS.length > 1)
        tmp_txt = "**Les membres ";
    else
        tmp_txt = "**Le membre ";
    for (let i = 0; i < All_MEMBERS.length; i++) {
        if (fun_index_users(All_MEMBERS[i].id)) {
            data_user._user[fun_index_users(All_MEMBERS[i].id)].exp_discord_max -= nbr;
            tmp_txt += "<@!"+ data_user._user[fun_index_users(All_MEMBERS[i].id)].id +">";
            if (All_MEMBERS.length -1 > i)
                tmp_txt += " | "; 
        }
    }
    tmp_txt += " [-"+ nbr +" xp_max] **"; 
    message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send(tmp_txt + "\n**[__Commande Admin__] faite par un membre du staff : <@!"+ message.member.id +"> !**");
}
async function fun_delete_mana(message,command){

    let All_MEMBERS = message.mentions.users.map(User => User);
    let tmp_txt = "";
    let nbr = -1;

    if (!message.mentions.users.first()) 
        return(message.channel.send("🤖 **Il faut mentionner au moin une personne !**"));
    for (let i = 0; i < command.length; i++) {
        if (parseInt(command[i], 10)) {
            nbr = Math.round(parseInt(command[i], 10));
            break;
        }
    }
    if (nbr == -1)
        return(message.channel.send("🤖 **Vous n'avez pas donné de nombre !**"));
    if (All_MEMBERS.length > 50) {
        return(message.channel.send("🤖 **Vous ne pouvez pas donner à plus de 50 membres à la fois !**"));
    }
    if (All_MEMBERS.length > 1)
        tmp_txt = "**Les membres ";
    else
        tmp_txt = "**Le membre ";
    for (let i = 0; i < All_MEMBERS.length; i++) {
        if (fun_index_users(All_MEMBERS[i].id)) {
            data_user._user[fun_index_users(All_MEMBERS[i].id)].mana -= nbr;
            tmp_txt += "<@!"+ data_user._user[fun_index_users(All_MEMBERS[i].id)].id +">";
            if (All_MEMBERS.length -1 > i)
                tmp_txt += " | "; 
        }
    }
    tmp_txt += " [-"+ nbr +" :droplet:] **"; 
    message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send(tmp_txt + "\n**[__Commande Admin__] faite par un membre du staff : <@!"+ message.member.id +"> !**");
}
async function fun_delete_mana_max(message,command){

    let All_MEMBERS = message.mentions.users.map(User => User);
    let tmp_txt = "";
    let nbr = -1;

    if (!message.mentions.users.first()) 
        return(message.channel.send("🤖 **Il faut mentionner au moin une personne !**"));
    for (let i = 0; i < command.length; i++) {
        if (parseInt(command[i], 10)) {
            nbr = Math.round(parseInt(command[i], 10));
            break;
        }
    }
    if (nbr == -1)
        return(message.channel.send("🤖 **Vous n'avez pas donné de nombre !**"));
    if (All_MEMBERS.length > 50) {
        return(message.channel.send("🤖 **Vous ne pouvez pas donner à plus de 50 membres à la fois !**"));
    }
    if (All_MEMBERS.length > 1)
        tmp_txt = "**Les membres ";
    else
        tmp_txt = "**Le membre ";
    for (let i = 0; i < All_MEMBERS.length; i++) {
        if (fun_index_users(All_MEMBERS[i].id)) {
            data_user._user[fun_index_users(All_MEMBERS[i].id)].mana_max -= nbr;
            tmp_txt += "<@!"+ data_user._user[fun_index_users(All_MEMBERS[i].id)].id +">";
            if (All_MEMBERS.length -1 > i)
                tmp_txt += " | "; 
        }
    }
    tmp_txt += " [-"+ nbr +" :droplet: max] **"; 
    message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send(tmp_txt + "\n**[__Commande Admin__] faite par un membre du staff : <@!"+ message.member.id +"> !**");
}
async function fun_delete_perco_nbr(message,command){

    let All_MEMBERS = message.mentions.users.map(User => User);
    let tmp_txt = "";
    let nbr = -1;

    if (!message.mentions.users.first()) 
        return(message.channel.send("🤖 **Il faut mentionner au moin une personne !**"));
    for (let i = 0; i < command.length; i++) {
        if (parseInt(command[i], 10)) {
            nbr = Math.round(parseInt(command[i], 10));
            break;
        }
    }
    if (nbr == -1)
        return(message.channel.send("🤖 **Vous n'avez pas donné de nombre !**"));
    if (All_MEMBERS.length > 50) {
        return(message.channel.send("🤖 **Vous ne pouvez pas donner à plus de 50 membres à la fois !**"));
    }
    if (All_MEMBERS.length > 1)
        tmp_txt = "**Les membres ";
    else
        tmp_txt = "**Le membre ";
    for (let i = 0; i < All_MEMBERS.length; i++) {
        if (fun_index_users(All_MEMBERS[i].id)) {
            data_user._user[fun_index_users(All_MEMBERS[i].id)].perco_nbr -= nbr;
            tmp_txt += "<@!"+ data_user._user[fun_index_users(All_MEMBERS[i].id)].id +">";
            if (All_MEMBERS.length -1 > i)
                tmp_txt += " | "; 
        }
    }
    tmp_txt += " [-"+ nbr +" perco] **"; 
    message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send(tmp_txt + "\n**[__Commande Admin__] faite par un membre du staff : <@!"+ message.member.id +"> !**");
}
async function fun_delete_perco_max(message,command){

    let All_MEMBERS = message.mentions.users.map(User => User);
    let tmp_txt = "";
    let nbr = -1;

    if (!message.mentions.users.first()) 
        return(message.channel.send("🤖 **Il faut mentionner au moin une personne !**"));
    for (let i = 0; i < command.length; i++) {
        if (parseInt(command[i], 10)) {
            nbr = Math.round(parseInt(command[i], 10));
            break;
        }
    }
    if (nbr == -1)
        return(message.channel.send("🤖 **Vous n'avez pas donné de nombre !**"));
    if (All_MEMBERS.length > 50) {
        return(message.channel.send("🤖 **Vous ne pouvez pas donner à plus de 50 membres à la fois !**"));
    }
    if (All_MEMBERS.length > 1)
        tmp_txt = "**Les membres ";
    else
        tmp_txt = "**Le membre ";
    for (let i = 0; i < All_MEMBERS.length; i++) {
        if (fun_index_users(All_MEMBERS[i].id)) {
            data_user._user[fun_index_users(All_MEMBERS[i].id)].perco_max -= nbr;
            tmp_txt += "<@!"+ data_user._user[fun_index_users(All_MEMBERS[i].id)].id +">";
            if (All_MEMBERS.length -1 > i)
                tmp_txt += " | "; 
        }
    }
    tmp_txt += " [-"+ nbr +" perco max] **"; 
    message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send(tmp_txt + "\n**[__Commande Admin__] faite par un membre du staff : <@!"+ message.member.id +"> !**");
}
async function fun_delete_grade_discord(message,command){

    let All_MEMBERS = message.mentions.users.map(User => User);
    let tmp_txt = "";
    let nbr = -1;

    if (!message.mentions.users.first()) 
        return(message.channel.send("🤖 **Il faut mentionner au moin une personne !**"));
    for (let i = 0; i < command.length; i++) {
        if (parseInt(command[i], 10)) {
            nbr = Math.round(parseInt(command[i], 10));
            break;
        }
    }
    if (nbr == -1)
        return(message.channel.send("🤖 **Vous n'avez pas donné de nombre !**"));
    if (All_MEMBERS.length > 50) {
        return(message.channel.send("🤖 **Vous ne pouvez pas donner à plus de 50 membres à la fois !**"));
    }
    if (All_MEMBERS.length > 1)
        tmp_txt = "**Les membres ";
    else
        tmp_txt = "**Le membre ";
    for (let i = 0; i < All_MEMBERS.length; i++) {
        if (fun_index_users(All_MEMBERS[i].id)) {
            data_user._user[fun_index_users(All_MEMBERS[i].id)].grade_discord -= nbr;
            tmp_txt += "<@!"+ data_user._user[fun_index_users(All_MEMBERS[i].id)].id +">";
            if (All_MEMBERS.length -1 > i)
                tmp_txt += " | "; 
        }
    }
    tmp_txt += " [-"+ nbr +" grade] **"; 
    message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send(tmp_txt + "\n**[__Commande Admin__] faite par un membre du staff : <@!"+ message.member.id +"> !**");
}


async function fun_add_exp_discord_max(message, command) {

    let All_MEMBERS = message.mentions.users.map(User => User);
    let tmp_txt = "";
    let nbr = -1;

    if (!message.mentions.users.first()) 
        return(message.channel.send("🤖 **Il faut mentionner au moin une personne !**"));
    for (let i = 0; i < command.length; i++) {
        if (parseInt(command[i], 10)) {
            nbr = Math.round(parseInt(command[i], 10));
            break;
        }
    }
    if (nbr == -1)
        return(message.channel.send("🤖 **Vous n'avez pas donné de nombre !**"));
    if (All_MEMBERS.length > 50) {
        return(message.channel.send("🤖 **Vous ne pouvez pas donner à plus de 50 membres à la fois !**"));
    }
    if (All_MEMBERS.length > 1)
        tmp_txt = "**Les membres ";
    else
        tmp_txt = "**Le membre ";
    for (let i = 0; i < All_MEMBERS.length; i++) {
        if (fun_index_users(All_MEMBERS[i].id)) {
            data_user._user[fun_index_users(All_MEMBERS[i].id)].exp_discord_max += nbr;
            tmp_txt += "<@!"+ data_user._user[fun_index_users(All_MEMBERS[i].id)].id +">";
            if (All_MEMBERS.length -1 > i)
                tmp_txt += " | "; 
        }
    }
    tmp_txt += " [+"+ nbr +" exp_discord_max] **"; 
    message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send(tmp_txt + "\n**[__Commande Admin__] faite par un membre du staff : <@!"+ message.member.id +"> !**");
}
async function fun_add_mana(message, command) {

    let All_MEMBERS = message.mentions.users.map(User => User);
    let tmp_txt = "";
    let nbr = -1;

    if (!message.mentions.users.first()) 
        return(message.channel.send("🤖 **Il faut mentionner au moin une personne !**"));
    for (let i = 0; i < command.length; i++) {
        if (parseInt(command[i], 10)) {
            nbr = Math.round(parseInt(command[i], 10));
            break;
        }
    }
    if (nbr == -1)
        return(message.channel.send("🤖 **Vous n'avez pas donné de nombre !**"));
    if (All_MEMBERS.length > 50) {
        return(message.channel.send("🤖 **Vous ne pouvez pas donner à plus de 50 membres à la fois !**"));
    }
    if (All_MEMBERS.length > 1)
        tmp_txt = "**Les membres ";
    else
        tmp_txt = "**Le membre ";
    for (let i = 0; i < All_MEMBERS.length; i++) {
        if (fun_index_users(All_MEMBERS[i].id)) {
            data_user._user[fun_index_users(All_MEMBERS[i].id)].mana += nbr;
            tmp_txt += "<@!"+ data_user._user[fun_index_users(All_MEMBERS[i].id)].id +">";
            if (All_MEMBERS.length -1 > i)
                tmp_txt += " | "; 
        }
    }
    tmp_txt += " [+"+ nbr +" :droplet:] **"; 
    message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send(tmp_txt + "\n**[__Commande Admin__] faite par un membre du staff : <@!"+ message.member.id +"> !**");
}
async function fun_add_mana_max(message, command) {

    let All_MEMBERS = message.mentions.users.map(User => User);
    let tmp_txt = "";
    let nbr = -1;

    if (!message.mentions.users.first()) 
        return(message.channel.send("🤖 **Il faut mentionner au moin une personne !**"));
    for (let i = 0; i < command.length; i++) {
        if (parseInt(command[i], 10)) {
            nbr = Math.round(parseInt(command[i], 10));
            break;
        }
    }
    if (nbr == -1)
        return(message.channel.send("🤖 **Vous n'avez pas donné de nombre !**"));
    if (All_MEMBERS.length > 50) {
        return(message.channel.send("🤖 **Vous ne pouvez pas donner à plus de 50 membres à la fois !**"));
    }
    if (All_MEMBERS.length > 1)
        tmp_txt = "**Les membres ";
    else
        tmp_txt = "**Le membre ";
    for (let i = 0; i < All_MEMBERS.length; i++) {
        if (fun_index_users(All_MEMBERS[i].id)) {
            data_user._user[fun_index_users(All_MEMBERS[i].id)].mana_max += nbr;
            tmp_txt += "<@!"+ data_user._user[fun_index_users(All_MEMBERS[i].id)].id +">";
            if (All_MEMBERS.length -1 > i)
                tmp_txt += " | "; 
        }
    }
    tmp_txt += " [+"+ nbr +" :droplet: max] **"; 
    message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send(tmp_txt + "\n**[__Commande Admin__] faite par un membre du staff : <@!"+ message.member.id +"> !**");
}
async function fun_add_perco_nbr(message, command) {

    let All_MEMBERS = message.mentions.users.map(User => User);
    let tmp_txt = "";
    let nbr = -1;

    if (!message.mentions.users.first()) 
        return(message.channel.send("🤖 **Il faut mentionner au moin une personne !**"));
    for (let i = 0; i < command.length; i++) {
        if (parseInt(command[i], 10)) {
            nbr = Math.round(parseInt(command[i], 10));
            break;
        }
    }
    if (nbr == -1)
        return(message.channel.send("🤖 **Vous n'avez pas donné de nombre !**"));
    if (All_MEMBERS.length > 50) {
        return(message.channel.send("🤖 **Vous ne pouvez pas donner à plus de 50 membres à la fois !**"));
    }
    if (All_MEMBERS.length > 1)
        tmp_txt = "**Les membres ";
    else
        tmp_txt = "**Le membre ";
    for (let i = 0; i < All_MEMBERS.length; i++) {
        if (fun_index_users(All_MEMBERS[i].id)) {
            data_user._user[fun_index_users(All_MEMBERS[i].id)].perco_nbr += nbr;
            tmp_txt += "<@!"+ data_user._user[fun_index_users(All_MEMBERS[i].id)].id +">";
            if (All_MEMBERS.length -1 > i)
                tmp_txt += " | "; 
        }
    }
    tmp_txt += " [+"+ nbr +" perco_nbr] **"; 
    message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send(tmp_txt + "\n**[__Commande Admin__] faite par un membre du staff : <@!"+ message.member.id +"> !**");
}
async function fun_add_perco_max(message, command) {

    let All_MEMBERS = message.mentions.users.map(User => User);
    let tmp_txt = "";
    let nbr = -1;

    if (!message.mentions.users.first()) 
        return(message.channel.send("🤖 **Il faut mentionner au moin une personne !**"));
    for (let i = 0; i < command.length; i++) {
        if (parseInt(command[i], 10)) {
            nbr = Math.round(parseInt(command[i], 10));
            break;
        }
    }
    if (nbr == -1)
        return(message.channel.send("🤖 **Vous n'avez pas donné de nombre !**"));
    if (All_MEMBERS.length > 50) {
        return(message.channel.send("🤖 **Vous ne pouvez pas donner à plus de 50 membres à la fois !**"));
    }
    if (All_MEMBERS.length > 1)
        tmp_txt = "**Les membres ";
    else
        tmp_txt = "**Le membre ";
    for (let i = 0; i < All_MEMBERS.length; i++) {
        if (fun_index_users(All_MEMBERS[i].id)) {
            data_user._user[fun_index_users(All_MEMBERS[i].id)].perco_max += nbr;
            tmp_txt += "<@!"+ data_user._user[fun_index_users(All_MEMBERS[i].id)].id +">";
            if (All_MEMBERS.length -1 > i)
                tmp_txt += " | "; 
        }
    }
    tmp_txt += " [+"+ nbr +" perco_max] **"; 
    message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send(tmp_txt + "\n**[__Commande Admin__] faite par un membre du staff : <@!"+ message.member.id +"> !**");
}
async function fun_add_grade_discord(message, command) {

    let All_MEMBERS = message.mentions.users.map(User => User);
    let tmp_txt = "";
    let nbr = -1;
    if (!message.mentions.users.first()) 
        return(message.channel.send("🤖 **Il faut mentionner au moin une personne !**"));
    for (let i = 0; i < command.length; i++) {
        if (parseInt(command[i], 10)) {
            nbr = Math.round(parseInt(command[i], 10));
            break;
        }
    }
    if (nbr == -1)
        return(message.channel.send("🤖 **Vous n'avez pas donné de nombre !**"));
    if (All_MEMBERS.length > 50) {
        return(message.channel.send("🤖 **Vous ne pouvez pas donner à plus de 50 membres à la fois !**"));
    }
    if (All_MEMBERS.length > 1)
        tmp_txt = "**Les membres ";
    else
        tmp_txt = "**Le membre ";
    for (let i = 0; i < All_MEMBERS.length; i++) {
        if (fun_index_users(All_MEMBERS[i].id)) {
            data_user._user[fun_index_users(All_MEMBERS[i].id)].grade_discord += nbr;
            tmp_txt += "<@!"+ data_user._user[fun_index_users(All_MEMBERS[i].id)].id +">";
            if (All_MEMBERS.length -1 > i)
                tmp_txt += " | "; 
        }
    }
    tmp_txt += " [+"+ nbr +" grade] **"; 
    message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send(tmp_txt + "\n**[__Commande Admin__] faite par un membre du staff : <@!"+ message.member.id +"> !**");
}
async function fun_reload_mana(message, command) {

    let All_MEMBERS = message.mentions.users.map(User => User);
    let tmp_txt = "";
    let nbr = -1;

    if (!message.mentions.users.first()) 
        return(message.channel.send("🤖 **Il faut mentionner au moin une personne !**"));
    for (let i = 0; i < command.length; i++) {
        if (parseInt(command[i], 10)) {
            nbr = Math.round(parseInt(command[i], 10));
            break;
        }
    }
    if (nbr == -1)
        return(message.channel.send("🤖 **Vous n'avez pas donné de nombre !**"));
    if (All_MEMBERS.length > 50) {
        return(message.channel.send("🤖 **Vous ne pouvez pas donner à plus de 50 membres à la fois !**"));
    }
    if (All_MEMBERS.length > 1)
        tmp_txt = "**Les membres ";
    else
        tmp_txt = "**Le membre ";
    for (let i = 0; i < All_MEMBERS.length; i++) {
        if (fun_index_users(All_MEMBERS[i].id)) {
            data_user._user[fun_index_users(All_MEMBERS[i].id)].mana = data_user._user[fun_index_users(All_MEMBERS[i].id)].mana_max;
            tmp_txt += "<@!"+ data_user._user[fun_index_users(All_MEMBERS[i].id)].id +">";
            if (All_MEMBERS.length -1 > i)
                tmp_txt += " | "; 
        }
    }
    tmp_txt += " [ mana réinitialisées ! ]**"; 
    message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send(tmp_txt + "\n**[__Commande Admin__] faite par un membre du staff : <@!"+ message.member.id +"> !**");
}

async function fun_reload(message, command) {

    let All_MEMBERS = message.mentions.users.map(User => User);
    let tmp_txt = "";
    let nbr = -1;
    
    if (!message.mentions.users.first()) 
        return(message.channel.send("🤖 **Il faut mentionner au moin une personne !**"));
    if (All_MEMBERS.length > 50) {
        return(message.channel.send("🤖 **Vous ne pouvez pas donner à plus de 50 membres à la fois !**"));
    }
    if (All_MEMBERS.length > 1)
        tmp_txt = "**Les membres ";
    else
        tmp_txt = "**Le membre ";
    for (let i = 0; i < All_MEMBERS.length; i++) {
        if (fun_index_users(All_MEMBERS[i].id)) {
            data_user._user[fun_index_users(All_MEMBERS[i].id)].cheat = 0;
            data_user._user[fun_index_users(All_MEMBERS[i].id)].like_status = false;
            data_user._user[fun_index_users(All_MEMBERS[i].id)].vol_status = false;
            tmp_txt += "<@!"+ data_user._user[fun_index_users(All_MEMBERS[i].id)].id +">";
            if (All_MEMBERS.length -1 > i)
                tmp_txt += " | "; 
        }
    }
    if (All_MEMBERS.length > 1)
        tmp_txt += " [ peuvent de nouveu Like/vol...! ] **"; 
    else
        tmp_txt += " [ peu de nouveu Like/vol...! ] **"; 
    message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send(tmp_txt + "\n**[__Commande Admin__] faite par un membre du staff : <@!"+ message.member.id +"> !**");
}

async function fun_rename(message, command) {

    let All_MEMBERS = message.mentions.users.map(User => User);
    let tmp_txt = "";
    let roles_member = [];
    let roles_puissant = [];
    if (!message.mentions.users.first())
        return(message.channel.send("🤖 **Il faut mentionner au moin une personne !**"));
    if (command.length < 3)
        return(message.channel.send("🤖 **Il manque le pseudo de la personne !**"));
    if (command[2].indexOf("@") > -1) {
        return(message.channel.send("🤖 **Le troisième argument doit-être un pseudo et non une @mention !**"));
    }
    for(let i = 0; i < data_guild._guild.length; i++) {
        if (data_guild._guild[i].rolemeneur.length > 10)
            roles_puissant.push(data_guild._guild[i].rolemeneur);
        if (data_guild._guild[i].brasdroit.length > 10)
            roles_puissant.push(data_guild._guild[i].brasdroit);
        if (data_guild._guild[i].conseiller.length > 10)
            roles_puissant.push(data_guild._guild[i].conseiller);
    }
    if (data_admin.ADMIN.indexOf(message.member.user.id) == -1) {    
        for (let i = 0; i < All_MEMBERS.length; i++) {
            roles_member = message.guild.members.cache.find(elem => elem.id == All_MEMBERS[i].id)._roles;
            for (let y = 0; y < roles_puissant.length; y++) {
                if (roles_member.indexOf(roles_puissant[y]) > -1) {
                    return(message.channel.send("🤖  **Vous ne pouvez pas faire cette commande sur un membre avec des droits aussi importants !**"));
                }
            }
        }
    } else
        message.channel.send("🤖 **Obéissance absolu activée !**");
       
        if (fun_index_users(message.mentions.users.first().id)) {
            tmp_txt = "**Le membre ";
            tmp_txt += ""+ data_user._user[fun_index_users(message.mentions.users.first().id)].username +" ";
            data_user._user[fun_index_users(message.mentions.users.first().id)].username = command[2];
            await message.guild.members.cache.find(elem => elem.id == message.mentions.users.first().id).setNickname(command[2]);
            tmp_txt += "s'appel désormais "+ data_user._user[fun_index_users(message.mentions.users.first().id)].username + !"**"; 
            await message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send(tmp_txt + "\n**[__Commande Admin__] faite par un membre du staff : <@!"+ message.member.id +"> !**");
        }
}


exports.fun_delete_stars = fun_delete_stars;
exports.fun_delete_exp_discord = fun_delete_exp_discord;
exports.fun_delete_exp_discord_max = fun_delete_exp_discord_max;
exports.fun_delete_mana = fun_delete_mana;
exports.fun_delete_mana_max = fun_delete_mana_max;
exports.fun_delete_perco_nbr = fun_delete_perco_nbr;
exports.fun_delete_perco_max = fun_delete_perco_max;
exports.fun_delete_grade_discord = fun_delete_grade_discord;
exports.fun_add_stars = fun_add_stars;
exports.fun_add_exp_discord_max = fun_add_exp_discord_max;
exports.fun_add_mana = fun_add_mana;
exports.fun_add_mana_max = fun_add_mana_max;
exports.fun_add_perco_nbr = fun_add_perco_nbr;
exports.fun_add_perco_max = fun_add_perco_max;
exports.fun_add_grade_discord = fun_add_grade_discord;
exports.fun_reload_mana = fun_reload_mana;
exports.fun_reload = fun_reload;
exports.fun_rename = fun_rename;