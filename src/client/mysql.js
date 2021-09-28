const mysql = require('mysql')
const dbConfig = require('../../config/db.config')

/*
const conn = mysql.createConnection({
    host: "localhost",
    user: "fabien",
    password: "fabien",
    database: "annualproject5"
});*/

const conn = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});
/*
conn.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
  });
*/
module.exports = conn;