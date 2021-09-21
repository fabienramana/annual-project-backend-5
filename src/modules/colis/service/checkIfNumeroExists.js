const db = require('../../../client/mysql')

module.exports = (numero) => {    
    return new Promise(function(resolve, reject)  {
        db.query('SELECT * FROM colis WHERE numero = ?', numero, function(error, results, fields){
            console.log(results)
            if(results != null && results.length > 0){
                    reject(new Error("Le numéro existe déjà"))
            }
            if(error){
                reject(error)
            }
            else{
                resolve('ok')
            }
            })
        })
}