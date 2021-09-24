const { updateModel } = require('../../models/produitModel')
const { findProduitById, updateProduit :updateOne } = require('../repository')
module.exports = (produitToUpdate, id) => {

    return updateModel.validate(produitToUpdate)
    .then(() => updateOne(produitToUpdate, id))
    .then(() => findProduitById(id))
    .catch((err)=>{
        console.error(err)
    })
        
    
}