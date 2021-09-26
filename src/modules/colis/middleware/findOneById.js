const { findColisById: findOneById } = require('../repository');

module.exports = (req, res, next) => {
    const { id } = req.params

    findOneById(id)
    .then((colis) => {
        res.json(colis)
    })
    .catch((err)=> {
        next(err)
    })
}