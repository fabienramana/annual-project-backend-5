const { createModel } = require('../../models/prixVenteModel')
const { createPrixVente: createOne } = require('../repository') 

module.exports = (prix_vente) => {

    return createModel.validate(prix_vente)
    .then(() => createOne(prix_vente))
}