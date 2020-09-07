const Discord = require('discord.js');
const client = new Discord.Client();
const mongo = require("../../mongo");
insert_users = require ("../../mongo_communication/insert_users");

async   function data_create_user_in_data(message)
{
  var data_server = mongo.getDb().collection("users");
  data_server.find({id : message.member.id}).toArray((err, items) => { 
    if (err){
        throw err;
    } else if (items[0] != undefined) {
        console.log("ERROR_DATA_SEARCH : L'USER" + message.member.nickname + 'existe déjà !');
        message.channel.send("ERROR_DATA_SEARCH : L'USER" + message.member.nickname + 'n\'existe pas !');
        //!!!> REPLACER CETTE SECURISATION EN HAUT DU CODE.
        return;        
    }
    else {
      console.log("INFO : L'USER" + message.member.username + 'est en cours de sauvegarde !');
      message.channel.send("INFO _ L'USER " + message.member.nickname + ' est en cours de sauvegarde !');
    }
  });
  message.channel.send("Création d'un profil pour l'utilisateur : <@" + message.member.id +'>');



//_____________________________INSERT_DATA_USERS______________________
  // insert_users.insert_users(
  // p_p_id,
  // p_id,
  // p_name,
  // p_descriminator,
  // p_avatar,
  // p_lastMessage_ID,
  // p_lastMessageChannel_ID,
  // //p_rang_guilde,
  // //p_rang_user,
  // //p_guilde_category_id,
  // //p_category_id,
  // //p_channels_id,
  // p_server,
  // p_level_in_game,

  // );
//_____________________________INSERT_DATA_USERS______________________

}
exports.data_create_user_in_data = data_create_user_in_data;

