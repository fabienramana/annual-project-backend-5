const db = require('../../../client/mysql')

module.exports = (id) => {    
    return new Promise(function(resolve,reject){
        var userQuery = "SELECT * FROM green_coin WHERE utilisateur_id = ? AND montant_restant != 0 ORDER BY date_expiration";
        db.query(userQuery, id, function(err,result){
            console.log(result)
            console.log(err)
            if(result.length > 0){
                resolve(result)
            }else{
                reject(err)
            }
        })
    })
}