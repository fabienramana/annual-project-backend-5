const { createModel } = require('../../models/depotModel')
const {findIfLibelleExists, createDepot}= require('../repository')

module.exports = (libelle, adresse, codePostal, ville) => {

    const depot = {
        libelle,
        adresse,
        codePostal,
        ville
    }

    return createModel.validate(depot)
    .then(() => findIfLibelleExists(libelle))
    .then(() => createDepot(libelle, adresse, codePostal, ville))
}