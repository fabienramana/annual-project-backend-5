const db = require('../../client/mysql')

async function createOffre(date_string, price, venteId){
    var query = `INSERT INTO offre (date, prix, statut, venteId) VALUES ("${date_string}", "${price}", "En attente", ${venteId})`
    db.query(query, function(err, result){
        console.log(result)
        console.log(err)
        if(err) throw err
        if(result.affectedRows == 1) return "created"
        else reject(new Error('Insert failed'))
    })
}

async function updateOffre(offreToUpdate, id){
    return new Promise(function(resolve, reject) {
        var query = `UPDATE offre SET ? WHERE id = ?`
        db.query(query,[offreToUpdate, id], function(err, result){
            console.log(result)
            console.log(err)
            if(err) reject(err)
            if(result.affectedRows == 1)resolve('updated')
            else reject(new Error('Update failed'))
        })
    })
}

async function findOffreById(id){
    return new Promise(function(resolve,reject){
        var query = "SELECT * FROM offre WHERE id = ?";
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

async function findOffreByVenteId(id){
    return new Promise(function(resolve,reject){
        var query = "SELECT * FROM offre WHERE venteId = ?";
        db.query(query, id, function(err,result){
            if(err) reject(err);
            resolve(result)
        })
    })
}

function findOffresByUserAndWaiting(email){
    return new Promise(function(resolve,reject){
        var query = `SELECT o.*, p.titre FROM offre o LEFT JOIN vente v ON v.id = o.venteId LEFT JOIN produit p ON p.id = v.produitId LEFT JOIN utilisateur u ON v.utilisateurId = u.id WHERE o.statut = 'En attente' AND u.email = "${email}"`;
        db.query(query, function(err,result){
            if(err) reject(err);
            resolve(result)
        })
    })
}

module.exports = {
    createOffre,
    updateOffre,
    findOffreById,
    findOffreByVenteId,
    findOffresByUserAndWaiting
}