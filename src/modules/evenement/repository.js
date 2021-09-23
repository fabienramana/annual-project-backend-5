const db = require('../../client/mysql')

function createEvenement(evenement){
    return new Promise(function(resolve, reject){
        var query = `INSERT INTO evenement (nom, dateDebut, dateFin) VALUES ("${evenement.nom}", "${evenement.dateDebut}", "${evenement.dateFin}")`
        db.query(query, function(err, result){
            console.log(result)
            console.log(err)
            if(err) reject(err)
            if(result.affectedRows == 1)resolve('created')
        })
        
    })
}

function deleteEvenement(id){
    return new Promise(function(resolve, reject) {
        var query = `DELETE FROM evenement WHERE id = ${id}`
        db.query(query, function(err, result){
            if(err) reject(err)
            if(result.affectedRows == 1)resolve('deleted')
        })
    })
}

module.exports = {
    createEvenement,
    deleteEvenement
}