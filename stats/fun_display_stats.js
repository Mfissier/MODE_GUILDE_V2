const Discord = require('discord.js');
const { fun_gestion_xp_usr } = require('../commands/Fun/fun_gestion_xp_usr');
const { fun_index_users } = require('../commands/Fun/fun_index_users');
const { fun_gestion_stats } = require('./fun_gestion_stats');
const client = new Discord.Client();
data_user = require('../data/structjson/user.json');
data_guilde = require('../data/structjson/guild.json');
data_syst = require('../data/structjson/all_systeme.json');
data_atq = require('../data/structjson/attaque.json');
data_ladder = require('../data/structjson/ladder.json');
data_display_finance = require('../data/structjson/display_pos_perco.json');
data_pos = require('../data/structjson/pos.json');
function dateDiffInDays(a, b) {
    // Discard the time and time-zone information.
    var _MS_PER_DAY = 1000 * 60 * 60 * 24;
    var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  
    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}
async function fun_display_stats(client, statue) { 
    let channel_Global_id;
    let channel_Guildes_id;
    let channel_Ladder_id;
    let channel_Finance_id;
    let statue_write = false;
    let new_msg;
    // "id_messages_stats_guildes": [],
    // "id_messages_stats_global" : "",
    // "id_messages_stats_ladder" : ""
    // new_msg = await client.channels.cache.find(elem => elem.id == "840554202526908437").send("test");
    // data_ladder.id_messages_stats_guildes.push(new_msg.id);
    return;
    if (!statue) {    
        if (data_ladder.id_messages_stats_ladder) {
            setTimeout(fun_display_stats, 60000*60, client);
            statue_write = true;
        } else {
            statue_write = false;
            setTimeout(fun_display_stats, 20000, client);
        } 
    } else {
        statue_write = true;
    }
    if (data_guilde._guild.length > 1) {
        channel_Global_id = await client.channels.cache.find(elem => elem.id == data_syst.Global_id);
        channel_Guildes_id = await client.channels.cache.find(elem => elem.id == data_syst.Guildes_id);
        channel_Ladder_id = await client.channels.cache.find(elem => elem.id == data_syst.Ladder_id);
        channel_Finance_id = await client.channels.cache.find(elem => elem.id == data_syst.Finances_id);
        fun_gestion_stats();
        for (let i = 0; i < data_guilde._guild.length - 1; i++) {
            if (data_guilde._guild[i].guild.length > 10){
                if (statue_write == false) {
                new_msg = await channel_Guildes_id.send("\
`STATISTIQUES DE LA GUILDE` <@&"+ data_guilde._guild[i].guild +">\n\
```NOMBRE TOTAUX```\
**[Membres] = **"+ data_guilde._guild[i].nbr_de_membre +"\n\
**[:star: = **"+ data_guilde._guild[i].nbr_total_star +"\n\
**[Likes] = **"+ data_guilde._guild[i].like_all_users +"\n\
**[Donjons] = **"+ data_guilde._guild[i].donjon_all +"\n\
**[Defenses] = **"+ data_guilde._guild[i].defense_all +"\n\
**[Attaques] percepteur = **"+ data_guilde._guild[i].attack_all +" \n\
**[Percepteur] trouvés = **"+ data_guilde._guild[i].search_perco +"\n\
**[Skin/Stuff] fabriqués = **"+ data_guilde._guild[i].skin_all +"\n\
**[Don de ** :star:] = "+ data_guilde._guild[i].don_all +"\n\
**[Vol] **"+ data_guilde._guild[i].vol_all +"\n\
``` TOP MEMBRE GUILDE ```\
**[:star: max] =** <@!"+ data_guilde._guild[i].best_stars_membre +">\n\
**[Attaques percepteur] =** <@!"+ data_guilde._guild[i].best_attaq_member +">\n\
**[Defenses percepteur] =** <@!"+ data_guilde._guild[i].best_def_member +">\n\
**[Skin/stuff fabriqués] =** <@!"+ data_guilde._guild[i].best_skinner_member +">\n\
**[!Like]** = <@!"+ data_guilde._guild[i].best_likeur_member +">\n\
**[Le plus !like]** = <@!"+ data_guilde._guild[i].best_like_me_member +">\n\
**[Percepteur trouvés]** = <@!"+ data_guilde._guild[i].best_search_perco_member +">\n\
**[Vol]** = <@!"+ data_guilde._guild[i].best_vol_member +">\n\
**[Donjons]** = <@!"+ data_guilde._guild[i].best_espion_member +">\n\
**[Recrutement]** = <@!"+ data_guilde._guild[i].best_recruteur +">\n\
``` __________________________________ ```\n\
");
    await data_ladder.id_messages_stats_guildes.push(new_msg.id);
new_msg = await channel_Finance_id.send("\
`FINANCE DE LA GUILDE` <@&"+ data_guilde._guild[i].guild +">\n\
``` __________________________________ ```\n\
**COFFRE** = "+ data_guilde._guild[i].coffre_guild +"\n\
**Total de** :star: = "+ data_guilde._guild[i].nbr_total_star +"\n\
**Kamas/**:star: = "+ data_guilde._guild[i].value_stars +"\n\
**Recompenses** = "+ data_guilde._guild[i].recompenses +"\n\
``` __________________________________ ```\n\
");
    await data_ladder.id_messages_stats_finance.push(new_msg.id);
                    
                } else {
    await client.channels.cache.find(elem => elem.id == data_syst.Guildes_id).messages.cache.find(elem => elem.id == data_ladder.id_messages_stats_guildes[i]).edit("\
`STATISTIQUES DE LA GUILDE` <@&"+ data_guilde._guild[i].guild +">\n\
```NOMBRE TOTAUX```\
**[Membres] = **"+ data_guilde._guild[i].nbr_de_membre +"\n\
**[:star: = **"+ data_guilde._guild[i].nbr_total_star +"\n\
**[Likes] = **"+ data_guilde._guild[i].like_all_users +"\n\
**[Donjons] = **"+ data_guilde._guild[i].donjon_all +"\n\
**[Defenses] = **"+ data_guilde._guild[i].defense_all +"\n\
**[Attaques] percepteur = **"+ data_guilde._guild[i].attack_all +" \n\
**[Percepteur] trouvés = **"+ data_guilde._guild[i].search_perco +"\n\
**[Skin/Stuff] fabriqués = **"+ data_guilde._guild[i].skin_all +"\n\
**[Don de ** :star:] = "+ data_guilde._guild[i].don_all +"\n\
**[Vol] **"+ data_guilde._guild[i].vol_all +"\n\
``` TOP MEMBRE GUILDE ```\
**[:star: max] =** <@!"+ data_guilde._guild[i].best_stars_membre +">\n\
**[Attaques percepteur] =** <@!"+ data_guilde._guild[i].best_attaq_member +">\n\
**[Defenses percepteur] =** <@!"+ data_guilde._guild[i].best_def_member +">\n\
**[Skin/stuff fabriqués] =** <@!"+ data_guilde._guild[i].best_skinner_member +">\n\
**[!Like]** = <@!"+ data_guilde._guild[i].best_likeur_member +">\n\
**[Le plus !like]** = <@!"+ data_guilde._guild[i].best_like_me_member +">\n\
**[Percepteur trouvés]** = <@!"+ data_guilde._guild[i].best_search_perco_member +">\n\
**[Vol]** = <@!"+ data_guilde._guild[i].best_vol_member +">\n\
**[Donjons]** = <@!"+ data_guilde._guild[i].best_espion_member +">\n\
**[Recrutement]** = <@!"+ data_guilde._guild[i].best_recruteur +">\n\
``` __________________________________ ```\n\
");         
await client.channels.cache.find(elem => elem.id == data_syst.Finances_id).messages.cache.find(elem => elem.id == data_ladder.id_messages_stats_finance[i]).edit("\
`FINANCE DE LA GUILDE` <@&"+ data_guilde._guild[i].guild +">\n\
``` __________________________________ ```\n\
**COFFRE** = "+ data_guilde._guild[i].coffre_guild +"\n\
**Total de** :star: = "+ data_guilde._guild[i].nbr_total_star +"\n\
**Kamas/**:star: = "+ data_guilde._guild[i].value_stars +"\n\
**Recompenses** = "+ data_guilde._guild[i].recompenses +"\n\
``` __________________________________ ```\n\
");
                }
            }
        }

        if (statue_write == false) {
           new_msg = await channel_Global_id.send("\
```STATISTIQUE TOTAL```\n\
 **[Membres]** = "+ data_syst.nbr_total_membre +"\n\
 **[ :star: ]** = "+ data_syst.nbr_total_star +"\n\
 **[!like]** = "+ data_syst.like_all_users_guild +"\n\
 **[Donjons]** = "+ data_syst.donjon_all +"\n\
 **[Defenses]** = "+ data_syst.defense_all +"\n\
 **[Attaques]** = "+ data_syst.attack_all +"\n\
 **[Percepteur trouvés]** = "+ data_syst.search_perco_all +"\n\
 **[Skin/Stuff]** = "+ data_syst.skin_all +"\n\
 **[Don]** = "+ data_syst.don_all +"\n\
 **[Vol]** = "+ data_syst.vol_all +"\n\
 ");
            data_ladder.id_messages_stats_global = await new_msg.id;
            new_msg = await channel_Ladder_id.send("\
```TOP PLAYER !```\n\
 **[ :star: ]** = <@!"+data_syst.best_stars_membre+">\n\
 **[ Attaquant ]** = <@!"+data_syst.best_attaq_member+">\n\
 **[ Defenseur ]** = <@!"+data_syst.best_def_member+">\n\
 **[ Skin/Stuff ]** = <@!"+data_syst.best_skinner_member+">\n\
 **[ !like ]** = <@!"+data_syst.best_likeur_member+">\n\
 **[ Plus apprécié <3 ]** = <@!"+data_syst.best_like_me_member+">\n\
 **[ Percepteur trouvés ]** = <@!"+data_syst.best_search_perco_member+">\n\
 **[ Voleur ]** = <@!"+data_syst.best_vol_member+">\n\
 **[ Donjons ]** = <@!"+data_syst.best_espion_member+">\n\
 **[ Recruteur ]** = <@!"+data_syst.best_recruteur+">\n\
 ");
            data_ladder.id_messages_stats_ladder = await new_msg.id;
        } else {
            await client.channels.cache.find(elem => elem.id == data_syst.Global_id).messages.cache.find(elem => elem.id == data_ladder.id_messages_stats_global).edit("\
            ```STATISTIQUE TOTAL```\n\
             **[Membres]** = "+ data_syst.nbr_total_membre +"\n\
             **[ :star: ]** = "+ data_syst.nbr_total_star +"\n\
             **[!like]** = "+ data_syst.like_all_users_guild +"\n\
             **[Donjons]** = "+ data_syst.donjon_all +"\n\
             **[Defenses]** = "+ data_syst.defense_all +"\n\
             **[Attaques]** = "+ data_syst.attack_all +"\n\
             **[Percepteur trouvés]** = "+ data_syst.search_perco_all +"\n\
             **[Skin/Stuff]** = "+ data_syst.skin_all +"\n\
             **[Don]** = "+ data_syst.don_all +"\n\
             **[Vol]** = "+ data_syst.vol_all +"\n\
             ");
            await client.channels.cache.find(elem => elem.id == data_syst.Ladder_id).messages.cache.find(elem => elem.id == data_ladder.id_messages_stats_ladder).edit("\
            ```TOP PLAYER !```\n\
             **[ :star: ]** = <@!"+data_syst.best_stars_membre+">\n\
             **[ Attaquant ]** = <@!"+data_syst.best_attaq_member+">\n\
             **[ Defenseur ]** = <@!"+data_syst.best_def_member+">\n\
             **[ Skin/Stuff ]** = <@!"+data_syst.best_skinner_member+">\n\
             **[ !like ]** = <@!"+data_syst.best_likeur_member+">\n\
             **[ Plus apprécié <3 ]** = <@!"+data_syst.best_like_me_member+">\n\
             **[ Percepteur trouvés ]** = <@!"+data_syst.best_search_perco_member+">\n\
             **[ Voleur ]** = <@!"+data_syst.best_vol_member+">\n\
             **[ Donjons ]** = <@!"+data_syst.best_espion_member+">\n\
             **[ Recruteur ]** = <@!"+data_syst.best_recruteur+">\n\
             ");
        }
    }    
    
}
async function fun_display_perco(client, statue) { 
    let channel_pos_perco;
    let tmp_txt = "";
    let txt = "";
    if (!statue) {    
        if (data_display_finance._id_msg.length >= 1) {
            setTimeout(fun_display_perco, 60000*30, client);
            statue_write = true;
            console.log("statue_write = " + statue_write);

        } else {
            statue_write = false;
            console.log("statue_write = " + statue_write);
            setTimeout(fun_display_perco, 20000, client);
        } 
    } else {
        statue_write = true;
    }
    if (data_display_finance._display_finance.length == 0)
        data_display_finance._display_finance.push("");
    console.log(data_display_finance._display_finance.length);
    let time;
    let new_time = new Date();
    let time_txt = "";
    let index_display = 0;
    for (let i = data_display_finance._display_finance.length -1 ; i >= 0; i--) {
        data_display_finance._display_finance.splice(0, 1);
    }
    data_display_finance._display_finance.push("");
    for (let i = 0; i < data_pos._POS_PERCO.length; i++) {
        if (data_pos._POS_PERCO[i].name.length > 2) {
            time = new_time - new Date(data_pos._POS_PERCO[i].day);
            if (time / 1000 < 60) {
                time_txt = "secondes";
                time = Math.round(time / 1000);
            } else if (time / 60000 < 60){
                time_txt  = "minutes";
                time = Math.round(time / 60000);
            } else {
                time_txt  = "heure";
                time = Math.round(time / 60000 * 60);
            }
            txt =  "Percepteur de l'Alliance **`"+ data_pos._POS_PERCO[i].name +"`** d'une valeur de **"+ data_pos._POS_PERCO[i].butin +" kamas**, a été trouvé ("+ data_pos._POS_PERCO[i].find +" fois) en **"+ data_pos._POS_PERCO[i].pos +"** (*il y a :"+ time +" "+ time_txt +"*)\n";
            if (txt.length + data_display_finance._display_finance[index_display].length < 1800) {
                data_display_finance._display_finance[index_display] += txt;
            } else {
                data_display_finance._display_finance.push(txt);
                index_display += 1;
            }
            console.log(data_display_finance._display_finance[index_display]);
        }
    }
   
    channel_pos_perco = await client.channels.cache.find(elem => elem.id == data_syst.Staff_coa_pos_perco_id);
    if (!channel_pos_perco)
        return;
    let new_msg;
    if (statue_write == false) {
        for (let i = 0;  i < data_display_finance._display_finance.length; i++) {
            if (data_display_finance._display_finance[i].length > 1) {
                new_msg = await channel_pos_perco.send(data_display_finance._display_finance[i]);
                await data_display_finance._id_msg.push(new_msg.id);
            }      
        }
    } else  {
        for (let i = 0;  i < data_display_finance._display_finance.length; i++) {
                
                if (data_display_finance._id_msg.length -1 < i ) {
                    new_msg = await channel_pos_perco.send(data_display_finance._display_finance[i]);
                    await data_display_finance._id_msg.push(new_msg.id);
                } else {
                    await client.channels.cache.find(elem => elem.id == data_syst.Staff_coa_pos_perco_id).messages.cache.find(elem => elem.id == data_display_finance._id_msg[i]).edit(data_display_finance._display_finance[i]);
                }
        }
    }
    console.log(data_display_finance);
}
exports.fun_display_stats = fun_display_stats;
exports.fun_display_perco = fun_display_perco;