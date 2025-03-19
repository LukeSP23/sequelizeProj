const { DataTypes } = require("sequelize");
const sequelize = require("../config");
const Employee = require("./employee");
const { time } = require("console");

const Department = sequelize.define("Department", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
},{
  timestamps: false,
});
  
module.exports = Department;