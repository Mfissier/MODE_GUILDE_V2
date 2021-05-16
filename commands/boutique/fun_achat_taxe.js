const Discord = require('discord.js');
const data_guild = require('../../data/structjson/guild.json');
const data_syst = require('../../data/structjson/all_systeme.json');
const data_tuto = require('../../data/structjson/tutoriel.json');
const data_user = require('../../data/structjson/user.json');
const { fun_index_users } = require('../Fun/fun_index_users');
const { fun_index_guild } = require('../Fun/fun_index_guild');

function fun_achat_taxe(message,command)
{
    if (command.length > 2) {
        return(message.channel.send("🤖 **Le butin est incorrect, les chiffres doivent-être collés !**\n\
__Exemple :__ !taxe **12340**"));
    }
    if (command.length < 2) {
        return(message.channel.send("🤖 **Il manque le butin du percepteur!**\n\
__Exemple :__ !taxe **12340**"));
    }
    if (!parseInt(command[1], 10)) {
        return(message.channel.send("🤖 **Vous devez mettre un chiffre en deuxième arguments de votre commande !**"));
    }
    let butin = parseInt(command[1], 10);
    if (butin > 1000000) {
        return(message.channel.send("🤖 **Vous ne pouvez pas mettre un butin de plus de 1.000.000 kamas !**"));
    }
    if (butin < 100000) {
        return(message.channel.send("🤖 **Vous n'avez pas besoin de payer de taxe !!!**"));
    }
    let index_user = fun_index_users(message.member.id);
    let roles_member = message.member._roles;
    butin -= 50000;
    for (let i = 0; i < data_guild._guild.length; i++) {
        if (roles_member.find(elem => elem == data_guild._guild[i].guild)) {
            butin = Math.round(butin);
            data_guild._guild[i].coffre_guild += butin;
            message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send("**[TAXE] 🤖 Le membre <@!"+ message.member.id + ">** a mis **"+ butin +" kamas** dans le coffre de la guilde **"+ data_guild._guild[i].name_guild +"**\n\
**Un grand merci !**");
            let index = 0;
            if (butin < 100000 && butin > 50000) {
                butin = 10000;
            } else {
                for (let y = 0; butin > 100; y++) {
                    butin = Math.round(butin / 10);
                    index = y;
                }
                if (butin % 5 != 0) {
                    butin += 5 - butin % 5;
                }
                for (let y = 0; y < index; y++) {
                    butin *= 10;
                }
                butin *= 2;
            }   
            message.channel.send("🤖 **[TAXE]Vous avez mis "+ butin +" kamas dans le coffre de votre guilde !**");
            message.member.send("🤖 **Vous devez verser "+ butin +" kamas dans le coffre de votre guilde.**\n\
**__Voici comment faire :__**\n\
> 1°) Rendez-vous dans le bulletin de guilde (en jeu)\n\
> 2°) Il vous sera indiqué où se trouve votre Meneur en mode marchand !\n\
> 3°) Rendez-vous à cette position\n\
> 4°) Cliquez sur votre Meneur ou Meneuse\n\
> 5°) Achetez pour "+ butin +" kamas de ressources\n\
> **Bravo ! Vous avez versé de l'argent dans le coffre de votre guilde**\n\
");
            return;
        }
    }
}
exports.fun_achat_taxe = fun_achat_taxe;