const updateOne = require('../service/updateOne');

module.exports = (req, res, next) => {
    const prixVenteToUpdate  = req.body
    const { id } = req.params;


    updateOne(prixVenteToUpdate, id)
        .then((offre) => {
            res.json({
                offre
            })
        })
        .catch((err) => {
        next(err);
        });
}