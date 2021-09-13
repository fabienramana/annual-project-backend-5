const createOne = require('../service/createOne');

module.exports = (req, res, next) => {
    const { libelle } = req.body;
    const { abreviation } = req.body;
    const { type } = req.body;

    createOne(libelle, abreviation, type)
        .then((status) => {
            res.status(201).json({
                status
            })
        })
        .catch((err) => {
        next(err);
        });
}