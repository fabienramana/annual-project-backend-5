const db = require('../../client/mysql')

function createCaracTechnique(caracTechnique){
    return new Promise(function(resolve, reject){
        var query = `INSERT INTO caracteristiques_technique (libelle, uniteId, categorieId) VALUES ("${caracTechnique.libelle}", ${caracTechnique.uniteId}, ${caracTechnique.categorieId})`
        db.query(query, function(err, result){
            console.log(result)
            console.log(err)
            if(err) reject(err)
            if(result.affectedRows == 1)resolve('created')
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
            if(result.length > 0){
                resolve(result)
            }else{
                reject(err)
            }
        })
    })
}

function updateCaracTechnique(caracTechnique, id){
    return new Promise(function(resolve, reject) {
        db.query(`UPDATE caracteristiques_technique SET ? WHERE id = ?`,[caracTechnique, id], function(err, result){
            console.log(result)
            console.log(err)
            if(err) reject(err)
            if(result.affectedRows == 1)resolve('updated')
        })
    })
}

function findCaracTechniqueById(id){
    return new Promise(function(resolve,reject){
        var userQuery = "SELECT * FROM caracteristiques_technique WHERE id = ?";
        db.query(userQuery, id, function(err,result){
            if(result.length > 0){
                resolve(result[0])
            }else{
                reject(err)
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