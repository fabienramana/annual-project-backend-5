const { findVentesByStatutAndVenteFinished } = require('../../offre/repository')
const { getUsersByRole } = require('../../user/repository')
const { findAchatByStatut } = require('../../achat/repository')
const { findByAchatId } = require('../../achat_produit/repository')
const { findProduitById } = require('../../produit/repository')

module.exports = async () => {
    let sommeVente = 0;
    let sommeAchat = 0;
    const marchands = await getUsersByRole("Marchand")
    const users = await getUsersByRole("Utilisateur")
    const inWait = await getUsersByRole("En attente")
    const successVentes = await findVentesByStatutAndVenteFinished("Accepté")
    const successAchats = await findAchatByStatut("Validé")
    let nbrAchats = 0;



    for(let i=0;i<successVentes.length;i++){
        let produit = await findProduitById(successVentes[i].produitId)
        sommeVente += produit.prix/1.3
    }

    for(let i=0;i<successAchats.length;i++){
        let achat_produits = await findByAchatId(successAchats[i].id)
        console.log(achat_produits)
        for(let j=0;j<achat_produits.length;j++){
            let produit = await findProduitById(achat_produits[j].produitId)
            sommeAchat += produit.prix
            nbrAchats +=1;
        }
    }


    const toReturn = {
        numberOfMarchands: marchands.length,
        numberOfUsers: users.length,
        numberOfInWait: inWait.length,
        numberOfSuccessVentes: successVentes.length,
        numberOfSuccessAchats: nbrAchats,
        sommeVente,
        sommeAchat
    }

    return toReturn 
}