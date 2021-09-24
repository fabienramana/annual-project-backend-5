const db = require('../../client/mysql')

function createProduit(product){
    return new Promise(function(resolve, reject){
        console.log("query")
        var query = `INSERT INTO produit (titre, description, etat, statut, categorieId, depotId) VALUES ("${product.titre}", "${product.description}", "${product.etat}", "${product.statut}", ${product.categorieId}, ${product.depotId})`
        db.query(query, function(err, result){
            console.log(result)
            console.log(err)
            if(err) reject(err)
            if(result.affectedRows == 1)resolve(result.insertId)
        }) 
    })
}

function createProduitCarac(carac_tech){
    return new Promise(function(resolve, reject){
        var query = `INSERT INTO produit_caracteristique (valeur, caracteristiquesTechId, produitId) VALUES ("${carac_tech.valeur}", ${carac_tech.caracteristiquesTechId}, ${carac_tech.produitId})`
        db.query(query, function(err, result){
            console.log(result)
            console.log(err)
            if(err){
                reject(err)
            }
            else if(result.affectedRows == 1)resolve('created')
        })
        
    })
}

function deleteProduit(id){
    return new Promise(function(resolve, reject) {
        var query = `DELETE FROM produit WHERE id = ${id}`
        db.query(query, function(err, result){
            console.log(err)
            console.log(result)
            if(err) reject(err)
            if(result.affectedRows == 1)resolve('deleted')
        })
    })
}

function deleteProduitCarac(id){
    return new Promise(function(resolve, reject) {
        db.query(`DELETE FROM produit_caracteristique WHERE id = ${id}`, function(err, result){
            console.log(err)
            console.log(result)
            if(err) reject(err)
            if(result.affectedRows == 1)resolve('deleted')
        })
    })
}

async function findProduitById(id){
    return new Promise(function(resolve,reject){
        var query = "SELECT * FROM produit WHERE id = ?";
        db.query(query, id, function(err,result){
            if(result.length > 0){
                resolve(result[0])
            }else{
                reject(err)
            }
        })
    })
}

async function findProduitCaracByProduitId(id){
    return new Promise(function(resolve,reject){
        var query = "SELECT * FROM produit_caracteristique WHERE produitId = ?";
        db.query(query, id, function(err,result){
            if(result.length > 0){
                resolve(result[0])
            }else{
                reject(err)
            }
        })
    })
}

function getProduitsByIds(ids){
    return new Promise(function(resolve,reject){
        var query = "SELECT * FROM produit WHERE id IN (?)";
        db.query(query, [ids], function(err,result){
            console.log(result)
            console.log(err)
            if(result.length > 0){
                resolve(result)
            }else{
                reject(err)
            }
        })
    })
}

function getAllProducts(){
    return new Promise(function(resolve,reject){
        var query = "SELECT * FROM produit";
        db.query(query, function(err,result){
            if(result.length > 0){
                resolve(result)
            }else{
                reject(err)
            }
        })
    })
}

async function insertProduitAndReturnId(product){
    return new Promise(function(resolve, reject){
        var query = `INSERT INTO produit (titre, description, etat, statut, categorieId) VALUES ("${product.titre}", "${product.description}", "${product.etat}", "${product.statut}", ${product.categorieId})`
        db.query(query, function(err, result){
            console.log(result)
            console.log(err)
            if(err) reject(err)
            if(result.affectedRows == 1)resolve(result.insertId)
        }) 
    })
}

function updateProduit(produitToUpdate, id){
    return new Promise(function(resolve, reject) {
        db.query(`UPDATE produit SET ? WHERE id = ?`,[produitToUpdate, id], function(err, result){
            console.log(result)
            console.log(err)
            if(err) reject(err)
            if(result.affectedRows == 1)resolve('updated')
        })
    })
}

function findSellablesProduits(){
    return new Promise(function(resolve, reject) {
        var query = `SELECT * FROM produit WHERE statut = "En vente"`
        db.query(query, function(err, result){
            console.log(result)
            console.log(err)
            if(err) reject(err)
            else if(result)resolve(result)
        })
    })
}

module.exports = {
    createProduit,
    createProduitCarac,
    deleteProduit,
    deleteProduitCarac,
    findProduitById,
    findProduitCaracByProduitId,
    getProduitsByIds,
    getAllProducts,
    insertProduitAndReturnId,
    updateProduit,
    findSellablesProduits
}