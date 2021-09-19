const createOne = require('../service/createOne');

module.exports = (req, res, next) => {
    const achat  = req.body;

    createOne(achat)
        .then((status) => {
            res.status(201).json({
                status
            })
        })
        .catch((err) => {
        next(err);
        });
}