const db = require('../../client/mysql');

function createAssociation(nom, rna, email, password){
    return new Promise(function(resolve, reject){
        var query = `INSERT INTO association (nom, rna, email, password) VALUES ("${nom}", "${rna}", "${email}", "${password}")`
        db.query(query, function(err, result){
            console.log(result)
            console.log(err)
            if(err) reject(err)
            if(result.affectedRows == 1)resolve('created')
        })
        
    })
}

function findIfEmailExists(email){
    return new Promise(function(resolve, reject)  {
        var query = "SELECT * FROM association WHERE email = ?"
        db.query(query, email, function(error, results, fields){
            console.log(results)
            console.log(error)
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
            console.log(results)
            console.log(error)
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
            console.log(result)
            console.log(err)
            if(err) reject(err)
            if(result.affectedRows == 1)resolve('deleted')
        })
    })
}

function findOneByEmail(email){
    return new Promise(function(resolve,reject){
        var query = "SELECT * FROM association WHERE email = ?";
        db.query(query, email, function(err,result){
            if(result.length > 0){
                resolve(result)
            }else if (err){
                reject(err)
            }
            else{
                reject(new Error("L'email n'existe pas"))
            }
        })
    })
}

module.exports = {
    createAssociation,
    findIfEmailExists,
    findIfRnaExistsBase,
    deleteAssociation
}