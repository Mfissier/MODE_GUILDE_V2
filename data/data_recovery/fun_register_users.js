const fs = require('fs');
const data_user = require('../structjson/user.json');

function fun_check_data(data)
{
    if (data == 'undefined')
        return (0);
    if (!data)
        return (0);
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

async function fun_register_users(){

    let new_object;
    let path_user = __dirname + '/../Save/data_user/';
    fs.readdir(path_user, (err, files_user) => {
      if (files_user.length < 2)
        return;
      for (let i = 0; i < files_user.length; i++)
      {
          new_object = Object.assign({},data_user._user[0]);
          data_user._user.push(new_object);
//
          if (fs.existsSync(path_user + files_user[i] + "/Succes_grade_Recruteur.txt"))
           data_user._user[data_user._user.length - 1].Succes_grade_Recruteur = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/Succes_grade_Recruteur.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/guild_delete_statue.txt"))
           data_user._user[data_user._user.length - 1].guild_delete_statue = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/guild_delete_statue.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/lock.txt"))
           data_user._user[data_user._user.length - 1].lock = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/lock.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          
          if (fs.existsSync(path_user + files_user[i] + "/rang_coa.txt"))
           data_user._user[data_user._user.length - 1].rang_coa = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/rang_coa.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/tuto_rang.txt"))
           data_user._user[data_user._user.length - 1].tuto_rang = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/tuto_rang.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/attaque_inscription.txt"))
           data_user._user[data_user._user.length - 1].attaque_inscription = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/attaque_inscription.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/defense_inscription.txt"))
           data_user._user[data_user._user.length - 1].defense_inscription = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/defense_inscription.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/skin_inscription.txt"))
            data_user._user[data_user._user.length - 1].skin_inscription = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/skin_inscription.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/braconnier_inscription.txt"))
            data_user._user[data_user._user.length - 1].braconnier_inscription = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/braconnier_inscription.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/tuto_profil.txt"))
            data_user._user[data_user._user.length - 1].tuto_profil = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/tuto_profil.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/Succes_grade_like.txt"))
           data_user._user[data_user._user.length - 1].Succes_grade_like = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/Succes_grade_like.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/Succes_grade_Espion.txt"))
           data_user._user[data_user._user.length - 1].Succes_grade_Espion = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/Succes_grade_Espion.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/Succes_grade_Muse.txt"))
           data_user._user[data_user._user.length - 1].Succes_grade_Muse = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/Succes_grade_Muse.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/Succes_grade_Attaquant.txt"))
           data_user._user[data_user._user.length - 1].Succes_grade_Attaquant = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/Succes_grade_Attaquant.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/Succes_grade_Defenseur.txt"))
           data_user._user[data_user._user.length - 1].Succes_grade_Defenseur = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/Succes_grade_Defenseur.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/Succes_grade_Braconnier.txt"))
           data_user._user[data_user._user.length - 1].Succes_grade_Braconnier = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/Succes_grade_Braconnier.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/Succes_grade_Chercheur_de_Trésor.txt"))
           data_user._user[data_user._user.length - 1].Succes_grade_Chercheur_de_Trésor = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/Succes_grade_Chercheur_de_Trésor.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/Succes_grade_Voleur.txt"))
           data_user._user[data_user._user.length - 1].Succes_grade_Voleur = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/Succes_grade_Voleur.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/Succes_grade_Donateur.txt"))
           data_user._user[data_user._user.length - 1].Succes_grade_Donateur = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/Succes_grade_Donateur.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/Succes_grade_Piplette.txt"))
           data_user._user[data_user._user.length - 1].Succes_grade_Piplette = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/Succes_grade_Piplette.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/vol_status.txt"))
            data_user._user[data_user._user.length - 1].vol_status = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/vol_status.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/vol_bonus.txt"))
            data_user._user[data_user._user.length - 1].vol_bonus = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/vol_bonus.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/braconnier_nbr.txt"))
            data_user._user[data_user._user.length - 1].braconnier_nbr = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/braconnier_nbr.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/tuto_statue.txt"))
            data_user._user[data_user._user.length - 1].tuto_statue = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/tuto_statue.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/tuto_boutique_statue.txt"))
            data_user._user[data_user._user.length - 1].tuto_boutique_statue = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/tuto_boutique_statue.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/register_status.txt"))
            data_user._user[data_user._user.length - 1].register_status = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/register_status.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/id.txt"))
            data_user._user[data_user._user.length - 1].id = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/username.txt"))
            data_user._user[data_user._user.length - 1].username = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/username.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/rang_guild.txt"))
            data_user._user[data_user._user.length - 1].rang_guild = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/rang_guild.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/rang_power.txt"))
            data_user._user[data_user._user.length - 1].rang_power = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/rang_power.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/muse_xp.txt"))
            data_user._user[data_user._user.length - 1].muse_xp = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/muse_xp.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/data_no_purge.txt"))
            data_user._user[data_user._user.length - 1].data_no_purge = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/data_no_purge.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/purge_exam_rang_status.txt"))
            data_user._user[data_user._user.length - 1].purge_exam_rang_status = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/purge_exam_rang_status.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/purge_immu_status.txt"))
            data_user._user[data_user._user.length - 1].purge_immu_status = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/purge_immu_status.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/purge_survie_nbr.txt"))
            data_user._user[data_user._user.length - 1].purge_survie_nbr = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/purge_survie_nbr.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/tuto_don.txt"))
              data_user._user[data_user._user.length - 1].tuto_don = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/tuto_don.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/tuto_vol.txt"))
              data_user._user[data_user._user.length - 1].tuto_vol = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/tuto_vol.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/tuto_like.txt"))
            data_user._user[data_user._user.length - 1].tuto_like = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/tuto_like.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/chef_ava_status.txt"))
            data_user._user[data_user._user.length - 1].chef_ava_status = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/chef_ava_status.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/liked_for_skins.txt"))
            data_user._user[data_user._user.length - 1].liked_for_skins = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/liked_for_skins.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/like_status.txt"))
            data_user._user[data_user._user.length - 1].like_status = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/like_status.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/like_bonus.txt"))
            data_user._user[data_user._user.length - 1].like_bonus = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/like_bonus.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/grade_discord.txt"))
            data_user._user[data_user._user.length - 1].grade_discord = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/grade_discord.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/nbr_message.txt"))
            data_user._user[data_user._user.length - 1].nbr_message = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/nbr_message.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/grade_discord_max.txt"))
            data_user._user[data_user._user.length - 1].grade_discord_max = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/grade_discord_max.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/exp_discord.txt"))
            data_user._user[data_user._user.length - 1].exp_discord = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/exp_discord.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/exp_discord_max.txt"))
            data_user._user[data_user._user.length - 1].exp_discord_max = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/exp_discord_max.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/inscription_donjon.txt"))
            data_user._user[data_user._user.length - 1].inscription_donjon = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/inscription_donjon.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/stars.txt"))
            data_user._user[data_user._user.length - 1].stars = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/stars.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/stars_max.txt"))
            data_user._user[data_user._user.length - 1].stars_max = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/stars_max.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/kamas_waiting.txt"))
            data_user._user[data_user._user.length - 1].kamas_waiting = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/kamas_waiting.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/pts_voc_status.txt"))
            data_user._user[data_user._user.length - 1].pts_voc_status = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/pts_voc_status.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/perco_nbr.txt"))
            data_user._user[data_user._user.length - 1].perco_nbr = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/perco_nbr.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/group_id.txt"))
            data_user._user[data_user._user.length - 1].group_id = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/group_id.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/group_status.txt"))
            data_user._user[data_user._user.length - 1].group_status = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/group_status.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/perco_max.txt"))
            data_user._user[data_user._user.length - 1].perco_max = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/perco_max.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/perco_defence_nbr.txt"))
            data_user._user[data_user._user.length - 1].perco_defence_nbr = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/perco_defence_nbr.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/perco_attack_nbr.txt"))
            data_user._user[data_user._user.length - 1].perco_attack_nbr = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/perco_attack_nbr.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/mana.txt"))
            data_user._user[data_user._user.length - 1].mana = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/mana.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/mana_max.txt"))
            data_user._user[data_user._user.length - 1].mana_max = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/mana_max.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/box_bonus.txt"))
            data_user._user[data_user._user.length - 1].box_bonus = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/box_bonus.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/enclot_pt.txt"))
            data_user._user[data_user._user.length - 1].enclot_pt = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/enclot_pt.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/enclos_time.txt"))
            data_user._user[data_user._user.length - 1].enclos_time = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/enclos_time.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/jackpot_items.txt"))
            data_user._user[data_user._user.length - 1].jackpot_items = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/jackpot_items.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/enclos_dette.txt"))
            data_user._user[data_user._user.length - 1].enclos_dette = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/enclos_dette.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/enclot_grade.txt"))
            data_user._user[data_user._user.length - 1].enclot_grade = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/enclot_grade.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/enclot_exp.txt"))
            data_user._user[data_user._user.length - 1].enclot_exp = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/enclot_exp.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/enclot_malus.txt"))
            data_user._user[data_user._user.length - 1].enclot_malus = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/enclot_malus.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/cheat.txt"))
            data_user._user[data_user._user.length - 1].cheat = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/cheat.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/vocal_status.txt"))
            data_user._user[data_user._user.length - 1].vocal_status = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/vocal_status.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/vocal_total.txt"))
            data_user._user[data_user._user.length - 1].vocal_total = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/vocal_total.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/donjon_inscription.txt"))
            data_user._user[data_user._user.length - 1].donjon_inscription = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/donjon_inscription.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/date_inscription.txt"))
            data_user._user[data_user._user.length - 1].date_inscription = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/date_inscription.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/date_last_recrutement.txt"))
            data_user._user[data_user._user.length - 1].date_last_recrutement = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/date_last_recrutement.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/spam_status.txt"))
            data_user._user[data_user._user.length - 1].spam_status = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/spam_status.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/lotterie_status.txt"))
            data_user._user[data_user._user.length - 1].lotterie_status = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/lotterie_status.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/lotterie_total_win.txt"))
            data_user._user[data_user._user.length - 1].lotterie_total_win = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/lotterie_total_win.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/lotterie_monnaie_played.txt"))
            data_user._user[data_user._user.length - 1].lotterie_monnaie_played = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/lotterie_monnaie_played.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/lotterie_monnaie_win.txt"))
            data_user._user[data_user._user.length - 1].lotterie_monnaie_win = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/lotterie_monnaie_win.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/boutique_spam.txt"))
            data_user._user[data_user._user.length - 1].boutique_spam = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/boutique_spam.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/cmd_profil_spam.txt"))
            data_user._user[data_user._user.length - 1].cmd_profil_spam = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/cmd_profil_spam.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/cmd_stats_spam.txt"))
            data_user._user[data_user._user.length - 1].cmd_stats_spam = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/cmd_stats_spam.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/donjon_nbr.txt"))
            data_user._user[data_user._user.length - 1].donjon_nbr = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/donjon_nbr.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/defense_nbr.txt"))
            data_user._user[data_user._user.length - 1].defense_nbr = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/defense_nbr.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/attack_nbr.txt"))
            data_user._user[data_user._user.length - 1].attack_nbr = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/attack_nbr.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/search_perco_nbr.txt"))
            data_user._user[data_user._user.length - 1].search_perco_nbr = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/search_perco_nbr.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/skin_nbr.txt"))
            data_user._user[data_user._user.length - 1].skin_nbr = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/skin_nbr.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/AVA_nbr.txt"))
            data_user._user[data_user._user.length - 1].AVA_nbr = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/AVA_nbr.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/don_nbr.txt"))
            data_user._user[data_user._user.length - 1].don_nbr = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/don_nbr.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/vol_nbr.txt"))
            data_user._user[data_user._user.length - 1].vol_nbr = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/vol_nbr.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/attaq_member_nbr.txt"))
            data_user._user[data_user._user.length - 1].attaq_member_nbr = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/attaq_member_nbr.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/def_member_nbr.txt"))
            data_user._user[data_user._user.length - 1].def_member_nbr = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/def_member_nbr.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/ava_member_nbr.txt"))
            data_user._user[data_user._user.length - 1].ava_member_nbr = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/ava_member_nbr.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/skinner_member_nbr.txt"))
            data_user._user[data_user._user.length - 1].skinner_member_nbr = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/skinner_member_nbr.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/likeur_member_nbr.txt"))
            data_user._user[data_user._user.length - 1].likeur_member_nbr = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/likeur_member_nbr.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/like_me_member_nbr.txt"))
            data_user._user[data_user._user.length - 1].like_me_member_nbr = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/like_me_member_nbr.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/search_perco_member_nbr.txt"))
            data_user._user[data_user._user.length - 1].search_perco_member_nbr = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/search_perco_member_nbr.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/vol_member_nbr.txt"))
            data_user._user[data_user._user.length - 1].vol_member_nbr = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/vol_member_nbr.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/espion_member_nbr.txt"))
            data_user._user[data_user._user.length - 1].espion_member_nbr = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/espion_member_nbr.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/butin_player_nbr.txt"))
            data_user._user[data_user._user.length - 1].butin_player_nbr = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/butin_player_nbr.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/recruteur_nbr.txt"))
            data_user._user[data_user._user.length - 1].recruteur_nbr = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/recruteur_nbr.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/gouverneur_nbr.txt"))
            data_user._user[data_user._user.length - 1].gouverneur_nbr = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/gouverneur_nbr.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/player_tresorerie_nbr.txt"))
            data_user._user[data_user._user.length - 1].player_tresorerie_nbr = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/player_tresorerie_nbr.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          if (fs.existsSync(path_user + files_user[i] + "/taxe_pos_perco_nbr.txt"))
            data_user._user[data_user._user.length - 1].taxe_pos_perco_nbr = fun_check_data(fs.readFileSync(path_user + files_user[i] + "/taxe_pos_perco_nbr.txt", "utf-8", (err, data)=>{if (err) return"Error";}).toString());
          
            //console.log('id = ' + data_user._user[data_user._user.length - 1].id);
            //console.log('username = ' + data_user._user[data_user._user.length - 1].username);
            //console.log('rang_guild = ' + data_user._user[data_user._user.length - 1].rang_guild);
            //console.log('rang_power = ' + data_user._user[data_user._user.length - 1].rang_power);
            //console.log('muse_xp = ' + data_user._user[data_user._user.length - 1].muse_xp);
            //console.log('data_no_purge = ' + data_user._user[data_user._user.length - 1].data_no_purge);
            //console.log('purge_exam_rang_status = ' + data_user._user[data_user._user.length - 1].purge_exam_rang_status);
            //console.log('purge_immu_status = ' + data_user._user[data_user._user.length - 1].purge_immu_status);
            //console.log('purge_survie_nbr = ' + data_user._user[data_user._user.length - 1].purge_survie_nbr);
            //console.log('chef_ava_status = ' + data_user._user[data_user._user.length - 1].chef_ava_status);
            //console.log('liked_for_skins = ' + data_user._user[data_user._user.length - 1].liked_for_skins);
            //console.log('like_status = ' + data_user._user[data_user._user.length - 1].like_status);
            //console.log('like_bonus = ' + data_user._user[data_user._user.length - 1].like_bonus);
            //console.log('grade_discord = ' + data_user._user[data_user._user.length - 1].grade_discord);
            //console.log('nbr_message = ' + data_user._user[data_user._user.length - 1].nbr_message);
            //console.log('grade_discord_max = ' + data_user._user[data_user._user.length - 1].grade_discord_max);
            //console.log('exp_discord = ' + data_user._user[data_user._user.length - 1].exp_discord);
            //console.log('exp_discord_max = ' + data_user._user[data_user._user.length - 1].exp_discord_max);
            //console.log('inscription_donjon = ' + data_user._user[data_user._user.length - 1].inscription_donjon);
            //console.log('stars = ' + data_user._user[data_user._user.length - 1].stars);
            //console.log('stars_max = ' + data_user._user[data_user._user.length - 1].stars_max);
            //console.log('kamas_waiting = ' + data_user._user[data_user._user.length - 1].kamas_waiting);
            //console.log('pts_voc_status = ' + data_user._user[data_user._user.length - 1].pts_voc_status);
            //console.log('perco_nbr = ' + data_user._user[data_user._user.length - 1].perco_nbr);
            //console.log('group_id = ' + data_user._user[data_user._user.length - 1].group_id);
            //console.log('group_status = ' + data_user._user[data_user._user.length - 1].group_status);
            //console.log('perco_max = ' + data_user._user[data_user._user.length - 1].perco_max);
            //console.log('perco_defence_nbr = ' + data_user._user[data_user._user.length - 1].perco_defence_nbr);
            //console.log('perco_attack_nbr = ' + data_user._user[data_user._user.length - 1].perco_attack_nbr);
            //console.log('mana = ' + data_user._user[data_user._user.length - 1].mana);
            //console.log('mana_max = ' + data_user._user[data_user._user.length - 1].mana_max);
            //console.log('box_bonus = ' + data_user._user[data_user._user.length - 1].box_bonus);
            //console.log('enclot_pt = ' + data_user._user[data_user._user.length - 1].enclot_pt);
            //console.log('enclos_time = ' + data_user._user[data_user._user.length - 1].enclos_time);
            //console.log('jackpot_items = ' + data_user._user[data_user._user.length - 1].jackpot_items);
            //console.log('enclos_dette = ' + data_user._user[data_user._user.length - 1].enclos_dette);
            //console.log('enclot_grade = ' + data_user._user[data_user._user.length - 1].enclot_grade);
            //console.log('enclot_exp = ' + data_user._user[data_user._user.length - 1].enclot_exp);
            //console.log('enclot_malus = ' + data_user._user[data_user._user.length - 1].enclot_malus);
            //console.log('cheat = ' + data_user._user[data_user._user.length - 1].cheat);
            //console.log('vocal_status = ' + data_user._user[data_user._user.length - 1].vocal_status);
            //console.log('vocal_total = ' + data_user._user[data_user._user.length - 1].vocal_total);
            //console.log('donjon_inscription = ' + data_user._user[data_user._user.length - 1].donjon_inscription);
            //console.log('date_inscription = ' + data_user._user[data_user._user.length - 1].date_inscription);
            //console.log('date_last_recrutement = ' + data_user._user[data_user._user.length - 1].date_last_recrutement);
            //console.log('spam_status = ' + data_user._user[data_user._user.length - 1].spam_status);
            //console.log('lotterie_status = ' + data_user._user[data_user._user.length - 1].lotterie_status);
            //console.log('lotterie_total_win = ' + data_user._user[data_user._user.length - 1].lotterie_total_win);
            //console.log('lotterie_monnaie_played = ' + data_user._user[data_user._user.length - 1].lotterie_monnaie_played);
            //console.log('lotterie_monnaie_win = ' + data_user._user[data_user._user.length - 1].lotterie_monnaie_win);
            //console.log('boutique_spam = ' + data_user._user[data_user._user.length - 1].boutique_spam);
            //console.log('cmd_profil_spam = ' + data_user._user[data_user._user.length - 1].cmd_profil_spam);
            //console.log('cmd_stats_spam = ' + data_user._user[data_user._user.length - 1].cmd_stats_spam);
            //console.log('donjon_nbr = ' + data_user._user[data_user._user.length - 1].donjon_nbr);
            //console.log('defense_nbr = ' + data_user._user[data_user._user.length - 1].defense_nbr);
            //console.log('attack_nbr = ' + data_user._user[data_user._user.length - 1].attack_nbr);
            //console.log('search_perco_nbr = ' + data_user._user[data_user._user.length - 1].search_perco_nbr);
            //console.log('skin_nbr = ' + data_user._user[data_user._user.length - 1].skin_nbr);
            //console.log('AVA_nbr = ' + data_user._user[data_user._user.length - 1].AVA_nbr);
            //console.log('don_nbr = ' + data_user._user[data_user._user.length - 1].don_nbr);
            //console.log('vol_nbr = ' + data_user._user[data_user._user.length - 1].vol_nbr);
            //console.log('attaq_member_nbr = ' + data_user._user[data_user._user.length - 1].attaq_member_nbr);
            //console.log('def_member_nbr = ' + data_user._user[data_user._user.length - 1].def_member_nbr);
            //console.log('ava_member_nbr = ' + data_user._user[data_user._user.length - 1].ava_member_nbr);
            //console.log('skinner_member_nbr = ' + data_user._user[data_user._user.length - 1].skinner_member_nbr);
            //console.log('likeur_member_nbr = ' + data_user._user[data_user._user.length - 1].likeur_member_nbr);
            //console.log('like_me_member_nbr = ' + data_user._user[data_user._user.length - 1].like_me_member_nbr);
            //console.log('search_perco_member_nbr = ' + data_user._user[data_user._user.length - 1].search_perco_member_nbr);
            //console.log('vol_member_nbr = ' + data_user._user[data_user._user.length - 1].vol_member_nbr);
            //console.log('espion_member_nbr = ' + data_user._user[data_user._user.length - 1].espion_member_nbr);
            //console.log('butin_player_nbr = ' + data_user._user[data_user._user.length - 1].butin_player_nbr);
            //console.log('recruteur_nbr = ' + data_user._user[data_user._user.length - 1].recruteur_nbr);
            //console.log('gouverneur_nbr = ' + data_user._user[data_user._user.length - 1].gouverneur_nbr);
            //console.log('player_tresorerie_nbr = ' + data_user._user[data_user._user.length - 1].player_tresorerie_nbr);
            //console.log('taxe_pos_perco_nbr = ' + data_user._user[data_user._user.length - 1].taxe_pos_perco_nbr);
            // console.log('Succes_grade_Recruteur = ' + data_user._user[data_user._user.length - 1].Succes_grade_Recruteur);
            // console.log('Succes_grade_Espion = ' + data_user._user[data_user._user.length - 1].Succes_grade_Espion);
            // console.log('Succes_grade_Muse = ' + data_user._user[data_user._user.length - 1].Succes_grade_Muse);
            // console.log('Succes_grade_Attaquant = ' + data_user._user[data_user._user.length - 1].Succes_grade_Attaquant);
            // console.log('Succes_grade_Defenseur = ' + data_user._user[data_user._user.length - 1].Succes_grade_Defenseur);
            // console.log('Succes_grade_Braconnier = ' + data_user._user[data_user._user.length - 1].Succes_grade_Braconnier);
            // console.log('Succes_grade_Chercheur_de_Trésor = ' + data_user._user[data_user._user.length - 1].Succes_grade_Chercheur_de_Trésor);
            // console.log('Succes_grade_Voleur = ' + data_user._user[data_user._user.length - 1].Succes_grade_Voleur);
            // console.log('Succes_grade_Donateur = ' + data_user._user[data_user._user.length - 1].Succes_grade_Donateur);
            // console.log('Succes_grade_Piplette = ' + data_user._user[data_user._user.length - 1].Succes_grade_Piplette);
      }
    });
}
exports.fun_register_users = fun_register_users;