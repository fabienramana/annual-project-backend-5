const {findUniteById:findOneById} = require('../repository');

module.exports = (req, res, next) => {
    const { id } = req.params

    findOneById(id)
    .then((unite) => {
        res.json(unite)
    })
    .catch((err)=> {
        next(err)
    })
}