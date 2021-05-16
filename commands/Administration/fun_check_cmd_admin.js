const Discord = require('discord.js');
const { fun_bann } = require('./fun_bann');
const { fun_channel_deletes } = require('./fun_channels_delete');
const { fun_guild_create } = require('./guild_create/fun_guild_create');
const { fun_guild_delete } = require('./guild_create/fun_guild_delete');
const { fun_maj } = require('./fun_maj');
const { fun_roles_delete } = require('./fun_roles_delete');
const { fun_test } = require('./fun_test');
const index = require('../../index.js');
const { fun_systeme_create } = require('./fun_systeme_create');
const { fun_systeme_roles_create } = require('./fun_systeme_roles_create');
const { fun_systeme_data_create } = require('./fun_systeme_data_create');
const { fun_systeme_permission_create } = require('./fun_systeme_permission_create');
const { fun_systeme_save } = require('./fun_systeme_save');
const { fun_register_data_to_bot } = require('../../data/data_recovery/fun_register_data_to_bot');
const { fun_guild_save } = require('./guild_create/fun_guild_save');
const { fun_guild_data_recovery } = require('../../data/data_recovery/fun_guild_data_recovery');
const { fun_save_bot_to_data } = require('../../data/data_recovery/fun_save_bot_to_data');
const { fun_create_data_tuto } = require('../Tutoriel/create_tuto/fun_create_data_tuto');
const { fun_logout } = require('./fun_logout');
const { fun_start } = require('./fun_start');
const { fun_clear } = require('../Fun/fun_clear');
const { fun_check_for_create_profil } = require('../../data/data_recovery/fun_check_for_create_profil');
const { fun_save_users } = require('../../data/data_recovery/fun_save_users');
const { fun_register_users } = require('../../data/data_recovery/fun_register_users');
const { fun_write_in_channels } = require('./write_in_channel/fun_write_in_channels');
const { fun_write_boutique } = require('./write_in_channel/fun_write_boutique');
const { fun_gestion_stats } = require('../../stats/fun_gestion_stats');
const { fun_display_stats } = require('../../stats/fun_display_stats');

async function fun_check_cmd_admin(message, command, client) {

    switch(command[0].toUpperCase()) {
        case '!SYSTEME_CREATE' :
            fun_systeme_create(message, command);
        break;
        case '!SYSTEME_ROLES_CREATE' :
            fun_systeme_roles_create(message, command);
        break;
        case '!SYSTEME_DATA_CREATE' :
            fun_systeme_data_create(message, command);
        break;
        case '!SYSTEME_PERMISSION_CREATE' :
            fun_systeme_permission_create(message, command);
        break;
        case '!SYSTEME_SAVE' :
            fun_systeme_save(message);
        break;
        case '!WRITE_CHANNELS' :
            fun_write_in_channels(message);    
        break;
        case '!SAVE':
            fun_save_bot_to_data(message);
            fun_guild_save(message);
            fun_save_users();
        break;
        case '!LOGOUT':
            fun_logout(message,command, client);
        break;
        case '!START' :
            fun_start(message, command, client);    
        break;
        case '!DATA_TRANSFERT' :
            fun_register_data_to_bot(message, command);
            fun_guild_data_recovery(message);
            fun_register_users();
        break;
        case '!TEST' :
            fun_test(message, command);
        break;
        case '!GUILD_CREATE' :
            fun_guild_create(message, command);
        break;
        case '!GUILD_DELETE' :
            fun_guild_delete(message,command, client);      
        break
        case '!GUILD_SAVE' :
            fun_guild_save(message);
        break;
        case '!GUILD_DATA_RECOVERY' :
            fun_guild_data_recovery(message);
        break;
        case '!MAJ' :
            fun_maj(message, command);
        break;
        case '!GUILDE_DELETE' :
            fun_guild_delete(message, command);
        break;
        case '!BANN' :
            fun_bann(message, command);
        break;
        case '!CHANNELS_DELETE' :
            fun_channel_deletes(message, command);    
        break;
        case '!ROLES_DELETE' :
            fun_roles_delete(message, command, client);    
        break;
        case '!CLEAR' :
            fun_clear(message, client);
        break;
        
        //TUTORIEL :
        case '!TUTO_GUILD' :
            fun_create_data_tuto(message, command);
        break;
        case '!WRITE_BOUTIQUE' :
            fun_write_boutique(message);
        break;
        case '!PROFIL_CREATE_ALL' :
            fun_check_for_create_profil(client);    
        break;
        case '!STATS' :
            let statue = true;
            fun_display_stats(client, statue);
        break;
    }
}
exports.fun_check_cmd_admin = fun_check_cmd_admin;