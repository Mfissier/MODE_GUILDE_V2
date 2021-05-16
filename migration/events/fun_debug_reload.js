const Discord = require('discord.js');
const client = new Discord.Client();
const index = require('../index');
const data_syst = require('../data/structjson/all_systeme.json');
const data_user = require('../data/structjson/user.json');
const data_absent = require('../data/structjson/absent.json');
const { fun_index_guild } = require('../commands/Fun/fun_index_guild');
const data_guild = require('../data/structjson/guild.json');
async function fun_debug_reload(client) { 

    let today = new Date();
    let today_hours = today.getHours();
    let today_day = today.getDay(); 
    let today_month = today.getMonth();
    let member_inspect_roles = [];
    let member_inspect = [];
    if (today_hours == 0) {
        for (let i = 0; i < data_user._user.length; i++) {
            data_user._user[i].like_status = false;
            data_user._user[i].like_bonus = false;
            data_user._user[i].vol_status = false;
            data_user._user[i].vol_bonus = false;
            data_user._user[i].inscription_donjon = 0;
            data_user._user[i].mana = data_user._user[i].mana_max;
            data_user._user[i].cheat = 0;
            data_user._user[i].donjon_inscription = false;
            data_user._user[i].attaque_inscription = false;
            data_user._user[i].defense_inscription = false;
            data_user._user[i].skin_inscription = false;
            data_user._user[i].braconnier_inscription = false;
        }
    }
    setTimeout(fun_debug_reload, 60000*60, client);
    //new_member_roles = await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id)._roles);
    for (let i = 0; i < data_user._user.length; i++) {
        member_inspect_roles = await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id));
        //console.log(member_inspect[0]);
        if (member_inspect_roles[0]) { 
            member_inspect_roles = await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id)._roles);
            if (member_inspect_roles && member_inspect_roles.length > 0) {
                 if (!member_inspect_roles[0].find(elem => elem == data_user._user[i].rang_guild)) {
                    if (data_user._user[i].tuto_rang.length > 10) {
                        await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id).roles.add(data_user._user[i].tuto_rang));
                        if (client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id)) 
                            await client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send("**[DEBUG] Le membre <@!"+ data_user._user[i].id +"> a reçu le rang pour pouvoir continuer le tutoriel...**");
                    }
                }
                if (data_user._user[i].rang_coa.length > 10 && !member_inspect_roles[0].find(elem => elem == data_user._user[i].rang_coa)) {
                    if (data_user._user[i].rang_coa.length > 10) {
                        await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id).roles.add(data_user._user[i].rang_coa));
                        if (client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id)) 
                            await client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send("**[DEBUG] Le membre <@!"+ data_user._user[i].id +"> a bien reçu le rang [COALITION]...**");
                    }
                }

                if (!member_inspect_roles[0].find(elem => elem == data_user._user[i].rang_guild)) {
                    if (data_user._user[i].rang_guild.length > 10) {
                        await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id).roles.add(data_user._user[i].rang_guild));
                        if (client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id)) 
                            await client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send("**[DEBUG] Le membre <@!"+ data_user._user[i].id +"> a bien reçu le rang de sa guilde...**");
                    }
                }
                if (!member_inspect_roles[0].find(elem => elem == data_user._user[i].rang_power)) {
                    if (data_user._user[i].rang_power.length > 17 && data_user._user[i].rang_power !=  "PENITENT" && data_user._user[i].id != "???") {
                        await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id).roles.add(data_user._user[i].rang_power));
                        if (client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id)) 
                            await client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send("**[DEBUG] Le membre <@!"+ data_user._user[i].id +"> a bien reçu son métier...**");
                    }
                }

            if (data_user._user[i].tuto_statue == true) {
                if (member_inspect_roles[0].indexOf(data_syst.roles_tuto_1_id) > -1) {
                        await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id).roles.remove(data_syst.roles_tuto_1_id));
                        if (client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id)) {
                            await client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send("**[DEBUG] Un rôle du tutoriel ["+ data_syst.roles_tuto_1_name +"] en trop a été detecté chez <@!"+ data_user._user[i].id +">, il a été supprimé ! **");
                    }
                }
                if (member_inspect_roles[0].indexOf(data_syst.roles_tuto_2_id) > -1) {
                        await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id).roles.remove(data_syst.roles_tuto_2_id));
                        if (client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id)) {
                            await client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send("**[DEBUG] Un rôle du tutoriel ["+ data_syst.roles_tuto_2_name +"] en trop a été detecté chez <@!"+ data_user._user[i].id +">, il a été supprimé ! **");
                    }
                }
                if (member_inspect_roles[0].indexOf(data_syst.roles_tuto_3_id) > -1) {
                        await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id).roles.remove(data_syst.roles_tuto_3_id));
                        if (client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id)) {
                            await client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send("**[DEBUG] Un rôle du tutoriel ["+ data_syst.roles_tuto_3_name +"] en trop a été detecté chez <@!"+ data_user._user[i].id +">, il a été supprimé ! **");
                    }
                }
                if (member_inspect_roles[0].indexOf(data_syst.roles_tuto_4_id) > -1) {
                        await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id).roles.remove(data_syst.roles_tuto_4_id));
                        if (client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id)) {
                            await client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send("**[DEBUG] Un rôle du tutoriel ["+ data_syst.roles_tuto_4_name +"] en trop a été detecté chez <@!"+ data_user._user[i].id +">, il a été supprimé ! **");
                    }
                }
                if (member_inspect_roles[0].indexOf(data_syst.roles_tuto_5_id) > -1) {
                        await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id).roles.remove(data_syst.roles_tuto_5_id));
                        if (client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id)) {
                            await client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send("**[DEBUG] Un rôle du tutoriel ["+ data_syst.roles_tuto_5_name +"] en trop a été detecté chez <@!"+ data_user._user[i].id +">, il a été supprimé ! **");
                    }
                }
                if (member_inspect_roles[0].indexOf(data_syst.roles_tuto_6_id) > -1) {
                        await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id).roles.remove(data_syst.roles_tuto_6_id));
                        if (client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id)) {
                            await client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send("**[DEBUG] Un rôle du tutoriel ["+ data_syst.roles_tuto_6_name +"] en trop a été detecté chez <@!"+ data_user._user[i].id +">, il a été supprimé ! **");
                    }
                }
                if (member_inspect_roles[0].indexOf(data_syst.roles_tuto_7_id) > -1) {
                        await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id).roles.remove(data_syst.roles_tuto_7_id));
                        if (client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id)) {
                            await client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send("**[DEBUG] Un rôle du tutoriel ["+ data_syst.roles_tuto_7_name +"] en trop a été detecté chez <@!"+ data_user._user[i].id +">, il a été supprimé ! **");
                    }
                }
                if (member_inspect_roles[0].indexOf(data_syst.roles_tuto_8_id) > -1) {
                        await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id).roles.remove(data_syst.roles_tuto_8_id));
                        if (client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id)) {
                            await client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send("**[DEBUG] Un rôle du tutoriel ["+ data_syst.roles_tuto_8_name +"] en trop a été detecté chez <@!"+ data_user._user[i].id +">, il a été supprimé ! **");
                    }
                }
                if (member_inspect_roles[0].indexOf(data_syst.roles_tuto_9_id) > -1) {
                        await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id).roles.remove(data_syst.roles_tuto_9_id));
                        if (client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id)) {
                            await client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send("**[DEBUG] Un rôle du tutoriel ["+ data_syst.roles_tuto_9_name +"] en trop a été detecté chez <@!"+ data_user._user[i].id +">, il a été supprimé ! **");
                    }
                }
                if (member_inspect_roles[0].indexOf(data_syst.roles_tuto_10_id) > -1) {
                        await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id).roles.remove(data_syst.roles_tuto_10_id));
                        if (client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id)) {
                            await client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send("**[DEBUG] Un rôle du tutoriel ["+ data_syst.roles_tuto_10_name +"] en trop a été detecté chez <@!"+ data_user._user[i].id +">, il a été supprimé ! **");
                    }
                }
                if (member_inspect_roles[0].indexOf(data_syst.roles_tuto_11_id) > -1) {
                        await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id).roles.remove(data_syst.roles_tuto_11_id));
                        if (client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id)) {
                            await client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send("**[DEBUG] Un rôle du tutoriel ["+ data_syst.roles_tuto_11_name +"] en trop a été detecté chez <@!"+ data_user._user[i].id +">, il a été supprimé ! **");
                    }
                }
                if (member_inspect_roles[0].indexOf(data_syst.roles_tuto_12_id) > -1) {
                        await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id).roles.remove(data_syst.roles_tuto_12_id));
                        if (client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id)) {
                            await client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send("**[DEBUG] Un rôle du tutoriel ["+ data_syst.roles_tuto_12_name +"] en trop a été detecté chez <@!"+ data_user._user[i].id +">, il a été supprimé ! **");
                    }
                }
                if (member_inspect_roles[0].indexOf(data_syst.roles_tuto_13_id) > -1) {
                        await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id).roles.remove(data_syst.roles_tuto_13_id));
                        if (client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id)) {
                            await client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send("**[DEBUG] Un rôle du tutoriel ["+ data_syst.roles_tuto_13_name +"] en trop a été detecté chez <@!"+ data_user._user[i].id +">, il a été supprimé ! **");
                    }
                }
                if (member_inspect_roles[0].indexOf(data_syst.roles_tuto_14_id) > -1) {
                        await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id).roles.remove(data_syst.roles_tuto_14_id));
                        if (client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id)) {
                            await client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send("**[DEBUG] Un rôle du tutoriel ["+ data_syst.roles_tuto_14_name +"] en trop a été detecté chez <@!"+ data_user._user[i].id +">, il a été supprimé ! **");
                    }
                }
                if (member_inspect_roles[0].indexOf(data_syst.roles_tuto_15_id) > -1) {
                        await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id).roles.remove(data_syst.roles_tuto_15_id));
                        if (client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id)) {
                            await client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send("**[DEBUG] Un rôle du tutoriel ["+ data_syst.roles_tuto_15_name +"] en trop a été detecté chez <@!"+ data_user._user[i].id +">, il a été supprimé ! **");
                    }
                }
                if (member_inspect_roles[0].indexOf(data_syst.roles_tuto_16_id) > -1) {
                        await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id).roles.remove(data_syst.roles_tuto_16_id));
                        if (client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id)) {
                            await client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send("**[DEBUG] Un rôle du tutoriel ["+ data_syst.roles_tuto_16_name +"] en trop a été detecté chez <@!"+ data_user._user[i].id +">, il a été supprimé ! **");
                    }
                }
                if (member_inspect_roles[0].indexOf(data_syst.roles_tuto_17_id) > -1) {
                        await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id).roles.remove(data_syst.roles_tuto_17_id));
                        if (client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id)) {
                            await client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send("**[DEBUG] Un rôle du tutoriel ["+ data_syst.roles_tuto_17_name +"] en trop a été detecté chez <@!"+ data_user._user[i].id +">, il a été supprimé ! **");
                    }
                }
                if (member_inspect_roles[0].indexOf(data_syst.roles_tuto_18_id) > -1) {
                        await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id).roles.remove(data_syst.roles_tuto_18_id));
                        if (client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id)) {
                            await client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send("**[DEBUG] Un rôle du tutoriel ["+ data_syst.roles_tuto_18_name +"] en trop a été detecté chez <@!"+ data_user._user[i].id +">, il a été supprimé ! **");
                    }
                }
                
            }
            if (data_user._user[i].Succes_grade_like == 1){
                if (!member_inspect_roles[0].find(elem => elem == data_syst.Likeur_bronze_id)) {
                    await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id).roles.add(data_syst.Likeur_bronze_id));
                    if (client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id))
                        await client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send ("**Le membre <@!"+ data_user._user[i].id +"> a bien reçu le succès "+ data_syst.Likeur_bronze_name +" **");
                }
            } 
            if (data_user._user[i].Succes_grade_like == 2){
                if (!member_inspect_roles[0].find(elem => elem == data_syst.Likeur_argent_id)) {
                    await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id).roles.add(data_syst.Likeur_argent_id));
                    if (client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id))
                        await client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send ("**Le membre <@!"+ data_user._user[i].id +"> a bien reçu le succès "+ data_syst.Likeur_argent_name +" **");
                }
            }
            if (data_user._user[i].Succes_grade_like == 3){
                if (!member_inspect_roles[0].find(elem => elem == data_syst.Likeur_or_id)) {
                    await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id).roles.add(data_syst.Likeur_or_id));
                    if (client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id))
                        await client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send ("**Le membre <@!"+ data_user._user[i].id +"> a bien reçu le succès "+ data_syst.Likeur_or_name +" **");
                }
            }
            if (data_user._user[i].Succes_grade_like == 4){
                if (!member_inspect_roles[0].find(elem => elem == data_syst.Likeur_Platine_id)) {
                    await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id).roles.add(data_syst.Likeur_Platine_id));
                    if (client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id))
                        await client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send ("**Le membre <@!"+ data_user._user[i].id +"> a bien reçu le succès "+ data_syst.Likeur_Platine_name +" **");
                }
            }
            if (data_user._user[i].Succes_grade_Recruteur == 1){
                if (!member_inspect_roles[0].find(elem => elem == data_syst.Recruteur_bronze_id)) {
                    await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id).roles.add(data_syst.Recruteur_bronze_id));
                    if (client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id))
                        await client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send ("**Le membre <@!"+ data_user._user[i].id +"> a bien reçu le succès "+ data_syst.Recruteur_bronze_name +" **");
                }
            }
            if (data_user._user[i].Succes_grade_Recruteur == 2){
                if (!member_inspect_roles[0].find(elem => elem == data_syst.Recruteur_argent_id)) {
                    await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id).roles.add(data_syst.Recruteur_argent_id));
                    if (client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id))
                        await client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send ("**Le membre <@!"+ data_user._user[i].id +"> a bien reçu le succès "+ data_syst.Recruteur_argent_name +" **");
                }
            }
            if (data_user._user[i].Succes_grade_Recruteur ==3){
                if (!member_inspect_roles[0].find(elem => elem == data_syst.Recruteur_Or_id)) {
                    await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id).roles.add(data_syst.Recruteur_Or_id));
                    if (client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id))
                        await client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send ("**Le membre <@!"+ data_user._user[i].id +"> a bien reçu le succès "+ data_syst.Recruteur_Or_name +" **");
                }
            }
            if (data_user._user[i].Succes_grade_Recruteur ==4){
                if (!member_inspect_roles[0].find(elem => elem == data_syst.Recruteur_Platine_id)) {
                    await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id).roles.add(data_syst.Recruteur_Platine_id));
                    if (client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id))
                        await client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send ("**Le membre <@!"+ data_user._user[i].id +"> a bien reçu le succès "+ data_syst.Recruteur_Platine_name +" **");
                }
            }
            if (data_user._user[i].Succes_grade_Espion == 1){
                if (!member_inspect_roles[0].find(elem => elem == data_syst.Espion_bronze_id)) {
                    await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id).roles.add(data_syst.Espion_bronze_id));
                    if (client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id))
                        await client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send ("**Le membre <@!"+ data_user._user[i].id +"> a bien reçu le succès "+ data_syst.Espion_bronze_name +" **");
                }
            }        
            if (data_user._user[i].Succes_grade_Espion == 2){
                if (!member_inspect_roles[0].find(elem => elem == data_syst.Espion_argent_id)) {
                    await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id).roles.add(data_syst.Espion_argent_id));
                    if (client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id))
                        await client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send ("**Le membre <@!"+ data_user._user[i].id +"> a bien reçu le succès "+ data_syst.Espion_argent_name +" **");
                }
            }
            if (data_user._user[i].Succes_grade_Espion == 3){
                if (!member_inspect_roles[0].find(elem => elem == data_syst.Espion_Or_id)) {
                    await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id).roles.add(data_syst.Espion_Or_id));
                    if (client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id))
                        await client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send ("**Le membre <@!"+ data_user._user[i].id +"> a bien reçu le succès "+ data_syst.Espion_Or_name +" **");
                }
            }
            if (data_user._user[i].Succes_grade_Espion == 4){
                if (!member_inspect_roles[0].find(elem => elem == data_syst.Espion_Platine_id)) {
                    await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id).roles.add(data_syst.Espion_Platine_id));
                    if (client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id))
                        await client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send ("**Le membre <@!"+ data_user._user[i].id +"> a bien reçu le succès "+ data_syst.Espion_Platine_name +" **");
                }
            }
            if (data_user._user[i].Succes_grade_Muse == 1){
                if (!member_inspect_roles[0].find(elem => elem == data_syst.Muse_bronze_id)) {
                    await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id).roles.add(data_syst.Muse_bronze_id));
                    if (client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id))
                        await client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send ("**Le membre <@!"+ data_user._user[i].id +"> a bien reçu le succès "+ data_syst.Muse_bronze_name +" **");
                }
            }        
            if (data_user._user[i].Succes_grade_Muse == 2){
                if (!member_inspect_roles[0].find(elem => elem == data_syst.Muse_argent_id)) {
                    await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id).roles.add(data_syst.Muse_argent_id));
                    if (client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id))
                        await client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send ("**Le membre <@!"+ data_user._user[i].id +"> a bien reçu le succès "+ data_syst.Muse_argent_name +" **");
                }
            }
            if (data_user._user[i].Succes_grade_Muse == 3){
                if (!member_inspect_roles[0].find(elem => elem == data_syst.Muse_Or_id)) {
                    await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id).roles.add(data_syst.Muse_Or_id));
                    if (client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id))
                        await client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send ("**Le membre <@!"+ data_user._user[i].id +"> a bien reçu le succès "+ data_syst.Muse_Or_name +" **");
                }
            }
            if (data_user._user[i].Succes_grade_Muse == 4){
                if (!member_inspect_roles[0].find(elem => elem == data_syst.Muse_Platine_id)) {
                    await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id).roles.add(data_syst.Muse_Platine_id));
                    if (client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id))
                        await client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send ("**Le membre <@!"+ data_user._user[i].id +"> a bien reçu le succès "+ data_syst.Muse_Platine_name +" **");
                }
            }
            if (data_user._user[i].Succes_grade_Attaquant == 1){
                if (!member_inspect_roles[0].find(elem => elem == data_syst.Attaquant_bronze_id)) {
                    await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id).roles.add(data_syst.Attaquant_bronze_id));
                    if (client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id))
                        await client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send ("**Le membre <@!"+ data_user._user[i].id +"> a bien reçu le succès "+ data_syst.Attaquant_bronze_name +" **");
                }
            }        
            if (data_user._user[i].Succes_grade_Attaquant == 2){
                if (!member_inspect_roles[0].find(elem => elem == data_syst.Attaquant_argent_id)) {
                    await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id).roles.add(data_syst.Attaquant_argent_id));
                    if (client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id))
                        await client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send ("**Le membre <@!"+ data_user._user[i].id +"> a bien reçu le succès "+ data_syst.Attaquant_argent_name +" **");
                }
            }
            if (data_user._user[i].Succes_grade_Attaquant == 3){
                if (!member_inspect_roles[0].find(elem => elem == data_syst.Attaquant_Or_id)) {
                    await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id).roles.add(data_syst.Attaquant_Or_id));
                    if (client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id))
                        await client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send ("**Le membre <@!"+ data_user._user[i].id +"> a bien reçu le succès "+ data_syst.Attaquant_Or_name +" **");
                }
            }
            if (data_user._user[i].Succes_grade_Attaquant == 4){
                if (!member_inspect_roles[0].find(elem => elem == data_syst.Attaquant_Platine_id)) {
                    await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id).roles.add(data_syst.Attaquant_Platine_id));
                    if (client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id))
                        await client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send ("**Le membre <@!"+ data_user._user[i].id +"> a bien reçu le succès "+ data_syst.Attaquant_Platine_name +" **");
                }
            }
            if (data_user._user[i].Succes_grade_Defenseur == 1){
                if (!member_inspect_roles[0].find(elem => elem == data_syst.Defenseur_bronze_id)) {
                    await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id).roles.add(data_syst.Defenseur_bronze_id));
                    if (client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id))
                        await client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send ("**Le membre <@!"+ data_user._user[i].id +"> a bien reçu le succès "+ data_syst.Defenseur_bronze_name +" **");
                }
            }        
            if (data_user._user[i].Succes_grade_Defenseur == 2){
                if (!member_inspect_roles[0].find(elem => elem == data_syst.Defenseur_argent_id)) {
                    await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id).roles.add(data_syst.Defenseur_argent_id));
                    if (client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id))
                        await client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send ("**Le membre <@!"+ data_user._user[i].id +"> a bien reçu le succès "+ data_syst.Defenseur_argent_name +" **");
                }
            }
            if (data_user._user[i].Succes_grade_Defenseur == 3){
                if (!member_inspect_roles[0].find(elem => elem == data_syst.Defenseur_Or_id)) {
                    await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id).roles.add(data_syst.Defenseur_Or_id));
                    if (client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id))
                        await client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send ("**Le membre <@!"+ data_user._user[i].id +"> a bien reçu le succès "+ data_syst.Defenseur_Or_name +" **");
                }
            }
            if (data_user._user[i].Succes_grade_Defenseur == 4){
                if (!member_inspect_roles[0].find(elem => elem == data_syst.Defenseur_Platine_id)) {
                    await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id).roles.add(data_syst.Defenseur_Platine_id));
                    if (client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id))
                        await client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send ("**Le membre <@!"+ data_user._user[i].id +"> a bien reçu le succès "+ data_syst.Defenseur_Platine_name +" **");
                }
            }
            if (data_user._user[i].Succes_grade_Braconnier == 1){
                if (!member_inspect_roles[0].find(elem => elem == data_syst.Braconnier_bronze_id)) {
                    await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id).roles.add(data_syst.Braconnier_bronze_id));
                    if (client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id))
                        await client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send ("**Le membre <@!"+ data_user._user[i].id +"> a bien reçu le succès "+ data_syst.Braconnier_bronze_name +" **");
                }
            }        
            if (data_user._user[i].Succes_grade_Braconnier == 2){
                if (!member_inspect_roles[0].find(elem => elem == data_syst.Braconnier_argent_id)) {
                    await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id).roles.add(data_syst.Braconnier_argent_id));
                    if (client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id))
                        await client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send ("**Le membre <@!"+ data_user._user[i].id +"> a bien reçu le succès "+ data_syst.Braconnier_argent_name +" **");
                }
            }
            if (data_user._user[i].Succes_grade_Braconnier == 3){
                if (!member_inspect_roles[0].find(elem => elem == data_syst.Braconnier_Or_id)) {
                    await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id).roles.add(data_syst.Braconnier_Or_id));
                    if (client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id))
                        await client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send ("**Le membre <@!"+ data_user._user[i].id +"> a bien reçu le succès "+ data_syst.Braconnier_Or_name +" **");
                }
            }
            if (data_user._user[i].Succes_grade_Braconnier == 4){
                if (!member_inspect_roles[0].find(elem => elem == data_syst.Braconnier_Platine_id)) {
                    await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id).roles.add(data_syst.Braconnier_Platine_id));
                    if (client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id))
                        await client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send ("**Le membre <@!"+ data_user._user[i].id +"> a bien reçu le succès "+ data_syst.Braconnier_Platine_name +" **");
                }
            }
            if (data_user._user[i].Succes_grade_Chercheur_de_Trésor == 1){
                if (!member_inspect_roles[0].find(elem => elem == data_syst.Chercheur_de_Trésor_bronze_id)) {
                    await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id).roles.add(data_syst.Chercheur_de_Trésor_bronze_id));
                    if (client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id))
                        await client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send ("**Le membre <@!"+ data_user._user[i].id +"> a bien reçu le succès "+ data_syst.Chercheur_de_Trésor_bronze_name +" **");
                }
            }        
            if (data_user._user[i].Succes_grade_Chercheur_de_Trésor == 2){
                if (!member_inspect_roles[0].find(elem => elem == data_syst.Chercheur_de_Trésor_argent_id)) {
                    await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id).roles.add(data_syst.Chercheur_de_Trésor_argent_id));
                    if (client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id))
                        await client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send ("**Le membre <@!"+ data_user._user[i].id +"> a bien reçu le succès "+ data_syst.Chercheur_de_Trésor_argent_name +" **");
                }
            }
            if (data_user._user[i].Succes_grade_Chercheur_de_Trésor == 3){
                if (!member_inspect_roles[0].find(elem => elem == data_syst.Chercheur_de_Trésor_Or_id)) {
                    await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id).roles.add(data_syst.Chercheur_de_Trésor_Or_id));
                    if (client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id))
                        await client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send ("**Le membre <@!"+ data_user._user[i].id +"> a bien reçu le succès "+ data_syst.Chercheur_de_Trésor_Or_name +" **");
                }
            }
            if (data_user._user[i].Succes_grade_Chercheur_de_Trésor == 4){
                if (!member_inspect_roles[0].find(elem => elem == data_syst.Chercheur_de_Trésor_Platine_id)) {
                    await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id).roles.add(data_syst.Chercheur_de_Trésor_Platine_id));
                    if (client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id))
                        await client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send ("**Le membre <@!"+ data_user._user[i].id +"> a bien reçu le succès "+ data_syst.Chercheur_de_Trésor_Platine_name +" **");
                }
            }
            if (data_user._user[i].Succes_grade_Voleur == 1){
                if (!member_inspect_roles[0].find(elem => elem == data_syst.Voleur_bronze_id)) {
                    await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id).roles.add(data_syst.Voleur_bronze_id));
                    if (client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id))
                        await client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send ("**Le membre <@!"+ data_user._user[i].id +"> a bien reçu le succès "+ data_syst.Voleur_bronze_name +" **");
                }
            }        
            if (data_user._user[i].Succes_grade_Voleur == 2){
                if (!member_inspect_roles[0].find(elem => elem == data_syst.Voleur_argent_id)) {
                    await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id).roles.add(data_syst.Voleur_argent_id));
                    if (client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id))
                        await client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send ("**Le membre <@!"+ data_user._user[i].id +"> a bien reçu le succès "+ data_syst.Voleur_argent_name +" **");
                }
            }
            if (data_user._user[i].Succes_grade_Voleur == 3){
                if (!member_inspect_roles[0].find(elem => elem == data_syst.Voleur_Or_id)) {
                    await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id).roles.add(data_syst.Voleur_Or_id));
                    if (client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id))
                        await client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send ("**Le membre <@!"+ data_user._user[i].id +"> a bien reçu le succès "+ data_syst.Voleur_Or_name +" **");
                }
            }
            if (data_user._user[i].Succes_grade_Voleur == 4){
                if (!member_inspect_roles[0].find(elem => elem == data_syst.Voleur_Platine_id)) {
                    await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id).roles.add(data_syst.Voleur_Platine_id));
                    if (client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id))
                        await client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send ("**Le membre <@!"+ data_user._user[i].id +"> a bien reçu le succès "+ data_syst.Voleur_Platine_name +" **");
                }
            }
            if (data_user._user[i].Succes_grade_Donateur == 1){
                if (!member_inspect_roles[0].find(elem => elem == data_syst.Donateur_bronze_id)) {
                    await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id).roles.add(data_syst.Donateur_bronze_id));
                    if (client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id))
                        await client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send ("**Le membre <@!"+ data_user._user[i].id +"> a bien reçu le succès "+ data_syst.Donateur_bronze_name +" **");
                }
            }
            if (data_user._user[i].Succes_grade_Donateur == 2){
                if (!member_inspect_roles[0].find(elem => elem == data_syst.Donateur_argent_id)) {
                    await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id).roles.add(data_syst.Donateur_argent_id));
                    if (client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id))
                        await client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send ("**Le membre <@!"+ data_user._user[i].id +"> a bien reçu le succès "+ data_syst.Donateur_argent_name +" **");
                }
            }
            if (data_user._user[i].Succes_grade_Donateur == 3){
                if (!member_inspect_roles[0].find(elem => elem == data_syst.Donateur_Or_id)) {
                    await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id).roles.add(data_syst.Donateur_Or_id));
                    if (client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id))
                        await client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send ("**Le membre <@!"+ data_user._user[i].id +"> a bien reçu le succès "+ data_syst.Donateur_Or_name +" **");
                }
            }
            if (data_user._user[i].Succes_grade_Donateur == 4){
                if (!member_inspect_roles[0].find(elem => elem == data_syst.Donateur_Platine_id)) {
                    await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id).roles.add(data_syst.Donateur_Platine_id));
                    if (client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id))
                        await client.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send ("**Le membre <@!"+ data_user._user[i].id +"> a bien reçu le succès "+ data_syst.Donateur_Platine_name +" **");
                }
            }
                //console.log(member_inspect);
            } else {
                console.log("membre existe pas");
            }
        }
        //members_inspect = await client.guilds.cache.map(elem => elem.members.cache.find(elem => elem.id == data_user._user[i].id));
        // console.log(data_user._user[i].id);
        // console.log('id user => ' + members_inspect.id);
    }
    
}
exports.fun_debug_reload = fun_debug_reload;