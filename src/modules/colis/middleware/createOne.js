const createOne = require('../service/createOne');

module.exports = (req, res, next) => {
    const colis = req.body;

    createOne(colis)
        .then((status) => {
            res.status(201).json({
                status
            })
        })
        .catch((err) => {
        next(err);
        });
}