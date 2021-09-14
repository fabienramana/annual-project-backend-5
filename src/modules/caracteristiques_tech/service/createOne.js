const { createModel } = require('../../models/caracteristiqueTechModel')
const connect =  require('../../../client/mysql');

module.exports = (libelle, unite_id, categorie_id) => {

    const caracteristiques_tech = {
        libelle,
        unite_id,
        categorie_id
    }

    return createModel.validate(caracteristiques_tech)
    .then(function(){
        return new Promise(function(resolve, reject){
            var query = `INSERT INTO caracteristiques_technique (libelle, unite_id, categorie_id) VALUES ("${libelle}", ${unite_id}, ${categorie_id})`
            connect.query(query, [caracteristiques_tech],function(err, result){
                console.log(result)
                console.log(err)
                if(err) reject(err)
                if(result.affectedRows == 1)resolve('created')
            })
            
        })
    })
}