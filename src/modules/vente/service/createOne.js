const { createModel } = require('../../models/venteModel')
const connect =  require('../../../client/mysql');

module.exports = (vente) => {

    return createModel.validate(vente)
    .then(function(){
        return new Promise(function(resolve, reject){
            var query = `INSERT INTO vente (statut, date, produit_id) VALUES ("${vente.statut}", "${vente.date}", ${vente.produit_id})`
            connect.query(query, function(err, result){
                console.log(result)
                console.log(err)
                if(err) reject(err)
                if(result.affectedRows == 1)resolve('created')
            })
            
        })
    })
}