const Discord = require('discord.js');
const { index } = require('mathjs');
const { fun_gestion_xp_usr } = require('../../Fun/fun_gestion_xp_usr');
const { fun_index_users } = require('../../Fun/fun_index_users');
const client = new Discord.Client();
data_user = require('../../../data/structjson/user.json');
data_guilde = require('../../../data/structjson/guild.json');
data_syst = require('../../../data/structjson/all_systeme.json');
data_atq = require('../../../data/structjson/attaque.json');

async function fun_gestion_succes_atq(message, id) {
    if (!id)
        return;
    if (data_user._user[id].rang_power != data_syst.RANG_TUEUR_DE_PERCEPTEUR_ID) {
        return;
    }
    if (data_user._user[id].Succes_grade_Attaquant == 0 && data_user._user[id].attack_nbr >= 1) {
        data_user._user[id].Succes_grade_Attaquant += 1;
        message.guild.members.cache.find(elem => elem.id == data_user._user[id].id).roles.add(data_syst.Attaquant_bronze_id);
        message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send("**Le membre <@!"+data_user._user[id].id+"> a dévérouillé le [<#"+ data_syst.Succès_id +">] "+ data_syst.Attaquant_bronze_name +" !**")
        return;
    }
    if (data_user._user[id].Succes_grade_Attaquant == 1 && data_user._user[id].attack_nbr >= 5) {
        data_user._user[id].Succes_grade_Attaquant += 1;
        message.guild.members.cache.find(elem => elem.id == data_user._user[id].id).roles.remove(data_syst.Attaquant_bronze_id);
        message.guild.members.cache.find(elem => elem.id == data_user._user[id].id).roles.add(data_syst.Attaquant_argent_id);
        message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send("**Le membre <@!"+data_user._user[id].id+"> a dévérouillé le [<#"+ data_syst.Succès_id +">] "+ data_syst.Attaquant_argent_name +" !**")
        return;
    }
    if (data_user._user[id].Succes_grade_Attaquant == 2 && data_user._user[id].attack_nbr >= 25) {
        data_user._user[id].Succes_grade_Attaquant += 1;
        message.guild.members.cache.find(elem => elem.id == data_user._user[id].id).roles.remove(data_syst.Attaquant_argent_id);
        message.guild.members.cache.find(elem => elem.id == data_user._user[id].id).roles.add(data_syst.Attaquant_Or_id);
        message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send("**Le membre <@!"+data_user._user[id].id+"> a dévérouillé le [<#"+ data_syst.Succès_id +">] "+ data_syst.Attaquant_Or_name +" !**")
        return;
    }
    if (data_user._user[id].Succes_grade_Attaquant == 3 && data_user._user[id].attack_nbr >= 50) {
        data_user._user[id].Succes_grade_Attaquant += 1;
        message.guild.members.cache.find(elem => elem.id == data_user._user[id].id).roles.remove(data_syst.Attaquant_Or_id);
        message.guild.members.cache.find(elem => elem.id == data_user._user[id].id).roles.add(data_syst.Attaquant_Platine_id);
        message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send("**Le membre <@!"+data_user._user[id].id+"> a dévérouillé le [<#"+ data_syst.Succès_id +">] "+ data_syst.Attaquant_Platine_name +" !**")
        return;
    }
}

async function fun_react_atq(msg, usr) {
    if (usr.bot == true) 
         return ;
    let index_attaque = -1;
    let index_all_index_users = [];
    for (let i = 0; i < data_atq._attaque.length; i ++) {
        if (data_atq._attaque[i].id_message == msg.message.id && data_atq._attaque[i].statue == true) {
            index_attaque = i;
            break;
        }
    }
    if (index_attaque == -1)
        return;
    if (data_atq._attaque[index_attaque].id_inscris_on.find(elem => elem == usr.id) && msg._emoji.name != '❌')
        return;
    if (!(data_atq._attaque[index_attaque].id_inscris.find(elem => elem == usr.id)))
        return;
    if (msg._emoji.name == '✅'  && !(data_atq._attaque[index_attaque].id_inscris_on.find(elem => elem == usr.id))) {
        data_atq._attaque[index_attaque].id_inscris_on.push(usr.id);
    }
    let index_inscri = [];
    for (let i = 0; i < data_atq._attaque[index_attaque].id_inscris_on.length; i++) 
        index_all_index_users.push(fun_index_users(data_atq._attaque[index_attaque].id_inscris_on[i]));
    for (let i = 0; i < data_atq._attaque[index_attaque].id_inscris.length; i++) 
        index_inscri.push(fun_index_users(data_atq._attaque[index_attaque].id_inscris[i]));
    if (msg._emoji.name == '❌') {
        let tmp_inscris = data_atq._attaque[index_attaque].id_inscris_on;
        data_atq._attaque[index_attaque].id_inscris_on = [].concat();
        for (let i = 0; i < tmp_inscris.length; i++) {
            if (usr.id != tmp_inscris[i]) {
                data_atq._attaque[index_attaque].id_inscris_on.push(tmp_inscris[i]);
            }
        }
        if (!data_atq._attaque[index_attaque].id_inscris_on.length) {
            msg.message.edit(":star: **ATTAQUE ANNULÉE** :star:");
            for (let i = 0; i < index_inscri.length; i++) {
                data_user._user[index_inscri[i]].attaque_inscription = false;
            }
            data_atq._attaque[index_attaque].statue = false;
            return;
        }
    }

    
    let tmp_txt = "**Une attaque a été faite par :**\n";
    let tmp_txt_for_donjon = ":star: **ATTAQUE FINI** :star:\n**Un screen de la fin du combat est obligatoire !**\n``` ```\n";
    let mana_txt = -1;
    let xp_txt = -1;
    let stars_txt = -1;
    if (data_atq._attaque[index_attaque].id_inscris_on.length == data_atq._attaque[index_attaque].id_inscris.length) {
        data_atq._attaque[index_attaque].statue = false;
        for (let i = 0; i < index_inscri.length; i++) {
            data_user._user[index_inscri[i]].attack_nbr += 1;
            await fun_gestion_succes_atq(msg.message,index_inscri[i]);
            data_user._user[index_inscri[i]].attaque_inscription = false;
            if (data_user._user[index_inscri[i]].Succes_grade_Attaquant == 0) {
                fun_gestion_xp_usr(msg.message, index_inscri[i], 1);
                if (data_user   ._user[index_inscri[i]].mana >= 2) {
                    data_user._user[index_inscri[i]].stars += 1;
                    data_user._user[index_inscri[i]].mana -= 2;
                    stars_txt = 1;
                    mana_txt = 2;
                }
                xp_txt = 1;
            }
            else if (data_user._user[index_inscri[i]].Succes_grade_Attaquant == 1) {
                fun_gestion_xp_usr(msg.message, index_inscri[i], 2);
                if (data_user._user[index_inscri[i]].mana >= 1) {
                    data_user._user[index_inscri[i]].stars += 1;
                    data_user._user[index_inscri[i]].mana -= 2;
                    mana_txt = 2;
                    stars_txt = 1;
                }
                xp_txt = 2;
            }
            else if (data_user._user[index_inscri[i]].Succes_grade_Attaquant == 2) {
                fun_gestion_xp_usr(msg.message, index_inscri[i], 2);
                if (data_user._user[index_inscri[i]].mana >= 1) {
                    data_user._user[index_inscri[i]].stars += 1;
                    data_user._user[index_inscri[i]].mana -= 1;
                    mana_txt = 1;
                    stars_txt = 1;
                }
                xp_txt = 2;
            }
            else if (data_user._user[index_inscri[i]].Succes_grade_Attaquant == 3) {
                fun_gestion_xp_usr(msg.message, index_inscri[i], 2);
                if (data_user._user[index_inscri[i]].mana >= 1) {
                    data_user._user[index_inscri[i]].stars += 2;
                    data_user._user[index_inscri[i]].mana -= 1;
                    mana_txt = 1;
                    stars_txt = 2;
                }
                xp_txt = 2;
            }
            else if (data_user._user[index_inscri[i]].Succes_grade_Attaquant == 4) {
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
        await msg.message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send(tmp_txt);
        await msg.message.edit(tmp_txt_for_donjon);
    } else {
        tmp_txt = "";
        for (let i = 0; i < data_atq._attaque[index_attaque].id_inscris.length; i++) {
            if (data_atq._attaque[index_attaque].id_inscris_on.find (elem => elem == data_atq._attaque[data_atq._attaque.length - 1].id_inscris[i]))
                 tmp_txt += "> <@!"+ data_atq._attaque[index_attaque].id_inscris[i] +"> ✅\n";
            else
                 tmp_txt += "> <@!"+ data_atq._attaque[index_attaque].id_inscris[i] +"> ❌\n";
        }
        await msg.message.edit(":star: **ATTAQUE EN COURS...** :star:\n\
**Un screen de la fin du combat est obligatoire !**\n\
*Vous avez 10 minutes avant annulation*\n\
``` ```\n\
"+ tmp_txt + " \
``` ```\
**Valider** = ✅ \n\
**Annuler** = ❌");
    }
}
exports.fun_react_atq = fun_react_atq;        

