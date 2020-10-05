const Discord = require('discord.js');
const client = new Discord.Client();
save = require('../bot/data/data_to_bot/bot_to_data_guild');
const reset_Bot = (channel) => {
    channel.send('Resetting...')
    .then(msg => client.destroy())
    .then(() => client.login(''));
   
}


const destroy_Bot = (channel) =>  {
    channel.send('🤖 FERMETURE...')
    .then(msg => client.destroy()) 
    .then(() => client.login('NzAzOTI2MTE0ODcwODg2NDEw.XqVsSA.dimSZi3YftnNfHIEi3MfZO5cFcU'));
    channel.send('!register');
  }

  exports.reset_Bot = reset_Bot;
  exports.destroy_Bot = destroy_Bot;

