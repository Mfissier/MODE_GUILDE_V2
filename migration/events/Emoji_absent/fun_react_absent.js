const Discord = require('discord.js');
const { fun_index_guild } = require('../../commands/Fun/fun_index_guild');
const { fun_index_users } = require('../../commands/Fun/fun_index_users');
const data_absent = require('../../data/structjson/absent.json');
const data_syst = require('../../data/structjson/all_systeme.json');
const data_user = require('../../data/structjson/user.json');

async function fun_react_absent(msg, usr) {
    if (usr.bot == true) 
         return ;
    let index_user;
    for (let i = 0; i < data_absent._absent.length; i++) {
        if (data_absent._absent[i].statue == true && msg.message.id == data_absent._absent[i].id_message) {
            if (msg._emoji.name == '✅') {
                index_user = fun_index_users(data_absent._absent[i].id_inscris);
                if (index_user == -1) 
                    return;
                data_user._user[index_user].rang_guild = await data_syst.RANG_PENITENT_ID;
                data_user._user[index_user].rang_coa = "";
                data_user._user[index_user].rang_guild = "";
                await msg.message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send("**Le membre <@!"+ data_user._user[index_user].id +"> a reçu le rang Penitent !**");
                await msg.message.edit("**Le membre <@!"+ data_user._user[index_user].id +"> doit-être [ kick ] de la guilde (en jeu) ou mis Penitent !**");
                data_absent._absent[i].statue = false;
                await msg.message.guild.members.cache.find(elem => elem.id == data_user._user[index_user].id).roles.add(data_syst.RANG_PENITENT_ID);
                await msg.message.guild.members.cache.find(elem => elem.id == data_user._user[index_user].id).roles.remove(data_syst.RANG_COALITION_ID);
                await msg.message.guild.members.cache.find(elem => elem.id == data_user._user[index_user].id).roles.remove(fun_index_guild("",data_user._user[index_user].rang_guild));
                return;
            } else if (msg._emoji.name == '❌') {
                index_user = fun_index_users(data_absent._absent[i].id_inscris);
                if (index_user == -1) 
                    return;
                data_user._user[index_user].date_inscription = new Date();
                msg.message.edit("**Vous avez décidé de laisser <@!"+ data_user._user[index_user].id +"> dans votre guilde !**");
                data_absent._absent[i].statue = false;
                return;
            }
        }
    }
}
exports.fun_react_absent = fun_react_absent;
//