const createOne = require('../service/createOne');

module.exports = (req, res, next) => {
    const { libellé } = req.body;

    createOne(libellé)
        .then((status) => {
            res.status(201).json({
                status
            })
        })
        .catch((err) => {
        next(err);
        });
}