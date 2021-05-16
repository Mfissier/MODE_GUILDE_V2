const Discord = require('discord.js');
const data_sys = require('../../../data/structjson/all_systeme.json');
const data_boutique = require('../../../data/structjson/boutique.json');

async function fun_write_boutique(message)
{
    let channel_n;
    let msg;
    
    // CHANGER MESSAGE PERCEPTEUR
/*
    Boutique 
*/  
    if (!data_boutique.id_message_1){
        channel_n = await message.guild.channels.cache.find(Collection => Collection.id == data_sys.boutique_id);
        msg = await channel_n.send("```Pour rappel, les commandes ont parfois, un ou plusieurs arguments, n'oubliez pas l'espace entre l'intitulé de la commande et ce que vous voulez en faire !```\n\n\
Ici, vous êtes dans la boutique de ta guilde ! Vous allez avoir la possibilité d'acheter X choses contre la monnaie de la guilde : les :star: ! Néanmoins, vous ne pouvez pas acheter des choses dans la boutique avec des Kamas !\n\n\
Voici l'ensemble de la liste des **métiers**, objets, consommables achetables avec leurs effets et les commandes associées !\n\n\
__**ATTENTION**__ : *Pour acheter un ou des objets dans la boutique, merci d'écrire dans ce salon-ci les commandes en gras !!!*");
        data_boutique.id_message_1 = msg.id;
        msg = await channel_n.send("__**Métiers** :__\n\
**!rang espion** \n\
> prix :  "+ data_boutique.prix_rang_espion +" :star: \n\
**!rang tueur de percepteur**\n\
> prix : "+ data_boutique.prix_rang_tueur +" :star:\n\
**!rang muse**\n\
> prix : "+ data_boutique.prix_rang_muse +" :star:\n\
**!rang recruteur **\n\
> prix : "+ data_boutique.prix_rang_recruteur +" :star:\n\
**!rang chercheur de trésor** \n\
> prix : "+ data_boutique.prix_rang_chercheur +" :star:\n\
**!rang braconnier**\n\
> prix : "+ data_boutique.prix_rang_braconnier +" :star: \n\
**!rang nomade** *(cumulable)* \n\
> prix : "+ data_boutique.prix_rang_nomade +" :star:\n\
Pour plus d'information sur les métiers cliquez ici => <#"+ data_sys.Information_id +">\n\n\
**!migration @rang_new_guild**\n\
> prix : 35 :star: \n\
*@rang_new_guild = mentionné le rôle de la guilde dans laquel vous voulez migrer !*\n\
``` ```");
        data_boutique.id_message_2 = msg.id;
        msg = await channel_n.send("``Divers``\n\
!mana \n\
> prix : "+ data_boutique.prix_mana +" :star:\n\
*Votre maximum de mana augmente de 1 pour un maximum de 6. De plus, il régénère un mana déjà utilisé dans la journée. (Le mana se régénère de lui-même tous les jours à 00h00 !)*\n\n\
!percepteur\n\
> prix (1) : "+ data_boutique.prix_percepteur_1 +" :star:\n\
> prix (2) : "+ data_boutique.prix_percepteur_2 +" :star:\n\
**!taxe [butin] **\n\
> **!taxe butin** => Permet de payer sa taxe percepteur en précisant combien vous avez récolté.\n\
__Ex :__ \n\
> *!taxe 150000*\n\
Nous comptons sur votre bonne foi pour payer la taxe... !");
        data_boutique.id_message_3 = msg.id;
    }
    else {
        channel_n = await message.channel.messages.cache.find(Collection => Collection.id == data_boutique.id_message_1);
        await channel_n.edit("```Pour rappel, les commandes ont parfois, un ou plusieurs arguments, n'oubliez pas l'espace entre l'intitulé de la commande et ce que vous voulez en faire !```\n\n\
Ici, vous êtes dans la boutique d'AQUA ! Vous allez avoir la possibilité d'acheter X choses contre la monnaie de la guilde : les :star: ! Néanmoins, vous ne pouvez pas acheter des choses dans la boutique d'AQUA avec des Kamas !\n\n\
Voici l'ensemble de la liste des **métiers**, objets, consommables achetables avec leurs effets et les commandes associées !\n\n\
__**ATTENTION**__ : *Pour acheter un ou des objets dans la boutique d'AQUA, merci d'écrire dans ce salon-ci les commandes en gras !!!*");
        channel_n = await message.channel.messages.cache.find(Collection => Collection.id == data_boutique.id_message_2);
        await channel_n.edit("__**Métiers** :__\n\
**!rang espion** \n\
> prix :  "+ data_boutique.prix_rang_espion +" :star: \n\
**!rang tueur de percepteur**\n\
> prix : "+ data_boutique.prix_rang_tueur +" :star:\n\
**!rang muse**\n\
> prix : "+ data_boutique.prix_rang_muse +" :star:\n\
**!rang recruteur **\n\
> prix : "+ data_boutique.prix_rang_recruteur +" :star:\n\
**!rang chercheur de trésor** \n\
> prix : "+ data_boutique.prix_rang_chercheur +" :star:\n\
**!rang braconnier**\n\
> prix : "+ data_boutique.prix_rang_braconnier +" :star: \n\
**!rang nomade** *(cumulable)* \n\
> prix : "+ data_boutique.prix_rang_nomade +" :star:\n\
Pour plus d'information sur les métiers cliquez ici => <#"+ data_sys.Information_id +">\n\n\
**!migration @rang_new_guild**\n\
> prix : 80 % de vos :star:\n\
*@rang_new_guild = mentionné le rôle de la guilde dans laquel vous voulez migrer !*\n\
``` ```");
        channel_n = await message.channel.messages.cache.find(Collection => Collection.id == data_boutique.id_message_3);
        await channel_n.edit("``Divers``\n\
**!mana** \n\
> prix : "+ data_boutique.prix_mana +" :star:\n\
*Votre maximum de mana augmente de 1 pour un maximum de 6. De plus, il régénère un mana déjà utilisé dans la journée. (Le mana se régénère de lui-même tous les jours à 00h00 !)*\n\n\
**!percepteur**\n\
> prix (1) : "+ data_boutique.prix_percepteur_1 +" :star:\n\
> prix (2) : "+ data_boutique.prix_percepteur_2 +" :star:\n\
> prix (3) : "+ data_boutique.prix_percepteur_3 +" :star:\n\
> prix (4) : "+ data_boutique.prix_percepteur_4 +" :star:\n\
**!taxe [butin] **\n\
> **!taxe butin** => Permet de payer sa taxe percepteur en précisant combien vous avez récolté.\n\
__Ex :__ \n\
> *!taxe 150000*\n\
Nous comptons sur votre bonne foi pour payer la taxe... !");
    }
//-------------------------------------
}
exports.fun_write_boutique = fun_write_boutique;