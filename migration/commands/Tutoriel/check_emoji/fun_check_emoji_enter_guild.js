const Discord = require('discord.js');
const data_guild = require('../../../data/structjson/guild.json');
const data_syst = require('../../../data/structjson/all_systeme.json');
const data_tuto = require('../../../data/structjson/tutoriel.json');
const data_user = require('../../../data/structjson/user.json');
const data_ins =  require('../../../data/structjson/inscription.json');
const { fun_index_users } = require('../../Fun/fun_index_users');
const { fun_gestion_xp_usr } = require('../../Fun/fun_gestion_xp_usr');

async function fun_gestion_succes_recruteur(message, id) {
    if (!id)
        return;
    if (data_user._user[id].rang_power != data_syst.RANG_RECRUTEUR_ID) {
        return;
    }
    if (data_user._user[id].Succes_grade_Recruteur == 0 && data_user._user[id].recruteur_nbr >= 1) {
        data_user._user[id].Succes_grade_Recruteur += 1;
        message.guild.members.cache.find(elem => elem.id == data_user._user[id].id).roles.add(data_syst.Recruteur_bronze_id);
        message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send("**Le membre <@!"+data_user._user[id].id+"> a dévérouillé le [<#"+ data_syst.Succès_id +">] "+ data_syst.Recruteur_bronze_name +" !**")
        return;
    }
    if (data_user._user[id].Succes_grade_Recruteur == 1 && data_user._user[id].recruteur_nbr >= 5) {
        data_user._user[id].Succes_grade_Recruteur += 1;
        message.guild.members.cache.find(elem => elem.id == data_user._user[id].id).roles.remove(data_syst.Recruteur_bronze_id);
        message.guild.members.cache.find(elem => elem.id == data_user._user[id].id).roles.add(data_syst.Recruteur_argent_id);
        message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send("**Le membre <@!"+data_user._user[id].id+"> a dévérouillé le [<#"+ data_syst.Succès_id +">] "+ data_syst.Recruteur_argent_name +" !**")
        return;
    }
    if (data_user._user[id].Succes_grade_Recruteur == 2 && data_user._user[id].recruteur_nbr >= 25) {
        data_user._user[id].Succes_grade_Recruteur += 1;
        message.guild.members.cache.find(elem => elem.id == data_user._user[id].id).roles.remove(data_syst.Recruteur_argent_id);
        message.guild.members.cache.find(elem => elem.id == data_user._user[id].id).roles.add(data_syst.Recruteur_Or_id);
        message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send("**Le membre <@!"+data_user._user[id].id+"> a dévérouillé le [<#"+ data_syst.Succès_id +">] "+ data_syst.Recruteur_Or_name +" !**")
        return;
    }
    if (data_user._user[id].Succes_grade_Recruteur == 3 && data_user._user[id].recruteur_nbr >= 50) {
        data_user._user[id].Succes_grade_Recruteur += 1;
        message.guild.members.cache.find(elem => elem.id == data_user._user[id].id).roles.remove(data_syst.Recruteur_Or_id);
        message.guild.members.cache.find(elem => elem.id == data_user._user[id].id).roles.add(data_syst.Recruteur_Platine_id);
        message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send("**Le membre <@!"+data_user._user[id].id+"> a dévérouillé le [<#"+ data_syst.Succès_id +">] "+ data_syst.Recruteur_Platine_name +" !**")
        return;
    }
}

async function fun_check_emoji_enter_guild(msg, usr) {
    if (usr.bot == true) 
        return ;
    for (let i = 0; i < data_ins._register.length; i++) {
        if (data_ins._register[i].delete_statue == false && data_ins._register[i].id_msg == msg.message.id) {
            if (msg._emoji.name == '✅') {
                data_ins._register[i].delete_statue = true;
                let mber;
                let index_user;
                let index_guild = -1;
                for (let y = 0; y < data_guild._guild.length; y++) {
                    if (data_guild._guild[y].guild == data_ins._register[i].id_guild) {
                        index_guild = y;
                        break;
                    }
                }
                index_user = fun_index_users(data_ins._register[i].idusr);
                mber = msg.message.channel.guild.members.cache.find(elem => elem.id == data_ins._register[i].idusr);
                if (data_ins._register[i].statue_migration == false) {
                    mber.roles.remove(data_syst.roles_tuto_18_id);
                } else {
                    mber.roles.remove(data_user._user[index_user].rang_guild);
                }
                data_user._user[index_user].rang_guild = data_ins._register[i].id_guild;
                await mber.roles.add(data_syst.RANG_COALITION_ID);
                await mber.roles.add(data_guild._guild[index_guild].guild);
                data_user._user[index_user].rang_coa = data_syst.RANG_COALITION_ID;
                mber.setNickname(data_ins._register[i].usrname);
                await msg.message.edit('**Le membre <@'+ data_ins._register[i].idusr +'> a été accepté dans votre guilde !**');
                let send_in_chan = await msg.message.guild.channels.cache.find(elem => elem.id == data_guild._guild[index_guild].channel_discussion_id);
                send_in_chan.send("**Un nouveau membre viens de nous rejoindre.**\n **Bienvenue à <@"+ data_user._user[index_user].id +"> !!!**");

                index_user = fun_index_users(data_ins._register[i].id_recruteur);
                //------------------------
                //------------------------
                data_user._user[index_user].recruteur_nbr += 1;
                fun_gestion_succes_recruteur(msg.message, index_user);
                let tmp_txt = -1;
                let stars_txt = -1;
                let  mana_txt = -1;
                let xp_txt = -1;
                if (data_user._user[index_user].Succes_grade_Recruteur == 0) {
                    fun_gestion_xp_usr(msg.message, index_user, 1);
                    if (data_user._user[index_user].mana >= 2) {
                        data_user._user[index_user].stars += 1;
                        data_user._user[index_user].mana -= 2;
                        stars_txt = 1;
                        mana_txt = 2;
                    }
                    xp_txt = 1;
                }
                else if (data_user._user[index_user].Succes_grade_Recruteur == 1) {
                    fun_gestion_xp_usr(msg.message, index_user, 2);
                    if (data_user._user[index_user].mana >= 2) {
                        data_user._user[index_user].stars += 1;
                        data_user._user[index_user].mana -= 2;
                        mana_txt = 2;
                        stars_txt = 1;
                    }
                    xp_txt = 2;
                }
                else if (data_user._user[index_user].Succes_grade_Recruteur == 2) {
                    fun_gestion_xp_usr(msg.message, index_user, 2);
                    if (data_user._user[index_user].mana >= 1) {
                        data_user._user[index_user].stars += 1;
                        data_user._user[index_user].mana -= 1;
                        mana_txt = 1;
                        stars_txt = 1;
                    }
                    xp_txt = 2;
                }
                else if (data_user._user[index_user].Succes_grade_Recruteur == 3) {
                    fun_gestion_xp_usr(msg.message, index_user, 2);
                    if (data_user._user[index_user].mana >= 1) {
                        data_user._user[index_user].stars += 2;
                        data_user._user[index_user].mana -= 1;
                        mana_txt = 1;
                        stars_txt = 2;
                    }
                    xp_txt = 2;
                }
                else if (data_user._user[index_user].Succes_grade_Recruteur == 4) {
                    fun_gestion_xp_usr(msg.message, index_user, 2);
                    if (data_user._user[index_user].mana >= 1) {
                        data_user._user[index_user].stars += 2;
                        data_user._user[index_user].mana -= 1;
                        mana_txt = 1;
                        stars_txt = 2;
                    }
                    xp_txt = 2;
                }
                tmp_txt = "**Le membre <@!"+ data_user._user[index_user].id +"> a gagné [ ";
                if (stars_txt > -1) {
                    tmp_txt += "+ "+ stars_txt +" :star: ";
                }
                if (mana_txt > -1) {
                    tmp_txt += "- "+ mana_txt +":droplet: ";
                }
                if (xp_txt > -1) {
                    tmp_txt += "+ "+ xp_txt +" xp ";
                }
                tmp_txt += "] en recrutant le membre <@!"+  data_ins._register[i].idusr+"> !**";
                msg.message.guild.channels.cache.find(elem => elem.id == data_syst.Etoiles_id).send(tmp_txt);
                //------------------------
                //------------------------
                break;
            } else if (msg._emoji.name == '❌') {
                mber = msg.message.channel.guild.members.cache.find(elem => elem.id == data_ins._register[i].idusr);
                let role_usr = mber._roles;
                msg.message.edit('**Le membre <@'+ data_ins._register[i].idusr +'> n\'a pas été accepté dans votre guilde !**');
                for (let y = 0; y < role_usr.length; y++) {
                    mber.roles.remove(role_usr[y]);
                }
                data_user._user[index_user].rang_coa = "";
                data_user._user[index_user].rang_guild = "";
                data_user._user[index_user].tuto_statue = false;
                data_user._user[index_user].tuto_boutique_statue = false;
                data_user._user[index_user].tuto_don = false;
                data_user._user[index_user].tuto_vol = false;
                data_user._user[index_user].tuto_like = false;
                data_user._user[index_user].tuto_profil = false;
                data_user._user[index_user].tuto_rang = "";
                data_ins._register[i].delete_statue = true;
                break;
            } else if (msg._emoji.name == '💀') {
                data_user._user[index_user].rang_coa = "";
                data_user._user[index_user].rang_guild = "";
                data_user._user[index_user].tuto_statue = false;
                data_user._user[index_user].tuto_boutique_statue = false;
                data_user._user[index_user].tuto_don = false;
                data_user._user[index_user].tuto_vol = false;
                data_user._user[index_user].tuto_like = false;
                data_user._user[index_user].tuto_profil = false;
                data_user._user[index_user].tuto_rang = "";
                data_ins._register[i].delete_statue = true;
                mber = msg.message.channel.guild.members.cache.find(elem => elem.id == data_ins._register[i].idusr);
                msg.message.edit('**Le membre <@'+ data_ins._register[i].idusr +'> a été kick par <@'+ usr.id +'>pour des raisons obscures !**');
                data_ins._register[i].delete_statue = true;
                mber.kick('**Vous avez été kick pour des raisons obscures...**');
                break;
            }
        }
    }
}
exports.fun_check_emoji_enter_guild = fun_check_emoji_enter_guild;





















