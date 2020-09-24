const Discord = require('discord.js');
const client = new Discord.Client();
data_guilde = require('../structjson/guild.json');
const fs = require('fs');
mkdir = require('../mkdir');
let channel_s;
function bot_to_data_guild(message)
{
    let path = __dirname + '/../Save/data_guild/';
    fs.readdir(path, (err, files) => {
           for(let i = 0; i < files.length - 1; i++)
           {
                // ================================SAUVEGARDE DES DONNEES DES GUILDES================================
                 // ================================================================================================================================

               channel_s = message.guild.channels.cache.find(Collection => Collection.id == data_guilde.channel_général[i]);
               channel_s.send('🌙  **Sauvegarde en cours...**\n\n> **Données de la guilde !**');

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
                fs.writeFileSync(path + data_guilde.name_guild[i] + '/channel_command_staff.txt',  data_guilde.channel_command_staff[i], (err)=>{if (err) console.log("An error happened");});
                fs.writeFileSync(path + data_guilde.name_guild[i] + '/channel_terminal.txt',  data_guilde.channel_terminal[i], (err)=>{if (err) console.log("An error happened");});
                fs.writeFileSync(path + data_guilde.name_guild[i] + '/nbr_total_star.txt',  data_guilde.nbr_total_star[i], (err)=>{if (err) console.log("An error happened");});
                fs.writeFileSync(path + data_guilde.name_guild[i] + '/category_guild.txt',  data_guilde.category_guild[i], (err)=>{if (err) console.log("An error happened");});
                channel_s.send('🌙  Sauvegarde de la guilde **'+ data_guilde.name_guild[i] +'** fini !');
                
                // ================================SAUVEGARDE DES DONNEES DES GUILDES================================
                // ================================================================================================================================
                
           }
       });
}
exports.bot_to_data_guild = bot_to_data_guild;