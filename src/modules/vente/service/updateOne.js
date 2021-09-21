const { updateModel } = require('../../models/venteModel')
const connect =  require('../../../client/mysql');
const findOneById = require('./findOneById')

module.exports = (venteToUpdate, id) => {


    return updateModel.validate(venteToUpdate)
    .then(function() {
        return new Promise(function(resolve, reject) {
            connect.query(`UPDATE vente SET ? WHERE id = ?`,[venteToUpdate, id], function(err, result){
                console.log(result)
                console.log(err)
                if(err) reject(err)
                if(result.affectedRows == 1)resolve('updated')
            })
        })
    })
    .then(function(){
        return findOneById(id);
    })
}