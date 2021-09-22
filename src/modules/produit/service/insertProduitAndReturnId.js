const { createModel } = require('../../models/produitModel')
const connect =  require('../../../client/mysql');

module.exports = (product) => {

    console.log(product)
    return createModel.validate(product)
    .then(function(){
        return new Promise(function(resolve, reject){
            var query = `INSERT INTO produit (titre, description, etat, statut, categorie_id) VALUES ("${product.titre}", "${product.description}", "${product.etat}", "${product.statut}", ${product.categorie_id})`
            connect.query(query, function(err, result){
                console.log(result)
                console.log(err)
                if(err) reject(err)
                if(result.affectedRows == 1)resolve(result.insertId)
            }) 
        })
    })
}