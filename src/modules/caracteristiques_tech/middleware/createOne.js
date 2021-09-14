const createOne = require('../service/createOne');

module.exports = (req, res, next) => {
    const { libelle } = req.body;
    const { unite_id } = req.body;
    const { categorie_id } = req.body;

    createOne(libelle, unite_id, categorie_id)
        .then((status) => {
            res.status(201).json({
                status
            })
        })
        .catch((err) => {
        next(err);
        });
}