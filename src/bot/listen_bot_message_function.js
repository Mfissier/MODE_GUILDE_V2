close_and_restart_bot = require('./restart_and_close_bot');
test_data_to_discord = require('./test_data_to_discord');
FUN_CREATE_GUILDE = require('./FUN_CREATE_GUILDE');
channel_delete_mention = require('./channel_delete_mention');
// start_bot = require('./start_bot');
const listen_bot_message = (message) => {
    command = message.content.split(/ +/g);
    switch(command[0]. toUpperCase()) {
        // case '?RESET':
        //    close_and_restart_bot.reset_Bot(message.channel);
        //     console.log("je viens de restart... GO AGAIN");
        //     break;
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
        case '!GUILD_CREATE' :
            console.log('La commande !GUILDE_CREATE');
            FUN_CREATE_GUILDE.FUN_CREATE_GUILDE(message);
        break;
        case '!CHANNEL_DELETE':
            console.log('La command CHANNEL_DELETE admin start !')
            channel_delete_mention.channel_delete_mention(message);
        break;
        case '!DATA_BASE':
            console.log('Acces a la base de donné par un admin');
            access_client_data.access_client_data(message);
        break;
    }
};

  exports.listen_bot_message = listen_bot_message;

  