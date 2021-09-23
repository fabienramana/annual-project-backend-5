const { updateModel } = require('../../models/imageModel')
const { findImageById: findOneById, updateImage: updateOne, updateImage } = require('../repository')

module.exports = (imageToUpdate, id) => {

    return updateModel.validate(imageToUpdate)
    .then(() => updateOne(imageToUpdate, id))
    .then(function(){
        return findOneById(id);
    })
}