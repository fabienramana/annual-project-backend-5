const db = require('../../client/mysql')

function createAchatProduit(achat_id, produit_id){
    return new Promise(function(resolve, reject){
        var query = `INSERT INTO achat_produit (achat_id,produit_id) VALUES (${achat_id}, ${produit_id})`
        db.query(query, function(err, result){
            console.log(result)
            console.log(err)
            if(err) reject(err)
            if(result.affectedRows == 1)resolve('created')
        })
        
    })
}

function findByAchatId(achat_id){
    return new Promise(function(resolve,reject){
        var query = "SELECT * FROM achat_produit WHERE achat_id = ?";
        db.query(query, achat_id, function(err,result){
            if(result.length > 0){
                resolve(result)
            }else{
                reject(err)
            }
        })
    })
}

function findByProduitId(produit_id){
    return new Promise(function(resolve,reject){
        var query = "SELECT * FROM achat_produit WHERE produit_id = ?";
        db.query(query, produit_id, function(err,result){
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