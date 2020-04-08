const Discord = require('discord.js');
const client = new Discord.Client();
const mongo = require('../../mongo');

const test_data_to_discord = (channel, id) =>{
    console.log("l'id de base est : ",id);
    var channell = channel;
   
    var idd = id
    
    mongo.test_get_data(idd, channell);
    // console.log("Le contenu de ChanneLL est : ",channell)
        //  console.log("l'id du demdandeur est : ",id_);
//      if (id_ != null){
//         console.log("Console.log de la function test_data_to_discord : ", mongo.test_get_data(id));
//         // channel.send(mongo.test_get_data(id));
//      }
    // else {
    //     console.log("error dans test_data_to_discord : const id_ NULL");
    // }
}



exports.test_data_to_discord = test_data_to_discord;