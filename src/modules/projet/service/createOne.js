const { createModel } = require('../../models/projetModel')
const { createProject :createOne} = require('../repository');
const { getOneByEmail } = require('../../association/repository')


module.exports = async (projet, email) => {
    
    const association = await getOneByEmail(email);
    projet.associationId = association.id
    return createModel.validate(projet)
    .then(() => createOne(projet))
}