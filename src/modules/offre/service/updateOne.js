const { updateModel } = require('../../models/offreModel')
const { findOffreById: findOneById, updateOffre: updateOne } = require('../repository')

module.exports = (offreToUpdate, id) => {

    return updateModel.validate(offreToUpdate)
    .then(() => updateOne(offreToUpdate, id))
    .then(function(){
        return findOneById(id);
    })
}