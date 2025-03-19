const express = require("express");

// get sequelize connection from config file
const sequelize = require("./config");

const app = express();

const Department = require("./models/department");
const Employee = require("./models/employee");

Department.hasMany(Employee, {
  foreignKey: { name: "dept_id", allowNull: false },
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Employee.belongsTo(Department, {
    foreignKey: { name: "dept_id", allowNull: false },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });

sequelize
  .sync() // sync creates the table if it does not exist in the database
  .then(() => {
    console.log("connection has been established successfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/departments", async (req, res) => {
  const departments = await Department.findAll();
  res.json(departments);
});

app.listen(3000, () => {
  console.log("listening to port 3000");
});
