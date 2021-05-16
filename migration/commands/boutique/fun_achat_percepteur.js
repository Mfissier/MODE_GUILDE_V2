const Discord = require('discord.js');
const data_guild = require('../../data/structjson/guild.json');
const data_syst = require('../../data/structjson/all_systeme.json');
const data_tuto = require('../../data/structjson/tutoriel.json');
const data_user = require('../../data/structjson/user.json');
const { fun_index_users } = require('../Fun/fun_index_users');

async function fun_achat_percepteur(message,command)
{
    let index_user;
    let nchan;
    if ((index_user = fun_index_users(message.member.id)) == -1)
        return;
    if (data_user._user[index_user].stars < (data_user._user[index_user].perco_nbr + 1) * 15)
        return(message.channel.send("\
🤖 **Vous n'avez pas assez de** :star: !\
"));
    if (data_user._user[index_user].perco_nbr > 2)
        return(message.channel.send("\
🤖 **Vous ne pouvez pas poser plus de 2 percepteurs !**\
"));
    data_user._user[index_user].stars -= (data_user._user[index_user].perco_nbr + 1) * 15;
    data_user._user[index_user].perco_nbr += 1;
    if (data_user._user[index_user].perco_nbr == 1)
        await message.channel.send("\
🤖 **Vous avez gagné le droit de poser 1 percepteur ! (-"+ (data_user._user[index_user].perco_nbr) * 15 +" :star:)**\
");
    else
        await message.channel.send("\
🤖 **Vous avez gagné le droit de poser 1 percepteur en plus ! (-"+ (data_user._user[index_user].perco_nbr) * 15 +" :star:)**\
");
    nchan = await message.guild.channels.cache.find(collection => collection.id == data_syst.Etoiles_id);
    let index_guild = await fun_index_guild("",data_user._user[index_user].rang_guild);
    if (index_guild == -1) {
        return("🤖 [ERROR] Guilde introuvable");
    }
    if (data_user._user[index_user].perco_nbr == 1) {
        await message.guild.channels.cache.find(elem => elem.id == data_guild._guild[index_guild].channel_staff_mission_id).send("\
<@&"+ data_guild._guild[index_guild].guild +">\n**Le membre <@"+ data_user._user[index_user].id +"> a gagné le droit de poser 1 percepteur **\
");
        nchan.send("\
**🤖 Le membre <@"+ data_user._user[index_user].id +"> a gagné le droit de poser 1 percepteur! (-"+ (data_user._user[index_user].perco_nbr) * 15 +" :star:)**\
")
        message.member.send("\
Tu as reçu le droit de poser un percepteur ! :star:\n\n\
**Tu as des choses à savoir lorsque tu récolteras tes futurs percepteurs:**\n\
``1`` Tu devras obligatoirement utiliser la commande !taxe en mettant la valeur de ce que tu as récolté.\n\
``2`` Une fois fait, je te dirai quoi mettre dans le coffre de guilde\n\n\
**Pour remplir le coffre :**\n\
``1`` Connecte toi en jeu et va dans le bulletin de ta guilde\n\
``2`` Rends toi à la position où ton Meneur sera en mode Marchand\n\
``3`` Achète des items du montant de la taxe que tu dois payer !\n\
**A bientôt !** \n\
");
    }
    else {
        nchan.send("\
**🤖 Le membre <@"+ data_user._user[index_user].id +"> a gagné le droit de poser 1 percepteur en plus (-"+ (data_user._user[index_user].perco_nbr) * 15 +" :star:) !**\
")
    }
    
}
exports.fun_achat_percepteur = fun_achat_percepteur;
