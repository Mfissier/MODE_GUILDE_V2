
const  DONJON  = require('../CMD_USERS/DONJON.JS');
const LIKE  = require('../CMD_USERS/LIKE.JS');
const STOLE_STARS = require('../CMD_USERS/STOLE_STARS.JS');
const ADD_USR_IN_GUILD  = require('./CMD_MENEUR/ADD_USR_IN_GUILD');
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
PROFIL = require('../CMD_USERS/PROFIL');




write_in_channel = require('../create_elem/write_in_channel');
close_and_restart_bot = require('../restart_and_close_bot');
test_data_to_discord = require('../test_data_to_discord');
channel_delete_mention = require('../create_elem/channel_delete_mention');
channel_all_delete = require('../create_elem/channel_all_delete');
FUN_CREATE_GUILDE = require('../create_elem/FUN_CREATOR_GUILDES');
roles_all_delete = require ('../create_elem/roles_all_delete');
data_to_bot_guild = require('../data/data_to_bot/data_to_bot_guild');
listen_data = require('../data/save_in_data_guild');
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
    
    /*
    if (reaction.message.embeds.find(type => type))
      console.log('IL S\'AGIT BIEN D\'UN EMBED !!!!!!!!!!!!!!!!!!!!!!!');
      else
      console.log('IL NE S\'AGIT PAS D\'UN EMBED !!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    */
        switch(command[0].toUpperCase()) {
            //*** COMMAND ADMINISTRATOR !        
            case '!REGISTER' : // delete...
                if (!data_admin.ADMIN.find(element => element == message.member.user.id))
                {
                     message.channel.send('🤖 Vous n\'êtes pas autorisé à utiliser cette command.');
                    return;
                }
                console.log('Command register data')
                data_to_bot_guild.data_to_bot(message);
            break;
            case '!CHANNELS_BIO':
                if (!data_admin.ADMIN.find(element => element == message.member.user.id))
                {
                    message.channel.send('🤖 Vous n\'êtes pas autorisé à utiliser cette command.');
                    return;
                }
                write_in_channel.write_in_channel(message);
            break;
            case '!CREATE_ALL_USERS' :
                if (!data_admin.ADMIN.find(element => element == message.member.user.id))
                {
                    message.channel.send('🤖 Vous n\'êtes pas autorisé à utiliser cette command.');
                    return;
                }
                console.log('create_all_user');
                create_all_profil.create_all_profil(message);
            break;
            case '!SUPER_ADMIN':
                if (!data_admin.ADMIN.find(element => element == message.member.user.id))
                {
                    message.channel.send('🤖 Vous n\'êtes pas autorisé à utiliser cette command.');
                    return;
                }
                console.log('Command pour devenir le SUPER_ADMIN');
            break;
            case '!EXIT':
                if (!data_admin.ADMIN.find(element => element == message.member.user.id))
                {
                    message.channel.send('🤖 Vous n\'êtes pas autorisé à utiliser cette command.');
                    return;
                }
                console.log('fermer le bot');
               close_and_restart_bot.destroy_Bot(message.channel);
            break;
            case '!SAVE' :
                if (!data_admin.ADMIN.find(element => element == message.member.user.id))
                {
                    message.channel.send('🤖 Vous n\'êtes pas autorisé à utiliser cette command.');
                    return;
                }
                console.log()
                bot_to_data_guild.bot_to_data_guild(message);
            break;
            case '!NEW_GUILD' :
                if (!data_admin.ADMIN.find(element => element == message.member.user.id))
                {
                    message.channel.send('🤖 Vous n\'êtes pas autorisé à utiliser cette command.');
                    return;
                }
                console.log('La commande !GUILDE_CREATE');
                FUN_CREATE_GUILDE.FUN_CREATE_GUILDE(message);
            break;
            case '!DELETE_ROLES' :
                if (!data_admin.ADMIN.find(element => element == message.member.user.id))
                {
                    message.channel.send('🤖 Vous n\'êtes pas autorisé à utiliser cette command.');
                    return;
                }
                console.log("Tout les roles vont être supprimés");
                roles_all_delete.roles_all_delete(message, client);
            break;
            case '!DELETE_ALL_CHANNELS' :
                if (!data_admin.ADMIN.find(element => element == message.member.user.id))
                {
                    message.channel.send('🤖 Vous n\'êtes pas autorisé à utiliser cette command.');
                    return;
                }
                console.log('Tout les channels ont été supprimés');
                channel_all_delete.channel_all_delete(message);
            break;
            case '!TEST' :
                if (!data_admin.ADMIN.find(element => element == message.member.user.id))
                {
                    message.channel.send('🤖 Vous n\'êtes pas autorisé à utiliser cette command.');
                    return;
                }
                console.log('Admin test');
                test.test(message);
            break;
            case '!DELETE_CHANNEL':
                console.log('La command CHANNEL_DELETE admin start !')
                channel_delete_mention.channel_delete_mention(message);
            break;
        }

    switch(command[0].toUpperCase()) {
        // COMMAND MENEUR // ADMIN // MENEUR // BRAS DROITS
        case '!ADD_STARS' :
            console.log('UN ADMIN EST EN TRAIN D\'AJOUTER DES ETOILES');
            fun_add_start.fun_add_stars_to_users(message);
        break;
        case '!ADD_USR_IN_GUILD' :
                ADD_USR_IN_GUILD.ADD_USR_IN_GUILD(message);
        break;

        case '!ADD_BOX_BONUS' :
            ADD_BOX_BONUS.ADD_BOX_BONUS(message);
        break;

        case '!ADD_GRADE' :
            ADD_GRADE.ADD_GRADE(message);
        break;

        
        case '!ADD_IMMU_PURGE' :
            ADD_IMMU_PURGE.ADD_IMMU_PURGE(message);
        break;

        case '!ADD_LIKE_BONUS' :
            ADD_LIKE_BONUS.ADD_LIKE_BONUS(message);
        break;

        case '!ADD_MANA_MAX' :
            ADD_MANA_MAX.ADD_MANA_MAX(message);
        break;

        case '!ADD_PERCO_MAX' :
            ADD_PERCO_MAX.ADD_PERCO_MAX(message);
        break;

        case '!ADD_PERCO_USR' :
            ADD_PERCO_USR.ADD_PERCO_USR(message);
        break;

        case '!ADD_XP' :
            ADD_XP.ADD_XP(message);
        break;

        case '!DELETE_BOX_BONUS' :
            DELETE_BOX_BONUS.DELETE_BOX_BONUS(message);
        break;


        case '!DELETE_IMMU_PURGE' :
            DELETE_IMMU_PURGE.DELETE_IMMU_PURGE(message);
        break;
        
        case '!DELETE_LIKE_BONUS' :
            DELETE_LIKE_BONUS.DELETE_LIKE_BONUS(message);
        break;

        case '!DELETE_MANA_MAX' :
            DELETE_MANA_MAX.DELETE_MANA_MAX(message);
        break;

        case '!DELETE_PERCO_MAX' :
            DELETE_PERCO_MAX.DELETE_PERCO_MAX(message);
        break;

  

        case '!DELETE_PERCO_USR' :
            DELETE_PERCO_USR.DELETE_PERCO_USR(message);
        break;

        case '!DELETE_STARS' :
            DELETE_STARS.DELETE_STARS(message);
        break;

        case '!DELETE_XP' :
            DELETE_XP.DELETE_XP(message);
        break;

        case '!DELETE_GRADE' :
            DELETE_GRADE.DELETE_GRADE(message);
        break;

        case '!RELOAD_MANA' :
            RELOAD_MANA.RELOAD_MANA(message);
        break;

        case '!RELOAD_MANA_ALL' :
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
        break;
        



    }

    switch(command[0].toUpperCase()) {
        case '!PROFIL':
            PROFIL.PROFIL(message);
        break;
        case '!STOLE_STARS':
        case '!STOLE' :
        case '!VOL' :
            STOLE_STARS.STOLE_STARS(message);
        break;
        case '!LIKE' :
            LIKE.LIKE(message);
        break;

        case '!DONJON' :
            DONJON.DONJON(message);
        break
    }

    if (command[0].toUpperCase() != '!PROFIL')
    {

        if (command[0] == '🤖' || command[0][0] == '!')
            message.delete({ timeout: 8000});
    }
};


  exports.listen_bot_message = listen_bot_message;

  