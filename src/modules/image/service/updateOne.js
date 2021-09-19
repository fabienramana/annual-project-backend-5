const { updateModel } = require('../../models/imageModel')
const connect =  require('../../../client/mysql');
const findOneById = require('./findOneById')

module.exports = (imageToUpdate, id) => {

    return updateModel.validate(imageToUpdate)
    .then(function() {
        return new Promise(function(resolve, reject) {
            connect.query(`UPDATE image SET ? WHERE id = ?`,[imageToUpdate, id], function(err, result){
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