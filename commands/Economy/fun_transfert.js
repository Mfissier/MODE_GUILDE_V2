const Discord = require('discord.js');
const data_admin = require('../../data/structjson/admin.json');
const data_syst = require('../../data/structjson/all_systeme.json');
const data_user = require('../../data/structjson/user.json');
const data_guild = require('../../data/structjson/guild.json')
const { fun_index_users } = require('../Fun/fun_index_users');
const { fun_index_guild } = require('../Fun/fun_index_guild');
const { fun_gestion_stats } = require('../../stats/fun_gestion_stats');

async function fun_transfert(message, command) {
    await fun_gestion_stats();
    if (command.length > 2) {
        return(message.channel.send("🤖 **Vous avez donné trop d'arguments !**"));
    }
    if (!Math.round(parseInt(command[1],10)))
        return(message.channel.send("🤖 **Votre dernier arguments doit-être un [NBR] !**"));
    let index_user;
    index_user = fun_index_users(message.member.id);
    if (index_user == -1) {
        return(message.channel.send("🤖 **Vous n'êtes pas enregistré dans la data... Veuillez contacter un STAFF !**"));
    } 
    if (data_user._user[index_user].kamas_waiting > 0) {
        return(message.channel.send("🤖 **Vous avez déjà un transfert en attente !**"));
    }
    if (!data_user._user[index_user].rang_guild.length > 10)
        return(message.channel.send("🤖 **Vous n'avez pas de guilde veuillez prévenir le STAFF de votre guilde !**"));
    let index_guild = await fun_index_guild("", data_user._user[index_user].rang_guild);
    if (index_guild == -1)
        return(message.channel.send("🤖 **Vous n'avez pas de guilde veuillez prévenir le STAFF de votre guilde !**"));
    if (Math.round(parseInt(command[1],10)) < 5)    
        return(message.channel.send("🤖 ** Un transfert, c'est minimum 5 :star: !**"));
    if (data_user._user[index_user].stars < parseInt(command[1],10)) {
        return(message.channel.send("🤖 ** Vous n'avez pas assez de :star: pour faire ce transfert !**"));
    } 
    console.log(data_guild._guild[index_guild]);
    if (data_guild._guild[index_guild].value_stars < 2000) {
        return(message.channel.send("🤖 **La valeur des :star: de votre guilde doit-être supérieur à 2000k/:star: pour être autorisé ! Voir le canal <#"+ data_syst.Finances_id +">**"));
    } else {
        data_user._user[index_user].kamas_waiting = Math.round(data_guild._guild[index_guild].value_stars * Math.round(parseInt(command[1],10)));
        data_guild._guild[index_guild].coffre_guild -= Math.round(data_guild._guild[index_guild].value_stars * Math.round(parseInt(command[1],10)));
        data_user._user[index_user].stars -= Math.round(parseInt(command[1],10));
        message.guild.channels.cache.find(elem => elem.id == data_guild._guild[index_guild].channel_staff_mission_id).send(" <@&"+ data_guild._guild[index_guild].rolemeneur +"> \n\
Le membre <@!"+ data_user._user[index_user].id +"> a demandé sa récompense :\n\
> `"+ data_user._user[index_user].kamas_waiting +" de kamas !`\n\
**Faire la commande !payement <@!"+ data_user._user[index_user].id +"> une fois l'échange effectué dans le canal <#"+ data_syst.Transfert_id +"> !** \n\
")
    }
}
exports.fun_transfert = fun_transfert;