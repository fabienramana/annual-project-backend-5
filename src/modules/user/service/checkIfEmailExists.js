const db = require('../../../client/mysql')

module.exports = (email) => {    
    return new Promise(function(resolve, reject)  {
        db.query('SELECT * FROM utilisateur WHERE email = "?"', email, function(error, results, fields){
            if(results.length > 0){
                reject(new Error("Email already exists"));
            }
            resolve('ok')
            })
        })
}