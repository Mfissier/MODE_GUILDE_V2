const Discord = require('discord.js');
const { index } = require('mathjs');
const { fun_gestion_xp_usr } = require('../../Fun/fun_gestion_xp_usr');
const { fun_index_users } = require('../../Fun/fun_index_users');
const client = new Discord.Client();
data_user = require('../../../data/structjson/user.json');
data_guilde = require('../../../data/structjson/guild.json');
data_syst = require('../../../data/structjson/all_systeme.json');
data_braconnier = require('../../../data/structjson/braconnier.json');


async function fun_gestion_succes_braconnier(message, id) {
    if (!id)
        return;
    if (data_user._user[id].rang_power != data_syst.RANG_BRACONNIER_ID) {
        return;
    }
    if (data_user._user[id].Succes_grade_Braconnier == 0 && data_user._user[id].braconnier_nbr >= 50) {
        data_user._user[id].Succes_grade_Braconnier += 1;
        message.guild.members.cache.find(elem => elem.id == data_user._user[id].id).roles.add(data_syst.Braconnier_bronze_id);
        message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send("**Le membre <@!"+data_user._user[id].id+"> a dévérouiller le [<#"+ data_syst.Succès_id +">] "+ data_syst.Braconnier_bronze_name +" !**")
        return;
    }
    if (data_user._user[id].Succes_grade_Braconnier == 1 && data_user._user[id].braconnier_nbr >= 150) {
        data_user._user[id].Succes_grade_Braconnier += 1;
        message.guild.members.cache.find(elem => elem.id == data_user._user[id].id).roles.remove(data_syst.Braconnier_bronze_id);
        message.guild.members.cache.find(elem => elem.id == data_user._user[id].id).roles.add(data_syst.Braconnier_argent_id);
        message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send("**Le membre <@!"+data_user._user[id].id+"> a dévérouiller le [<#"+ data_syst.Succès_id +">] "+ data_syst.Braconnier_argent_name +" !**")
        return;
    }
    if (data_user._user[id].Succes_grade_Braconnier == 2 && data_user._user[id].braconnier_nbr >= 500) {
        data_user._user[id].Succes_grade_Braconnier += 1;
        message.guild.members.cache.find(elem => elem.id == data_user._user[id].id).roles.remove(data_syst.Braconnier_argent_id);
        message.guild.members.cache.find(elem => elem.id == data_user._user[id].id).roles.add(data_syst.Braconnier_Or_id);
        message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send("**Le membre <@!"+data_user._user[id].id+"> a dévérouiller le [<#"+ data_syst.Succès_id +">] "+ data_syst.Braconnier_Or_name +" !**")
        return;
    }
    if (data_user._user[id].Succes_grade_Braconnier == 3 && data_user._user[id].braconnier_nbr >= 800) {
        data_user._user[id].Succes_grade_Braconnier += 1;
        message.guild.members.cache.find(elem => elem.id == data_user._user[id].id).roles.remove(data_syst.Braconnier_Or_id);
        message.guild.members.cache.find(elem => elem.id == data_user._user[id].id).roles.add(data_syst.Braconnier_Platine_id);
        message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send("**Le membre <@!"+data_user._user[id].id+"> a dévérouiller le [<#"+ data_syst.Succès_id +">] "+ data_syst.Braconnier_Platine_name +" !**")
        return;
    }
}

async function fun_react_valide_braconnier(msg, usr) {
    if (usr.bot == true) 
        return ;
    let index_braconnier = -1;
    for (let i = 0; i < data_braconnier._braconnier.length; i ++) {
        if (data_braconnier._braconnier[i].id_message == msg.message.id && data_braconnier._braconnier[i].statue == true) {
            index_braconnier = i;
            break;
        }
    }
    if (index_braconnier == -1)
        return;
    if (usr.id != data_braconnier._braconnier[index_braconnier].id_inscris_on[0])
        return;
    if (data_braconnier._braconnier[index_braconnier].statue == false) {
        return;
    }
    if (msg._emoji.name == '✅') {
        if (usr.id == data_braconnier._braconnier[index_braconnier].id_inscris_on[0]) {
            let index_user = fun_index_users(data_braconnier._braconnier[index_braconnier].id_inscris[0]);
            let tmp_txt_for_skin = ":star: **LIVRAISON DE ["+data_braconnier._braconnier[index_braconnier].nbr_dd +"] DRAGODINDE FINI** :star:\n**N'oubliez pas de mettre un screen !**\n``` ```";
            let mana_txt = -1;
            let xp_txt = -1;
            let stars_txt = -1;
            data_user._user[index_user].braconnier_nbr += data_braconnier._braconnier[index_braconnier].nbr_dd ;
            fun_gestion_succes_braconnier(msg.message,index_user);
            let multiple = Math.round(data_braconnier._braconnier[index_braconnier].nbr_dd / 10);
            if (data_user._user[index_user].Succes_grade_Braconnier == 0) {
                fun_gestion_xp_usr(msg.message, index_user, 1);
                if (data_user._user[index_user].mana >= 2) {
                    data_user._user[index_user].stars += 1 * multiple;
                    data_user._user[index_user].mana -= 2;
                    stars_txt = 1 * multiple;
                    mana_txt = 2;
                }
                xp_txt = 1;
            }
            else if (data_user._user[index_user].Succes_grade_Braconnier == 1) {
                fun_gestion_xp_usr(msg.message, index_user, 2);
                if (data_user._user[index_user].mana >= 2) {
                    data_user._user[index_user].stars += 1 * multiple;
                    data_user._user[index_user].mana -= 2;
                    mana_txt = 2;
                    stars_txt = 1 * multiple;
                }
                xp_txt = 2;
            }
            else if (data_user._user[index_user].Succes_grade_Braconnier == 2) {
                fun_gestion_xp_usr(msg.message, index_user, 2);
                if (data_user._user[index_user].mana >= 1) {
                    data_user._user[index_user].stars += 1 * multiple;
                    data_user._user[index_user].mana -= 1;
                    mana_txt = 1;
                    stars_txt = 1 * multiple;
                }
                xp_txt = 2;
            }
            else if (data_user._user[index_user].Succes_grade_Braconnier == 3) {
                fun_gestion_xp_usr(msg.message, index_user, 2);
                if (data_user._user[index_user].mana >= 1) {
                    data_user._user[index_user].stars += 2 * multiple;
                    data_user._user[index_user].mana -= 1;
                    mana_txt = 1;
                    stars_txt = 2 * multiple;
                }
                xp_txt = 2;
            }
            else if (data_user._user[index_user].Succes_grade_Braconnier == 4) {
                fun_gestion_xp_usr(msg.message, index_user, 2);
                if (data_user._user[index_user].mana >= 1) {
                    data_user._user[index_user].stars += 2 * multiple;
                    data_user._user[index_user].mana -= 1;
                    mana_txt = 1;
                    stars_txt = 2 * multiple;
                }
                xp_txt = 2;
            }
            tmp_txt_for_skin += "<@!"+ data_braconnier._braconnier[index_braconnier].id_inscris_on[0] +"> ✅``` ```";
            msg.message.edit(tmp_txt_for_skin);
            tmp_txt_for_skin = "**  Le membre <@!"+ data_user._user[index_user].id +"> a gagné "
            if (stars_txt > -1) {
                tmp_txt_for_skin += "+ "+ stars_txt +" :star: ";
            }
            if (mana_txt > -1) {
                tmp_txt_for_skin += "- "+ mana_txt +":droplet: ";
            }
            if (xp_txt > -1) {
                tmp_txt_for_skin += "+ "+ xp_txt +" xp ";
            }
            data_braconnier._braconnier[index_braconnier].statue = false;
            tmp_txt_for_skin += "en faisant une livraison de ["+ data_braconnier._braconnier[index_braconnier].nbr_dd +"] dragodinde pour <@!"+ data_braconnier._braconnier[index_braconnier].id_inscris_on[0] +"> **\n";
            await msg.message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send(tmp_txt_for_skin);
            index_user = fun_index_users(data_braconnier._braconnier[index_braconnier].id_inscris[0]);
            data_user._user[index_user].braconnier_inscription = false;
            index_user = fun_index_users(data_braconnier._braconnier[index_braconnier].id_inscris_on[0]);
            data_user._user[index_user].braconnier_inscription = false;
            return;
        }
    } 
}
exports.fun_react_valide_braconnier = fun_react_valide_braconnier;