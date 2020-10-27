const Discord = require('discord.js');

data_guild = require('../structjson/guild.json');
const fs = require('fs');

async function data_to_bot()
{
    //=================================================================================================================================================================
    // ======================================================================= DATA_GUILDE ============================================================================
    //=================================================================================================================================================================
    let path_guild = __dirname + '/../Save/data_guild/'
    fs.readdir(path_guild, (err, files) => {
        for(let i = 1; i < files.length; i++)
        {
            if (fs.existsSync(path_guild + files[i] + "/chef.txt")) 
                data_guild.chef[i - 1] = fs.readFileSync(path_guild + files[i] + "/chef.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString();
            if (fs.existsSync(path_guild + files[i] + "/name_guild.txt")) 
                data_guild.name_guild[i - 1] = fs.readFileSync(path_guild + files[i] + "/name_guild.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString();
            if (fs.existsSync(path_guild + files[i] + "/category_guild.txt")) 
                data_guild.category_guild[i - 1] = fs.readFileSync(path_guild + files[i] + "/category_guild.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString();
            if (fs.existsSync(path_guild + files[i] + "/guild.txt")) 
                data_guild.guild[i - 1] = fs.readFileSync(path_guild + files[i] + "/guild.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString();
            if (fs.existsSync(path_guild + files[i] + "/user_meneur.txt"))  
                data_guild.user_meneur[i - 1] = fs.readFileSync(path_guild + files[i] + "/user_meneur.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString();
            if (fs.existsSync(path_guild + files[i] + "/rolemeneur.txt"))   
                data_guild.rolemeneur[i - 1] = fs.readFileSync(path_guild + files[i] + "/rolemeneur.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString();
            if (fs.existsSync(path_guild + files[i] + "/brasdroit.txt"))  
                data_guild.brasdroit[i - 1] = fs.readFileSync(path_guild + files[i] + "/brasdroit.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString();
            if (fs.existsSync(path_guild + files[i] + "/conseiller.txt"))  
                data_guild.conseiller[i - 1] = fs.readFileSync(path_guild + files[i] + "/conseiller.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString();
            if (fs.existsSync(path_guild + files[i] + "/staff.txt"))  
                data_guild.staff[i - 1] = fs.readFileSync(path_guild + files[i] + "/staff.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString();
            if (fs.existsSync(path_guild + files[i] + "/coffre_guild.txt")) 
            {
              data_guild.coffre_guild[i - 1] = fs.readFileSync(path_guild + files[i] + "/coffre_guild.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString();
              data_guild.coffre_guild[i - 1] = parseInt(data_guild.coffre_guild[i - 1], 10);
            }
            if (fs.existsSync(path_guild + files[i] + "/nbr_total_star.txt")) 
            {
                data_guild.nbr_total_star[i - 1] = fs.readFileSync(path_guild + files[i] + "/nbr_total_star.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString();
                data_guild.nbr_total_star[i - 1] = parseInt(data_guild.nbr_total_star[i - 1], 10);
            }
            if (fs.existsSync(path_guild + files[i] + "/nbr_de_membre.txt")) 
                data_guild.nbr_de_membre[i - 1] = fs.readFileSync(path_guild + files[i] + "/nbr_de_membre.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString();
            if (fs.existsSync(path_guild + files[i] + "/usr_moyenne_level.txt")) 
            {
                data_guild.usr_moyenne_level[i - 1] = fs.readFileSync(path_guild + files[i] + "/usr_moyenne_level.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString();
                data_guild.usr_moyenne_level[i - 1] = parseInt(data_guild.usr_moyenne_level[i - 1], 10);
            }
            if (fs.existsSync(path_guild + files[i] + "/star_to_kamas.txt")) 
            {
                data_guild.star_to_kamas[i - 1] = fs.readFileSync(path_guild + files[i] + "/star_to_kamas.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString();
                data_guild.star_to_kamas[i - 1] = parseInt(data_guild.star_to_kamas[i - 1], 10);
            }
            if (fs.existsSync(path_guild + files[i] + "/value_stars.txt")) 
            {
                data_guild.value_stars[i - 1] = fs.readFileSync(path_guild + files[i] + "/value_stars.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString();
                data_guild.value_stars[i - 1] = parseInt(data_guild.value_stars[i - 1], 10);
            }
            if (fs.existsSync(path_guild + files[i] + "/like_all_users_guild.txt")) 
            {
                data_guild.like_all_users_guild[i - 1] = fs.readFileSync(path_guild + files[i] + "/like_all_users_guild.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString();
                data_guild.like_all_users_guild[i - 1] = parseInt(data_guild.like_all_users_guild[i - 1], 10);
            }
            if (fs.existsSync(path_guild + files[i] + "/donjon_all.txt")) 
            {
                data_guild.donjon_all[i - 1] = fs.readFileSync(path_guild + files[i] + "/donjon_all.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString();
                data_guild.donjon_all[i - 1] = parseInt(data_guild.donjon_all[i - 1], 10);
            }
            if (fs.existsSync(path_guild + files[i] + "/defense_all.txt")) 
            {
                data_guild.defense_all[i - 1] = fs.readFileSync(path_guild + files[i] + "/defense_all.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString();
                data_guild.defense_all[i - 1] = parseInt(data_guild.defense_all[i - 1], 10);
            }
            if (fs.existsSync(path_guild + files[i] + "/attack_all.txt")) 
            {
                data_guild.attack_all[i - 1] = fs.readFileSync(path_guild + files[i] + "/attack_all.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString();
                data_guild.attack_all[i - 1] = parseInt(data_guild.attack_all[i - 1], 10);
            }
            if (fs.existsSync(path_guild + files[i] + "/channel_annonce.txt")) 
                data_guild.channel_annonce[i - 1] = fs.readFileSync(path_guild + files[i] + "/channel_annonce.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString();
            if (fs.existsSync(path_guild + files[i] + "/channel_règlement.txt")) 
                data_guild.channel_règlement[i - 1] = fs.readFileSync(path_guild + files[i] + "/channel_règlement.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString();
            if (fs.existsSync(path_guild + files[i] + "/channel_finances.txt")) 
                data_guild.channel_finances[i - 1] = fs.readFileSync(path_guild + files[i] + "/channel_finances.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString();
            if (fs.existsSync(path_guild + files[i] + "/channel_transferts.txt")) 
                data_guild.channel_transferts[i - 1] = fs.readFileSync(path_guild + files[i] + "/channel_transferts.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString();
            if (fs.existsSync(path_guild + files[i] + "/channel_all_rewards.txt")) 
                data_guild.channel_all_rewards[i - 1] = fs.readFileSync(path_guild + files[i] + "/channel_all_rewards.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString();
            if (fs.existsSync(path_guild + files[i] + "/channel_général.txt")) 
                data_guild.channel_général[i - 1] = fs.readFileSync(path_guild + files[i] + "/channel_général.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString();
            if (fs.existsSync(path_guild + files[i] + "/channel_events.txt")) 
                data_guild.channel_events[i - 1] = fs.readFileSync(path_guild + files[i] + "/channel_events.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString();
            if (fs.existsSync(path_guild + files[i] + "/channel_profil.txt")) 
                data_guild.channel_profil[i - 1] = fs.readFileSync(path_guild + files[i] + "/channel_profil.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString();
            if (fs.existsSync(path_guild + files[i] + "/channel_groupe.txt")) 
                data_guild.channel_groupe[i - 1] = fs.readFileSync(path_guild + files[i] + "/channel_groupe.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString();
            if (fs.existsSync(path_guild + files[i] + "/channel_boutique.txt")) 
                data_guild.channel_boutique[i - 1] = fs.readFileSync(path_guild + files[i] + "/channel_boutique.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString();
            if (fs.existsSync(path_guild + files[i] + "/channel_enclos.txt")) 
                data_guild.channel_enclos[i - 1] = fs.readFileSync(path_guild + files[i] + "/channel_enclos.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString();
            if (fs.existsSync(path_guild + files[i] + "/channel_la_purge.txt")) 
                data_guild.channel_la_purge[i - 1] = fs.readFileSync(path_guild + files[i] + "/channel_la_purge.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString();
            if (fs.existsSync(path_guild + files[i] + "/channel_tribunal.txt")) 
                data_guild.channel_tribunal[i - 1] = fs.readFileSync(path_guild + files[i] + "/channel_tribunal.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString();
            if (fs.existsSync(path_guild + files[i] + "/channel_command.txt")) 
                data_guild.channel_command[i - 1] = fs.readFileSync(path_guild + files[i] + "/channel_command.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString();
            if (fs.existsSync(path_guild + files[i] + "/channel_rangs.txt")) 
                data_guild.channel_rangs[i - 1] = fs.readFileSync(path_guild + files[i] + "/channel_rangs.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString();
            if (fs.existsSync(path_guild + files[i] + "/channel_questions.txt")) 
                data_guild.channel_questions[i - 1] = fs.readFileSync(path_guild + files[i] + "/channel_questions.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString();
            if (fs.existsSync(path_guild + files[i] + "/channel_links.txt")) 
                data_guild.channel_links[i - 1] = fs.readFileSync(path_guild + files[i] + "/channel_links.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString();
            if (fs.existsSync(path_guild + files[i] + "/channel_staff.txt")) 
                data_guild.channel_staff[i - 1] = fs.readFileSync(path_guild + files[i] + "/channel_staff.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString();
            if (fs.existsSync(path_guild + files[i] + "/channel_report.txt")) 
                data_guild.channel_report[i - 1] = fs.readFileSync(path_guild + files[i] + "/channel_report.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString();
            if (fs.existsSync(path_guild + files[i] + "/channel_projet.txt")) 
                data_guild.channel_projet[i - 1] = fs.readFileSync(path_guild + files[i] + "/channel_projet.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString();
            if (fs.existsSync(path_guild + files[i] + "/channel_gestion.txt")) 
                data_guild.channel_gestion[i - 1] = fs.readFileSync(path_guild + files[i] + "/channel_gestion.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString();
            if (fs.existsSync(path_guild + files[i] + "/channel_staff_mission.txt")) 
                data_guild.channel_staff_mission[i - 1] = fs.readFileSync(path_guild + files[i] + "/channel_staff_mission.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString();
            if (fs.existsSync(path_guild + files[i] + "/channel_command_staff.txt")) 
                data_guild.channel_command_staff[i - 1] = fs.readFileSync(path_guild + files[i] + "/channel_command_staff.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString();
            if (fs.existsSync(path_guild + files[i] + "/channel_terminal.txt")) 
                data_guild.channel_terminal[i - 1] = fs.readFileSync(path_guild + files[i] + "/channel_terminal.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString();

                console.log("chef = >" + data_guild.chef[i - 1]);
                console.log("name_guild = >" + data_guild.name_guild[i - 1] );
                console.log("category_guild = >" + data_guild.category_guild[i - 1]);
                console.log("guild = >" + data_guild.guild[i - 1]    );
                console.log("user_meneur = >" + data_guild.user_meneur[i - 1]);
                console.log("rolemeneur = >" + data_guild.rolemeneur[i - 1]  );
                console.log("brasdroit = >" + data_guild.brasdroit[i - 1] );
                console.log("conseiller = >" + data_guild.conseiller[i - 1]);
                console.log("staff = >" + data_guild.staff[i - 1] );
                console.log("coffre_guild = >" + data_guild.coffre_guild[i - 1]);
                console.log("nbr_total_star = >" + data_guild.nbr_total_star[i - 1]);
                console.log("nbr_de_membre = >" + data_guild.nbr_de_membre[i - 1] );
                console.log("usr_moyenne_level = >" + data_guild.usr_moyenne_level[i - 1]);
                console.log("star_to_kamas = >" + data_guild.star_to_kamas[i - 1]);
                console.log("like_all_users_guild = >" + data_guild.like_all_users_guild[i - 1]);
                console.log("donjon_all = >" + data_guild.donjon_all[i - 1]);
                console.log("defense_all = >" + data_guild.defense_all[i - 1]);
                console.log("attack_all = >" + data_guild.attack_all[i - 1]);
                console.log("channel_annonce = >" + data_guild.channel_annonce[i - 1]);
                console.log("channel_règlement = >" + data_guild.channel_règlement[i - 1]);
                console.log("channel_finances = >" + data_guild.channel_finances[i - 1]);
                console.log("channel_transferts = >" + data_guild.channel_transferts[i - 1]);
                console.log("channel_all_rewards = >" + data_guild.channel_all_rewards[i - 1]);
                console.log("channel_général = >" + data_guild.channel_général[i - 1]);
                console.log("channel_events = >" + data_guild.channel_events[i - 1]);
                console.log("channel_profil = >" + data_guild.channel_profil[i - 1]);
                console.log("channel_boutique = >" + data_guild.channel_boutique[i - 1]);
                console.log("channel_enclos = >" + data_guild.channel_enclos[i - 1]);
                console.log("channel_la_purge = >" + data_guild.channel_la_purge[i - 1]);
                console.log("channel_tribunal = >" + data_guild.channel_tribunal[i - 1]);
                console.log("channel_command = >" + data_guild.channel_command[i - 1]);
                console.log("channel_rangs = >" + data_guild.channel_rangs[i - 1]);
                console.log("channel_questions = >" + data_guild.channel_questions[i - 1]);
                console.log("channel_links = >" + data_guild.channel_links[i - 1]);
                console.log("channel_staff = >" + data_guild.channel_staff[i - 1]);
                console.log("channel_projet = >" + data_guild.channel_projet[i - 1]);
                console.log("channel_gestion = >" + data_guild.channel_gestion[i - 1]);
                console.log("channel_staff_mission = >" + data_guild.channel_staff_mission[i - 1]);
                console.log("channel_command_staff = >" + data_guild.channel_command_staff[i - 1]);
                console.log("channel_terminal = >" + data_guild.channel_terminal[i - 1] + "\n\n");
            }
        });
    //=================================================================================================================================================================
    //======================================================================= DATA_GUILDE ============================================================================
    //=================================================================================================================================================================



    let new_object;
    let path_user = __dirname + '/../Save/data_user/';
    fs.readdir(path_user, (err, files_user) => {
        console.log(files_user);
      if (files_user.length < 2)
        return;
      for (let i = 0; i < files_user.length; i++)
      {
          new_object = Object.assign({},data_user._user[0]);
          data_user._user.push(new_object);
          if (fs.existsSync(path_user + files_user[i] + "/register_status.txt"))
              data_user._user[data_user._user.length - 1].register_status = fs.readFileSync(path_user + files_user[i] + "/register_status.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString();
          if (fs.existsSync(path_user + files_user[i] + "/id.txt"))
              data_user._user[data_user._user.length - 1].id = fs.readFileSync(path_user + files_user[i] + "/id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString();
          if (fs.existsSync(path_user + files_user[i] + "/username.txt"))
              data_user._user[data_user._user.length - 1].username = fs.readFileSync(path_user + files_user[i] + "/username.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString();
          if (fs.existsSync(path_user + files_user[i] + "/rang_guild.txt"))
              data_user._user[data_user._user.length - 1].rang_guild = fs.readFileSync(path_user + files_user[i] + "/rang_guild.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString();
          if (fs.existsSync(path_user + files_user[i] + "/purge_exam_rang_status.txt"))
              data_user._user[data_user._user.length - 1].purge_exam_rang_status = fs.readFileSync(path_user + files_user[i] + "/purge_exam_rang_status.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString();
          if (fs.existsSync(path_user + files_user[i] + "/purge_immu_status.txt"))
              data_user._user[data_user._user.length - 1].purge_immu_status = fs.readFileSync(path_user + files_user[i] + "/purge_immu_status.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString();
          if (fs.existsSync(path_user + files_user[i] + "/chef_ava_status.txt"))
              data_user._user[data_user._user.length - 1].chef_ava_status = fs.readFileSync(path_user + files_user[i] + "/chef_ava_status.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString();
          if (fs.existsSync(path_user + files_user[i] + "/liked_for_skins.txt"))
              data_user._user[data_user._user.length - 1].liked_for_skins = parseInt(fs.readFileSync(path_user + files_user[i] + "/liked_for_skins.txt", "utf-8", (err, data)=>{if (err) return"Error";}), 10);
          if (fs.existsSync(path_user + files_user[i] + "/like_status.txt"))
              data_user._user[data_user._user.length - 1].like_status = fs.readFileSync(path_user + files_user[i] + "/like_status.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString();    
          if (fs.existsSync(path_user + files_user[i] + "/like_bonus.txt"))
              data_user._user[data_user._user.length - 1].like_bonus = fs.readFileSync(path_user + files_user[i] + "/like_bonus.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString();    
          if (fs.existsSync(path_user + files_user[i] + "/grade_discord.txt"))
              data_user._user[data_user._user.length - 1].grade_discord = parseInt(fs.readFileSync(path_user + files_user[i] + "/grade_discord.txt", "utf-8", (err, data)=>{if (err) return"Error";}), 10);
          if (fs.existsSync(path_user + files_user[i] + "/grade_discord_max.txt"))
              data_user._user[data_user._user.length - 1].grade_discord_max = parseInt(fs.readFileSync(path_user + files_user[i] + "/grade_discord_max.txt", "utf-8", (err, data)=>{if (err) return"Error";}), 10);
          if (fs.existsSync(path_user + files_user[i] + "/exp_discord.txt"))
              data_user._user[data_user._user.length - 1].exp_discord = parseInt(fs.readFileSync(path_user + files_user[i] + "/exp_discord.txt", "utf-8", (err, data)=>{if (err) return"Error";}), 10);
          if (fs.existsSync(path_user + files_user[i] + "/exp_discord_max.txt"))
              data_user._user[data_user._user.length - 1].exp_discord_max = parseInt(fs.readFileSync(path_user + files_user[i] + "/exp_discord_max.txt", "utf-8", (err, data)=>{if (err) return"Error";}), 10);
          if (fs.existsSync(path_user + files_user[i] + "/stars.txt"))
              data_user._user[data_user._user.length - 1].stars = parseInt(fs.readFileSync(path_user + files_user[i] + "/stars.txt", "utf-8", (err, data)=>{if (err) return"Error";}), 10);
          if (fs.existsSync(path_user + files_user[i] + "/stars_max.txt"))
              data_user._user[data_user._user.length - 1].stars_max = parseInt(fs.readFileSync(path_user + files_user[i] + "/stars_max.txt", "utf-8", (err, data)=>{if (err) return"Error";}), 10);
          if (fs.existsSync(path_user + files_user[i] + "/kamas_waiting.txt"))
              data_user._user[data_user._user.length - 1].kamas_waiting = parseInt(fs.readFileSync(path_user + files_user[i] + "/kamas_waiting.txt", "utf-8", (err, data)=>{if (err) return"Error";}), 10);
          if (fs.existsSync(path_user + files_user[i] + "/pts_voc_status.txt"))
            data_user._user[data_user._user.length - 1].pts_voc_status = fs.readFileSync(path_user + files_user[i] + "/pts_voc_status.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString();    
          if (fs.existsSync(path_user + files_user[i] + "/perco_nbr.txt"))
            data_user._user[data_user._user.length - 1].perco_nbr = parseInt(fs.readFileSync(path_user + files_user[i] + "/perco_nbr.txt", "utf-8", (err, data)=>{if (err) return"Error";}), 10);
          if (fs.existsSync(path_user + files_user[i] + "/group_id.txt"))
            data_user._user[data_user._user.length - 1].group_id = fs.readFileSync(path_user + files_user[i] + "/group_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString();    
          if (fs.existsSync(path_user + files_user[i] + "/group_status.txt"))
            data_user._user[data_user._user.length - 1].group_status = fs.readFileSync(path_user + files_user[i] + "/group_status.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString();    
          if (fs.existsSync(path_user + files_user[i] + "/perco_max.txt"))
            data_user._user[data_user._user.length - 1].perco_max = parseInt(fs.readFileSync(path_user + files_user[i] + "/perco_max.txt", "utf-8", (err, data)=>{if (err) return"Error";}), 10);
          if (fs.existsSync(path_user + files_user[i] + "/perco_defence_nbr.txt"))
            data_user._user[data_user._user.length - 1].perco_defence_nbr = parseInt(fs.readFileSync(path_user + files_user[i] + "/perco_defence_nbr.txt", "utf-8", (err, data)=>{if (err) return"Error";}), 10);
          if (fs.existsSync(path_user + files_user[i] + "/perco_attack_nbr.txt"))
            data_user._user[data_user._user.length - 1].perco_attack_nbr = parseInt(fs.readFileSync(path_user + files_user[i] + "/perco_attack_nbr.txt", "utf-8", (err, data)=>{if (err) return"Error";}), 10);
          if (fs.existsSync(path_user + files_user[i] + "/mana.txt"))
            data_user._user[data_user._user.length - 1].mana = parseInt(fs.readFileSync(path_user + files_user[i] + "/mana.txt", "utf-8", (err, data)=>{if (err) return"Error";}), 10);
          if (fs.existsSync(path_user + files_user[i] + "/mana_max.txt"))
            data_user._user[data_user._user.length - 1].mana_max = parseInt(fs.readFileSync(path_user + files_user[i] + "/mana_max.txt", "utf-8", (err, data)=>{if (err) return"Error";}), 10);
          if (fs.existsSync(path_user + files_user[i] + "/box_bonus.txt"))
            data_user._user[data_user._user.length - 1].box_bonus = parseInt(fs.readFileSync(path_user + files_user[i] + "/box_bonus.txt", "utf-8", (err, data)=>{if (err) return"Error";}), 10);
          if (fs.existsSync(path_user + files_user[i] + "/enclot_pt.txt"))
            data_user._user[data_user._user.length - 1].enclot_pt = parseInt(fs.readFileSync(path_user + files_user[i] + "/enclot_pt.txt", "utf-8", (err, data)=>{if (err) return"Error";}), 10);
          if (fs.existsSync(path_user + files_user[i] + "/enclos_time.txt"))
            data_user._user[data_user._user.length - 1].enclos_time = fs.readFileSync(path_user + files_user[i] + "/enclos_time.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString();    
          if (fs.existsSync(path_user + files_user[i] + "/jackpot_items.txt"))
            data_user._user[data_user._user.length - 1].jackpot_items = fs.readFileSync(path_user + files_user[i] + "/jackpot_items.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString();    
          if (fs.existsSync(path_user + files_user[i] + "/enclos_dette.txt"))
            data_user._user[data_user._user.length - 1].enclos_dette = parseInt(fs.readFileSync(path_user + files_user[i] + "/enclos_dette.txt", "utf-8", (err, data)=>{if (err) return"Error";}), 10);
          if (fs.existsSync(path_user + files_user[i] + "/enclot_grade.txt"))
            data_user._user[data_user._user.length - 1].enclot_grade = parseInt(fs.readFileSync(path_user + files_user[i] + "/enclot_grade.txt", "utf-8", (err, data)=>{if (err) return"Error";}), 10);
          if (fs.existsSync(path_user + files_user[i] + "/enclot_exp.txt"))
            data_user._user[data_user._user.length - 1].enclot_exp = parseInt(fs.readFileSync(path_user + files_user[i] + "/enclot_exp.txt", "utf-8", (err, data)=>{if (err) return"Error";}), 10);
          if (fs.existsSync(path_user + files_user[i] + "/purge_survie_nbr.txt"))
            data_user._user[data_user._user.length - 1].purge_survie_nbr = parseInt(fs.readFileSync(path_user + files_user[i] + "/purge_survie_nbr.txt", "utf-8", (err, data)=>{if (err) return"Error";}), 10);
          if (fs.existsSync(path_user + files_user[i] + "/enclot_malus.txt"))
            data_user._user[data_user._user.length - 1].enclot_malus = parseInt(fs.readFileSync(path_user + files_user[i] + "/enclot_malus.txt", "utf-8", (err, data)=>{if (err) return"Error";}), 10);
          if (fs.existsSync(path_user + files_user[i] + "/cheat.txt"))
            data_user._user[data_user._user.length - 1].cheat = parseInt(fs.readFileSync(path_user + files_user[i] + "/cheat.txt", "utf-8", (err, data)=>{if (err) return"Error";}), 10);
          if (fs.existsSync(path_user + files_user[i] + "/vocal_status.txt"))
            data_user._user[data_user._user.length - 1].vocal_status = fs.readFileSync(path_user + files_user[i] + "/vocal_status.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString();    
          if (fs.existsSync(path_user + files_user[i] + "/vocal_total.txt"))
            data_user._user[data_user._user.length - 1].vocal_total = parseInt(fs.readFileSync(path_user + files_user[i] + "/vocal_total.txt", "utf-8", (err, data)=>{if (err) return"Error";}), 10);
          if (fs.existsSync(path_user + files_user[i] + "/donjon_inscription.txt"))
            data_user._user[data_user._user.length - 1].donjon_inscription = fs.readFileSync(path_user + files_user[i] + "/donjon_inscription.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString();    
          if (fs.existsSync(path_user + files_user[i] + "/date_inscription.txt"))
            data_user._user[data_user._user.length - 1].date_inscription = fs.readFileSync(path_user + files_user[i] + "/date_inscription.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString();    
          if (fs.existsSync(path_user + files_user[i] + "/date_last_recrutement.txt"))
            data_user._user[data_user._user.length - 1].date_last_recrutement = fs.readFileSync(path_user + files_user[i] + "/date_last_recrutement.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString();    
          if (fs.existsSync(path_user + files_user[i] + "/spam_status.txt"))
            data_user._user[data_user._user.length - 1].spam_status = fs.readFileSync(path_user + files_user[i] + "/spam_status.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString();    
          if (fs.existsSync(path_user + files_user[i] + "/lotterie_status.txt"))
            data_user._user[data_user._user.length - 1].lotterie_status = fs.readFileSync(path_user + files_user[i] + "/lotterie_status.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString();    
          if (fs.existsSync(path_user + files_user[i] + "/lotterie_total_win.txt"))
            data_user._user[data_user._user.length - 1].rang_power = fs.readFileSync(path_user + files_user[i] + "/rang_power.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString();    
          if (fs.existsSync(path_user + files_user[i] + "/rang_power.txt"))
            data_user._user[data_user._user.length - 1].lotterie_total_win = parseInt(fs.readFileSync(path_user + files_user[i] + "/lotterie_total_win.txt", "utf-8", (err, data)=>{if (err) return"Error";}), 10);
          if (fs.existsSync(path_user + files_user[i] + "/lotterie_monnaie_played.txt"))
            data_user._user[data_user._user.length - 1].lotterie_monnaie_played = parseInt(fs.readFileSync(path_user + files_user[i] + "/lotterie_monnaie_played.txt", "utf-8", (err, data)=>{if (err) return"Error";}), 10);
          if (fs.existsSync(path_user + files_user[i] + "/lotterie_monnaie_win.txt"))
            data_user._user[data_user._user.length - 1].lotterie_monnaie_win = parseInt(fs.readFileSync(path_user + files_user[i] + "/lotterie_monnaie_win.txt", "utf-8", (err, data)=>{if (err) return"Error";}), 10);
          if (fs.existsSync(path_user + files_user[i] + "/inscription_donjon.txt"))
            data_user._user[data_user._user.length - 1].inscription_donjon = parseInt(fs.readFileSync(path_user + files_user[i] + "/inscription_donjon.txt", "utf-8", (err, data)=>{if (err) return"Error";}), 10);
          if (fs.existsSync(path_user + files_user[i] + "/muse_xp.txt"))
            data_user._user[data_user._user.length - 1].muse_xp = parseInt(fs.readFileSync(path_user + files_user[i] + "/muse_xp.txt", "utf-8", (err, data)=>{if (err) return"Error";}), 10);
          if (fs.existsSync(path_user + files_user[i] + "/nbr_message.txt"))
            data_user._user[data_user._user.length - 1].nbr_message = parseInt(fs.readFileSync(path_user + files_user[i] + "/nbr_message.txt", "utf-8", (err, data)=>{if (err) return"Error";}), 10);
          
            console.log(data_user._user[data_user._user.length - 1].username);


























        }
    });
    console.log('DATA => BOT OK');
}


exports.data_to_bot = data_to_bot;

