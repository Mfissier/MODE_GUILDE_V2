const Discord = require('discord.js');
const data_guild = require('../../data/structjson/guild.json');
const data_syst = require('../../data/structjson/all_systeme.json');
const data_tuto = require('../../data/structjson/tutoriel.json');
const data_user = require('../../data/structjson/user.json');
const data_boutique = require('../../data/structjson/boutique.json');
const { fun_index_users } = require('../Fun/fun_index_users');

async function fun_achat_mana(message,command)
{
    let index_user;
    let nchan;
    if ((index_user = fun_index_users(message.member.id)) == -1)
        return;
    if (data_user._user[index_user].stars < data_boutique.prix_mana)
        return(message.channel.send("\
🤖 **Vous n'avez pas assez de** :star: !\
"));
    if (data_user._user[index_user].mana_max >= 10) {
        data_user._user[index_user].mana = data_user._user[index_user].mana_max;    
        return(message.channel.send("\
🤖 **Votre :droplet: a été réinitialisé !\
"));
    }        
    data_user._user[index_user].mana_max += 1;
    data_user._user[index_user].stars -= data_boutique.prix_mana;
    data_user._user[index_user].mana = data_user._user[index_user].mana_max;
    await message.channel.send("\
🤖 **Vous avez gagné 1 point de :droplet:, votre mana a été réinitialisé ! (-"+ data_boutique.prix_mana +" :star:)**\
");
    if ((nchan = await  message.guild.channels.cache.find(collection => collection.id == data_syst.Etoiles_id))) {
        nchan.send("\
**🤖 Le membre <@"+ data_user._user[index_user].id +"> a gagné 1 point de :droplet: max (-"+ data_boutique.prix_mana +" :star:)!**\
");
    }
}
exports.fun_achat_mana = fun_achat_mana;