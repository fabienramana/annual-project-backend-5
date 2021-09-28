const db = require('../../client/mysql')


function createPrixVente(prix_vente){
    return new Promise(function(resolve, reject){
        var query = `INSERT INTO prix_vente (titre, prix, categorieId) VALUES ("${prix_vente.titre}", ${prix_vente.prix}, ${prix_vente.categorieId})`
        db.query(query, function(err, result){
            console.log(result)
            console.log(err)
            if(err) reject(err)
            if(result.affectedRows == 1)resolve("created")
            else reject(new Error('Insert failed'))
        }) 
    })
}

function deletePrixVente(id){
    return new Promise(function(resolve, reject) {
        db.query(`DELETE FROM prix_vente WHERE id = ${id}`, function(err, result){
            if(err) reject(err)
            if(result.affectedRows == 1)resolve('deleted')
        })
    })
}

async function findPrixVenteByTitre(titre){
    return new Promise(function(resolve,reject){
        var query = "SELECT * FROM prix_vente WHERE titre = ?";
        db.query(query, titre, function(err,result){
            console.log("prix_vente" + result[0])
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

function getAllPrixVente(){
    return new Promise(function(resolve,reject){
        var query = "SELECT * FROM prix_vente";
        db.query(query, function(err,result){
            if(result.length > 0){
                resolve(result)
            }else if(result.length == 0){
                resolve([])
            }
            else{
                reject(err)
            }
        })
    })
}

function updatePrixVente(prixVenteToUpdate, id){
    return new Promise(function(resolve, reject) {
        var query = `UPDATE prix_vente SET ? WHERE id = ?`
        db.query(query,[prixVenteToUpdate, id], function(err, result){
            console.log(result)
            console.log(err)
            if(err) reject(err)
            if(result.affectedRows == 1)resolve('updated')
            else reject(new Error('Update failed'))
        })
    })
}

function findPrixVenteById(id){
    return new Promise(function(resolve, reject) {
        var query = `SELECT * FROM prix_vente WHERE id = ?`
        db.query(query,id, function(err, result){
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

module.exports = {
    createPrixVente,
    deletePrixVente,
    findPrixVenteByTitre,
    getAllPrixVente,
    updatePrixVente,
    findPrixVenteById
}