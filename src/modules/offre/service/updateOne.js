const { findOffreById: findOneById, updateOffre: updateOne } = require('../repository')

module.exports = (statut, id) => {

    offreToUpdate = {
        statut
    }
    return updateOne(offreToUpdate, id)
    .then(function(){
        return findOneById(id);
    })
}