const db = require('../../client/mysql')

function createInvestment(montant, projet_id, green_coin_id){
    return new Promise(function(resolve, reject){
        var query = `INSERT INTO invest_green_coin (montant, projetId, greenCoinId) VALUES (${montant}, ${projet_id}, ${green_coin_id})`
        db.query(query, function(err, result){
            console.log("err" + err)
            console.log("result" + result)
            if(err) reject(err)
            console.log(result)
            if(result.affectedRows == 1)resolve('created')
            else{
                reject(new Error('Insert failed'))
            }
        })
    })
}

module.exports = {
    createInvestment
}