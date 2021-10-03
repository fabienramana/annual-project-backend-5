const db = require('../../client/mysql')

function createInvestment(amount, projet_id, green_coin_id){
    return new Promise(function(resolve, reject){
        var query = `INSERT INTO invest_green_coin (amount, projetId, greenCoinId) VALUES (${amount}, ${projet_id}, ${green_coin_id})`
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

async function getInvestmentByProject(id){
    return new Promise(function(resolve,reject){
        var query = "SELECT * FROM invest_green_coin WHERE projetId = ?";
        db.query(query, id, function(err,result){
            console.log(result)
            console.log(err)
            if(result.length > 0){
                resolve(result)
            }
            else if(result.length == 0){
                resolve([])
            }else{
                reject(err)
            }
        })
    })
}

module.exports = {
    createInvestment,
    getInvestmentByProject
}