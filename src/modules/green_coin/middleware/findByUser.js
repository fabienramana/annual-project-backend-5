const { findGreenCoinsByUser: findByUser } = require('../repository');
const { findUserByEmail} = require('../../user/repository')
const decodeToken = require('../../../services/decodeToken')

module.exports = (req, res, next) => {
    const user = decodeToken(req)

    findUserByEmail(user.email)
    .then((user) => findByUser(user.id))
    .then((green_coins) => {
        res.json(green_coins)
    })
    .catch((err)=> {
        next(err)
    })
}