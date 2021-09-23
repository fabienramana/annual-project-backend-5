const { categorieModel } = require('../../models/categorieModel')
const {findCategorieById: findOneById, updateCategorie} = require('../repository')

module.exports = (libelle, id) => {
    console.log(typeof(id))
    const categorie = {
        libelle
    }
    console.log(categorie)
    return categorieModel.validate({
        libelle
    })
    .then(() => updateCategorie(categorie, id))
    .then(function(){
        return findOneById(id);
    })
}