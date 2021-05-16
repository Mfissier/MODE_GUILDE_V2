const Discord = require('discord.js');
const data_guild = require('../../data/structjson/guild.json');
const data_syst = require('../../data/structjson/all_systeme.json');
const data_tuto = require('../../data/structjson/tutoriel.json');
const data_user = require('../../data/structjson/user.json');
const data_boutique = require('../../data/structjson/boutique.json');
const { fun_index_users } = require('../Fun/fun_index_users');
const { fun_delete_rang_base } = require('../Fun/fun_delete_rang_base');
const { fun_index_guild } = require('../Fun/fun_index_guild');

async function fun_achat_rang_braconnier(message, command) {
    let index_user;
    let nchan;
    let roles_user = message.member._roles;
    if ((index_user = fun_index_users(message.member.id)) == -1)
        return;
    if (data_user._user[index_user].rang_power == data_syst.RANG_BRACONNIER_ID) {
        if (!roles_user.find(elem => elem == data_syst.RANG_BRACONNIER_ID))
            await message.member.roles.add(data_syst.RANG_BRACONNIER_ID);
        return(message.channel.send("\
🤖 **Vous avez déjà ce rang !**\
"));
    }
    if (data_user._user[index_user].stars < data_boutique.prix_rang_braconnier)
        return(message.channel.send("\
🤖 **Vous n'avez pas assez de :star: pour acheter ce rang !**\
"));
    data_user._user[index_user].stars -= data_boutique.prix_rang_braconnier;
    data_user._user[index_user].rang_power = data_syst.RANG_BRACONNIER_ID;
    fun_delete_rang_base(message);
        await message.member.roles.add(data_syst.RANG_BRACONNIER_ID);
    if ((nchan = await message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id)))
        await nchan.send("\
** 🤖 Le membre <@"+ data_user._user[index_user].id +"> a reçu le rang __BRACONNIER__ !!! (-"+ data_boutique.prix_rang_braconnier +" :star:)**\
");
    await message.channel.send("\
🤖 **Le membre <@"+ data_user._user[index_user].id +"> a reçu le rang __BRACONNIER__ !!! (-"+ data_boutique.prix_rang_braconnier +" :star:)**\
");
    message.member.send("\
**Tu as acheté le rang BRACONNIER**\n\
*Pour l'utiliser il te faut faire un peu de commerce avec les membres de la Corporation !*\n\n\
Si quelqu'un demande à se faire monter des dragodindes level 5... Hé ben ! Ce sera à toi d'agir !\n\
Une fois les DD up et livrées à ton client, fais la commande :\n\
> **!UPDD @mention [NBR]**\n\
exemple : !UPDD @pseudo_de_ton_client 30\n\
Ton client n'a plus qu'à valider\n\
Ici tu auras livré 30 dragodindes à un membre\n\
Tu gagnes des :star: toutes les 10 dragodindes que tu montes\n\
*Cette commande se fait dans le canal Braconnier (Catégorie Métier)*\n\
!!! N'oublie pas de mettre un screen de l'échange !!!\n\
A bientôt !\n\
");
    let index_guild = await fun_index_guild("",data_user._user[index_user].rang_guild);
    if (index_guild == -1) {
        return("🤖 [ERROR] Guild introuvable");
    }
    await message.guild.channels.cache.find(elem => elem.id == data_guild._guild[index_guild].channel_staff_mission_id).send("<@&"+ data_guild._guild[index_guild].guild +">\n**Le membre <@!"+ data_user._user[index_user].id +"> dois recevoir le rang Braconnier en jeu**");
}
exports.fun_achat_rang_braconnier = fun_achat_rang_braconnier;