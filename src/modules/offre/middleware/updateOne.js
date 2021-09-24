const updateOne = require('../service/updateOne');

module.exports = (req, res, next) => {
    const { statut } = req.body
    const { id } = req.params;

    if (statut == null){
        throw new Error("Le statut n'est pas défini")
    }

    updateOne(statut, id)
        .then((offre) => {
            res.json({
                offre
            })
        })
        .catch((err) => {
        next(err);
        });
}