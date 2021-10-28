const db = require('../../client/mysql')


async function createVente(vente, date_string){
    return new Promise(function(resolve, reject){
        var query = `INSERT INTO vente (statut, date, produitId, utilisateurId) VALUES ("${vente.statut}", "${date_string}", ${vente.produitId}, ${vente.utilisateurId})`
        db.query(query, function(err, result){
            if(err) reject(err)
            if(result.affectedRows == 1)resolve(result.insertId)
            else reject(new Error('Insert failed'))
        })
        
    })
}

function findVentesByStatut(statut){
    return new Promise(function(resolve,reject){
        var query = "SELECT v.*, p.titre FROM vente v LEFT JOIN produit p ON p.id = v.produitId WHERE v.statut = ?";
        db.query(query, statut, function(err,result){
            if(result.length > 0){
                resolve(result)
            }
            else if(result.length ==0){
                resolve([])
            }else{
                reject(err)
            }
        })
    })
}

async function findVenteById(id){
    return new Promise(function(resolve,reject){
        var query = "SELECT * FROM vente WHERE id = ?";
        db.query(query, id, function(err,result){
            if(result.length > 0){
                resolve(result[0])
            }
            else if(result.length ==0){
                reject(new Error('No record found'))
            }else{
                reject(err)
            }
        })
    })
}

async function updateVente(venteToUpdate, id){
    return new Promise(function(resolve, reject) {
        var query = `UPDATE vente SET ? WHERE id = ?`
        db.query(query,[venteToUpdate, id], function(err, result){
            if(err) reject(err)
            if(result.affectedRows == 1)resolve('updated')
            else reject(new Error('Update failed'))
        })
    })
}

function getAllVentesByUser(id){
    return new Promise(function(resolve,reject){
        var userQuery = "SELECT v.*, p.titre FROM vente v LEFT JOIN produit p ON p.id = v.produitId WHERE utilisateurId = ?";
        db.query(userQuery, id, function(err,result){
            if(err) reject(err);
            resolve(result)
        })
    })
}

module.exports = {
    createVente,
    findVentesByStatut,
    findVenteById,
    updateVente,
    getAllVentesByUser
}