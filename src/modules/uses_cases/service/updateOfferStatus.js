const {findVenteById, updateVente} = require('../../vente/repository')
const {findOffreById, updateOffre} = require('../../offre/repository')
const {findProduitById, updateProduit} = require('../../produit/repository')
const {findPrixVenteByTitre} = require('../../prix_vente/repository')

module.exports = async (id, statut) =>{
    const offre = await findOffreById(id)
    const vente = await findVenteById(offre.venteId)
    const produit = await findProduitById(vente.produitId)
    const prix_vente = await findPrixVenteByTitre(produit.titre)

    if (statut == "Accepté"){
        await updateOffre({ statut: "Accepté"}, id)
        await updateProduit({statut: "En vente", prix: prix_vente.prix + prix_vente.prix*0.3}, produit.id)
    }
    else if (statut == "Refusé"){
        await updateOffre({ statut: "Refusé"}, id)
        await updateProduit({statut: "Non valide"}, produit.id)
    }

    await updateVente({statut: "Terminé"}, vente.id)
    return "done"
}