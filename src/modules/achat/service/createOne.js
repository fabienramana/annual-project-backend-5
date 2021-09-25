const { createModel } = require('../../models/achatModel')
const { createAchat: createOne } = require('../repository')

module.exports = async (achat) => {
    const dateToday = new Date()
    const date_string = dateToday.getFullYear() + "-" + (dateToday.getMonth() +1) + "-" + dateToday.getDate()

    const achatToInsert = {
        date: date_string,
        utilisateurId: achat.utilisateurId,
        transactionId: achat.transactionId
    }

    return createModel.validate(achatToInsert)
    .then(() => createOne(achatToInsert))
}