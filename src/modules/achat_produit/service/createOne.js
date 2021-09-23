const { createModel } = require('../../models/achatProduitModel')
const { createAchatProduit: createOne } = require('../repository')

module.exports = (achatId, produitId) => {

    const achat_produit = {
        achatId,
        produitId
    }

    return createModel.validate(achat_produit)
    .then(() => createOne(achatId, produitId))
}