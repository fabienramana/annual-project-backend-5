const createOne = require('../service/createOne');

module.exports = (req, res, next) => {
    const { achat_id } = req.body;
    const { produit_id } = req.body;

    createOne(achat_id, produit_id)
        .then((status) => {
            res.status(201).json({
                status
            })
        })
        .catch((err) => {
        next(err);
        });
}