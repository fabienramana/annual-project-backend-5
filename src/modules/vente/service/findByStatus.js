const db = require('../../../client/mysql')

module.exports = (statut) => {    
    return new Promise(function(resolve,reject){
        var userQuery = "SELECT * FROM vente WHERE statut = ?";
        db.query(userQuery, statut, function(err,result){
            if(result.length > 0){
                resolve(result)
            }else{
                reject(err)
            }
        })
    })
}