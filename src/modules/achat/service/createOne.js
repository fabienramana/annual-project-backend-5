const { createModel } = require('../../models/achatModel')
const { createAchat: createOne } = require('../repository')

module.exports = (achat) => {
    const dateToday = new Date()
    const date_string = dateToday.getFullYear() + "-" + (dateToday.getMonth() +1) + "-" + dateToday.getDate()

    const achatToInsert = {
        date: date_string,
        utilisateurId: achat.utilisateurId,
        achatProduitId: achat.achatProduitId
    }

    return createModel.validate(achatToInsert)
    .then(() => createOne(achatToInsert))
}