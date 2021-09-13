const db = require('../../../client/mysql')

module.exports = (libelle) => {    
    return new Promise(function(resolve, reject)  {
        db.query('SELECT * FROM depot WHERE libelle = ?', libelle, function(error, results, fields){
            if(results != null){
                reject(new Error('Libelle already exists'))
            }
            if(error){
                reject(error)
            }
            
            resolve('ok')
            })
        })
}