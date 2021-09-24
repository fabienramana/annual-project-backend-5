const { createModel } = require('../../models/venteModel')
const { createVente } = require('../repository');

module.exports = async (vente) => {
    const dateToday = new Date()
    const date_string = dateToday.getFullYear() + "-" + (dateToday.getMonth() +1) + "-" + dateToday.getDate()
    console.log('vente'+vente)
    return createModel.validate(vente)
    .then(() => createVente(vente, date_string))
}   