const { categorieModel } = require('../../models/categorieModel')
const { findIfLibelleExists, createCategorie } = require('../repository')

module.exports = (libelle) => {

    const categorie = {
        libelle
    }

    return categorieModel.validate({
        libelle
    })
    .then(() => findIfLibelleExists(libelle))
    .then(() => createCategorie(libelle))
}