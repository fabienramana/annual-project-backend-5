const { createModel } = require('../../models/achatModel')
const connect =  require('../../../client/mysql');

module.exports = (achat) => {


    return createModel.validate(achat)
    .then(function(){
        return new Promise(function(resolve, reject){
            var query = `INSERT INTO achat (prix, date, utilisateur_id, produit_id) VALUES (${achat.prix}, "${achat.date}", ${achat.utilisateur_id}, ${achat.produit_id})`
            connect.query(query, [achat],function(err, result){
                console.log(result)
                console.log(err)
                if(err) reject(err)
                if(result.affectedRows == 1)resolve('created')
            })
            
        })
    })
}