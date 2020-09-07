const Discord = require('discord.js');
const client = new Discord.Client();
const mongo = require("../../mongo");

async function FUN_CREATE_GUILDE_END_DATA(message)
{
    args = message.content.split(/ +/g);
    console.log('WHAT');
    var data_guilde_category = mongo.getDb().collection("guilde_category");
    console.log(args);
    data_guilde_category.find({id : args[1]}).toArray((err, items) => {
        console.log(items);
        data_guilde_category.update(
            {$set : {user_chef_id : 'MAMAMIYAAAAAAAAAA'}});
    });
    message.channel.send('La commande est bien connecté');
    // console.log(client);
}

  exports.FUN_CREATE_GUILDE_END_DATA = FUN_CREATE_GUILDE_END_DATA;

