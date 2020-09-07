const mongo = require("../mongo");

const insert_parametre_super_admin = (
  // p_id,
  // p_name,
  // p_serveur_id,
  // p_rang_category,
  // p_user_chef_id,
  // p_channels_id,
  ) => {
var db = mongo.getDb().collection("parametre_super_admin");

// db.insertOne({
//     id : p_id,
//     name : p_name,
//     type : "",
//     serveur_id : p_serveur_id,
//     template_status : true,
//     rang_category : p_rang_category,
//     user_chef_id : p_user_chef_id,
//     channels_id : {
//       p_channels_id,
    
//     }
//     // Channels_id est un tableau contenant les id auxquelles appartient la fiche de la guilde.
//     // Comment faire ?
//   });
}

exports.inset_parametre_super_admin = insert_parametre_super_admin;