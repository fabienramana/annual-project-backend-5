const { createModel } = require('../../models/greenCoinModel')
const { createGreenCoin } = require('../repository');

module.exports = (green_coin) => {

    const dateLastDay = new Date(new Date().getFullYear(), 11, 31)
    const date_string = dateLastDay.getFullYear() + "-" + (dateLastDay.getMonth() +1) + "-" + dateLastDay.getDate()
    console.log(date_string)
    const greenCoinToInsert = {
        montant: green_coin.montant,
        dateExpiration: date_string,
        montantRestant: green_coin.montant,
        utilisateurId: green_coin.utilisateurId
    }
    console.log(greenCoinToInsert)

    return createModel.validate(green_coin)
    .then(() => createGreenCoin(greenCoinToInsert))
}