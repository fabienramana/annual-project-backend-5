const db = require('../../../client/mysql')

module.exports = () => {    
    return new Promise(function(resolve,reject){
        var userQuery = "SELECT * FROM utilisateur";
        db.query(userQuery, function(err,result){
            if(result.length > 0){
                resolve(result)
            }
            //reject(err)
            const erreur = new Error(err);
            erreur.name = 'Internal Error';
            erreur.status = 500;
            throw erreur;
        })
    })
}