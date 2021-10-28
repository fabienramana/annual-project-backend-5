const db = require('../../client/mysql')

function createEvenement(evenement){
    return new Promise(function(resolve, reject){
        var query = `INSERT INTO evenement (nom, dateDebut, dateFin) VALUES ("${evenement.nom}", "${evenement.dateDebut}", "${evenement.dateFin}")`
        db.query(query, function(err, result){
            if(err) reject(err)
            if(result.affectedRows == 1)resolve('created')
            else{
                reject(new Error('Insert failed'))
            }
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

async function findIfAchatIsDuringEvent(){
    return new Promise(function(resolve, reject) {
        const dateToday = new Date()
        const date_string = dateToday.getFullYear() + "-" + (dateToday.getMonth() +1) + "-" + dateToday.getDate()
        var query = `SELECT * FROM evenement WHERE dateDebut <= ? AND dateFin >= ?`
        db.query(query,[date_string, date_string] ,function(err, result){
            if(err) reject(err)
            if(result.length > 0)resolve(true)
            else{
                resolve(false)
            }
        })
    })
}

module.exports = {
    createEvenement,
    deleteEvenement,
    findIfAchatIsDuringEvent
}