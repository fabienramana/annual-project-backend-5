const createOne = require('../service/createOne');

module.exports = (req, res, next) => {
    const vente  = req.body;

    createOne(vente)
        .then((status) => {
            res.status(201).json({
                status
            })
        })
        .catch((err) => {
        next(err);
        });
}