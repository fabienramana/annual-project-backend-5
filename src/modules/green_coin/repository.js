const db = require('../../client/mysql')

async function createGreenCoin(greenCoinToInsert){
    return new Promise(function(resolve, reject){
        var query = `INSERT INTO green_coin (montant, dateExpiration, montantRestant, utilisateurId) VALUES ("${greenCoinToInsert.montant}", "${greenCoinToInsert.dateExpiration}", "${greenCoinToInsert.montantRestant}", ${greenCoinToInsert.utilisateurId})`
        db.query(query, function(err, result){
            console.log(result)
            console.log(err)
            if(err) reject(err)
            if(result.affectedRows == 1)resolve('created')
            else{
                reject(new Error('Insert failed'))
            }
        })
        
    })
}

function findGreenCoinsByUser(id){
    return new Promise(function(resolve,reject){
        var query = "SELECT * FROM green_coin WHERE utilisateurId = ? AND montantRestant != 0 ORDER BY dateExpiration";
        db.query(query, id, function(err,result){
            console.log(result)
            console.log(err)
            if(result.length > 0){
                resolve(result)
            }
            else if(result.length == 0){
                resolve([])
            }else{
                reject(err)
            }
        })
    })
}

function findGreenCoinById(id){
    return new Promise(function(resolve,reject){
        var query = "SELECT * FROM green_coin WHERE id = ?";
        db.query(query, id, function(err,result){
            if(result.length > 0){
                resolve(result[0])
            }
            else if(result.length == 0){
                reject(new Error('No record found'))
            }else{
                reject(err)
            }
        })
    })
}


function updateGreenCoin(greenCoinToUpdate, id){
    return new Promise(function(resolve, reject) {
        var query = `UPDATE green_coin SET ? WHERE id = ?`
        db.query(query,[greenCoinToUpdate, id], function(err, result){
            if(err) reject(err)
            console.log(result)
            if(result.affectedRows == 1)resolve('updated')
            else{
                reject(new Error('Update failed'))
            }
        })
    })
}

module.exports = {
    createGreenCoin,
    findGreenCoinsByUser,
    findGreenCoinById,
    updateGreenCoin
}