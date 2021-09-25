const {findAchatByTransactionId, updateAchat} = require('../../achat/repository')
const {findByAchatId} = require('../../achat_produit/repository')
const {updateProduit, findProduitById} = require('../../produit/repository')
const createColis = require('../../colis/service/createOne')

module.exports = async (transactionId) =>{
    const achat = await findAchatByTransactionId(transactionId)
    const produitsAchats  = await findByAchatId(achat.id)
    var somme = 0;
    
    for(produitAchat of produitsAchats){   
        await updateProduit({statut: "Vendu"}, produitAchat.produitId)
        var produit = await findProduitById(produitAchat.produitId)
        somme += produit.prix
    }
    // créer colis
    const colisId = await createColis({ prix: somme*0.05, type: "Achat"})
    await updateAchat({ statut: "Validé", colisId}, achat.id)
    return "done"
}