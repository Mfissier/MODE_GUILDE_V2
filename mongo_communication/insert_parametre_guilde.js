const mongo = require("../mongo");

const insert_parametre_guilde = (
  p_name,
  p_name_id,
  p_guilde_category_id, 
  p_serveur_id,
  p_channels_id,
  p_annonce_channels_id,
  p_chef_id,
  p_admin_id,
  p_kama_guild,
  p_enclos_id,
) => {
var db = mongo.getDb().collection("parametre_guilde");

db.insertOne({
  name : p_name, // string
  name_id: p_name_id,
  guilde_category_id : p_guilde_category_id, //string
  serveur_id : p_serveur_id, //
  channels_id : {
    p_channels_id,
  },
  users_moyenne_level : 0, //int
  user_total : 1, //int
  annonce_channels_id : p_annonce_channels_id, //"string"
  chef_id : p_chef_id, // string
  admin_id : p_admin_id, // string
  kama_guild : p_kama_guild, //int
  kama_all_users_guilde : 0, // int
  stars_all_user_guilde : 0, // int
  stars_to_kama : 0, // int
  like_all_users_guilde : 0, //int
  donjon_all : 0, //int
  defense_all : 0, // int
  attack_all : 0, // int
  enclos_id: p_enclos_id, //string
  });
}

exports.insert_parametre_guilde = insert_parametre_guilde;