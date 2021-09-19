const { createModel } = require('../../models/greenCoinModel')
const connect =  require('../../../client/mysql');

module.exports = (green_coin) => {

    const dateLastDay = new Date(new Date().getFullYear(), 11, 31)
    const date_string = dateLastDay.getFullYear() + "-" + (dateLastDay.getMonth() +1) + "-" + dateLastDay.getDate()
    console.log(date_string)
    const green_coin_to_insert = {
        montant: green_coin.montant,
        date_expiration: date_string,
        montant_restant: green_coin.montant,
        utilisateur_id: green_coin.utilisateur_id
    }
    console.log(green_coin_to_insert)

    return createModel.validate(green_coin)
    .then(function(){
        return new Promise(function(resolve, reject){
            var query = `INSERT INTO green_coin (montant, date_expiration, montant_restant, utilisateur_id) VALUES ("${green_coin_to_insert.montant}", "${green_coin_to_insert.date_expiration}", "${green_coin_to_insert.montant_restant}", ${green_coin_to_insert.utilisateur_id})`
            connect.query(query, function(err, result){
                console.log(result)
                console.log(err)
                if(err) reject(err)
                if(result.affectedRows == 1)resolve('created')
            })
            
        })
    })
}