const db = require('../../../client/mysql')

module.exports = (libelle) => {    
    return new Promise(function(resolve, reject)  {
        db.query('SELECT * FROM categorie WHERE libelle = ?', libelle, function(error, results, fields){
            if(results != null){
                if(results.length > 0){
                    reject(new Error('Libelle already exists'))
                }
            }
            if(error){
                reject(error)
            }
            
            resolve('ok')
            })
        })
}