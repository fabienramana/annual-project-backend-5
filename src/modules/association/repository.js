const db = require('../../client/mysql');

function createAssociation(nom, rna, email, password, logo){
    return new Promise(function(resolve, reject){
        var query = `INSERT INTO association (nom, rna, logo, email, password) VALUES ("${nom}", "${rna}", "${logo}", "${email}", "${password}")`
        db.query(query, function(err, result){
            if(err) reject(err)
            if(result.affectedRows == 1)resolve('created')
            else{
                reject(new Error('Insert failed'))
            }
        })
        
    })
}

function findIfEmailExists(email){
    return new Promise(function(resolve, reject)  {
        var query = "SELECT * FROM association WHERE email = ?"
        db.query(query, email, function(error, results, fields){
            if(results != null && results.length > 0){
                reject(new Error("L'email existe déjà"))
            }
            else if(error){
                reject(error)
            }
            resolve('ok')
            })
        })
}

function findIfRnaExistsBase(rna){
    return new Promise(function(resolve, reject)  {
        var query = 'SELECT * FROM association WHERE rna = ?'
        db.query(query, rna, function(error, results, fields){
            if(results != null && results.length > 0){
                reject(new Error('Le numéro RNA existe déjà'))
            }
            else if(error){
                reject(error)
            }
            
            resolve('ok')
            })
        })
}

function deleteAssociation(id){
    return new Promise(function(resolve, reject) {
        var query = `DELETE FROM association WHERE id = ${id}`
        db.query(query, function(err, result){
            if(err) reject(err)
            if(result.affectedRows == 1)resolve('deleted')
        })
    })
}

function findOneByEmail(email){
    return new Promise(function(resolve,reject){
        var query = "SELECT * FROM association WHERE email = ?";
        db.query(query, email, function(err,result){
            if(err) reject(err)
            if(result.length === 0) {
                resolve(null);
            }
            resolve(result[0])
        })
    })
}

async function getAllAssociations(){
    return new Promise(function(resolve,reject){
        var query = "SELECT * FROM association";
        db.query(query, function(err,result){
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

async function getOneByEmail(email) {
    return new Promise(function(resolve, reject)  {
        var query = "SELECT * FROM association WHERE email = ?"
        db.query(query, email, function(error, results){
            if(error) reject(error)
            if(results.length == 0) reject("Email introuvable")
            resolve(results[0])
        })
    })
}

module.exports = {
    createAssociation,
    findIfEmailExists,
    findIfRnaExistsBase,
    deleteAssociation,
    getAllAssociations,
    findOneByEmail,
    getOneByEmail
}