const db = require('../../../client/mysql')

module.exports = (id) => {    
    return new Promise(function(resolve,reject){
        var userQuery = "SELECT * FROM achat_produit WHERE produit_id = ?";
        db.query(userQuery, id, function(err,result){
            if(result.length > 0){
                resolve(result)
            }else{
                reject(err)
            }
        })
    })
}