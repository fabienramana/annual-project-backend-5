const db = require('../../client/mysql')

function createAchatProduit(achatId, produitId){
    return new Promise(function(resolve, reject){
        var query = `INSERT INTO achat_produit (achatId, produitId) VALUES (${achatId}, ${produitId})`
        db.query(query, function(err, result){
            if(err) reject(err)
            if(result.affectedRows == 1)resolve('created')
            else{
                reject(new Error('Insert failed'))
            }
        })
    })
}

async function findByAchatId(achatId){
    return new Promise(function(resolve,reject){
        var query = "SELECT * FROM achat_produit WHERE achatId = ?";
        db.query(query, achatId, function(err,result){
            if(err){
                reject(err)
            }
            else if(result.length > 0){
                resolve(result)
            }else if(result.length == 0){
                resolve([])
            }
        })
    })
}

function findByProduitId(produitId){
    return new Promise(function(resolve,reject){
        var query = "SELECT * FROM achat_produit WHERE produitId = ?";
        db.query(query, produitId, function(err,result){
            if(err){
                reject(err)
            }
            else if(result.length > 0){
                resolve(result)
            }else if(result.length == 0){
                resolve([])
            }
        })
    })
}

module.exports = {
    createAchatProduit,
    findByAchatId,
    findByProduitId
}