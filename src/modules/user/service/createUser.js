const bcrypt = require('bcrypt')
const { createModel } = require('../../models/userModel')
const connect =  require('../../../client/mysql');
const Joi = require('@hapi/joi');

module.exports = (nom, prenom, email, password, adresse, date_naissance, code_postal, ville) => {

    if (password == null) {
        const err = new Error('Password is not set');
        err.name = 'Internal Error';
        err.status = 500;
        throw err;
      }

      const encryptedPassword = bcrypt.hashSync(password, 10);
      
    return createModel.validate(user)
    .then(function() {
        return new Promise(function(resolve, reject) {
            connect.query(`INSERT INTO utilisateur (nom, prenom, email, date_naissance, password, adresse, code_postal, ville) VALUES ("${nom}","${prenom}","${email}", "${date_naissance}","${encryptedPassword}","${adresse}","${code_postal}","${ville}")`, function(err, result){
                if (err) reject(err);
                resolve(email)  
            })
        })
    })
}