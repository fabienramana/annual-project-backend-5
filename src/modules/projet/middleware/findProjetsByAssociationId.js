const { getProjetsByAssociationId } = require('../repository');

module.exports = (req, res, next) => {
    const { id } = req.params

    getProjetsByAssociationId(id)
    .then((projets) => {
        res.json(projets)
    })
    .catch((err)=> {
        next(err)
    })
}