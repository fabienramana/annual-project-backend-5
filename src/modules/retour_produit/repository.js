const db = require('../../client/mysql')


async function getRetoursByUserEmail(email){
    return new Promise(function(resolve, reject) {
        var query = `SELECT r.*, p.titre, c.id as colisId, c.prix as colisPrix
        FROM retour_produit r, vente v, produit p, utilisateur u, colis c
        WHERE v.utilisateurId = u.id 
        AND r.colisId = c.id
        AND r.venteId = v.id 
        AND v.produitId = p.id
        AND u.email = '${email}'`
        db.query(query, function(err, result){
            if(err) reject(err)
            if(result) resolve(result)
        })
    })
}

async function getRetourById(id){
    return new Promise(function(resolve, reject) {
        var query = `SELECT r.*, p.titre, c.id as colisId, c.prix as prix
        FROM retour_produit r, vente v, produit p, colis c
        WHERE r.id = ${id}
        AND r.colisId = c.id
        AND r.venteId = v.id 
        AND v.produitId = p.id`
        db.query(query, function(err, result){
            if(err) reject(err)
            if(result) resolve(result[0])
        })
    })
}

async function getRetourByTransactionId(key) {
    return new Promise(function(resolve, reject) {
        var query = `SELECT * FROM retour_produit WHERE transactionId = '${key}'`
        db.query(query, function(err, result){
            if(err) reject(err)
            if(result) resolve(result[0])
        })
    })
}

async function createRetour(venteId){
    return new Promise(function(resolve, reject){
        var query = `INSERT INTO retour_produit (venteId, statut) VALUES ("${venteId}", "En attente")`
        db.query(query, function(err, result){
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
            if(err) reject(err)
            if(result.affectedRows == 1)resolve('updated')
            else reject(new Error('Update failed'))
        })
    })
}


module.exports = {
    createRetour,
    updateRetour,
    getRetoursByUserEmail,
    getRetourById,
    getRetourByTransactionId
}