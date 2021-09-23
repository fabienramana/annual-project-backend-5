const {deleteDepot: deleteOne} = require('../repository');

module.exports = (req, res, next) => {
    const { id } = req.params;

    deleteOne(id)
        .then((status) => {
            res.json({
                status
            })
        })
        .catch((err) => {
        next(err);
        });
}