const { createModel } = require('../../models/projetModel')
const connect =  require('../../../client/mysql');

module.exports = (projet) => {

    return createModel.validate(projet)
    .then(function(){
        return new Promise(function(resolve, reject){
            var query = `INSERT INTO projet (libelle, description, date_debut, date_fin) VALUES ("${projet.libelle}", "${projet.description}", "${projet.date_debut}", "${projet.date_fin}")`
            connect.query(query, function(err, result){
                console.log(result)
                console.log(err)
                if(err) reject(err)
                if(result.affectedRows == 1)resolve("created")
            }) 
        })
    })
}