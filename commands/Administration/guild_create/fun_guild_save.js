const Discord = require('discord.js');
const data_guild = require('../../../data/structjson/guild.json');
const fs = require('fs');
const { fun_mkdir } = require('../../Fun/fun_mkdir');
clg = console.log;

async function fun_register_data_guilde(newpath)
{
    for (let i = 0; i < data_guild._guild.length; i++)
    {
       if (data_guild._guild[i].name_guild.length > 0) {
           fs.writeFileSync(newpath + data_guild._guild[i].name_guild + '/logs.txt', data_guild._guild[i].logs.toString(), (err) => { if (err)console.log("An error happened");});
           fs.writeFileSync(newpath + data_guild._guild[i].name_guild + '/name_guild.txt', data_guild._guild[i].name_guild.toString(), (err) => { if (err)console.log("An error happened");});
           fs.writeFileSync(newpath + data_guild._guild[i].name_guild + '/delete_statue.txt', data_guild._guild[i].delete_statue.toString(), (err) => { if (err)console.log("An error happened");});
           fs.writeFileSync(newpath + data_guild._guild[i].name_guild + '/guild.txt', data_guild._guild[i].guild.toString(), (err) => { if (err)console.log("An error happened");});
           fs.writeFileSync(newpath + data_guild._guild[i].name_guild + '/user_meneur.txt', data_guild._guild[i].user_meneur.toString(), (err) => { if (err)console.log("An error happened");});
           fs.writeFileSync(newpath + data_guild._guild[i].name_guild + '/rolemeneur.txt', data_guild._guild[i].rolemeneur.toString(), (err) => { if (err)console.log("An error happened");});
           fs.writeFileSync(newpath + data_guild._guild[i].name_guild + '/brasdroit.txt', data_guild._guild[i].brasdroit.toString(), (err) => { if (err)console.log("An error happened");});
           fs.writeFileSync(newpath + data_guild._guild[i].name_guild + '/conseiller.txt', data_guild._guild[i].conseiller.toString(), (err) => { if (err)console.log("An error happened");});
           fs.writeFileSync(newpath + data_guild._guild[i].name_guild + '/staff.txt', data_guild._guild[i].staff.toString(), (err) => { if (err)console.log("An error happened");});
           fs.writeFileSync(newpath + data_guild._guild[i].name_guild + '/coffre_guild.txt', data_guild._guild[i].coffre_guild.toString(), (err) => { if (err)console.log("An error happened");});
           fs.writeFileSync(newpath + data_guild._guild[i].name_guild + '/value_stars.txt', data_guild._guild[i].value_stars.toString(), (err) => { if (err)console.log("An error happened");});
           fs.writeFileSync(newpath + data_guild._guild[i].name_guild + '/nbr_de_membre.txt', data_guild._guild[i].nbr_de_membre.toString(), (err) => { if (err)console.log("An error happened");});
           fs.writeFileSync(newpath + data_guild._guild[i].name_guild + '/star_to_kamas.txt', data_guild._guild[i].star_to_kamas.toString(), (err) => { if (err)console.log("An error happened");});
           fs.writeFileSync(newpath + data_guild._guild[i].name_guild + '/nbr_total_star.txt', data_guild._guild[i].nbr_total_star.toString(), (err) => { if (err)console.log("An error happened");});
           fs.writeFileSync(newpath + data_guild._guild[i].name_guild + '/nbr_membre_absent.txt', data_guild._guild[i].nbr_membre_absent.toString(), (err) => { if (err)console.log("An error happened");});
           fs.writeFileSync(newpath + data_guild._guild[i].name_guild + '/usr_moyenne_level.txt', data_guild._guild[i].usr_moyenne_level.toString(), (err) => { if (err)console.log("An error happened");});
           fs.writeFileSync(newpath + data_guild._guild[i].name_guild + '/recompenses.txt', data_guild._guild[i].recompenses.toString(), (err) => { if (err)console.log("An error happened");});
           fs.writeFileSync(newpath + data_guild._guild[i].name_guild + '/like_all_users.txt', data_guild._guild[i].like_all_users.toString(), (err) => { if (err)console.log("An error happened");});
           fs.writeFileSync(newpath + data_guild._guild[i].name_guild + '/donjon_all.txt', data_guild._guild[i].donjon_all.toString(), (err) => { if (err)console.log("An error happened");});
           fs.writeFileSync(newpath + data_guild._guild[i].name_guild + '/defense_all.txt', data_guild._guild[i].defense_all.toString(), (err) => { if (err)console.log("An error happened");});
           fs.writeFileSync(newpath + data_guild._guild[i].name_guild + '/attack_all.txt', data_guild._guild[i].attack_all.toString(), (err) => { if (err)console.log("An error happened");});
           fs.writeFileSync(newpath + data_guild._guild[i].name_guild + '/search_perco.txt', data_guild._guild[i].search_perco.toString(), (err) => { if (err)console.log("An error happened");});
           fs.writeFileSync(newpath + data_guild._guild[i].name_guild + '/skin_all.txt', data_guild._guild[i].skin_all.toString(), (err) => { if (err)console.log("An error happened");});
           fs.writeFileSync(newpath + data_guild._guild[i].name_guild + '/AVA_all.txt', data_guild._guild[i].AVA_all.toString(), (err) => { if (err)console.log("An error happened");});
           fs.writeFileSync(newpath + data_guild._guild[i].name_guild + '/don_all.txt', data_guild._guild[i].don_all.toString(), (err) => { if (err)console.log("An error happened");});
           fs.writeFileSync(newpath + data_guild._guild[i].name_guild + '/vol_all.txt', data_guild._guild[i].vol_all.toString(), (err) => { if (err)console.log("An error happened");});
           fs.writeFileSync(newpath + data_guild._guild[i].name_guild + '/best_stars_membre.txt', data_guild._guild[i].best_stars_membre.toString(), (err) => { if (err)console.log("An error happened");});
           fs.writeFileSync(newpath + data_guild._guild[i].name_guild + '/best_attaq_member.txt', data_guild._guild[i].best_attaq_member.toString(), (err) => { if (err)console.log("An error happened");});
           fs.writeFileSync(newpath + data_guild._guild[i].name_guild + '/best_def_member.txt', data_guild._guild[i].best_def_member.toString(), (err) => { if (err)console.log("An error happened");});
           fs.writeFileSync(newpath + data_guild._guild[i].name_guild + '/best_ava_member.txt', data_guild._guild[i].best_ava_member.toString(), (err) => { if (err)console.log("An error happened");});
           fs.writeFileSync(newpath + data_guild._guild[i].name_guild + '/best_skinner_member.txt', data_guild._guild[i].best_skinner_member.toString(), (err) => { if (err)console.log("An error happened");});
           fs.writeFileSync(newpath + data_guild._guild[i].name_guild + '/best_likeur_member.txt', data_guild._guild[i].best_likeur_member.toString(), (err) => { if (err)console.log("An error happened");});
           fs.writeFileSync(newpath + data_guild._guild[i].name_guild + '/best_like_me_member.txt', data_guild._guild[i].best_like_me_member.toString(), (err) => { if (err)console.log("An error happened");});
           fs.writeFileSync(newpath + data_guild._guild[i].name_guild + '/best_search_perco_member.txt', data_guild._guild[i].best_search_perco_member.toString(), (err) => { if (err)console.log("An error happened");});
           fs.writeFileSync(newpath + data_guild._guild[i].name_guild + '/best_vol_member.txt', data_guild._guild[i].best_vol_member.toString(), (err) => { if (err)console.log("An error happened");});
           fs.writeFileSync(newpath + data_guild._guild[i].name_guild + '/best_espion_member.txt', data_guild._guild[i].best_espion_member.toString(), (err) => { if (err)console.log("An error happened");});
           fs.writeFileSync(newpath + data_guild._guild[i].name_guild + '/winrate_vol.txt', data_guild._guild[i].winrate_vol.toString(), (err) => { if (err)console.log("An error happened");});
           fs.writeFileSync(newpath + data_guild._guild[i].name_guild + '/defeat_vol.txt', data_guild._guild[i].defeat_vol.toString(), (err) => { if (err)console.log("An error happened");});
           fs.writeFileSync(newpath + data_guild._guild[i].name_guild + '/best_butin_player.txt', data_guild._guild[i].best_butin_player.toString(), (err) => { if (err)console.log("An error happened");});
           fs.writeFileSync(newpath + data_guild._guild[i].name_guild + '/best_recruteur.txt', data_guild._guild[i].best_recruteur.toString(), (err) => { if (err)console.log("An error happened");});
           fs.writeFileSync(newpath + data_guild._guild[i].name_guild + '/best_gouverneur.txt', data_guild._guild[i].best_gouverneur.toString(), (err) => { if (err)console.log("An error happened");});
           fs.writeFileSync(newpath + data_guild._guild[i].name_guild + '/best_player_tresorerie.txt', data_guild._guild[i].best_player_tresorerie.toString(), (err) => { if (err)console.log("An error happened");});
           fs.writeFileSync(newpath + data_guild._guild[i].name_guild + '/best_taxe_pos_perco.txt', data_guild._guild[i].best_taxe_pos_perco.toString(), (err) => { if (err)console.log("An error happened");});
           fs.writeFileSync(newpath + data_guild._guild[i].name_guild + '/channel_discussion_id.txt', data_guild._guild[i].channel_discussion_id.toString(), (err) => { if (err)console.log("An error happened");});
           fs.writeFileSync(newpath + data_guild._guild[i].name_guild + '/Categorie_guild_id.txt', data_guild._guild[i].Categorie_guild_id.toString(), (err) => { if (err)console.log("An error happened");});
           fs.writeFileSync(newpath + data_guild._guild[i].name_guild + '/channel_staff_mission_id.txt', data_guild._guild[i].channel_staff_mission_id.toString(), (err) => { if (err)console.log("An error happened");});
           fs.writeFileSync(newpath + data_guild._guild[i].name_guild + '/channel_staff_logs_id.txt', data_guild._guild[i].channel_staff_logs_id.toString(), (err) => { if (err)console.log("An error happened");});
           fs.writeFileSync(newpath + data_guild._guild[i].name_guild + '/channel_Report_logs_id.txt', data_guild._guild[i].channel_Report_logs_id.toString(), (err) => { if (err)console.log("An error happened");});
           fs.writeFileSync(newpath + data_guild._guild[i].name_guild + '/channel_cmd_id.txt', data_guild._guild[i].channel_cmd_id.toString(), (err) => { if (err)console.log("An error happened");});
           fs.writeFileSync(newpath + data_guild._guild[i].name_guild + '/chat_staff_id.txt', data_guild._guild[i].chat_staff_id.toString(), (err) => { if (err)console.log("An error happened");});
           fs.writeFileSync(newpath + data_guild._guild[i].name_guild + '/Vocal_staff_id.txt', data_guild._guild[i].Vocal_staff_id.toString(), (err) => { if (err)console.log("An error happened");});
       }      
    }    
}

async function fun_guild_save(message)
{
    let newpath = __dirname + '/../../../data/Save/guild/';
    fs.readdir(newpath, (err, files) => {
        let statue_search = false;
        if (files.length == 0) {
            for (let i = 0; i < data_guild._guild.length; i++) {
                if (data_guild._guild[i].name_guild.length > 0) {
                    fun_mkdir(newpath + data_guild._guild[i].name_guild);
                    break;
                }
            }
        }
        for (let i = 0; i < data_guild._guild.length; i++) {
          for (let y = 0; y < files.length; y++) {
                if (data_guild._guild[i].name_guild.toUpperCase() == files[y].toUpperCase())
                {
                    statue_search = true;
                    break;
                }   
          }
          if (statue_search == false && data_guild._guild[i].name_guild.length > 0)
                fun_mkdir(newpath + data_guild._guild[i].name_guild);
          statue_search = false;
        }
     });
     setTimeout(fun_register_data_guilde, 5000, newpath);
}
exports.fun_guild_save = fun_guild_save;

















































