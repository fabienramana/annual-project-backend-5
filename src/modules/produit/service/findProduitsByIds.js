const db = require('../../../client/mysql')

module.exports = (ids) => {    
    return new Promise(function(resolve,reject){
        var userQuery = "SELECT * FROM produit WHERE id IN (?)";
        db.query(userQuery, [ids], function(err,result){
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