const { createModel } = require('../../models/venteModel')
const { createVente:createOne } = require('../repository');
const {findUserByEmail} = require('../../user/repository')

module.exports = async (vente, email) => {
    const dateToday = new Date()
    const date_string = dateToday.getFullYear() + "-" + (dateToday.getMonth() +1) + "-" + dateToday.getDate()
    console.log('vente'+vente)
    
    return findUserByEmail(email)
    .then((user) => {
        vente.utilisateurId = user.id
        console.log(user.id)
        console.log(vente)
        return createModel.validate(vente)
    })
    .then(() => createOne(vente, date_string))
}   