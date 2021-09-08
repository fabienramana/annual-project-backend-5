const { createModel } = require('../../models/depotModel')
const connect =  require('../../../client/mysql');
const checkIfLibelléExists = require('./checkIfLibelleExists')

module.exports = (libellé, adresse, code_postal, ville) => {

    const depot = {
        libellé,
        adresse,
        code_postal,
        ville
    }

    return createModel.validate(depot)
    .then(checkIfLibelléExists(libellé))
    .then(function(){
        return new Promise(function(resolve, reject){
            var query = `INSERT INTO depot (libellé, adresse, code_postal, ville) VALUES ("${libellé}", "${adresse}", "${code_postal}", "${ville}")`
            connect.query(query, function(err, result){
                if(err) reject(err)
                console.log(result)
                if(result.affectedRows == 1)resolve('created')
            })
            
        })
    })
}