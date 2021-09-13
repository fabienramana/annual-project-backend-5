const { createModel } = require('../../models/depotModel')
const connect =  require('../../../client/mysql');
const checkIfLibelleExists = require('./checkIfLibelleExists')

module.exports = (libelle, adresse, code_postal, ville) => {

    const depot = {
        libelle,
        adresse,
        code_postal,
        ville
    }

    return createModel.validate(depot)
    .then(() => checkIfLibelleExists(libelle))
    .then(function(){
        return new Promise(function(resolve, reject){
            var query = `INSERT INTO depot (libelle, adresse, code_postal, ville) VALUES ("${libelle}", "${adresse}", "${code_postal}", "${ville}")`
            connect.query(query, function(err, result){
                if(err) reject(err)
                console.log(result)
                if(result.affectedRows == 1)resolve('created')
            })
            
        })
    })
}