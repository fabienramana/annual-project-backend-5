const createOne = require('../service/createOne');

module.exports = (req, res, next) => {
    const green_coin = req.body;

    createOne(green_coin)
        .then((status) => {
            res.status(201).json({
                status
            })
        })
        .catch((err) => {
        next(err);
        });
}