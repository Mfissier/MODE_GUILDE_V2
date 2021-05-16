const Discord = require('discord.js');
const data_guild = require('../../data/structjson/guild.json');
const data_syst = require('../../data/structjson/all_systeme.json');
const data_tuto = require('../../data/structjson/tutoriel.json');
const data_user = require('../../data/structjson/user.json');
const data_boutique = require('../../data/structjson/boutique.json');
const { fun_index_users } = require('../Fun/fun_index_users');
const { fun_delete_rang_base } = require('../Fun/fun_delete_rang_base');
const { fun_index_guild } = require('../Fun/fun_index_guild');

async function fun_achat_rang_chercheur(message, command) {
    let index_user;
    let nchan;
    let roles_user = message.member._roles;
    if ((index_user = fun_index_users(message.member.id)) == -1)
        return;
    if (data_user._user[index_user].rang_power == data_syst.RANG_CHERCHEUR_DE_TRESOR_ID) {
        if (!roles_user.find(elem => elem == data_syst.RANG_CHERCHEUR_DE_TRESOR_ID))
            await message.member.roles.add(data_syst.RANG_CHERCHEUR_DE_TRESOR_ID);
        return(message.channel.send("\
🤖 **Vous avez déjà ce rang !**\
"));
    }
    if (data_user._user[index_user].stars < data_boutique.prix_rang_chercheur)
        return(message.channel.send("\
🤖 **Vous n'avez pas assez de :star: pour acheter ce rang !**\
"));
    data_user._user[index_user].stars -= data_boutique.prix_rang_chercheur;
    data_user._user[index_user].rang_power = data_syst.RANG_CHERCHEUR_DE_TRESOR_ID;
    fun_delete_rang_base(message);
    await message.member.roles.add(data_syst.RANG_CHERCHEUR_DE_TRESOR_ID);
    if ((nchan = await message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id)))
        nchan.send("\
** 🤖 Le membre <@"+ data_user._user[index_user].id +"> a reçu le rang __CHERCHEUR__ !!! (-"+ data_boutique.prix_rang_chercheur+" :star:)**\
");
    message.channel.send("\
🤖 **Le membre <@"+ data_user._user[index_user].id +"> a reçu le rang __CHERCHEUR__ !!! (-"+ data_boutique.prix_rang_chercheur+" :star:)**\
");
    data_user._user[index_user].tuto_boutique_statue = true;
    message.member.send("\
**Tu as acheté le rang CHERCHEUR DE TRESOR**\n\
*Ta mission est de trouver les Percepteurs des autres Alliances du serveur*\n\
> *N'oublie pas que grâce à toi, la guilde connait les meilleures positions pour poser*\n\
> *De plus ! Sans toi, la guerre sera difficile !*\n\
*Tout est expliqué dans le canal #『🔎』𝐂𝐡𝐞𝐫𝐜𝐡𝐞𝐮𝐫*\n\
A bientôt !\n\
")
    let index_guild = await fun_index_guild("",data_user._user[index_user].rang_guild);
    if (index_guild == -1) {
        return("🤖 [ERROR] Guild introuvable");
    }
    await message.guild.channels.cache.find(elem => elem.id == data_guild._guild[index_guild].channel_staff_mission_id).send("\
<@&"+ data_guild._guild[index_guild].guild +">\n**Le membre <@!"+ data_user._user[index_user].id +"> dois recevoir le rang Chercheur de Trésor en jeu**\
");
}
exports.fun_achat_rang_chercheur = fun_achat_rang_chercheur;