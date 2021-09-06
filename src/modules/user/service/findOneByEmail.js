const db = require('../../../client/mysql')

module.exports = (email) => {    
    return new Promise(function(resolve,reject){
        var userQuery = "SELECT * FROM utilisateur WHERE email = ?";
        db.query(userQuery, email, function(err,result){
            if(result.length > 0){
                resolve(result[0])
            }
            //reject(err)
            const erreur = new Error(err);
            erreur.name = 'Internal Error';
            erreur.status = 500;
            throw erreur;
        })
    })
}