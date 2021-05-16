const Discord = require('discord.js');
const data_ins = require('../../data/structjson/inscription.json');
const data_syst = require('../../data/structjson/all_systeme.json');
const { fun_index_users } = require('./fun_index_users');

async function fun_time_delete_inscription(message, id){
    let index_user;
    for (let i = 0; i < data_ins._register.length; i++) {
        if (data_ins._register[i].idusr == id && data_ins._register[i].delete_statue == false)
        {
            if (data_ins._register[i].statue == true) {
                data_ins._register[i].delete_statue = true;
                return;
            } else {
                data_ins._register[i].delete_statue = true;
                if (message.member){
                    let role_usr = message.member._roles;
                    for (let y = 0; y < role_usr.length; y++) {
                        message.member.roles.remove(role_usr[y]);
                    }
                    index_user = fun_index_users(message.member.id)
                    if (index_user == -1) {
                        return;
                    }
                    data_user._user[index_user].tuto_statue = false;
                    data_user._user[index_user].tuto_boutique_statue = false;
                    data_user._user[index_user].tuto_don = false;
                    data_user._user[index_user].tuto_vol = false;
                    data_user._user[index_user].tuto_like = false;
                    data_user._user[index_user].tuto_profil = false;
                    data_user._user[index_user].rang_guild = "";
                    data_user._user[index_user].rang_power = "";
                    data_user._user[index_user].tuto_rang = "";
                }
                return;
            }
        }
    }
}
exports.fun_time_delete_inscription = fun_time_delete_inscription;