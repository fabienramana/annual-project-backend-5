const { updateModel } = require('../../models/depotModel')
const { findDepotById: findOneById, updateDepot } = require('../repository')

module.exports = (depotToUpdate, id) => {

    return updateModel.validate(depotToUpdate)
    .then(()=> updateDepot(depotToUpdate, id))
    .then(function(){
        return findOneById(id);
    })
}