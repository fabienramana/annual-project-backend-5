const updateOne = require('../service/updateOne');

module.exports = (req, res, next) => {
    const caracTechs = req.body;
    const { id } = req.params;

    updateOne(caracTechs, id)
        .then((caracteristique_tech) => {
            res.json({
                caracteristique_tech
            })
        })
        .catch((err) => {
        next(err);
        });
}