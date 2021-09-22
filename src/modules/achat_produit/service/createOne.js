const { createModel } = require('../../models/achatProduitModel')
const { createAchatProduit: createOne } = require('../repository')

module.exports = (achat_id, produit_id) => {

    const achat_produit = {
        achat_id,
        produit_id
    }

    return createModel.validate(achat_produit)
    .then(() => createOne(achat_id, produit_id))
}