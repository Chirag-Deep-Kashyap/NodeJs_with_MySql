const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "YOUR DATABASE SCHEMA",
  "root",
  "YOUR DATABASE PASSWORD",
  {
    dialect: "mysql",
    host: "localhost",
  }
);

module.exports = sequelize;
