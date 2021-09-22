const { createModel } = require('../../models/prixVenteModel')
const connect =  require('../../../client/mysql');

module.exports = (prix_vente) => {

    return createModel.validate(prix_vente)
    .then(function(){
        return new Promise(function(resolve, reject){
            var query = `INSERT INTO prix_vente (titre, prix, categorie_id) VALUES ("${prix_vente.titre}", ${prix_vente.prix}, ${prix_vente.categorie_id})`
            connect.query(query, function(err, result){
                console.log(result)
                console.log(err)
                if(err) reject(err)
                if(result.affectedRows == 1)resolve("created")
            }) 
        })
    })
}