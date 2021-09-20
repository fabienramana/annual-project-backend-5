const findOneById = require('../service/findOneById');

module.exports = (req, res, next) => {
    const { id } = req.params

    findOneById(id)
    .then((projet) => {
        res.json({
            projet
        })
    })
    .catch((err)=> {
        next(err)
    })
}