const { createModel } = require('../../models/achatModel')
const { createAchat: createOne } = require('../repository')

module.exports = (achat) => {
    return createModel.validate(achat)
    .then(() => createOne(achat))
}