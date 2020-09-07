const mongo = require("../mongo");

const insert_guilde = (
  p_id,
  p_name,
  p_server_id,
  p_rang_category,
  p_user_chef_id,
  p_channels_id,
  ) => {
var db = mongo.getDb().collection("guilde_category");

db.insertOne({
    id : p_id,
    name : p_name,
    type : "",
    serveur_id : p_server_id,
    template_status : false,
    rang_category : p_rang_category,
    user_chef_id : p_user_chef_id,
    // channels_id : {
    //   p_channels_id,
    // }
    // Channels_id est un tableau contenant les id auxquelles appartient la fiche de la guilde.
    // Comment faire ?
  });
}

exports.insert_guilde = insert_guilde;