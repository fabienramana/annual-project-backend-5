const { categorieModel } = require('../../models/categorieModel')
const connect =  require('../../../client/mysql');
const findOneById = require('./findOneById')

module.exports = (libellé, id) => {

    const categorie = {
        libellé
    }

    return categorieModel.validate({
        libellé
    })
    .then(function() {
        return new Promise(function(resolve, reject) {
            connect.query(`UPDATE categorie SET ? WHERE id = ?`,[categorie, id], function(err, result){
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