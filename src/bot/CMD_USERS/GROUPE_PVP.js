const Discord = require('discord.js');
const { Collection } = require('mongoose');
const  GESTION_GRADE  = require('./GESTION_GRADE.JS');
const SEARCH_INDEX_GUILD  = require('./SEARCH_INDEX_GUILD.JS');
const client = new Discord.Client();
data_user = require('../data/structjson/user.json');
data_guilde = require('../data/structjson/guild.json');
data_perco = require('../data/structjson/perco.json');


async function GROUPE_PERCO(message)
{
    args = message.content.split(/ +/g);
    member_cmd = message.member.user;
    all_mention = message.mentions.users.map(ClientUser => ClientUser.id);
    let nbr_inscrit = 0;
    let nbr_total_valide = 0;
    //CREATE OR NOT GROUPE;
    for (let i = 0; i < data_perco.PVP_PERCO.length; i++)
    {
        if (data_perco.PVP_PERCO[i].PVP_PERCO_STATUE == true || data_perco.PVP_PERCO[i].statue == true)
        {
            if (data_perco.PVP_PERCO[i].membre_perco_id.find(Element => Element == member_cmd.id))
            {
                message.channel.send('🤖 Vous faites déjà partie d\'un autre groupe !');
                return;
            }
            if (data_perco.PVP_PERCO[i].membre_perco_valide_id.find(Element => Element == member_cmd.id))
            {
                message.channel.send('🤖 Vous faites déjà partie d\'un autre groupe !');
                return;
            }
        }
    }
    console.log
    if(data_perco.PVP_PERCO.length == 0)
    {
        new_object = Object.assign({},data_perco.PVP_PERCO[0]);
        data_perco.PVP_PERCO.push(new_object);
    }
    for (i = 1; i < data_perco.PVP_PERCO.length; i++)
    {
        if (data_perco.PVP_PERCO[i].PVP_PERCO_STATUE == true && data_perco.PVP_PERCO[i].groupe_perco_id_chef == member_cmd.id)
        {
            message.channel.send('🤖 **Vous appartenez déjà à un groupe !**');
            return;
        }
    }
    new_object = Object.assign({},data_perco.PVP_PERCO[0]);
    data_perco.PVP_PERCO.push(new_object);
    data_perco.PVP_PERCO[data_perco.PVP_PERCO.length - 1].PVP_PERCO_STATUE = true;
    data_perco.PVP_PERCO[data_perco.PVP_PERCO.length - 1].groupe_perco_id_chef= member_cmd.id;
    if (!all_mention.length)
    {
        data_perco.PVP_PERCO[data_perco.PVP_PERCO.length - 1].reservation_status = false;
        sent = await message.channel.send("**🚨GROUPE_PVP CREER PAR  <@!"+ member_cmd.id +"> 🚨** \n\n\
▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️\n\
**❓❓❓En attente de joueurs ❓❓❓**\n\
▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️\n\
**__Il reste 0/5 places !__**\n\n\
**Pouvoir du chef de groupe  👑 <@!"+ member_cmd.id +"> **\n\
▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️\n\
> 🆗 **pour valider le groupe** \n\
> 🚫 **pour supprimer ce groupe** \n\
▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️\n\n\
**Ce groupe est ouvert à tout le monde ** 🏴‍☠️\n\
> ✅ **Pour s'inscrire ! **\n\
> ❎ **Pour vous desinscrire !  **\n\
");
    } 
    else {
        let description = [];    
        data_perco.PVP_PERCO[data_perco.PVP_PERCO.length - 1].reservation_status = true;
        for (let i = 0; i < all_mention.length; i++)
            description.push('<@!'+all_mention[i] + '> : [ :x: ]\n');
            sent = await message.channel.send("**🚨GROUPE_PVP CREER PAR  <@!"+ member_cmd.id +"> 🚨** \n\n\
▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️\n\
"+description+"\
▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️\n\
**__Il reste 0/"+ all_mention.length +" places !__**\n\n\
**Pouvoir du chef de groupe  👑 <@!"+ member_cmd.id +"> **\n\
▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️\n\
> 🆗 **pour valider le groupe** \n\
> 🚫 **pour annuler la demande de groupe** \n\
▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️\n\n\
**Ce groupe est réservé uniquement aux membres mentionnés...\n\
> **✅ Pour s'inscrire ! **\n\
> **❎ Pour vous desinscrire !  **\n\
");
        data_perco.PVP_PERCO[data_perco.PVP_PERCO.length - 1].membre_perco_id = Object.assign([], all_mention);
        console.log(data_perco.PVP_PERCO[data_perco.PVP_PERCO.length - 1].membre_perco_id);
    }  
    let id = await sent.id;
    let n_message = await message.channel.messages.cache.find(Collection => Collection.id == id);
    data_perco.PVP_PERCO[data_perco.PVP_PERCO.length - 1].id_groupe_message = await Object.assign(id);
    for (i = 1; i < data_perco.PVP_PERCO.length; i++)   
    {
        console.log('data i => ');
        console.log("data_perco.PVP_PERCO[i].PVP_PERCO_STATUE = "+ data_perco.PVP_PERCO[i].PVP_PERCO_STATUE + "\n\
        data_perco.PVP_PERCO[i].statue = " +data_perco.PVP_PERCO[i].statue  + "\n\
        data_perco.PVP_PERCO[i].delete = "+ data_perco.PVP_PERCO[i].delete + "\n\
        (data_perco.PVP_PERCO[i].id_groupe_message == reaction.message.id)" + data_perco.PVP_PERCO[i].id_groupe_message);
        console.log("data_perco.PVP_PERCO[i].membre_perco_id => " + data_perco.PVP_PERCO[i].membre_perco_id);
    }
    let data_perco_valide_id = [];
    data_perco.PVP_PERCO[data_perco.PVP_PERCO.length - 1].membre_perco_valide_id = Object.assign(data_perco_valide_id);
    await n_message.react("✅");
    await n_message.react("❎");
    await n_message.react("🆗");
    await n_message.react("🚫");
}
/*
"PVP_PERCO" : [{
    "id_groupe_message" : "", ok
    "groupe_perco_id_chef" : "", ok
    "PVP_PERCO_STATUE" : false, 
    "membre_perco_id" : [], ok
    "reservation_status" : false, ok
    "membre_perco_valide_id" : [],
    "delete_group" : false, 
    "time_create" : "",
    "time_for_valid" : "",
    "ATQ_STATUE" : false,
    "WIN_LOST" : ""
*/
exports.GROUPE_PERCO = GROUPE_PERCO;