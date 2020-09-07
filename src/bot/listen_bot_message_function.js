close_and_restart_bot = require('./restart_and_close_bot');
test_data_to_discord = require('./test_data_to_discord');
channel_delete_mention = require('./channel_delete_mention');
channel_all_delete = require('./channel_all_delete');
FUN_CREATE_GUILDE = require('./FUN_CREATOR_GUILDES');
data_create_user_in_data = require('./data_create_user_in_data');
roles_all_delete = require ('./roles_all_delete')
FUN_CREATE_GUILDE_END_DATA = require('./FUN_CREATE_GUILDE_END_DATA');

// start_bot = require('./start_bot');
const listen_bot_message = (message, client) => {
    command = message.content.split(/ +/g);
    switch(command[0]. toUpperCase()) {
        // case '?RESET':
        //    close_and_restart_bot.reset_Bot(message.channel);
        //     console.log("je viens de restart... GO AGAIN");
        //     break;
        case '!PROFIL':
        console.log('Creation d\'un profil utilisateurs');
        FUN_CREATE_PROFIL(message);

        break;

        case '!DESTROY':
           close_and_restart_bot.destroy_Bot(message.channel);
            console.log("le bot est arrété... DOWN !");
            break;
        // case '?START':
        //     start_bot.start_Bot(message.channel);
        //     console.log("le bot vient de se lancer... GO !");
        //     break;
        // case '!TEST_DATA':
        //      console.log('les données arrivent... un peu de patience !');
        //     test_data_to_discord.test_data_to_discord(message.channel, message.member.id);
        // break;
        case '**!INFORMATION_GUILDE_CREATE_DATA**':
        console.log('OBJECT_ID_DATA_SEARCH');
        FUN_CREATE_GUILDE_END_DATA.FUN_CREATE_GUILDE_END_DATA(message);
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
        //______________
        case '!CREATE_USER':
            console.log('Un utilisateur est en cours de création !')
            data_create_user_in_data.data_create_user_in_data(message);
        break;
        //_____________
        case '!DATA_BASE':
            console.log('Acces a la base de donné par un admin');
            access_client_data.access_client_data(message);
        break;
    }
};

  exports.listen_bot_message = listen_bot_message;

  