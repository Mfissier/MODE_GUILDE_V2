const Discord = require('discord.js');
const data_syst = require('../../../data/structjson/all_systeme.json');
const { fun_index_guild } = require('../../Fun/fun_index_guild');
const data_user = require('../../../data/structjson/user.json');
const { fun_index_users } = require('../../Fun/fun_index_users');
const data_guild = require('../../../data/structjson/guild.json');
const data_ins = require('../../../data/structjson/inscription.json');

async function fun_channel_tuto_welcome(message, command)
{       
    index_user = fun_index_users(message.member.id);
    let msg;
    let index_guild 
    if (data_user._user[index_user].tuto_statue == true)
        return(message.channel.send("🤖 **Votre candidature à déjà été envoyé ! Le Staff de chaque guilde a 48 H de délai pour toutes demandes !**"));
    if (index_user == -1)
        return(message.channel.send("🤖 **Je ne vous ai pas trouvé ! Veuillez contacter un administrateur**"));
    for (let i = 0; i < data_guild._guild.length; i++) {
        if (data_guild._guild[i].name_guild.length > 1) {
            if (data_guild._guild[i].name_guild.toUpperCase() == command[0].toUpperCase()) {
                data_user._user[index_user].rang_guild = data_guild._guild[i].guild;
                data_user._user[index_user].tuto_statue = true;
                index_guild = i;
                break;
            }
        }
    }
    if (data_user._user[index_user].tuto_statue == true)
    {
        let index_register = -1;
        for (let i = 0; i < data_ins._register.length; i++){
            if (data_ins._register[i].delete_statue == false && data_ins._register[i].idusr == message.member.id) {
                index_register = i;
                break 
            }
        }
        if (index_register == -1)
        {
            let role_usr = message.member._roles;
            for (let i = 0; i < role_usr.length; i++) {
                message.member.roles.remove(role_usr[i]);
                data_user._user[index_user].tuto_statue = false;
                data_user._user[index_user].tuto_boutique_statue = false;
                data_user._user[index_user].tuto_don = false;
                data_user._user[index_user].tuto_vol = false;
                data_user._user[index_user].tuto_like = false;
                data_user._user[index_user].tuto_profil = false;
                data_user._user[index_user].tuto_rang = "";
            }
            return(message.channel.send("🤖 [ERROR] **Fiche obsolète, contact admin !**"))
        }
        data_ins._register[index_register].id_guild = data_guild._guild[index_guild].guild;
        data_ins._register[index_register].statue = true;
        msg = await message.guild.channels.cache.find(elem => elem.id == data_guild._guild[index_guild].channel_staff_mission_id).send("**🤖 Le membre <@"+ message.member.id +"> demande à faire partie de votre guilde !**\n\
> **__pseudo__ :"+ data_user._user[index_user].username +"**\n\
> **level "+ data_ins._register[index_register].level +"**\n\
> **recruté par** : <@"+ data_ins._register[index_register].id_recruteur +">\n\
``` ```✅ (**valider**) \n> ❌ (**annuler**) \n> 💀 (**Kik**)");
await msg.react('✅');
await msg.react("❌");
await msg.react('💀');
        data_user._user[index_user].tuto_rang = "";
        data_ins._register[index_register].delete_statue = false;
        data_ins._register[index_register].id_msg = msg.id;
        if (data_ins._register[index_register].usrmsg){
            if (data_ins._register[index_register].usrmsg.length > 1)
                await message.guild.channels.cache.find(elem => elem.id == data_guild._guild[index_guild].channel_staff_mission_id).send("**Commentaire de **<@"+ message.member.id +">: \n" + data_ins._register[index_register].usrmsg);
        }    
    } else {
        return(message.channel.send("🤖 **Vous avez du certainement, mal écrire le nom de la guilde !**"));
    }
}
exports.fun_channel_tuto_welcome = fun_channel_tuto_welcome;
//✅