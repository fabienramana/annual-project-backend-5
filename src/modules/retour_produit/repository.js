const db = require('../../client/mysql')


async function getRetoursByUserEmail(email){
    return new Promise(function(resolve, reject) {
        var query = `SELECT r.*, p.titre
        FROM retour_produit r, vente v, produit p, utilisateur u
        WHERE v.utilisateurId = u.id 
        AND r.venteId = v.id 
        AND v.produitId = p.id
        AND u.email = '${email}'`
        db.query(query, function(err, result){
            console.log(result)
            console.log(err)
            if(err) reject(err)
            if(result) resolve(result)
        })
    })
}

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
    updateRetour,
    getRetoursByUserEmail
}