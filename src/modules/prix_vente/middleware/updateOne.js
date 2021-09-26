const updateOne = require('../service/updateOne');

module.exports = (req, res, next) => {
    const prixVenteToUpdate  = req.body
    const { id } = req.params;


    updateOne(prixVenteToUpdate, id)
        .then((prix_vente) => {
            res.json(prix_vente)
        })
        .catch((err) => {
        next(err);
        });
}