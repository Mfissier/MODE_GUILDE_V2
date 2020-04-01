close_and_restart_bot = require('./restart_and_close_bot');
// start_bot = require('./start_bot');
const listen_bot_message = (message) => {
    switch(message.content.toUpperCase()) {
        // case '?RESET':
        //    close_and_restart_bot.reset_Bot(message.channel);
        //     console.log("je viens de restart... GO AGAIN");
        //     break;
        case '?DESTROY':
           close_and_restart_bot.destroy_Bot(message.channel);
            console.log("le bot est arrété... DOWN !");
            break;
        // case '?START':
        //     start_bot.start_Bot(message.channel);
        //     console.log("le bot vient de se lancer... GO !");
        //     break;
    }
};

  exports.listen_bot_message = listen_bot_message;

  