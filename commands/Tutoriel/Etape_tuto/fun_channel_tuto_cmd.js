const Discord = require('discord.js');
const data_syst = require('../../../data/structjson/all_systeme.json');
const data_user = require('../../../data/structjson/user.json');
const { fun_index_users } = require('../../Fun/fun_index_users');

function fun_text_tuto_valide(txt, index_user)
{
    txt = "";
    if (data_user._user[index_user].tuto_like == true)
        txt += "**!Like =** :ok: \n";
    if (data_user._user[index_user].tuto_like == false)
        txt += "**!Like =** :no_entry_sign: \n";
    if (data_user._user[index_user].tuto_don == true)
        txt += "**!Don =** :ok: \n";
    if (data_user._user[index_user].tuto_don == false)
        txt += "**!Don =** :no_entry_sign: \n";
    if (data_user._user[index_user].tuto_vol == true)
        txt += "**!Vol =** :ok: \n";
    if (data_user._user[index_user].tuto_vol == false)
        txt += "**!Vol =** :no_entry_sign: \n";
    return (txt);
}
async function fun_channel_tuto_cmd(message, command)
{
    let index_user = fun_index_users(message.member.id);
    let txt = "";

    if (index_user == -1)
        return(message.channel.send("🤖 [ERROR] **IN NO DATA** !"));
    if (!message.mentions.users.first()) {
        return(message.channel.send("🤖 **Il faut me mentionner !**"));
    } 
    if (message.mentions.users.first().id == message.member.id) {
        return(message.channel.send("🤖 **Vous ne pouvez pas vous mentionner vous-même !**"));
    }
    
    if (command[0].toUpperCase() == "!LIKE") {
        txt = fun_text_tuto_valide(txt, index_user);
        if (data_user._user[index_user].tuto_like == true) {
            return(message.channel.send("🤖 **Vous avez déjà réussis à like quelqu'un** !\n" + txt));
        }
        data_user._user[index_user].tuto_like = true;
        txt = fun_text_tuto_valide(txt, index_user);
        message.channel.send("🤖 **Bravo vous avez réussis à like quelqu'un** !\n" + txt);
    }
    else if (command[0].toUpperCase() == "!DON") {
        txt = fun_text_tuto_valide(txt, index_user);
        if (data_user._user[index_user].tuto_don == true) {
            return(message.channel.send("🤖 **Vous avez déjà réussis à faire un don** !\n" + txt));
        }
        if (command.length < 3)
            return(message.channel.send("🤖 **La commande don demande un troisième argument, un [NBR] de :star: que tu veux donner !!!**\n" + txt));
        if (!parseInt(command[2],10)) {
            return(message.channel.send("🤖 **C'est presque ça, mais au lieu de mettre "+ command[2] +", il faut mettre un nombre !**\n" + txt));
        }
        data_user._user[index_user].tuto_don = true;
        txt = fun_text_tuto_valide(txt, index_user);
        message.channel.send("🤖 **Bravo vous avez réussis à donner des :star: à quelqu'un** !\n" + txt);
    } 
    
    else if (command[0].toUpperCase() == "!VOL"){
        txt = fun_text_tuto_valide(txt, index_user);
        if (data_user._user[index_user].tuto_vol == true) {
        return(message.channel.send("🤖 **Vous avez déjà réussis à prendre une :star:** !\n" + txt));
        }
        data_user._user[index_user].tuto_vol = true;
        txt = fun_text_tuto_valide(txt, index_user);
        message.channel.send("🤖 **Bravo vous avez réussis à prendre une :star:** !\n" + txt);
    }
    if (data_user._user[index_user].tuto_don == true && data_user._user[index_user].tuto_vol == true && data_user._user[index_user].tuto_like == true) {
        await message.member.roles.remove(data_syst.roles_tuto_13_id);
        await message.member.roles.add(data_syst.roles_tuto_14_id);
        data_user._user[index_user].tuto_rang = data_syst.roles_tuto_14_id;
        let nchan = await message.guild.channels.cache.find(elem => elem.id == data_syst.channel_tuto_métier_id).send("🤖 **<@"+ data_user._user[index_user].id +">**"); 
        return;
    }
}
exports.fun_channel_tuto_cmd = fun_channel_tuto_cmd;