const db = require('../../client/mysql')
const pushNotif = require('../onesignal/pushNotification')

function createCategorie(libelle){
    var query = `INSERT INTO categorie (libelle) VALUES ("${libelle}")`
    return new Promise(function(resolve, reject) {
        db.query(query, function(err, result){
            if(err) reject(err)
            console.log(result)
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
            if(result.length > 0){
                resolve(result)
            }
            else if(result.length == 0){
                resolve([])
            }
            else{
                reject(err)
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
    console.log(categorie, id)
    return new Promise(function(resolve, reject) {
        var query = `UPDATE categorie SET ? WHERE id = ?`
        db.query(query,[categorie, id], function(err, result){
            console.log(err)
            console.log(result)
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
            if(result.length > 0){
                resolve(result[0])
            }
            else if(result.length == 0){
                reject(new Error('No record found'))
            }
            else{
                reject(err)
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