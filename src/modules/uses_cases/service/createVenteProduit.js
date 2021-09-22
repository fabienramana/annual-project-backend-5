const { createModel: createProduitModel } = require('../../models/produitModel')
const insertProduitAndReturnId = require('../../produit/service/insertProduitAndReturnId')

const { createModel: createProduitCaracModel } = require('../../models/produitCaracModel')
const createProduitCarac = require('../../produit/service/createProduitCarac')

const { createModel: createVenteModel } = require('../../models/venteModel')
const createVente = require('../../vente/service/createOne')

const createImage = require('../../image/service/createOne')

module.exports = (vente, produit, images, caracs) => {
    
    return insertProduitAndReturnId(produit)
    .then((produitId) => {
        vente.produit_id = produitId
        return createVente(vente)
        .then(() => {
            caracs.forEach(element => {
                let caracteristique = {
                    valeur: element.valeur,
                    caracteristiques_tech_id: element.caracteristiqueId,
                    produit_id: produitId
                }
                createProduitCarac(caracteristique)
                .then((message) => console.log(message))
            });
        })
        .then(() => {
            images.forEach(element => {
                let image = {
                    url: element,
                    produit_id: produitId
                }
                createImage(image)
                .then((message) => {return message})
            });
        })
    })
    .then(()=> {
        return 'created'
    })
}