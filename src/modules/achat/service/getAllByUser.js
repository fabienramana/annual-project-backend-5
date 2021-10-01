const { findUserByEmail } = require('../../user/repository')
const { getAllByUser } = require('../repository')
const { findByAchatId } = require('../../achat_produit/repository')
const { findProduitById } = require('../../produit/repository')

module.exports = async (email) => {
    const achatsToReturn = [];
    const user = await findUserByEmail(email);
    const achats = await getAllByUser(user.id);
    for(let i=0;i<achats.length;i++){
        let achats_produits = await findByAchatId(achats[i].id);
        for(let j=0;j<achats_produits.length;j++){
            let produit = await findProduitById(achats_produits[i].produitId)
            achatsToReturn.push({
                date: achats[i].date,
                prix: produit.prix,
                titre: produit.titre,
                statut: achats[i].statut
            })
        }
    }
    return achatsToReturn;
}