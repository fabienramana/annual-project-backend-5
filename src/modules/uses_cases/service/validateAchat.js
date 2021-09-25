const {findAchatByTransactionId, updateAchat} = require('../../achat/repository')
const {findByAchatId} = require('../../achat_produit/repository')
const {updateProduit} = require('../../produit/repository')

module.exports = async (transactionId) =>{
    const achat = await findAchatByTransactionId(transactionId)
    const produits  = await findByAchatId(achat.id)
    
    for(produit of produits){   
        await updateProduit({statut: "Vendu"}, produit.produitId)
    }

    await updateAchat({ statut: "Validé"}, achat.id)
    return "done"
}