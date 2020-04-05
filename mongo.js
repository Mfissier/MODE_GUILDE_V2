const express = require('express');
const mongodb = require('mongodb');
const token_Mongo = require('./config_Mongo');
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

const CONNECTION_URL = token_Mongo.tokenMongo;
// const CONNECTION_URL = "mongodb+srv://:test1324@cluster0-fh2xs.mongodb.net/test?retryWrites=true&w=majority";
const DATABASE_NAME = "GuildeModé";

var database;


// 

    connect = MongoClient.connect(CONNECTION_URL, { useUnifiedTopology: true, useNewUrlParser: true }, (error, client) => {
            if(error) {
                throw error;
            }
            database = client.db(DATABASE_NAME);
            collection = database.collection("POPO");
            console.log("Connected to " + DATABASE_NAME +  " la base de donnée!");
            var findItems = function findItems(){

                // const collections = mongo.getDb().collection('users')
                // console.log(collections);
                // var query = { firstname: "maxime" };
                collection.find({}).toArray((err, items) => {
                    if (err){
                         throw err;
                    } else {
                    console.log(items)
                    }
                  })
                collection.insert({
                    userId: "FUCK",
                    comment: "YOU",
                    canal: "CELINE",
                    movieId: "T KUNE MERDE",
                    date: new Date()
                    });
            }
            findItems();

        })



       var getDb = function getDb() {
            return database;
        }

 
        var getMongodb = function getMongodb(){
            return mongodb;
        }


        module.exports = {

            connect,
            getDb,
            getMongodb,
        }
