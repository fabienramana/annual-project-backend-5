const createOne = require('../service/createOne');

module.exports = (req, res, next) => {
    const { libelle } = req.body;

    createOne(libelle)
        .then((status) => {
            res.status(201).json({
                status
            })
        })
        .catch((err) => {
            console.log(err);
        next(err);
        });
}