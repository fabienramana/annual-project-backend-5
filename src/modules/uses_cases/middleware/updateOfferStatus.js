const updateOfferStatus = require('../service/updateOfferStatus');

module.exports = async (req, res, next) => {
    const { id } = req.params

    const {statut} = req.body

    updateOfferStatus(id, statut)
        .then((status) => {
            res.json({
                status
            })
        })
        .catch((err) => {
        next(err);
        });
}