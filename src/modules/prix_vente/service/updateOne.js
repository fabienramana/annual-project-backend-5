const { findPrixVenteById: findOneById, updatePrixVente: updateOne } = require('../repository')

module.exports = (prixVenteToUpdate, id) => {

    return updateOne(prixVenteToUpdate, id)
    .then(function(){
        return findOneById(id);
    })
}