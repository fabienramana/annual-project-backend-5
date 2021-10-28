const db = require('../../client/mysql')

async function createImage(image){
    return new Promise(function(resolve, reject){
        var query = `INSERT INTO image (url, produitId) VALUES ("${image.url}", ${image.produitId})`
        db.query(query, function(err, result){
            if(err) reject(err)
            if(result.affectedRows == 1)resolve('created')
            else{
                reject(new Error('Insert failed'))
            }
        })  
    })
}

async function findImagesByProduitId(id){
    return new Promise(function(resolve,reject){
        var query = "SELECT * FROM image WHERE produitId = ?";
        db.query(query, id, function(err,result){
            if(err) reject(err);
            resolve(result)
        })
    })
}

function findImageById(id){
    return new Promise(function(resolve,reject){
        var query = "SELECT * FROM image WHERE id = ?";
        db.query(query, id, function(err,result){
            if(result.length > 0){
                resolve(result[0])
            }
            else if(result.length == 0){
                reject(new Error('No record found'))
            }
            else{
                reject(err)
            }
        })
    })
}


function updateImage(imageToUpdate, id){
    return new Promise(function(resolve, reject) {
        var query = `UPDATE image SET ? WHERE id = ?`
        db.query(query,[imageToUpdate, id], function(err, result){
            if(err) reject(err)
            
            if(result.affectedRows == 1)resolve('updated')
            else{
                reject(new Error('Update failed'))
            }
        })
    })
}

module.exports = {
    createImage,
    findImagesByProduitId,
    findImageById,
    updateImage
}