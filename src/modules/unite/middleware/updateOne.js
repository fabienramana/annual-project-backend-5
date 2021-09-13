const updateOne = require('../service/updateOne');

module.exports = (req, res, next) => {
    const { id } = req.params
    const uniteToUpdate = req.body

    updateOne(uniteToUpdate, id)
    .then((unite) => {
        res.json({
            unite
        })
    })
    .catch((err)=> {
        next(err)
    })
}