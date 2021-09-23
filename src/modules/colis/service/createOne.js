const { createModel } = require('../../models/colisModel')
const checkIfNumeroExists = require('./checkIfNumeroExists');
const createNumero = require('./createNumero');
const { createColis, findIfNumeroExists } = require('../repository');

module.exports = (colis) => {
    console.log(colis)
    const dateToday = new Date()
    const date_string = dateToday.getFullYear() + "-" + (dateToday.getMonth() +1) + "-" + dateToday.getDate()
    
    var colissimoNumber = ""
    return createModel.validate(colis)
    .then(() => {
        var flag = true
        while(flag == true){
            colissimoNumber = createNumero()
            flag = findIfNumeroExists(colissimoNumber)
        }
        return createColis(colissimoNumber, date_string, colis.prix, colis.type)
    })
}