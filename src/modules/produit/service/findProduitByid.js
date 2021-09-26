const { findProduitById, findProduitCaracByProduitId } = require('../../produit/repository')
const { findImagesByProduitId } = require('../../image/repository')

module.exports = async (id) => {
    try {
        const produit = await findProduitById(id)
        console.log(produit);
        const caracs = await findProduitCaracByProduitId(produit.id)
        console.log(caracs);
        const images = await findImagesByProduitId(produit.id)
        console.log(images);

        produit.images = images
        produit.produitCaracteristiques = caracs

        console.log("vente: " + JSON.stringify(produit))
        return produit
    } catch (err) {
        console.log(err);
        throw err;
    }
    
}   