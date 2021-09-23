const db = require('../../client/mysql')

function createDepot(libelle, adresse, codePostal, ville){
    return new Promise(function(resolve, reject){
        var query = `INSERT INTO depot (libelle, adresse, codePostal, ville) VALUES ("${libelle}", "${adresse}", "${codePostal}", "${ville}")`
        db.query(query, function(err, result){
            if(err) reject(err)
            console.log(result)
            if(result.affectedRows == 1)resolve('created')
        })
        
    })
}

function findIfLibelleExists(libelle){
    return new Promise(function(resolve, reject)  {
        var query = 'SELECT * FROM depot WHERE libelle = ?'
        db.query(query, libelle, function(error, results, fields){
            if(results != null && results.length > 0){
                reject(new Error("Le libellé existe déjà"))
            }
            if(error){
                reject(error)
            }
            
            resolve('ok')
        })
    })
}

function deleteDepot(id){
    return new Promise(function(resolve, reject) {
        var query = `DELETE FROM depot WHERE id = ${id}`
        db.query(query, function(err, result){
            if(err) reject(err)
            if(result.affectedRows == 1)resolve('deleted')
        })
    })
}

function findDepotById(id){
    return new Promise(function(resolve,reject){
        var query = "SELECT * FROM depot WHERE id = ?";
        db.query(query, id, function(err,result){
            if(result.length > 0){
                resolve(result[0])
            }else{
                reject(err)
            }
        })
    })
}

function getAllDepots(){
    return new Promise(function(resolve,reject){
        var userQuery = "SELECT * FROM depot";
        db.query(userQuery, function(err,result){
            if(result.length > 0){
                resolve(result)
            }else{
                reject(err)
            }
        })
    })
}

function updateDepot(depotToUpdate, id){
    return new Promise(function(resolve, reject) {
        var query = `UPDATE depot SET ? WHERE id = ?`
        db.query(query,[depotToUpdate, id], function(err, result){
            if(err) reject(err)
            console.log(result)
            if(result.affectedRows == 1)resolve('updated')
        })
    })
}

module.exports = {
    createDepot,
    findIfLibelleExists,
    deleteDepot,
    findDepotById,
    getAllDepots,
    updateDepot
}