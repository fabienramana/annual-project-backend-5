const connect =  require('../../../client/mysql');
const deleteProduitCarac = require('./deleteProduitCarac');
const findProduitCaracByProduit = require('./findProduitCaracByProduit')

module.exports = (id) => {

    return new Promise(function(resolve, reject) {
        connect.query(`DELETE FROM produit WHERE id = ${id}`, function(err, result){
            console.log(err)
            console.log(result)
            if(err) reject(err)
            if(result.affectedRows == 1)resolve('deleted')
        })
    })
    .then(() => {
        findProduitCaracByProduit(id)
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