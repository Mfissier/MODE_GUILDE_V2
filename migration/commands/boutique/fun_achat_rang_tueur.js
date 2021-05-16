const Discord = require('discord.js');
const data_guild = require('../../data/structjson/guild.json');
const data_syst = require('../../data/structjson/all_systeme.json');
const data_tuto = require('../../data/structjson/tutoriel.json');
const data_user = require('../../data/structjson/user.json');
const data_boutique = require('../../data/structjson/boutique.json');
const { fun_index_users } = require('../Fun/fun_index_users');
const { fun_delete_rang_base } = require('../Fun/fun_delete_rang_base');
const { fun_index_guild } = require('../Fun/fun_index_guild');

async function fun_achat_rang_tueur(message, command) {
    let index_user;
    let nchan;
    let roles_user = message.member._roles;
    if ((index_user = fun_index_users(message.member.id)) == -1)
        return;
    if (data_user._user[index_user].rang_power == data_syst.RANG_TUEUR_DE_PERCEPTEUR_ID) {
        if (!roles_user.find(elem => elem == data_syst.RANG_TUEUR_DE_PERCEPTEUR_ID))
            await message.member.roles.add(data_syst.RANG_TUEUR_DE_PERCEPTEUR_ID);
        return(message.channel.send("🤖 **Vous avez déjà ce rang !**"));
    }
    if (data_user._user[index_user].stars < data_boutique.prix_rang_tueur)
        return(message.channel.send("🤖 **Vous n'avez pas assez de :star: pour acheter ce rang !**"));
    data_user._user[index_user].stars -= data_boutique.prix_rang_tueur;
    data_user._user[index_user].rang_power = data_syst.RANG_TUEUR_DE_PERCEPTEUR_ID;
    fun_delete_rang_base(message);
        await message.member.roles.add(data_syst.RANG_TUEUR_DE_PERCEPTEUR_ID);
    if ((nchan = await message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id)))
        nchan.send("** 🤖 Le membre <@"+ data_user._user[index_user].id +"> a reçu le rang __TUEUR DE PERCEPTEUR__ !!! (-"+ data_boutique.prix_rang_tueur+" :star:)**");
    message.channel.send("🤖 **Le membre <@"+ data_user._user[index_user].id +"> a reçu le rang __TUEUR DE PERCEPTEUR__ !!! (-"+ data_boutique.prix_rang_tueur+" :star:)**");
    message.member.send("\
*Tu as choisis le rang TUEUR DE PERCEPTEUR**\n\
Tu es la ligne de défense, la précieuse recrue qui deviendra peut-être un jour le plus grand Mercenaire de la Corporation\n\
*Ta mission est de protéger nos percepteurs et d\'organiser des attaques*\n\
> **Tu seras parfois invité à faire des guerres de grande envergure !**\n\
Pour utiliser ton Métier va dans le canal 『🔫』𝐓𝐮𝐞𝐮𝐫\n\
Tu as deux commandes :\n\
``1``!ATQ @mention [@mention...]\n\
``2``!DEF @mention [@mention...]\n\
Il s'agira de mentionner les personnes avec qui tu as fais une défense ou une attaque.\n\
Ils devront valider et toi mettre une preuve de ton exploit (screen de la fin du combat).\n\
")
    let index_guild = await fun_index_guild("",data_user._user[index_user].rang_guild);
    if (index_guild == -1) {
        return("🤖 [ERROR] Guild introuvable");
    }
    await message.guild.channels.cache.find(elem => elem.id == data_guild._guild[index_guild].channel_staff_mission_id).send("<@&"+ data_guild._guild[index_guild].guild +">\n**Le membre <@!"+ data_user._user[index_user].id +"> dois recevoir le rang Tueur de Percepteur en jeu**");
}
exports.fun_achat_rang_tueur = fun_achat_rang_tueur;