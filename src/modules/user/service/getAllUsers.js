const db = require('../../../client/mysql')

module.exports = () => {    
    return new Promise(function(resolve, reject)  {
        db.query("SELECT * FROM utilisateur",(err, res) => {
            if(err){
                db.end()
                return reject(err);
            }
            db.end()
            resolve(res[0]);
        })
    })
}