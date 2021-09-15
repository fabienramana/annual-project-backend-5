const { updateModel } = require('../../models/produitModel')
const connect =  require('../../../client/mysql');
const findProduitById = require('./findProduitById')

module.exports = (produitToUpdate, id) => {

    return updateModel.validate(produitToUpdate)
    .then(function() {
        return new Promise(function(resolve, reject) {
            connect.query(`UPDATE produit SET ? WHERE id = ?`,[produitToUpdate, id], function(err, result){
                console.log(result)
                console.log(err)
                if(err) reject(err)
                if(result.affectedRows == 1)resolve('updated')
            })
        })
    })
    .then(() => findProduitById(id))
    .catch((err)=>{
        console.error(err)
    })
        
    
}