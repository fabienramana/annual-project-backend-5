const updateProduit = require('../service/updateProduit');

module.exports = (req, res, next) => {
    const { id } = req.params
    const productToUpdate = req.body

    console.log(id)
    console.log(productToUpdate)

    updateProduit(productToUpdate, id)
    .then((produit) => {
        res.json(produit)
    })
    .catch((err)=> {
        next(err)
    })
}