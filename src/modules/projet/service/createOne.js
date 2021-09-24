const { createModel } = require('../../models/projetModel')
const { createProject :createOne} = require('../repository');

module.exports = (projet) => {
    
    return createModel.validate(projet)
    .then(() => createOne(projet))
}