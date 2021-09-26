const { findDepotById: findOneById } = require('../repository');

module.exports = (req, res, next) => {
    const { id } = req.params

    findOneById(id)
    .then((depot) => {
        res.json(depot)
    })
    .catch((err)=> {
        next(err)
    })
}