const { createModel } = require('../../models/produitModel')
const { insertProduitAndReturnId, createProduitCarac } = require('../repository')

module.exports = (product, carac_tech) => {

    console.log(product)
    return createModel.validate(product)
    .then(() => insertProduitAndReturnId(product))
    .then((productId) => {
        carac_tech.produitId = productId
        console.log(carac_tech)
        createProduitCarac(carac_tech)
        return "created"
    })
}