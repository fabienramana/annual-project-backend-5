const db = require('../../../client/mysql')

module.exports = (numero) => {
    db.query('SELECT * FROM colis WHERE numero = ?', numero, function(error, results, fields){
        console.log(results)
        if(results != null && results.length > 0){
            return true
        }
        if(error){
            return true
        }
        else{
            return false
        }
    })
}