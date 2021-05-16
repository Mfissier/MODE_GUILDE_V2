const Discord = require('discord.js');
const { index } = require('mathjs');
const { fun_gestion_xp_usr } = require('../../Fun/fun_gestion_xp_usr');
const { fun_index_users } = require('../../Fun/fun_index_users');
const client = new Discord.Client();
data_user = require('../../../data/structjson/user.json');
data_guilde = require('../../../data/structjson/guild.json');
data_syst = require('../../../data/structjson/all_systeme.json');
data_skin = require('../../../data/structjson/skin.json');


async function fun_gestion_succes_skin(message, id) {
    if (!id)
        return;
    if (data_user._user[id].rang_power != data_syst.RANG_MUSE_ID) {
        return;
    }
    if (data_user._user[id].Succes_grade_Muse == 0 && data_user._user[id].skin_nbr >= 1) {
        data_user._user[id].Succes_grade_Muse += 1;
        message.guild.members.cache.find(elem => elem.id == data_user._user[id].id).roles.add(data_syst.Muse_bronze_id);
        message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send("**Le membre <@!"+data_user._user[id].id+"> a dévérouiller le [<#"+ data_syst.Succès_id +">] "+ data_syst.Muse_bronze_name +" !**")
        return;
    }
    if (data_user._user[id].Succes_grade_Muse == 1 && data_user._user[id].skin_nbr >= 5) {
        data_user._user[id].Succes_grade_Muse += 1;
        message.guild.members.cache.find(elem => elem.id == data_user._user[id].id).roles.remove(data_syst.Muse_bronze_id);
        message.guild.members.cache.find(elem => elem.id == data_user._user[id].id).roles.add(data_syst.Muse_argent_id);
        message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send("**Le membre <@!"+data_user._user[id].id+"> a dévérouiller le [<#"+ data_syst.Succès_id +">] "+ data_syst.Muse_argent_name +" !**")
        return;
    }
    if (data_user._user[id].Succes_grade_Muse == 2 && data_user._user[id].skin_nbr >= 25) {
        data_user._user[id].Succes_grade_Muse += 1;
        message.guild.members.cache.find(elem => elem.id == data_user._user[id].id).roles.remove(data_syst.Muse_argent_id);
        message.guild.members.cache.find(elem => elem.id == data_user._user[id].id).roles.add(data_syst.Muse_Or_id);
        message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send("**Le membre <@!"+data_user._user[id].id+"> a dévérouiller le [<#"+ data_syst.Succès_id +">] "+ data_syst.Muse_Or_name +" !**")
        return;
    }
    if (data_user._user[id].Succes_grade_Muse == 3 && data_user._user[id].skin_nbr >= 50) {
        data_user._user[id].Succes_grade_Muse += 1;
        message.guild.members.cache.find(elem => elem.id == data_user._user[id].id).roles.remove(data_syst.Muse_Or_id);
        message.guild.members.cache.find(elem => elem.id == data_user._user[id].id).roles.add(data_syst.Muse_Platine_id);
        message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send("**Le membre <@!"+data_user._user[id].id+"> a dévérouiller le [<#"+ data_syst.Succès_id +">] "+ data_syst.Muse_Platine_name +" !**")
        return;
    }
}


async function fun_react_valide_skin(msg, usr) {
    if (usr.bot == true) 
        return ;
    let index_skin = -1;
    for (let i = 0; i < data_skin._skin.length; i ++) {
        if (data_skin._skin[i].id_message == msg.message.id && data_skin._skin[i].statue == true) {
            index_skin = i;
            break;
        }
    }
    if (index_skin == -1)
        return;
    if (usr.id != data_skin._skin[index_skin].id_inscris_on[0])
        return;
    if (data_skin._skin[index_skin].statue == false) {
        return;
    }
    if (msg._emoji.name == '✅') {
        if (usr.id == data_skin._skin[index_skin].id_inscris_on[0]) {
            let index_user = fun_index_users(data_skin._skin[index_skin].id_inscris[0]);
            let tmp_txt_for_skin = ":star: **SKIN LIVRÉ** :star:\n**N'oubliez pas de mettre le lien !**\n``` ```";
            let mana_txt = -1;
            let xp_txt = -1;
            let stars_txt = -1;
            data_user._user[index_user].skin_nbr += 1;
            fun_gestion_succes_skin(msg.message, index_user);
            if (data_user._user[index_user].Succes_grade_Muse == 0) {
                fun_gestion_xp_usr(msg.message, index_user, 1);
                if (data_user._user[index_user].mana >= 2) {
                    data_user._user[index_user].stars += 1;
                    data_user._user[index_user].mana -= 2;
                    stars_txt = 1;
                    mana_txt = 2;
                }
                xp_txt = 1;
            }
            else if (data_user._user[index_user].Succes_grade_Muse == 1) {
                fun_gestion_xp_usr(msg.message, index_user, 2);
                if (data_user._user[index_user].mana >= 2) {
                    data_user._user[index_user].stars += 1;
                    data_user._user[index_user].mana -= 2;
                    mana_txt = 2;
                    stars_txt = 1;
                }
                xp_txt = 2;
            }
            else if (data_user._user[index_user].Succes_grade_Muse == 2) {
                fun_gestion_xp_usr(msg.message, index_user, 2);
                if (data_user._user[index_user].mana >= 1) {
                    data_user._user[index_user].stars += 1;
                    data_user._user[index_user].mana -= 1;
                    mana_txt = 1;
                    stars_txt = 1;
                }
                xp_txt = 2;
            }
            else if (data_user._user[index_user].Succes_grade_Muse == 3) {
                fun_gestion_xp_usr(msg.message, index_user, 2);
                if (data_user._user[index_user].mana >= 1) {
                    data_user._user[index_user].stars += 2;
                    data_user._user[index_user].mana -= 1;
                    mana_txt = 1;
                    stars_txt = 2;
                }
                xp_txt = 2;
            }
            else if (data_user._user[index_user].Succes_grade_Muse == 4) {
                fun_gestion_xp_usr(msg.message, index_user, 2);
                if (data_user._user[index_user].mana >= 1) {
                    data_user._user[index_user].stars += 2;
                    data_user._user[index_user].mana -= 1;
                    mana_txt = 1;
                    stars_txt = 2;
                }
                xp_txt = 2;
            }
            tmp_txt_for_skin += "<@!"+ data_skin._skin[index_skin].id_inscris_on[0] +"> ✅``` ```";
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
            data_skin._skin[index_skin].statue = false;
            tmp_txt_for_skin += "en faisant un skin/stuff pour <@!"+ data_skin._skin[index_skin].id_inscris_on[0] +"> **\n";
            await msg.message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send(tmp_txt_for_skin);
            index_user = fun_index_users(data_skin._skin[index_skin].id_inscris[0]);
            data_user._user[index_user].skin_inscription = false;
            index_user = fun_index_users(data_skin._skin[index_skin].id_inscris_on[0]);
            data_user._user[index_user].skin_inscription = false;
            return;
        }
    } 
}
exports.fun_react_valide_skin = fun_react_valide_skin;