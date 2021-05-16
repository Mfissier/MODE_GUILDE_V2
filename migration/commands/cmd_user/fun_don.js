const Discord = require('discord.js');
const { fun_gestion_xp_usr } = require('../Fun/fun_gestion_xp_usr');
const { fun_index_users } = require('../Fun/fun_index_users');
const { fun_random } = require('../Fun/fun_random');
const client = new Discord.Client();
data_user = require('../../data/structjson/user.json');
data_guilde = require('../../data/structjson/guild.json');
data_syst = require('../../data/structjson/all_systeme.json');

async function fun_don(message, command) {
    if (!message.mentions.users.first()) {
        return(message.channel.send("🤖 **Il faut @mentionner quelqu'un !**"));
    }
    if (message.mentions.users.first().id == message.member.id)
        return(message.channel.send("🤖 **Ca ne sert à rien de se donner soit-même des :star: ...**"));
    if (command.length < 3) {
        return(message.channel.send("🤖 **Il manque un chiffre pour cette commande...**"));
    }
    if (!parseInt(command[2], 10))
        return(message.channel.send("🤖 **Le nombre est incorrect !**"));
    if (Math.round(parseInt(command[2], 10)) <= 0) {
        return(message.channel.send("🤖 **Le nombre est incorrect !**"));
    }
    let index_user = fun_index_users(message.member.id);
    let index_mention = fun_index_users(message.mentions.users.first().id);
    if (Math.round(parseInt(command[2], 10)) > data_user._user[index_user].stars) {
        return(message.channel.send("🤖 **Il vous faudrai "+ ((data_user._user[index_user].stars - parseInt(command[2],10))* -1) +" :star: de plus pour faire cette donation.**"));
    }
    data_user._user[index_user].cheat += 1;
    if (data_user._user[index_user].cheat > 8) 
        return(message.channel.send("🤖 **Vous avez utilisé trop de spam certaine commande aujourd'hui !**  "));

    let nbr = Math.round(parseInt(command[2],10));
    data_user._user[index_user].don_nbr += nbr;

    let txt_xp = -1;
    let txt_mana = -1;
    let stars_bonus = -1;
    let ulti_bonus = -1;
    let tmp_txt = "";

    if (data_user._user[index_user].Succes_grade_Donateur == 0) {
        if (nbr >= 3) {
            if (fun_gestion_xp_usr(message,index_user, 1) == -1) {
                return(message.channel.send("Error channel"));
            }
            txt_xp = 1;
        }
        data_user._user[index_mention].stars += nbr;
        data_user._user[index_user].stars -= nbr;
    }
    else if (data_user._user[index_user].Succes_grade_Donateur == 1) {
        if (nbr >= 3) {
            if (fun_gestion_xp_usr(message,index_user, 2) == -1) {
                return(message.channel.send("Error channel"));
            }
            txt_xp = 2;
        }
        data_user._user[index_mention].stars += nbr;
        data_user._user[index_user].stars -= nbr;
    }
    else if (data_user._user[index_user].Succes_grade_Donateur == 2) {
        if (nbr >= 3) {
            if (fun_gestion_xp_usr(message,index_user, 2) == -1) {
                return(message.channel.send("Error channel"));
            }
            txt_xp = 2;
        }
        data_user._user[index_mention].stars += nbr;
        data_user._user[index_user].stars -= nbr;
        if (fun_random(50) == 25) {
            data_user._user[index_user].mana += 1;
            txt_mana = 1;
        }
    }
    else if (data_user._user[index_user].Succes_grade_Donateur == 3) {
        if (nbr >= 3) {
            if (fun_gestion_xp_usr(message,index_user, 2) == -1) {
                return(message.channel.send("Error channel"));
            }
            txt_xp = 2;
        }
        if (fun_random(50) == 25) {
            data_user._user[index_user].mana += 1;
            txt_mana = 1;
        }
        if (fun_random(50) == 20) {
            data_user._user[index_user].stars += 1;
            stars_bonus = 1;
        }
        data_user._user[index_mention].stars += nbr;
        data_user._user[index_user].stars -= nbr;
    }
    else if (data_user._user[index_user].Succes_grade_Donateur == 4) {
        if (nbr >= 3) {
            if (fun_gestion_xp_usr(message,index_user, 2) == -1) {
                return(message.channel.send("Error channel"));
            }
            txt_xp = 2;
        }

        if (fun_random(50) == 25) {
            data_user._user[index_user].mana += 1;
            txt_mana = 1;
        }
        if (fun_random(50) == 20) {
            data_user._user[index_user].stars += 1;
            stars_bonus = 1;
        }
        if (fun_random(100) == 50) {
            data_user._user[index_user].stars += Math.round(nbr / 2);
            ulti_bonus = 1;
        }
        data_user._user[index_mention].stars += nbr;
        data_user._user[index_user].stars -= nbr;
    }
    else {
        return;
    }
    tmp_txt = "Le membre <@!"+ data_user._user[index_user].id +">**[ "; 
    if (txt_mana > -1) {
        tmp_txt += "+ 1:droplet: ";
    }
    if (ulti_bonus > -1) {
        tmp_txt += "+ 1:star: ";
    }
    if (txt_xp > -1) {
        tmp_txt += "+ "+ txt_xp + " xp ";
    }
    if (ulti_bonus > -1) {
        tmp_txt += "+ " + Math.round(nbr / 2) + ":star: bonus !";
    }
    if (ulti_bonus == -1 && txt_xp == -1 && ulti_bonus == -1 && txt_mana == -1)
        tmp_txt += "...";
    tmp_txt += " ]** a donné "+ nbr +" :star: a <@!"+ data_user._user[index_mention].id +">";
    message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send(tmp_txt);
}
exports.fun_don = fun_don;