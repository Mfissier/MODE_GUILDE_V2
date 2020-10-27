const Discord = require('discord.js');
const client = new Discord.Client();
data_guilde = require('../structjson/guild.json');
const fs = require('fs');
mkdir = require('../fun_param/mkdir');
let channel_s;

function save_users(message, newpath)
{
  for (let i = 0; i < data_user._user.length; i++)
  {
    if (data_user._user[i].id)
    {
          fs.writeFileSync(newpath + data_user._user[i].id + '/register_status.txt', data_user._user[i].register_status , (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/id.txt', data_user._user[i].id , (err)=>{if (err) console.log("An error happened");});                  
          fs.writeFileSync(newpath + data_user._user[i].id + '/username.txt', data_user._user[i].username , (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/rang_guild.txt', data_user._user[i].rang_guild , (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/purge_exam_rang_status.txt', data_user._user[i].purge_exam_rang_status , (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/purge_immu_status.txt', data_user._user[i].purge_immu_status , (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/chef_ava_status.txt', data_user._user[i].chef_ava_status , (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/liked_for_skins.txt', data_user._user[i].liked_for_skins , (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/like_status.txt', data_user._user[i].like_status , (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/like_bonus.txt', data_user._user[i].like_bonus , (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/grade_discord.txt', data_user._user[i].grade_discord , (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/grade_discord_max.txt', data_user._user[i].grade_discord_max , (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/exp_discord.txt', data_user._user[i].exp_discord , (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/exp_discord_max.txt', data_user._user[i].exp_discord_max , (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/stars.txt', data_user._user[i].stars , (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/stars_max.txt', data_user._user[i].stars_max , (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/kamas_waiting.txt', data_user._user[i].kamas_waiting , (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/pts_voc_status.txt', data_user._user[i].pts_voc_status , (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/perco_nbr.txt', data_user._user[i].perco_nbr , (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/group_id.txt', data_user._user[i].group_id , (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/group_status.txt', data_user._user[i].group_status , (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/perco_max.txt', data_user._user[i].perco_max , (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/perco_defence_nbr.txt', data_user._user[i].perco_defence_nbr , (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/perco_attack_nbr.txt', data_user._user[i].perco_attack_nbr , (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/mana.txt', data_user._user[i].mana , (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/mana_max.txt', data_user._user[i].mana_max , (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/box_bonus.txt', data_user._user[i].box_bonus , (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/enclot_pt.txt', data_user._user[i].enclot_pt , (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/enclos_time.txt', data_user._user[i].enclos_time , (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/jackpot_items.txt', data_user._user[i].jackpot_items , (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/enclos_dette.txt', data_user._user[i].enclos_dette , (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/enclot_grade.txt', data_user._user[i].enclot_grade , (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/enclot_exp.txt', data_user._user[i].enclot_exp , (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/enclot_malus.txt', data_user._user[i].enclot_malus , (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/cheat.txt', data_user._user[i].cheat , (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/vocal_status.txt', data_user._user[i].vocal_status , (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/vocal_total.txt', data_user._user[i].vocal_total , (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/donjon_inscription.txt', data_user._user[i].donjon_inscription , (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/date_inscription.txt', data_user._user[i].date_inscription , (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/date_last_recrutement.txt', data_user._user[i].date_last_recrutement , (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/spam_status.txt', data_user._user[i].spam_status , (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/inscription_donjon.txt', data_user._user[i].inscription_donjon , (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/rang_power.txt', data_user._user[i].rang_power , (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/muse_xp.txt', data_user._user[i].muse_xp , (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/lotterie_status.txt', data_user._user[i].lotterie_status , (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/lotterie_total_win.txt', data_user._user[i].lotterie_total_win , (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/lotterie_monnaie_played.txt', data_user._user[i].lotterie_monnaie_played , (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/lotterie_monnaie_win.txt', data_user._user[i].lotterie_monnaie_win , (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/boutique_spam.txt', data_user._user[i].boutique_spam , (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/cmd_profil_spam.txt', data_user._user[i].cmd_profil_spam , (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/cmd_stats_spam.txt', data_user._user[i].cmd_stats_spam , (err)=>{if (err) console.log("An error happened");})
          fs.writeFileSync(newpath + data_user._user[i].id + '/purge_survie_nbr.txt', data_user._user[i].purge_survie_nbr , (err)=>{if (err) console.log("An error happened");})
          fs.writeFileSync(newpath + data_user._user[i].id + '/nbr_message.txt', data_user._user[i].nbr_message , (err)=>{if (err) console.log("An error happened");})
          console.log(data_user._user[i].id);
    }
   
  }

}
async function bot_to_data_guild(message)
{
    let path = __dirname + '/../Save/data_guild/';
    fs.readdir(path, (err, files) => {
           for(let i = 0; i < files.length - 1; i++)
           {
                // ================================SAUVEGARDE DES DONNEES DES GUILDES================================
                 // ================================================================================================================================

               channel_s = message.guild.channels.cache.find(Collection => Collection.id == data_guilde.channel_général[i]);
               
                fs.writeFileSync(path + data_guilde.name_guild[i] + '/guild.txt',  data_guilde.guild[i], (err)=>{if (err) console.log("An error happened");});
                fs.writeFileSync(path + data_guilde.name_guild[i] + '/rolemeneur.txt',  data_guilde.rolemeneur[i], (err)=>{if (err) console.log("An error happened");});
                fs.writeFileSync(path + data_guilde.name_guild[i] + '/user_meneur.txt',  data_guilde.user_meneur[i], (err)=>{if (err) console.log("An error happened");});
                fs.writeFileSync(path + data_guilde.name_guild[i] + '/brasdroit.txt',  data_guilde.brasdroit[i], (err)=>{if (err) console.log("An error happened");});
                fs.writeFileSync(path + data_guilde.name_guild[i] + '/conseiller.txt',  data_guilde.conseiller[i], (err)=>{if (err) console.log("An error happened");});
                fs.writeFileSync(path + data_guilde.name_guild[i] + '/staff.txt',  data_guilde.staff[i], (err)=>{if (err) console.log("An error happened");});
                fs.writeFileSync(path + data_guilde.name_guild[i] + '/coffre_guild.txt',  data_guilde.coffre_guild[i], (err)=>{if (err) console.log("An error happened");});
                fs.writeFileSync(path + data_guilde.name_guild[i] + '/name_guild.txt',  data_guilde.name_guild[i], (err)=>{if (err) console.log("An error happened");});
                fs.writeFileSync(path + data_guilde.name_guild[i] + '/chef.txt',  data_guilde.chef[i], (err)=>{if (err) console.log("An error happened");});
                fs.writeFileSync(path + data_guilde.name_guild[i] + '/channel_annonce.txt',  data_guilde.channel_annonce[i], (err)=>{if (err) console.log("An error happened");});
                fs.writeFileSync(path + data_guilde.name_guild[i] + '/channel_règlement.txt',  data_guilde.channel_règlement[i], (err)=>{if (err) console.log("An error happened");});
                fs.writeFileSync(path + data_guilde.name_guild[i] + '/channel_finances.txt',  data_guilde.channel_finances[i], (err)=>{if (err) console.log("An error happened");});
                fs.writeFileSync(path + data_guilde.name_guild[i] + '/channel_transferts.txt',  data_guilde.channel_transferts[i], (err)=>{if (err) console.log("An error happened");});
                fs.writeFileSync(path + data_guilde.name_guild[i] + '/channel_all_rewards.txt',  data_guilde.channel_all_rewards[i], (err)=>{if (err) console.log("An error happened");});
                fs.writeFileSync(path + data_guilde.name_guild[i] + '/channel_général.txt',  data_guilde.channel_général[i], (err)=>{if (err) console.log("An error happened");});
                fs.writeFileSync(path + data_guilde.name_guild[i] + '/channel_events.txt',  data_guilde.channel_events[i], (err)=>{if (err) console.log("An error happened");});
                fs.writeFileSync(path + data_guilde.name_guild[i] + '/channel_profil.txt',  data_guilde.channel_profil[i], (err)=>{if (err) console.log("An error happened");});
                fs.writeFileSync(path + data_guilde.name_guild[i] + '/channel_groupe.txt',  data_guilde.channel_groupe[i], (err)=>{if (err) console.log("An error happened");});
                fs.writeFileSync(path + data_guilde.name_guild[i] + '/channel_boutique.txt',  data_guilde.channel_boutique[i], (err)=>{if (err) console.log("An error happened");});
                fs.writeFileSync(path + data_guilde.name_guild[i] + '/channel_enclos.txt',  data_guilde.channel_enclos[i], (err)=>{if (err) console.log("An error happened");});
                fs.writeFileSync(path + data_guilde.name_guild[i] + '/channel_la_purge.txt',  data_guilde.channel_la_purge[i], (err)=>{if (err) console.log("An error happened");});
                fs.writeFileSync(path + data_guilde.name_guild[i] + '/channel_tribunal.txt',  data_guilde.channel_tribunal[i], (err)=>{if (err) console.log("An error happened");});
                fs.writeFileSync(path + data_guilde.name_guild[i] + '/channel_command.txt',  data_guilde.channel_command[i], (err)=>{if (err) console.log("An error happened");});
                fs.writeFileSync(path + data_guilde.name_guild[i] + '/channel_rangs.txt',  data_guilde.channel_rangs[i], (err)=>{if (err) console.log("An error happened");});
                fs.writeFileSync(path + data_guilde.name_guild[i] + '/channel_questions.txt',  data_guilde.channel_questions[i], (err)=>{if (err) console.log("An error happened");});
                fs.writeFileSync(path + data_guilde.name_guild[i] + '/channel_links.txt',  data_guilde.channel_links[i], (err)=>{if (err) console.log("An error happened");});
                fs.writeFileSync(path + data_guilde.name_guild[i] + '/channel_staff.txt',  data_guilde.channel_staff[i], (err)=>{if (err) console.log("An error happened");});
                fs.writeFileSync(path + data_guilde.name_guild[i] + '/channel_projet.txt',  data_guilde.channel_projet[i], (err)=>{if (err) console.log("An error happened");});
                fs.writeFileSync(path + data_guilde.name_guild[i] + '/channel_gestion.txt',  data_guilde.channel_gestion[i], (err)=>{if (err) console.log("An error happened");});
                fs.writeFileSync(path + data_guilde.name_guild[i] + '/channel_staff_mission.txt',  data_guilde.channel_staff_mission[i], (err)=>{if (err) console.log("An error happened");});
                fs.writeFileSync(path + data_guilde.name_guild[i] + '/channel_report.txt',  data_guilde.channel_report[i], (err)=>{if (err) console.log("An error happened");});
                fs.writeFileSync(path + data_guilde.name_guild[i] + '/channel_command_staff.txt',  data_guilde.channel_command_staff[i], (err)=>{if (err) console.log("An error happened");});
                fs.writeFileSync(path + data_guilde.name_guild[i] + '/channel_terminal.txt',  data_guilde.channel_terminal[i], (err)=>{if (err) console.log("An error happened");});
                fs.writeFileSync(path + data_guilde.name_guild[i] + '/nbr_total_star.txt',  data_guilde.nbr_total_star[i], (err)=>{if (err) console.log("An error happened");});
                fs.writeFileSync(path + data_guilde.name_guild[i] + '/category_guild.txt',  data_guilde.category_guild[i], (err)=>{if (err) console.log("An error happened");});
                fs.writeFileSync(path + data_guilde.name_guild[i] + '/value_stars.txt',  data_guilde.value_stars[i], (err)=>{if (err) console.log("An error happened");});
                // ================================SAUVEGARDE DES DONNEES DES GUILDES================================
                // ================================================================================================================================
                
           }
       });
      
       let newpath = __dirname + '/../Save/data_user/';
       fs.readdir(newpath, (err, files) => {
                for (let i = 1; i < data_user._user.length; i++)
                {
                  for (let y = 0; y < files.length; y++)
                  {
                    if (data_user._user[i].id == undefined)
                      break;
                    if (data_user._user[i].id == files[y])
                      break;
                    if (y == files.length - 1)
                      mkdir.mkdir(newpath + data_user._user[i].id);
                  }
                }
                setTimeout(save_users,2000,message,newpath);
        }); 
        
}
exports.bot_to_data_guild = bot_to_data_guild;