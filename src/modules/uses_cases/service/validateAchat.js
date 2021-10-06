const {findAchatByTransactionId, updateAchat} = require('../../achat/repository')
const {findByAchatId} = require('../../achat_produit/repository')
const {updateProduit, findProduitById} = require('../../produit/repository')
const { findUserByEmail } = require('../../user/repository')
const {findIfAchatIsDuringEvent} = require('../../evenement/repository')
const { findDepotById ,updateDepot } = require('../../depot/repository')
const createColis = require('../../colis/service/createOne')
const createGreenCoin = require('../../green_coin/service/createOne')

module.exports = async (transactionId, email) =>{
    const achat = await findAchatByTransactionId(transactionId)
    const produitsAchats  = await findByAchatId(achat.id)
    const user = await findUserByEmail(email)
    var somme = 0;

    if(achat.statut == "Validé"){
        throw new Error('Achat déjà effectué')
    }
    
    for(produitAchat of produitsAchats){   
        await updateProduit({statut: "Vendu"}, produitAchat.produitId)
        var produit = await findProduitById(produitAchat.produitId)
        somme += produit.prix
        const depot = await findDepotById(produit.depotId)
        await updateDepot({capacite: depot.capacite+1}, depot.id)
    }
    var sommeGC = somme*0.05
    const boolAchatInEvent = await findIfAchatIsDuringEvent()
    if(boolAchatInEvent){
        sommeGC *= 2
    }
    await createGreenCoin({ montant: sommeGC, utilisateurId: user.id})
    const colisId = await createColis({ prix: somme*0.05, type: "Achat"})
    await updateAchat({ statut: "Validé", colisId}, achat.id)
    return "done"
}