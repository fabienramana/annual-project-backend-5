const {createProduitCarac , insertProduitAndReturnId} = require('../../produit/repository')
const createVente = require('../../vente/service/createOne')
const createImage = require('../../image/service/createOne')
const createOffre = require('../../offre/service/createOne')

module.exports = async (vente, produit, images, caracs, email) => {

    try {
        const produitId = await insertProduitAndReturnId(produit);
        vente.produitId = produitId;
        const venteId = await createVente(vente, email);
        await createOffre(produit, venteId)
        for await (element of caracs){
            let caracteristique = {
                valeur: element.valeur,
                caracteristiquesTechId: element.caracteristiqueId,
                produitId: produitId
            }
            await createProduitCarac(caracteristique);
        }
        for await (element of images) {
            let image = {
                url: element,
                produitId: produitId
            }
            await createImage(image);
        }
        return 'created';
    } catch (err) {
        throw err;
    }
}