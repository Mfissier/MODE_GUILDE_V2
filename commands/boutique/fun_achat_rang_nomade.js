const Discord = require('discord.js');
const data_guild = require('../../data/structjson/guild.json');
const data_syst = require('../../data/structjson/all_systeme.json');
const data_tuto = require('../../data/structjson/tutoriel.json');
const data_user = require('../../data/structjson/user.json');
const data_boutique = require('../../data/structjson/boutique.json');
const { fun_index_users } = require('../Fun/fun_index_users');
const { fun_delete_rang_base } = require('../Fun/fun_delete_rang_base');
const { fun_donjon } = require('../cmd_user/fun_donjon');

async function fun_achat_rang_nomade(message, command) {
    let index_user;
    let nchan;
    let roles_user = message.member._roles;
    if ((index_user = fun_index_users(message.member.id)) == -1)
        return;
    if (data_user._user[index_user].rang_power == data_syst.RANG_NOMADE_ID) {
        if (!roles_user.find(elem => elem == data_syst.RANG_NOMADE_ID))
            await message.member.roles.add(data_syst.RANG_NOMADE_ID);
        return(message.channel.send("\
🤖 **Vous avez déjà ce rang !**\
"));
    }
    if (data_user._user[index_user].stars < data_boutique.prix_rang_nomade)
        return(message.channel.send("\
🤖 **Vous n'avez pas assez de :star: pour acheter ce rang !**\
"));
    data_user._user[index_user].stars -= data_boutique.prix_rang_nomade;
    data_user._user[index_user].rang_power = data_syst.RANG_NOMADE_ID;
        await message.member.roles.add(data_syst.RANG_NOMADE_ID);
    if ((nchan = await message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id)))
        nchan.send("\
** 🤖 Le membre <@"+ data_user._user[index_user].id +"> a reçu le rang __NOMADE__ !!! (-"+ data_boutique.prix_rang_nomade+" :star:)**\
");
    message.member.send("\
**Tu as acheté le Rang Bonus NOMADE**\n\
Ce rang ne demande aucune commande mais des négociations !\n\
Dès lors qu'un membre demande de l'aide pour se faire téléporter devant un donjon, tu peux te porter volontaire !\n\
Effectivement, ce rôle sert de \"*taxi*\"\n\
Les membres que tu téléporteras pourront après négociation, te faire un !don de :star:\n\
**A bientôt !**\n\
")
    message.channel.send("\
🤖 **Le membre <@"+ data_user._user[index_user].id +"> a reçu le rang __NOMADE__ !!! (-"+ data_boutique.prix_rang_nomade+" :star:)**\
");
}
exports.fun_achat_rang_nomade = fun_achat_rang_nomade;