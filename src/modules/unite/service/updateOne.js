const { updateModel } = require('../../models/uniteModel')
const connect =  require('../../../client/mysql');
const findOneById = require('./findOneById')

module.exports = (uniteToUpdate, id) => {

    return updateModel.validate(uniteToUpdate)
    .then(function() {
        return new Promise(function(resolve, reject) {
            connect.query(`UPDATE unite SET ? WHERE id = ?`,[uniteToUpdate, id], function(err, result){
                if(err) reject(err)
                console.log(result)
                if(result.affectedRows == 1)resolve('updated')
            })
        })
    })
    .then(() => findOneById(id));
}