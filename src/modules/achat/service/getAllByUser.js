const { findUserByEmail } = require('../../user/repository')
const { getAllByUser } = require('../repository')
const { findByAchatId } = require('../../achat_produit/repository')
const { findProduitById } = require('../../produit/repository')

module.exports = async (email) => {
    const achatsToReturn = [];
    const user = await findUserByEmail(email);
    const achats = await getAllByUser(user.id);
    for await (const achat of achats) {
        const achatProduits = await findByAchatId(achat.id);
        for await (const achatProduit of achatProduits) {
            const produit = await findProduitById(achatProduit.produitId)
            achatsToReturn.push({
                date: achat.date,
                prix: produit.prix,
                titre: produit.titre,
                statut: achat.statut
            });
        }
    }
    return achatsToReturn;
}