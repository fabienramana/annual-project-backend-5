const findByProduitId = require('../service/findByProduitId');

module.exports = (req, res, next) => {
    const { id } = req.params

    findByProduitId(id)
    .then((achats) => {
        res.json({
            achats
        })
    })
    .catch((err)=> {
        next(err)
    })
}