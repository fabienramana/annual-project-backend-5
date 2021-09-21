const { createModel } = require('../../models/associationModel')
const connect =  require('../../../client/mysql');
const bcrypt = require('bcrypt');
const checkIfEmailExists = require('./checkIfEmailExists');
const checkIfUserEmailExists = require('../../user/service/checkIfEmailExists');
const checkIfRnaExistsAPI = require('./checkIfRnaExistsAPI');
const checkIfRnaExistsBase = require('./checkIfRnaExistsBase');

module.exports = (nom, rna, email, password) => {

    if (password == null) {
        const err = new Error('Password is not set');
        err.name = 'Internal Error';
        err.status = 500;
        throw err;
    }

    const encryptedPassword = bcrypt.hashSync(password, 10);
    const association = {
        nom,
        rna,
        email,
        password: encryptedPassword
    }

    return createModel.validate(association)
    .then(() => checkIfEmailExists(email))
    .then(() => checkIfUserEmailExists(email))
    .then(() => checkIfRnaExistsAPI(rna))
    .then(() => checkIfRnaExistsBase(rna))
    .then(function(){
        return new Promise(function(resolve, reject){
            var query = `INSERT INTO association (nom, rna, email, password) VALUES ("${nom}", "${rna}", "${email}", "${encryptedPassword}")`
            connect.query(query, function(err, result){
                console.log(result)
                console.log(err)
                if(err) reject(err)
                if(result.affectedRows == 1)resolve('created')
            })
            
        })
    })
}