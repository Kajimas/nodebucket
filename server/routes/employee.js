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
const Ajv = require("ajv");
const { ObjectId } = require("mongodb");

const ajv = new Ajv(); // create a new instance of the ajv class

// category schema
const categorySchema = {
  type: "object",
  properties: {
    categoryName: { type: "string" },
    backgroundColor: { type: "string" },
  },
  required: ["categoryName", "backgroundColor"],
  additionalProperties: false,
};

// define a schema to validate a new task
const taskSchema = {
  type: "object",
  properties: {
    text: { type: "string" },
    category: categorySchema,
  },
  required: ["text", "category"],
  additionalProperties: false,
};

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

/**
 * findAllTasks
 */
router.get("/:empId/tasks", (req, res, next) => {
  try {
    console.log("findAllTasks API");

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
      const tasks = await db
        .collection("employees")
        .findOne({ empId }, { projection: { empId: 1, todo: 1, done: 1 } });

      console.log("tasks", tasks);

      if (!tasks) {
        const err = new Error("Unable to find tasks for empId " + empId); // if the employee is not found, throw an error
        err.status = 404;
        console.log("err", err);
        next(err);
        return;
      }

      res.send(tasks); // if the employee is found, send the employee
    }, next);
  } catch (err) {
    console.log("err", err);
    next(err);
  }
});

router.post("/:empId/tasks", (req, res, next) => {
  try {
    console.log("createTask API");

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
      const employee = await db.collection("employees").findOne({ empId });

      console.log("employee", employee);

      if (!employee) {
        const err = new Error("Unable to find employee with empId " + empId);
        err.status = 404;
        console.log("err", err);
        next(err);
        return;
      }

      const { task } = req.body;

      console.log("req.body", req.body);

      // validate the request object
      const validator = ajv.compile(taskSchema);
      const valid = validator({ task });

      console.log("valid", valid);

      if (!valid) {
        const err = new Error("Bad Request");
        err.status = 400;
        err.errors = validator.errors;
        console.log("req.body validation failed", err);
        next(err);
        return;
      }
      // build the new task object to insert into MongoDB Atlas
      const newTask = {
        _id: new ObjectId(),
        text: task.text,
        category: task.category,
      };
      const result = await db
        .collection("employees")
        .updateOne({ empId }, { $push: { todo: newTask } });

      console.log("result", result);

      if (!result.modifiedCount) {
        const err = new Error("Unable to create tasks for empId " + empId);
        err.status = 404;
        console.log("err", err);
        next(err);
        return;
      }

      res.status(201).send({ id: newTask._id });
    }, next);
  } catch (err) {
    console.log("err", err);
    next(err);
  }
});

module.exports = router;
