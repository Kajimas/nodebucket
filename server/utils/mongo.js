/**
 * Title: mongo.js
 * Author: Professor Krasso
 * Date: 8/20/2023
 * Modified By: William Egge
 * Description: Mongo.js file for nodebucket. This file is used to connect to the MongoDB database.
 */

"use strict";

const { MongoClient } = require("mongodb");
const config = require("./config");

const MONGO_URL = config.DB_URL;

const mongo = async (operations, next) => {
  try {
    console.log("Connecting to MongoDB Atlas...");

    console.log("MONGO_URL", MONGO_URL);
    console.log("DB_NAME", config.DB_NAME);

    // connect to MongoDB cluster
    const client = await MongoClient.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // select the database
    const db = client.db(config.DB_NAME);
    console.log("Connected to MongoDB Atlas");

    // Execute the operations
    await operations(db);
    console.log("Operation was successful");

    // close the connection to the database
    client.close();
    console.log("Connection closed");
  } catch (err) {
    const error = new Error(
      `An error occurred while connecting to MongoDB ${err.message}}`
    );
    error.status = 500;
    console.log("An error occurred while connecting to MongoDB", err);
    next(error);
  }
};

module.exports = { mongo };
