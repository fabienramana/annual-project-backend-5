const createOne = require('../service/createOne');

module.exports = (req, res, next) => {
    const evenement = req.body;

    createOne(evenement)
        .then((status) => {
            res.status(201).json({
                status
            })
        })
        .catch((err) => {
        next(err);
        });
}