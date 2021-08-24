const bcrypt = require('bcrypt')
const Joi = require('@hapi/joi');
const { createModel } = require('../../models/userModel')
const connect =  require('../../../client/mysql');
const checkIfEmailExists = require('./checkIfEmailExists')

module.exports = (nom, prenom, email, password, adresse, date_naissance, code_postal, ville) => {

    if (password == null) {
        const err = new Error('Password is not set');
        err.name = 'Internal Error';
        err.status = 500;
        throw err;
      }

      const encryptedPassword = bcrypt.hashSync(password, 10);
      const user = {
          nom,
          prenom,
          email,
          date_naissance,
          password: encryptedPassword,
          adresse,
          code_postal,
          ville
      }
    return checkIfEmailExists(email)
    .then(createModel.validate(user))
    .then(function() {
        return new Promise(function(resolve, reject) {
            connect.query(`INSERT INTO utilisateur (nom, prenom, email, date_naissance, password, adresse, code_postal, ville) VALUES ("${nom}","${prenom}","${email}", "${date_naissance}","${encryptedPassword}","${adresse}","${code_postal}","${ville}")`, function(err, result){
                if (err) {
                    connect.end()
                    reject(err);
                }
                connect.end()
                resolve(email)  
            })
        })
    })
}