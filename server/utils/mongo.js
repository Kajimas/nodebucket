/**
 * Title: mongo.js
 * Author: Professor Krasso
 * Date: 8/20/2023
 * Modified By: William Egge
 * Description: Mongo.js file for nodebucket. This file is used to connect to the MongoDB database.
 */

"use strict";

const { MongoClient } = require("mongodb");

const MONGO_URL =
  "mongodb+srv://nodebucket_user:s3cret@cluster0.sloy5er.mongodb.net/nodebucket?retryWrites=true&w=majority";

const mongo = async (operations, next) => {
  try {
    console.log("Connecting to MongoDB Atlas...");

    // connect to MongoDB cluster
    const client = await MongoClient.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // select the database
    const db = client.db("nodebucket");
    console.log("Connected to MongoDB Atlas");

    // Execute the operations
    await operations(db);
    console.log("Operation was successful");

    // close the connection to the database
    client.close();
    console.log("Connection closed");
  } catch (err) {
    const error = new Error(
      "An error occurred while connecting to MongoDB",
      err
    );
    error.status = 500;
    console.log("An error occurred while connecting to MongoDB", err);
    next(error);
  }
};

module.exports = { mongo };
