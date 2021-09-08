const { updateModel } = require('../../models/depotModel')
const connect =  require('../../../client/mysql');
const findOneById = require('./findOneById')

module.exports = (depotToUpdate, id) => {

    return updateModel.validate(depotToUpdate)
    .then(function() {
        return new Promise(function(resolve, reject) {
            connect.query(`UPDATE categorie SET ? WHERE id = ?`,[depotToUpdate, id], function(err, result){
                if(err) reject(err)
                console.log(result)
                if(result.affectedRows == 1)resolve('updated')
            })
        })
    })
    .then(function(){
        return findOneById(id);
    })
}