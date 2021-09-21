const { createModel } = require('../../models/evenementModel')
const connect =  require('../../../client/mysql');

module.exports = (evenement) => {

    return createModel.validate(evenement)
    .then(function(){
        return new Promise(function(resolve, reject){
            var query = `INSERT INTO evenement (nom, date_debut, date_fin) VALUES ("${evenement.nom}", "${evenement.date_debut}", "${evenement.date_fin}")`
            connect.query(query, function(err, result){
                console.log(result)
                console.log(err)
                if(err) reject(err)
                if(result.affectedRows == 1)resolve('created')
            })
            
        })
    })
}