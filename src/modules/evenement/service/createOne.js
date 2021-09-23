const { createModel } = require('../../models/evenementModel')
const {createEvenement: createOne } = require('../repository')

module.exports = (evenement) => {

    return createModel.validate(evenement)
    .then(() => createOne(evenement))
}