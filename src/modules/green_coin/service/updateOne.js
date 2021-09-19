const { updateModel } = require('../../models/greenCoinModel')
const connect =  require('../../../client/mysql');
const findOneById = require('./findOneById')

module.exports = (greenCoinToUpdate, id) => {

    return updateModel.validate(greenCoinToUpdate)
    .then(function() {
        return new Promise(function(resolve, reject) {
            connect.query(`UPDATE green_coin SET ? WHERE id = ?`,[greenCoinToUpdate, id], function(err, result){
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