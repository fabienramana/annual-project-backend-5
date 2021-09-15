const { createModel } = require('../../models/produitCaracModel')
const connect =  require('../../../client/mysql');

module.exports = (carac_tech) => {

    return createModel.validate(carac_tech)
    .then(function(){
        return new Promise(function(resolve, reject){
            var query = `INSERT INTO produit_caracteristique (valeur, caracteristiques_tech_id, produit_id) VALUES ("${carac_tech.valeur}", ${carac_tech.caracteristiques_tech_id}, ${carac_tech.produit_id})`
            connect.query(query, function(err, result){
                console.log(result)
                console.log(err)
                if(err){
                    reject(err)
                }
                else if(result.affectedRows == 1)resolve('created')
            })
            
        })
    })
}