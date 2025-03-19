const { DataTypes } = require("sequelize");
const sequelize = require("../config");

const Employee = sequelize.define("Employee", {
  emp_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  full_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dept_id: {
    type: DataTypes.INTEGER,
  },
});

  module.exports = Employee;
