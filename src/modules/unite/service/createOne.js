const { createModel } = require('../../models/uniteModel')
const { createUnite: createOne} = require('../repository')

module.exports = (libelle, abreviation, type) => {

    const unite = {
        libelle,
        abreviation,
        type
    }

    return createModel.validate(unite)
    .then(() => createOne(libelle, abreviation, type))
}