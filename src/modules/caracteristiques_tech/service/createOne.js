const { createModel } = require('../../models/caracteristiqueTechModel')
const { createCaracTechnique: createOne } = require('../repository')

module.exports = (caracTechnique) => {
    return createModel.validate(caracTechnique)
    .then(() => createOne(caracTechnique))
}