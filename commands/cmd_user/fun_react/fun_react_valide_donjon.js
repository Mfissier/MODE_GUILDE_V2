const Discord = require('discord.js');
const { index } = require('mathjs');
const { fun_gestion_xp_usr } = require('../../Fun/fun_gestion_xp_usr');
const { fun_index_users } = require('../../Fun/fun_index_users');
const client = new Discord.Client();
data_user = require('../../../data/structjson/user.json');
data_guilde = require('../../../data/structjson/guild.json');
data_syst = require('../../../data/structjson/all_systeme.json');
data_donjon = require('../../../data/structjson/donjon_sys.json');



async function fun_gestion_succes_donjon(message, id) {
    if (!id)
        return;
    if (data_user._user[id].rang_power != data_syst.RANG_ESPION_ID) {
        return;
    }
    if (data_user._user[id].Succes_grade_Espion == 0 && data_user._user[id].donjon_nbr >= 1) {
        data_user._user[id].Succes_grade_Espion += 1;
        message.guild.members.cache.find(elem => elem.id == data_user._user[id].id).roles.add(data_syst.Espion_bronze_id);
        message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send("**Le membre <@!"+data_user._user[id].id+"> a dévérouiller le [<#"+ data_syst.Succès_id +">] "+ data_syst.Espion_bronze_name +" !**")
        return;
    }
    if (data_user._user[id].Succes_grade_Espion == 1 && data_user._user[id].donjon_nbr >= 20) {
        data_user._user[id].Succes_grade_Espion += 1;
        message.guild.members.cache.find(elem => elem.id == data_user._user[id].id).roles.remove(data_syst.Espion_bronze_id);
        message.guild.members.cache.find(elem => elem.id == data_user._user[id].id).roles.add(data_syst.Espion_argent_id);
        message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send("**Le membre <@!"+data_user._user[id].id+"> a dévérouiller le [<#"+ data_syst.Succès_id +">] "+ data_syst.Espion_argent_name +" !**")
        return;
    }
    if (data_user._user[id].Succes_grade_Espion == 2 && data_user._user[id].donjon_nbr >= 50) {
        data_user._user[id].Succes_grade_Espion += 1;
        message.guild.members.cache.find(elem => elem.id == data_user._user[id].id).roles.remove(data_syst.Espion_argent_id);
        message.guild.members.cache.find(elem => elem.id == data_user._user[id].id).roles.add(data_syst.Espion_Or_id);
        message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send("**Le membre <@!"+data_user._user[id].id+"> a dévérouiller le [<#"+ data_syst.Succès_id +">] "+ data_syst.Espion_Or_name +" !**")
        return;
    }
    if (data_user._user[id].Succes_grade_Espion == 3 && data_user._user[id].donjon_nbr >= 100) {
        data_user._user[id].Succes_grade_Espion += 1;
        message.guild.members.cache.find(elem => elem.id == data_user._user[id].id).roles.remove(data_syst.Espion_Or_id);
        message.guild.members.cache.find(elem => elem.id == data_user._user[id].id).roles.add(data_syst.Espion_Platine_id);
        message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send("**Le membre <@!"+data_user._user[id].id+"> a dévérouiller le [<#"+ data_syst.Succès_id +">] "+ data_syst.Espion_Platine_name +" !**")
        return;
    }
}

async function fun_react_donjon(msg, usr) {
    if (usr.bot == true) 
         return ;
    let index_donjon = -1;
    let index_all_index_users = [];
    for (let i = 0; i < data_donjon._donjon.length; i ++) {
        if (data_donjon._donjon[i].id_message == msg.message.id && data_donjon._donjon[i].statue == true) {
            index_donjon = i;
            break;
        }
    }
    if (index_donjon == -1)
        return;
    if (data_donjon._donjon[index_donjon].id_inscris_on.find(elem => elem == usr.id) && msg._emoji.name != '❌')
        return;
    if (!(data_donjon._donjon[index_donjon].id_inscris.find(elem => elem == usr.id)))
        return;
    if (msg._emoji.name == '✅' && !(data_donjon._donjon[index_donjon].id_inscris_on.find(elem => elem == usr.id))) {
        data_donjon._donjon[index_donjon].id_inscris_on.push(usr.id);
    }
    for (let i = 0; i < data_donjon._donjon[index_donjon].id_inscris_on.length; i++) 
        index_all_index_users.push(fun_index_users(data_donjon._donjon[index_donjon].id_inscris_on[i]));
    let index_inscri = [];
    for (let i = 0; i < data_donjon._donjon[index_donjon].id_inscris.length; i++) 
        index_inscri.push(fun_index_users(data_donjon._donjon[index_donjon].id_inscris[i]));
    if (msg._emoji.name == '❌') {
        let tmp_inscris = data_donjon._donjon[index_donjon].id_inscris_on;
        data_donjon._donjon[index_donjon].id_inscris_on = [].concat();
        for (let i = 0; i < tmp_inscris.length; i++) {
            if (usr.id != tmp_inscris[i]) {
                data_donjon._donjon[index_donjon].id_inscris_on.push(tmp_inscris[i]);
            }
        }
        if (!data_donjon._donjon[index_donjon].id_inscris_on.length) {
            msg.message.edit(":star: **DONJON ANNULÉ** :star:");
            for (let i = 0; i < index_inscri.length; i++) {
                data_user._user[index_inscri[i]].donjon_inscription = false;
            }
            data_donjon._donjon[index_donjon].statue = false;
            return;
        }
    }
    let tmp_txt = "**Un donjon a été fait par :**\n";
    let tmp_txt_for_donjon = ":star: **DONJON FINI** :star:\n**Un screen de la fin du combat est obligatoire !**\n``` ```\n";
    let mana_txt = -1;
    let xp_txt = -1;
    let stars_txt = -1;
    if (data_donjon._donjon[index_donjon].id_inscris_on.length == data_donjon._donjon[index_donjon].id_inscris.length) {
        data_donjon._donjon[index_donjon].statue = false;
        for (let i = 0; i < index_inscri.length; i++) {
            data_user._user[index_inscri[i]].donjon_nbr += 1;
            fun_gestion_succes_donjon(msg.message, index_inscri[i]);
            data_user._user[index_inscri[i]].donjon_inscription = false;
            if (data_user._user[index_inscri[i]].Succes_grade_Espion == 0) {
                fun_gestion_xp_usr(msg.message, index_inscri[i], 1);
                if (data_user._user[index_inscri[i]].mana >= 2) {
                    data_user._user[index_inscri[i]].stars += 1;
                    data_user._user[index_inscri[i]].mana -= 2;
                    stars_txt = 1;
                    mana_txt = 2;
                }
                xp_txt = 1;
            }
            else if (data_user._user[index_inscri[i]].Succes_grade_Espion == 1) {
                fun_gestion_xp_usr(msg.message, index_inscri[i], 2);
                if (data_user._user[index_inscri[i]].mana >= 2) {
                    data_user._user[index_inscri[i]].stars += 1;
                    data_user._user[index_inscri[i]].mana -= 2;
                    mana_txt = 2;
                    stars_txt = 1;
                }
                xp_txt = 2;
            }
            else if (data_user._user[index_inscri[i]].Succes_grade_Espion == 2) {
                fun_gestion_xp_usr(msg.message, index_inscri[i], 2);
                if (data_user._user[index_inscri[i]].mana >= 1) {
                    data_user._user[index_inscri[i]].stars += 1;
                    data_user._user[index_inscri[i]].mana -= 1;
                    mana_txt = 1;
                    stars_txt = 1;
                }
                xp_txt = 2;
            }
            else if (data_user._user[index_inscri[i]].Succes_grade_Espion == 3) {
                fun_gestion_xp_usr(msg.message, index_inscri[i], 2);
                if (data_user._user[index_inscri[i]].mana >= 1) {
                    data_user._user[index_inscri[i]].stars += 2;
                    data_user._user[index_inscri[i]].mana -= 1;
                    mana_txt = 1;
                    stars_txt = 2;
                }
                xp_txt = 2;
            }
            else if (data_user._user[index_inscri[i]].Succes_grade_Espion == 4) {
                fun_gestion_xp_usr(msg.message, index_inscri[i], 2);
                if (data_user._user[index_inscri[i]].mana >= 1) {
                    data_user._user[index_inscri[i]].stars += 2;
                    data_user._user[index_inscri[i]].mana -= 1;
                    mana_txt = 1;
                    stars_txt = 2;
                }
                xp_txt = 2;
            }
            tmp_txt += "> **<@!"+ data_user._user[index_inscri[i]].id +"> [ ";
            tmp_txt_for_donjon += "> **<@!"+ data_user._user[index_inscri[i]].id +"> [ ";
            if (stars_txt > -1) {
                tmp_txt_for_donjon += "+ "+ stars_txt +" :star: ";
                tmp_txt += "+ "+ stars_txt +" :star: ";
            }
            if (mana_txt > -1) {
                tmp_txt_for_donjon += "- "+ mana_txt +":droplet: ";
                tmp_txt += "- "+ mana_txt +":droplet: ";
            }
            if (xp_txt > -1) {
                tmp_txt_for_donjon += "+ "+ xp_txt +" xp ";
                tmp_txt += "+ "+ xp_txt +" xp ";
            }
            tmp_txt += "]**\n";
            tmp_txt_for_donjon += "]**\n";
            mana_txt = -1;
            xp_txt = -1;
            stars_txt = -1;
        }
        tmp_txt_for_donjon += "\n``` ```";
        data_donjon._donjon[index_donjon].statue = false;
        await msg.message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send(tmp_txt);
        await msg.message.edit(tmp_txt_for_donjon);
        return;
    } else {
        tmp_txt = "";
        for (let i = 0; i < data_donjon._donjon[index_donjon].id_inscris.length; i++) {
            if (data_donjon._donjon[index_donjon].id_inscris_on.find (elem => elem == data_donjon._donjon[data_donjon._donjon.length - 1].id_inscris[i]))
                 tmp_txt += "> <@!"+ data_donjon._donjon[index_donjon].id_inscris[i] +"> ✅\n";
            else
                 tmp_txt += "> <@!"+ data_donjon._donjon[index_donjon].id_inscris[i] +"> ❌\n";
        }
        await msg.message.edit(":star: **DONJON EN COURS...** :star:\n\
**Un screen de la fin du combat est obligatoire !**\n\
*Vous avez 10 minutes avant annulation*\n\
``` ```\n\
"+ tmp_txt + " \
``` ```\
**Valider** = ✅ \n\
**Annuler** = ❌");
    }
}
exports.fun_react_donjon = fun_react_donjon;