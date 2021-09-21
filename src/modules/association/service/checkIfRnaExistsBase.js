const db = require('../../../client/mysql')

module.exports = (rna) => {    
    return new Promise(function(resolve, reject)  {
        db.query('SELECT * FROM association WHERE rna = ?', rna, function(error, results, fields){
            console.log(results)
            if(results != null && results.length > 0){
                    reject(new Error('Le numéro RNA existe déjà'))
            }
            if(error){
                reject(error)
            }
            
            resolve('ok')
            })
        })
}