const connect =  require('../../../client/mysql');

module.exports = (amount, projet_id, green_coin_id) => {

    return new Promise(function(resolve, reject){
        var query = `INSERT INTO invest_green_coin (amount, projet_id, green_coin_id) VALUES (${amount}, ${projet_id}, ${green_coin_id})`
        connect.query(query, function(err, result){
            console.log("err" + err)
            console.log("result" + result)
            if(err) reject(err)
            console.log(result)
            if(result.affectedRows == 1)resolve('created')
        })
        
    })
}