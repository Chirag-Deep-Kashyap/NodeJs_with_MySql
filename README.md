# NodeJs without Database

To start the application use command "npm start"

Here MYSQL is used as database for storing and retreiving information.

EJS is used as templating engine.

set the database name and password in database.js in utils folder
Example

<!--
const Sequelize = require("sequelize");

const sequelize = new Sequelize("YOUR DATABASE NAME", "root", "YOUR DATABASE PASSWORD", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize; -->

Before runing the application make sure to execute command "npm install" and then to start use "npm start"
