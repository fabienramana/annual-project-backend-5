const {findVenteById, updateVente} = require('../../vente/repository')
const {findOffreById, updateOffre} = require('../../offre/repository')
const {findProduitById, updateProduit} = require('../../produit/repository')
const {findPrixVenteByTitre} = require('../../prix_vente/repository')
const { getDepotsWithSpace, updateDepot } = require('../../depot/repository')
const createColis = require('../../colis/service/createOne')

module.exports = async (id, statut) =>{
    const dateToday = new Date()
    const date_string = dateToday.getFullYear() + "-" + (dateToday.getMonth() +1) + "-" + dateToday.getDate()

    const offre = await findOffreById(id)
    const vente = await findVenteById(offre.venteId)
    const produit = await findProduitById(vente.produitId)
    const prix_vente = await findPrixVenteByTitre(produit.titre)

    if (statut == "Accepté"){
        const depots = await getDepotsWithSpace();
        let capacite = depots[0].capacite;
        let depotId = depots[0].id;
        for(let i=0;i<depots.length;i++){
            if(capacite < depots[i].capacite){
                capacite = depots[i].capacite;
                depotId = depots[i].id;
            }
        }

        await updateProduit({prix: prix_vente.prix + prix_vente.prix*0.3, depotId}, produit.id)
        const colisId = await createColis({ prix: prix_vente.prix*0.05, type: "Vente"})
        console.log("colisId :" +colisId)
        await updateOffre({ statut: "Accepté"}, id)
        await updateVente({statut: "En attente de produit", date: date_string, colisId}, vente.id)
        await updateDepot({capacite: capacite-1}, depotId)
    }
    else if (statut == "Refusé"){
        await updateOffre({ statut: "Refusé"}, id)
        await updateProduit({statut: "Non valide"}, produit.id)
        await updateVente({statut: "Terminé", date: date_string}, vente.id)
    }

    return "done"
}