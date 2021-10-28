const { findColisById } = require('../../colis/repository');
const { findVenteById } = require('../../vente/repository');
const { createRetour } = require('../repository')
const createOne = require('../../colis/service/createOne');

module.exports = async (venteId) => {
    const vente = await findVenteById(venteId);
    const colis = await findColisById(vente.colisId);
    const colisId = await createOne({ prix: colis.prix, type: "Retour"})
    createRetour(venteId, colisId)

}