const db = require('../../client/mysql')

function createAchat(achat){
    return new Promise(function(resolve, reject){
        var query = `INSERT INTO achat (date, utilisateurId, achatProduitId) VALUES ( "${achat.date}", ${achat.utilisateurId}, ${achat.achatProduitId})`
        db.query(query, function(err, result){
            console.log(result)
            console.log(err)
            if(err) reject(err)
            if(result.affectedRows == 1)resolve('created')
        })
        
    })
}

function deleteAchat(id){
    return new Promise(function(resolve, reject) {
        var query = `DELETE FROM achat WHERE id = ${id}`
        db.query(query, function(err, result){
            console.log(result)
            console.log(err)
            if(err) reject(err)
            if(result.affectedRows == 1)resolve('deleted')
        })
    })
}

function findOneById(id){
    return new Promise(function(resolve,reject){
        var query = "SELECT * FROM achat WHERE id = ?";
        db.query(query, id, function(err,result){
            console.log(result)
            console.log(err)
            if(result.length > 0){
                resolve(result[0])
            }else{
                reject(err)
            }
        })
    })
}

function getAll(){
    return new Promise(function(resolve,reject){
        var query = "SELECT * FROM achat";
        db.query(query, function(err,result){
            if(result.length > 0){
                resolve(result)
            }else{
                reject(err)
            }
        })
    })
}

function getAllByUser(id){
    return new Promise(function(resolve,reject){
        var userQuery = "SELECT * FROM achat WHERE utilisateurId = ?";
        db.query(userQuery, id, function(err,result){
            if(result.length > 0){
                resolve(result)
            }else{
                reject(err)
            }
        })
    })
}

module.exports = {
    createAchat,
    deleteAchat,
    findOneById,
    getAll,
    getAllByUser
}