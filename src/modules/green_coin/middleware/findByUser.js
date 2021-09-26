const { findGreenCoinsByUser: findByUser } = require('../repository');
const { findUserByEmail} = require('../../user/repository')

module.exports = (req, res, next) => {
    const { email } = req.params

    findUserByEmail(email)
    .then((user) => findByUser(user.id))
    .then((green_coins) => {
        res.json({
            green_coins
        })
    })
    .catch((err)=> {
        next(err)
    })
}