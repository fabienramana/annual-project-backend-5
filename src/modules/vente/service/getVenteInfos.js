const { findVenteById } = require('../repository')
const { findProduitById, findProduitCaracByProduitId } = require('../../produit/repository')
const { findOffreByVenteId } = require('../../offre/repository')
const { findImagesByProduitId } = require('../../image/repository')

module.exports = async (id) => {
    try {
        const vente = await findVenteById(id);
        const offre = await findOffreByVenteId(id)
        const produit = await findProduitById(vente.produitId)
        const caracs = await findProduitCaracByProduitId(produit.id)
        const images = await findImagesByProduitId(produit.id)

        produit.images = images
        produit.produitCaracteristiques = caracs
        vente.produit = produit
        vente.offre = offre

        console.log("vente: " + JSON.stringify(vente))
        return vente
    } catch (err) {
        console.log(err);
        throw err;
    }
    
}   