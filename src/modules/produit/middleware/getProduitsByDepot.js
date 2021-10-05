const { getProduitsByDepot } = require('../repository');

module.exports = (req, res, next) => {
    const { id } = req.params;

    getProduitsByDepot(id)
    .then((produits) => {
        res.json(produits);
    })
    .catch((err) =>{
        next(err);
    })
}