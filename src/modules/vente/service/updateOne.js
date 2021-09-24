const { updateModel } = require('../../models/venteModel')
const { findVenteById: findOneById, updateVente: updateOne } = require('../repository')

module.exports = (venteToUpdate, id) => {


    return updateModel.validate(venteToUpdate)
    .then(() => updateOne(venteToUpdate, id))
    .then(function(){
        return findOneById(id);
    })
}