    
const Discord = require('discord.js');
const { fun_index_users } = require('../Fun/fun_index_users');
const client = new Discord.Client();
data_user = require('../../data/structjson/user.json');
data_guilde = require('../../data/structjson/guild.json');
data_syst = require('../../data/structjson/all_systeme.json');

async function fun_profil(message, command)
{
    /************************************************************ 
                          SECURITY COMMAND;
    *************************************************************/
                          
    let index_user;
    let avatar;
    let tmp_txt = "";

    if (await message.mentions.users.first() && await data_user._user[fun_index_users(message.member.id)].tuto_profil == true) {
        index_user = fun_index_users(message.mentions.users.first().id);
        avatar = message.mentions.users.first().displayAvatarURL()
    }
    else {
        index_user = fun_index_users(message.member.id);
        avatar = message.member.user.displayAvatarURL()
    }
    if (index_user == -1)
        return(message.channel.send("🤖 **Je n'ai pas trouvé cette utilisateur !**"));
    
    if (data_user._user[index_user].tuto_profil == true && data_user._user[index_user].tuto_statue == false) { 
        return(message.channel.send("🤖 **Pour continuer le tutoriel, va ici => <#"+ data_syst.channel_tuto_ton_profil_id +"> **"));
    }
    if (data_user._user[index_user].tuto_profil == false) {
        data_user._user[index_user].tuto_profil = true;
    }
    if (data_user._user[index_user].Succes_grade_like == 1) 
        tmp_txt += data_syst.Likeur_bronze_name + ' ('+ (data_user._user[index_user].skinner_member_nbr + data_user._user[index_user].likeur_member_nbr) +')' + '\n';
    if (data_user._user[index_user].Succes_grade_like == 2)
        tmp_txt += data_syst.Likeur_argent_name + ' ('+ (data_user._user[index_user].skinner_member_nbr + data_user._user[index_user].likeur_member_nbr) +')' + '\n';
    if (data_user._user[index_user].Succes_grade_like == 3)
        tmp_txt += data_syst.Likeur_or_name + ' ('+ (data_user._user[index_user].skinner_member_nbr + data_user._user[index_user].likeur_member_nbr) +')' + '\n';
    if (data_user._user[index_user].Succes_grade_like == 4)
        tmp_txt += data_syst.Likeur_Platine_name + ' ('+ (data_user._user[index_user].skinner_member_nbr + data_user._user[index_user].likeur_member_nbr) +')' + '\n';
    if (data_user._user[index_user].Succes_grade_Recruteur == 1)
        tmp_txt += data_syst.Recruteur_bronze_name + ' ('+ data_user._user[index_user].recruteur_nbr +')' + '\n';
    if (data_user._user[index_user].Succes_grade_Recruteur == 2)
        tmp_txt += data_syst.Recruteur_argent_name + ' ('+ data_user._user[index_user].recruteur_nbr +')' + '\n';
    if (data_user._user[index_user].Succes_grade_Recruteur ==3)
        tmp_txt += data_syst.Recruteur_Or_name + ' ('+ data_user._user[index_user].recruteur_nbr +')' + '\n';
    if (data_user._user[index_user].Succes_grade_Recruteur ==4)
        tmp_txt += data_syst.Recruteur_Platine_name + ' ('+ data_user._user[index_user].recruteur_nbr +')' + '\n';
    if (data_user._user[index_user].Succes_grade_Espion == 1)        
        tmp_txt += data_syst.Espion_bronze_name + ' ('+ data_user._user[index_user].donjon_nbr +')' + '\n';
    if (data_user._user[index_user].Succes_grade_Espion == 2)
        tmp_txt += data_syst.Espion_argent_name + ' ('+ data_user._user[index_user].donjon_nbr +')' + '\n';
    if (data_user._user[index_user].Succes_grade_Espion == 3)
        tmp_txt += data_syst.Espion_Or_name + ' ('+ data_user._user[index_user].donjon_nbr +')' + '\n';
    if (data_user._user[index_user].Succes_grade_Espion == 4)
        tmp_txt += data_syst.Espion_Platine_name + ' ('+ data_user._user[index_user].donjon_nbr +')' + '\n';
    if (data_user._user[index_user].Succes_grade_Muse == 1)        
        tmp_txt += data_syst.Muse_bronze_name + ' ('+ data_user._user[index_user].skin_nbr +')' + '\n';
    if (data_user._user[index_user].Succes_grade_Muse == 2)
        tmp_txt += data_syst.Muse_argent_name + ' ('+ data_user._user[index_user].skin_nbr +')' + '\n';
    if (data_user._user[index_user].Succes_grade_Muse == 3)
        tmp_txt += data_syst.Muse_Or_name + ' ('+ data_user._user[index_user].skin_nbr +')' + '\n';
    if (data_user._user[index_user].Succes_grade_Muse == 4)
        tmp_txt += data_syst.Muse_Platine_name + ' ('+ data_user._user[index_user].skin_nbr +')' + '\n';
    if (data_user._user[index_user].Succes_grade_Attaquant == 1)        
        tmp_txt += data_syst.Attaquant_bronze_name + ' ('+ data_user._user[index_user].attack_nbr +')' + '\n';
    if (data_user._user[index_user].Succes_grade_Attaquant == 2)
        tmp_txt += data_syst.Attaquant_argent_name + ' ('+ data_user._user[index_user].attack_nbr +')' + '\n';
    if (data_user._user[index_user].Succes_grade_Attaquant == 3)
        tmp_txt += data_syst.Attaquant_Or_name + ' ('+ data_user._user[index_user].attack_nbr +')' + '\n';
    if (data_user._user[index_user].Succes_grade_Attaquant == 4)
        tmp_txt += data_syst.Attaquant_Platine_name + ' ('+ data_user._user[index_user].attack_nbr +')' + '\n';
    if (data_user._user[index_user].Succes_grade_Defenseur == 1)        
        tmp_txt += data_syst.Defenseur_bronze_name + ' ('+ data_user._user[index_user].perco_defence_nbr +')' + '\n';
    if (data_user._user[index_user].Succes_grade_Defenseur == 2)
        tmp_txt += data_syst.Defenseur_argent_name + ' ('+ data_user._user[index_user].perco_defence_nbr +')' + '\n';
    if (data_user._user[index_user].Succes_grade_Defenseur == 3)
        tmp_txt += data_syst.Defenseur_Or_name + ' ('+ data_user._user[index_user].perco_defence_nbr +')' + '\n';
    if (data_user._user[index_user].Succes_grade_Defenseur == 4)
        tmp_txt += data_syst.Defenseur_Platine_name + ' ('+ data_user._user[index_user].perco_defence_nbr +')' + '\n';
    if (data_user._user[index_user].Succes_grade_Braconnier == 1)        
        tmp_txt += data_syst.Braconnier_bronze_name + ' ('+ data_user._user[index_user].braconnier_nbr +')' + '\n';
    if (data_user._user[index_user].Succes_grade_Braconnier == 2)
        tmp_txt += data_syst.Braconnier_argent_name + ' ('+ data_user._user[index_user].braconnier_nbr +')' + '\n';
    if (data_user._user[index_user].Succes_grade_Braconnier == 3)
        tmp_txt += data_syst.Braconnier_Or_name + ' ('+ data_user._user[index_user].braconnier_nbr +')' + '\n';
    if (data_user._user[index_user].Succes_grade_Braconnier == 4)
        tmp_txt += data_syst.Braconnier_Platine_name + ' ('+ data_user._user[index_user].braconnier_nbr +')' + '\n';
    if (data_user._user[index_user].Succes_grade_Chercheur_de_Trésor == 1)        
        tmp_txt += data_syst.Chercheur_de_Trésor_bronze_name + ' ('+ data_user._user[index_user].search_perco_nbr +')' + '\n';
    if (data_user._user[index_user].Succes_grade_Chercheur_de_Trésor == 2)
        tmp_txt += data_syst.Chercheur_de_Trésor_argent_name + ' ('+ data_user._user[index_user].search_perco_nbr +')' + '\n';
    if (data_user._user[index_user].Succes_grade_Chercheur_de_Trésor == 3)
        tmp_txt += data_syst.Chercheur_de_Trésor_Or_name + ' ('+ data_user._user[index_user].search_perco_nbr +')' + '\n';
    if (data_user._user[index_user].Succes_grade_Chercheur_de_Trésor == 4)
        tmp_txt += data_syst.Chercheur_de_Trésor_Platine_name + ' ('+ data_user._user[index_user].search_perco_nbr +')' + '\n';
    if (data_user._user[index_user].Succes_grade_Voleur == 1)        
        tmp_txt += data_syst.Voleur_bronze_name + ' ('+ data_user._user[index_user].vol_nbr +')' + '\n';
    if (data_user._user[index_user].Succes_grade_Voleur == 2)
        tmp_txt += data_syst.Voleur_argent_name + ' ('+ data_user._user[index_user].vol_nbr +')' + '\n';
    if (data_user._user[index_user].Succes_grade_Voleur == 3)
        tmp_txt += data_syst.Voleur_Or_name + ' ('+ data_user._user[index_user].vol_nbr +')' + '\n';
    if (data_user._user[index_user].Succes_grade_Voleur == 4)
        tmp_txt += data_syst.Voleur_Platine_name + ' ('+ data_user._user[index_user].vol_nbr +')' + '\n';
    if (data_user._user[index_user].Succes_grade_Donateur == 1)
        tmp_txt += data_syst.Donateur_bronze_name + ' ('+ data_user._user[index_user].don_nbr +')' + '\n';
    if (data_user._user[index_user].Succes_grade_Donateur == 2)
        tmp_txt += data_syst.Donateur_argent_name + ' ('+ data_user._user[index_user].don_nbr +')' + '\n';
    if (data_user._user[index_user].Succes_grade_Donateur == 3)
        tmp_txt += data_syst.Donateur_Or_name + ' ('+ data_user._user[index_user].don_nbr +')' + '\n';
    if (data_user._user[index_user].Succes_grade_Donateur == 4)
        tmp_txt += data_syst.Donateur_Platine_name + ' ('+ data_user._user[index_user].don_nbr +')' + '\n';

if ( data_user._user[index_user].Succes_grade_like == 0 &&
     data_user._user[index_user].Succes_grade_Recruteur == 0 &&
     data_user._user[index_user].Succes_grade_Espion == 0 &&
     data_user._user[index_user].Succes_grade_Muse == 0 &&
     data_user._user[index_user].Succes_grade_Attaquant == 0 &&
     data_user._user[index_user].Succes_grade_Defenseur == 0 &&
     data_user._user[index_user].Succes_grade_Braconnier == 0 &&
     data_user._user[index_user].Succes_grade_Chercheur_de_Trésor == 0 &&
     data_user._user[index_user].Succes_grade_Voleur == 0 &&
     data_user._user[index_user].Succes_grade_Donateur == 0)
        tmp_txt = "Vous n'avez validé aucun succès !!!";
   
const exampleEmbed = new Discord.MessageEmbed()
    .setColor('WHITE')
    .setTitle(data_user._user[index_user].username)//
    .setDescription('**🎖️    '+data_user._user[index_user].grade_discord + '#   ' + data_user._user[index_user].exp_discord + "/" + data_user._user[index_user].exp_discord_max + ' xp**')  
    .setThumbnail(avatar)
    .addFields(
      { name: '⭐  **'+data_user._user[index_user].stars + '**', value: '💧  **'+data_user._user[index_user].mana + '**/**'  + data_user._user[index_user].mana_max + '**   ' },
      { name: '\u200B', value: '\u200B' },
      { name: '🐴  '+data_user._user[index_user].perco_nbr + '/'+ data_user._user[index_user].perco_max, value: '**🗡️  ATQ  [' + data_user._user[index_user].attack_nbr+ ']** ', inline: true },
      { name: '**🛡️  DEF  [' + data_user._user[index_user].perco_defence_nbr+ ']**', value: '💰 '+ data_user._user[index_user].kamas_waiting, inline: false }
    )
    .addFields( 
        {
            name : 'Succès !', value: tmp_txt
        }
    )
    message.channel.send(exampleEmbed);
}
exports.fun_profil = fun_profil;







