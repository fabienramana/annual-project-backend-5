const { findPrixVenteByTitre :findOneByTitre } = require('../../prix_vente/repository');
const { createOffre: createOne } = require('../repository')

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
            console.log("createOffre")
            resolve(createOne(date_string, price, venteId))
            
        })
    })
}