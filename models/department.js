const { DataTypes } = require("sequelize");
const sequelize = require("../config");
const Employee = require("./employee");

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
}, {
  timestamps: false,
});

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

module.exports = Department;