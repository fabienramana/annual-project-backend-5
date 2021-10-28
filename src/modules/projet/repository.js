const db = require('../../client/mysql')

function createProject(projet){
    return new Promise(function(resolve, reject){
        var query = `INSERT INTO projet (libelle, description, somme, dateDebut, dateFin, associationId) VALUES ("${projet.libelle}", "${projet.description}", ${projet.somme}, "${projet.dateDebut}", "${projet.dateFin}", ${projet.associationId})`
        db.query(query, function(err, result){
            if(err) reject(err)
            if(result.affectedRows == 1)resolve("created")
            else reject(new Error('Insert failed'))
        }) 
    })
}

function findProjetById(id){
    return new Promise(function(resolve,reject){
        var userQuery = "SELECT * FROM projet WHERE id = ?";
        db.query(userQuery, id, function(err,result){
            if(result.length > 0){
                resolve(result[0])
            }else if(result.length ==0){
                reject(new Error('No record found'))
            }
            else{
                reject(err)
            }
        })
    })
}

async function getAllProjets(){
    return new Promise(function(resolve,reject){
        var query = "SELECT * FROM projet";
        db.query(query, function(err,result){
            if(result.length > 0){
                resolve(result)
            }else if(result.length ==0){
                resolve([])
            }else{
                reject(err)
            }
        })
    })
}

async function getProjetsByAssociationId(id){
    return new Promise(function(resolve,reject){
        var query = `SELECT * FROM projet WHERE associationId = ${id}`;
        db.query(query, function(err,result){
            if(result.length > 0){
                resolve(result)
            }else if(result.length ==0){
                resolve([])
            }else{
                reject(err)
            }
        })
    })
}

module.exports = {
    createProject,
    findProjetById,
    getAllProjets,
    getProjetsByAssociationId
}