const { createModel } = require('../../models/achatProduitModel')
const connect =  require('../../../client/mysql');

module.exports = (achat_id, produit_id) => {

    const achat_produit = {
        achat_id,
        produit_id
    }

    return createModel.validate(achat_produit)
    .then(function(){
        return new Promise(function(resolve, reject){
            var query = `INSERT INTO achat_produit (achat_id,produit_id) VALUES (${achat_id}, ${produit_id})`
            connect.query(query, function(err, result){
                console.log(result)
                console.log(err)
                if(err) reject(err)
                if(result.affectedRows == 1)resolve('created')
            })
            
        })
    })
}