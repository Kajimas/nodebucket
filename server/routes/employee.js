/**
 * Title: employee.js
 * Author: Professor Krasso
 * Date: 8/20/2023
 * Modified By: William Egge
 * Description: employee.js file for nodebucket. This file contains the API's for the employee collection.
 */

"use strict";

const express = require("express");
const router = express.Router();
const { mongo } = require("../utils/mongo");

router.get("/:empId", (req, res, next) => {
  try {
    console.log("empId", req.params.empId);

    let { empId } = req.params; // get the empId from the request
    empId = parseInt(empId, 10); // try determining if the empId is a number

    if (isNaN(empId)) {
      const err = new Error("input must be a number"); // if the empId is not a number, throw an error
      err.status = 400;
      console.log("err", err);
      next(err);
      return;
    }

    mongo(async (db) => {
      const employee = await db.collection("employees").findOne({ empId }); // find the employee with the empId

      if (!employee) {
        const err = new Error("employee not found " + empId); // if the employee is not found, throw an error
        err.status = 404;
        console.log("err", err);
        next(err);
        return;
      }

      res.send(employee); // if the employee is found, send the employee
    }, next);
  } catch (err) {
    console.log("err", err);
    next(err);
  }
});

module.exports = router;
