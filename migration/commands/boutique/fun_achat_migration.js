const Discord = require('discord.js');
const data_guild = require('../../data/structjson/guild.json');
const data_syst = require('../../data/structjson/all_systeme.json');
const data_tuto = require('../../data/structjson/tutoriel.json');
const data_ins = require('../../data/structjson/inscription.json');
const { fun_index_users } = require('../Fun/fun_index_users');
data_user = require('../../data/structjson/user.json');
async function fun_achat_migration(message,command)
{
    if (!message.mentions.roles.first()) {
        return(message.channel.send("\
🤖 **Vous n\'avez pas mentionné le rang de la guilde dans laquelle vous voulez migrer !\nOu cette Guilde n'existe pas...**\
"));
    }
    let rang_guild = message.mentions.roles.first();
    let new_object;
    let index_user = fun_index_users(message.member.id);
    if (data_user._user[index_user].stars < 35) {
        return(message.channel.send("\
🤖 **Vous n\'avez pas assez de :star: pour migrer de guilde !**\
"));
    }
    for (let i = 0; i < data_guild._guild.length; i++) {
        if (data_guild._guild[i].guild == rang_guild.id) {
            if (data_guild._guild[i].guild == data_user._user[index_user].rang_guild) {
                return(message.channel.send("\
🤖 **Vous êtes déjà dans cette guilde !**\
"));
            } 
            data_user._user[index_user].stars -= 35;
            new_object = Object.assign({}, data_ins._register[0]);
            data_ins._register.push(new_object);
            data_ins._register[data_ins._register.length - 1].statue_migration = true;
            data_ins._register[data_ins._register.length - 1].usrname = data_user._user[index_user].usrname;
            data_ins._register[data_ins._register.length - 1].idusr = data_user._user[index_user].id;
            data_ins._register[data_ins._register.length - 1].id_guild = rang_guild.id;
            msg = await message.guild.channels.cache.find(elem => elem.id == data_guild._guild[i].channel_staff_mission_id).send("\
**🤖 Le membre <@"+ message.member.id +"> veux migrer dans votre guilde !**\n\
> **__pseudo__ :"+ data_user._user[index_user].username +"**\n\
> **__Guilde actuelle__** : <@&"+ data_user._user[index_user].rang_guild +">\n\
``` ```✅ (**valider**) \n> ❌ (**annuler**) \n> 💀 (**Kik**)\
");
msg.react('✅');
msg.react("❌");
msg.react('💀');
            data_ins._register[data_ins._register.length - 1].id_msg = msg.id;
            message.member.send("[Vous avez demandé une migration]\n\
Attention ! Cette nouvelle guilde a désormais plein pouvoir sur vous, si elle vous refuse, vous devrez repasser le tutoriel.\n\
Et elle peux décider de vous kick... Comme je vous l'ai dit... Elle a plein pouvoir !");
            return;
        }
    }
    return(message.channel.send("\
    🤖 **Vous n\'avez pas mentionné le rang de la guilde dans laquelle vous voulez migrer !\nOu cette Guilde n'existe pas...**\
"));
}
exports.fun_achat_migration = fun_achat_migration;