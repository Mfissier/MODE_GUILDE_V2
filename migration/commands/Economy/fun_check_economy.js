const Discord = require('discord.js');
const data_guild = require('../../data/structjson/guild.json');
const data_syst = require('../../data/structjson/all_systeme.json');
const data_tuto = require('../../data/structjson/tutoriel.json');
const data_user = require('../../data/structjson/user.json');
const { fun_transfert } = require('./fun_transfert');
async function fun_check_economy(message, command){
    
    if (command[0].toUpperCase() == '!TRANSFERT') {
        console.log("?????????????????????????????????,");
        if (message.channel.id != data_syst.Transfert_id) {
            return(message.channel.send("🤖 **Cette commande ce fait dans le canal <#"+ data_syst.Transfert_id +"> !**"));
        }
        fun_transfert(message,command);
        return;
    }
} 
exports.fun_check_economy = fun_check_economy;