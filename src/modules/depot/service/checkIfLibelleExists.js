const db = require('../../../client/mysql')

module.exports = (libellé) => {    
    return new Promise(function(resolve, reject)  {
        db.query('SELECT * FROM depot WHERE libellé = ?', libellé, function(error, results, fields){
            if(results != null){
                reject(new Error('Libellé already exists'))
            }
            if(error){
                reject(error)
            }
            
            resolve('ok')
            })
        })
}