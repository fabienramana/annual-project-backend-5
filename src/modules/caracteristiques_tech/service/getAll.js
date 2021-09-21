const db = require('../../../client/mysql')

module.exports = async () => {   
    return new Promise(function(resolve,reject){
        var userQuery = "SELECT * FROM caracteristiques_technique";
        db.query(userQuery, function(err,result){
            if(result.length > 0){
                resolve(result)
            }else{
                reject(err)
            }
        })
    })
}