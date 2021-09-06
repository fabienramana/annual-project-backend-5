const db = require('../../../client/mysql')

module.exports = (email) => {    
    return new Promise(function(resolve, reject)  {
        db.query('SELECT * FROM utilisateur WHERE email = ?', email, function(error, results, fields){
            if(results.length > 0){
                const err = new Error('Email already exists');
                err.name = 'Internal Error';
                err.status = 500;
                throw err;
            }
            
            resolve('ok')
            })
        })
}