const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const { NaN } = require('mathjs');
const { measureMemory } = require('vm');
const data_syst = require('../../../data/structjson/all_systeme.json');
const data_guild = require('../../../data/structjson/guild.json');
const data_user = require('../../../data/structjson/user.json');
const { fun_index_users } = require('../../Fun/fun_index_users');
//DEFINE PERMISSION FLAG
    const flag_ok = [
        'VIEW_CHANNEL', 
        'SEND_MESSAGES',
        'READ_MESSAGE_HISTORY',
        'ADD_REACTIONS',
        'ATTACH_FILES',
        'USE_EXTERNAL_EMOJIS'
    ]
    const flag_delete = [
        'VIEW_CHANNEL'
    ]
    const flag_ok_vocal = [
        'VIEW_CHANNEL', 
        'CONNECT',
        'SPEAK',
        'USE_VAD'
    ]
//DEFINE PERMISSION FLAG
async function fun_guild_create(message, command) {
    /* 
       ARGS[1] : name_of_guilde
       ARGS[2] : mention_meneur
       ARGS[3] : finance z
    */
    let finance;
    let mention_meneur;
    let name_of_guild;

    let role_meneur;
    let role_bras_droit;
    let role_conseiller;
    let role_guilde;
    let index_user;
    let take_channel;

    const path = __dirname + "/../../data/Save/data_guild";
    if (command.length != 4)
        return(message.channel.send("🤖 **Il manque des arguments pour cette commandes**"));
    finance = parseInt(command[3], 10);
    if (!finance)
        return(message.channel.send("🤖 **(3) Il y a un problème avec les finances**"));
    if (!message.mentions.users.first())
        return(message.channel.send("🤖 **(2) Aucun Meneur n\'a été mentionné !**"));

    name_of_guild = await command[1];
    finance = finance;
    mention_meneur = await message.mentions.users.first();
    index_user = fun_index_users(mention_meneur.id);
    message.mentions.users.first().roles.remove(data_user._user[index_user].rang_guild);
    //-----Creation de la data-----
    let new_object; 
    let role_staff;
    let index_guild = -1;

    try{
        for (let i = 0; i < data_guild._guild.length; i++)
        {
            if (data_guild._guild[i].name_guild == name_of_guild)
            {
                if (data_guild._guild[i].delete_statue == true){
                    index_guild = i;
                    data_guild._guild[i].delete_statue = false;
                }
                break;
            }
        }
        if (index_guild == -1) {
            new_object = Object.assign({},data_guild._guild[0]);
            data_guild._guild.push(new_object);
            index_guild = data_guild._guild.length - 1;
        }


        //PREMIERE FONCTION OK !
        role_staff = await message.guild.roles.cache.find(elem => elem.id == data_syst.STAFF_ID);
        role_meneur = await message.guild.roles.create({data: {name:  '━━━〘𝐌𝐞𝐧𝐞𝐮𝐫𝐬〙━━━━', color: 'RED', hoist : true, mentionable: true,  ADMINISTRATOR : false}, reason: 'Create '});
        await role_meneur.permissions.remove('VIEW_CHANNEL');
        role_bras_droit = await message.guild.roles.create({data: {name: '━━━〘𝐁𝐫𝐚𝐬 𝐃𝐫𝐨𝐢𝐭𝐬〙━━━━' , color: 'RED', hoist : true, mentionable: true,  ADMINISTRATOR : false}, reason: 'Create '});
        await role_bras_droit.permissions.remove('VIEW_CHANNEL');
        role_conseiller = await message.guild.roles.create({data: {name: '━━━〘𝐂𝐨𝐧𝐬𝐞𝐢𝐥𝐥𝐞𝐫𝐬〙━━━━', color: 'RED', hoist : true, mentionable: true,  ADMINISTRATOR : false}, reason: 'Create '});
        await role_conseiller.permissions.remove('VIEW_CHANNEL');
        role_guilde = await message.guild.roles.create({data: {name: '[' + name_of_guild.toUpperCase() + ']', color: 'RED', hoist : true, mentionable: true,  ADMINISTRATOR : false}, reason: 'Create '});
        await role_guilde.permissions.remove('VIEW_CHANNEL');

        data_guild._guild[index_guild].name_guild = await name_of_guild;
        data_guild._guild[index_guild].rolemeneur = await role_meneur.id;
        data_guild._guild[index_guild].brasdroit = await role_bras_droit.id;
        data_guild._guild[index_guild].conseiller = await role_conseiller.id;
        data_guild._guild[index_guild].guild = await role_guilde.id;
        data_user._user[index_user].rang_guild = await role_guilde.id;
        data_guild._guild[index_guild].staff = await role_staff.id;

        console.log(data_guild._guild[index_guild].rolemeneur);
        console.log(data_guild._guild[index_guild].brasdroit);
        console.log(data_guild._guild[index_guild].conseiller);
        console.log(data_guild._guild[index_guild].guild);

        await   message.member.guild.members.cache.find(Collection => Collection.id === mention_meneur.id).roles.add(role_meneur);
        await   message.member.guild.members.cache.find(Collection => Collection.id === mention_meneur.id).roles.add(role_guilde);
        await   message.member.guild.members.cache.find(Collection => Collection.id === mention_meneur.id).roles.add(role_staff);
//------------CREATE CHANNEL FOR GUILDE------------
//  Categorie 『🏆』𝐒𝐭𝐚𝐟𝐟 𝐓𝐫𝐚𝐯𝐚𝐮𝐱
    /*
        『💌』𝐒𝐭𝐚𝐟𝐟-𝐌𝐢𝐬𝐬𝐢𝐨𝐧
        『🕜』𝐋𝐨𝐠𝐬
        『💾』𝐑𝐞𝐩𝐨𝐫𝐭-𝐋𝐨𝐠𝐬
        『🤖』𝐂𝐌𝐃
        『💬』𝐂𝐡𝐚𝐭-𝐒𝐭𝐚𝐟𝐟
        『🍻』𝐂𝐡𝐚𝐭
         Mise dans categorie général ;
        『💌』𝐃𝐢𝐬𝐜𝐮𝐬𝐬𝐢𝐨𝐧
    */
//------------------------------------------------

        await   message.guild.channels.create(name_of_guild, {type: 'category'});
        data_guild._guild[index_guild].Categorie_guild_id = await message.guild.channels.cache.find(Collection => Collection.name == name_of_guild).id;
        take_channel = await message.guild.channels.create(data_guild._guild[index_guild].channel_staff_mission_name, { reason: 'new_channels', permissionOverwrites: [
            {
                id : role_meneur.id,
                allow : flag_ok
            },
            {
                id : role_bras_droit.id,
                allow : flag_ok
            },
            {
                id : role_conseiller.id,
                allow : flag_ok           
            },
            {
                id : role_guilde.id,
                deny : flag_delete
            },
        ], parent: data_guild._guild[index_guild].Categorie_guild_id});
        data_guild._guild[index_guild].channel_staff_mission_id = await take_channel.id;
        take_channel = await message.guild.channels.create(data_guild._guild[index_guild].channel_staff_logs_name, { reason: 'new_channels', permissionOverwrites: [
            {
                id : role_meneur.id,
                allow : flag_ok
            },
            {
                id : role_bras_droit.id,
                allow : flag_ok
            },
            {
                id : role_conseiller.id,
                allow : flag_ok           
            },
            {
                id : role_guilde.id,
                deny : flag_delete
            },
        ], parent: data_guild._guild[index_guild].Categorie_guild_id});
        data_guild._guild[index_guild].channel_staff_logs_id = await take_channel.id;
        take_channel = await message.guild.channels.create(data_guild._guild[index_guild].channel_Report_logs_name, { reason: 'new_channels', permissionOverwrites: [
            {
                id : role_meneur.id,
                allow : flag_ok
            },
            {
                id : role_bras_droit.id,
                allow : flag_ok
            },
            {
                id : role_conseiller.id,
                allow : flag_ok           
            },
            {
                id : role_guilde.id,
                deny : flag_delete
            },
        ],  parent: data_guild._guild[index_guild].Categorie_guild_id});
        data_guild._guild[index_guild].channel_Report_logs_id = await take_channel.id;
        take_channel = await message.guild.channels.create(data_guild._guild[index_guild].channel_cmd_name, { reason: 'new_channels', permissionOverwrites: [
            {
                id : role_meneur.id,
                allow : flag_ok
            },
            {
                id : role_bras_droit.id,
                allow : flag_ok
            },
            {
                id : role_conseiller.id,
                allow : flag_ok           
            },
            {
                id : role_guilde.id,
                deny : flag_delete
            },
        ],  parent: data_guild._guild[index_guild].Categorie_guild_id});
        data_guild._guild[index_guild].channel_cmd_id = await take_channel.id;
        take_channel = await message.guild.channels.create(data_guild._guild[index_guild].chat_staff_name, { reason: 'new_channels', permissionOverwrites: [
            {
                id : role_meneur.id,
                allow : flag_ok
            },
            {
                id : role_bras_droit.id,
                allow : flag_ok
            },
            {
                id : role_conseiller.id,
                allow : flag_ok           
            },
            {
                id : role_guilde.id,
                deny : flag_delete
            },
        ],  parent: data_guild._guild[index_guild].Categorie_guild_id});
        data_guild._guild[index_guild].chat_staff_id = await take_channel.id;
        take_channel = await message.guild.channels.create(data_guild._guild[index_guild].Vocal_staff_name,  {type: 'voice', permissionOverwrites: [
            {
                id : role_meneur.id,
                allow : flag_ok_vocal
            },
            {
                id : role_bras_droit.id,
                allow : flag_ok_vocal
            },
            {
                id : role_conseiller.id,
                allow : flag_ok_vocal           
            },
            {
                id : role_guilde.id,
                deny : flag_delete
            },
        ],  parent : data_guild._guild[index_guild].Categorie_guild_id});
        data_guild._guild[index_guild].Vocal_staff_id = await take_channel.id;
        take_channel = await message.guild.channels.create('『💌』' + data_guild._guild[index_guild].name_guild, { reason: 'new_channels', permissionOverwrites: [
            {
                id : role_meneur.id,
                allow : flag_ok
            },
            {
                id : role_bras_droit.id,
                allow : flag_ok
            },
            {
                id : role_conseiller.id,
                allow : flag_ok           
            },
            {
                id : role_guilde.id,    
                allow : flag_ok
            },
        ],   parent: data_syst.Categorie_général_id});
        data_guild._guild[index_guild].channel_discussion_id = await take_channel.id;
        let take_channel_annonce =  message.guild.channels.cache.find(Collection => Collection.id == data_syst.Annonces_id);
        take_channel_annonce.send('@everyone\n\
**Bienvenue à la guilde '+ data_guild._guild[index_guild].name_guild +'** 🤖\n\
> Meneur <@!'+ mention_meneur.id +'>');
        mention_meneur.send('**Bienvenue dans la coalition !**\n\
> Il te faudra choisir les membres de ton équipe (Bras Droit et Conseiller) !\n\
> Tu es dans l\'obligation de payer les récompenses de tes membres !\n\
> Si tu as besoin d\'en savoir plus, va dans le canal『🤖』𝐂𝐌𝐃-𝐒𝐭𝐚𝐟𝐟 (c\'est là où tu pourra utiliser pleinement tes pouvoirs de Meneur !) \n\
A très bientôt 🤖 !\
');
    } catch (error) {
        console.error(error);   
    }    

}
exports.fun_guild_create = fun_guild_create;

