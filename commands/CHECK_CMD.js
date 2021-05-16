const Discord = require('discord.js');
const { fun_check_cmd_admin } = require('./Administration/fun_check_cmd_admin');
const data_admin = require('../data/structjson/admin.json');
const { fun_check_cmd_help } = require('./Help/fun_check_cmd_help');
const data_syst = require('../data/structjson/all_systeme.json');
const data_user = require('../data/structjson/user.json');
const data_guild = require('../data/structjson/guild.json');
const prefix = '!';
const index = require('../index.js');
const { fun_check_cmd_tuto } = require('./Tutoriel/fun_check_cmd_tuto');
const { fun_check_cmd_boutique } = require('./boutique/fun_check_cmd_boutique');
const { fun_check_cmd_user } = require('./cmd_user/fun_check_cmd_user');
const { fun_index_users } = require('./Fun/fun_index_users');
const { fun_add_date_time } = require('./Fun/fun_add_date_time');
const { fun_check_moderation } = require('./Moderation/fun_check_moderation');
const { fun_check_economy } = require('./Economy/fun_check_economy');
const { fun_index_guild } = require('./Fun/fun_index_guild');

async function CHECK_CMD(message, client)
{
    let index_user;
    let index_guild;
    let txt = "";
    command = message.content.split(/ +/g);
    if (message.channel.type == 'dm')
        return;
    fun_check_cmd_tuto(message,command, client);
    if (data_syst.statue_systeme == true) {
        if (command[0][0] == prefix)
            await message.delete({timeout: 10000});

    if (message.channel.id == data_syst.Welcome_id ||
    message.channel.id == data_syst.Transfert_id ||
    message.channel.id == data_syst.boutique_id ||
    message.channel.id == data_syst.CMD_HELP_id ||
    message.channel.id == data_syst.Chercheur_id)
        await message.delete({timeout: 8000});
    if (message.channel.id == data_syst.Report_id) {
        await message.delete({timeout: 5});
        index_user = fun_index_users(message.member.id);
        if (index_user > -1) {
            index_guild = await fun_index_guild("", data_user._user[index_user].rang_guild);
            if (index_guild > -1) {
                if (message.content.length > 1500) {
                    return(message.member.send("**Votre report est trop long ! Vous ne pouvez pas dépasser les 1500 caractères !**"));
                }
                txt += "<@&"+ data_guild._guild[index_guild].guild +">\n\
Le membre <@!"+ message.member.id +"> a lancé une requête ! :\n";
                txt += message.content;
                message.guild.channels.cache.find(elem => elem.id == data_guild._guild[index_guild].channel_Report_logs_id).send(txt);
            }
            
        }        
    }
        
    }
    if (command[0] == '🤖') 
        await message.delete({timeout: 10000});
	if (command[0][0] != prefix)
        return;
    /*VAR_________*/
    id_member = await message.member.user.id;
    /*_________VAR*/
    if (data_admin.ADMIN.indexOf(id_member) == -1) {
        if (data_user._user[fun_index_users(message.member.id)].lock == true) {
            message.delete({timeout: 100});
            return ;
        } 
    }
    /*SECURITY______Administration*/
    if (data_admin.ADMIN.indexOf(id_member) != -1)
        await fun_check_cmd_admin(message, command, client);
    /*Administration______SECURITY*/
    if (data_syst.boutique_id == message.channel.id) {
        await fun_check_cmd_boutique(message,command);
    }
    fun_check_economy(message, command);
    fun_check_moderation(message,command);
    /*SECURITY______HELP*/
    if (command[0][command[0].length - 1] == '?')
        await fun_check_cmd_help(message,command);
    /*HELP______SECURITY*/
    await fun_check_cmd_user(message, command);
    index_user = fun_index_users(message.member.id);
    if (index_user > -1) {
        if (data_user._user[index_user].rang_guild != data_syst.PENITENT_ID) {
            absent = new Date();
            data_user._user[index_user].date_inscription = fun_add_date_time(absent, 'day', 21);
        }
    }        
}
exports.CHECK_CMD = CHECK_CMD;
