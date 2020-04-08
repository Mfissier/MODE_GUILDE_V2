// const Discord = require('discord.js');
// const client = new Discord.Client();
const mongo = require('../mongo');


const test_get_data = (id, channel) => {

    // console.log(channel, "TUTUTUTU");
    console.log("LA VALEUR DE ID DANS test_get_data : ",id);
   

    collection.find({id : id}).toArray((err, items) => {
        if (err){
             throw err;
        } else {
            var tototo = items[0].username;
        // console.log("L'items de la function test_get_data : ",items[0].User_data.username);
        // return (items[0].User_data.username);
        }
        console.log("L'items de la function test_get_data : ",items[0].username);
         channel.send(tototo);
         
      })
    //   console.log("L'id_ de la function test_get_data : ",id_);
    //   return (id_);

}
exports.test_get_data = test_get_data;