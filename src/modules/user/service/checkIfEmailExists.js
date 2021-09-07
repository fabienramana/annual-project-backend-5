const db = require('../../../client/mysql')

module.exports = (email) => {    
    return new Promise(function(resolve, reject)  {
        db.query('SELECT * FROM utilisateur WHERE email = ?', email, function(error, results, fields){
            if(results != null){
                if(results.length > 0){
                    reject('Email already exists')
                }
            }
            if(error){
                reject(error)
            }
            
            resolve('ok')
            })
        })
}