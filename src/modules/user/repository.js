const db = require('../../client/mysql')

function findOneById(id){
    return new Promise(function(resolve,reject){
        var query = "SELECT * FROM utilisateur WHERE id = ?";
        db.query(query, id, function(err,result){
            if(result.length > 0){
                resolve(result[0])
            }else{
                reject(err)
            }
        })
    })
}

function findIfEmailExists(email){
    return new Promise(function(resolve, reject)  {
        var query = "SELECT * FROM utilisateur WHERE email = ?"
        db.query(query, email, function(error, results, fields){
            console.log(results)
            if(results != null && results.length > 0){
                reject(new Error("L'email existe déjà"))
            }
            if(error){
                reject(error)
            }
            resolve('ok')
            })
        })
}

module.exports = {
    findOneById,
    findIfEmailExists
}