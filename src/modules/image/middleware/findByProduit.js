const { findImagesByProduitId :findByProduit} = require('../repository');

module.exports = (req, res, next) => {
    const { id } = req.params

    findByProduit(id)
    .then((produits) => {
        res.json(produits)
    })
    .catch((err)=> {
        next(err)
    })
}