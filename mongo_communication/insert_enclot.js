const mongo = require("../mongo");

const insert_enclot = (
  p_name,
  p_enclot_status,
  p_guilde_category,
  p_prix,
  p_map,
  p_position_x,
  p_position_y,
  p_taille,
  ) => {
var db = mongo.getDb().collection("enclot");

db.insertOne({
  name: p_name,//  "enclot 1",
  enclot_status: p_enclot_status,// true,
  guilde_category: p_guilde_category, // "5e94562d1c9d4400001b9962",
  prix: p_prix, // 44,
  map: p_map, // "Le monde de Jesus",
  position_x: p_position_x, // 0,
  position_y: p_position_y, // 0,
  taille: p_taille,  //  2,
  });
}

exports.insert_enclot = insert_enclot;