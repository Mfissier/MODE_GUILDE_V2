const mongo = require("../mongo");

const insert_users = (
  p_id,
  p_name,
  p_descriminator,
  p_avatar,
  p_lastMessage_ID,
  p_lastMessageChannel_ID,
  //p_rang_guilde,
  //p_rang_user,
  //p_guilde_category_id,
  //p_category_id,
  //p_channels_id,
  p_server,
  p_level_in_game,
  //p_purge_exam_rang_status,
  //p_purge_total_nbr,
  //p_status_actif,
  //p_purge_immu_status,
  //p_likes, 
  //p_like_status,
  //p_like_bonus,
  //p_level_discord,
  //p_exp_discord,
  //p_stars,
  //p_stars_max,
  //p_stars_total,
  //p_pts_voc_status,
  //p_perco_nbr,
  //p_perco_max,
  //p_perco_defence_nbr,
  //p_perco_attack_nbr,
  //p_mana,
  //p_mana_max,
  //p_box_bonus,
  //p_enclot_pt,
  //p_historique_enclot,
  //p_enclot_grade,
  //p_enclot_exp,
  //p_enclot_malus,
  //p_cheat,
  //p_vocal_status,
  //p_vocal_total,
  //p_donjon_inscription,
  //p_historique_donjon,
  //p_filleul,
  //p_parain,
  //p_date_inscription,
  //p_date_last_recrutement,
  //p_tribunal,
  //p_spam_status,
  //p_lotterie_status,
  //p_lotterie_total_win,
  //p_lotterie_monnaie_played,
  //p_lotterie_monnaie_win,
  //p_boutique_item_bag,
  //p_boutique_item_used,
  //p_boutique_item_monnaie_used,
  ) => {
var db = mongo.getDb().collection("users");

db.insertOne({
  id : p_id, // string
  name : p_name, // string
  descriminator : p_descriminator, // string
  avatar : p_avatar, // urlstring
  lastMessage_ID : p_lastMessage_ID, // string
  lastMessageChannel_ID : p_lastMessageChannel_ID, // string
  rang_guilde : '', //ARRAY [] = ""
  rang_user : '', // ARRAY
  guilde_category_id : '', // string
  category_id : '', //array ????
  channels_id : '', // aray ??
  server : p_server, // string
  level_in_game : p_level_in_game, // number
  purge_exam_rang_status: false, // 
  purge_total_nbr: 0,
  status_actif: true,
  purge_immu_status: false,
  likes: '', // tab id string
  like_status: true,
  like_bonus: false,
  level_discord: 0,
  exp_discord: 0,
  stars: 0,
  stars_max: 30,
  stars_total: 0,
  pts_voc_status: true,
  perco_nbr: 0,
  perco_max: 1,
  perco_defence_nbr: 0,
  perco_attack_nbr: 0,
  mana: 2,
  mana_max: 10,
  box_bonus: 0,
  enclot_pt: 0,
  historique_enclot: '', //Array
  enclot_grade: 0,
  enclot_exp: 0,
  enclot_malus: 0,
  cheat: 0,
  vocal_status: false,
  vocal_total: 0,
  donjon_inscription: false,
  historique_donjon: "", // array
  filleul: "", // array
  parain: "", //string
  date_inscription: Date(),
  date_last_recrutement: Date(),
  tribunal: '', //Array
  spam_status: false,
  lotterie_status: false,
  lotterie_total_win: 0,
  lotterie_monnaie_played: 0,
  lotterie_monnaie_win: 0,
  boutique_item_bag: '', //ARRAY
  boutique_item_used: '', // ARRAY
  boutique_item_monnaie_used: 0,
    }
    // Channels_id est un tableau contenant les id auxquelles appartient la fiche de la guilde.
    // Comment faire ?
  );
}

exports.insert_users = insert_users;