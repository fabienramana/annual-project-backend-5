const { createModel } = require('../../models/investmentModel')
const connect =  require('../../../client/mysql');

module.exports = (investment) => {

    return createModel.validate(investment)
    .then(function(){
        return new Promise(function(resolve, reject){
            var query = `INSERT INTO invest_green_coin (amount, projet_id, green_coin_id) VALUES (${investment.amount}, ${investment.projet_id}, ${investment.green_coin_id})`
            connect.query(query, function(err, result){
                console.log(result)
                console.log(err)
                if(err) reject(err)
                if(result.affectedRows == 1)resolve('created')
            })
            
        })
    })
}