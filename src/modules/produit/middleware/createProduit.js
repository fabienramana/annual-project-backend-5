const createOne = require('../service/createProduit');

module.exports = (req, res, next) => {
    const { titre } = req.body;
    const { description } = req.body;
    const { etat } = req.body;
    const { categorieId } = req.body;

    const { valeur } = req.body;
    const { caracteristiquesTechId } = req.body;

    const product = {
        titre,
        description,
        etat,
        statut: "Non valide",
        categorieId
    }

    const carac_tech = {
        valeur,
        caracteristiquesTechId
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