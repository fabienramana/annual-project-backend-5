const db = require('../../client/mysql')

function createProject(projet){
    return new Promise(function(resolve, reject){
        var query = `INSERT INTO projet (libelle, description, dateDebut, dateFin, associationId) VALUES ("${projet.libelle}", "${projet.description}", "${projet.dateDebut}", "${projet.dateFin}", ${projet.associationId})`
        db.query(query, function(err, result){
            console.log(result)
            console.log(err)
            if(err) reject(err)
            if(result.affectedRows == 1)resolve("created")
        }) 
    })
}

function findProjetById(id){
    return new Promise(function(resolve,reject){
        var userQuery = "SELECT * FROM projet WHERE id = ?";
        db.query(userQuery, id, function(err,result){
            console.log(result)
            console.log(err)
            if(result.length > 0){
                resolve(result[0])
            }else{
                reject(err)
            }
        })
    })
}

function getAllProjets(){
    return new Promise(function(resolve,reject){
        var query = "SELECT * FROM projet";
        db.query(query, function(err,result){
            if(result.length > 0){
                resolve(result)
            }else{
                reject(err)
            }
        })
    })
}

module.exports = {
    createProject,
    findProjetById,
    getAllProjets
}