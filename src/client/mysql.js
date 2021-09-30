const mysql = require('mysql')
const dbConfig = require('../../config/db.config')


// const conn = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "green repack"
// });

// conn.connect(error => {
//     if (error) throw error;
//     console.log("Successfully connected to the database.");
//   });

const conn = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});



module.exports = conn;