const createOne = require('../service/createProduit');

module.exports = (req, res, next) => {
    const { description } = req.body;
    const { etat } = req.body;
    const { categorie_id } = req.body;
    const { depot_id } = req.body;

    const { valeur } = req.body;
    const { caracteristiques_tech_id } = req.body;

    const product = {
        description,
        etat,
        statut: "Non valide",
        categorie_id,
        depot_id
    }

    const carac_tech = {
        valeur,
        caracteristiques_tech_id
    }

    createOne(product, carac_tech)
        .then((status) => {
            res.status(201).json({
                status
            })
        })
        .catch((err) => {
        next(err);
        });
}