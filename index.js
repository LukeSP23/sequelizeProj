const express = require("express");

// get sequelize connection from config file
const sequelize = require("./config");

const app = express();

const Department = require("./models/department");
const Employee = require("./models/employee");


sequelize
  .sync() // sync creates the table if it does not exist in the database
  .then(() => {
    console.log("connection has been established successfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("listening to port 3000");
});
