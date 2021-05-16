const Discord = require('discord.js');
const { fun_gestion_xp_usr } = require('../Fun/fun_gestion_xp_usr');
const { fun_index_users } = require('../Fun/fun_index_users');
const client = new Discord.Client();
data_user = require('../../data/structjson/user.json');
data_guilde = require('../../data/structjson/guild.json');
data_syst = require('../../data/structjson/all_systeme.json');
data_atq = require('../../data/structjson/attaque.json');

async function fun_annulation (message, id_msg) {
    let index_attaque;
    for (let i = 0; i < data_atq._attaque.length; i++){
        if (data_atq._attaque[i].id_message == id_msg) {
            if (data_atq._attaque[i].statue == true) {
                data_atq._attaque[i].statue = false;
                index_attaque = i;
                break;
            }
            return;
        }
    }
    let index;
    for (let i = 0; i < data_atq._attaque[index_attaque].id_inscris.length; i++) {
        index = fun_index_users(data_atq._attaque[index_attaque].id_inscris[i]);
        data_user._user[index].attaque_inscription = false;
    }
    message.edit(":stars: **DONJON ANNULÉ** :stars:");
}
async function fun_atq(message, command) {
    if (!message.mentions.users.first()) {
        return(message.channel.send("🤖 **Il faut @mentionner quelqu'un !**"));
    }
    let all_mentions_users_id;
    let all_index_mentions_users_id = [];
    console.log("WHAT ???");
    all_mentions_users_id = message.mentions.users.map(elem => elem.id);
    for (let i = 0; i < all_mentions_users_id.length; i++) {
        all_index_mentions_users_id.push(fun_index_users(all_mentions_users_id[i]));
    }
    if (!(all_mentions_users_id.find(elem => elem == message.member.id))) {
        all_mentions_users_id.push(message.member.id);
    }
    if (all_mentions_users_id.length < 2)
        return(message.channel.send("🤖 **Vous devez être au moins deux pour lancer un donjon !**"));
    for (let i = 0; i < all_index_mentions_users_id.length; i++) {
        if (data_user._user[all_index_mentions_users_id[i]].attaque_inscription == true) {
            return(message.channel.send("🤖 **Le membre <@!"+ data_user._user[all_index_mentions_users_id[i]].id +"> est déjà inscrit autre part !**"));
        }
    }
    let new_object = Object.assign({},data_atq._attaque[0]);
    data_atq._attaque.push(new_object);
    data_atq._attaque[data_atq._attaque.length - 1].id_inscris = [].concat();
    data_atq._attaque[data_atq._attaque.length - 1].id_inscris_on = [].concat();
    data_atq._attaque[data_atq._attaque.length - 1].id_inscris = all_mentions_users_id;
    data_atq._attaque[data_atq._attaque.length - 1].id_inscris_on.push(message.member.id);
    for (let i = 0; i < all_index_mentions_users_id.length; i++) {
        data_user._user[all_index_mentions_users_id[i]].attaque_inscription = true;
    }
    data_user._user[fun_index_users(message.member.id)].attaque_inscription = true;
    let tmp_txt = "";
    for (let i = 0; i < data_atq._attaque[data_atq._attaque.length - 1].id_inscris.length; i++) {
        if (data_atq._attaque[data_atq._attaque.length - 1].id_inscris_on.find (elem => elem == data_atq._attaque[data_atq._attaque.length - 1].id_inscris[i]))
             tmp_txt += "> <@!"+ data_atq._attaque[data_atq._attaque.length - 1].id_inscris[i] +"> ✅\n";
        else
             tmp_txt += "> <@!"+ data_atq._attaque[data_atq._attaque.length - 1].id_inscris[i] +"> ❌\n";
    }
    console.log(data_atq._attaque);
    let new_msg;
    new_msg = await message.channel.send(":star: **ATTAQUE EN COURS...** :star:\n\
**Un screen de la fin du combat est obligatoire !**\n\
*Vous avez 10 minutes avant annulation*\n\
``` ```\n\
"+ tmp_txt + " \
``` ```\
**Valider** = ✅ \n\
**Annuler** = ❌");
    await new_msg.react("✅");
    await new_msg.react("❌");
    data_atq._attaque[ data_atq._attaque.length - 1].id_message = await new_msg.id;
    setTimeout(fun_annulation, 60000 * 15, new_msg, new_msg.id); 
}
exports.fun_atq = fun_atq;