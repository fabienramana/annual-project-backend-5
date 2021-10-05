const { createModel } = require('../../models/depotModel')
const {findIfLibelleExists, createDepot}= require('../repository')

module.exports = (libelle, adresse, codePostal, ville, capacite) => {

    const depot = {
        libelle,
        adresse,
        codePostal,
        ville,
        capacite
    }

    return createModel.validate(depot)
    .then(() => findIfLibelleExists(libelle))
    .then(() => createDepot(libelle, adresse, codePostal, ville, capacite))
}