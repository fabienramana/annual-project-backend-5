const { createModel } = require('../../models/projetModel')
const connect =  require('../../../client/mysql');
const findOneByTitre = require('../../prix_vente/service/findOneByTitre');

module.exports = async (produit, venteId) => {
    const dateToday = new Date()
    const date_string = dateToday.getFullYear() + "-" + (dateToday.getMonth() +1) + "-" + dateToday.getDate()

    findOneByTitre(produit.titre)
    .then((prix_vente) =>{
        return new Promise(function(resolve, reject){
            let price = 0
            if(produit.etat == 'Neuf'){
                price = prix_vente.prix*0.9
            }
            else if(produit.etat == 'Peu utilisé'){
                price = prix_vente.prix*0.8
            }
            else if(produit.etat == 'Dégradé'){
                price = prix_vente.prix*0.6
            }

            var query = `INSERT INTO offre (date, prix, statut, vente_id) VALUES ("${date_string}", "${price}", "En attente", ${venteId})`
            connect.query(query, function(err, result){
                console.log(result)
                console.log(err)
                if(err) reject(err)
                if(result.affectedRows == 1)resolve("created")
            }) 
        })
    })
}