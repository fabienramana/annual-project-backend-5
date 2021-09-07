const db = require('../../../client/mysql')
const findOneById = require('./findOneById')

module.exports = (id) => {
    return findOneById(id)
    .then((user)=>{
        console.log(user.estMarchand)
        var userToUpdate;
        if(user.estMarchand == false){
            userToUpdate = {
                estMarchand: true
            }
        }
        else{
            userToUpdate = {
                estMarchand: false
            }
        }
        return userToUpdate;
    })
    .then((userToUpdate) => {
        return new Promise(function(resolve, reject){
            db.query(`UPDATE utilisateur SET ? WHERE id = ?`, [userToUpdate, id], function(err, result){
                if(err) reject(err)
                if(result.affectedRows >0) resolve('ok')
            })
        })
    })
    .then(function(){
        return findOneById(id)
    })
}