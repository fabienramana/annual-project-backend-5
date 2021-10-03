const { findVenteById, updateVente } = require('../../vente/repository')
const { updateOffre} = require('../../offre/repository')
const { updateProduit } = require('../../produit/repository')
const createRetour = require('../../retour_produit/service/createRetour')

module.exports = async (venteId, offreId, statut) => {
    const vente = await findVenteById(venteId);

    if(statut == "Accepté"){
        await updateVente({statut: "Terminé"}, venteId);
        await updateOffre({statut:"Accepté"}, offreId);
        await updateProduit({statut:"En vente"}, vente.produitId);
    }
    else {
        await updateVente({statut: "Terminé"}, venteId);
        await updateOffre({statut:"Refusé"}, offreId);
        await createRetour(venteId);
    }

    return "done"
}