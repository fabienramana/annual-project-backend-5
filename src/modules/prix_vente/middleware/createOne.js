const createOne = require('../service/createOne');

module.exports = (req, res, next) => {
    const prix_vente = req.body;

    createOne(prix_vente)
        .then((status) => {
            res.status(201).json({
                status
            })
        })
        .catch((err) => {
        next(err);
        });
}