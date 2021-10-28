const { createModel } = require('../../models/colisModel')
const createNumero = require('./createNumero');
const { createColis, findIfNumeroExists } = require('../repository');

module.exports = async (colis) => {
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