const Discord = require('discord.js');
const client = new Discord.Client();

async function channel_delete_mention(message)
{
    args = message.content.split(/ +/g);
    var mention_channel = args[1].match(/(\d+)/);
    //console.log(args[1]);
    //console.log(mention_channel + '<= int');
    serveur = message.guild.channels.cache.get(mention_channel[0]);
    serveur.delete();
    console.log('!Le channel dont l\'ID est :'+ mention_channel[0] +' à bien été supprimé.')
}

  exports.channel_delete_mention = channel_delete_mention;

