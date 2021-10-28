const { categorieModel } = require('../../models/categorieModel')
const {findCategorieById: findOneById, updateCategorie} = require('../repository')

module.exports = (libelle, id) => {
    const categorie = {
        libelle
    }
    return categorieModel.validate({
        libelle
    })
    .then(() => updateCategorie(categorie, id))
    .then(function(){
        return findOneById(id);
    })
}