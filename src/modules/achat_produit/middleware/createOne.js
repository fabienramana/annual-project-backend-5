const createOne = require('../service/createOne');

module.exports = async (req, res, next) => {
    const { achatId } = req.body;
    const { produitId } = req.body;

    createOne(achatId, produitId)
        .then((status) => {
            res.status(201).json({
                status
            })
        })
        .catch((err) => {
        next(err);
        });
}