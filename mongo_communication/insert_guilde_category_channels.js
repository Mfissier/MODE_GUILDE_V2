const mongo = require("../mongo");

//__________SOMMAIRE_CHANNELS__________
// '『🚨』annonce',  
// '『📜』règlement', // !!!PAS INCLUS
// '『💰』finances',
// '『💱』transferts',
// '『🏆』all_rewards',
// '____________________', // !!! AJOUTER
// '『💭』général',
// '『🎉』events', // !!!CHANGER LE NOM
// '『🎭』profil', // !!!CHANGER LE NOM
// '『🛒』boutique', // !!!CHANGER LE NOM
// '『🐎』enclos', // !!!CHANGER LE NOM
// '『💀』la-purge', // 
// '『🏛』tribunal',
// '____________________', // !!! inclus
// '『⚡』command',
// '『🏅』rangs', // !!! CHANGER LE NOM
// '『❓』questions',
// '『📌』liens_pratiques', // !!! AJOUTER
// '____________________', // !!! AJOUTER
// '『👥』staff', // CHANGER LE NOM
// '『📋』projet', // CHANGER LE NOM
// '『📊』gestion', // CHANGER LE NOM
// '『✅』staff-mission',
// '『❗』command-staff',
// '『💻』terminal' // CHANGER LE NOM
//__________SOMMAIRE_CHANNELS__________

insert_guilde_category_channels = (
  p_name,
  p_name_id,
  p_type,
  p_rang_channel,
  p_template_status,
  p_commande_status,
  p_boutique_status,
  p_bot_annonce_status,
  p_bot_annonce_stars_status,
  p_tuto_status,
  p_guilde_category_id,
  p_server_id,
  ) => {
var db = mongo.getDb().collection("guilde_category_channels");

db.insertMany([{
  
  // 0'『🚨』annonce',  

    name : p_name[0], 
    name_id : p_name_id[0],
    type: p_type,
    rang_channel : p_rang_channel,
    template_status: false, //true
    commande_status : false, //false
    boutique_status: false, // false,
    bot_annonce_status: true,// false,
    bot_annonce_stars_status: false, // false,
    tuto_status: false, // false,
    finances_status : false,
    transfert_status : false,
    event_status : false,
    profil_status: false,
    enclos_status: false,
    purge_status: false,
    tribunal_status: false,
    staff_command_status : false,
    help_command_status : false,
    guilde_category_id: p_guilde_category_id, //  '5e94562d1c9d4400001b9962',
    server_id: p_server_id, //  '  5e9ee9562924fb0000734186',
  },
  {

    // 1'『📜』règlement', 

    name : p_name[1],
    name_id : p_name_id[1],
    type: p_type,
    rang_channel : p_rang_channel,
    template_status: false, //true
    commande_status : false, //false
    boutique_status: false, // false,
    bot_annonce_status: false,// false,
    bot_annonce_stars_status: false, // false,
    tuto_status: false, // false,
    finances_status : false,
    transfert_status : false,
    event_status : false,
    profil_status: false,
    enclos_status: false,
    purge_status: false,
    tribunal_status: false,
    staff_command_status : false,
    help_command_status : false,
    guilde_category_id: p_guilde_category_id, //  '5e94562d1c9d4400001b9962',
    server_id: p_server_id, //  '  5e9ee9562924fb0000734186',
  },
  {

    // 2'『💰』finances',

    name : p_name[2],
    name_id : p_name_id[2],
    type: p_type,
    rang_channel : p_rang_channel,
    template_status: false, //true
    commande_status : false, //false
    boutique_status: false, // false,
    bot_annonce_status: false,// false,
    bot_annonce_stars_status: false, // false,
    tuto_status: false, // false,
    transfert_status : false,
    event_status : false,
    finances_status : true,
    profil_status: false,
    enclos_status: false,
    purge_status: false,
    tribunal_status: false,
    staff_command_status : false,
    help_command_status : false,
    guilde_category_id: p_guilde_category_id, //  '5e94562d1c9d4400001b9962',
    server_id: p_server_id, //  '  5e9ee9562924fb0000734186',
  },
  {

    // 3'『💱』transferts',

    name : p_name[3],
    name_id : p_name_id[3],
    type: p_type,
    rang_channel : p_rang_channel,
    template_status: false, //true
    commande_status : false, //false
    boutique_status: false, // false,
    bot_annonce_status: false,// false,
    bot_annonce_stars_status: false, // false,
    tuto_status: false, // false,
    finances_status : false,
    transfert_status : true,
    event_status : false,
    profil_status: false,
    enclos_status: false,
    purge_status: false,
    tribunal_status: false,
    staff_command_status : false,
    help_command_status : false,
    guilde_category_id: p_guilde_category_id, //  '5e94562d1c9d4400001b9962',
    server_id: p_server_id, //  '  5e9ee9562924fb0000734186',
  },
  {

    // 4'『🏆』all_rewards',

    name : p_name[4],
    name_id : p_name_id[4],
    type: p_type,
    rang_channel : p_rang_channel,
    template_status: false, //true
    commande_status : false, //false
    boutique_status: false, // false,
    bot_annonce_status: false,// false,
    bot_annonce_stars_status: true, // false,
    tuto_status: false, // false,
    finances_status : false,
    transfert_status : false,
    event_status : false,
    profil_status: false,
    enclos_status: false,
    purge_status: false,
    tribunal_status: false,
    staff_command_status : false,
    help_command_status : false,
    guilde_category_id: p_guilde_category_id, //  '5e94562d1c9d4400001b9962',
    server_id: p_server_id, //  '  5e9ee9562924fb0000734186',
  },
  {

    // 5'____________________', // !!! AJOUTER

    name : p_name[5],
    name_id : p_name_id[5],
    type: p_type,
    rang_channel : p_rang_channel,
    template_status: false, //true
    commande_status : false, //false
    boutique_status: false, // false,
    bot_annonce_status: false,// false,
    bot_annonce_stars_status: false, // false,
    tuto_status: false, // false,
    finances_status : false,
    transfert_status : false,
    event_status : false,
    profil_status: false,
    enclos_status: false,
    purge_status: false,
    tribunal_status: false,
    staff_command_status : false,
    help_command_status : false,
    guilde_category_id: p_guilde_category_id, //  '5e94562d1c9d4400001b9962',
    server_id: p_server_id, //  '  5e9ee9562924fb0000734186',  
  },
  {

    // 6'『💭』général',

    name : p_name[6],
    name_id : p_name_id[6],
    type: p_type,
    rang_channel : p_rang_channel,
    template_status: false, //true
    commande_status : true, //false
    boutique_status: false, // false,
    bot_annonce_status: false,// false,
    bot_annonce_stars_status: true, // false,
    tuto_status: false, // false,
    finances_status : false,
    transfert_status : false,
    event_status : false,
    profil_status: false,
    enclos_status: false,
    purge_status: false,
    tribunal_status: false,
    staff_command_status : true,
    help_command_status : false,
    guilde_category_id: p_guilde_category_id, //  '5e94562d1c9d4400001b9962',
    server_id: p_server_id, //  '  5e9ee9562924fb0000734186',  
  },
  {
    
    // 7'『🎉』events', // !!!CHANGER LE NOM

    name : p_name[7],
    name_id : p_name_id[7],
    type: p_type,
    rang_channel : p_rang_channel,
    template_status: false, //true
    commande_status : false, //false
    boutique_status: false, // false,
    bot_annonce_status: false,// false,
    bot_annonce_stars_status: false, // false,
    tuto_status: false, // false,
    finances_status : false,
    transfert_status : false,
    event_status : false,
    profil_status: false,
    enclos_status: false,
    purge_status: false,
    tribunal_status: false,
    staff_command_status : false,
    help_command_status : false,
    guilde_category_id: p_guilde_category_id, //  '5e94562d1c9d4400001b9962',
    server_id: p_server_id, //  '  5e9ee9562924fb0000734186',  
  },
  {

    // 8'『🎭』profil', // !!!CHANGER LE NOM

    name : p_name[8],
    name_id : p_name_id[8],
    type: p_type,
    rang_channel : p_rang_channel,
    template_status: false, //true
    commande_status : false, //false
    boutique_status: false, // false,
    bot_annonce_status: false,// false,
    bot_annonce_stars_status: false, // false,
    tuto_status: false, // false,
    finances_status : false,
    transfert_status : false,
    event_status : false,
    profil_status: true,
    enclos_status: false,
    purge_status: false,
    tribunal_status: false,
    staff_command_status : false,
    help_command_status : false,
    guilde_category_id: p_guilde_category_id, //  '5e94562d1c9d4400001b9962',
    server_id: p_server_id, //  '  5e9ee9562924fb0000734186',  
  },
  {

    // 9'『🛒』boutique', // !!!CHANGER LE NOM

    name : p_name[9],
    name_id : p_name_id[9],
    type: p_type,
    rang_channel : p_rang_channel,
    template_status: false, //true
    commande_status : false, //false
    boutique_status: true, // false,
    bot_annonce_status: false,// false,
    bot_annonce_stars_status: false, // false,
    tuto_status: false, // false,
    finances_status : false,
    transfert_status : false,
    event_status : false,
    profil_status: true,
    enclos_status: false,
    purge_status: false,
    tribunal_status: false,
    staff_command_status : true,
    help_command_status : false,
    guilde_category_id: p_guilde_category_id, //  '5e94562d1c9d4400001b9962',
    server_id: p_server_id, //  '  5e9ee9562924fb0000734186',  
  },
  {
    
    // 10'『🐎』enclos', // !!!CHANGER LE NOM

    name : p_name[10],
    name_id : p_name_id[10],
    type: p_type,
    rang_channel : p_rang_channel,
    template_status: false, //true
    commande_status : false, //false
    boutique_status: false, // false,
    bot_annonce_status: false,// false,
    bot_annonce_stars_status: false, // false,
    tuto_status: false, // false,
    finances_status : false,
    transfert_status : false,
    event_status : false,
    profil_status: false,
    enclos_status: true,
    purge_status: false,
    tribunal_status: false,
    staff_command_status : true,
    help_command_status : false,
    guilde_category_id: p_guilde_category_id, //  '5e94562d1c9d4400001b9962',
    server_id: p_server_id, //  '  5e9ee9562924fb0000734186',  
  },
  {
    
    // 11'『💀』la-purge', // 

    name : p_name[11],
    name_id : p_name_id[11],
    type: p_type,
    rang_channel : p_rang_channel,
    template_status: false, //true
    commande_status : false, //false
    boutique_status: false, // false,
    bot_annonce_status: false,// false,
    bot_annonce_stars_status: false, // false,
    tuto_status: false, // false,
    finances_status : false,
    transfert_status : false,
    event_status : false,
    profil_status: false,
    enclos_status: false,
    purge_status: true,
    tribunal_status: false,
    staff_command_status : false,
    help_command_status : false,
    guilde_category_id: p_guilde_category_id, //  '5e94562d1c9d4400001b9962',
    server_id: p_server_id, //  '  5e9ee9562924fb0000734186',  
  },
  {

    // 12'『🏛』tribunal',

    name : p_name[12],
    name_id : p_name_id[12],
    type: p_type,
    rang_channel : p_rang_channel,
    template_status: false, //true
    commande_status : false, //false
    boutique_status: false, // false,
    bot_annonce_status: false,// false,
    bot_annonce_stars_status: false, // false,
    tuto_status: false, // false,
    finances_status : false,
    transfert_status : false,
    event_status : false,
    profil_status: false,
    enclos_status: false,
    purge_status: false,
    tribunal_status: true,
    staff_command_status : true,
    help_command_status : false,
    guilde_category_id: p_guilde_category_id, //  '5e94562d1c9d4400001b9962',
    server_id: p_server_id, //  '  5e9ee9562924fb0000734186',  
  },
  {
    
    // 13'____________________', // !!! inclus

    name : p_name[13],
    name_id : p_name_id[13],
    type: p_type,
    rang_channel : p_rang_channel,
    template_status: false, //true
    commande_status : false, //false
    boutique_status: false, // false,
    bot_annonce_status: false,// false,
    bot_annonce_stars_status: false, // false,
    tuto_status: false, // false,
    finances_status : false,
    transfert_status : false,
    event_status : false,
    profil_status: false,
    enclos_status: false,
    purge_status: false,
    tribunal_status: false,
    staff_command_status : false,
    help_command_status : false,
    guilde_category_id: p_guilde_category_id, //  '5e94562d1c9d4400001b9962',
    server_id: p_server_id, //  '  5e9ee9562924fb0000734186',  
  },
  {
    
    // 14'『⚡』command',

    name : p_name[14],
    name_id : p_name_id[14],
    type: p_type,
    rang_channel : p_rang_channel,
    template_status: false, //true
    commande_status : false, //false
    boutique_status: false, // false,
    bot_annonce_status: false,// false,
    bot_annonce_stars_status: false, // false,
    tuto_status: false, // false,
    finances_status : false,
    transfert_status : false,
    event_status : false,
    profil_status: false,
    enclos_status: false,
    purge_status: false,
    tribunal_status: false,
    staff_command_status : false,
    help_command_status : false,
    guilde_category_id: p_guilde_category_id, //  '5e94562d1c9d4400001b9962',
    server_id: p_server_id, //  '  5e9ee9562924fb0000734186',  
  },  
  {
    
    // 15'『🏅』rangs', // !!! CHANGER LE NOM

    name : p_name[15],
    name_id : p_name_id[15],
    type: p_type,
    rang_channel : p_rang_channel,
    template_status: false, //true
    commande_status : false, //false
    boutique_status: false, // false,
    bot_annonce_status: false,// false,
    bot_annonce_stars_status: false, // false,
    tuto_status: false, // false,
    finances_status : false,
    transfert_status : false,
    event_status : false,
    profil_status: false,
    enclos_status: false,
    purge_status: false,
    tribunal_status: false,
    staff_command_status : false,
    help_command_status : false,
    guilde_category_id: p_guilde_category_id, //  '5e94562d1c9d4400001b9962',
    server_id: p_server_id, //  '  5e9ee9562924fb0000734186',  
  },
  {

    // 16'『❓』questions',

    name : p_name[16],
    name_id : p_name_id[16],
    type: p_type,
    rang_channel : p_rang_channel,
    template_status: false, //true
    commande_status : false, //false
    boutique_status: false, // false,
    bot_annonce_status: false,// false,
    bot_annonce_stars_status: false, // false,
    tuto_status: false, // false,
    finances_status : false,
    transfert_status : false,
    event_status : false,
    profil_status: false,
    enclos_status: false,
    purge_status: false,
    tribunal_status: false,
    staff_command_status : false,
    help_command_status : true,
    guilde_category_id: p_guilde_category_id, //  '5e94562d1c9d4400001b9962',
    server_id: p_server_id, //  '  5e9ee9562924fb0000734186',  
  },
  {

    // 17'『📌』liens_pratiques', // !!! AJOUTER

    name : p_name[17],
    name_id : p_name_id[17],
    type: p_type,
    rang_channel : p_rang_channel,
    template_status: false, //true
    commande_status : false, //false
    boutique_status: false, // false,
    bot_annonce_status: false,// false,
    bot_annonce_stars_status: false, // false,
    tuto_status: false, // false,
    finances_status : false,
    transfert_status : false,
    event_status : false,
    profil_status: false,
    enclos_status: false,
    purge_status: false,
    tribunal_status: false,
    staff_command_status : false,
    help_command_status : false,
    guilde_category_id: p_guilde_category_id, //  '5e94562d1c9d4400001b9962',
    server_id: p_server_id, //  '  5e9ee9562924fb0000734186',  
  },
  {

    // 18'____________________', // !!! AJOUTER

    name : p_name[18],
    name_id : p_name_id[18],
    type: p_type,
    rang_channel : p_rang_channel,
    template_status: false, //true
    commande_status : false, //false
    boutique_status: false, // false,
    bot_annonce_status: false,// false,
    bot_annonce_stars_status: false, // false,
    tuto_status: false, // false,
    finances_status : false,
    transfert_status : false,
    event_status : false,
    profil_status: false,
    enclos_status: false,
    purge_status: false,
    tribunal_status: false,
    staff_command_status : false,
    help_command_status : false,
    guilde_category_id: p_guilde_category_id, //  '5e94562d1c9d4400001b9962',
    server_id: p_server_id, //  '  5e9ee9562924fb0000734186',  
  },
  {

    // 19'『👥』staff'

    name : p_name[19],
    name_id : p_name_id[19],
    type: p_type,
    rang_channel : p_rang_channel,
    template_status: false, //true
    commande_status : false, //false
    boutique_status: false, // false,
    bot_annonce_status: false,// false,
    bot_annonce_stars_status: false, // false,
    tuto_status: false, // false,
    finances_status : false,
    transfert_status : false,
    event_status : false,
    profil_status: false,
    enclos_status: false,
    purge_status: false,
    tribunal_status: false,
    staff_command_status : true,
    help_command_status : false,
    guilde_category_id: p_guilde_category_id, //  '5e94562d1c9d4400001b9962',
    server_id: p_server_id, //  '  5e9ee9562924fb0000734186',  
  },
  {
    
    // 20'『📋』projet', 

    name : p_name[20],
    name_id : p_name_id[20],
    type: p_type,
    rang_channel : p_rang_channel,
    template_status: false, //true
    commande_status : false, //false
    boutique_status: false, // false,
    bot_annonce_status: false,// false,
    bot_annonce_stars_status: false, // false,
    tuto_status: false, // false,
    finances_status : false,
    transfert_status : false,
    event_status : false,
    profil_status: false,
    enclos_status: false,
    purge_status: false,
    tribunal_status: false,
    staff_command_status : false,
    help_command_status : false,
    guilde_category_id: p_guilde_category_id, //  '5e94562d1c9d4400001b9962',
    server_id: p_server_id, //  '  5e9ee9562924fb0000734186',  
  },
  {

    // 21'『📊』gestion', // CHANGER LE NOM

    name : p_name[21],
    name_id : p_name_id[21],
    type: p_type,
    rang_channel : p_rang_channel,
    template_status: false, //true
    commande_status : false, //false
    boutique_status: false, // false,
    bot_annonce_status: false,// false,
    bot_annonce_stars_status: false, // false,
    tuto_status: false, // false,
    finances_status : false,
    transfert_status : false,
    event_status : false,
    profil_status: false,
    enclos_status: false,
    purge_status: false,
    tribunal_status: false,
    staff_command_status : false,
    help_command_status : false,
    guilde_category_id: p_guilde_category_id, //  '5e94562d1c9d4400001b9962',
    server_id: p_server_id, //  '  5e9ee9562924fb0000734186',  
  },
  {
    
    // 22'『✅』staff-mission',

    name : p_name[22],
    name_id : p_name_id[22],
    type: p_type,
    rang_channel : p_rang_channel,
    template_status: false, //true
    commande_status : false, //false
    boutique_status: false, // false,
    bot_annonce_status: false,// false,
    bot_annonce_stars_status: false, // false,
    tuto_status: false, // false,
    finances_status : false,
    transfert_status : false,
    event_status : false,
    profil_status: false,
    enclos_status: false,
    purge_status: false,
    tribunal_status: false,
    staff_command_status : false,
    help_command_status : false,
    guilde_category_id: p_guilde_category_id, //  '5e94562d1c9d4400001b9962',
    server_id: p_server_id, //  '  5e9ee9562924fb0000734186',  
  },
  {

    // 23'『❗』command-staff',

    name : p_name[23],
    name_id : p_name_id[23],
    type: p_type,
    rang_channel : p_rang_channel,
    template_status: false, //true
    commande_status : false, //false
    boutique_status: false, // false,
    bot_annonce_status: false,// false,
    bot_annonce_stars_status: false, // false,
    tuto_status: false, // false,
    finances_status : false,
    transfert_status : false,
    event_status : false,
    profil_status: false,
    enclos_status: false,
    purge_status: false,
    tribunal_status: false,
    staff_command_status : false,
    help_command_status : false,
    guilde_category_id: p_guilde_category_id, //  '5e94562d1c9d4400001b9962',
    server_id: p_server_id, //  '  5e9ee9562924fb0000734186',  
  },
  {

    // 24'『💻』terminal' // CHANGER LE NOM

    name : p_name[24],
    name_id : p_name_id[24],
    type: p_type,
    rang_channel : p_rang_channel,
    template_status: false, //true
    commande_status : false, //false
    boutique_status: false, // false,
    bot_annonce_status: false,// false,
    bot_annonce_stars_status: false, // false,
    tuto_status: false, // false,
    finances_status : false,
    transfert_status : false,
    event_status : false,
    profil_status: false,
    enclos_status: false,
    purge_status: false,
    tribunal_status: false,
    staff_command_status : true,
    help_command_status : true,
    guilde_category_id: p_guilde_category_id, //  '5e94562d1c9d4400001b9962',
    server_id: p_server_id, //  '  5e9ee9562924fb0000734186',  
  }]);
}
exports.insert_guilde_category_channels = insert_guilde_category_channels;























