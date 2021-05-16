const Discord = require('discord.js');
const { fun_atq } = require('./fun_atq');
const { fun_def } = require('./fun_def');
const { fun_don } = require('./fun_don');
const { fun_donjon } = require('./fun_donjon');
const { fun_like } = require('./fun_like');
const { fun_profil } = require('./fun_profil');
const { fun_vol } = require('./fun_vol');
const data_syst = require('../../data/structjson/all_systeme.json');
const data_guild = require('../../data/structjson/guild.json');
const data_user = require('../../data/structjson/user.json');
const { fun_skin } = require('./fun_skin');
const { fun_braconnier } = require('./fun_braconnier');
const { fun_index_guild } = require('../Fun/fun_index_guild');
const { fun_index_users } = require('../Fun/fun_index_users');
const { time } = require('cron');
const { fun_pos_perco } = require('./fun_pos_perco');

async function fun_check_cmd_user(message, command) {

    if (command[0].toUpperCase() == '!PROFIL') {
        if (message.channel.id != data_syst.Profil_id) {
            return(message.channel.send("🤖 **Cette commande ce fait dans le canal <#"+ data_syst.Profil_id +">**"));
        }
        fun_profil(message, command);
    }
    if (command[0].toUpperCase() == '!DONJON') {
        if (message.channel.id != data_syst.Espion_id) {
            return(message.channel.send("🤖 **Cette commande ce fait dans le canal <#"+ data_syst.Espion_id +">**"));
        }
        fun_donjon(message,command);
    }
    if (command[0].toUpperCase() == '!ATQ') {
        if (message.channel.id != data_syst.Tueur_id) {
            return(message.channel.send("🤖 **Cette commande ce fait dans le canal <#"+ data_syst.Tueur_id +">**"));
        }
        fun_atq(message,command);
    }
    if (command[0].toUpperCase() == '!DEF') {
        if (message.channel.id != data_syst.Tueur_id) {
            return(message.channel.send("🤖 **Cette commande ce fait dans le canal <#"+ data_syst.Tueur_id +">**"));
        }
        fun_def(message,command);
    }
    if (command[0].toUpperCase() == '!SKIN') {
        if (message.channel.id != data_syst.Muse_id) {
            return(message.channel.send("🤖 **Cette commande ce fait dans le canal <#"+ data_syst.Muse_id +">**"));
        }
        fun_skin(message,command);
    }
    if (command[0].toUpperCase() == '!UPDD') {
        if (message.channel.id != data_syst.Braconnier_id) {
            return(message.channel.send("🤖 **Cette commande ce fait dans le canal <#"+ data_syst.Braconnier_id +">**"));
        }
        fun_braconnier(message,command);
    }
    channel_ok = [];
    for (let i = 0; i < data_guild._guild.length; i++) {
        if (data_guild._guild[i].name_guild) {
            channel_ok.push(data_guild._guild[i].channel_discussion_id);
        }
    }
    channel_ok.push(data_syst.Discussion_id);
    if (command[0].toUpperCase() == '!LIKE') {
        if (message.channel.id == data_syst.channel_tuto_cmd_id) {
            return;
        }
        if (!channel_ok.find(elem => elem == message.channel.id)) {
            return(message.channel.send("🤖 **Cette commande ce fait dans un canal de Discussion !**"));
        }
        fun_like(message,command);
    }
    if (command[0].toUpperCase() == '!DON') {
        if (message.channel.id == data_syst.channel_tuto_cmd_id) {
            return;
        }
        if (!channel_ok.find(elem => elem == message.channel.id)) {
            return(message.channel.send("🤖 **Cette commande ce fait dans un canal de Discussion !**"));
        }
        fun_don(message, command);
    }
    if (command[0].toUpperCase() == '!POSPERCO') {
        fun_pos_perco(message, command);
    }
    if (command[0].toUpperCase() == '!VOL') {
        if (message.channel.id == data_syst.channel_tuto_cmd_id) {
            return;
        }
        if (!channel_ok.find(elem => elem == message.channel.id)) {
            return(message.channel.send("🤖 **Cette commande ce fait dans un canal de Discussion !**"));
        }
        fun_vol(message, command);
    }

    let index_user = await fun_index_users(message.member.id);
    if (index_user == -1) 
        return;
    let index_guild = await fun_index_guild("", data_user._user[index_user].rang_guild);
    if (index_guild == -1) 
        return;
    txt = "**Commande du membre** <@!"+ data_user._user[index_user].id +">\n\
**Fais dans le canal <#"+ message.channel.id +"> **\n";
    if (data_guild._guild[index_guild].logs.length + message.content.length + txt.length >= 1500) {
        message.guild.channels.cache.find(elem => elem.id == data_guild._guild[index_guild].channel_staff_logs_id).send(data_guild._guild[index_guild].logs);
        data_guild._guild[index_guild].logs = "";
        data_guild._guild[index_guild].logs += txt;
        data_guild._guild[index_guild].logs += message.content;
        data_guild._guild[index_guild].logs += "\n";
        data_guild._guild[index_guild].logs += "``` ```";
    } else {
        data_guild._guild[index_guild].logs += txt;
        data_guild._guild[index_guild].logs += message.content;
        data_guild._guild[index_guild].logs += "\n";
        data_guild._guild[index_guild].logs += "``` ```";
    }
        
        
}
exports.fun_check_cmd_user = fun_check_cmd_user;