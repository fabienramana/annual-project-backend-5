const db = require('../../../client/mysql')
const findOneById = require('./findOneById')
const { updateModel } = require('../../models/userModel')

module.exports = (id, userToUpdate) => {
    return findOneById(id)
    .then(updateModel.validate(userToUpdate))
    .then(function(){
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