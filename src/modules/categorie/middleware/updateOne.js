const updateOne = require('../service/updateOne');

module.exports = (req, res, next) => {
    const { libelle } = req.body;
    const { id } = req.params;

    updateOne(libelle, id)
        .then((categorie) => {
            res.json({
                categorie
            })
        })
        .catch((err) => {
        next(err);
        });
}