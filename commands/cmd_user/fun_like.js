const Discord = require('discord.js');
const { fun_gestion_xp_usr } = require('../Fun/fun_gestion_xp_usr');
const { fun_index_users } = require('../Fun/fun_index_users');
const client = new Discord.Client();
data_user = require('../../data/structjson/user.json');
data_guilde = require('../../data/structjson/guild.json');
data_syst = require('../../data/structjson/all_systeme.json');

async function fun_like(message, command) {
    if (!message.mentions.users.first()) {
        return(message.channel.send("🤖 **Il faut @mentionner quelqu'un !**"));
    }
    if (message.mentions.users.first().id == message.member.id)
        return(message.channel.send("🤖 **Le narcissisme est illégal ici !**"));
    let index_user = fun_index_users(message.member.id);
    let index_mention = fun_index_users(message.mentions.users.first().id);
    if (data_user._user[index_user].like_status == true) {
        return(message.channel.send("🤖 **Vous ne pouvez plus faire de !like aujourd'hui !**"));
    } else {
        if (data_user._user[index_user].Succes_grade_like >= 3 && data_user._user[index_user].like_bonus == false) {
            data_user._user[index_user].like_bonus = true;
        } else {
            data_user._user[index_user].like_status = true;
        }
    }
    data_user._user[index_user].likeur_member_nbr += 1;
    data_user._user[index_mention].like_me_member_nbr += 1;

    let txt_xp = -1;
    let txt_stars = -1;
    let txt_mana = -1;
    let tmp_txt = "";

    if (data_user._user[index_user].Succes_grade_like == 0) {
        data_user._user[index_mention].stars += 1;
        if (fun_gestion_xp_usr(message,index_user, 1) == -1) {
            return(message.channel.send("Error channel"));
        }
        txt_xp = 1;
        txt_stars = 1;
    }
    else if (data_user._user[index_user].Succes_grade_like == 1) {
        data_user._user[index_mention].stars += 1;
        if (fun_gestion_xp_usr(message,index_user, 2) == -1){
            return(message.channel.send("Error channel"));
        }
        txt_xp = 2;
        txt_stars = 1;
    }
    else if (data_user._user[index_user].Succes_grade_like == 2) {
        data_user._user[index_mention].stars += 1;
        if (fun_gestion_xp_usr(message,index_user, 2) == -1) {
            return(message.channel.send("Error channel"));
        }
        txt_xp = 2;
        txt_stars = 1;
    }
    else if (data_user._user[index_user].Succes_grade_like == 3) {
        data_user._user[index_mention].stars += 2;
        if (fun_gestion_xp_usr(message,index_user, 2) == -1) {
            return(message.channel.send("Error channel"));
        }
        txt_xp = 2;
        txt_stars = 2;
    }
    else if (data_user._user[index_user].Succes_grade_like == 4) {
        data_user._user[index_mention].stars += 2;
        if (fun_gestion_xp_usr(message,index_user, 2) == -1) {
            return(message.channel.send("Error channel"));
        }
        if (data_user._user[index_user].likeur_member_nbr % 3 == 0) {
            data_user._user[index_user].mana += 1;
            txt_mana = 1;
        }
        txt_xp = 2;
        txt_stars = 1;
    }
    else {
        return;
    }
    if (txt_mana > -1) {
        tmp_txt = "Le membre <@!"+ data_user._user[index_user].id +"> **(+"+ txt_xp +" xp || +1 :droplet:)** a **!like** <@!"+ data_user._user[index_mention].id +"> **(+"+ txt_stars +" :star:)**";
    } else {
        tmp_txt = "Le membre <@!"+ data_user._user[index_user].id +"> **(+"+ txt_xp +" xp)** a **!like** <@!"+ data_user._user[index_mention].id +"> **(+"+ txt_stars +" :star:)**";    
    }
    message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send(tmp_txt);
}
exports.fun_like = fun_like;