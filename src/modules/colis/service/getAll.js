const db = require('../../../client/mysql')

module.exports = () => {    
    return new Promise(function(resolve,reject){
        var userQuery = "SELECT * FROM colis";
        db.query(userQuery, function(err,result){
            if(result.length > 0){
                resolve(result)
            }else{
                reject(err)
            }
        })
    })
}