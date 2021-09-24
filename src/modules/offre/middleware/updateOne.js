const updateOne = require('../service/updateOne');

module.exports = (req, res, next) => {
    const offreToUpdate = req.body
    const { id } = req.params;

    if (statut == null){
        throw new Error("Le statut n'est pas défini")
    }

    updateOne(offreToUpdate, id)
        .then((offre) => {
            res.json({
                offre
            })
        })
        .catch((err) => {
        next(err);
        });
}