const { findSellablesProduits } = require('../repository');
const { findImagesByProduitId } = require('../../image/repository');

module.exports = async (req, res, next) => {

    try {
        const produits = await findSellablesProduits();
        for await (const produit of produits) {
            const images = await findImagesByProduitId(produit.id);
            produit.images = images
        }
        res.json(produits);
    } catch (err) {
        next(err);
    }
}