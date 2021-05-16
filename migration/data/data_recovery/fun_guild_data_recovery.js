const Discord = require('discord.js');
const data_guild = require('../structjson/guild.json');
const fs = require('fs');

function fun_check_data(data)
{
    if (data == 'undefined')
        return (undefined);
    if (data == 'NaN')
        return (NaN);
    if (data == 'false')
        return (false);
    if (data == 'true')
        return (true);
    if (parseInt(data, 10) < 100000000000 && parseInt(data, 10) != NaN)
        return (parseInt(data,10));
    return(data);
}

async function fun_guild_data_recovery(message)
{

    let new_object; 
    let path = __dirname + '/../Save/guild/';
    //console.log(fun_check_data(fs.readFileSync(path + data_guild._guild[0].name_guild + "/AVA_all.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString()));
    fs.readdir(path, (err, files) => {
        // console.log(files);
      for (let i = 0; i < files.length; i++)
      {
            new_object = Object.assign({},data_guild._guild[0]);
            data_guild._guild.push(new_object);
            if (fs.existsSync(path + files[i] + "/name_guild.txt")) 
                data_guild._guild[i].name_guild = fun_check_data(fs.readFileSync(path + files[i] + "/name_guild.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
            if (fs.existsSync(path + files[i] + "/delete_statue.txt")) 
                data_guild._guild[i].delete_statue = fun_check_data(fs.readFileSync(path + files[i] + "/delete_statue.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
            if (fs.existsSync(path + files[i] + "/guild.txt")) 
                data_guild._guild[i].guild = fun_check_data(fs.readFileSync(path + files[i] + "/guild.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
            if (fs.existsSync(path + files[i] + "/user_meneur.txt")) 
                data_guild._guild[i].user_meneur = fun_check_data(fs.readFileSync(path + files[i] + "/user_meneur.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
            if (fs.existsSync(path + files[i] + "/rolemeneur.txt")) 
                data_guild._guild[i].rolemeneur = fun_check_data(fs.readFileSync(path + files[i] + "/rolemeneur.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
            if (fs.existsSync(path + files[i] + "/brasdroit.txt")) 
                data_guild._guild[i].brasdroit = fun_check_data(fs.readFileSync(path + files[i] + "/brasdroit.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
            if (fs.existsSync(path   + files[i] + "/conseiller.txt")) 
                data_guild._guild[i].conseiller = fun_check_data(fs.readFileSync(path + files[i] + "/conseiller.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
            if (fs.existsSync(path   + files[i] + "/logs.txt")) 
                data_guild._guild[i].logs = fun_check_data(fs.readFileSync(path + files[i] + "/logs.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
            if (fs.existsSync(path + files[i] + "/staff.txt")) 
                data_guild._guild[i].staff = fun_check_data(fs.readFileSync(path + files[i] + "/staff.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
            if (fs.existsSync(path + files[i] + "/coffre_guild.txt")) 
                data_guild._guild[i].coffre_guild = fun_check_data(fs.readFileSync(path + files[i] + "/coffre_guild.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
            if (fs.existsSync(path + files[i] + "/value_stars.txt")) 
                data_guild._guild[i].value_stars = fun_check_data(fs.readFileSync(path + files[i] + "/value_stars.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
            if (fs.existsSync(path + files[i] + "/nbr_de_membre.txt")) 
                data_guild._guild[i].nbr_de_membre = fun_check_data(fs.readFileSync(path + files[i] + "/nbr_de_membre.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
            if (fs.existsSync(path + files[i] + "/star_to_kamas.txt")) 
                data_guild._guild[i].star_to_kamas = fun_check_data(fs.readFileSync(path + files[i] + "/star_to_kamas.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
            if (fs.existsSync(path + files[i] + "/nbr_total_star.txt")) 
                data_guild._guild[i].nbr_total_star = fun_check_data(fs.readFileSync(path + files[i] + "/nbr_total_star.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
            if (fs.existsSync(path + files[i] + "/nbr_membre_absent.txt")) 
                data_guild._guild[i].nbr_membre_absent = fun_check_data(fs.readFileSync(path + files[i] + "/nbr_membre_absent.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
            if (fs.existsSync(path + files[i] + "/usr_moyenne_level.txt")) 
                data_guild._guild[i].usr_moyenne_level = fun_check_data(fs.readFileSync(path + files[i] + "/usr_moyenne_level.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
            if (fs.existsSync(path + files[i] + "/recompenses.txt")) 
                data_guild._guild[i].recompenses = fun_check_data(fs.readFileSync(path + files[i] + "/recompenses.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
            if (fs.existsSync(path + files[i] + "/like_all_users.txt")) 
                data_guild._guild[i].like_all_users = fun_check_data(fs.readFileSync(path + files[i] + "/like_all_users.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
            if (fs.existsSync(path + files[i] + "/donjon_all.txt")) 
                data_guild._guild[i].donjon_all = fun_check_data(fs.readFileSync(path + files[i] + "/donjon_all.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
            if (fs.existsSync(path + files[i] + "/defense_all.txt")) 
                data_guild._guild[i].defense_all = fun_check_data(fs.readFileSync(path + files[i] + "/defense_all.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
            if (fs.existsSync(path + files[i] + "/attack_all.txt")) 
                data_guild._guild[i].attack_all = fun_check_data(fs.readFileSync(path + files[i] + "/attack_all.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
            if (fs.existsSync(path + files[i] + "/search_perco.txt")) 
                data_guild._guild[i].search_perco = fun_check_data(fs.readFileSync(path + files[i] + "/search_perco.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
            if (fs.existsSync(path + files[i] + "/skin_all.txt")) 
                data_guild._guild[i].skin_all = fun_check_data(fs.readFileSync(path + files[i] + "/skin_all.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
            if (fs.existsSync(path + files[i] + "/AVA_all.txt")) 
                data_guild._guild[i].AVA_all = fun_check_data(fs.readFileSync(path + files[i] + "/AVA_all.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
            if (fs.existsSync(path + files[i] + "/don_all.txt")) 
                data_guild._guild[i].don_all = fun_check_data(fs.readFileSync(path + files[i] + "/don_all.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
            if (fs.existsSync(path + files[i] + "/vol_all.txt")) 
                data_guild._guild[i].vol_all = fun_check_data(fs.readFileSync(path + files[i] + "/vol_all.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
            if (fs.existsSync(path + files[i] + "/best_stars_membre.txt")) 
                data_guild._guild[i].best_stars_membre = fun_check_data(fs.readFileSync(path + files[i] + "/best_stars_membre.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
            if (fs.existsSync(path + files[i] + "/best_attaq_member.txt")) 
                data_guild._guild[i].best_attaq_member = fun_check_data(fs.readFileSync(path + files[i] + "/best_attaq_member.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
            if (fs.existsSync(path + files[i] + "/best_def_member.txt")) 
                data_guild._guild[i].best_def_member = fun_check_data(fs.readFileSync(path + files[i] + "/best_def_member.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
            if (fs.existsSync(path + files[i] + "/best_ava_member.txt")) 
                data_guild._guild[i].best_ava_member = fun_check_data(fs.readFileSync(path + files[i] + "/best_ava_member.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
            if (fs.existsSync(path + files[i] + "/best_skinner_member.txt")) 
                data_guild._guild[i].best_skinner_member = fun_check_data(fs.readFileSync(path + files[i] + "/best_skinner_member.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
            if (fs.existsSync(path + files[i] + "/best_likeur_member.txt")) 
                data_guild._guild[i].best_likeur_member = fun_check_data(fs.readFileSync(path + files[i] + "/best_likeur_member.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
            if (fs.existsSync(path + files[i] + "/best_like_me_member.txt")) 
                data_guild._guild[i].best_like_me_member = fun_check_data(fs.readFileSync(path + files[i] + "/best_like_me_member.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
            if (fs.existsSync(path + files[i] + "/best_search_perco_member.txt")) 
                data_guild._guild[i].best_search_perco_member = fun_check_data(fs.readFileSync(path + files[i] + "/best_search_perco_member.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
            if (fs.existsSync(path + files[i] + "/best_vol_member.txt")) 
                data_guild._guild[i].best_vol_member = fun_check_data(fs.readFileSync(path + files[i] + "/best_vol_member.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
            if (fs.existsSync(path + files[i] + "/best_espion_member.txt")) 
                data_guild._guild[i].best_espion_member = fun_check_data(fs.readFileSync(path + files[i] + "/best_espion_member.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
            if (fs.existsSync(path + files[i] + "/winrate_vol.txt")) 
                data_guild._guild[i].winrate_vol = fun_check_data(fs.readFileSync(path + files[i] + "/winrate_vol.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
            if (fs.existsSync(path + files[i] + "/defeat_vol.txt")) 
                data_guild._guild[i].defeat_vol = fun_check_data(fs.readFileSync(path + files[i] + "/defeat_vol.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
            if (fs.existsSync(path + files[i] + "/best_butin_player.txt")) 
                data_guild._guild[i].best_butin_player = fun_check_data(fs.readFileSync(path + files[i] + "/best_butin_player.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
            if (fs.existsSync(path + files[i] + "/best_recruteur.txt")) 
                data_guild._guild[i].best_recruteur = fun_check_data(fs.readFileSync(path + files[i] + "/best_recruteur.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
            if (fs.existsSync(path + files[i] + "/best_gouverneur.txt")) 
                data_guild._guild[i].best_gouverneur = fun_check_data(fs.readFileSync(path + files[i] + "/best_gouverneur.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
            if (fs.existsSync(path + files[i] + "/best_player_tresorerie.txt")) 
                data_guild._guild[i].best_player_tresorerie = fun_check_data(fs.readFileSync(path + files[i] + "/best_player_tresorerie.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
            if (fs.existsSync(path + files[i] + "/best_taxe_pos_perco.txt")) 
                data_guild._guild[i].best_taxe_pos_perco = fun_check_data(fs.readFileSync(path + files[i] + "/best_taxe_pos_perco.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
            if (fs.existsSync(path + files[i] + "/channel_discussion_id.txt")) 
                data_guild._guild[i].channel_discussion_id = fun_check_data(fs.readFileSync(path + files[i] + "/channel_discussion_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
            if (fs.existsSync(path + files[i] + "/Categorie_guild_id.txt")) 
                data_guild._guild[i].Categorie_guild_id = fun_check_data(fs.readFileSync(path + files[i] + "/Categorie_guild_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
            if (fs.existsSync(path + files[i] + "/channel_staff_mission_id.txt")) 
                data_guild._guild[i].channel_staff_mission_id = fun_check_data(fs.readFileSync(path + files[i] + "/channel_staff_mission_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
            if (fs.existsSync(path + files[i] + "/channel_staff_logs_id.txt")) 
                data_guild._guild[i].channel_staff_logs_id = fun_check_data(fs.readFileSync(path + files[i] + "/channel_staff_logs_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
            if (fs.existsSync(path + files[i] + "/channel_Report_logs_id.txt")) 
                data_guild._guild[i].channel_Report_logs_id = fun_check_data(fs.readFileSync(path + files[i] + "/channel_Report_logs_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
            if (fs.existsSync(path + files[i] + "/channel_cmd_id.txt")) 
                data_guild._guild[i].channel_cmd_id = fun_check_data(fs.readFileSync(path + files[i] + "/channel_cmd_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
            if (fs.existsSync(path + files[i] + "/chat_staff_id.txt")) 
                data_guild._guild[i].chat_staff_id = fun_check_data(fs.readFileSync(path + files[i] + "/chat_staff_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
            if (fs.existsSync(path + files[i] + "/Vocal_staff_id.txt")) 
                data_guild._guild[i].Vocal_staff_id = fun_check_data(fs.readFileSync(path + files[i] + "/Vocal_staff_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());       
        
        //   console.log(data_guild._guild[i].name_guild);
        //   console.log(data_guild._guild[i].guild);
        //   console.log(data_guild._guild[i].user_meneur);
        //   console.log(data_guild._guild[i].rolemeneur);
        //   console.log(data_guild._guild[i].brasdroit);
        //   console.log(data_guild._guild[i].conseiller);
        //   console.log(data_guild._guild[i].staff);
        //   console.log(data_guild._guild[i].coffre_guild);
        //   console.log(data_guild._guild[i].value_stars);
        //   console.log(data_guild._guild[i].nbr_de_membre);
        //   console.log(data_guild._guild[i].star_to_kamas);
        //   console.log(data_guild._guild[i].nbr_total_star);
        //   console.log(data_guild._guild[i].nbr_membre_absent);
        //   console.log(data_guild._guild[i].usr_moyenne_level);
        //   console.log(data_guild._guild[i].recompenses);
        //   console.log(data_guild._guild[i].like_all_users);
        //   console.log(data_guild._guild[i].donjon_all);
        //   console.log(data_guild._guild[i].defense_all);
        //   console.log(data_guild._guild[i].attack_all);
        //   console.log(data_guild._guild[i].search_perco);
        //   console.log(data_guild._guild[i].skin_all);
        //   console.log(data_guild._guild[i].AVA_all);
        //   console.log(data_guild._guild[i].don_all);
        //   console.log(data_guild._guild[i].vol_all);
        //   console.log(data_guild._guild[i].best_stars_membre);
        //   console.log(data_guild._guild[i].best_attaq_member);
        //   console.log(data_guild._guild[i].best_def_member);
        //   console.log(data_guild._guild[i].best_ava_member);
        //   console.log(data_guild._guild[i].best_skinner_member);
        //   console.log(data_guild._guild[i].best_likeur_member);
        //   console.log(data_guild._guild[i].best_like_me_member);
        //   console.log(data_guild._guild[i].best_search_perco_member);
        //   console.log(data_guild._guild[i].best_vol_member);
        //   console.log(data_guild._guild[i].best_espion_member);
        //   console.log(data_guild._guild[i].winrate_vol);
        //   console.log(data_guild._guild[i].defeat_vol);
        //   console.log(data_guild._guild[i].best_butin_player);
        //   console.log(data_guild._guild[i].best_recruteur);
        //   console.log(data_guild._guild[i].best_gouverneur);
        //   console.log(data_guild._guild[i].best_player_tresorerie);
        //   console.log(data_guild._guild[i].best_taxe_pos_perco);
        //   console.log(data_guild._guild[i].channel_discussion_id);
        //   console.log(data_guild._guild[i].Categorie_guild_id);
        //   console.log(data_guild._guild[i].channel_staff_mission_id);
        //   console.log(data_guild._guild[i].channel_staff_logs_id);
        //   console.log(data_guild._guild[i].channel_Report_logs_id);
        //   console.log(data_guild._guild[i].channel_cmd_id);
        //   console.log(data_guild._guild[i].chat_staff_id);
        //   console.log(data_guild._guild[i].Vocal_staff_id);       
      }
    });
       

}
exports.fun_guild_data_recovery = fun_guild_data_recovery;

















































