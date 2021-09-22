const { findByProduitId } = require('../repository');

module.exports = (req, res, next) => {
    const { id } = req.params

    findByProduitId(id)
    .then((achats_produits) => {
        res.json({
            achats_produits
        })
    })
    .catch((err)=> {
        next(err)
    })
}