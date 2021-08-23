const mysql = require('mysql')

// db name : annualproject5
const db = mysql.createConnection({
    host: "localhost",
    user: "fabien",
    password: "fabien"
});

db.connect(function(err) {
    if (err) throw err;
    console.log("Connecté à la base de données MySQL!");
});