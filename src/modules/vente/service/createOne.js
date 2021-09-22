const { createModel } = require('../../models/venteModel')
const connect =  require('../../../client/mysql');

module.exports = async (vente) => {
    const dateToday = new Date()
    const date_string = dateToday.getFullYear() + "-" + (dateToday.getMonth() +1) + "-" + dateToday.getDate()

    return createModel.validate(vente)
    .then(function(){
        return new Promise(function(resolve, reject){
            var query = `INSERT INTO vente (statut, date, produit_id) VALUES ("${vente.statut}", "${date_string}", ${vente.produit_id})`
            connect.query(query, function(err, result){
                console.log(result)
                console.log(err)
                if(err) reject(err)
                if(result.affectedRows == 1)resolve(result.insertId)
            })
            
        })
    })
}   