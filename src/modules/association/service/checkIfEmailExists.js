const db = require('../../../client/mysql')

module.exports = (email) => {    
    return new Promise(function(resolve, reject)  {
        db.query('SELECT * FROM association WHERE email = ?', email, function(error, results, fields){
            console.log(results)
            if(results != null && results.length > 0){
                    reject(new Error('Email already exists'))
            }
            if(error){
                reject(error)
            }
            
            resolve('ok')
            })
        })
}