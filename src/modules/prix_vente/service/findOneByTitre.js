const db = require('../../../client/mysql')

module.exports = (titre) => {    
    return new Promise(function(resolve,reject){
        var query = "SELECT * FROM prix_vente WHERE titre = ?";
        db.query(query, titre, function(err,result){
            console.log("prix_vente" + result[0])
            if(result.length > 0){
                resolve(result[0])
            }else{
                reject(err)
            }
        })
    })
}