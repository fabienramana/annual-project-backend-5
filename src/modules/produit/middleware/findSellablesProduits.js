const { findSellablesProduits } = require('../repository');

module.exports = (req, res, next) => {

    findSellablesProduits()
    .then((produits) => {
        res.json(produits)
    })
    .catch((err)=> {
        next(err)
    })
}