const db = require('../../../client/mysql')

module.exports = (id) => {    
    return new Promise(function(resolve,reject){
        var userQuery = "SELECT * FROM image WHERE id = ?";
        db.query(userQuery, id, function(err,result){
            if(result.length > 0){
                resolve(result[0])
            }else{
                reject(err)
            }
        })
    })
}