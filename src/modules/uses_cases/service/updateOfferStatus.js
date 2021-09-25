const {findVenteById, updateVente} = require('../../vente/repository')
const {findOffreById, updateOffre} = require('../../offre/repository')
const {findProduitById, updateProduit} = require('../../produit/repository')

module.exports = async (id, statut) =>{
    const offre = await findOffreById(id)
    const vente = await findVenteById(offre.venteId)
    const produit = await findProduitById(vente.produitId)

    if (statut == "Accepté"){
        await updateOffre({ statut: "Accepté"}, id)
        await updateProduit({statut: "En vente"}, produit.id)
    }
    else if (statut == "Refusé"){
        await updateOffre({ statut: "Refusé"}, id)
        await updateProduit({statut: "Non valide"}, produit.id)
    }

    await updateVente({statut: "Terminé"}, vente.id)
    return "done"
}