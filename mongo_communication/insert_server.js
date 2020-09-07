const mongo = require("../mongo");

const  insert_server = async (name_of_server) => {
  var db = mongo.getDb().collection("server");

    db.insertOne({

      name : name_of_server,
      // Channels_id est un tableau contenant les id auxquelles appartient la fiche de la guilde.
      // Comment faire ?
    });
}

exports.insert_server = insert_server;