const db = require('../../client/mysql')


async function createVente(vente, date_string){
    return new Promise(function(resolve, reject){
        var query = `INSERT INTO vente (statut, date, produitId) VALUES ("${vente.statut}", "${date_string}", ${vente.produitId})`
        db.query(query, function(err, result){
            console.log(result)
            console.log(err)
            if(err) reject(err)
            if(result.affectedRows == 1)resolve(result.insertId)
        })
        
    })
}

function findVentesByStatut(statut){
    return new Promise(function(resolve,reject){
        var query = "SELECT * FROM vente WHERE statut = ?";
        db.query(query, statut, function(err,result){
            if(result.length > 0){
                resolve(result)
            }else{
                reject(err)
            }
        })
    })
}

function findVenteById(id){
    return new Promise(function(resolve,reject){
        var query = "SELECT * FROM vente WHERE id = ?";
        db.query(query, id, function(err,result){
            if(result.length > 0){
                resolve(result[0])
            }else{
                reject(err)
            }
        })
    })
}

function updateVente(venteToUpdate, id){
    return new Promise(function(resolve, reject) {
        var query = `UPDATE vente SET ? WHERE id = ?`
        db.query(query,[venteToUpdate, id], function(err, result){
            console.log(result)
            console.log(err)
            if(err) reject(err)
            if(result.affectedRows == 1)resolve('updated')
        })
    })
}

module.exports = {
    createVente,
    findVentesByStatut,
    findVenteById,
    updateVente
}