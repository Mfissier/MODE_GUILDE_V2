const Discord = require('discord.js');
const { fun_gestion_xp_usr } = require('../Fun/fun_gestion_xp_usr');
const { fun_index_users } = require('../Fun/fun_index_users');
const { fun_random } = require('../Fun/fun_random');
const client = new Discord.Client();
data_user = require('../../data/structjson/user.json');
data_guilde = require('../../data/structjson/guild.json');
data_syst = require('../../data/structjson/all_systeme.json');

async function fun_vol(message, command)
{
    if (!message.mentions.users.first()) {
        return(message.channel.send("🤖 **Il faut @mentionner quelqu'un !**"));
    }
    if (message.mentions.users.first().id == message.member.id)
        return(message.channel.send("🤖 **Vous voler vous-même... Bien essayé...**"));
    if (command.length < 2) {
        return(message.channel.send("🤖 **Il manque un argument pour cette commande...**"));
    }
    let index_user = fun_index_users(message.member.id);
    let index_mention = fun_index_users(message.mentions.users.first().id);
    
    if (data_user._user[index_user].vol_status == true) {
        return(message.channel.send("🤖 **Vous ne pouvez plus faire de !vol aujourd'hui !**"));
    } else {
        if (data_user._user[index_user].Succes_grade_voleur == 4 && data_user._user[index_user].vol_bonus == false) {
            data_user._user[index_user].vol_bonus = true;
        } else {
            data_user._user[index_user].vol_status = true;
        }
    }
    if (data_user._user[index_user].cheat > 8) 
        return(message.channel.send("🤖 **Trop de flood pour toi, aujourd'hui !**"));
    data_user._user[index_user].cheat += 1;
    data_user._user[index_user].vol_nbr += 1;
    
    let txt_xp = -1;
    let txt_mana = -1;
    let verif_num = 1;
    let tmp_txt = "";
    let vol_win = false;
    let vol_mana = false;

    if (data_user._user[index_user].Succes_grade_like == 0) {
        if (fun_gestion_xp_usr(message,index_user, 1) == -1) {
            return(message.channel.send("Error channel"));
        }
        txt_xp = 1;
        if (fun_random(3) == verif_num) {
            vol_win = true;
        } else {
            vol_win = false;
        }
    }
    else if (data_user._user[index_user].Succes_grade_like == 1) {
        if (fun_gestion_xp_usr(message,index_user, 2) == -1){
            return(message.channel.send("Error channel"));
        }
        txt_xp = 2;
        if (fun_random(2) == verif_num) {
            vol_win = true;
        } else {
            vol_win = false;
        }
    }
    else if (data_user._user[index_user].Succes_grade_like == 2) {
        if (fun_gestion_xp_usr(message,index_user, 2) == -1) {
            return(message.channel.send("Error channel"));
        }
        txt_xp = 2;
        if (fun_random(30) == 10) {
            vol_mana = true;
            txt_mana = 1;
        }
        if (fun_random(2) == verif_num) {
            vol_win = true;
        } else {
            vol_win = false;
        }
    }
    else if (data_user._user[index_user].Succes_grade_like == 3) {
        if (fun_gestion_xp_usr(message,index_user, 2) == -1) {
            return(message.channel.send("Error channel"));
        }
        txt_xp = 2;
        if (fun_random(30) == 10) {
            vol_mana = true;
            txt_mana = 1;
        }
        if (fun_random(3) <= verif_num + 1) {
            vol_win = true;
        } else {
            vol_win = false;
        }
    }
    else if (data_user._user[index_user].Succes_grade_like == 4) {
        if (fun_gestion_xp_usr(message,index_user, 2) == -1) {
            return(message.channel.send("Error channel"));
        }
        txt_xp = 2;
        if (fun_random(20) == 10) {
            vol_mana = true;
            txt_mana = 1;
        }
        if (fun_random(3) <= verif_num + 1) {
            vol_win = true;
        } else {
            vol_win = false;
        }
    }
    else {
        return;
    }
    if (vol_win == true) {
        data_user._user[index_user].stars += 1;
        data_user._user[index_mention].stars -= 1;
        if (vol_mana == true) {
            data_user._user[index_user].mana += 1;
            data_user._user[index_mention].mana -= 1;
        }
    } else {
        data_user._user[index_user].stars -= 1;
        data_user._user[index_mention].stars += 1;
    }
    if (vol_win == true) {
        tmp_txt += "**🤖 Le membre <@!"+ data_user._user[index_user].id +"> ";
        tmp_txt += "["+ txt_xp +" xp]";
        tmp_txt += " a réussi à voler 1:star:";
        if (vol_mana == true)
            tmp_txt += "et 1:droplet:";
        tmp_txt += " à <@!"+ data_user._user[index_mention].id +"> !**";
    } else {
        tmp_txt += "**🤖 [La chance a tournée !]\nLe membre <@!"+ data_user._user[index_user].id +"> ";
        tmp_txt += "["+ txt_xp +" xp] ";
        tmp_txt += "s'est fait voler 1:star:";
        tmp_txt += " à <@!"+ data_user._user[index_mention].id +"> !**";
    }
    message.guild.channels.cache.find(elem => elem == data_syst.Etoiles_id).send(tmp_txt);
}
exports.fun_vol = fun_vol;