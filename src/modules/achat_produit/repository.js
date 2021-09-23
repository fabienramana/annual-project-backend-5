const db = require('../../client/mysql')

function createAchatProduit(achatId, produitId){
    return new Promise(function(resolve, reject){
        var query = `INSERT INTO achat_produit (achatId, produitId) VALUES (${achatId}, ${produitId})`
        db.query(query, function(err, result){
            console.log(result)
            console.log(err)
            if(err) reject(err)
            if(result.affectedRows == 1)resolve('created')
        })
    })
}

function findByAchatId(achatId){
    return new Promise(function(resolve,reject){
        var query = "SELECT * FROM achat_produit WHERE achatId = ?";
        db.query(query, achatId, function(err,result){
            if(result.length > 0){
                resolve(result)
            }else{
                reject(err)
            }
        })
    })
}

function findByProduitId(produitId){
    return new Promise(function(resolve,reject){
        var query = "SELECT * FROM achat_produit WHERE produitId = ?";
        db.query(query, produitId, function(err,result){
            if(result.length > 0){
                resolve(result)
            }else{
                reject(err)
            }
        })
    })
}

module.exports = {
    createAchatProduit,
    findByAchatId,
    findByProduitId
}