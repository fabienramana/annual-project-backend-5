const db = require('../../client/mysql')
const pushNotif = require('../onesignal/pushNotification')

function createCategorie(libelle){
    var query = `INSERT INTO categorie (libelle) VALUES ("${libelle}")`
    return new Promise(function(resolve, reject) {
        db.query(query, function(err, result){
            if(err) reject(err)
            if(result.affectedRows == 1){
                pushNotif(libelle)
                resolve('created')
            }
        })
    })
}

function getAllCategories(){
    return new Promise(function(resolve,reject){
        var query = "SELECT * FROM categorie";
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

function findIfLibelleExists(libelle){
    return new Promise(function(resolve, reject)  {
        var query = 'SELECT * FROM categorie WHERE libelle = ?'
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

function deleteCategorie(id){
    return new Promise(function(resolve, reject) {
        var query = `DELETE FROM categorie WHERE id = ${id}`
        db.query(query, function(err, result){
            if(err) reject(err)
            if(result.affectedRows == 1)resolve('deleted')
        })
    })
}

function updateCategorie(categorie, id){
    return new Promise(function(resolve, reject) {
        var query = `UPDATE categorie SET ? WHERE id = ?`
        db.query(query,[categorie, id], function(err, result){
            if(err) reject(err)
            if(result.affectedRows == 1)resolve('updated')
            else{
                reject(new Error('Update failed'))
            }
        })
    })
}

function findCategorieById(id){
    return new Promise(function(resolve,reject){
        var query = "SELECT * FROM categorie WHERE id = ?";
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

module.exports = {
    createCategorie,
    getAllCategories,
    findIfLibelleExists,
    deleteCategorie,
    updateCategorie,
    findCategorieById
}