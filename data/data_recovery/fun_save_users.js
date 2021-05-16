const Discord = require('discord.js');
const { fun_mkdir } = require('../../commands/Fun/fun_mkdir');
const data_user = require('../structjson/user.json');
var fs = require('fs');

function fun_write_users(newpath)
{
    for (let i = 0; i < data_user._user.length; i++) {
        if (data_user._user[i].id) {


          //
            fs.writeFileSync(newpath + data_user._user[i].id + '/guild_delete_statue.txt', data_user._user[i].guild_delete_statue.toString(), (err)=>{if (err) console.log("An error happened");});
            fs.writeFileSync(newpath + data_user._user[i].id + '/lock.txt', data_user._user[i].lock.toString(), (err)=>{if (err) console.log("An error happened");});
            fs.writeFileSync(newpath + data_user._user[i].id + '/tuto_rang.txt', data_user._user[i].tuto_rang.toString(), (err)=>{if (err) console.log("An error happened");});
            fs.writeFileSync(newpath + data_user._user[i].id + '/rang_coa.txt', data_user._user[i].rang_coa.toString(), (err)=>{if (err) console.log("An error happened");});
            fs.writeFileSync(newpath + data_user._user[i].id + '/Succes_grade_Recruteur.txt', data_user._user[i].Succes_grade_Recruteur.toString(), (err)=>{if (err) console.log("An error happened");});
            fs.writeFileSync(newpath + data_user._user[i].id + '/Succes_grade_like.txt', data_user._user[i].Succes_grade_like.toString(), (err)=>{if (err) console.log("An error happened");});
            fs.writeFileSync(newpath + data_user._user[i].id + '/Succes_grade_Espion.txt', data_user._user[i].Succes_grade_Espion.toString(), (err)=>{if (err) console.log("An error happened");});
            fs.writeFileSync(newpath + data_user._user[i].id + '/Succes_grade_Muse.txt', data_user._user[i].Succes_grade_Muse.toString(), (err)=>{if (err) console.log("An error happened");});
            fs.writeFileSync(newpath + data_user._user[i].id + '/Succes_grade_Attaquant.txt', data_user._user[i].Succes_grade_Attaquant.toString(), (err)=>{if (err) console.log("An error happened");});
            fs.writeFileSync(newpath + data_user._user[i].id + '/Succes_grade_Defenseur.txt', data_user._user[i].Succes_grade_Defenseur.toString(), (err)=>{if (err) console.log("An error happened");});
            fs.writeFileSync(newpath + data_user._user[i].id + '/Succes_grade_Braconnier.txt', data_user._user[i].Succes_grade_Braconnier.toString(), (err)=>{if (err) console.log("An error happened");});
            fs.writeFileSync(newpath + data_user._user[i].id + '/Succes_grade_Chercheur_de_Trésor.txt', data_user._user[i].Succes_grade_Chercheur_de_Trésor.toString(), (err)=>{if (err) console.log("An error happened");});
            fs.writeFileSync(newpath + data_user._user[i].id + '/Succes_grade_Voleur.txt', data_user._user[i].Succes_grade_Voleur.toString(), (err)=>{if (err) console.log("An error happened");});
            fs.writeFileSync(newpath + data_user._user[i].id + '/Succes_grade_Donateur.txt', data_user._user[i].Succes_grade_Donateur.toString(), (err)=>{if (err) console.log("An error happened");});
            fs.writeFileSync(newpath + data_user._user[i].id + '/Succes_grade_Piplette.txt', data_user._user[i].Succes_grade_Piplette.toString(), (err)=>{if (err) console.log("An error happened");});
            fs.writeFileSync(newpath + data_user._user[i].id + '/vol_status.txt', data_user._user[i].vol_status.toString(), (err)=>{if (err) console.log("An error happened");});
            fs.writeFileSync(newpath + data_user._user[i].id + '/vol_bonus.txt', data_user._user[i].vol_bonus.toString(), (err)=>{if (err) console.log("An error happened");});
            
            fs.writeFileSync(newpath + data_user._user[i].id + '/attaque_inscription.txt', data_user._user[i].attaque_inscription.toString(), (err)=>{if (err) console.log("An error happened");});
            fs.writeFileSync(newpath + data_user._user[i].id + '/defense_inscriptiontxt', data_user._user[i].defense_inscription.toString(), (err)=>{if (err) console.log("An error happened");});
            fs.writeFileSync(newpath + data_user._user[i].id + '/skin_inscription', data_user._user[i].skin_inscription.toString(), (err)=>{if (err) console.log("An error happened");});
            fs.writeFileSync(newpath + data_user._user[i].id + '/braconnier_inscription', data_user._user[i].braconnier_inscription.toString(), (err)=>{if (err) console.log("An error happened");});
            fs.writeFileSync(newpath + data_user._user[i].id + '/tuto_profil', data_user._user[i].tuto_profil.toString(), (err)=>{if (err) console.log("An error happened");});
        
        
          //
          fs.writeFileSync(newpath + data_user._user[i].id + '/braconnier_nbr.txt', data_user._user[i].braconnier_nbr.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/register_status.txt', data_user._user[i].register_status.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/tuto_boutique_statue.txt', data_user._user[i].tuto_boutique_statue.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/tuto_statue.txt', data_user._user[i].tuto_statue.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/id.txt', data_user._user[i].id.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/username.txt', data_user._user[i].username.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/rang_guild.txt', data_user._user[i].rang_guild.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/rang_power.txt', data_user._user[i].rang_power.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/muse_xp.txt', data_user._user[i].muse_xp.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/data_no_purge.txt', data_user._user[i].data_no_purge.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/purge_exam_rang_status.txt', data_user._user[i].purge_exam_rang_status.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/tuto_don.txt', data_user._user[i].tuto_don.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/tuto_vol.txt', data_user._user[i].tuto_vol.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/tuto_like.txt', data_user._user[i].tuto_like.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/purge_immu_status.txt', data_user._user[i].purge_immu_status.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/purge_survie_nbr.txt', data_user._user[i].purge_survie_nbr.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/chef_ava_status.txt', data_user._user[i].chef_ava_status.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/liked_for_skins.txt', data_user._user[i].liked_for_skins.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/like_status.txt', data_user._user[i].like_status.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/like_bonus.txt', data_user._user[i].like_bonus.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/grade_discord.txt', data_user._user[i].grade_discord.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/nbr_message.txt', data_user._user[i].nbr_message.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/grade_discord_max.txt', data_user._user[i].grade_discord_max.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/exp_discord.txt', data_user._user[i].exp_discord.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/exp_discord_max.txt', data_user._user[i].exp_discord_max.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/inscription_donjon.txt', data_user._user[i].inscription_donjon.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/stars.txt', data_user._user[i].stars.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/stars_max.txt', data_user._user[i].stars_max.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/kamas_waiting.txt', data_user._user[i].kamas_waiting.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/pts_voc_status.txt', data_user._user[i].pts_voc_status.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/perco_nbr.txt', data_user._user[i].perco_nbr.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/group_id.txt', data_user._user[i].group_id.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/group_status.txt', data_user._user[i].group_status.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/perco_max.txt', data_user._user[i].perco_max.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/perco_defence_nbr.txt', data_user._user[i].perco_defence_nbr.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/perco_attack_nbr.txt', data_user._user[i].perco_attack_nbr.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/mana.txt', data_user._user[i].mana.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/mana_max.txt', data_user._user[i].mana_max.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/box_bonus.txt', data_user._user[i].box_bonus.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/enclot_pt.txt', data_user._user[i].enclot_pt.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/enclos_time.txt', data_user._user[i].enclos_time.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/jackpot_items.txt', data_user._user[i].jackpot_items.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/enclos_dette.txt', data_user._user[i].enclos_dette.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/enclot_grade.txt', data_user._user[i].enclot_grade.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/enclot_exp.txt', data_user._user[i].enclot_exp.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/enclot_malus.txt', data_user._user[i].enclot_malus.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/cheat.txt', data_user._user[i].cheat.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/vocal_status.txt', data_user._user[i].vocal_status.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/vocal_total.txt', data_user._user[i].vocal_total.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/donjon_inscription.txt', data_user._user[i].donjon_inscription.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/date_inscription.txt', data_user._user[i].date_inscription.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/date_last_recrutement.txt', data_user._user[i].date_last_recrutement.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/spam_status.txt', data_user._user[i].spam_status.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/lotterie_status.txt', data_user._user[i].lotterie_status.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/lotterie_total_win.txt', data_user._user[i].lotterie_total_win.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/lotterie_monnaie_played.txt', data_user._user[i].lotterie_monnaie_played.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/lotterie_monnaie_win.txt', data_user._user[i].lotterie_monnaie_win.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/boutique_spam.txt', data_user._user[i].boutique_spam.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/cmd_profil_spam.txt', data_user._user[i].cmd_profil_spam.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/cmd_stats_spam.txt', data_user._user[i].cmd_stats_spam.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/donjon_nbr.txt', data_user._user[i].donjon_nbr.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/defense_nbr.txt', data_user._user[i].defense_nbr.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/attack_nbr.txt', data_user._user[i].attack_nbr.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/search_perco_nbr.txt', data_user._user[i].search_perco_nbr.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/skin_nbr.txt', data_user._user[i].skin_nbr.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/AVA_nbr.txt', data_user._user[i].AVA_nbr.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/don_nbr.txt', data_user._user[i].don_nbr.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/vol_nbr.txt', data_user._user[i].vol_nbr.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/attaq_member_nbr.txt', data_user._user[i].attaq_member_nbr.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/def_member_nbr.txt', data_user._user[i].def_member_nbr.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/ava_member_nbr.txt', data_user._user[i].ava_member_nbr.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/skinner_member_nbr.txt', data_user._user[i].skinner_member_nbr.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/likeur_member_nbr.txt', data_user._user[i].likeur_member_nbr.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/like_me_member_nbr.txt', data_user._user[i].like_me_member_nbr.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/search_perco_member_nbr.txt', data_user._user[i].search_perco_member_nbr.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/vol_member_nbr.txt', data_user._user[i].vol_member_nbr.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/espion_member_nbr.txt', data_user._user[i].espion_member_nbr.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/butin_player_nbr.txt', data_user._user[i].butin_player_nbr.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/recruteur_nbr.txt', data_user._user[i].recruteur_nbr.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/gouverneur_nbr.txt', data_user._user[i].gouverneur_nbr.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/player_tresorerie_nbr.txt', data_user._user[i].player_tresorerie_nbr.toString(), (err)=>{if (err) console.log("An error happened");});
          fs.writeFileSync(newpath + data_user._user[i].id + '/taxe_pos_perco_nbr.txt', data_user._user[i].taxe_pos_perco_nbr.toString(), (err)=>{if (err) console.log("An error happened");});
        }
      }
}
function fun_save_users()
{
    let newpath = __dirname + '/../Save/data_user/';
    fs.readdir(newpath, (err, files) => {
        console.log(files);
        for (let i = 0; i < data_user._user.length; i++) {
          for (let y = 0; y < files.length; y++) {
            if (data_user._user[i].id == undefined)
              break;
            if (data_user._user[i].id == files[y])
              break;
            if (y == files.length - 1)
              fun_mkdir(newpath + data_user._user[i].id);
          }
        }
     }); 
     setTimeout(fun_write_users, 3000, newpath);

}
exports.fun_save_users = fun_save_users;