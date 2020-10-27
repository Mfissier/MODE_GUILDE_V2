
const  DONJON  = require('../CMD_USERS/DONJON.JS');
const LIKE  = require('../CMD_USERS/LIKE.JS');
const STOLE_STARS = require('../CMD_USERS/STOLE_STARS.JS');
const ADD_USR_IN_GUILD  = require('./CMD_MENEUR/ADD_USR_IN_GUILD');
<<<<<<< HEAD
const ADD_RANG_MUSE = require('./CMD_MENEUR/ADD_RANG_MUSE');
const GROUPE_PERCO = require('../CMD_USERS/GROUPE_PVP');
const ATAQ_PERCO = require('../CMD_USERS/ATQ_PERCO');
const DISPLAY_FINANCE = require('../FINANCE_GUILD/DISPLAY_FINANCE');
const COFFRE_ADD = require('../FINANCE_GUILD/COFFRE_ADD');
const COFFRE_DELETE= require('../FINANCE_GUILD/COFFRE_DELETE');
const TRANSFERT = require('../FINANCE_GUILD/CMD_FINANCE/TRANSFERT.JS');
const PAYEMENT = require('../FINANCE_GUILD/CMD_FINANCE/PAYEMENT');
const START = require('../TUTORIEL/START');
const FAQ = require('../TUTORIEL/FAQ.JS');
const JESUIS = require('../TUTORIEL/JESUIS');
const write_in_tuto = require('../create_elem/write_in_tuto');
const BOUTIQUE_MANA = require('../BOUTIQUE/BOUTIQUE_MANA.js');
const BOUTIQUE_PERCO = require('../BOUTIQUE/BOUTIQUE_PERCO');
const BOUTIQUE_RANG_ESPION = require('../BOUTIQUE/BOUTIQUE_RANG_ESPION');
const BOUTIQUE_RANG_MOUSE = require('../BOUTIQUE/BOUTIQUE_RANG_MUSE');
const BOUTIQUE_RANG_PENITENT = require('../BOUTIQUE/BOUTIQUE_RANG_PENITENT');
const BOUTIQUE_RANG_RECRUTEUR = require('../BOUTIQUE/BOUTIQUE_RANG_RECRUTEUR');
const BOUTIQUE_RANG_TUEUR_DE_PERCEPTEUR = require('../BOUTIQUE/BOUTIQUE_RANG_TUEUR_DE_PERCEPTEUR');
const BOUTIQUE_BOX = require('../BOUTIQUE/BOUTIQUE_BOX');
const REPEAT_SAVE = require('./Repeat_save');
const DELETE_STARS = require('./CMD_MENEUR/DELETE_STARS');
const DON = require('../CMD_USERS/USR_DON');


=======
const ADD_BOX_BONUS = require('./CMD_MENEUR/ADD_BOX_BONUS');
const ADD_GRADE  = require('./CMD_MENEUR/ADD_GRADE');
const ADD_IMMU_PURGE  = require('./CMD_MENEUR/ADD_IMMU_PURGE');
const ADD_LIKE_BONUS = require('./CMD_MENEUR/ADD_LIKE_BONUS');
const ADD_MANA_MAX = require('./CMD_MENEUR/ADD_MANA_MAX');
const ADD_PERCO_MAX = require('./CMD_MENEUR/ADD_PERCO_MAX');
const ADD_PERCO_USR = require('./CMD_MENEUR/ADD_PERCO_USR');
const ADD_XP = require('./CMD_MENEUR/ADD_XP');
const DELETE_BOX_BONUS = require('./CMD_MENEUR/DELETE_BOX_BONUS');
const DELETE_IMMU_PURGE  = require('./CMD_MENEUR/DELETE_IMMU_PURGE');
const DELETE_LIKE_BONUS = require('./CMD_MENEUR/DELETE_LIKE_BONUS');
const DELETE_MANA_MAX = require('./CMD_MENEUR/DELETE_MANA_MAX');
const DELETE_PERCO_MAX = require('./CMD_MENEUR/DELETE_PERCO_MAX');
const DELETE_PERCO_USR = require('./CMD_MENEUR/DELETE_PERCO_USR');
const DELETE_STARS = require('./CMD_MENEUR/DELETE_STARS');
const DELETE_XP = require('./CMD_MENEUR/DELETE_XP');
const DELETE_GRADE  = require('./CMD_MENEUR/DELETE_GRADE');
const RELOAD_MANA = require('./CMD_MENEUR/RELOAD_MANA');
const RELOAD_MANA_ALL = require('./CMD_MENEUR/RELOAD_MANA_ALL');
const RESTART_BONUS_ALL = require('./CMD_MENEUR/RESTART_BONUS_ALL');
const CHANGE_USR_NAME = require('./CMD_MENEUR/CHANGE_USR_NAME');
>>>>>>> 4e084d383c8cd2a586ce34b4a9316ebec82c1165
PROFIL = require('../CMD_USERS/PROFIL');


const ADD_BOX_BONUS = require('./CMD_MENEUR/ADD_BOX_BONUS');
const ADD_IMMU_PURGE  = require('./CMD_MENEUR/ADD_IMMU_PURGE');
const ADD_LIKE_BONUS = require('./CMD_MENEUR/ADD_LIKE_BONUS');
const ADD_MANA_MAX = require('./CMD_MENEUR/ADD_MANA_MAX');
const ADD_PERCO_MAX = require('./CMD_MENEUR/ADD_PERCO_MAX');
const ADD_PERCO_USR = require('./CMD_MENEUR/ADD_PERCO_USR');
const ADD_GRADE  = require('./CMD_MENEUR/ADD_GRADE');
const ADD_XP = require('./CMD_MENEUR/ADD_XP');
const DELETE_BOX_BONUS = require('./CMD_MENEUR/DELETE_BOX_BONUS');
const DELETE_IMMU_PURGE  = require('./CMD_MENEUR/DELETE_IMMU_PURGE');
const DELETE_LIKE_BONUS = require('./CMD_MENEUR/DELETE_LIKE_BONUS');
const DELETE_MANA_MAX = require('./CMD_MENEUR/DELETE_MANA_MAX');
const DELETE_PERCO_MAX = require('./CMD_MENEUR/DELETE_PERCO_MAX');
const DELETE_PERCO_USR = require('./CMD_MENEUR/DELETE_PERCO_USR');
const DELETE_XP = require('./CMD_MENEUR/DELETE_XP');
const DELETE_GRADE  = require('./CMD_MENEUR/DELETE_GRADE');
const RELOAD_MANA = require('./CMD_MENEUR/RELOAD_MANA');
const RELOAD_MANA_ALL = require('./CMD_MENEUR/RELOAD_MANA_ALL');
const RESTART_BONUS_ALL = require('./CMD_MENEUR/RESTART_BONUS_ALL');
const CHANGE_USR_NAME = require('./CMD_MENEUR/CHANGE_USR_NAME');

const SPEAK_BOT = require('./SPEAK_BOT');
const CLEAR = require('./CLEAR.JS');


write_in_channel = require('../create_elem/write_in_channel');
close_and_restart_bot = require('../restart_and_close_bot');
test_data_to_discord = require('../test_data_to_discord');
channel_delete_mention = require('../create_elem/channel_delete_mention');
channel_all_delete = require('../create_elem/channel_all_delete');
FUN_CREATE_GUILDE = require('../create_elem/FUN_CREATOR_GUILDES');
roles_all_delete = require ('../create_elem/roles_all_delete');
data_to_bot_guild = require('../data/data_to_bot/data_to_bot_guild');
listen_data = require('../data/save_in_data_guild');
data_guild = require('../data/structjson/guild.json');
data_user = require('../data/structjson/user.json');
test = require('../test');
help = require('../help/help');
create_all_profil = require('../data/create_all_profil');


fun_add_start = require('./CMD_MENEUR/fun_add_stars');
data_admin = require('../data/structjson/all_systeme.json');

//==================Systeme de sauvegarde===================
bot_to_data_guild = require('../data/data_to_bot/bot_to_data_guild');

//==================Systeme de sauvegarde===================

// start_bot = require('./start_bot');
const listen_bot_message = (message, client) => {
    command = message.content.split(/ +/g);
    let role_cmd_member;
    if (message.guild.members.cache.find(Collection => Collection.id === message.member.user.id)._roles)
        role_cmd_member = message.member.guild.members.cache.find(Collection => Collection.id === message.member.user.id)._roles;
    let channel_history = message.guild.channels.cache.find(Element => Element.id == '765667491803430963');
    let ok_cmd_bd_meneur = 0;
for (let i = 0; i < data_guild.name_guild.length; i++)
{
    if ((role_cmd_member.find(element => element == data_guild.rolemeneur[i]) || role_cmd_member.find(element => element == data_guild.brasdroit[i])))
    { 
        ok_cmd_bd_meneur = 1;
        break;
    }
}
let member_roles_penitent = message.member._roles;
let role_ok_penitent = 0;
if (command[0][0]  == '!')
{
    let channel_s = message.guild.channels.cache.find(Element => Element == '765667491803430963');
    if (channel_s)
        channel_s.send('**Commande de ' + message.member.user.username +'**\n> '+ message.content + '\ncanal = <#'+ message.channel.id +'>');    
}
if (member_roles_penitent.find(element => element.name == 'PENITENT'))
{
    if (command[0][0] == '!')
        role_ok_penitent = 1;
}
        switch(command[0].toUpperCase()) {
            //*** COMMAND ADMINISTRATOR !        
            case '!REGISTER' : // delete...
                if (!data_admin.ADMIN.find(element => element == message.member.user.id) || !role_cmd_member)
                {
                     message.channel.send('🤖 Vous n\'êtes pas autorisé à utiliser cette command.');
                     return;
                }
                console.log('Command register data')
                data_to_bot_guild.data_to_bot(message);
                message.delete({timeout: 3000});
                return;
            break;
            case '!LOCK_CMD' :
            if (!data_admin.ADMIN.find(element => element == message.member.user.id) && role_cmd_member)
            {
                message.channel.send('🤖 Vous n\'êtes pas autorisé à utiliser cette command.');
                break;
            }
            data_admin.LOCK_BOT = true;
                message.delete({timeout: 3000}); 
                return;
            break;
            case '!UNLOCK_CMD' :
            if (!data_admin.ADMIN.find(element => element == message.member.user.id) && role_cmd_member)
            {
                message.channel.send('🤖 Vous n\'êtes pas autorisé à utiliser cette command.');
                break;
            }
            data_admin.LOCK_BOT = false;
                message.delete({timeout: 3000}); 
                return;
            break;
            case '!SPEAK_BOT' :
                if (!data_admin.ADMIN.find(element => element == message.member.user.id) || !role_cmd_member)
                {
                     message.channel.send('🤖 Vous n\'êtes pas autorisé à utiliser cette command.');
                     return;
                }
                SPEAK_BOT.SPEAK_BOT(message);
                message.delete({timeout: 3000});
                return;
            break;
            case '!COFFRE_ADD' : 
            if (!data_admin.ADMIN.find(element => element == message.member.user.id)|| !role_cmd_member)
            {
                 message.channel.send('🤖 Vous n\'êtes pas autorisé à utiliser cette command.');
                 break;
            }
            COFFRE_ADD.COFFRE_ADD(message);
            message.delete({timeout: 3000});
            return;
            break
            case '!COFFRE_DELETE' : // delete...
            if (!data_admin.ADMIN.find(element => element == message.member.user.id) && role_cmd_member)
            {
                 message.channel.send('🤖 Vous n\'êtes pas autorisé à utiliser cette command.');
                 break;
            }
            COFFRE_DELETE.COFFRE_DELETE(message);
            message.delete({timeout: 3000});
            return;
            break;

            case '!CHANNELS_BIO':
                if (!data_admin.ADMIN.find(element => element == message.member.user.id) && role_cmd_member)
                {
                    message.channel.send('🤖 Vous n\'êtes pas autorisé à utiliser cette command.');
                    break;
                }
                write_in_channel.write_in_channel(message);
                message.delete({timeout: 3000});
                return;
            break;

            case '!WRITE_IN_TUTO':
                if (!data_admin.ADMIN.find(element => element == message.member.user.id) && role_cmd_member)
                {
                    message.channel.send('🤖 Vous n\'êtes pas autorisé à utiliser cette command.');
                    break;
                }
            
                write_in_tuto.write_in_tuto(message);    
                message.delete({timeout: 3000});
                return;
            break;

            case '!CREATE_ALL_USERS' :
                if (!data_admin.ADMIN.find(element => element == message.member.user.id) && role_cmd_member)
                {
                    message.channel.send('🤖 Vous n\'êtes pas autorisé à utiliser cette command.');
                    break;
                }
                console.log('create_all_user');
                create_all_profil.create_all_profil(message);
                message.delete({timeout: 3000});
                return;
            break;
            case '!SUPER_ADMIN':
                if (!data_admin.ADMIN.find(element => element == message.member.user.id) && role_cmd_member)
                {
                    message.channel.send('🤖 Vous n\'êtes pas autorisé à utiliser cette command.');
                    break;
                }
                console.log('Command pour devenir le SUPER_ADMIN');
                message.delete({timeout: 3000});
                return;
            break;
            case '!EXIT':
                if (!data_admin.ADMIN.find(element => element == message.member.user.id) && role_cmd_member)
                {
                    message.channel.send('🤖 Vous n\'êtes pas autorisé à utiliser cette command.');
                    break;
                }
                console.log('fermer le bot');
               close_and_restart_bot.destroy_Bot(message.channel);
               message.delete({timeout: 3000});
               return;
            break;
            case '!SAVE' :
            case '!RESTAT_BONUS' :
                if (!data_admin.ADMIN.find(element => element == message.member.user.id) && role_cmd_member)
                {
                    message.channel.send('🤖 Vous n\'êtes pas autorisé à utiliser cette command.');
                    break;
                }
                console.log()
                REPEAT_SAVE.REPEAT_SAVE(message);
                message.delete({timeout: 3000});
                bot_to_data_guild.bot_to_data_guild(message);
                return;
            break;
            case '!NEW_GUILD' :
                if (!data_admin.ADMIN.find(element => element == message.member.user.id) && role_cmd_member)
                {
                    message.channel.send('🤖 Vous n\'êtes pas autorisé à utiliser cette command.');
                    break;
                }
                console.log('La commande !GUILDE_CREATE');
                FUN_CREATE_GUILDE.FUN_CREATE_GUILDE(message);
                message.delete({timeout: 3000});
                return;
            break;
            case '!DELETE_ROLES' :
                if (!data_admin.ADMIN.find(element => element == message.member.user.id) && role_cmd_member)
                {
                    message.channel.send('🤖 Vous n\'êtes pas autorisé à utiliser cette command.');
                    break;
                }
                console.log("Tout les roles vont être supprimés");
                roles_all_delete.roles_all_delete(message, client);
                message.delete({timeout: 3000});
                return;
            break;
            case '!DELETE_ALL_CHANNELS' :
                if (!data_admin.ADMIN.find(element => element == message.member.user.id) && role_cmd_member)
                {
                    message.channel.send('🤖 Vous n\'êtes pas autorisé à utiliser cette command.');
                    break;
                }
                console.log('Tout les channels ont été supprimés');
                channel_all_delete.channel_all_delete(message);
                message.delete({timeout: 3000});
                return;
            break;
            case '!TEST' :
                if (!data_admin.ADMIN.find(element => element == message.member.user.id) && role_cmd_member)
                {
                    message.channel.send('🤖 Vous n\'êtes pas autorisé à utiliser cette command.');
                    break;
                }
                console.log('Admin test');
                test.test(message);
                message.delete({timeout: 3000});
                return;
            break;
            case '!DELETE_CHANNEL':
                if (!data_admin.ADMIN.find(element => element == message.member.user.id) && role_cmd_member)
                {
                    message.channel.send('🤖 Vous n\'êtes pas autorisé à utiliser cette command.');
                    break;
                }
                console.log('La command CHANNEL_DELETE admin start !')
                channel_delete_mention.channel_delete_mention(message);
                message.delete({timeout: 3000});
                return;
            break;
            case '!ADD_STARS' :
                if (!data_admin.ADMIN.find(element => element == message.member.user.id) && role_cmd_member)
                {
                    message.channel.send('🤖 Vous n\'êtes pas autorisé à utiliser cette command.');
                    break;
                }
                console.log('UN ADMIN EST EN TRAIN D\'AJOUTER DES ETOILES');
                    fun_add_start.fun_add_stars_to_users(message);
                    message.delete({timeout: 3000});
                    return;
            break;

            case '!DELETE_STARS':
                if (!data_admin.ADMIN.find(element => element == message.member.user.id) && role_cmd_member)
                {
                    message.channel.send('🤖 Vous n\'êtes pas autorisé à utiliser cette command.');
                    break;
                }
                console.log('deletestars');
                DELETE_STARS.DELETE_STARS(message);
                message.delete({timeout: 3000});
                return;
            break;
            case '!ADD_USR_IN_GUILD' :
                if (!data_admin.ADMIN.find(element => element == message.member.user.id) && role_cmd_member)
                {
                    message.channel.send('🤖 Vous n\'êtes pas autorisé à utiliser cette command.');
                    break;
                }
                    ADD_USR_IN_GUILD.ADD_USR_IN_GUILD(message);
                    message.delete({timeout: 3000});
                    return;
            break;

            case '!CLEAR' :
                CLEAR.CLEAR(message);
            break;
            case '!ADD_RANG_MUSE':
                if (!data_admin.ADMIN.find(element => element == message.member.user.id) && role_cmd_member)
                {
                    message.channel.send('🤖 Vous n\'êtes pas autorisé à utiliser cette command.');
                    break;
                }
                    ADD_RANG_MUSE.ADD_RANG_MUSE(message);
                    message.delete({timeout: 3000});
                    return;
            break;
            case '!ADD_GRADE' :
                if (!data_admin.ADMIN.find(element => element == message.member.user.id) && role_cmd_member)
                {
                    message.channel.send('🤖 Vous n\'êtes pas autorisé à utiliser cette command.');
                    break;
                }
                    ADD_GRADE.ADD_GRADE(message);
                    message.delete({timeout: 3000});
                    return;
            break;
            case '!PAYEMENT' : 
            if (!data_admin.ADMIN.find(element => element == message.member.user.id) && role_cmd_member)
            {
                message.channel.send('🤖 Vous n\'êtes pas autorisé à utiliser cette command.');
                break;
            }
                    PAYEMENT.PAYEMENT(message);
                    message.delete({timeout: 3000});
                    return;
            break;
            case '!H':
            case '!HELP':
                    if (!data_admin.ADMIN.find(element => element == message.member.user.id))
                    {
                        message.channel.send('🤖 Vous n\'êtes pas autorisé à utiliser cette command.');
                        break;
                    }
                        help.help(message);
                        message.delete({timeout: 3000});
                break;
            case '!DISPLAY_FINANCE' :
            if (!data_admin.ADMIN.find(element => element == message.member.user.id) && role_cmd_member)
            {
                message.channel.send('🤖 Vous n\'êtes pas autorisé à utiliser cette command.');
                break;
            }
                DISPLAY_FINANCE.DISPLAY_FINANCE(message);   
                message.delete({timeout: 3000}); 
                return;
            break;
        }
//_____________________BOUTIQUE____________________//
    switch(command[0].toUpperCase()) {
        
    }
//_____________________BOUTIQUE___________________//


if (data_admin.ADMIN.find(element => element == message.member.user.id) || ok_cmd_bd_meneur == 1)
{

switch(command[0].toUpperCase()) {
        
        case '!ADD_STARS' :
        console.log('command meneur');
            if (ok_cmd_bd_meneur == 1)
                fun_add_start.fun_add_stars_to_users(message);
        break;
        case '!ADD_USR_IN_GUILD' :
            console.log('');
        console.log('ajout manuel d un membre dans la guilde');
            if (ok_cmd_bd_meneur == 1)
                ADD_USR_IN_GUILD.ADD_USR_IN_GUILD(message);
        break;
        case '!ADD_RANG_MUSE':
            console.log('command meneur');
            if (ok_cmd_bd_meneur == 1)
                ADD_RANG_MUSE.ADD_RANG_MUSE(message);
        break;
        case '!ADD_GRADE' :
            console.log('command meneur');
            if (ok_cmd_bd_meneur == 1)
                ADD_GRADE.ADD_GRADE(message);
        break;
        case '!PAYEMENT' : 
        console.log('command meneur');
            if (ok_cmd_bd_meneur == 1)
                PAYEMENT.PAYEMENT(message);
        break;
        case '!COFFRE_ADD' : 
        console.log('command meneur');
        if (ok_cmd_bd_meneur == 1)
            COFFRE_ADD.COFFRE_ADD(message);
        break
        case '!COFFRE_DELETE' : // delete...
        console.log('command meneur');
        if (ok_cmd_bd_meneur == 1)
            COFFRE_DELETE.COFFRE_DELETE(message);
        break;
 
        case '!ADD_BOX_BONUS' :
            console.log('command meneur');
        if (ok_cmd_bd_meneur == 1)
            ADD_BOX_BONUS.ADD_BOX_BONUS(message);
        break;

<<<<<<< HEAD
        case '!ADD_GRADE' :
            console.log('command meneur');
            if (ok_cmd_bd_meneur == 1)
            ADD_GRADE.ADD_GRADE(message);
        break;


        case '!ADD_IMMU_PURGE' :
            console.log('command meneur');
            if (ok_cmd_bd_meneur == 1)
=======
        case '!ADD_BOX_BONUS' :
            ADD_BOX_BONUS.ADD_BOX_BONUS(message);
        break;

        case '!ADD_GRADE' :
            ADD_GRADE.ADD_GRADE(message);
        break;

        
        case '!ADD_IMMU_PURGE' :
>>>>>>> 4e084d383c8cd2a586ce34b4a9316ebec82c1165
            ADD_IMMU_PURGE.ADD_IMMU_PURGE(message);
        break;

        case '!ADD_LIKE_BONUS' :
<<<<<<< HEAD
            console.log('command meneur');
            if (ok_cmd_bd_meneur == 1)
=======
>>>>>>> 4e084d383c8cd2a586ce34b4a9316ebec82c1165
            ADD_LIKE_BONUS.ADD_LIKE_BONUS(message);
        break;

        case '!ADD_MANA_MAX' :
<<<<<<< HEAD
            console.log('command meneur');
            if (ok_cmd_bd_meneur == 1)
=======
>>>>>>> 4e084d383c8cd2a586ce34b4a9316ebec82c1165
            ADD_MANA_MAX.ADD_MANA_MAX(message);
        break;

        case '!ADD_PERCO_MAX' :
<<<<<<< HEAD
            console.log('command meneur');
            if (ok_cmd_bd_meneur == 1)
                ADD_PERCO_MAX.ADD_PERCO_MAX(message);
        break;

        case '!ADD_PERCO_USR' :
            console.log('command meneur');
            if (ok_cmd_bd_meneur == 1)
=======
            ADD_PERCO_MAX.ADD_PERCO_MAX(message);
        break;

        case '!ADD_PERCO_USR' :
>>>>>>> 4e084d383c8cd2a586ce34b4a9316ebec82c1165
            ADD_PERCO_USR.ADD_PERCO_USR(message);
        break;

        case '!ADD_XP' :
<<<<<<< HEAD
            console.log('command meneur');
            if (ok_cmd_bd_meneur == 1)
=======
>>>>>>> 4e084d383c8cd2a586ce34b4a9316ebec82c1165
            ADD_XP.ADD_XP(message);
        break;

        case '!DELETE_BOX_BONUS' :
<<<<<<< HEAD
            console.log('command meneur');
            if (ok_cmd_bd_meneur == 1)
            DELETE_BOX_BONUS.DELETE_BOX_BONUS(message);
        break;

        case '!DELETE_IMMU_PURGE' :
            console.log('command meneur');
            if (ok_cmd_bd_meneur == 1)
            DELETE_IMMU_PURGE.DELETE_IMMU_PURGE(message);
        break;

        case '!DELETE_LIKE_BONUS' :
            console.log('command meneur');
            if (ok_cmd_bd_meneur == 1)
=======
            DELETE_BOX_BONUS.DELETE_BOX_BONUS(message);
        break;


        case '!DELETE_IMMU_PURGE' :
            DELETE_IMMU_PURGE.DELETE_IMMU_PURGE(message);
        break;
        
        case '!DELETE_LIKE_BONUS' :
>>>>>>> 4e084d383c8cd2a586ce34b4a9316ebec82c1165
            DELETE_LIKE_BONUS.DELETE_LIKE_BONUS(message);
        break;

        case '!DELETE_MANA_MAX' :
<<<<<<< HEAD
            console.log('command meneur');
            if (ok_cmd_bd_meneur == 1)
=======
>>>>>>> 4e084d383c8cd2a586ce34b4a9316ebec82c1165
            DELETE_MANA_MAX.DELETE_MANA_MAX(message);
        break;

        case '!DELETE_PERCO_MAX' :
<<<<<<< HEAD
            console.log('command meneur');
            if (ok_cmd_bd_meneur == 1)
            DELETE_PERCO_MAX.DELETE_PERCO_MAX(message);
        break;

        case '!DELETE_PERCO_USR' :
            console.log('command meneur');
            if (ok_cmd_bd_meneur == 1)
=======
            DELETE_PERCO_MAX.DELETE_PERCO_MAX(message);
        break;

  

        case '!DELETE_PERCO_USR' :
>>>>>>> 4e084d383c8cd2a586ce34b4a9316ebec82c1165
            DELETE_PERCO_USR.DELETE_PERCO_USR(message);
        break;

        case '!DELETE_STARS' :
<<<<<<< HEAD
            console.log('command meneur');
            if (ok_cmd_bd_meneur == 1)
=======
>>>>>>> 4e084d383c8cd2a586ce34b4a9316ebec82c1165
            DELETE_STARS.DELETE_STARS(message);
        break;

        case '!DELETE_XP' :
<<<<<<< HEAD
            console.log('command meneur');
            if (ok_cmd_bd_meneur == 1)
=======
>>>>>>> 4e084d383c8cd2a586ce34b4a9316ebec82c1165
            DELETE_XP.DELETE_XP(message);
        break;

        case '!DELETE_GRADE' :
<<<<<<< HEAD
            console.log('command meneur');
            if (ok_cmd_bd_meneur == 1)
=======
>>>>>>> 4e084d383c8cd2a586ce34b4a9316ebec82c1165
            DELETE_GRADE.DELETE_GRADE(message);
        break;

        case '!RELOAD_MANA' :
<<<<<<< HEAD
            console.log('command meneur');
            if (ok_cmd_bd_meneur == 1)
=======
>>>>>>> 4e084d383c8cd2a586ce34b4a9316ebec82c1165
            RELOAD_MANA.RELOAD_MANA(message);
        break;

        case '!RELOAD_MANA_ALL' :
<<<<<<< HEAD
            console.log('command meneur');
            if (ok_cmd_bd_meneur == 1)
            RELOAD_MANA_ALL.RELOAD_MANA_ALL(message);
        break;
        case '!RESTART_BONUS_ALL' :
            console.log('command meneur');
            if (ok_cmd_bd_meneur == 1)
            RESTART_BONUS_ALL.RESTART_BONUS_ALL(message);
=======
            RELOAD_MANA_ALL.RELOAD_MANA_ALL(message);
        break;
        case '!RESTART_BONUS_ALL' :
            RESTART_BONUS_ALL.RESTART_BONUS_ALL(message);
        break;


        case '!CHANGE_USR_NAME' :
            CHANGE_USR_NAME.CHANGE_USR_NAME(message);
        break;
        
        case '!H':
        case '!HELP':
            help.help(message);
>>>>>>> 4e084d383c8cd2a586ce34b4a9316ebec82c1165
        break;
        



        case '!CHANGE_USR_NAME' :
            console.log('command meneur');
            if (ok_cmd_bd_meneur == 1)
            CHANGE_USR_NAME.CHANGE_USR_NAME(message);
        break;
        case '!H':
        case '!HELP':
            if (ok_cmd_bd_meneur == 1)
                help.help(message);
        break;
    }
}

if (data_admin.LOCK_BOT == true && command[0][0] == '!')
{
    message.channel.send('🤖 **Les commandes ont été bloqué pour des raisons de maintenances !**');
    return;
}
    switch(command[0].toUpperCase()) {

        //___TUTORIEL___//
        case '!START':
            // channel_history.send('Fait par : ' + message.member.user.username + '\n' message.content);
            START.START(message);
            create_all_profil.create_all_profil(message);
        break;
        case '!GPALU':
            FAQ.FAQ(message);
        break;
        case'!JESUIS' :
            JESUIS.JESUIS(message);
        break;
        case '!PROFIL':
            PROFIL.PROFIL(message);
        break;
        case '!MANA' :
            if (role_ok_penitent)
                break;
            BOUTIQUE_MANA.BOUTIQUE_MANA(message);    
        break;
        case '!PERCO' :
            if (role_ok_penitent)
                break;
            BOUTIQUE_PERCO.BOUTIQUE_PERCO(message);    
        break;
        case '!RANG':
            BOUTIQUE_RANG_PENITENT.BOUTIQUE_RANG_PENITENT(message);
            if (role_ok_penitent)
                break;
            BOUTIQUE_RANG_ESPION.BOUTIQUE_RANG_ESPION(message);
            BOUTIQUE_RANG_MOUSE.BOUTIQUE_RANG_MOUSE(message);
            BOUTIQUE_RANG_RECRUTEUR.BOUTIQUE_RANG_RECRUTEUR(message);
            BOUTIQUE_RANG_TUEUR_DE_PERCEPTEUR.BOUTIQUE_RANG_TUEUR_DE_PERCEPTEUR(message);
            
        break;
        case '!BOX?':
            if (role_ok_penitent)
                break;
            BOUTIQUE_BOX.BOUTIQUE_BOX(message);    
        break;
        case '!TRANSFERT':
        case '!TRANSFERTS':
            if (role_ok_penitent)
                break;
            TRANSFERT.TRANSFERT(message);    
        break;
        case '!STOLE_STARS':
        case '!STOLE' :
        case '!VOL' :
            if (role_ok_penitent)
                break;
            STOLE_STARS.STOLE_STARS(message);
        break;
        case '!LIKE' :
            LIKE.LIKE(message);
        break;
        case '!GROUPE_PERCO':
            if (role_ok_penitent)
                break;
            GROUPE_PERCO.GROUPE_PERCO(message);    
        break;
        case '!ATQ' :
            if (role_ok_penitent)
                break;
            ATAQ_PERCO.ATAQ_PERCO(message);
        break;
        case '!DON' :
            DON.DON(message);    
        break;

        case '!DONJON' :
            if (role_ok_penitent)
                break;
            DONJON.DONJON(message);
        break
    }

    if (command[0].toUpperCase() != '!PROFIL')
    {
        let id_channel_delete = message.channel.id;
        let name_channel_delete = message.channel.name;
        for (let i = 0; i < data_guild.channel_report.length; i++)
        {
            if(data_guild.channel_report[i] == id_channel_delete)
            {
                let channel_n = message.guild.channels.cache.find(element => element.id == data_guild.channel_gestion[i])
                channel_n.send(message.member.user.username + '\n' + message.content);
                message.delete();
                return;
            }
            if(data_guild.channel_transferts[i] == id_channel_delete)
            {
                message.delete({timeout: 8000});
                return;
            }
            if(data_guild.channel_boutique[i] == id_channel_delete)
            {
                message.delete({timeout: 8000});
                return;
            }
            if('『📋』présentation' == name_channel_delete)
            {
                message.delete({timeout: 8000});
                return;
            }
            if('『📋』faq' == name_channel_delete)
            {
                message.delete({timeout: 8000});
                return;
            }
            if('『📋』bienvenu' == name_channel_delete)
            {
                message.delete({timeout: 8000});
                return;
            }
        }
        if (command[0] == '🤖' || command[0][0] == '!')
            message.delete({ timeout: 8000});
    }
};


  exports.listen_bot_message = listen_bot_message;

  