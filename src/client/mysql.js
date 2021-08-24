const mysql = require('mysql')

// db name : annualproject5

// https://riptutorial.com/node-js/example/29792/export-connection-pool

// https://github.com/sidorares/node-mysql2#history-and-why-mysql2
const conn = mysql.createConnection({
    host: "localhost",
    user: "fabien",
    password: "fabien",
    database: "annualproject5"
});

conn.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
  });

module.exports = conn;
/*
const pool = mysql.createPool({
    host            : 'localhost',
    user            : 'fabien',
    password        : 'fabien',
    database        : 'annualproject5'
});

module.export = pool.promise();
*/