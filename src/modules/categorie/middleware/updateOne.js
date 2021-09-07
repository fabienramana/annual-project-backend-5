const updateOne = require('../service/updateOne');

module.exports = (req, res, next) => {
    const { libellé } = req.body;
    const { id } = req.params;

    updateOne(libellé, id)
        .then((categorie) => {
            res.json({
                categorie
            })
        })
        .catch((err) => {
        next(err);
        });
}