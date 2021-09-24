const {findVenteById:findOneById} = require('../repository');

module.exports = (req, res, next) => {
    const { id } = req.params

    findOneById(id)
    .then((vente) => {
        res.json(vente)
    })
    .catch((err)=> {
        next(err)
    })
}