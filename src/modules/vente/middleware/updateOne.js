const updateOne = require('../service/updateOne');

module.exports = (req, res, next) => {
    const { id } = req.params;
    const venteToUpdate = req.body;
    console.log(venteToUpdate)
    updateOne(venteToUpdate, id)
        .then((vente) => {
            res.json({
                vente
            })
        })
        .catch((err) => {
        next(err);
        });
}