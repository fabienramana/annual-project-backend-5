const insertProduitAndReturnId = require('../../produit/service/insertProduitAndReturnId')
const createProduitCarac = require('../../produit/service/createProduitCarac')
const createVente = require('../../vente/service/createOne')
const createImage = require('../../image/service/createOne')
const createOffre = require('../../offre/service/createOne')

module.exports = async (vente, produit, images, caracs) => {

    try {
        const produitId = await insertProduitAndReturnId(produit);
        vente.produit_id = produitId;
        const venteId = await createVente(vente);
        await createOffre(produit, venteId)
        for await (element of caracs){
            let caracteristique = {
                valeur: element.valeur,
                caracteristiques_tech_id: element.caracteristiqueId,
                produit_id: produitId
            }
            await createProduitCarac(caracteristique);
        }
        for await (element of images) {
            let image = {
                url: element,
                produit_id: produitId
            }
            await createImage(image);
        }
        return 'created';
    } catch (err) {
        throw err;
    }
}