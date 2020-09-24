


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
//==================Systeme de sauvegarde===================
bot_to_data_guild = require('../data/data_to_bot/bot_to_data_guild');
//==================Systeme de sauvegarde===================

// start_bot = require('./start_bot');
const listen_bot_message = (message, client) => {
    command = message.content.split(/ +/g);
    switch(command[0].toUpperCase()) {

        //*** COMMAND ADMINISTRATOR !        
        case '!REGISTER' :
            console.log('Command register data')
            data_to_bot_guild.data_to_bot(message);
        break;
        case '!CREATE_WRITE_IN_CHANNEL':
            write_in_channel.write_in_channel(message);
        break;
        case '!SUPER_ADMIN':
            console.log('Command pour devenir le SUPER_ADMIN');
        break;

        case '!DESTROY':
           close_and_restart_bot.destroy_Bot(message.channel);
        break;

        case '!SAUVEGARDE' :
            bot_to_data_guild.bot_to_data_guild(message);
        break;

        case '!GUILDE_CREATE' :
            console.log('La commande !GUILDE_CREATE');
            FUN_CREATE_GUILDE.FUN_CREATE_GUILDE(message);
        break;

        case '!ROLES_ALL_DELETE' :
            console.log("Tout les roles vont être supprimés");
            roles_all_delete.roles_all_delete(message, client);
        break;

        case '!CHANNEL_DELETE':
            console.log('La command CHANNEL_DELETE admin start !')
            channel_delete_mention.channel_delete_mention(message);
        break;

        case '!CHANNEL_ALL_DELETE' :
            console.log('Tout les channels ont été supprimés');
            channel_all_delete.channel_all_delete(message);
        break;

        case '!TEST' :
            console.log('Admin test');
            test.test(message);
        break;

        case '!H':
        case '!HELP':
            help.help(message);
        break;

        case '!PROFIL':
        console.log('Creation d\'un profil utilisateurs');
        FUN_CREATE_PROFIL(message);
        break;

    }
};

  exports.listen_bot_message = listen_bot_message;

  