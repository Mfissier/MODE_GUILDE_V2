const Discord = require('discord.js');
const { fun_gestion_xp_usr } = require('../Fun/fun_gestion_xp_usr');
const { fun_index_users } = require('../Fun/fun_index_users');
const client = new Discord.Client();
data_user = require('../../data/structjson/user.json');
data_guilde = require('../../data/structjson/guild.json');
data_syst = require('../../data/structjson/all_systeme.json');
data_pos = require('../../data/structjson/pos.json');

async function fun_recompense_chercheur(message) {
    let index_user = fun_index_users(message.member.id);
    let mana_txt = -1;
    let xp_txt = -1;
    let stars_txt = -1;
    let tmp_txt = "";

    data_user._user[index_user].search_perco_nbr += 1;
    fun_gestion_succes_chercheur(message, index_user);
    if (data_user._user[index_user].Succes_grade_Muse == 0) {
        fun_gestion_xp_usr(message, index_user, 1);
        if (data_user._user[index_user].mana >= 2) {
            if (data_user._user[index_user].search_perco_nbr % 3 == 0) {
                data_user._user[index_user].stars += 1;
                data_user._user[index_user].mana -= 2;
                stars_txt = 1;
                mana_txt = 2;
            }
        }
        xp_txt = 1;
    }
    else if (data_user._user[index_user].Succes_grade_Muse == 1) {
        fun_gestion_xp_usr(message, index_user, 2);
        if (data_user._user[index_user].mana >= 2) {
            if (data_user._user[index_user].search_perco_nbr % 3 == 0) {
                data_user._user[index_user].stars += 1;
                data_user._user[index_user].mana -= 2;
                stars_txt = 1;
                mana_txt = 2;
            }
        }
        xp_txt = 2;
    }
    else if (data_user._user[index_user].Succes_grade_Muse == 2) {
        fun_gestion_xp_usr(message, index_user, 2);
        if (data_user._user[index_user].mana >= 1) {
            if (data_user._user[index_user].search_perco_nbr % 3 == 0) {
                data_user._user[index_user].stars += 1;
                data_user._user[index_user].mana -= 1;
                stars_txt = 1;
                mana_txt = 2;
            }
        }
        xp_txt = 2;
    }
    else if (data_user._user[index_user].Succes_grade_Muse == 3) {
        fun_gestion_xp_usr(message, index_user, 2);
        if (data_user._user[index_user].mana >= 1) {
            if (data_user._user[index_user].search_perco_nbr % 3 == 0) {
                data_user._user[index_user].stars += 2;
                data_user._user[index_user].mana -= 1;
                stars_txt = 1;
                mana_txt = 2;
            }
        }
        xp_txt = 2;
    }
    else if (data_user._user[index_user].Succes_grade_Muse == 4) {
        fun_gestion_xp_usr(message, index_user, 2);
        if (data_user._user[index_user].mana >= 1) {
            if (data_user._user[index_user].search_perco_nbr % 3 == 0) {
                data_user._user[index_user].stars += 1;
                data_user._user[index_user].mana -= 1;
                stars_txt = 1;
                mana_txt = 2;
            }
        }
        xp_txt = 2;
    }
    tmp_txt += "**Le membre <@!"+ message.member.id +"> [";
    if (stars_txt > -1) {
        tmp_txt += "+ "+ stars_txt +" :star: ";
    }
    if (mana_txt > -1) {
        tmp_txt += "- "+ mana_txt +":droplet: ";
    }
    if (xp_txt > -1) {
        tmp_txt += "+ "+ xp_txt +" xp ";
    }
    if (stars_txt > -1) {
        tmp_txt += "] en trouvant 3 percepteurs !**";
    } else 
        tmp_txt += "] en trouvant 1 percepteurs !**";
    await message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send(tmp_txt);
}

async function fun_gestion_succes_chercheur(message, id) {
    if (!id)
        return;
    if (data_user._user[id].rang_power != data_syst.RANG_CHERCHEUR_DE_TRESOR_ID) {
        return;
    }
    if (data_user._user[id].Succes_grade_Chercheur_de_Trésor == 0 && data_user._user[id].search_perco_nbr >= 3) {
        data_user._user[id].Succes_grade_Chercheur_de_Trésor += 1;
        message.guild.members.cache.find(elem => elem.id == data_user._user[id].id).roles.add(data_syst.Chercheur_de_Trésor_bronze_id);
        message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send("**Le membre <@!"+data_user._user[id].id+"> a dévérouiller le [<#"+ data_syst.Succès_id +">] "+ data_syst.Chercheur_de_Trésor_bronze_name +" !**")
        return;
    }
    if (data_user._user[id].Succes_grade_Chercheur_de_Trésor == 1 && data_user._user[id].search_perco_nbr >= 90) {
        data_user._user[id].Succes_grade_Chercheur_de_Trésor += 1;
        message.guild.members.cache.find(elem => elem.id == data_user._user[id].id).roles.remove(data_syst.Chercheur_de_Trésor_bronze_id);
        message.guild.members.cache.find(elem => elem.id == data_user._user[id].id).roles.add(data_syst.Chercheur_de_Trésor_argent_id);
        message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send("**Le membre <@!"+data_user._user[id].id+"> a dévérouiller le [<#"+ data_syst.Succès_id +">] "+ data_syst.Chercheur_de_Trésor_argent_name +" !**")
        return;
    }
    if (data_user._user[id].Succes_grade_Chercheur_de_Trésor == 2 && data_user._user[id].search_perco_nbr >= 200) {
        data_user._user[id].Succes_grade_Chercheur_de_Trésor += 1;
        message.guild.members.cache.find(elem => elem.id == data_user._user[id].id).roles.remove(data_syst.Chercheur_de_Trésor_argent_id);
        message.guild.members.cache.find(elem => elem.id == data_user._user[id].id).roles.add(data_syst.Chercheur_de_Trésor_Or_id);
        message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send("**Le membre <@!"+data_user._user[id].id+"> a dévérouiller le [<#"+ data_syst.Succès_id +">] "+ data_syst.Chercheur_de_Trésor_Or_name +" !**")
        return;
    }
    if (data_user._user[id].Succes_grade_Chercheur_de_Trésor == 3 && data_user._user[id].search_perco_nbr >= 400) {
        data_user._user[id].Succes_grade_Chercheur_de_Trésor += 1;
        message.guild.members.cache.find(elem => elem.id == data_user._user[id].id).roles.remove(data_syst.Chercheur_de_Trésor_Or_id);
        message.guild.members.cache.find(elem => elem.id == data_user._user[id].id).roles.add(data_syst.Chercheur_de_Trésor_Platine_id);
        message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send("**Le membre <@!"+data_user._user[id].id+"> a dévérouiller le [<#"+ data_syst.Succès_id +">] "+ data_syst.Chercheur_de_Trésor_Platine_name +" !**")
        return;
    }
}
async function fun_pos_perco(message, command) {
    let statue_donjon = false;
    let statue_dimension = false;
    let butin_nbr = 0;     
    let pos_txt = "";
    let Alliance_name = "";
    let time = new Date();
    if (message.channel.id != data_syst.Chercheur_id)
        return(message.channel.send("🤖 **Cette commande ce fait dans le canal <#"+ data_syst.Chercheur_id +">"));
    if (command.length < 4)
        return(message.channel.send("🤖 **Votre commande comporte trop peu d'arguments...**"));
    if (parseInt(command[1], 10)) {
        return(message.channel.send("🤖 **Le deuxième arguments doit-être le nom de l'Alliance et non un nombre...**"));
    }
    if (parseInt(command[1], 10)) {
        return(message.channel.send("🤖 **Le deuxième argument doit-être le nom de l'Alliance et non un nombre...**"));
    }
    if (!(/^\[+.+\,+.+\]$/.test(command[2]))) {
        return(message.channel.send("🤖 **La position que tu as donné est incorrect !**"));
    }
    let search_virgule = 0;
    let search_crochet_1 = 0;
    let search_crochet_2 = 0;
    for (let i = 0; i < command[2].length; i++) {
        if (command[2][i] == ',')
            search_virgule += 1;
        if (command[2][i] == ']')
            search_crochet_1 += 1;
        if (command[2][i] == '[') 
            search_crochet_2 += 1;
        if (search_virgule > 1)
            return(message.channel.send("🤖 **La position que tu as donné est incorrect !**"));
        if (search_crochet_1 > 1)
            return(message.channel.send("🤖 **La position que tu as donné est incorrect !**"));
        if (search_crochet_2 > 1)
            return(message.channel.send("🤖 **La position que tu as donné est incorrect !**"));
        if (!(command[2][i] >= '0' && command[2][i] <= '9') && (command[2][i] != '-') && (command[2][i] != '[') && (command[2][i] != ']') && (command[2][i] != ',')) {
            return(message.channel.send("🤖 **La position que tu as donné est incorrect !**"));
        }
            
    }
    if (!parseInt(command[3], 10)) {
        return(message.channel.send("🤖 **Le troisième argument doit-être un nombre...**"));
    }
    if (parseInt(command[3], 10) < 0) {
        return(message.channel.send("🤖 **Le butin du percepteur ne peux pas être inférieur à 0...**"));
    }
    if (command.length > 4 && (parseInt(command[4], 10) || parseInt(command[4], 10) == 0)) {
        return(message.channel.send("🤖 **Le nbr du butin ne doit pas comporter d'espace, vous auriez du mettre :** \n\
> `"+command[3]+""+ command[4] +"` \
"));

    }
    if (command.length > 5)
        return(message.channel.send("🤖 **Votre commande comporte trop d'arguments...**"));
    if (command.length > 4) {
        if (command.length > 4 && command[4].toUpperCase() != "DIM" && command[4].toUpperCase() != "DJ") {
            return(message.channel.send("🤖 **Ecrire dim pour dimension ou dj pour donjon ! Vous avez du faire une faute de frappe...**"));
        }
        if (command.length > 4 && command[4].toUpperCase() == "DIM" || command[4].toUpperCase() == "DJ") { 
            if (command[4].toUpperCase() == "DIM")
                statue_donjon = true;
            if (command[4].toUpperCase() == "DJ")
                statue_dimension = true;
        }
    }
    butin_nbr = Math.round(parseInt(command[3], 10));
    pos_txt = command[2];
    Alliance_name = command[1];
    console.log("data_pos._POS_PERCO.length => " + data_pos._POS_PERCO.length > 1);
    let swap;
    let statue_find = false;
    console.log("time => " + time);
    let new_time;
    for (let i = 0; i < data_pos._POS_PERCO.length; i++) {
        if (data_pos._POS_PERCO[i].pos == pos_txt) {
            if (data_pos._POS_PERCO[i].id_user.indexOf(message.member.id) > -1) {
                new_time = time - new Date(data_pos._POS_PERCO[i].day);
                if (new_time > 60000 * 60 * 24) {
                    data_pos._POS_PERCO[i].id_user = [].concat;
                    data_pos._POS_PERCO[i].id_user = [];
                    data_pos._POS_PERCO[i].id_user.push(message.member.id);
                    data_pos._POS_PERCO[i].butin = butin_nbr;
                    data_pos._POS_PERCO[i].pos = pos_txt;
                    data_pos._POS_PERCO[i].name = Alliance_name;
                    data_pos._POS_PERCO[i].day = time;
                    data_pos._POS_PERCO[i].find = 1;
                    data_pos._POS_PERCO[i].donjon_statue = statue_donjon;
                    data_pos._POS_PERCO[i].dimension_statue = statue_dimension;
                    fun_recompense_chercheur(message);
                    statue_find = true;
                } else {
                    return(message.channel.send("🤖 **Vous avez déjà trouvé cette position !**"));
                }
            } else {
                new_time = time - new Date(data_pos._POS_PERCO[i].day);
                if (new_time > 60000 * 60 * 24) {
                    data_pos._POS_PERCO[i].id_user = [].concat;
                    data_pos._POS_PERCO[i].id_user = [];
                    data_pos._POS_PERCO[i].id_user.push(message.member.id);
                    data_pos._POS_PERCO[i].butin = butin_nbr;
                    data_pos._POS_PERCO[i].pos = pos_txt;
                    data_pos._POS_PERCO[i].name = Alliance_name;
                    data_pos._POS_PERCO[i].day = time;
                    data_pos._POS_PERCO[i].find = 1;
                    data_pos._POS_PERCO[i].donjon_statue = statue_donjon;
                    data_pos._POS_PERCO[i].dimension_statue = statue_dimension;
                    statue_find = true;
                    fun_recompense_chercheur(message);
                } else {
                    console.log(new_time - data_pos._POS_PERCO[i].day);
                    data_pos._POS_PERCO[i].find += 1;
                    statue_find = true;
                    fun_recompense_chercheur(message);
                    console.log(data_pos._POS_PERCO[data_pos._POS_PERCO.length - 1]);
                }
            }
            break;
        }
    }
    if (statue_find == false) {
        let new_object;
        new_object = Object.assign({},data_pos._POS_PERCO[0]);
        data_pos._POS_PERCO.push(new_object);
        data_pos._POS_PERCO[data_pos._POS_PERCO.length - 1].id_user = [].concat;
        data_pos._POS_PERCO[data_pos._POS_PERCO.length - 1].id_user = [];
        data_pos._POS_PERCO[data_pos._POS_PERCO.length - 1].id_save = "";
        data_pos._POS_PERCO[data_pos._POS_PERCO.length - 1].id_user.push(message.member.id);
        data_pos._POS_PERCO[data_pos._POS_PERCO.length - 1].butin = butin_nbr;
        data_pos._POS_PERCO[data_pos._POS_PERCO.length - 1].pos = pos_txt;
        data_pos._POS_PERCO[data_pos._POS_PERCO.length - 1].name = Alliance_name;
        data_pos._POS_PERCO[data_pos._POS_PERCO.length - 1].day = time;
        data_pos._POS_PERCO[data_pos._POS_PERCO.length - 1].find += 1;
        data_pos._POS_PERCO[data_pos._POS_PERCO.length - 1].donjon_statue = statue_donjon;
        data_pos._POS_PERCO[data_pos._POS_PERCO.length - 1].dimension_statue = statue_dimension;
        fun_recompense_chercheur(message);
        for (let y = 0; y < data_pos._POS_PERCO.length; y++) {
            for (let i = 0; i < data_pos._POS_PERCO.length; i++) {
                if (data_pos._POS_PERCO[i].name.length > 1 && data_pos._POS_PERCO[y].name.length) {
                    if (data_pos._POS_PERCO[i].name.localeCompare(data_pos._POS_PERCO[y].name, 'en', { sensitivity: 'base' }) == 1) {
                        swap = data_pos._POS_PERCO[i].name;
                        data_pos._POS_PERCO[i].name = data_pos._POS_PERCO[y].name;
                        data_pos._POS_PERCO[y].name = swap;
                    }
                }
            }
        }
    } 
}
exports.fun_pos_perco = fun_pos_perco;
