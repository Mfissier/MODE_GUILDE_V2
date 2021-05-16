const Discord = require('discord.js');
const index = require('../../index');
const { fun_channel_tuto_argument } = require('./Etape_tuto/fun_channel_tuto_argument');
const { fun_channel_tuto_bases } = require('./Etape_tuto/fun_channel_tuto_bases');
const { fun_channel_tuto_boutique } = require('./Etape_tuto/fun_channel_tuto_boutique');
const { fun_channel_tuto_cmd } = require('./Etape_tuto/fun_channel_tuto_cmd');
const { fun_channel_tuto_demarrage } = require('./Etape_tuto/fun_channel_tuto_demarrage');
const { fun_channel_tuto_economie } = require('./Etape_tuto/fun_channel_tuto_economie');
const { fun_channel_tuto_etoiles } = require('./Etape_tuto/fun_channel_tuto_etoiles');
const { fun_channel_tuto_les_canaux } = require('./Etape_tuto/fun_channel_tuto_les_canaux');
const { fun_channel_tuto_les_commandes } = require('./Etape_tuto/fun_channel_tuto_les_commandes');
const { fun_channel_tuto_level } = require('./Etape_tuto/fun_channel_tuto_level');
const { fun_channel_tuto_mention } = require('./Etape_tuto/fun_channel_tuto_mention');
const { fun_channel_tuto_métier } = require('./Etape_tuto/fun_channel_tuto_métier');
const { fun_channel_tuto_pseudo } = require('./Etape_tuto/fun_channel_tuto_pseudo');
const { fun_channel_tuto_question } = require('./Etape_tuto/fun_channel_tuto_question');
const { fun_channel_tuto_resume } = require('./Etape_tuto/fun_channel_tuto_resume');
const { fun_channel_tuto_roles } = require('./Etape_tuto/fun_channel_tuto_roles');
const { fun_channel_tuto_ton_profil } = require('./Etape_tuto/fun_channel_tuto_ton_profil');
const { fun_channel_tuto_welcome } = require('./Etape_tuto/fun_channel_tuto_welcome');
data_syst = require('../../data/structjson/all_systeme.json');
async function fun_check_cmd_tuto(message, command, client) {

/*
    『👋』bases
    『👋』pseudo
    『👋』level
    『👋』mention
    『👋』roles
    『👋』les_canaux
    『👋』les_commandes
    『👋』argument
    『👋』demarrage
    『👋』etoiles
    『👋』economie
    『👋』ton_profil
    『👋』cmd
    『👋』métier
    『👋』boutique
    『👋』résumé
    『👋』question
*/
    if (message.member.user.bot == true)
        return;
    if (message.channel.id == data_syst.channel_tuto_bases_id){
        fun_channel_tuto_bases(message,command, client);
    }
    else if (message.channel.id == data_syst.channel_tuto_pseudo_id){
        fun_channel_tuto_pseudo(message,command);
    }
    else if (message.channel.id == data_syst.channel_tuto_level_id){
        fun_channel_tuto_level(message,command);
    }
    else if (message.channel.id == data_syst.channel_tuto_mention_id){
        fun_channel_tuto_mention(message,command);        
    }
    else if (message.channel.id == data_syst.channel_tuto_roles_id){
        fun_channel_tuto_roles(message,command);
    }
    else if (message.channel.id == data_syst.channel_tuto_les_canaux_id){
        fun_channel_tuto_les_canaux(message,command);
    }
    else if (message.channel.id == data_syst.channel_tuto_les_commandes_id){
        fun_channel_tuto_les_commandes(message,command);
    }
    else if (message.channel.id == data_syst.channel_tuto_argument_id){
        fun_channel_tuto_argument(message,command);
    }
    else if (message.channel.id == data_syst.channel_tuto_demarrage_id){
        fun_channel_tuto_demarrage(message,command);
    }
    else if (message.channel.id == data_syst.channel_tuto_etoiles_id){
        fun_channel_tuto_etoiles(message,command);
    }
    else if (message.channel.id == data_syst.channel_tuto_economie_id){
        fun_channel_tuto_economie(message,command);
    }
    else if (message.channel.id == data_syst.channel_tuto_ton_profil_id){
        fun_channel_tuto_ton_profil(message,command);
    }
    else if (message.channel.id == data_syst.channel_tuto_cmd_id){
        fun_channel_tuto_cmd(message,command);
    }
    else if (message.channel.id == data_syst.channel_tuto_métier_id){
        fun_channel_tuto_métier(message,command);
    }
    else if (message.channel.id == data_syst.channel_tuto_boutique_id){
        fun_channel_tuto_boutique(message,command);
    }
    else if (message.channel.id == data_syst.channel_tuto_résumé_id){
        fun_channel_tuto_resume(message,command);
    }
    else if (message.channel.id == data_syst.channel_tuto_question_id){
        fun_channel_tuto_question(message,command);
    }
    else if (message.channel.id == data_syst.Welcome_id){
        fun_channel_tuto_welcome(message, command);
    }
    else {
        return;
    }
    if (message) {
        if (command[0][0] != '!' && command[0][0] != '🤖') {
            message.delete({timeout: 3000});
        }
    }     
}
exports.fun_check_cmd_tuto = fun_check_cmd_tuto;