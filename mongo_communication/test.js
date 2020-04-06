const mongo = require('../mongo');

const test = (trucmachin, userID) => {

    //  const collection = mongo.getcollection;

    // var query = { firstname: "maxime" };
    console.log(userID, "MOUGPMUIGMOUGMOUGMOUGMOUGFMOUGMOUBLUFLIYFLIYF");
    collection.find({}).toArray((err, items) => {
        if (err){
             throw err;
        } else {
        console.log(items)
        }
      })
      collection.insertOne({
        id_user : userID,
        User_data : trucmachin,
                    });
    //   test();

}
exports.test = test;