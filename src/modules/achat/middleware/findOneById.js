const findOneById = require('../service/findOneById');

module.exports = (req, res, next) => {
    const { id } = req.params

    findOneById(id)
    .then((achat) => {
        res.json({
            achat
        })
    })
    .catch((err)=> {
        next(err)
    })
}