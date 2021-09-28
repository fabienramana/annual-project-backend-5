const db = require('../../client/mysql')

function getAllColis(){
    return new Promise(function(resolve,reject){
        var query = "SELECT * FROM colis";
        db.query(query, function(err,result){
            if(result.length > 0){
                resolve(result)
            }else if(result.length == 0){
                resolve([])
            }
            else{
                reject(err)
            }
        })
    })
}

async function createColis(number, date, prix, type){
    return new Promise(function(resolve, reject) {
            
        var query = `INSERT INTO colis (numero, date, prix, type) VALUES ("${number}", "${date}", ${prix}, "${type}")`
        
        db.query(query, function(err, result){
            console.log(result)
            console.log(err)
            if(err) reject(err)
            if(result.affectedRows == 1)resolve(result.insertId)
            else{
                reject(new Error('Insert failed'))
            }
        })
    })
}

function findColisById(id){
    return new Promise(function(resolve,reject){
        var query = "SELECT * FROM colis WHERE id = ?";
        db.query(query, id, function(err,result){
            if(result.length > 0){
                resolve(result[0])
            }else if(result.length == 0){
                reject(new Error('No record found'))
            }
            else{
                reject(err)
            }
        })
    })
}

function deleteColisById(id){
    return new Promise(function(resolve, reject) {
        var query = `DELETE FROM colis WHERE id = ${id}`
        db.query(query, function(err, result){
            if(err) reject(err)
            if(result.affectedRows == 1)resolve('deleted')
        })
    })
}

function findIfNumeroExists(numero){
    db.query('SELECT * FROM colis WHERE numero = ?', numero, function(error, results, fields){
        console.log(results)
        if(results != null && results.length > 0){
            return true
        }
        if(error){
            return true
        }
        else{
            return false
        }
    })
}

module.exports = {
    getAllColis,
    createColis,
    findColisById,
    deleteColisById,
    findIfNumeroExists
}