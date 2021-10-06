const {findVentesByStatut:findByStatus} = require('../repository');

module.exports = (req, res, next) => {
    const status = 'En attente de produit'
    
    findByStatus(status)
        .then((ventes) => {
            console.log(ventes);
            res.json(ventes)
        })
        .catch((err) => {
        next(err);
        });
}