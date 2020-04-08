const mongo = require('../mongo');

const test = (trucmachin, userID) => {

    //  const collection = mongo.getcollection;

    // var query = { firstname: "maxime" };
    // console.log(userID, "MOUGPMUIGMOUGMOUGMOUGMOUGFMOUGMOUBLUFLIYFLIYF0");
    console.log(trucmachin);
    collection.find({}).toArray((err, items) => {
        if (err){
             throw err;
        } else {
        // console.log(items)
        }
      })
      collection.insertOne({
        id : trucmachin.id,
        bot : trucmachin.bot,
        username : trucmachin.username,
        discriminator: trucmachin.discriminator,
        avatar: trucmachin.avatar,
        lastMessageID: trucmachin.lastMessageID,
        lastMessageChannelID: trucmachin.lastMessageChannelID,
      });
      // collection.find({username : trucmachin.username}).toArray((err, items) =>{
      //   if(err){
      //     throw err;
      //   } else {
      //     collection.update({username : trucmachin.username}, {$set: {username : "POUPLOU"}});
      //   }
      // });
    
    //   test();

}
exports.test = test;