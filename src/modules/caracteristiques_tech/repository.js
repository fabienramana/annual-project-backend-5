const db = require('../../client/mysql')

function createCaracTechnique(caracTechnique){
    return new Promise(function(resolve, reject){
        var query = `INSERT INTO caracteristiques_technique (libelle, uniteId, categorieId) VALUES ("${caracTechnique.libelle}", ${caracTechnique.uniteId}, ${caracTechnique.categorieId})`
        db.query(query, function(err, result){
            if(err) reject(err)
            if(result.affectedRows == 1)resolve('created')
            else{
                reject(new Error('Insert failed'))
            }
        })
        
    })
}

function deleteCaracTechnique(id){
    return new Promise(function(resolve, reject) {
        db.query(`DELETE FROM caracteristiques_technique WHERE id = ${id}`, function(err, result){
            if(err) reject(err)
            if(result.affectedRows == 1)resolve('deleted')
        })
    })
}

async function getAllCaracTechnique(){
    return new Promise(function(resolve,reject){
        var userQuery = "SELECT * FROM caracteristiques_technique";
        db.query(userQuery, function(err,result){
            if(err){
                reject(err)
            }
            else if(result.length > 0){
                resolve(result)
            }
            else if(result.length == 0){
                resolve([])
            }
        })
    })
}

function updateCaracTechnique(caracTechnique, id){
    return new Promise(function(resolve, reject) {
        db.query(`UPDATE caracteristiques_technique SET ? WHERE id = ?`,[caracTechnique, id], function(err, result){
            if(err) reject(err)
            if(result.affectedRows == 1)resolve('updated')
            else{
                reject(new Error('Update failed'))
            }
        })
    })
}

function findCaracTechniqueById(id){
    return new Promise(function(resolve,reject){
        var userQuery = "SELECT * FROM caracteristiques_technique WHERE id = ?";
        db.query(userQuery, id, function(err,result){
            if(err){
                reject(err)
            }
            else if(result.length > 0){
                resolve(result[0])
            }
            else if(result.length == 0){
                reject(new Error('No record found'))
            }
        })
    })
}

module.exports = {
    createCaracTechnique,
    deleteCaracTechnique,
    getAllCaracTechnique,
    updateCaracTechnique,
    findCaracTechniqueById
}