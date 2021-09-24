const {findVentesByStatut:findByStatus} = require('../repository');

module.exports = (req, res, next) => {
    const status = "Annulé"

    findByStatus(status)
        .then((ventes) => {
            res.json(ventes)
        })
        .catch((err) => {
        next(err);
        });
}