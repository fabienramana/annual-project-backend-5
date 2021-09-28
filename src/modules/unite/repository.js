const db = require('../../client/mysql')

function createUnite(libelle, abreviation, type){
    return new Promise(function(resolve, reject){
        var query = `INSERT INTO unite (libelle, abreviation, type) VALUES ("${libelle}", "${abreviation}", "${type}")`
        db.query(query, function(err, result){
            if(err) reject(err)
            console.log(result)
            if(result.affectedRows == 1)resolve('created')
            else reject(new Error('Insert failed'))
        })        
    })
}

function deleteUnite(id){
    return new Promise(function(resolve, reject) {
        var query = `DELETE FROM unite WHERE id = ${id}`
        db.query(query, function(err, result){
            if(err) reject(err)
            if(result.affectedRows == 1)resolve('deleted')
        })
    })
}

function findUniteById(id){
    return new Promise(function(resolve,reject){
        var query = "SELECT * FROM unite WHERE id = ?";
        db.query(query, id, function(err,result){
            if(result.length > 0){
                resolve(result[0])
            }else if(result.length ==0){
                reject(new Error('No record found'))
            }
            else{
                reject(err)
            }
        })
    })
}

function getAllUnites(){
    return new Promise(function(resolve,reject){
        var userQuery = "SELECT * FROM unite";
        db.query(userQuery, function(err,result){
            if(result.length > 0){
                resolve(result)
            }
            else if(result.length ==0){
                resolve([])
            }
            else{
                reject(err)
            }
        })
    })
}

function updateUnite(uniteToUpdate, id){
    return new Promise(function(resolve, reject) {
        var query = `UPDATE unite SET ? WHERE id = ?`
        db.query(query,[uniteToUpdate, id], function(err, result){
            if(err) reject(err)
            console.log(result)
            if(result.affectedRows == 1)resolve('updated')
            else reject(new Error('Update failed'))
        })
    })
}

module.exports = {
    createUnite,
    deleteUnite,
    findUniteById,
    getAllUnites,
    updateUnite
}