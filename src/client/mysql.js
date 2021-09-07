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
/*
var pool  = mysql.createPool({
    host: "localhost",
    user: "fabien",
    password: "fabien",
    database: "annualproject5"
});
var getConnection = function (cb) {
    pool.getConnection(function (err, connection) {
        //if(err) throw err;
        //pass the error to the cb instead of throwing it
        if(err) {
          return cb(err);
        }
        cb(null, connection);
    });
};
module.exports = getConnection;
*/
/*
const sequelize = new Sequelize('annualproject5', 'fabien', 'fabien', {
    host: 'localhost',
    dialect: 'mysql'
  });


  try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
    sequelize.query('SELECT * FROM utilisateur WHERE email = "fabien.rmnd@gmail.com"').then(([results, metadata]) => {
        console.log(results);
      })
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  } */