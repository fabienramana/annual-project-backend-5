const db = require('../../../client/mysql')

module.exports = (email) => {    
    return new Promise(function(resolve,reject){
        var userQuery = "SELECT * FROM utilisateur WHERE email = ?";
        db.query(userQuery, email, function(err,result){
            console.log(result)
            if(result.length > 0){
                console.log('resolve')
                resolve(result[0])
            }else if(err){
                reject(err)
            }
            else{
                var query = "SELECT * FROM association WHERE email = ?";
                db.query(query, email, function(err, result){
                    if(result.length > 0){
                        console.log('resolve')
                        resolve(result[0])
                    }else if(err){
                        reject(err)
                    }
                    else{
                        reject(new Error("L'email n'existe pas"))
                    }
                })
            }
        })
    })
}