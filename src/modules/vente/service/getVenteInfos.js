const { findVenteById } = require('../repository')
const { findProduitById, findProduitCaracByProduitId } = require('../../produit/repository')
const { findOffreByVenteId } = require('../../offre/repository')
const { findImagesByProduitId } = require('../../image/repository')

module.exports = async (id) => {
    var vente = await findVenteById(id);
    var offre = await findOffreByVenteId(id)
    var produit = await findProduitById(vente.produitId)
    var caracs = await findProduitCaracByProduitId(produit.id)
    var images = await findImagesByProduitId(produit.id)

    produit.images = images
    produit.produitCaracteristiques = caracs
    vente.produit = produit
    vente.offre = offre

    console.log(vente)
    return vente
}   