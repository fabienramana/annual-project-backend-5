const db = require('../../client/mysql')

async function createRetour(venteId){
    return new Promise(function(resolve, reject){
        var query = `INSERT INTO retour_produit (venteId, statut) VALUES ("${venteId}", "En attente")`
        db.query(query, function(err, result){
            console.log(result)
            console.log(err)
            if(err) reject(err)
            if(result.affectedRows == 1)resolve("created")
            else reject(new Error('Insert failed'))
        }) 
    })
}

async function updateRetour(retourToUpdate, id){
    return new Promise(function(resolve, reject) {
        var query = `UPDATE retour_produit SET ? WHERE id = ?`
        db.query(query,[retourToUpdate, id], function(err, result){
            console.log(result)
            console.log(err)
            if(err) reject(err)
            if(result.affectedRows == 1)resolve('updated')
            else reject(new Error('Update failed'))
        })
    })
}


module.exports = {
    createRetour,
    updateRetour
}