const express = require('express');
const mongodb = require('mongodb');
const token_Mongo = require('./config_Mongo');
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const mongo_communication = require('./mongo_communication/test');

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
           
           
           

        })



       var getDb = function getDb() {
            return database;
        }

 
        var getMongodb = function getMongodb(){
            return mongodb;
        }

        var getcollection = function getcollection(){
            return collection;
        }

    //     const test = () => {

    //         // const collections = mongo.getDb().collection('users')
    //         // console.log(collections);
    //         // var query = { firstname: "maxime" };
    //         collection.find({}).toArray((err, items) => {
    //             if (err){
    //                  throw err;
    //             } else {
    //             console.log(items)
    //             }
    //           })
    //           collection.insertOne({
    //                         DREGGMAN : trucmachin,
    //                         });
    //         //   test();
    // }
    const test = (trucmachin, userID) => {
        
        mongo_communication.test(trucmachin, userID);
    }

        module.exports = {

            connect,
            getDb,
            getMongodb,
            getcollection,
            test,
        }
        // exports.test = test;
    
    //     const test = () => {

    //         // const collections = mongo.getDb().collection('users')
    //         // console.log(collections);
    //         // var query = { firstname: "maxime" };
    //         collection.find({}).toArray((err, items) => {
    //             if (err){
    //                  throw err;
    //             } else {
    //             console.log(items)
    //             }
    //           })
    //      
                
    //         test(); 

    // }

        