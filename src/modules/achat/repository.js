const db = require('../../client/mysql')

function createAchat(achat){
    return new Promise(function(resolve, reject){
        var query = `INSERT INTO achat (date, utilisateurId, transactionId) VALUES ( "${achat.date}", ${achat.utilisateurId}, "${achat.transactionId}")`
        db.query(query, function(err, result){
            if(err) reject(err)
            if(result.affectedRows == 1)resolve(result.insertId)
            else{
                reject(new Error('Insert failed'))
            }
        })
        
    })
}

function deleteAchat(id){
    return new Promise(function(resolve, reject) {
        var query = `DELETE FROM achat WHERE id = ${id}`
        db.query(query, function(err, result){
            if(err) reject(err)
            if(result.affectedRows == 1)resolve('deleted')
        })
    })
}

function findOneById(id){
    return new Promise(function(resolve,reject){
        var query = "SELECT * FROM achat WHERE id = ?";
        db.query(query, id, function(err,result){
            if(err){
                reject(err)
            }
            else if(result.length > 0){
                resolve(result[0])
            }
            else if(result.length == 0){
                reject(new Error('No record found'))
            }
        })
    })
}

function getAll(){
    return new Promise(function(resolve,reject){
        var query = "SELECT * FROM achat";
        db.query(query, function(err,result){
            if(err){
                reject(err)
            }
            else if(result.length > 0){
                resolve(result)
            }
            else if(result.length == 0){
                resolve([])
            }
        })
    })
}

function getAllByUser(id){
    return new Promise(function(resolve,reject){
        var userQuery = "SELECT * FROM achat WHERE utilisateurId = ?";
        db.query(userQuery, id, function(err,result){
            if(err){
                reject(err)
            }
            else if(result.length > 0){
                resolve(result)
            }
            else if(result.length == 0){
                resolve([])
            }
        })
    })
}

async function findAchatByTransactionId(id){
    return new Promise(function(resolve,reject){
        var query = "SELECT * FROM achat WHERE transactionId = ?";
        db.query(query, id, function(err,result){
            if(err) reject (err);
            if(result.length == 0){
                resolve(null)
            }
            resolve(result[0])
        })
    })
}

async function findAchatByStatut(statut){
    return new Promise(function(resolve,reject){
        var query = `SELECT * FROM achat WHERE statut = "${statut}"`;
        db.query(query, function(err,result){
            if(err){
                reject(err)
            }
            else if(result.length > 0){
                resolve(result)
            }
            else if(result.length == 0){
                resolve([])
            }
        })
    })
}

async function updateAchat(achatToUpdate, id){
    return new Promise(function(resolve, reject) {
        db.query(`UPDATE achat SET ? WHERE id = ?`,[achatToUpdate, id], function(err, result){
            if(err) reject(err)
            if(result.affectedRows == 1)resolve('updated')
            else{
                reject(new Error('Update failed'))
            }
        })
    })
}

module.exports = {
    createAchat,
    deleteAchat,
    findOneById,
    getAll,
    getAllByUser,
    findAchatByTransactionId,
    updateAchat,
    findAchatByStatut
}