const { categorieModel } = require('../../models/categorieModel')
const connect =  require('../../../client/mysql');
const pushNotif = require('../../onesignal/pushNotification')
const checkIfLibelleExists = require('./checkIfLibelleExists')

module.exports = (libelle) => {

    const categorie = {
        libelle
    }

    return categorieModel.validate({
        libelle
    })
    .then(() => checkIfLibelleExists(libelle))
    .then(function() {
        return new Promise(function(resolve, reject) {
            connect.query(`INSERT INTO categorie (libelle) VALUES ("${libelle}")`, function(err, result){
                if(err) reject(err)
                console.log(result)
                if(result.affectedRows == 1){
                    pushNotif(libelle)
                    resolve('created')
                }
            })
        })
    })
}