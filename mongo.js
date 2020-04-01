const express = require('express');
const mongodb = require('mongodb');
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

const CONNECTION_URL = "mongodb+srv://Mfissier:guildemodé123456789@cluster0-tubio.gcp.mongodb.net/test?retryWrites=true&w=majority";
// const CONNECTION_URL = "mongodb+srv://White:dreggman132465@cluster0-fh2xs.mongodb.net/test?retryWrites=true&w=majority";
const DATABASE_NAME = "GuildeModé";

var database;


// 

    connect = MongoClient.connect(CONNECTION_URL, { useUnifiedTopology: true, useNewUrlParser: true }, (error, client) => {
            if(error) {
                throw error;
            }
            database = client.db(DATABASE_NAME);
            collection = database.collection("session");
            console.log("Connected to " + DATABASE_NAME +  " la base de donnée!");
            

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


