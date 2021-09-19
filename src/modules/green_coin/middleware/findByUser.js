const findByUser = require('../service/findByUser');

module.exports = (req, res, next) => {
    const { id } = req.params

    findByUser(id)
    .then((green_coins) => {
        res.json({
            green_coins
        })
    })
    .catch((err)=> {
        next(err)
    })
}