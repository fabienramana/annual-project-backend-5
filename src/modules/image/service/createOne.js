const { createModel } = require('../../models/imageModel')
const connect =  require('../../../client/mysql');

module.exports = (image) => {

    return createModel.validate(image)
    .then(function(){
        return new Promise(function(resolve, reject){
            var query = `INSERT INTO image (url, produit_id) VALUES ("${image.url}", ${image.produit_id})`
            connect.query(query, function(err, result){
                console.log(result)
                console.log(err)
                if(err) reject(err)
                if(result.affectedRows == 1)resolve('created')
            })
            
        })
    })
}