const Sequelize = require("sequelize");

const sequelize = new Sequelize("deptemployeedb", "root", "Brayden15", {
  host: "localhost",
  dialect: "mysql",
  logging: console.log,
});

// Export the sequelize object
module.exports = sequelize;
