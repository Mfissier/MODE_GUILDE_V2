//const app_website = require('./app');
const mongo = require('./mongo');
const mongodb = mongo.getMongodb();

//const session = require('express-session');
// console.log("test");
//--------------------------- BOT DISCORD -------------------------------\\
const use_bot = require('./src/bot/bot');




//app_website.website();
use_bot.bot();