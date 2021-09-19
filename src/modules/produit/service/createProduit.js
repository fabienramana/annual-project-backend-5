const { createModel } = require('../../models/produitModel')
const connect =  require('../../../client/mysql');
const createProduitCarac = require('./createProduitCarac')

module.exports = (product, carac_tech) => {

    console.log(product)
    return createModel.validate(product)
    .then(function(){
        return new Promise(function(resolve, reject){
            console.log("query")
            var query = `INSERT INTO produit (titre, description, etat, statut, categorie_id, depot_id) VALUES ("${product.titre}", "${product.description}", "${product.etat}", "${product.statut}", ${product.categorie_id}, ${product.depot_id})`
            connect.query(query, function(err, result){
                console.log(result)
                console.log(err)
                if(err) reject(err)
                if(result.affectedRows == 1)resolve(result.insertId)
            }) 
        })
        .then((productId) => {
            carac_tech.produit_id = productId
            console.log(carac_tech)
            createProduitCarac(carac_tech)
            return "created"
        })
    })
}