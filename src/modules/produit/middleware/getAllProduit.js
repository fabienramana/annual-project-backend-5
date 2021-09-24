const {getAllProducts :getAllProduit} = require('../repository');

module.exports = (req, res, next) => {
    getAllProduit()
    .then((produits) => {
        res.json(produits);
    })
    .catch((err) =>{
        next(err);
    })
}