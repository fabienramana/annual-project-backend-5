const { updateModel } = require('../../models/uniteModel')
const { findUniteById: findOneById, updateUnite: updateOne } = require('../repository')

module.exports = (uniteToUpdate, id) => {

    return updateModel.validate(uniteToUpdate)
    .then(() => updateOne(uniteToUpdate, id))
    .then(() => findOneById(id));
}