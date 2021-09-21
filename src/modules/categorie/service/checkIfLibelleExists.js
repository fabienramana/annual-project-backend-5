const db = require('../../../client/mysql')

module.exports = (libelle) => {    
    return new Promise(function(resolve, reject)  {
        db.query('SELECT * FROM categorie WHERE libelle = ?', libelle, function(error, results, fields){
            if(results != null && results.length > 0){
                reject(new Error("Le libellé existe déjà"))
            }
            if(error){
                reject(error)
            }
            
            resolve('ok')
            })
        })
}