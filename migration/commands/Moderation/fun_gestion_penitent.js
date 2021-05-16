const data_syst = require('../../data/structjson/all_systeme.json');
const data_guild = require('../../data/structjson/guild.json');
const data_user = require('../../data/structjson/user.json');
const { fun_gestion_xp_usr } = require('../Fun/fun_gestion_xp_usr');
const { fun_index_users } = require('../Fun/fun_index_users');

async function fun_gestion_penitent (message, command) { 
    let All_MEMBERS = message.mentions.users.map(User => User);
    let index_user = -1;
    let tmp_txt = "";
    let roles_member = "";
    let roles_puissant = [];
    for(let i = 0; i < data_guild._guild.length; i++) {
        roles_puissant.push(data_guild._guild[i].rolemeneur);
        roles_puissant.push(data_guild._guild[i].brasdroit);
        roles_puissant.push(data_guild._guild[i].conseiller);
    }
    if (All_MEMBERS.length > 1) {
        tmp_txt = "**Les membres ";
    } else 
         tmp_txt = "**Le membre ";
    if (All_MEMBERS.length > 50) {
        return(message.channel.send("🤖 **Vous ne pouvez pas mentionner plus de 50 members !**"));
    }
    if (!message.mentions.users.first()) {
        return(message.channel.send("🤖 **Vous devez mentionner au moin un membre !**"));
    }
    //--------------------CHECK IF MEMBRE IN THE GUILDE ------------------
    for (let i = 0; i < All_MEMBERS.length; i++) {
        roles_member = message.guild.members.cache.find(elem => elem.id == All_MEMBERS[i].id)._roles;
        for (let y = 0; y < roles_puissant.length; y++) {
            if (roles_member.indexOf(roles_puissant[y]) > -1) {
                return(message.channel.send("🤖  **Vous ne pouvez pas faire cette commande sur un membre avec des droits aussi importants !**"));
            }
        }
        if (roles_member.indexOf(data_user._user[fun_index_users(message.member.id)].rang_guild) == -1) {
            return(message.channel.send("🤖  **Vous ne pouvez pas faire cette commande sur un membre d'une autre guilde !**"));
        }
    }
    //--------------------CHECK IF MEMBRE IN THE GUILDE ------------------
    for (let i = 0; i < All_MEMBERS.length; i++) {
        index_user = fun_index_users(All_MEMBERS[i].id);
        console.log(All_MEMBERS[i].id);
        if (index_user != -1) {
                message.guild.members.cache.find(elem => elem.id == All_MEMBERS[i].id).roles.add(data_syst.RANG_PENITENT_ID);
                message.guild.members.cache.find(elem => elem.id == All_MEMBERS[i].id).roles.remove(data_syst.RANG_COALITION_ID);
                message.guild.members.cache.find(elem => elem.id == All_MEMBERS[i].id).roles.remove(data_user._user[index_user].rang_guild);
                data_user._user[index_user].rang_power = data_syst.RANG_PENITENT_ID;
                data_user._user[index_user].rang_coa = "";
                data_user._user[index_user].rang_guild = "";
                data_user._user[index_user].date_inscription = "";
                if (index_user != -1) {
                    tmp_txt += "<@!"+ data_user._user[index_user].id +"> ";
                    if (All_MEMBERS.length -1 > i) {
                        tmp_txt += " | "; 
                    }
                }
            if (All_MEMBERS.length > 1)
                tmp_txt += "sont devenu PENITENT**";
            else 
                tmp_txt += "est devenu PENITENT**";
            message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send(tmp_txt + "\n**[Commande admin] fait part <@!"+message.member.id+"> !**");
        }
    }
}
exports.fun_gestion_penitent = fun_gestion_penitent;