const findProduitById = require('../service/findProduitByid');

module.exports = (req, res, next) => {
    const { id } = req.params

    findProduitById(id)
    .then((produit) => {
        res.json(produit)
    })
    .catch((err)=> {
        next(err)
    })
}