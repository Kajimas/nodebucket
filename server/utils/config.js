/**
 * Title: config.js
 * Author: Professor Krasso
 * Date: 8/27/2023
 * Modified By: William Egge
 * Description: config.js file for nodebucket. This file contains the database connection string.
 */


"use strict";

const {
  DB_USERNAME = "nodebucket_user",
  DB_PASSWORD = "s3cret",
  DB_NAME = "nodebucket",
} = process.env;

const CONFIG = {
  DB_URL: `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.sloy5er.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
  DB_NAME: DB_NAME,
};

module.exports = CONFIG;
