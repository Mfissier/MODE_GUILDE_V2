const Discord = require('discord.js');
const { fun_index_users } = require('../Fun/fun_index_users');
const client = new Discord.Client();
data_user = require('../../data/structjson/user.json');
data_guilde = require('../../data/structjson/guild.json');
data_syst = require('../../data/structjson/all_systeme.json');

async function fun_gestion_xp_usr(message, id_user, nbr_xp) {
    if (data_user._user[id_user].grade_discord >= data_user._user[id_user].grade_discord_max) {
        return(1);
    }
    let nbr_stars = 0;
    data_user._user[id_user].exp_discord += nbr_xp;
    if (data_user._user[id_user].exp_discord > data_user._user[id_user].exp_discord_max) {
        while(data_user._user[id_user].exp_discord > data_user._user[id_user].exp_discord_max) {
            data_user._user[id_user].stars += 1;
            data_user._user[id_user].exp_discord = data_user._user[id_user].exp_discord - data_user._user[id_user].exp_discord_max;
            data_user._user[id_user].exp_discord_max += 1;
            data_user._user[id_user].grade_discord += 1;
            nbr_stars += 1;
            if (data_user._user[id_user].grade_discord == data_user._user[id_user].grade_discord_max) {
                data_user._user[id_user].exp_discord = data_user._user[id_user].exp_discord_max;
                break;
            }
        }
        if (!message)
            return (-1);
        message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send("**🤖 Le membre<@!"+ data_user._user[id_user].id +"> vient de monter [grade "+ data_user._user[id_user].grade_discord +"] (+ "+ nbr_stars +":star:)**");
    }
    return (1);
}
exports.fun_gestion_xp_usr = fun_gestion_xp_usr;