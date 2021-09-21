const findOneById = require('../service/findOneById');

module.exports = (req, res, next) => {
    const { id } = req.params

    findOneById(id)
    .then((vente) => {
        res.json({
            vente
        })
    })
    .catch((err)=> {
        next(err)
    })
}