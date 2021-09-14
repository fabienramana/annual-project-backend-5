const { updateModel } = require('../../models/caracteristiqueTechModel')
const connect =  require('../../../client/mysql');
const findOneById = require('./findOneById')

module.exports = (caracTechs, id) => {
    console.log(caracTechs)
    console.log(id)
    
    return updateModel.validate(caracTechs)
    .then(function() {
        return new Promise(function(resolve, reject) {
            connect.query(`UPDATE caracteristiques_technique SET ? WHERE id = ?`,[caracTechs, id], function(err, result){
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