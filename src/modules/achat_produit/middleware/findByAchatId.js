const findByAchatId = require('../service/findByAchatId');

module.exports = (req, res, next) => {
    const { id } = req.params

    findByAchatId(id)
    .then((achats) => {
        res.json({
            achats
        })
    })
    .catch((err)=> {
        next(err)
    })
}