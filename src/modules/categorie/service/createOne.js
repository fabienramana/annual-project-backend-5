const { categorieModel } = require('../../models/categorieModel')
const connect =  require('../../../client/mysql');
const checkIfLibelléExists = require('./checkIfLibelléExists')

module.exports = (libellé) => {

    const categorie = {
        libellé
    }

    return categorieModel.validate({
        libellé
    })
    .then(checkIfLibelléExists(libellé))
    .then(function() {
        return new Promise(function(resolve, reject) {
            connect.query(`INSERT INTO categorie (libellé) VALUES ("${libellé}")`, function(err, result){
                if(err) reject(err)
                console.log(result)
                if(result.affectedRows == 1)resolve('created')
            })
        })
    })
}