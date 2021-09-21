const connect =  require('../../../client/mysql');

module.exports = (id) => {

    return new Promise(function(resolve, reject) {
        connect.query(`DELETE FROM evenement WHERE id = ${id}`, function(err, result){
            if(err) reject(err)
            if(result.affectedRows == 1)resolve('deleted')
        })
    })
}