//const deleteProduitCarac = require('./deleteProduitCarac');
//const findProduitCaracByProduit = require('./findProduitCaracByProduit')
const { deleteProduit, deleteProduitCarac, findProduitCaracByProduitId } = require('../repository')

module.exports = (id) => {

    return deleteProduit(id)
    .then(() => {
        findProduitCaracByProduitId(id)
        .then((produitCarac) => {
            const produitCarac_id = produitCarac.id
            deleteProduitCarac(produitCarac_id)
        })
        .catch((err)=> {
            console.error(err)
        })
        return "deleted"
    })
    .catch((err)=> {
        console.error(err)
    })
}