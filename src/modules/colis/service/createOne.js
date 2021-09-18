const { createModel } = require('../../models/colisModel')
const connect =  require('../../../client/mysql');
const checkIfNumeroExists = require('./checkIfNumeroExists');
const createNumero = require('./createNumero');

module.exports = (colis) => {
    
    var colissimoNumber = ""
    return createModel.validate(colis)
    .then(() => createNumero())
    .then((numero) => {
        colissimoNumber = numero
        checkIfNumeroExists(numero)
    })
    .then(function() {
        return new Promise(function(resolve, reject) {
            var query = "";
            if(colis.type == "Achat"){
                query = `INSERT INTO colis (numero, date, prix, type, achat_id) VALUES ("${colissimoNumber}", "${colis.date}", ${colis.prix}, "${colis.type}", ${colis.achat_id})`
            }
            else{
                query = `INSERT INTO colis (numero, date, prix, type, vente_id) VALUES ("${colissimoNumber}", "${colis.date}", ${colis.prix}, "${colis.type}", ${colis.vente_id})`
            }
            connect.query(query, function(err, result){
                console.log(result)
                console.log(err)
                if(err) reject(err)
                if(result.affectedRows == 1)resolve('created')
            })
        })
    })
}