const Discord = require('discord.js');
const { fun_gestion_xp_usr } = require('../Fun/fun_gestion_xp_usr');
const { fun_index_users } = require('../Fun/fun_index_users');
const client = new Discord.Client();
data_user = require('../../data/structjson/user.json');
data_guilde = require('../../data/structjson/guild.json');
data_syst = require('../../data/structjson/all_systeme.json');
data_skin = require('../../data/structjson/skin.json');


async function fun_annulation (message, id_msg) {
    let index_braconnier;
    for (let i = 0; i < data_braconnier._braconnier.length; i++){
        if (data_braconnier._braconnier[i].id_message == id_msg) {
            if (data_braconnier._braconnier[i].statue == true) {
                data_braconnier._braconnier[i].statue = false;
                index_braconnier = i;
                break;
            }
            return;
        }
    }
    let index;
    index = fun_index_users(data_braconnier._braconnier[index_braconnier].id_inscris[0]);
    data_user._user[index].donjon_inscription = false;
    index = fun_index_users(data_braconnier._braconnier[index_braconnier].id_inscris_on[0]);
    data_user._user[index].donjon_inscription = false;
    message.edit(":stars: **COMMANDE ANNULÉE** :stars:");
}

async function fun_braconnier(message, command) {
    if (!message.mentions.users.first()) {
        return(message.channel.send("🤖 **Il faut @mentionner quelqu'un !**"));
    }
    let all_mentions_users_id;
    let all_index_mentions_users_id = [];

    if (command.length < 3)
    return(message.channel.send("🤖 **Il manque le nombre de Dragodindes que vous allez monter !**"));
    if (!parseInt(command[2], 10))
        return(message.channel.send("🤖 **Le chiffre que vous avez mis est incorrect !**"));
    if (Math.round(parseInt(command[2], 10)) > 100)
        return(message.channel.send("🤖 **Vous ne pouvez pas livrer plus de 100 dragodindes à la fois !**"));
    if (Math.round(parseInt(command[2], 10)) < 10) {
        return(message.channel.send("🤖 **Vous ne pouvez pas livrer moins de 10 dragodindes !**"));
    }
    all_mentions_users_id = message.mentions.users.map(elem => elem.id);
    for (let i = 0; i < all_mentions_users_id.length; i++) {
        all_index_mentions_users_id.push(fun_index_users(all_mentions_users_id[i]));
    } 
    if (!(all_mentions_users_id.find(elem => elem == message.member.id))) {
        all_mentions_users_id.push(message.member.id);
    }
    let number = Math.round(parseInt(command[2], 10));
    if (all_mentions_users_id.length > 2)
        return(message.channel.send("🤖 **Vous ne pouvez pas faire un skin/stuff pour qu'une seul personne à la fois !**"));
        all_index_mentions_users_id.push(fun_index_users(message.member.id));
        for (let i = 0; i < all_index_mentions_users_id.length; i++) {
            if (data_user._user[all_index_mentions_users_id[i]].braconnier_inscription == true) {
                return(message.channel.send("🤖 **Le membre <@!"+ data_user._user[all_index_mentions_users_id[i]].id +"> est déjà inscrit autre part !**"));
            }
        }
        let new_object = Object.assign({},data_braconnier._braconnier[0]);
        data_braconnier._braconnier.push(new_object);
        data_braconnier._braconnier[data_braconnier._braconnier.length - 1].id_inscris = [].concat();
        data_braconnier._braconnier[data_braconnier._braconnier.length - 1].id_inscris_on = [].concat();
        data_braconnier._braconnier[data_braconnier._braconnier.length - 1].id_inscris.push(message.member.id);
        data_braconnier._braconnier[data_braconnier._braconnier.length - 1].id_inscris_on.push(message.mentions.users.first().id);
        data_braconnier._braconnier[data_braconnier._braconnier.length - 1].nbr_dd = number;
        
        for (let i = 0; i < all_index_mentions_users_id.length; i++) {
            data_user._user[all_index_mentions_users_id[i]].braconnier_inscription = true;
        }
        let tmp_txt = "";
        tmp_txt += "**=>** <@!"+ data_braconnier._braconnier[data_braconnier._braconnier.length - 1].id_inscris_on[0] +"> ❌";
        console.log(data_braconnier._braconnier);
        let new_msg;
        new_msg = await message.channel.send(":star: ** ["+ number +"] UP DE DRAGODINDES EN COURS...** :star:\n\
*Vous avez 10 minutes avant annulation*\n\
``` ```\
"+ tmp_txt + " \
``` ```\
**Valider** = ✅ \n");
        await new_msg.react("✅");
        data_braconnier._braconnier[data_braconnier._braconnier.length - 1].id_message = await new_msg.id;
        setTimeout(fun_annulation, 60000 * 10, new_msg, new_msg.id); 
}
exports.fun_braconnier = fun_braconnier;