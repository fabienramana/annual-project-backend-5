const { createModel } = require('../../models/uniteModel')
const connect =  require('../../../client/mysql');

module.exports = (libelle, abreviation, type) => {

    const unite = {
        libelle,
        abreviation,
        type
    }

    return createModel.validate(unite)
    .then(function(){
        return new Promise(function(resolve, reject){
            var query = `INSERT INTO unite (libelle, abreviation, type) VALUES ("${libelle}", "${abreviation}", "${type}")`
            connect.query(query, function(err, result){
                if(err) reject(err)
                console.log(result)
                if(result.affectedRows == 1)resolve('created')
            })
            
        })
    })
}