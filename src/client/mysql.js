const mysql = require('mysql')
const { Sequelize } = require('sequelize')


const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "green repack"
});

conn.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
  });

module.exports = conn;