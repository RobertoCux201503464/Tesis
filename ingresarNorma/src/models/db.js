const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

function DataBaseHandler() {
  this.connection = null;
}

DataBaseHandler.prototype.createConnection = function () {
  this.connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB,
    port: dbConfig.PORT,
  });

  this.connection.connect(function (err) {
    if (err) {
      console.error("error connecting " + err.stack);
      return null;
    }
    console.log("Se ha logrado la conexión con la base de datos.");
  });
  return this.connection;
};

DataBaseHandler.prototype.getConnection = function () {
  if (this.connection) return this.connection;
  return this.createConnection();
}

module.exports = DataBaseHandler;